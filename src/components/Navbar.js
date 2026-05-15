import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const links = ["home", "about", "resume", "projects", "services", "contact"];

export default function Navbar() {
  const { t, darkMode, setDarkMode } = useTheme();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" }
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: scrolled ? "12px 35px" : "18px 35px",
        background: darkMode 
          ? (scrolled ? "rgba(15, 23, 42, 0.95)" : "#0f172a")
          : (scrolled ? "rgba(255, 255, 255, 0.98)" : "#ffffff"),
        backdropFilter: scrolled ? "blur(10px)" : "none",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: scrolled ? `0 4px 20px ${t.shadow}` : "none",
        borderBottom: scrolled ? `1px solid ${t.border}` : "none",
      }}
    >
      {/* Logo with Orange gradient */}
      <div
        style={{
          fontSize: "clamp(22px, 5vw, 28px)",
          fontWeight: "700",
          background: t.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.5px",
        }}
      >
        Anfal Ramzan
      </div>

      {/* Desktop Menu */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {links.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            style={{
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "capitalize",
              background: active === item ? t.primary : "transparent",
              color: active === item ? "#fff" : darkMode ? "#cbd5e1" : "#475569",
              cursor: "pointer",
              border: "none",
              fontFamily: "inherit",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (active !== item) {
                e.target.style.background = darkMode ? "#334155" : "#f1f5f9";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== item) {
                e.target.style.background = "transparent";
              }
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "8px 18px",
          borderRadius: "40px",
          border: `1px solid ${t.border}`,
          cursor: "pointer",
          background: darkMode ? t.primary : "transparent",
          color: darkMode ? "#fff" : t.primary,
          fontWeight: "500",
          fontSize: "13px",
          transition: "0.2s",
        }}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}