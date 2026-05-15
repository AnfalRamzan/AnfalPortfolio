import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const links = ["home", "about", "resume", "projects", "services", "contact"];

export default function Navbar() {
  const { t, darkMode, setDarkMode } = useTheme();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: scrolled ? "12px 20px" : "18px 20px",
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
        {/* Logo */}
        <div
          style={{
            fontSize: "clamp(20px, 5vw, 28px)",
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
        <div className="desktop-menu" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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

        {/* Theme Toggle + Mobile Menu Button */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: t.text,
              padding: "8px",
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: darkMode ? "#0f172a" : "#ffffff",
            borderBottom: `1px solid ${t.border}`,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 999,
            boxShadow: t.shadow,
          }}
        >
          {links.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              style={{
                padding: "12px 20px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
                background: active === item ? t.primary : "transparent",
                color: active === item ? "#fff" : darkMode ? "#cbd5e1" : "#475569",
                cursor: "pointer",
                border: "none",
                textAlign: "left",
                width: "100%",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}