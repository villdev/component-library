import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "./components/theme-context";

const userTheme = {
  light: {
    bg: "#FFFFFF",
    text: "rgba(107, 114, 128)",
    toggleColor: "#f39c12",
    // text: "#91929e",
    // 500 above, 400 below - gray
    // text: "rgba(156, 163, 175)"
    oppositeColor: "#000",
    border: "1px solid rgba(209, 213, 219)",
  },
  dark: {
    bg: "#040406",
    text: "rgba(156, 163, 175)",
    toggleColor: "#c1c2c9",
    // 400 gray
    oppositeColor: "#fff",
    border: "1px solid rgba(31, 41, 55)",
  },
};

const rootEl = document.getElementById("root");

render(
  <React.StrictMode>
    <ThemeProvider userTheme={userTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootEl
);
