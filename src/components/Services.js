import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Services() {
  const { t } = useTheme();
  const [active, setActive] = useState(null);

  const services = [
    {
      title: "React JS Development",
      icon: "⚛️",
      desc: "Modern and high-performance web applications using React JS.",
      points: ["Reusable Components", "SPA Development", "Optimized Performance"]
    },
    {
      title: "React Native Apps",
      icon: "📱",
      desc: "Cross-platform mobile apps for Android & iOS with native experience.",
      points: ["Android & iOS Apps", "Native UI Design", "Smooth Performance"]
    },
    {
      title: "Flutter Development",
      icon: "🦋",
      desc: "Beautiful UI mobile apps with animations and smooth UX.",
      points: ["Cross Platform", "UI Animations", "Fast Performance"]
    },
    {
      title: "Full Stack Development",
      icon: "🌐",
      desc: "Complete frontend + backend + database solutions.",
      points: ["Frontend + Backend", "REST APIs", "Database Integration"]
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      desc: "Modern, clean and user-friendly interface designs.",
      points: ["Wireframes", "Figma Designs", "Responsive UI"]
    },
    {
      title: "API Development",
      icon: "🔌",
      desc: "Secure and scalable REST API development.",
      points: ["Secure APIs", "JSON Data", "Integration Ready"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      style={{
        padding: "100px 20px",
        background: t.bg,
        minHeight: "100vh"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(28px, 5vw, 38px)",
          color: t.text,
          marginBottom: "10px",
          fontWeight: "700"
        }}
      >
        My Services
      </h2>
      <p
        style={{
          textAlign: "center",
          color: t.muted,
          marginBottom: "20px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        Professional development services for Web & Mobile Applications
      </p>

      <p
        style={{
          textAlign: "center",
          color: t.primary,
          fontSize: "14px",
          marginBottom: "50px"
        }}
      >
        ✅ 100% client satisfaction • ✅ On‑time delivery • ✅ Post‑launch support
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "28px",
          maxWidth: "1300px",
          margin: "0 auto"
        }}
      >
        {services.map((s, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                width: "320px",
                padding: "24px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: isActive ? t.primary : t.card,
                border: `1px solid ${isActive ? t.primary : t.border}`,
                boxShadow: isActive
                  ? `0 12px 28px ${t.primary}30`
                  : `0 4px 12px ${t.shadow}`,
                transform: "translateY(0)",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "32px" }}>{s.icon}</span>
                <h3
                  style={{
                    fontSize: "18px",
                    margin: 0,
                    color: isActive ? "#fff" : t.text
                  }}
                >
                  {s.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.5",
                  marginBottom: "16px",
                  color: isActive ? "#e0f2fe" : t.muted,
                  flex: 1
                }}
              >
                {s.desc}
              </p>

              <ul
                style={{
                  paddingLeft: "20px",
                  fontSize: "12px",
                  color: isActive ? "#fff" : t.primary,
                  marginBottom: "20px"
                }}
              >
                {s.points.map((p, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {p}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToContact();
                }}
                style={{
                  marginTop: "auto",
                  padding: "8px 16px",
                  fontSize: "12px",
                  fontWeight: "600",
                  borderRadius: "30px",
                  border: "none",
                  background: isActive ? "#fff" : t.primary,
                  color: isActive ? t.primary : "#000",
                  cursor: "pointer",
                  transition: "0.2s",
                  width: "fit-content"
                }}
              >
                Hire me for {s.title.split(" ")[0]} →
              </button>
            </div>
          );
        })}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          padding: "30px 20px",
          background: t.card,
          borderRadius: "24px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          border: `1px solid ${t.border}`
        }}
      >
        <h3 style={{ color: t.text, marginBottom: "10px" }}>
          Have a project in mind?
        </h3>
        <p style={{ color: t.muted, marginBottom: "20px" }}>
          Let’s discuss how I can help you build your next web or mobile application.
        </p>
        <button
          type="button"
          onClick={scrollToContact}
          style={{
            padding: "10px 24px",
            background: t.primary,
            border: "none",
            borderRadius: "30px",
            fontWeight: "bold",
            color: "#000",
            cursor: "pointer"
          }}
        >
          Contact Me Now
        </button>
      </div>
    </section>
  );
}