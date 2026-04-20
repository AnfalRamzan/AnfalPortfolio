import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { t } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    "React Native",
    "JavaScript",
    "React JS",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "OOP",
    "DSA",
    "Project Management",
    "UI/UX Basics"
  ];

  return (
    <section
      id="about"
      style={{
        padding: "120px 20px",
        background: t.bg,
        display: "flex",
        justifyContent: "center",
        transition: "0.3s"
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%"
        }}
      >
        <h2
          style={{
            color: t.text,
            fontSize: "clamp(28px, 5vw, 34px)",
            marginBottom: "25px"
          }}
        >
          About Me
        </h2>

        <div
          style={{
            background: t.card,
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: `0 0 20px ${t.shadow}`,
            border: `1px solid ${t.border}`
          }}
        >
          <p style={{ color: t.muted, lineHeight: "1.7" }}>
            Passionate BS Software Engineering student with hands-on experience in React Native, React JS and modern backend development.
          </p>
          <p style={{ color: t.muted, marginTop: "12px", lineHeight: "1.7" }}>
            I have built real-world applications like Smart Goal Tracking App, e-Vitals App, Student Portal, and Hospital Management System.
          </p>
          <p style={{ color: t.muted, marginTop: "12px", lineHeight: "1.7" }}>
            Strong knowledge of OOP, Data Structures & Algorithms, and databases like MongoDB, MySQL, Firebase.
          </p>
        </div>

        <h3 style={{ color: t.text, marginTop: "25px" }}>Skills & Technologies</h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "15px"
          }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              style={{
                padding: "8px 14px",
                background: hoveredIndex === index ? t.primary : t.card,
                color: hoveredIndex === index ? "#000" : t.muted,
                border: `1px solid ${t.border}`,
                borderRadius: "20px",
                fontSize: "13px",
                cursor: "pointer",
                transition: "0.2s"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 style={{ color: t.text, marginTop: "30px" }}>Experience / Projects</h3>

        <div
          style={{
            background: t.card,
            padding: "25px",
            borderRadius: "12px",
            marginTop: "15px",
            border: `1px solid ${t.border}`
          }}
        >
          <p style={{ color: t.muted, lineHeight: "1.8" }}>
            • Smart Goal Tracking App (React Native + MongoDB) <br />
            • e-Vitals App (React Native) <br />
            • Student Portal (Full Stack) <br />
            • Hospital Management System (Firebase)
          </p>
        </div>
      </div>
    </section>
  );
}