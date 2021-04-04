import React from "react";
import Sidebar from "./Sidebar";
import Component from "./Component";
import { useTheme } from "./theme-context";
import { componentData } from "./componentData";
import { Routes, Route, Navigate } from "react-router-dom";

export default function ComponentsRoute() {
  const { currentTheme, userTheme } = useTheme();
  const theme = userTheme[currentTheme];
  const navItems = Object.keys(componentData);
  return (
    <div
      className="main-content-wrapper"
      style={{
        color: theme.text,
        backgroundColor: theme.bg,
        "--oppositeColor": theme.oppositeColor,
        "--text-light": theme.textLight,
        "--nav-hover": theme.navHover,
        "--highlight-bcg": theme.highlightBcg,
        "--codeBcg": theme.codeBcg,
      }}
    >
      <Sidebar />
      <Routes>
        <Navigate to="/avatar" />
        {navItems.map((item, i) => (
          <Route
            key={i}
            path={`/${item.toLowerCase()}`}
            element={<Component comp={componentData[item]} />}
          />
        ))}
      </Routes>
    </div>
  );
}
