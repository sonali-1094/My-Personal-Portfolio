import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {
  const form = useRef();
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vxmtrin",        // your service ID
        "template_4dna9rn",       // your template ID
        form.current,
        "_WS76BnBtotxXRJxW"       // your public key
      )
      .then(() => {
          alert("Message Sent Successfully!");
          form.current.reset();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(() => {
          alert("Failed to send message. Try again.");
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
              <input 
                type="text" 
                name="user_name" 
                placeholder="Your Name" 
                required 
                className={focusedField === "name" ? "focused" : ""}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                required 
                className={focusedField === "email" ? "focused" : ""}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                required
                className={focusedField === "message" ? "focused" : ""}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">
              <span className="btn-text">Send Message</span>
              <span className="btn-icon">→</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
