import React from "react";
import foodSampleImg from "../images/paella.jpg";
import reptileImg from "../images/contemplative-reptile.jpg";

export default function Card() {
  return (
    <div className="component-wrapper container-md">
      <h2>Cards</h2>
      {/* -------------------------------simple cards-------------------------- */}
      <h3>Simple card</h3>
      <div className="card bg-white text-black container-xs mb-4">
        <div className="card__content text-center">
          <svg
            aria-hidden="true"
            focusable="false"
            // data-prefix="fas"
            // data-icon="bolt"
            role="img"
            viewBox="0 0 320 512"
            style={{
              borderRadius: "100%",
              height: "4.75rem",
              width: "4.75rem",
              backgroundColor: "#E1EFFC",
              padding: "1.5em",
              fill: "#1B74D9",
            }}
          >
            <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
          </svg>
          <p className="text-bold">Fast. Very fast.</p>
          <p>Blazing fast speed you can depend on.</p>
        </div>
      </div>

      <div className="card bg-white text-black container-xs mb-4">
        <div className="card__content">
          <div className="card__header">
            <div className="card__title">
              <div className="text-bold text-title">Title</div>
              <div className="text-subtitle">Subtitle for card</div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            dolores ad. Assumenda dolorum sunt, fuga velit sequi officia ea
            facere nostrum ad...
          </p>
        </div>
        <div className="card__footer">
          <div className="card__actions">
            <button className="btn btn--sm btn--rounded btn--link ml-auto text-bold">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* ------------------------------full card structure--------------------------- */}
      <h3>Full Card Structure</h3>
      {/* <div className="card container-xs0 bg-white text-black"> */}
      <div className="card container-xs0 bg-grey1 text-white mb-4">
        <div className="card__header">
          <div className="avatar bg-black mr-3">SK</div>
          <div className="card__title">
            <div className="text-title text-bold">Shrimp and Chorizo</div>
            <div className="text-subtitle">September 14, 2016</div>
          </div>
          <div className="card__actions ml-auto">
            <button className="btn btn--sm btn btn--icon-rounded btn--rounded">
              <svg
                className="icon-sm fill-white"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="card__media">
          <img src={foodSampleImg} alt="" />
        </div>
        <div className="card__content">
          <p className="text-para">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </p>
        </div>
        <div className="card__footer">
          <div className="card__actions w-full">
            <div className="">
              <button className="btn btn--sm btn--icon-circle btn--rounded mr-3">
                <svg
                  className="icon-sm fill-white"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
              </button>
              <button className="btn btn--sm btn--icon-circle btn--rounded">
                <svg
                  className="icon-sm fill-white"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                </svg>
              </button>
            </div>
            <button className="btn btn--sm btn--icon-circle btn--rounded ml-auto">
              <svg
                className="icon-sm fill-white"
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
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="card container-xs0 bg-white text-black mb-4">
        <div className="card__media">
          <img src={reptileImg} alt="" />
        </div>
        <div className="card__content">
          <div className="card__title">
            <div className="text-bold text-title">Lizard</div>
            <div className="text-para">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="card__actions">
            <button className="btn btn--sm btn--link text-bold">Share</button>
            <button className="btn btn--sm btn--link text-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="card container-xs0 bg-white text-black p-2 mb-4">
        <div className="card__header border-bottom">
          <div className="card__title">
            <div className="text-title text-bold">Delete</div>
          </div>
        </div>
        <div className="card__content">
          <p className="py-4">Are you sure you want to delete this file?</p>
        </div>
        <div className="card__footer border-top">
          <div className="card__actions ml-auto">
            <button className="btn btn--sm btn--rounded mr-2">No</button>
            <button className="btn btn--sm btn--rounded btn--danger mr-2">
              Yes
            </button>
          </div>
        </div>
      </div>
      {/* -----------------------card with dismiss btn------------------------- */}
      <h3>Card with dismiss button</h3>
      <div className="card container-xs0 bg-white text-black p-2 mb-4">
        <div className="card__header">
          <div className="avatar avatar--square bg-black text-white mr-3">
            EF
          </div>
          <div className="card__title">
            <div className="text-bold text-title">Elliot Fu</div>
            <div className="text-subtitle">Friends of Veronika</div>
          </div>
          <div className="card__actions ml-auto">
            <button className="btn btn--sm btn--icon-circle btn--rounded">
              <svg
                className="icon-sm fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="card__content">
          Elliot requested permission to view your contact details
        </div>
        <div className="card__footer border-top">
          <div className="card__actions ml-auto">
            <button className="btn btn--sm btn--success mr-2">Approve</button>
            <button className="btn btn--sm btn--danger mr-2">Decline</button>
          </div>
        </div>
      </div>
      {/* --------------------------card with overlay------------------- */}
      <h3>Cards with overlay</h3>
      {/* card with full overlay */}
      <div className="card container-xs0 bg-white text-black mb-4">
        <div className="card__media">
          <img src={reptileImg} alt="" />
        </div>
        <div className="card__overlay text-white flex-col-reverse">
          <div className="card__title">
            <div className="text-bold text-title">Lizard</div>
            <div className="text-subtitle">Squamate Reptiles</div>
          </div>
        </div>
      </div>
      {/* card with specific overlay on card__medua */}
      <div className="card container-xs0 bg-white text-black mb-4">
        <div className="card__media">
          <img src={reptileImg} alt="" />
          <div className="card__overlay text-white flex-col-reverse">
            <div className="card__title">
              <div className="text-bold text-title">Lizard</div>
              <div className="text-subtitle">Squamate Reptiles</div>
            </div>
          </div>
        </div>
        <div className="card__content">
          <div className="text-para">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </div>
        </div>
        <div className="card__footer">
          <div className="card__actions">
            <button className="btn btn--sm btn--link text-bold">Share</button>
            <button className="btn btn--sm btn--link text-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/*-------------------------horizontal cards---------------------- */}
      <h3>Horizontal Cards</h3>
      <div className="card card--horizontal container--sm bg-white text-black">
        <div className="card__media w-1/3">
          <img src={reptileImg} alt="" />
        </div>
        <div className="card__content w-2/3">
          <div className="card__header">
            <div className="card__title">
              <div className="text-bold text-title">Lizard</div>
            </div>
          </div>
          <div className="text-para">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Ipsa at ad a
            molestiae autem aliquid odit veritatis magni quisquam.
          </div>
          <div className="text-para">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
          <div className="card__footer">
            <div className="card__actions">
              <button className="btn btn--sm btn--link text-bold">Share</button>
              <button className="btn btn--sm btn--link text-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
