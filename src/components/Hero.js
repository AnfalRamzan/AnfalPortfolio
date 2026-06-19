import { useEffect, useState, useMemo } from "react";
import profile from "../assets/images/profile3.png";
import cv from "../assets/cv/Anfal cv.pdf";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { t } = useTheme();

  const texts = useMemo(
    () => [
      "Software Engineer",
      "Full Stack Developer",
      "MERN Stack Expert",
      "React Native Developer",
      "Flutter Developer",
      "Database Architect"
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentFullText = texts[index];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(
            currentFullText.substring(0, displayText.length + 1)
          );
          setTypingSpeed(100);
        } else {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(
            currentFullText.substring(0, displayText.length - 1)
          );
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
          setTypingSpeed(150);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, typingSpeed]);

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-30%",
          width: "80%",
          height: "100%",
          background: `radial-gradient(circle, ${t.primary}08, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
          flexWrap: "wrap",
          gap: "40px",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-container"
      >
        <div style={{ flex: 1, minWidth: "280px" }} className="hero-content">
          <h1
            style={{
              fontSize: "clamp(32px, 8vw, 58px)",
              marginBottom: "16px",
              fontWeight: "700",
              lineHeight: "1.2",
              color: t.text,
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: t.primary }}>
              Anfal Ramzan
            </span>
          </h1>

          <div
            style={{
              fontSize: "clamp(18px, 4vw, 24px)",
              fontWeight: "500",
              marginBottom: "20px",
              minHeight: "70px",
            }}
          >
            <span style={{ color: t.primary }}>{displayText}</span>

            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "1.2em",
                background: t.primary,
                marginLeft: "4px",
                animation: "blink 1s infinite",
              }}
            />
          </div>

          <style>{`
            @keyframes blink {
              0%, 50% {
                opacity: 1;
              }
              51%, 100% {
                opacity: 0;
              }
            }

            @keyframes float {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0px);
              }
            }

            /* Enhanced Responsive Styles */
            @media (max-width: 992px) {
              .hero-container {
                flex-direction: column-reverse !important;
                text-align: center !important;
                gap: 30px !important;
              }

              .hero-content {
                text-align: center !important;
                width: 100% !important;
              }

              .hero-buttons {
                justify-content: center !important;
                flex-wrap: wrap !important;
              }

              .tech-stack {
                justify-content: center !important;
              }

              .hero-desc {
                margin-left: auto !important;
                margin-right: auto !important;
                max-width: 100% !important;
                padding: 0 10px !important;
              }
            }

            @media (max-width: 768px) {
              .hero-container {
                padding: 0 10px !important;
              }

              .hero-content h1 {
                font-size: clamp(28px, 6vw, 40px) !important;
              }

              .hero-content div {
                font-size: clamp(16px, 3.5vw, 20px) !important;
                min-height: 60px !important;
              }

              .hero-buttons button {
                padding: 10px 20px !important;
                font-size: 13px !important;
                width: auto !important;
                min-width: 120px !important;
              }

              .tech-stack span {
                padding: 5px 12px !important;
                font-size: 11px !important;
              }

              .hero-desc {
                font-size: 14px !important;
                line-height: 1.6 !important;
                max-width: 100% !important;
              }

              .hero-image {
                width: 100% !important;
                max-width: 300px !important;
                margin: 0 auto !important;
              }
            }

            @media (max-width: 480px) {
              .hero-container {
                gap: 20px !important;
                padding: 0 5px !important;
              }

              .hero-content h1 {
                font-size: clamp(24px, 5vw, 32px) !important;
              }

              .hero-content div {
                font-size: clamp(14px, 3vw, 18px) !important;
                min-height: 50px !important;
              }

              .hero-buttons {
                flex-direction: column !important;
                align-items: center !important;
                gap: 12px !important;
                width: 100% !important;
              }

              .hero-buttons button,
              .hero-buttons a {
                width: 100% !important;
                max-width: 250px !important;
              }

              .hero-buttons a button {
                width: 100% !important;
              }

              .tech-stack {
                gap: 8px !important;
              }

              .tech-stack span {
                padding: 4px 10px !important;
                font-size: 10px !important;
              }

              .hero-desc {
                font-size: 13px !important;
                padding: 0 5px !important;
              }

              .hero-image {
                max-width: 240px !important;
              }
            }

            @media (min-width: 769px) and (max-width: 1024px) {
              .hero-container {
                gap: 35px !important;
              }

              .hero-content h1 {
                font-size: clamp(30px, 5vw, 44px) !important;
              }

              .hero-image {
                max-width: 350px !important;
              }
            }

            /* Touch-friendly hover effects */
            @media (hover: hover) {
              .hero-buttons button:hover {
                transform: translateY(-3px) !important;
                transition: all 0.3s ease !important;
              }
            }

            @media (hover: none) {
              .hero-buttons button:active {
                transform: scale(0.95) !important;
                transition: all 0.1s ease !important;
              }
            }
          `}</style>

          <p
            style={{
              color: t.textLight,
              fontSize: "clamp(14px, 1.5vw, 16px)",
              maxWidth: "500px",
              lineHeight: "1.7",
              marginBottom: "8px",
            }}
            className="hero-desc"
          >
            Software Engineer specializing in Full Stack Development, Flutter, and AI/ML
            integration. Built 40+ production-ready applications with modern
            technologies including MySQL and Firebase.
          </p>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
            className="hero-buttons"
          >
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "12px 28px",
                background: t.primary,
                border: "none",
                borderRadius: "40px",
                cursor: "pointer",
                fontWeight: "600",
                color: "#fff",
                fontSize: "clamp(13px, 1.2vw, 14px)",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.target.style.background =
                  t.primaryDark || "#ea580c";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = t.primary;
                e.target.style.transform = "translateY(0)";
              }}
            >
              Hire Me →
            </button>

            <a
              href={cv}
              download
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                style={{
                  padding: "12px 28px",
                  background: "transparent",
                  border: `2px solid ${t.primary}`,
                  color: t.primary,
                  borderRadius: "40px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "clamp(13px, 1.2vw, 14px)",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `${t.primary}10`;
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Download CV
              </button>
            </a>
          </div>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
            className="tech-stack"
          >
            {[
              "React",
              "React Native",
              "Flutter",
              "Node.js",
              "MongoDB",
              "MySQL",
              "Firebase",
              "Python",
              "AI/ML",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "6px 14px",
                  background: `${t.primary}08`,
                  borderRadius: "30px",
                  fontSize: "clamp(11px, 1vw, 12px)",
                  color: t.primary,
                  fontWeight: "500",
                  border: `1px solid ${t.primary}15`,
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `${t.primary}15`;
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `${t.primary}08`;
                  e.target.style.transform = "scale(1)";
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "260px",
          }}
          className="hero-image"
        >
          <div
            style={{
              position: "relative",
              borderRadius: "30px",
              overflow: "hidden",
              animation: "float 3s ease-in-out infinite",
              maxWidth: "clamp(280px, 35vw, 480px)",
              width: "100%",
              boxShadow: t.shadow,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg, ${t.primary}15, transparent 50%)`,
                borderRadius: "30px",
                zIndex: 1,
              }}
            />

            <img
              src={profile}
              alt="Anfal Ramzan - Software Engineer"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "30px",
                objectFit: "cover",
                border: `2px solid ${t.primary}25`,
                display: "block",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}