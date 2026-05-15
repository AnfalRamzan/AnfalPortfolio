import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Services() {
  const { t } = useTheme();
  const [active, setActive] = useState(null);

  const services = [
    {
      title: "Full Stack Development",
      icon: "🌐",
      desc: "Complete end-to-end web application development with modern tech stack.",
      points: ["Frontend + Backend", "REST APIs & GraphQL", "Database Integration", "Cloud Deployment", "40+ Projects Delivered"]
    },
    {
      title: "React Native Apps",
      icon: "📱",
      desc: "Cross-platform mobile apps for Android & iOS with native performance.",
      points: ["Android & iOS Apps", "Native UI Design", "Offline Support", "Push Notifications", "App Store Deployment"]
    },
    {
      title: "AI/ML Solutions",
      icon: "🤖",
      desc: "Intelligent AI systems for prediction, detection, and automation.",
      points: ["Predictive Models", "Document Detection", "Data Analysis", "Streamlit Apps", "85%+ Accuracy"]
    },
    {
      title: "React JS Development",
      icon: "⚛️",
      desc: "Modern, fast, and scalable web applications using React ecosystem.",
      points: ["SPA Development", "Reusable Components", "State Management", "Performance Optimization", "TypeScript Ready"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      desc: "Secure and scalable server-side applications and APIs.",
      points: ["Node.js & Python", "REST APIs", "Authentication", "Database Design", "Microservices"]
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      desc: "Beautiful, responsive, and user-friendly interface designs.",
      points: ["Wireframes & Prototypes", "Figma Designs", "Responsive UI", "User Experience", "Mobile-First Design"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCardClick = (index) => {
    setActive(index);
  };

  const handleHireClick = (e, title) => {
    e.stopPropagation();
    scrollToContact();
  };

  return (
    <section
      id="services"
      style={{
        padding: "100px 20px",
        background: t.bg,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 42px)",
            color: t.text,
            marginBottom: "12px",
            fontWeight: "700"
          }}
        >
          My Services
        </h2>
        <p
          style={{
            color: t.textLight,
            fontSize: "16px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          Professional development services for Web, Mobile & AI Applications
        </p>
      </div>

      {/* Badges - Updated with 40+ Projects */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px"
        }}
      >
        {["✅ 100% Satisfaction", "⏱️ On-Time Delivery", "🛠️ Post-Launch Support", "💎 40+ Projects Completed"].map((badge, i) => (
          <span
            key={i}
            style={{
              padding: "6px 16px",
              background: `${t.primary}10`,
              color: t.primary,
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: "500"
            }}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          maxWidth: "1300px",
          margin: "0 auto"
        }}
      >
        {services.map((s, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              onClick={() => handleCardClick(i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                width: "340px",
                padding: "28px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: isActive ? t.primary : t.card,
                border: `1px solid ${isActive ? t.primary : t.border}`,
                boxShadow: isActive ? `0 10px 30px ${t.primary}25` : t.shadow,
                transform: isActive ? "translateY(-5px)" : "translateY(0)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon & Title */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                <span style={{ fontSize: "38px" }}>{s.icon}</span>
                <h3
                  style={{
                    fontSize: "18px",
                    margin: 0,
                    color: isActive ? "#fff" : t.text,
                    fontWeight: "600"
                  }}
                >
                  {s.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.6",
                  marginBottom: "18px",
                  color: isActive ? "rgba(255,255,255,0.9)" : t.textLight,
                }}
              >
                {s.desc}
              </p>

              {/* Points */}
              <ul
                style={{
                  paddingLeft: "20px",
                  fontSize: "12px",
                  color: isActive ? "rgba(255,255,255,0.85)" : t.primary,
                  marginBottom: "22px",
                  listStyleType: "circle"
                }}
              >
                {s.points.map((p, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                type="button"
                onClick={(e) => handleHireClick(e, s.title)}
                style={{
                  marginTop: "auto",
                  padding: "10px 20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  borderRadius: "40px",
                  border: "none",
                  background: isActive ? "#fff" : t.primary,
                  color: isActive ? t.primary : "#fff",
                  cursor: "pointer",
                  transition: "0.2s",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.opacity = "1";
                }}
              >
                {isActive ? "📩 Contact Now" : `Hire for ${s.title.split(" ")[0]} →`}
              </button>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          padding: "40px 30px",
          background: t.card,
          borderRadius: "24px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          border: `1px solid ${t.border}`,
        }}
      >
        <h3 style={{ color: t.text, marginBottom: "12px", fontSize: "24px" }}>
          Have a project in mind?
        </h3>
        <p style={{ color: t.textLight, marginBottom: "25px", fontSize: "15px" }}>
          Let's discuss how I can help you build your next web, mobile, or AI application.
          With 40+ successful projects delivered, your vision is in expert hands.
        </p>
        <button
          type="button"
          onClick={scrollToContact}
          style={{
            padding: "14px 32px",
            background: t.primary,
            border: "none",
            borderRadius: "40px",
            fontWeight: "600",
            color: "#fff",
            cursor: "pointer",
            fontSize: "15px",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.opacity = "1";
          }}
        >
          Contact Me Now →
        </button>
      </div>
    </section>
  );
}