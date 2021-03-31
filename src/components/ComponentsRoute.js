import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Component from "./Component";
// import RightSidebar from "./RightSidebar";
import { useTheme } from "./theme-context";
import { componentData } from "./componentData";

export default function ComponentsRoute() {
  const { currentTheme, userTheme } = useTheme();
  const [currentComp, setCurrentComp] = useState("Avatar");
  return (
    <div
      className="main-content-wrapper"
      style={{
        color: userTheme[currentTheme].text,
        backgroundColor: userTheme[currentTheme].bg,
        "--oppositeColor": userTheme[currentTheme].oppositeColor,
        "--text-light": userTheme[currentTheme].textLight,
        "--nav-hover": userTheme[currentTheme].navHover,
        "--highlight-bcg": userTheme[currentTheme].highlightBcg,
        "--codeBcg": userTheme[currentTheme].codeBcg,
      }}
    >
      <Sidebar currentComp={currentComp} setCurrentComp={setCurrentComp} />
      <Component comp={componentData[currentComp]} />
      {/* <RightSidebar /> */}
    </div>
  );
}
