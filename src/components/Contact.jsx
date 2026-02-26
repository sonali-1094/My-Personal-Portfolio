import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { trackEvent } from "../utils/analytics";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const MIN_SUBMIT_INTERVAL_MS = 20_000;
const DIRECT_CONTACT_EMAIL = "sonalirpatil361@gmail.com";

export default function Contact() {
  const form = useRef();
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [fallbackMailtoHref, setFallbackMailtoHref] = useState("");
  const [lastSubmitAt, setLastSubmitAt] = useState(0);
  const [botField, setBotField] = useState("");

  const isEmailConfigured = Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
  );

  const buildMailtoHref = () => {
    const formData = form.current ? new FormData(form.current) : null;
    const name = formData?.get("user_name")?.toString().trim() || "";
    const email = formData?.get("user_email")?.toString().trim() || "";
    const message = formData?.get("message")?.toString().trim() || "";
    const subject = `Portfolio inquiry${name ? ` from ${name}` : ""}`;
    const body = [`Name: ${name || "-"}`, `Email: ${email || "-"}`, "", message || ""]
      .join("\n")
      .trim();

    return `mailto:${DIRECT_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isEmailConfigured) {
      setStatusType("error");
      setStatusMessage("Contact form is temporarily unavailable. Please email me directly.");
      setFallbackMailtoHref(buildMailtoHref());
      return;
    }

    if (botField.trim()) {
      setStatusType("success");
      setStatusMessage("Message sent successfully.");
      return;
    }

    const now = Date.now();
    if (now - lastSubmitAt < MIN_SUBMIT_INTERVAL_MS) {
      const remainingSeconds = Math.ceil(
        (MIN_SUBMIT_INTERVAL_MS - (now - lastSubmitAt)) / 1000
      );
      setStatusType("error");
      setStatusMessage(`Please wait ${remainingSeconds}s before sending again.`);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("");
    setFallbackMailtoHref("");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        form.current.reset();
        setBotField("");
        setLastSubmitAt(now);
        setSubmitted(true);
        setStatusType("success");
        setStatusMessage("Message sent successfully.");
        trackEvent("contact_submit_success", { source: "contact_form" });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        const errorReason = error?.text || error?.message || "Unknown error";
        const isAccountError = /account not found/i.test(errorReason);
        console.error("EmailJS send error:", error);
        setStatusType("error");
        setStatusMessage(
          isAccountError
            ? "Automatic form sending is unavailable right now. Please use the email option below."
            : `Failed to send message: ${errorReason}. Please use the email option below.`
        );
        setFallbackMailtoHref(buildMailtoHref());
        trackEvent("contact_submit_error", {
          source: "contact_form",
          reason: errorReason,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1 className="contact-title fade-in-down">Let's Talk</h1>

        <p className="contact-subtitle fade-in-up">
          Book a free strategy call or send me a message directly.
        </p>

        <div className="contact-grid">

          {/* LEFT INFO BOX */}
          <div className="contact-info fade-in-left">
            <h2>Book a Free Call</h2>
            <p>30-minute strategy session to discuss your project or hire me.</p>

            <div className="info-item slide-in">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email Me</h3>
                <p>sonalirpatil361@gmail.com</p>
              </div>
            </div>

            <div className="info-item slide-in" style={{animationDelay: "0.1s"}}>
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <p>Pune, Maharashtra</p>
              </div>
            </div>

          </div>

          {/* RIGHT CONTACT FORM */}
          <form className={`contact-form fade-in-right ${submitted ? "success" : ""}`} ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <input 
                id="contact-name"
                type="text" 
                name="user_name" 
                placeholder="Your Name" 
                aria-label="Your Name"
                autoComplete="name"
                required 
                className={focusedField === "name" ? "focused" : ""}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email" className="sr-only">Your Email</label>
              <input 
                id="contact-email"
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                aria-label="Your Email"
                autoComplete="email"
                required 
                className={focusedField === "email" ? "focused" : ""}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message" className="sr-only">Your Message</label>
              <textarea 
                id="contact-message"
                name="message" 
                placeholder="Your Message" 
                aria-label="Your Message"
                rows="5" 
                required
                className={focusedField === "message" ? "focused" : ""}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              ></textarea>
            </div>
            <div className="form-group honeypot-group" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                type="text"
                name="company"
                autoComplete="off"
                tabIndex={-1}
                value={botField}
                onChange={(event) => setBotField(event.target.value)}
              />
            </div>
            <button type="submit" className="contact-btn" disabled={isSubmitting}>
              <span className="btn-text">{isSubmitting ? "Sending..." : "Send Message"}</span>
              <span className="btn-icon">→</span>
            </button>
            {statusMessage && (
              <p role="status" aria-live="polite" className={`contact-status ${statusType}`}>
                {statusMessage}
              </p>
            )}
            {statusType === "error" && fallbackMailtoHref && (
              <a className="contact-btn contact-btn-secondary" href={fallbackMailtoHref}>
                Open Email App
              </a>
            )}
          </form>

        </div>

        <div className="connect-strip fade-in-up">
          <h3>Connect Me</h3>
          <div className="connect-icons">
            <a
              href="https://www.linkedin.com/in/sonali-patil-190257288"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              onClick={() => trackEvent("social_click", { platform: "linkedin" })}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/sonali-1094"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              onClick={() => trackEvent("social_click", { platform: "github" })}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:sonalirpatil361@gmail.com"
              aria-label="Email Sonali Patil"
              onClick={() => trackEvent("social_click", { platform: "email" })}
            >
              <FaEnvelope />
              <span>Gmail</span>
            </a>
            <a
              href="https://x.com/SonaliPatil018"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              onClick={() => trackEvent("social_click", { platform: "twitter" })}
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
