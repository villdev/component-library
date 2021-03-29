import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children, userTheme }) {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
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
