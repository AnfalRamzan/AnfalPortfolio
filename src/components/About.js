import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { t } = useTheme();
  const [activeTab, setActiveTab] = useState("ai");
  const [activeSkillTab, setActiveSkillTab] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = {
    frontend: [
      "React JS", "Next.js", "React Native", "JavaScript",
      "TypeScript", "HTML5", "CSS3", "Tailwind CSS",
      "Bootstrap", "Responsive Design"
    ],
    backend: [
      "Node.js", "Express.js", "Python", "Django",
      "REST APIs", "GraphQL", "Authentication", "API Integration"
    ],
    database: [
      "MongoDB", "MySQL", "PostgreSQL", "Firebase",
      "Firestore", "Prisma", "Database Design"
    ],
    aiMl: [
      "Machine Learning", "Deep Learning", 
      "Scikit learn", "Pandas", "NumPy", "Data Visualization",
      "Natural Language Processing ", "Computer Vision", "OpenCV",
      , , "Streamlit", 
    ],
    tools: [
      "Git & GitHub", "Docker", "Kubernetes", "AWS",
      "Azure", "Postman", "Figma", "Vercel", "PyCharm","VS Code",
    ]
  };

  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        background: t.bg,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{
              color: t.text,
              fontSize: "clamp(32px, 5vw, 42px)",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            About Me
          </h2>
          <p
            style={{
              color: t.textLight,
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            Software Engineer specializing in Full Stack Development & AI/ML integration.
          </p>
        </div>

        <div
          style={{
            background: t.card,
            padding: "30px",
            borderRadius: "20px",
            border: `1px solid ${t.border}`,
            marginBottom: "30px",
          }}
        >
          <p style={{ color: t.text, fontSize: "16px", lineHeight: "1.7", marginBottom: "15px" }}>
            <strong style={{ color: t.primary }}>Software Engineer</strong> with expertise in 
            <strong style={{ color: t.primary }}> Full Stack Development</strong> & 
            <strong style={{ color: t.primary }}> AI/ML</strong>
          </p>

          <p style={{ color: t.textLight, lineHeight: "1.7", marginBottom: "15px" }}>
            Built <strong>40+ production-ready applications</strong> including web platforms, 
            mobile apps, and AI-powered systems using React, React Native, Node.js, Python, 
            TensorFlow, and PyTorch.
          </p>

          <p style={{ color: t.textLight, lineHeight: "1.7" }}>
            Passionate about clean code, scalable architecture, and creating impactful solutions 
            that solve real-world problems using cutting-edge AI technologies.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              marginTop: "25px",
              paddingTop: "20px",
              borderTop: `1px solid ${t.border}`,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "700", color: t.primary }}>5+</div>
              <div style={{ fontSize: "12px", color: t.textLight }}>Years Exp</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "700", color: t.primary }}>40+</div>
              <div style={{ fontSize: "12px", color: t.textLight }}>Projects</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "700", color: t.primary }}>10+</div>
              <div style={{ fontSize: "12px", color: t.textLight }}>Tech Stacks</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "700", color: t.primary }}>100%</div>
              <div style={{ fontSize: "12px", color: t.textLight }}>Satisfaction</div>
            </div>
          </div>
        </div>

        <h3 style={{ color: t.text, marginBottom: "15px", fontSize: "22px" }}>Technical Skills</h3>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            { id: "frontend", label: "🎨 Frontend" },
            { id: "backend", label: "⚙️ Backend" },
            { id: "database", label: "🗄️ Database" },
            { id: "aiMl", label: "🤖 AI/ML" },
            { id: "tools", label: "🛠️ Tools" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSkillTab(tab.id)}
              style={{
                padding: "8px 20px",
                borderRadius: "30px",
                border: `1px solid ${activeSkillTab === tab.id ? t.primary : t.border}`,
                background: activeSkillTab === tab.id ? t.primary : "transparent",
                color: activeSkillTab === tab.id ? "#fff" : t.text,
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "500",
                transition: "0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          style={{
            background: t.card,
            padding: "25px",
            borderRadius: "16px",
            border: `1px solid ${t.border}`,
            marginBottom: "30px",
          }}
        >
          <h4
            style={{
              color: t.primary,
              marginBottom: "15px",
              fontSize: "15px",
              textTransform: "capitalize",
            }}
          >
            {activeSkillTab === "frontend" && "🎨 Frontend Development"}
            {activeSkillTab === "backend" && "⚙️ Backend Development"}
            {activeSkillTab === "database" && "🗄️ Database Management"}
            {activeSkillTab === "aiMl" && "🤖 AI & Machine Learning"}
            {activeSkillTab === "tools" && "🛠️ Development Tools"}
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {skills[activeSkillTab].map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: "6px 16px",
                  background: hoveredSkill === `${activeSkillTab}-${index}` ? t.primary : `${t.primary}08`,
                  color: hoveredSkill === `${activeSkillTab}-${index}` ? "#fff" : t.primary,
                  border: `1px solid ${hoveredSkill === `${activeSkillTab}-${index}` ? t.primary : `${t.primary}20`}`,
                  borderRadius: "30px",
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
                onMouseEnter={() => setHoveredSkill(`${activeSkillTab}-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            background: t.card,
            padding: "20px",
            borderRadius: "16px",
            border: `1px solid ${t.border}`,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <span style={{ color: t.primary, fontWeight: "500" }}>🌐 Languages:</span>
            <span style={{ color: t.text }}>English <span style={{ color: t.textLight, fontSize: "12px" }}>(Professional)</span></span>
            <span style={{ color: t.text }}>Urdu <span style={{ color: t.textLight, fontSize: "12px" }}>(Native)</span></span>
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            padding: "20px",
            background: `${t.primary}05`,
            borderRadius: "16px",
          }}
        >
          <p style={{ color: t.textLight, fontSize: "14px", fontStyle: "italic" }}>
            "Building scalable web, mobile & AI solutions with clean architecture and modern technologies."
          </p>
        </div>

      </div>
    </section>
  );
}