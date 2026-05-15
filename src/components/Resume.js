import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
// CV import - same path as Hero.js
import cv from "../assets/cv/resume.pdf";

export default function Resume() {
  const { t } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [downloadError, setDownloadError] = useState(false);

  const coreSkills = [
    "React JS", "React Native", "Next.js", "Node.js", "Express.js",
    "Python", "MongoDB", "MySQL", "Firebase", "REST APIs", "GraphQL"
  ];

  const softSkills = [
    "Project Management", "Time Management", "Team Collaboration", 
    "Problem Solving", "Communication", "Critical Thinking", "Leadership"
  ];

  const aiSkills = [
    "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch",
    "Scikit-learn", "Pandas", "NumPy", "Data Visualization",
    "NLP", "LangChain", "Streamlit"
  ];

  const otherSkills = [
    "UI/UX Design", "Git & GitHub", "Docker", "AWS",
    "Postman", "Figma", "Vercel", "Netlify"
  ];

  const projects = [
    {
      title: "Student Performance Prediction",
      tech: "Machine Learning + Python",
      desc: "AI system predicting academic performance with 85.42% accuracy"
    },
    {
      title: "AI Document Detection System",
      tech: "OCR + NLP",
      desc: "Document classification and text extraction using Tesseract OCR"
    },
    {
      title: "AI-Powered Billing System",
      tech: "React + Firebase",
      desc: "Smart invoicing system with payment tracking and forecasting"
    },
    {
      title: "Smart Goal Tracking App",
      tech: "React Native + MongoDB",
      desc: "Cross-platform app for goal setting and progress tracking"
    },
    {
      title: "e-Vitals App",
      tech: "React Native",
      desc: "Medical app for patient vitals monitoring"
    },
    {
      title: "Student Portal",
      tech: "MERN Stack",
      desc: "Full-stack platform for courses and grades"
    },
    {
      title: "Hospital Management System",
      tech: "Firebase + React",
      desc: "Complete HMS for patient records and appointments"
    },
    {
      title: "Library Management System",
      tech: "React.js",
      desc: "Digital library platform for book inventory"
    },
    {
      title: "E-Commerce Platform",
      tech: "MERN Stack",
      desc: "Full-featured online store with payment integration"
    },
    {
      title: "Chat Application",
      tech: "Socket.io + React",
      desc: "Real-time messaging app with group chats and file sharing"
    },
    {
      title: "Task Management System",
      tech: "React + Node.js",
      desc: "Project management tool with task assignment and tracking"
    },
    {
      title: "Portfolio CMS",
      tech: "Next.js + MongoDB",
      desc: "Content management system for developers"
    }
  ];

  const handleDownloadCV = () => {
    try {
      // Create a link element
      const link = document.createElement('a');
      link.href = cv;
      link.download = 'Anfal_Ramzan_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadError(false);
    } catch (error) {
      setDownloadError(true);
      setTimeout(() => setDownloadError(false), 3000);
    }
  };

  return (
    <section
      id="resume"
      style={{
        padding: "100px 20px",
        background: t.bg,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        
        <h2 style={{ 
          color: t.text, 
          fontSize: "clamp(28px, 5vw, 34px)", 
          marginBottom: "30px",
          fontWeight: "700"
        }}>
          Resume
        </h2>

        <div
          style={{
            background: t.card,
            padding: "clamp(25px, 4vw, 40px)",
            borderRadius: "20px",
            border: `1px solid ${t.border}`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px"
            }}
          >
            {/* LEFT COLUMN */}
            <div>
              <h3 style={{ color: t.text, marginBottom: "4px", fontSize: "24px" }}>Anfal Ramzan</h3>
              <p style={{ color: t.primary, fontWeight: "600", marginTop: "0", fontSize: "14px" }}>
                Software Engineer | Full Stack Developer | AI/ML
              </p>

              <div style={{ marginTop: "20px" }}>
                <p style={{ color: t.text, fontSize: "13px", marginBottom: "8px", fontWeight: "600" }}>
                  💻 Core Stack:
                </p>
                <p style={{ color: t.muted, fontSize: "13px", marginBottom: "6px" }}>
                  React, React Native, Next.js, Node.js, Python
                </p>
                <p style={{ color: t.muted, fontSize: "13px", marginBottom: "6px" }}>
                  MongoDB, MySQL, Firebase, PostgreSQL
                </p>
                <p style={{ color: t.muted, fontSize: "13px" }}>
                  Git, Docker, AWS, Postman, VS Code
                </p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Contact</h3>
              <div style={{ color: t.muted, lineHeight: "1.8", fontSize: "13px" }}>
                <p>📞 +92 327 4931708</p>
                <p>📧 anfalramzan548@gmail.com</p>
                <p>📍 Rawalpindi, Pakistan</p>
                <p>🔗 linkedin.com/in/anfal-ramzan</p>
                <p>🐙 github.com/AnfalRamzan</p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Education</h3>
              <div style={{ color: t.muted, lineHeight: "1.8", fontSize: "13px" }}>
                <p><strong style={{ color: t.text }}>BS Software Engineering</strong></p>
                <p>Riphah International University</p>
                <p>2023 – 2025 | CGPA: 3.6/4.0</p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Experience</h3>
              <div style={{ color: t.muted, lineHeight: "1.8", fontSize: "13px" }}>
                <p><strong style={{ color: t.text }}>Full Stack Developer</strong></p>
                <p>Freelance | 2020 - Present</p>
                <p style={{ fontSize: "12px", marginTop: "4px" }}>40+ projects delivered with 100% satisfaction</p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Languages</h3>
              <div style={{ color: t.muted, fontSize: "13px", lineHeight: "1.8" }}>
                <p>🌐 English <span style={{ color: t.textLight }}>(Professional)</span></p>
                <p>🇵🇰 Urdu <span style={{ color: t.textLight }}>(Native)</span></p>
              </div>

              {/* Download CV Button */}
              <div style={{ 
                display: "flex", 
                flexDirection: "column",
                alignItems: "center", 
                marginTop: "30px",
                marginBottom: "10px"
              }}>
                <button
                  onClick={handleDownloadCV}
                  style={{
                    padding: "12px 28px",
                    background: t.primary,
                    border: "none",
                    borderRadius: "40px",
                    color: "#fff",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = `0 5px 15px ${t.primary}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <span>📄</span> Download CV
                </button>
                {downloadError && (
                  <p style={{ 
                    color: "#ef4444", 
                    fontSize: "12px", 
                    marginTop: "10px",
                    textAlign: "center"
                  }}>
                    ⚠️ CV file not found. Please add your CV PDF to the assets/cv folder.
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h3 style={{ color: t.text, fontSize: "18px" }}>Profile</h3>
              <p style={{ color: t.textLight, lineHeight: "1.7", fontSize: "14px", marginBottom: "20px" }}>
                Software Engineer with 5+ years of experience in Full Stack Development and AI/ML. 
                Built 40+ production-ready applications with 100% client satisfaction.
              </p>

              <h3 style={{ color: t.text, marginTop: "20px", fontSize: "18px" }}>Core Technologies</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "20px" }}>
                {coreSkills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: "6px 14px", 
                      background: hoveredSkill === `core-${i}` ? t.primary : `${t.primary}10`,
                      border: `1px solid ${hoveredSkill === `core-${i}` ? t.primary : `${t.primary}20`}`,
                      borderRadius: "25px", 
                      color: hoveredSkill === `core-${i}` ? "#fff" : t.primary, 
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "0.2s"
                    }}
                    onMouseEnter={() => setHoveredSkill(`core-${i}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 style={{ color: t.text, marginTop: "15px", fontSize: "18px" }}>AI/ML Expertise</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "20px" }}>
                {aiSkills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: "6px 14px", 
                      background: hoveredSkill === `ai-${i}` ? t.primary : `${t.primary}10`,
                      border: `1px solid ${hoveredSkill === `ai-${i}` ? t.primary : `${t.primary}20`}`,
                      borderRadius: "25px", 
                      color: hoveredSkill === `ai-${i}` ? "#fff" : t.primary, 
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "0.2s"
                    }}
                    onMouseEnter={() => setHoveredSkill(`ai-${i}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 style={{ color: t.text, marginTop: "15px", fontSize: "18px" }}>Soft Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "20px" }}>
                {softSkills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: "6px 14px", 
                      background: hoveredSkill === `soft-${i}` ? t.primary : `${t.primary}10`,
                      border: `1px solid ${hoveredSkill === `soft-${i}` ? t.primary : `${t.primary}20`}`,
                      borderRadius: "25px", 
                      color: hoveredSkill === `soft-${i}` ? "#fff" : t.primary, 
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "0.2s"
                    }}
                    onMouseEnter={() => setHoveredSkill(`soft-${i}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 style={{ color: t.text, marginTop: "15px", fontSize: "18px" }}>Tools</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "25px" }}>
                {otherSkills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: "6px 14px", 
                      background: hoveredSkill === `other-${i}` ? t.primary : `${t.primary}10`,
                      border: `1px solid ${hoveredSkill === `other-${i}` ? t.primary : `${t.primary}20`}`,
                      borderRadius: "25px", 
                      color: hoveredSkill === `other-${i}` ? "#fff" : t.primary, 
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "0.2s"
                    }}
                    onMouseEnter={() => setHoveredSkill(`other-${i}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 style={{ color: t.text, fontSize: "18px" }}>Key Projects (40+)</h3>
              <div style={{ color: t.muted, lineHeight: "1.6", fontSize: "13px", maxHeight: "400px", overflowY: "auto", paddingRight: "10px" }}>
                {projects.map((proj, idx) => (
                  <div key={idx} style={{ marginBottom: "14px" }}>
                    <strong style={{ color: t.primary }}>{proj.title}</strong>
                    <span style={{ fontSize: "11px", color: t.textLight, marginLeft: "8px" }}>({proj.tech})</span>
                    <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: t.textLight }}>
                      {proj.desc}
                    </p>
                  </div>
                ))}
                <p style={{ color: t.primary, fontSize: "12px", textAlign: "center", marginTop: "10px" }}>
                  + 28 more projects delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}