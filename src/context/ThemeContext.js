import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  light: {
    bg: "#ffffff",
    card: "#ffffff",
    primary: "#f97316",     // Vibrant Orange
    primaryDark: "#ea580c",  // Darker Orange
    primaryLight: "#ffedd5", // Light Orange tint
    text: "#1e293b",         // Slate Dark
    textLight: "#64748b",    // Slate Gray
    muted: "#64748b",
    border: "#e2e8f0",
    shadow: "rgba(0,0,0,0.08)",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
  },
  dark: {
    bg: "#0f172a",           // Dark Slate
    card: "#1e293b",
    primary: "#f97316",      // Same Orange for consistency
    primaryDark: "#ea580c",
    primaryLight: "#2d1a0e",
    text: "#f1f5f9",
    textLight: "#94a3b8",
    muted: "#94a3b8",
    border: "#334155",
    shadow: "rgba(0,0,0,0.3)",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
  }
};

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false); // Default to light/white

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