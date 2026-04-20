import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { t } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: t.card,
        borderTop: `1px solid ${t.border}`,
        padding: "30px 20px",
        textAlign: "center",
        color: t.muted,
        fontSize: "14px",
      }}
    >
      <p>
        © {year} Anfal Ramzan – All rights reserved.
      </p>
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <a href="https://github.com/AnfalRamzan" target="_blank" rel="noopener noreferrer" style={{ color: t.primary, textDecoration: "none" }}>GitHub</a>
        <a href="https://www.linkedin.com/in/anfal-ramzan-65b302362" target="_blank" rel="noopener noreferrer" style={{ color: t.primary, textDecoration: "none" }}>LinkedIn</a>
        <a href="mailto:anfalramzan548@gmail.com" style={{ color: t.primary, textDecoration: "none" }}>Email</a>
      </div>
    </footer>
  );
}