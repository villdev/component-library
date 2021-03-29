import React from "react";
import avatarImg from "../images/avatar.jpeg";

export default function Badge() {
  return (
    <div className="component-wrapper container-md">
      <h2>Badges</h2>
      <h3>Badges with icon</h3>
      <div className="badge-wrapper mr-4">
        <svg
          className="icon-md fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        <span className="badge bg-blue-600">9</span>
      </div>
      <div className="badge-wrapper">
        <svg
          className="icon-md fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
        <span className="badge bg-blue-600">10+</span>
      </div>
      {/* -------------------badge with icon in different sizes---------------- */}
      <h3>Badges with different sizes</h3>
      <div className="badge-wrapper mr-4">
        <svg
          className="icon-sm fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        <span className="badge badge--sm bg-blue-600">1</span>
      </div>
      <div className="badge-wrapper mr-4">
        <svg
          className="icon-md fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
        <span className="badge badge--md bg-blue-600">2</span>
      </div>
      <div className="badge-wrapper">
        <svg
          className="icon-lg fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
        <span className="badge badge--lg bg-blue-600">3</span>
      </div>
      {/* --------------------------badge with dot-------------- */}
      <h3>Badge with only dot</h3>
      <div className="badge-wrapper mr-4">
        <svg
          className="icon-sm fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        <span className="badge-dot badge-dot--sm bg-blue-600"></span>
      </div>
      <div className="badge-wrapper mr-4">
        <svg
          className="icon-md fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
        <span className="badge-dot bg-blue-600"></span>
      </div>
      <div className="badge-wrapper">
        <svg
          className="icon-lg fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
        <span className="badge-dot badge-dot--lg bg-blue-600"></span>
      </div>
      {/* -------------------badge alignment---------------- */}
      <h3>Badges with different alignment</h3>
      <div className="badge-wrapper mr-4">
        <svg
          className="icon-sm fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        <span className="badge badge--sm badge--bottom bg-blue-600">1</span>
      </div>
      <div className="badge-wrapper mr-4">
        <svg
          className="icon-md fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
        <span className="badge badge--md badge--bottom bg-blue-600">2</span>
      </div>
      <div className="badge-wrapper">
        <svg
          className="icon-lg fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
        <span className="badge badge--lg badge--bottom bg-blue-600">3</span>
      </div>
      {/* -------------------badge avatar---------------- */}
      <h3>Badges with avatar</h3>
      <div className="badge-wrapper avatar avatar--sm mr-4 bg-white text-black">
        SK
        <span className="badge badge--sm bg-blue-600 text-white">1</span>
      </div>
      <div className="badge-wrapper avatar mr-4">
        <img src={avatarImg} alt="" />
        <span className="badge badge--md bg-blue-600">2</span>
      </div>
      <div className="badge-wrapper avatar avatar--lg">
        <img src={avatarImg} alt="" />
        <span className="badge badge--lg bg-blue-600">3</span>
      </div>
      {/* -------------------badge-dot avatar---------------- */}
      <h3>Badge-dot with avatar</h3>
      <div className="badge-wrapper avatar avatar--sm mr-4 bg-white text-black">
        SK
        <span className="badge-dot badge-dot--sm bg-blue-600 text-white"></span>
      </div>
      <div className="badge-wrapper avatar mr-4">
        <img src={avatarImg} alt="" />
        <span className="badge-dot badge-dot--md bg-blue-600"></span>
      </div>
      <div className="badge-wrapper avatar avatar--lg">
        <img src={avatarImg} alt="" />
        <span className="badge-dot badge-dot--lg badge--bottom bg-blue-600"></span>
      </div>
    </div>
  );
}
