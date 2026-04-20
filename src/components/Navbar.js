import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const links = ["home", "about", "resume", "projects", "services", "contact"];

export default function Navbar() {
  const { t, darkMode, setDarkMode } = useTheme();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px -20% 0px" }
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 35px",
        background: darkMode ? "#0f172a" : "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: `0 2px 10px ${t.shadow}`,
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <div
        style={{
          fontSize: "clamp(24px, 5vw, 34px)",
          fontWeight: "700",
          color: darkMode ? "#ffffff" : "#0f172a",
        }}
      >
        Anfal Portfolio
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setActive(item)}
            style={{
              textDecoration: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "500",
              textTransform: "capitalize",
              background: active === item ? t.primary : "transparent",
              color:
                active === item
                  ? "#000"
                  : darkMode
                  ? "#cbd5e1"
                  : "#334155",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            {item}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "7px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          background: t.primary,
          color: "#000",
          fontWeight: "bold",
        }}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
}