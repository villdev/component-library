import React from "react";

// import "../css/rightSidebar.css";

export default function RightSidebar({
  navVariants,
  variantStatus,
  introPresent,
}) {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-header">On this page</div>
      <nav className="right-sidebar-nav">
        <ul>
          {introPresent && (
            <li className="right-sidebar-nav__item">
              <a href="#intro">Introduction</a>
            </li>
          )}
          {navVariants.map((nav, i) => {
            return (
              // <li key={i} className="right-sidebar-nav__item">
              <li key={i} className={"right-sidebar-nav__item "}>
                <a
                  className={
                    variantStatus[i] ? "right-sidebar-nav__item--active" : ""
                  }
                  href={`#${nav.replace(" ", "-")}`}
                >
                  {nav}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
