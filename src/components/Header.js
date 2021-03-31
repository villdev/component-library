import React from "react";
// import "../css/header.css";
import { useTheme } from "./theme-context";
import logoIcon from "../images/logo.svg";

export default function Header() {
  const { currentTheme, userTheme, toggleTheme } = useTheme();
  const theme = userTheme[currentTheme];
  const headerStyle = {
    backgroundColor: theme.bg,
    color: theme.text,
    "--text-color:": theme.text,
    "--bg": theme.toggleColor,
    borderBottom: theme.border,
  };
  return (
    <header className="flex items-center" style={headerStyle}>
      <div className="logo flex items-center">
        <img className="logo__icon icon-md" src={logoIcon} alt="" />
        <div className="logo__text" style={{ color: theme.oppositeColor }}>
          PARS.css
        </div>
      </div>
      <div className="navigation flex items-center">
        <nav className="main-nav">
          <ul>
            <li className="main-nav__item">
              {" "}
              <button>Home</button>{" "}
            </li>
            <li className="main-nav__item">
              {" "}
              <button>Get Started</button>{" "}
            </li>
            <li className="main-nav__item active-main-nav">
              {" "}
              <button>Components</button>{" "}
            </li>
          </ul>
        </nav>
        <div className="input-text container-xs input-text--light search-bar-wrapper ml-auto">
          <input
            className="search-bar"
            style={{ color: theme.text }}
            type="search"
            name="search-phrase"
            id="search-bar"
            placeholder="Search documentation"
          />
          <span className="focus-border"></span>
        </div>
      </div>
      <div className="header-btns flex items-center justify-center">
        <label className="input-toggle theme-toggle">
          <input
            onChange={() => toggleTheme()}
            type="checkbox"
            checked={currentTheme === "light"}
          />
          <span className="toggle-icon"></span>
        </label>
        <button className="btn btn--icon-circle btn--sm github-btn">
          <a
            href="https://github.com/villdev/pars"
            target="_blank"
            rel="noreferrer"
            aria-label="github-source-button"
          >
            <svg
              style={{ stroke: theme.oppositeColor }}
              className="icon-sm"
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </button>
      </div>
    </header>
  );
}
