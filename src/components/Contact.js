import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";
import emailIcon from "../assets/images/gmail.png";
import phoneIcon from "../assets/images/call.png";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";

export default function Contact() {
  const { t } = useTheme();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  // Use environment variables (create .env file with these)
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nz7ofgi";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_kekxdbi";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "sx5w7xhY7oiqc8nrF";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ type: "error", text: "Please fill in all fields." });
      return;
    }
    setIsSending(true);
    setFeedback({ type: "", text: "" });

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Anfal",
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFeedback({ type: "success", text: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setFeedback({ type: "error", text: "Failed to send. Please try again later." });
      })
      .finally(() => setIsSending(false));
  };

  const infoBox = { display: "flex", gap: "15px", alignItems: "center" };
  const iconImg = { width: "38px", height: "38px", objectFit: "contain", background: t.card, padding: "8px", borderRadius: "10px", border: `1px solid ${t.border}` };
  const label = { color: t.muted, margin: 0, fontSize: "13px" };
  const link = { color: t.primary, textDecoration: "none", fontSize: "14px" };
  const fieldLabel = { color: t.muted, fontSize: "13px", marginBottom: "6px", marginTop: "12px" };
  const inputStyle = { width: "100%", padding: "12px", marginBottom: "10px", background: "transparent", border: `1px solid ${t.border}`, borderRadius: "10px", color: t.text, outline: "none", fontSize: "14px", transition: "0.3s" };
  const buttonStyle = { width: "160px", padding: "9px 12px", marginTop: "15px", background: t.primary, border: "none", borderRadius: "8px", fontWeight: "600", cursor: isSending ? "not-allowed" : "pointer", color: "#000", fontSize: "13px", display: "block", marginLeft: "auto", marginRight: "auto", opacity: isSending ? 0.7 : 1 };

  return (
    <section id="contact" style={{ padding: "120px 20px", background: t.bg, color: t.text, display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: "50px", maxWidth: "1100px", width: "100%", flexWrap: "wrap" }}>
        {/* LEFT SIDE */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 42px)", color: t.primary, marginBottom: "10px" }}>Hire Me</h1>
          <p style={{ color: t.muted, lineHeight: "1.6", marginBottom: "30px" }}>
            Have a question, project idea, or just want to connect? <br />
            I’m always open to new opportunities, collaborations, and meaningful conversations.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={infoBox}>
              <img src={emailIcon} style={iconImg} alt="email" />
              <div>
                <h4 style={label}>Email</h4>
                <a style={link} href="mailto:anfalramzan548@gmail.com">anfalramzan548@gmail.com</a>
              </div>
            </div>
            <div style={infoBox}>
              <img src={phoneIcon} style={iconImg} alt="phone" />
              <div>
                <h4 style={label}>Phone</h4>
                <a style={link} href="tel:+923274931708">+92 327 4931708</a>
              </div>
            </div>
            <div style={infoBox}>
              <img src={githubIcon} style={iconImg} alt="github" />
              <div>
                <h4 style={label}>GitHub</h4>
                <a style={link} href="https://github.com/AnfalRamzan" target="_blank" rel="noopener noreferrer">View Profile</a>
              </div>
            </div>
            <div style={infoBox}>
              <img src={linkedinIcon} style={iconImg} alt="linkedin" />
              <div>
                <h4 style={label}>LinkedIn</h4>
                <a style={link} href="https://www.linkedin.com/in/anfal-ramzan-65b302362" target="_blank" rel="noopener noreferrer">View Profile</a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div style={{ flex: 1, minWidth: "280px", background: t.card, padding: "30px", borderRadius: "18px", border: `1px solid ${t.border}`, boxShadow: `0 0 15px ${t.shadow}` }}>
          <form onSubmit={sendEmail}>
            <h4 style={fieldLabel}>Full Name</h4>
            <input type="text" name="name" placeholder="Enter your full name" style={inputStyle} value={formData.name} onChange={handleChange} required />
            <h4 style={fieldLabel}>Email Address</h4>
            <input type="email" name="email" placeholder="your.email@gmail.com" style={inputStyle} value={formData.email} onChange={handleChange} required />
            <h4 style={fieldLabel}>Message</h4>
            <textarea name="message" placeholder="How can I help you today?" style={{ ...inputStyle, height: "130px", resize: "none" }} value={formData.message} onChange={handleChange} required />
            {feedback.text && <p style={{ textAlign: "center", fontSize: "12px", marginTop: "10px", color: feedback.type === "success" ? "#22c55e" : "#ef4444" }}>{feedback.text}</p>}
            <button type="submit" style={buttonStyle} disabled={isSending}>{isSending ? "Sending..." : "Send Message"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}