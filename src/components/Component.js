import React, { useEffect, useRef } from "react";
import { useTheme } from "./theme-context";
import Prism from "prismjs";
import reactElementToJSXString from "react-element-to-jsx-string";
import RightSidebar from "./RightSidebar";

import "../css/prism.css";
import "../css/component.css";

export default function Component({ comp }) {
  const { currentTheme, userTheme } = useTheme();
  const currentVariants =
    currentTheme === "light" ? comp.lightVariants : comp.darkVariants;
  const navVariants = currentVariants.map(({ name }) => name);
  const mainContentRef = useRef(null);
  useEffect(() => {
    Prism.highlightAll();
  }, [currentTheme]);

  useEffect(() => {
    Prism.highlightAll();
    //scroll to top
    mainContentRef.current.scrollTo(0, 0);
  }, [comp]);

  return (
    <div className="main-content" ref={mainContentRef}>
      <div
        className="component-wrapper"
        // style={{ "--highlight-bcg": userTheme[currentTheme].highlightBcg }}
      >
        <div className="component-info-wrapper">
          <div
            className="component-title"
            style={{ color: userTheme[currentTheme].oppositeColor }}
          >
            {comp.title}
          </div>
          <div className="component-desc">{comp.desc}</div>
        </div>
        {comp.intro && (
          <div className="component-intro-wrapper">
            <div
              className="component-intro-header"
              style={{ color: userTheme[currentTheme].oppositeColor }}
            >
              Introduction
            </div>
            <div className="component-intro">{comp.intro}</div>
          </div>
        )}

        {currentVariants.map((variant, i) => (
          <div className="component-variant-wrapper" key={i}>
            <div
              className="component-variant-header"
              style={{ color: userTheme[currentTheme].oppositeColor }}
            >
              {variant.name}
            </div>
            <div className="component-variant-desc">{variant.desc}</div>
            <div className="component-variant-example">
              <div className="component-variant-example__output">
                {variant.code}
              </div>
              <pre className="component-variant-example__code">
                <code className="language-html">
                  {/* {reactElementToJSXString(variant.code)} */}
                  {reactElementToJSXString(variant.code).slice(26, -6)}
                </code>
              </pre>
            </div>
          </div>
        ))}
        {/* <pre className="code-output">
        <code className="language-html">{content}</code>
      </pre> */}
        {/* <pre>
        <code className="language-html">`console.log("test")`</code>
      </pre> */}
      </div>
      <RightSidebar navVariants={navVariants} />
    </div>
  );
}
