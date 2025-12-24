import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {
  const form = useRef();

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
      })
      .catch(() => {
          alert("Failed to send message. Try again.");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Let's Talk</h1>

        <p className="contact-subtitle">
          Book a free strategy call or send me a message directly.
        </p>

        <div className="contact-grid">

          {/* LEFT INFO BOX */}
          <div className="contact-info">
            <h2>Book a Free Call</h2>
            <p>30-minute strategy session to discuss your project or hire me.</p>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email Me</h3>
                <p>sonalirpatil361@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <p>Pune, Maharashtra</p>
              </div>
            </div>

            
          </div>

          {/* RIGHT CONTACT FORM */}
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}
