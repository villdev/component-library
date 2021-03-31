import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children, userTheme }) {
  const [currentTheme, setCurrentTheme] = useState(
    JSON.parse(localStorage.getItem("mode")) || "light"
  );
  const toggleTheme = () => {
    setCurrentTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("mode", JSON.stringify(newTheme));
      return newTheme;
    });
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, userTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
