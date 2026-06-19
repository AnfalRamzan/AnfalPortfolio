import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import cv from "../assets/cv/resume.pdf";

export default function Resume() {
  const { t } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [downloadError, setDownloadError] = useState(false);

  const coreSkills = [
    "React JS", "React Native", "Next.js", "Node.js", "Express.js",
    "Python", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Firestore",
    "REST APIs", "GraphQL", "Flutter", "HTML5", "CSS3", "JavaScript ES6+"
  ];

  const softSkills = [
    "Critical Thinking", "Agile Leadership", "Team Collaboration", 
    "Time Management", "Problem Solving", "Communication"
  ];

  const aiSkills = [
    "Python", "Scikit-learn", "Pandas", "NumPy",
    "Random Forest", "NLP", "OCR", "Tesseract", "Data Visualization"
  ];

  const otherSkills = [
    "Git", "GitHub", "Postman", "Figma",
    "VS Code", "Android Studio", "Flutter"
  ];

  const projects = [
    { title: "Student Performance Prediction", tech: "Python + Random Forest", desc: "85.42% accuracy in forecasting academic outcomes" },
    { title: "AI-Powered Billing System", tech: "React + Firebase", desc: "Smart invoicing with automated billing and revenue analytics" },
    { title: "Hospital Management System", tech: "React + Firebase", desc: "Comprehensive HMS for patient records, appointments, and billing" },
    { title: "E-Commerce Platform", tech: "HTML + CSS + JS", desc: "Full-featured store with JWT auth, cart, and payment gateway" },
    { title: "Smart Goal Tracking App", tech: "React Native + MongoDB", desc: "Cross-platform app for goal tracking and progress monitoring" },
    { title: "AI Document Detection", tech: "OCR + NLP + Tesseract", desc: "Intelligent system extracting and classifying text from scanned documents" },
    { title: "eVitals Healthcare App", tech: "React Native + Firebase", desc: "Cross-platform app for appointment booking and patient management" },
    { title: "TrynexTech Business Website", tech: "Next.js + React.js", desc: "Responsive corporate site with modern UI/UX and SEO" },
    { title: "Tailor Management Software", tech: "Python + MySQL", desc: "Desktop-based management for customer records and order tracking" }
  ];

  const handleDownloadCV = () => {
    try {
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
        padding: "80px 20px",
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
            padding: "clamp(20px, 4vw, 40px)",
            borderRadius: "20px",
            border: `1px solid ${t.border}`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px"
            }}
            className="resume-grid"
          >
            {/* LEFT COLUMN */}
            <div>
              <h3 style={{ color: t.text, marginBottom: "4px", fontSize: "clamp(20px, 4vw, 24px)" }}>Anfal Ramzan</h3>
              <p style={{ color: t.primary, fontWeight: "600", marginTop: "0", fontSize: "clamp(12px, 1.2vw, 13px)" }}>
                Software Engineer | Full Stack Developer | AI/ML
              </p>

              <div style={{ marginTop: "20px" }}>
                <p style={{ color: t.text, fontSize: "13px", marginBottom: "8px", fontWeight: "600" }}>
                  💻 Core Stack:
                </p>
                <p style={{ color: t.muted, fontSize: "13px", marginBottom: "4px" }}>
                  React, React Native, Next.js, Node.js, Python, Flutter
                </p>
                <p style={{ color: t.muted, fontSize: "13px", marginBottom: "4px" }}>
                  MongoDB, MySQL, PostgreSQL, Firebase, Firestore
                </p>
                <p style={{ color: t.muted, fontSize: "13px" }}>
                  Git, Docker, Postman, VS Code, Android Studio
                </p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Contact</h3>
              <div style={{ color: t.muted, lineHeight: "1.8", fontSize: "13px", wordBreak: "break-word" }}>
                <p>📞 +92 327 4931708</p>
                <p>📧 anfalramzan548@gmail.com</p>
                <p>📍 Rawalpindi, Pakistan</p>
                <p>🔗 linkedin.com/in/anfalramzan</p>
                <p>🐙 github.com/anfalramzan</p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Education</h3>
              <div style={{ color: t.muted, lineHeight: "1.8", fontSize: "13px" }}>
                <p><strong style={{ color: t.text }}>BS Software Engineering</strong></p>
                <p>Riphah International University</p>
                <p>2023 – Present</p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Work Experience</h3>
              <div style={{ color: t.muted, lineHeight: "1.6", fontSize: "13px" }}>
                <p><strong style={{ color: t.text }}>Software Engineer & Full Stack Developer</strong></p>
                <p style={{ color: t.primary, fontSize: "12px" }}>OriginITSoft Software House | Jun 2024 – Present</p>
                <p style={{ fontSize: "12px", marginTop: "4px" }}>• Design and engineer scalable web applications</p>
                <p style={{ fontSize: "12px" }}>• Consult with international clients to translate business requirements</p>

                <p style={{ marginTop: "12px" }}><strong style={{ color: t.text }}>Backend Developer</strong></p>
                <p style={{ color: t.primary, fontSize: "12px" }}>Riphah International University | 7 Months (Contract)</p>
                <p style={{ fontSize: "12px", marginTop: "4px" }}>• Developed secure university web apps</p>
                <p style={{ fontSize: "12px" }}>• Integrated mission-critical backend microservices</p>

                <p style={{ marginTop: "12px" }}><strong style={{ color: t.text }}>Frontend Developer Intern</strong></p>
                <p style={{ color: t.primary, fontSize: "12px" }}>Revive Medical Technologies</p>
                <p style={{ fontSize: "12px", marginTop: "4px" }}>• Contributed to enterprise healthcare web apps</p>
                <p style={{ fontSize: "12px" }}>• Assisted in feature deployment and debugging</p>

                <p style={{ marginTop: "12px" }}><strong style={{ color: t.text }}>Frontend Developer</strong></p>
                <p style={{ color: t.primary, fontSize: "12px" }}>iLab Solution, Sahiwal | 6 Months</p>
                <p style={{ fontSize: "12px", marginTop: "4px" }}>• Developed responsive web apps using modern frontend technologies</p>
                <p style={{ fontSize: "12px" }}>• Integrated APIs across projects</p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Languages</h3>
              <div style={{ color: t.muted, fontSize: "13px", lineHeight: "1.8" }}>
                <p>🌐 English <span style={{ color: t.textLight }}>(Professional)</span></p>
                <p>🇵🇰 Urdu <span style={{ color: t.textLight }}>(Native)</span></p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px", fontSize: "18px" }}>Certifications</h3>
              <div style={{ color: t.muted, fontSize: "12px", lineHeight: "1.8" }}>
                <p>• Web Development — Bano Qabil (2024)</p>
                <p>• React.js Development — Coursera (2024)</p>
                <p>• Node.js Backend Dev — Udemy (2024)</p>
                <p>• AI & ML Fundamentals — Simplilearn (2024)</p>
                <p>• Responsive Web Design — freeCodeCamp (2023)</p>
                <p>• Problem Solving — HackerRank (2024)</p>
              </div>

              {/* SMALLER CENTERED DOWNLOAD BUTTON */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "10px"
              }}>
                <button
                  onClick={handleDownloadCV}
                  style={{
                    padding: "8px 20px",
                    background: t.primary,
                    border: "none",
                    borderRadius: "30px",
                    color: "#fff",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "12px",
                    transition: "0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
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
              </div>
              {downloadError && (
                <p style={{ 
                  color: "#ef4444", 
                  fontSize: "11px", 
                  marginTop: "8px",
                  textAlign: "center"
                }}>
                  ⚠️ CV file not found. Please add your CV PDF to the assets/cv folder.
                </p>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h3 style={{ color: t.text, fontSize: "18px" }}>Profile</h3>
              <p style={{ color: t.textLight, lineHeight: "1.7", fontSize: "14px", marginBottom: "20px" }}>
                Passionate Software Engineer & Full Stack Developer with 2+ years of experience 
                designing and deploying scalable web and mobile applications. Skilled in modern 
                frameworks, database architecture, and AI-powered solutions with a proven track 
                record of delivering user-focused software.
              </p>

              <h3 style={{ color: t.text, marginTop: "20px", fontSize: "18px" }}>Core Technologies</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "20px" }}>
                {coreSkills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: "6px 12px", 
                      background: hoveredSkill === `core-${i}` ? t.primary : `${t.primary}10`,
                      border: `1px solid ${hoveredSkill === `core-${i}` ? t.primary : `${t.primary}20`}`,
                      borderRadius: "25px", 
                      color: hoveredSkill === `core-${i}` ? "#fff" : t.primary, 
                      fontSize: "11px",
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
                      padding: "6px 12px", 
                      background: hoveredSkill === `ai-${i}` ? t.primary : `${t.primary}10`,
                      border: `1px solid ${hoveredSkill === `ai-${i}` ? t.primary : `${t.primary}20`}`,
                      borderRadius: "25px", 
                      color: hoveredSkill === `ai-${i}` ? "#fff" : t.primary, 
                      fontSize: "11px",
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
                      padding: "6px 12px", 
                      background: hoveredSkill === `soft-${i}` ? t.primary : `${t.primary}10`,
                      border: `1px solid ${hoveredSkill === `soft-${i}` ? t.primary : `${t.primary}20`}`,
                      borderRadius: "25px", 
                      color: hoveredSkill === `soft-${i}` ? "#fff" : t.primary, 
                      fontSize: "11px",
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

              <h3 style={{ color: t.text, marginTop: "15px", fontSize: "18px" }}>Tools & Platforms</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "25px" }}>
                {otherSkills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: "6px 12px", 
                      background: hoveredSkill === `other-${i}` ? t.primary : `${t.primary}10`,
                      border: `1px solid ${hoveredSkill === `other-${i}` ? t.primary : `${t.primary}20`}`,
                      borderRadius: "25px", 
                      color: hoveredSkill === `other-${i}` ? "#fff" : t.primary, 
                      fontSize: "11px",
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

              <h3 style={{ color: t.text, fontSize: "18px" }}>Key Projects (20+ Delivered)</h3>
              <div style={{ 
                color: t.muted, 
                lineHeight: "1.6", 
                fontSize: "13px", 
                maxHeight: "350px", 
                overflowY: "auto", 
                paddingRight: "10px",
                scrollbarWidth: "thin"
              }}>
                {projects.map((proj, idx) => (
                  <div key={idx} style={{ marginBottom: "12px", paddingBottom: "12px", borderBottom: idx < projects.length - 1 ? `1px solid ${t.border}` : "none" }}>
                    <strong style={{ color: t.primary }}>{proj.title}</strong>
                    <span style={{ fontSize: "10px", color: t.textLight, marginLeft: "8px" }}>• {proj.tech}</span>
                    <p style={{ margin: "4px 0 0 0", fontSize: "11px", color: t.textLight }}>
                      {proj.desc}
                    </p>
                  </div>
                ))}
                <p style={{ color: t.primary, fontSize: "12px", textAlign: "center", marginTop: "10px", fontWeight: "600" }}>
                  🚀 20+ Production-Ready Solutions Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Scrollbar styling */
        .resume-grid div:last-child div:last-child::-webkit-scrollbar {
          width: 4px;
        }

        .resume-grid div:last-child div:last-child::-webkit-scrollbar-track {
          background: ${t.border}40;
          border-radius: 10px;
        }

        .resume-grid div:last-child div:last-child::-webkit-scrollbar-thumb {
          background: ${t.primary}60;
          border-radius: 10px;
        }

        .resume-grid div:last-child div:last-child::-webkit-scrollbar-thumb:hover {
          background: ${t.primary};
        }
      `}</style>
    </section>
  );
}