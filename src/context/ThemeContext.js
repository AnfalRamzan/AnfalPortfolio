import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  light: {
    bg: "#f8fafc",
    card: "#ffffff",
    primary: "#0ea5e9",
    accent: "#C0E1D2",
    text: "#0f172a",
    muted: "#64748b",
    border: "#e2e8f0",
    shadow: "rgba(0,0,0,0.08)"
  },
  dark: {
    bg: "#020617",
    card: "#0f172a",
    primary: "#38bdf8",
    accent: "#C0E1D2",
    text: "#ffffff",
    muted: "#94a3b8",
    border: "#1e293b",
    shadow: "rgba(0,0,0,0.5)"
  }
};

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDarkMode(saved === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.style.background = themes[darkMode ? "dark" : "light"].bg;
    document.body.style.color = themes[darkMode ? "dark" : "light"].text;
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        t: themes[darkMode ? "dark" : "light"]
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}