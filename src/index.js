import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "./components/theme-context";

const userTheme = {
  light: {
    bg: "#f5f5f5",
    text: "rgba(107, 114, 128)",
    textLight: "#a6a7b3",
    toggleColor: "#f39c12",
    oppositeColor: "#000",
    border: "1px solid rgba(209, 213, 219)",
    navHover: "#e3e7f1",
    highlightBcg: "#edf2fd",
    codeBcg: "#222328",
  },
  dark: {
    bg: "#040406",
    text: "rgba(156, 163, 175)",
    textLight: "#606169",
    toggleColor: "#c1c2c9",
    oppositeColor: "#fff",
    border: "1px solid rgba(31, 41, 55)",
    navHover: "#131314",
    highlightBcg: "#26272b",
    codeBcg: "#222328",
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
