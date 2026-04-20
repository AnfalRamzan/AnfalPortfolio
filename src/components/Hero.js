import { useEffect, useState } from "react";
import profile from "../assets/images/profile3.png";
import cv from "../assets/cv/Anfal-CV.pdf";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { t } = useTheme();

  const texts = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React JS Developer",
    "React Native Developer",
    "Flutter Developer",
    "UI/UX Designer"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        background: t.bg,
        color: t.text
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
          width: "100%",
          flexWrap: "wrap",
          gap: "40px"
        }}
      >
        {/* LEFT */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 48px)",
              marginBottom: "10px",
              color: t.primary
            }}
          >
            Hi, I'm Anfal 👋
          </h1>

          <h2
            style={{
              fontSize: "clamp(18px, 4vw, 22px)",
              fontWeight: "500",
              color: t.text
            }}
          >
            {texts[index]}
          </h2>

          <p style={{ marginTop: "10px", color: t.muted }}>
            Building scalable mobile & web applications 🚀
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.6", color: t.muted }}>
            Passionate Software Engineer specializing in React, React Native, Flutter and backend development.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap"
            }}
          >
            <button
              type="button"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "10px 18px",
                background: t.primary,
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold",
                color: "#000"
              }}
            >
              Hire Me
            </button>

            <a href={cv} download>
              <button
                type="button"
                style={{
                  padding: "10px 18px",
                  background: "transparent",
                  border: `1px solid ${t.primary}`,
                  color: t.primary,
                  borderRadius: "20px",
                  cursor: "pointer"
                }}
              >
                Download CV
              </button>
            </a>
          </div>

          <p style={{ marginTop: "20px", fontSize: "14px", color: t.muted }}>
            React • React Native • Node.js • Flutter • Firebase • MongoDB • UI/UX Design
          </p>
        </div>

        {/* RIGHT - Responsive image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "280px"
          }}
        >
          <img
            src={profile}
            alt="profile"
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: `0 10px 40px ${t.shadow}`,
              border: `2px solid ${t.primary}`
            }}
          />
        </div>
      </div>
    </section>
  );
}