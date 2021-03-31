import React from "react";

import "../css/rightSidebar.css";

export default function RightSidebar({ navVariants }) {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-header">On this page</div>
      <nav className="right-sidebar-nav">
        <ul>
          {navVariants.map((nav, i) => {
            return (
              <li key={i} className="right-sidebar-nav__item">
                {nav}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
