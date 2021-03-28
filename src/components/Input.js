import React from "react";

export default function Input() {
  return (
    <div>
      <h2>Inputs</h2>
      {/* -----------------checkbox--------------- */}
      <h3>Checkbox</h3>
      <label className="input-checkbox">
        <input type="checkbox" />
        <span>Label</span>
      </label>
      {/* ----------------radio---------------------- */}
      {/* radio--light for light scheme */}
      <h3>Radio</h3>
      <label className="input-radio">
        <input type="radio" name="group" />
        <span>Radio Option Dark 1</span>
      </label>
      <label className="input-radio">
        <input type="radio" name="group" />
        <span>Radio Option Dark 2</span>
      </label>
      {/* <label className="input-radio radio--light">
        <input type="radio" name="group" />
        <span>Radio Option Dark 2</span>
      </label> */}
      {/* ----------------toggle---------------------- */}
      <h3>Toggle</h3>
      {/* toggle--light for light scheme */}
      <label className="input-toggle">
        <input type="checkbox" />
        <span>Toggle</span>
      </label>
      {/* ------------------text-------------- */}
      <h3>Text Input</h3>
      <div className="input-text container-xs mb-4">
        <input type="text" placeholder="Placeholder Text1" />
        <span className="focus-border"></span>
      </div>
      <div className="input-text container-xs input-text--light mb-4">
        <label htmlFor="placeholder2">Light Scheme Text Input</label>
        <input
          type="text"
          name="placeholder2"
          id="placeholder2"
          placeholder="Placeholder Text1"
        />
        <span className="focus-border"></span>
      </div>
      {/* -------------------text with bcg----------------- */}
      <div className="input-text input-text--bcg container-xs mb-4">
        <label htmlFor="placeholder3">Outlined Text Input</label>
        <input
          type="text"
          name="placeholder3"
          id="placeholder3"
          placeholder="Placeholder Text"
        />
      </div>
      <div className="input-text input-text--bcg input-text--light container-xs mb-4">
        <label htmlFor="placeholder4">Outlined Light Scheme Input</label>
        <input
          type="text"
          name="placeholder4"
          id="placeholder4"
          placeholder="Placeholder Text"
        />
      </div>
      {/* todo ------------slider------------------------------- */}
    </div>
  );
}
