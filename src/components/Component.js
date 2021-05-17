import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./theme-context";
import Prism from "prismjs";
import reactElementToJSXString from "react-element-to-jsx-string";
import RightSidebar from "./RightSidebar";

// import "../css/prism.css";
// import "../css/component.css";

export default function Component({ comp }) {
  const { currentTheme, userTheme } = useTheme();
  const theme = userTheme[currentTheme];
  const currentVariants =
    currentTheme === "light" ? comp.lightVariants : comp.darkVariants;
  const navVariants = currentVariants.map(({ name }) => name);

  const variantRefs = useRef([]);
  variantRefs.current = [];
  const [variantStatus, setVariantStatus] = useState(
    Array(navVariants.length).fill(false)
  );

  const addToVariantRefs = (el) => {
    if (el && !variantRefs.current.includes(el)) {
      variantRefs.current.push(el);
    }
  };

  const getRefIndex = (viewEl, viewElements) => {
    return viewElements.findIndex((el) => el === viewEl);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const handleCopy = (reactCode) => {
    navigator.clipboard.writeText(
      reactElementToJSXString(reactCode).slice(26, -6)
    );
  };

  const inViewCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const inViewIndex = getRefIndex(entry.target, variantRefs.current);
        setVariantStatus((prevStatus) => {
          return prevStatus.map((status, statusIndex) => {
            if (statusIndex === inViewIndex) return true;
            else return false;
          });
        });
      }
      // else {
      //   const outOfViewIndex = getRefIndex(entry.target, variantRefs.current);
      //   setVariantStatus((prevStatus) => {
      //     return prevStatus.map((status, statusIndex) => {
      //       if (statusIndex === outOfViewIndex) return false;
      //       else return status;
      //     });
      //   });
      // }
    });
  };

  const mainContentRef = useRef(null);
  useEffect(() => {
    Prism.highlightAll();
  }, [currentTheme]);

  useEffect(() => {
    Prism.highlightAll();
    mainContentRef.current.scrollTo(0, 0);
  }, [comp]);

  useEffect(() => {
    const observer = new IntersectionObserver(inViewCallback, options);

    variantRefs.current.forEach((variant) => {
      observer.observe(variant);
    });

    return () => {
      variantRefs.current.forEach((variant) => {
        observer.unobserve(variant);
      });
    };
  }, [variantRefs]);

  return (
    <div className="main-content" ref={mainContentRef}>
      <div className="component-wrapper">
        <div className="component-info-wrapper">
          <div
            className="component-title"
            style={{ color: theme.oppositeColor }}
          >
            {comp.title}
          </div>
          <div className="component-desc">{comp.desc}</div>
        </div>
        {comp.intro && (
          <div className="component-intro-wrapper">
            <div
              id="intro"
              className="component-intro-header direct-link-wrapper"
              style={{ color: theme.oppositeColor }}
            >
              Introduction
              <span className="direct-link">
                <a href="#intro">#</a>
              </span>
            </div>
            <div className="component-intro">{comp.intro}</div>
          </div>
        )}

        {currentVariants.map((variant, i) => (
          <div
            className="component-variant-wrapper"
            key={i}
            ref={addToVariantRefs}
          >
            <div
              id={variant.name.replace(" ", "-")}
              className="component-variant-header direct-link-wrapper"
              style={{ color: theme.oppositeColor }}
            >
              {variant.name}
              <span className="direct-link">
                <a href={`#${variant.name.replace(" ", "-")}`}>#</a>
              </span>
            </div>
            <div className="component-variant-desc">{variant.desc}</div>
            <div className="component-variant-example">
              <div className="component-variant-example__output">
                {variant.code}
                <button
                  onClick={() => handleCopy(variant.code)}
                  className="copy-btn btn btn--icon-rounded btn--rounded"
                  aria-label="copy-code-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-sm"
                    width="44"
                    height="44"
                    stroke="#cce3ec"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="8" y="8" width="12" height="12" rx="2" />
                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                  </svg>
                </button>
              </div>
              <pre className="component-variant-example__code">
                <code className="language-html">
                  {reactElementToJSXString(variant.code).slice(26, -6)}
                </code>
              </pre>
            </div>
          </div>
        ))}
      </div>
      <RightSidebar
        navVariants={navVariants}
        variantStatus={variantStatus}
        introPresent={comp.intro !== ""}
      />
    </div>
  );
}
