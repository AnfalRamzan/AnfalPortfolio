import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function WelcomeSection({ onComplete }) {
  const { t } = useTheme();
  const [visible, setVisible] = useState(true);
  const [animation, setAnimation] = useState("fadeIn");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation("fadeOut");
      setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: t.bg,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: `${animation} 0.5s ease forwards`,
      }}
    >
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1
          style={{
            fontSize: "clamp(32px, 8vw, 64px)",
            color: t.primary,
            marginBottom: "20px",
            animation: "bounce 1s ease",
          }}
        >
          Welcome to My Portfolio 👋
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 4vw, 24px)",
            color: t.textLight,
            animation: "fadeUp 0.5s ease 0.3s both",
          }}
        >
          I'm Anfal Ramzan - Full Stack Developer
        </p>
      </div>
    </div>
  );
}