import React from "react";

export default function Button() {
  return (
    <div className="component-wrapper container-md">
      <h2>Buttons</h2>
      {/* ---------------------sizes--------------------------------- */}
      <h3>Primary buttons with different sizes</h3>
      <button className="btn btn--sm text-white bg-blue2 mr-4">
        Subscribe
      </button>
      <button className="btn text-white bg-black mr-4">Submit</button>
      <button className="btn btn--lg text-black bg-white mr-4">Search</button>
      {/* ----------------border radius roudned pill -------------------*/}
      <h3>Primary buttons with border radius variants</h3>
      <button className="btn btn--sm text-white bg-blue2 mr-4">
        Subscribe
      </button>
      <button className="btn btn--rounded text-white bg-black mr-4">
        Submit
      </button>
      <button className="btn btn--pill btn--lg text-black bg-white mr-4">
        Search
      </button>
      {/* ----------------btn with color variants -------------------*/}
      {/* add color variants with their hover effects---------add b&w buttons------------------------------------- */}
      <h3>Primary buttons with color variants and hover</h3>
      <button className="btn btn--rounded btn--sm btn--default mr-4">
        Subscribe
      </button>
      <button className="btn btn--rounded btn--sm btn--danger mr-4">
        Submit
      </button>
      <button className="btn btn--rounded btn--sm btn--success mr-4">
        Search
      </button>
      <button className="btn btn--rounded btn--sm btn--dark mr-4">
        Search
      </button>
      <button className="btn btn--rounded btn--sm btn--black mr-4">
        Search
      </button>
      <button className="btn btn--rounded btn--sm btn--white mr-4">
        Search
      </button>
      <button className="btn btn--rounded btn--sm btn--blue mr-4">
        Search
      </button>
      <button className="btn btn--rounded btn--sm btn--yellow mr-4">
        Search
      </button>
      {/* ----------------w/o box shadow----------------------------- */}
      <h3>Primary buttons without box shadow / elevation</h3>
      <button className="btn btn--sm btn--rounded btn--no-shadow text-white bg-blue2 mr-4">
        Subscribe
      </button>
      <button className="btn btn--rounded btn--no-shadow text-white bg-black mr-4">
        Submit
      </button>
      <button className="btn btn--rounded btn--no-shadow btn--lg text-black bg-white mr-4">
        Search
      </button>
      {/* ----------------outlined----------------------------- */}
      <h3>Outlined buttons with hover</h3>
      <button className="btn btn--sm btn--rounded btn--outlined btn--success text-white mr-4">
        Subscribe
      </button>
      <button className="btn btn--sm btn--rounded btn--outlined btn--default text-white mr-4">
        Submit
      </button>
      <button className="btn btn--sm btn--rounded btn--outlined btn--danger text-white mr-4">
        Search
      </button>
      <button className="btn btn--sm btn--rounded btn--outlined btn--dark text-white mr-4">
        Search
      </button>
      <button className="btn btn--sm btn--rounded btn--outlined btn--black text-white mr-4">
        Search
      </button>
      <button className="btn btn--sm btn--rounded btn--outlined btn--white text-white mr-4">
        Search
      </button>
      <button className="btn btn--sm btn--rounded btn--outlined btn--yellow text-white mr-4">
        Search
      </button>
      <button className="btn btn--sm btn--rounded btn--outlined btn--blue text-white mr-4">
        Search
      </button>
      {/* ----------------link/txt btn----------------------------- */}
      <h3>Link / text buttons</h3>
      <button className="btn btn--sm btn--rounded btn--link text-white mr-4">
        Subscribe
      </button>
      <button className="btn btn--rounded btn--link text-white mr-4">
        Submit
      </button>
      <button className="btn btn--rounded btn--link text-white btn--lg mr-4">
        Search
      </button>
      {/* ----------------icon and text btn----------------------------- */}
      <h3>Buttons with icon and label</h3>
      <button className="btn btn--sm btn--rounded btn--default mr-4">
        Upload
        <div className="btn__icon icon-sm">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
          </svg>
        </div>
      </button>
      <button className="btn btn--md btn--rounded btn--danger mr-4">
        <div className="btn__icon icon-md">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </div>
        Delete
      </button>
      <button className="btn btn--md btn--rounded btn--yellow mr-4">
        <div className="btn__icon icon-md">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </div>
        Delete
      </button>
      <button className="btn btn--lg btn--rounded btn--outlined btn--success mr-4">
        <div className="btn__icon icon-lg">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
          </svg>
        </div>
        Save
      </button>
      {/* ----------------icon btn----------------------------- */}
      <h3>Buttons with only icons</h3>
      <button className="btn btn--icon btn--sm btn--rounded mr-4">
        <svg
          className="icon-sm"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
        </svg>
      </button>
      <button className="btn btn--icon-circle btn--sm btn--rounded mr-4">
        <svg
          className="icon-sm"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </button>
      <button className="btn btn--icon-rounded btn--sm btn--rounded mr-4">
        <svg
          className="icon-sm"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
        </svg>
      </button>
      {/* ----------------disabled btns -------------------*/}
      <h3>Disabled btns</h3>
      <button className="btn btn--rounded btn--sm btn--default btn--disabled mr-4">
        Subscribe
      </button>
      <button className="btn btn--rounded btn--sm btn--danger btn--disabled mr-4">
        Submit
      </button>
      <button className="btn btn--rounded btn--sm btn--success btn--disabled mr-4">
        Search
      </button>
    </div>
  );
}
