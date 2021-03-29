import React from "react";
import avatarImg from "../images/avatar.jpeg";

export default function Avatar() {
  return (
    <div className="component-wrapper container-md">
      <h2>Avatar</h2>
      <h3>Avatar with Images</h3>
      <div className="avatar">
        <img src={avatarImg} alt="" />
      </div>
      <div className="avatar">
        <img src={avatarImg} alt="" />
      </div>
      <div className="avatar">
        <img src={avatarImg} alt="" />
      </div>
      <h3>Avatar with text</h3>
      <div className="avatar bg-white text-black">Sk</div>
      <div className="avatar bg-white text-black">NG</div>
      <div className="avatar bg-white text-black">FD</div>
      <h3>Avatar in different sizes</h3>
      <div className="avatar avatar--sm">
        <img src={avatarImg} alt="" />
      </div>
      <div className="avatar">
        <img src={avatarImg} alt="" />
      </div>
      <div className="avatar avatar--lg">
        <img src={avatarImg} alt="" />
      </div>
      <div className="avatar avatar--xl">
        <img src={avatarImg} alt="" />
      </div>
      <div className="avatar avatar--2xl">
        <img src={avatarImg} alt="" />
      </div>
      {/* --------------------icons-------------------------------------- */}
      <h3>Avatar with Icons</h3>
      <div className="avatar avatar--icon avatar--sm bg-white">
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path>
        </svg>
      </div>
      <div className="avatar avatar--icon bg-white">
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
        </svg>
      </div>
      <div className="avatar avatar--icon avatar--lg bg-white">
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
        </svg>
      </div>
      {/* -----------------square variants */}
      <h3>Avatar with Square Variants</h3>
      <div className="avatar avatar--square avatar--sm bg-white text-black">
        S
      </div>
      <div className="avatar avatar--square">
        <img src={avatarImg} alt="" />
      </div>
      <div className="avatar avatar--rounded avatar--lg">
        <img src={avatarImg} alt="" />
      </div>
      {/* ----------------------------avatar badges---------------------------------- */}
      <h3>Avatar with Badges</h3>
      <div className="avatar avatar--rounded badge-wrapper mr-4">
        <img src={avatarImg} alt="" />
        <span className="badge-dot badge-dot--md bg-white text-black"></span>
      </div>
      <div className="avatar badge-wrapper bg-white mr-4">
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
        </svg>
        <span className="badge badge--md bg-blue-600 text-white">2</span>
      </div>
      <div className="avatar badge-wrapper mr-4">
        <svg
          className="fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
        </svg>
        <span className="badge badge--md bg-blue-600 text-white">2</span>
      </div>
      <div className="avatar badge-wrapper">
        <img src={avatarImg} alt="" />
        <span className="badge-dot badge-dot--md bg-white text-black"></span>
      </div>
    </div>
  );
}
