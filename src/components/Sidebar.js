import React from "react";
import { componentData } from "./componentData";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = Object.keys(componentData);
  return (
    <div className="sidebar">
      <div className="sidebar-header">COMPONENTS</div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={`/${item.toLowerCase()}`}
              activeClassName="active-sidebar-nav"
            >
              <li className="sidebar-nav__item"> {item} </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}
