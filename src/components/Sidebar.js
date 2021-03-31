import React from "react";
import { componentData } from "./componentData";

import "../css/sidebar.css";

export default function Sidebar({ currentComp, setCurrentComp }) {
  const navItems = Object.keys(componentData);
  const changeComponent = (comp) => {
    setCurrentComp(comp);
  };
  return (
    <div
      className="sidebar"
      // style={{
      //   "--nav-hover": userTheme[currentTheme].navHover,
      //   "--text-light": userTheme[currentTheme].textLight,
      // }}
    >
      <div className="sidebar-header">COMPONENTS</div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item, i) => (
            <li
              key={i}
              onClick={() => changeComponent(item)}
              className={
                currentComp === item
                  ? "sidebar-nav__item active-sidebar-nav"
                  : "sidebar-nav__item"
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
