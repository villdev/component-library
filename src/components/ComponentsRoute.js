import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Component from "./Component";
import { useTheme } from "./theme-context";
import { componentData } from "./componentData";

export default function ComponentsRoute() {
  const { currentTheme, userTheme } = useTheme();
  const theme = userTheme[currentTheme];
  const [currentComp, setCurrentComp] = useState("Avatar");
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
      <Sidebar currentComp={currentComp} setCurrentComp={setCurrentComp} />
      <Component comp={componentData[currentComp]} />
    </div>
  );
}
