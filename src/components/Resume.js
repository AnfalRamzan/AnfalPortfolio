import { useTheme } from "../context/ThemeContext";

export default function Resume() {
  const { t } = useTheme();

  const coreSkills = [
    "React JS", "React Native", "Flutter", "Node.js", "Express.js",
    "MongoDB", "MySQL", "Firebase", "REST APIs", "GraphQL"
  ];

  const softSkills = [
    "Project Management", "Leadership", "Time Management",
    "Team Collaboration", "Problem Solving", "Communication"
  ];

  const otherSkills = [
    "UI/UX Design (Figma)", "Git & GitHub", "CI/CD Basics",
    "Jest (Testing)", "Docker (Basic)", "Agile Methodology"
  ];

  // ✅ FIXED: Only the projects you listed, with descriptions that match the name
  const projects = [
    {
      title: "Smart Goal Tracking App",
      tech: "React Native + MongoDB",
      desc: "Cross-platform app to set, track, and achieve personal goals with real-time progress sync and reminders."
    },
    {
      title: "e-Vitals App",
      tech: "React Native",
      desc: "Medical app for recording and monitoring patient vitals (heart rate, BP, temperature) with exportable reports."
    },
    {
      title: "Student Portal",
      tech: "MERN Stack",
      desc: "Full-stack platform for course registration, grade viewing, attendance tracking, and faculty communication."
    },
    {
      title: "Hospital Management System",
      tech: "Firebase + React",
      desc: "Web app for patient records, appointment scheduling, billing, and prescription management."
    },
    {
      title: "Portfolio Website",
      tech: "React JS + HTML/CSS",
      desc: "Personal developer portfolio showcasing projects, skills, and contact information with smooth UI."
    },
    {
      title: "Library Management System",
      tech: "React.js + HTML/CSS",
      desc: "System to manage book inventory, member records, issue/return tracking, and fine calculation."
    }
  ];

  return (
    <section
      id="resume"
      style={{
        padding: "120px 20px",
        background: t.bg,
        display: "flex",
        justifyContent: "center",
        transition: "0.3s"
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        <h2 style={{ color: t.text, fontSize: "clamp(28px, 5vw, 34px)", marginBottom: "30px" }}>
          Resume
        </h2>

        <div
          style={{
            background: t.card,
            padding: "clamp(20px, 4vw, 40px)",
            borderRadius: "14px",
            boxShadow: `0 0 25px ${t.shadow}`,
            border: `1px solid ${t.border}`
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px"
            }}
          >
            {/* LEFT COLUMN */}
            <div>
              <h3 style={{ color: t.text, marginBottom: "4px" }}>ANFAL RAMZAN</h3>
              <p style={{ color: t.primary, fontWeight: "500", marginTop: "0" }}>
                FULL STACK DEVELOPER | REACT NATIVE | FLUTTER
              </p>

              <div style={{ marginTop: "15px" }}>
                <p style={{ color: t.muted, fontSize: "13px", marginBottom: "6px" }}>
                  <strong>Core Stack:</strong> React, React Native, Flutter, Node.js
                </p>
                <p style={{ color: t.muted, fontSize: "13px", marginBottom: "6px" }}>
                  <strong>Databases:</strong> MongoDB, MySQL, Firebase
                </p>
                <p style={{ color: t.muted, fontSize: "13px" }}>
                  <strong>Tools:</strong> Git, Figma, Postman, VS Code
                </p>
              </div>

              <h3 style={{ color: t.text, marginTop: "25px" }}>Contact</h3>
              <p style={{ color: t.muted, lineHeight: "1.8" }}>
                📞 +92 327 4931708 <br />
                📧 anfalramzan548@gmail.com <br />
                📍 Rawalpindi, Pakistan <br />
                🔗 linkedin.com/in/anfal-ramzan <br />
                🐙 github.com/AnfalRamzan
              </p>

              <h3 style={{ color: t.text, marginTop: "25px" }}>Education</h3>
              <p style={{ color: t.muted, lineHeight: "1.8" }}>
                <b>Riphah International University</b><br />
                BS Software Engineering (2023 – Present)<br />
                <span style={{ fontSize: "12px" }}>CGPA: 3.6/4.0</span>
              </p>
              <p style={{ color: t.muted, lineHeight: "1.8" }}>
                <b>IDEAL Institute 4GD</b><br />
                FSc Pre-Engineering (2020 – 2023)
              </p>

              <h3 style={{ color: t.text, marginTop: "25px" }}>Languages</h3>
              <p style={{ color: t.muted }}>
                English (Fluent)<br />
                Urdu (Native)
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h3 style={{ color: t.text }}>Profile</h3>
              <p style={{ color: t.muted, lineHeight: "1.7" }}>
                Passionate Software Engineering student with hands‑on experience in building
                scalable mobile and web applications. Strong foundation in OOP, DSA, and modern
                frontend/backend frameworks. Eager to deliver high‑quality, user‑centric solutions.
              </p>

              <h3 style={{ color: t.text, marginTop: "25px" }}>Technical Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "20px" }}>
                {coreSkills.map((skill, i) => (
                  <span key={i} style={{ padding: "6px 12px", background: t.card, border: `1px solid ${t.border}`, borderRadius: "20px", color: t.muted, fontSize: "12px" }}>
                    {skill}
                  </span>
                ))}
              </div>

              <h3 style={{ color: t.text }}>Soft Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "20px" }}>
                {softSkills.map((skill, i) => (
                  <span key={i} style={{ padding: "6px 12px", background: t.card, border: `1px solid ${t.border}`, borderRadius: "20px", color: t.muted, fontSize: "12px" }}>
                    {skill}
                  </span>
                ))}
              </div>

              <h3 style={{ color: t.text }}>Other Expertise</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px", marginBottom: "25px" }}>
                {otherSkills.map((skill, i) => (
                  <span key={i} style={{ padding: "6px 12px", background: t.card, border: `1px solid ${t.border}`, borderRadius: "20px", color: t.muted, fontSize: "12px" }}>
                    {skill}
                  </span>
                ))}
              </div>

              <h3 style={{ color: t.text }}>Projects & Portfolio Websites</h3>
              <div style={{ color: t.muted, lineHeight: "1.6", fontSize: "14px" }}>
                {projects.map((proj, idx) => (
                  <div key={idx} style={{ marginBottom: "16px" }}>
                    <strong>{proj.title}</strong> <span style={{ fontSize: "12px" }}>({proj.tech})</span>
                    <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: t.muted }}>
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}