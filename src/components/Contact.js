import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { t } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nz7ofgi";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_kekxdbi";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "sx5w7xhY7oiqc8nrF";

  const sanitizeInput = (input) => {
    return input.replace(/[<>]/g, '').trim();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (feedback.text) setFeedback({ type: "", text: "" });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedMessage = sanitizeInput(formData.message);
    
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      setFeedback({ type: "error", text: "Please fill in all fields." });
      return;
    }
    
    if (!validateEmail(sanitizedEmail)) {
      setFeedback({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    
    setIsSending(true);
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: sanitizedName,
      from_email: sanitizedEmail,
      message: sanitizedMessage,
      to_name: "Anfal",
    }, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setFeedback({ type: "success", text: "✓ Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setFeedback({ type: "error", text: "✗ Failed to send. Please try again or email me directly." });
      })
      .finally(() => setIsSending(false));
  };

  const contactMethods = [
    { icon: "📧", label: "Email", value: "anfalramzan548@gmail.com", link: "mailto:anfalramzan548@gmail.com" },
    { icon: "💻", label: "GitHub", value: "/AnfalRamzan", link: "https://github.com/AnfalRamzan" },
    { icon: "🔗", label: "LinkedIn", value: "in/anfal-ramzan", link: "https://linkedin.com/in/anfal-ramzan-65b302362" },
  ];

  return (
    <section id="contact" style={{ padding: "80px 20px", background: t.bg }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ 
            fontSize: "clamp(28px, 6vw, 42px)", 
            marginBottom: "12px", 
            fontWeight: "700",
            color: t.text
          }}>
            Let's Work Together
          </h2>
          <p style={{ color: t.textLight, maxWidth: "600px", margin: "0 auto", fontSize: "15px", padding: "0 16px" }}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          
          {/* Contact Info - Left Side */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div style={{ 
              background: t.card, 
              borderRadius: "24px", 
              padding: "clamp(20px, 4vw, 30px)", 
              border: `1px solid ${t.border}`,
              height: "100%"
            }}>
              <h3 style={{ color: t.text, marginBottom: "20px", fontSize: "clamp(18px, 4vw, 22px)" }}>Get in Touch</h3>
              
              {contactMethods.map((method, idx) => (
                <a 
                  key={idx} 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: "none", display: "block", marginBottom: "16px" }}
                >
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "15px", 
                    padding: "12px", 
                    borderRadius: "16px", 
                    background: t.bg, 
                    border: `1px solid ${t.border}`, 
                    transition: "0.2s" 
                  }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.borderColor = t.primary; 
                      e.currentTarget.style.transform = "translateX(5px)"; 
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.borderColor = t.border; 
                      e.currentTarget.style.transform = "translateX(0)"; 
                    }}
                  >
                    <span style={{ fontSize: "24px" }}>{method.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: t.textLight, fontSize: "11px", marginBottom: "2px" }}>{method.label}</p>
                      <p style={{ color: t.text, fontWeight: "500", fontSize: "13px", wordBreak: "break-word" }}>{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <form 
              onSubmit={sendEmail} 
              style={{ 
                background: t.card, 
                padding: "clamp(20px, 4vw, 30px)", 
                borderRadius: "24px", 
                border: `1px solid ${t.border}`,
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <h3 style={{ color: t.text, marginBottom: "20px", fontSize: "clamp(18px, 4vw, 22px)" }}>Send a Message</h3>
              
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px 14px", 
                  marginBottom: "14px", 
                  background: t.bg, 
                  border: `1px solid ${t.border}`, 
                  borderRadius: "12px", 
                  color: t.text, 
                  outline: "none",
                  fontSize: "14px",
                  transition: "0.2s"
                }}
                onFocus={(e) => e.target.style.borderColor = t.primary}
                onBlur={(e) => e.target.style.borderColor = t.border}
              />
              
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px 14px", 
                  marginBottom: "14px", 
                  background: t.bg, 
                  border: `1px solid ${t.border}`, 
                  borderRadius: "12px", 
                  color: t.text, 
                  outline: "none",
                  fontSize: "14px",
                  transition: "0.2s"
                }}
                onFocus={(e) => e.target.style.borderColor = t.primary}
                onBlur={(e) => e.target.style.borderColor = t.border}
              />
              
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px 14px", 
                  marginBottom: "18px", 
                  background: t.bg, 
                  border: `1px solid ${t.border}`, 
                  borderRadius: "12px", 
                  color: t.text, 
                  resize: "vertical", 
                  outline: "none",
                  fontSize: "14px",
                  fontFamily: "inherit",
                  transition: "0.2s"
                }}
                onFocus={(e) => e.target.style.borderColor = t.primary}
                onBlur={(e) => e.target.style.borderColor = t.border}
              />
              
              {feedback.text && (
                <p style={{ 
                  color: feedback.type === "success" ? "#22c55e" : "#ef4444", 
                  fontSize: "12px", 
                  textAlign: "center", 
                  marginBottom: "14px",
                  padding: "8px",
                  borderRadius: "10px",
                  background: feedback.type === "success" ? "#22c55e10" : "#ef444410"
                }}>
                  {feedback.text}
                </p>
              )}
              
              {/* Button Centered */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                <button 
                  type="submit" 
                  disabled={isSending}
                  style={{ 
                    padding: "12px 32px", 
                    background: t.primary, 
                    border: "none", 
                    borderRadius: "40px", 
                    fontWeight: "600", 
                    color: "#fff", 
                    cursor: isSending ? "not-allowed" : "pointer", 
                    transition: "0.2s",
                    opacity: isSending ? 0.7 : 1,
                    fontSize: "14px",
                    minWidth: "160px"
                  }}
                  onMouseEnter={(e) => {
                    if (!isSending) {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = `0 5px 15px ${t.primary}40`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSending) {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }
                  }}
                >
                  {isSending ? "📤 Sending..." : "📩 Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}