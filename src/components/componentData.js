import React from "react";
// import avatarImg for avatars
//import foodsampleimg and reptile img for cards

export const componentData = {
  Avatar: {
    title: "Avatar",
    desc:
      "The Avatar component is typically used to display images, icons or initials representing people or other entities.",
    intro:
      'Created using a div with <div className="highlight">.avatar</div> class, wrapping an image, icon or text.',
    lightVariants: [
      {
        name: "With Image",
        desc:
          'Image avatars can be created by wrapping an image with a div with class name <div className="highlight">.avatar</div>.',
        code: (
          <div className="comp__eg">
            <div className="avatar">
              <img src={avatarImg} alt="" />
            </div>
          </div>
        ),
      },
      {
        name: "With Text",
        desc:
          'Avatars containing simple character can be created by wrapping the characters in a div with class name <div className="highlight">.avatar</div>. The text color and background color is not set and can be customized',
        code: (
          <div className="comp__eg">
            <div className="avatar bg-red-500 text-black">Sk</div>
          </div>
        ),
      },
      {
        name: "Sizes",
        desc:
          'Avatars come in five sizes- <div className="highlight">.avatar--sm</div>, <div className="highlight">.avatar--md</div>(default), <div className="highlight">avatar--lg</div>, <div className="highlight">avatar--xl</div> and <div className="highlight">avatar--2xl</div>. Just add the corresponding class in <div className="highlight">.avatar</div> wrapping div.',
        code: (
          <div className="comp__eg">
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
          </div>
        ),
      },
      {
        name: "With Icons",
        desc:
          'Icon avatar can be created by adding <div className="highlight">.avatar--icon</div> class in wrapping div. Background is transparent by default and can be set along with text color.',
        code: (
          <div className="comp__eg">
            <div className="avatar avatar--icon avatar--sm bg-black fill-white">
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path>
              </svg>
            </div>
            <div className="avatar avatar--icon bg-black fill-white">
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
              </svg>
            </div>
            <div className="avatar avatar--icon avatar--lg bg-black fill-white">
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
              </svg>
            </div>
          </div>
        ),
      },
      {
        name: "Square Variants",
        desc:
          'If you need square or rounded variants add the <div className="highlight">.avatar--square</div> or <div className="highlight">.avatar--rounded</div> class.',
        code: (
          <div className="comp__eg">
            <div className="avatar avatar--square avatar--sm bg-black text-white">
              S
            </div>
            <div className="avatar avatar--square">
              <img src={avatarImg} alt="" />
            </div>
            <div className="avatar avatar--rounded avatar--lg">
              <img src={avatarImg} alt="" />
            </div>
          </div>
        ),
      },
      {
        name: "With Badge",
        desc:
          'Add a span element inside <div className="highlight">.avatar</div> div and add classes as needed. Refer to Badge component for the badge classes.',
        code: (
          <div className="comp__eg">
            <div className="avatar avatar--rounded badge-wrapper">
              <img src={avatarImg} alt="" />
              <span className="badge-dot badge-dot--md bg-black"></span>
            </div>
            <div className="avatar badge-wrapper bg-black fill-white">
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
              </svg>
              <span className="badge badge--md bg-blue-600 text-white">2</span>
            </div>
            <div className="avatar badge-wrapper">
              <svg
                className="fill-black"
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
              <span className="badge-dot badge-dot--md bg-black"></span>
            </div>
          </div>
        ),
      },
    ],
    darkVariants: [
      {
        name: "With Image",
        desc:
          'Image avatars can be created by wrapping an image with a div with class name <div className="highlight">.avatar</div>.',
        code: (
          <div className="comp__eg">
            <div className="avatar">
              <img src={avatarImg} alt="" />
            </div>
          </div>
        ),
      },
      {
        name: "With Text",
        desc:
          'Avatars containing simple character can be created by wrapping the characters in a div with class name <div className="highlight">.avatar</div>. The text color and background color is not set and can be customized',
        code: (
          <div className="comp__eg">
            <div className="avatar bg-red-500 text-black">Sk</div>
          </div>
        ),
      },
      {
        name: "Sizes",
        desc:
          'Avatars come in five sizes- <div className="highlight">.avatar--sm</div>, <div className="highlight">.avatar--md</div>(default), <div className="highlight">avatar--lg</div>, <div className="highlight">avatar--xl</div> and <div className="highlight">avatar--2xl</div>. Just add the corresponding class in <div className="highlight">.avatar</div> wrapping div.',
        code: (
          <div className="comp__eg">
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
          </div>
        ),
      },
      {
        name: "With Icons",
        desc:
          'Icon avatar can be created by adding <div className="highlight">.avatar--icon</div> class in wrapping div. Background is transparent by default and can be set along with text color.',
        code: (
          <div className="comp__eg">
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
          </div>
        ),
      },
      {
        name: "Square Variants",
        desc:
          'If you need square or rounded variants add the <div className="highlight">.avatar--square</div> or <div className="highlight">.avatar--rounded</div> class.',
        code: (
          <div className="comp__eg">
            <div className="avatar avatar--square avatar--sm bg-white text-black">
              S
            </div>
            <div className="avatar avatar--square">
              <img src={avatarImg} alt="" />
            </div>
            <div className="avatar avatar--rounded avatar--lg">
              <img src={avatarImg} alt="" />
            </div>
          </div>
        ),
      },
      {
        name: "With Badge",
        desc:
          'Add a span element inside <div className="highlight">.avatar</div> div and add classes as needed. Refer to Badge component for the badge classes.',
        code: (
          <div className="comp__eg">
            <div className="avatar avatar--rounded badge-wrapper">
              <img src={avatarImg} alt="" />
              <span className="badge-dot badge-dot--md bg-white text-black"></span>
            </div>
            <div className="avatar badge-wrapper bg-white">
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
              </svg>
              <span className="badge badge--md bg-blue-600 text-white">2</span>
            </div>
            <div className="avatar badge-wrapper">
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
        ),
      },
    ],
    classes: [
      ".avatar",
      ".avatar--sm",
      ".avatar--md",
      ".avatar--lg",
      ".avatar--xl",
      ".avatar--2xl",
      ".avatar--icon",
      ".avatar--square",
      ".avatar--rounded",
    ],
  },
  Alert: {
    title: "Alert",
    desc:
      "An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task. Used to give feedback to the user about an action or state.",
    intro:
      'Created using a div with <div className="highlight">.alert</div> class wrapping an <div className="highlight">.alert__msg</div> div. Use <div className="highlight">.alert--light</div> for light scheme variant. Takes width of parent container.',
    lightVariants: [
      {
        name: "Different Severity",
        desc:
          'Alerts come in five severity levels depending on which their color changes. First is the default alert. Red for <div className="highlight">.alert--error</div>, yellow for <div className="highlight">.alert--warning</div>, blue for <div className="highlight">.alert--info</div> and green for <div className="highlight">.alert--success</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--light">
              <div className="alert__msg"> This is a normal alert!</div>
            </div>
            <div className="alert alert--error alert--light">
              <div className="alert__msg"> This is an error alert!</div>
            </div>
            <div className="alert alert--warning alert--light">
              <div className="alert__msg"> This is a warning alert!</div>
            </div>
            <div className="alert alert--info alert--light">
              <div className="alert__msg"> This is an info alert!</div>
            </div>
            <div className="alert alert--success alert--light">
              <div className="alert__msg"> This is a success alert!</div>
            </div>
          </div>
        ),
      },
      {
        name: "Rounded",
        desc:
          'Alerts have no rounded edges by default. Use <div className="highlight">.alert--rounded</div> to add a slight round edge. For more use <div className="highlight">.alert--rounded-full</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--rounded alert--light">
              <div className="alert__msg">This is an alert!</div>
            </div>
            <div className="alert alert--error alert--rounded alert--light">
              <div className="alert__msg">This is an error alert!</div>
            </div>
            <div className="alert alert--warning alert--rounded alert--light">
              <div className="alert__msg">This is a warning alert!</div>
            </div>
            <div className="alert alert--info alert--rounded-full alert--light">
              <div className="alert__msg">This is an info alert!</div>
            </div>
            <div className="alert alert--success alert--rounded-full alert--light">
              <div className="alert__msg">This is a success alert!</div>
            </div>
          </div>
        ),
      },
      {
        name: "With title",
        desc:
          'To add a title to the alert, add <div className="highlight">.alert__title</div> div inside <div className="highlight">.alert__msg</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--rounded alert--light">
              <div className="alert__msg">
                <div className="alert__title">Alert</div>
                This is an alert!
              </div>
            </div>
            <div className="alert alert--error alert--rounded alert--light">
              <div className="alert__msg">
                <div className="alert__title">Error</div>
                This is an error alert!
              </div>
            </div>
            <div className="alert alert--warning alert--rounded alert--light">
              <div className="alert__msg">
                <div className="alert__title">Warning</div>
                This is a warning alert!
              </div>
            </div>
            <div className="alert alert--info alert--rounded alert--light">
              <div className="alert__msg">
                <div className="alert__title">Info</div>
                This is an info alert!
              </div>
            </div>
            <div className="alert alert--success alert--rounded alert--light">
              <div className="alert__msg">
                <div className="alert__title">Success</div>
                This is a success alert!
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "With Icon",
        desc:
          'To add an icon, wrap an svg or img in <div className="highlight">.alert--icon</div> div inside <div className="highlight">.alert</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is an alert!</div>
            </div>
            <div className="alert alert--error alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is an error alert!</div>
            </div>
            <div className="alert alert--warning alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is a warning alert!</div>
            </div>
            <div className="alert alert--info alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Info</div>
                This is an info alert!
              </div>
            </div>
            <div className="alert alert--success alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Success</div>
                This is a success alert!
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "With Actions",
        desc:
          'An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert. Wrap the buttons in <div className="highlight">.alert__actions</div> div inside <div className="highlight">.alert</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Alert</div>
                This is an alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--error alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Error</div>
                This is an error alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--warning alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Warning</div>
                This is a warning alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--info alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is an info alert!</div>
              <div className="alert__actions">
                <button>Close</button>
              </div>
            </div>
            <div className="alert alert--success alert--rounded alert--light">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is a success alert!</div>
              <div className="alert__actions">
                <button>Undo</button>
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Outlined",
        desc:
          'To create the outlined variant, add <div className="highlight">.alert--outline</div> class to the <div className="highlight">.alert</div> div',
        code: (
          <div className="comp__eg">
            <div className="alert alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Alert</div>
                This is an alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--error alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Error</div>
                This is an error alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--warning alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Warning</div>
                This is a warning alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--info alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is an info alert!</div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--success alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is a success alert!</div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ),
      },
    ],
    darkVariants: [
      {
        name: "Different Severity",
        desc:
          'Alerts come in five severity levels depending on which their color changes. First is the default alert. Red for <div className="highlight">.alert--error</div>, yellow for <div className="highlight">.alert--warning</div>, blue for <div className="highlight">.alert--info</div> and green for <div className="highlight">.alert--success</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert">
              <div className="alert__msg"> This is a normal alert!</div>
            </div>
            <div className="alert alert--error">
              <div className="alert__msg"> This is an error alert!</div>
            </div>
            <div className="alert alert--warning">
              <div className="alert__msg"> This is a warning alert!</div>
            </div>
            <div className="alert alert--info">
              <div className="alert__msg"> This is an info alert!</div>
            </div>
            <div className="alert alert--success">
              <div className="alert__msg"> This is a success alert!</div>
            </div>
          </div>
        ),
      },
      {
        name: "Rounded",
        desc:
          'Alerts have no rounded edges by default. Use <div className="highlight">.alert--rounded</div> to add a slight round edge. For more use <div className="highlight">.alert--rounded-full</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--rounded">
              <div className="alert__msg">This is an alert!</div>
            </div>
            <div className="alert alert--error alert--rounded">
              <div className="alert__msg">This is an error alert!</div>
            </div>
            <div className="alert alert--warning alert--rounded">
              <div className="alert__msg">This is a warning alert!</div>
            </div>
            <div className="alert alert--info alert--rounded-full">
              <div className="alert__msg">This is an info alert!</div>
            </div>
            <div className="alert alert--success alert--rounded-full">
              <div className="alert__msg">This is a success alert!</div>
            </div>
          </div>
        ),
      },
      {
        name: "With title",
        desc:
          'To add a title to the alert, add <div className="highlight">.alert__title</div> div inside <div className="highlight">.alert__msg</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--rounded">
              <div className="alert__msg">
                <div className="alert__title">Alert</div>
                This is an alert!
              </div>
            </div>
            <div className="alert alert--error alert--rounded">
              <div className="alert__msg">
                <div className="alert__title">Error</div>
                This is an error alert!
              </div>
            </div>
            <div className="alert alert--warning alert--rounded">
              <div className="alert__msg">
                <div className="alert__title">Warning</div>
                This is a warning alert!
              </div>
            </div>
            <div className="alert alert--info alert--rounded">
              <div className="alert__msg">
                <div className="alert__title">Info</div>
                This is an info alert!
              </div>
            </div>
            <div className="alert alert--success alert--rounded">
              <div className="alert__msg">
                <div className="alert__title">Success</div>
                This is a success alert!
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "With Icon",
        desc:
          'To add an icon, wrap an svg or img in <div className="highlight">.alert--icon</div> div inside <div className="highlight">.alert</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is an alert!</div>
            </div>
            <div className="alert alert--error alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is an error alert!</div>
            </div>
            <div className="alert alert--warning alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is a warning alert!</div>
            </div>
            <div className="alert alert--info alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Info</div>
                This is an info alert!
              </div>
            </div>
            <div className="alert alert--success alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Success</div>
                This is a success alert!
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "With Actions",
        desc:
          'An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert. Wrap the buttons in <div className="highlight">.alert__actions</div> div inside <div className="highlight">.alert</div>.',
        code: (
          <div className="comp__eg">
            <div className="alert alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Alert</div>
                This is an alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--error alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Error</div>
                This is an error alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--warning alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Warning</div>
                This is a warning alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--info alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is an info alert!</div>
              <div className="alert__actions">
                <button>Close</button>
              </div>
            </div>
            <div className="alert alert--success alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is a success alert!</div>
              <div className="alert__actions">
                <button>Undo</button>
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Outlined",
        desc:
          'To create the outlined variant, add <div className="highlight">.alert--outline</div> class to the <div className="highlight">.alert</div> div',
        code: (
          <div className="comp__eg">
            <div className="alert alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Alert</div>
                This is an alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--error alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Error</div>
                This is an error alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--warning alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
                </svg>
              </div>
              <div className="alert__msg">
                <div className="alert__title">Warning</div>
                This is a warning alert!
              </div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--info alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is an info alert!</div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="alert alert--success alert--outline alert--rounded">
              <div className="alert__icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
                </svg>
              </div>
              <div className="alert__msg">This is a success alert!</div>
              <div className="alert__actions">
                <button>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ),
      },
    ],
    classes: [
      ".alert",
      ".alert--light",
      ".alert__msg",
      ".alert__title",
      ".alert__icon",
      ".alert__actions",
    ],
  },
  Badge: {
    title: "Badge",
    desc:
      "Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are.",
    intro:
      'Inside a <div className="highlight">.badge-wrapper</div> div, add an svg/img and a span with class <div className="highlight">.badge</div>.',
    lightVariants: [
      {
        name: "With Icon",
        desc:
          'Wrap an svg/img inside a <div className="highlight">.badge-wrapper</div> div and add a span with class <div className="highlight">.badge</div>.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper">
              <svg
                className="icon-md fill-black"
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
                className="icon-md fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span className="badge bg-blue-600">10+</span>
            </div>
          </div>
        ),
      },
      {
        name: "Sizes",
        desc:
          'To change the size add <div className="highlight">.badge--sm</div>, <div className="highlight">.badge--md</div>(default) or <div className="highlight">.badge--lg</div>. Also add corresponding icon class from the utility classes.',
        code: (
          <div className="comp__e">
            <div className="badge-wrapper">
              <svg
                className="icon-sm fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
              <span className="badge badge--sm bg-blue-600">1</span>
            </div>
            <div className="badge-wrapper">
              <svg
                className="icon-md fill-black"
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
                className="icon-lg fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span className="badge badge--lg bg-blue-600">3</span>
            </div>
          </div>
        ),
      },
      {
        name: "Dot Variant",
        desc:
          'To use a badge without text use class <div className="highlight">.badge-dot</div> instead of <div className="highlight">.badge</div> in the span element.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper">
              <svg
                className="icon-sm fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
              <span className="badge-dot badge-dot--sm bg-blue-600 border-color-white"></span>
            </div>
            <div className="badge-wrapper">
              <svg
                className="icon-md fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span className="badge-dot bg-blue-600 border-color-white"></span>
            </div>
            <div className="badge-wrapper">
              <svg
                className="icon-lg fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span className="badge-dot badge-dot--lg bg-blue-600 border-color-white"></span>
            </div>
          </div>
        ),
      },
      {
        name: "Alignment",
        desc:
          'To change the alignment from top-left(default) to bottom-left add <div className="highlight">.badge--bottom</div> class to <div className="highlight">.badge</div>.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper">
              <svg
                className="icon-sm fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
              <span className="badge badge--sm badge--bottom bg-blue-600">
                1
              </span>
            </div>
            <div className="badge-wrapper">
              <svg
                className="icon-md fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span className="badge badge--md badge--bottom bg-blue-600">
                2
              </span>
            </div>
            <div className="badge-wrapper">
              <svg
                className="icon-lg fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span className="badge badge--lg badge--bottom bg-blue-600">
                3
              </span>
            </div>
          </div>
        ),
      },
      {
        name: "With Avatar",
        desc:
          'To add badge to avatar, add <div className="highlight">.badge-wrapper</div> class to <div className="highlight">.avatar</div> div. Then add span inside with <div className="highlight">.badge</div> class.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper avatar avatar--sm bg-black text-white">
              SK
              <span className="badge badge--sm bg-blue-600 text-white">1</span>
            </div>
            <div className="badge-wrapper avatar">
              <img src={avatarImg} alt="" />
              <span className="badge badge--md bg-blue-600">2</span>
            </div>
            <div className="badge-wrapper avatar avatar--lg">
              <img src={avatarImg} alt="" />
              <span className="badge badge--lg bg-blue-600">3</span>
            </div>
          </div>
        ),
      },
      {
        name: "Dot with Avatar",
        desc:
          'To get the dot variant just replace <div className="highlight">.badge</div> with <div className="highlight">.badge-dot</div>.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper avatar avatar--sm bg-black text-white">
              SK
              <span className="badge-dot badge-dot--sm bg-blue-600 text-white border-color-white"></span>
            </div>
            <div className="badge-wrapper avatar">
              <img src={avatarImg} alt="" />
              <span className="badge-dot badge-dot--md bg-blue-600 border-color-white"></span>
            </div>
            <div className="badge-wrapper avatar avatar--lg">
              <img src={avatarImg} alt="" />
              <span className="badge-dot badge-dot--lg badge--bottom bg-blue-600 border-color-white"></span>
            </div>
          </div>
        ),
      },
    ],
    darkVariants: [
      {
        name: "With Icon",
        desc:
          'Wrap an svg/img inside a <div className="highlight">.badge-wrapper</div> div and add a span with class <div className="highlight">.badge</div>.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper">
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
          </div>
        ),
      },
      {
        name: "Sizes",
        desc:
          'To change the size add <div className="highlight">.badge--sm</div>, <div className="highlight">.badge--md</div>(default) or <div className="highlight">.badge--lg</div>. Also add corresponding icon class from the utility classes.',
        code: (
          <div className="comp__e">
            <div className="badge-wrapper">
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
            <div className="badge-wrapper">
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
          </div>
        ),
      },
      {
        name: "Dot Variant",
        desc:
          'To use a badge without text use class <div className="highlight">.badge-dot</div> instead of <div className="highlight">.badge</div> in the span element.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper">
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
            <div className="badge-wrapper">
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
          </div>
        ),
      },
      {
        name: "Alignment",
        desc:
          'To change the alignment from top-left(default) to bottom-left add <div className="highlight">.badge--bottom</div> class to <div className="highlight">.badge</div>.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper">
              <svg
                className="icon-sm fill-white"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
              <span className="badge badge--sm badge--bottom bg-blue-600">
                1
              </span>
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
              <span className="badge badge--md badge--bottom bg-blue-600">
                2
              </span>
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
              <span className="badge badge--lg badge--bottom bg-blue-600">
                3
              </span>
            </div>
          </div>
        ),
      },
      {
        name: "With Avatar",
        desc:
          'To add badge to avatar, add <div className="highlight">.badge-wrapper</div> class to <div className="highlight">.avatar</div> div. Then add span inside with <div className="highlight">.badge</div> class.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper avatar avatar--sm bg-white text-black">
              SK
              <span className="badge badge--sm bg-blue-600 text-white">1</span>
            </div>
            <div className="badge-wrapper avatar">
              <img src={avatarImg} alt="" />
              <span className="badge badge--md bg-blue-600">2</span>
            </div>
            <div className="badge-wrapper avatar avatar--lg">
              <img src={avatarImg} alt="" />
              <span className="badge badge--lg bg-blue-600">3</span>
            </div>
          </div>
        ),
      },
      {
        name: "Dot with Avatar",
        desc:
          'To get the dot variant just replace <div className="highlight">.badge</div> with <div className="highlight">.badge-dot</div>.',
        code: (
          <div className="comp__eg">
            <div className="badge-wrapper avatar avatar--sm bg-white text-black">
              SK
              <span className="badge-dot badge-dot--sm bg-blue-600 text-white"></span>
            </div>
            <div className="badge-wrapper avatar">
              <img src={avatarImg} alt="" />
              <span className="badge-dot badge-dot--md bg-blue-600"></span>
            </div>
            <div className="badge-wrapper avatar avatar--lg">
              <img src={avatarImg} alt="" />
              <span className="badge-dot badge-dot--lg badge--bottom bg-blue-600"></span>
            </div>
          </div>
        ),
      },
    ],
    classes: [
      ".badge-wrapper",
      ".badge",
      ".badge-dot",
      ".badge--sm",
      ".badge--md",
      ".badge--lg",
      ".badge--bottom",
    ],
  },
  Button: {
    title: "Button",
    desc:
      "Buttons allow users to take actions, and make choices, with a single tap. Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both.",
    intro:
      'Add <div className="highlight">.btn</div> class in a button element for a simple button. Add variants to give it color, size and hover effects.',
    lightVariants: [
      {
        name: "Sizes",
        desc:
          'Three different sizes provided. Just add the following class to <div className="highlight">.btn</div> element: <div className="highlight">.btn--sm</div> for smallest, default is <div className="highlight">.btn--md</div> with largest size being <div className="highlight">.btn--lg</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm text-white bg-blue-400">
              Submit
            </button>
            <button className="btn btn--md text-white bg-blue-500">
              Submit
            </button>
            <button className="btn btn--lg text-white bg-blue-600">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Rounded",
        desc:
          'Default button has no rounded edges. Add <div className="highlight">.btn--rounded</div> class to <div className="highlight">.btn</div> to get rounded edges. To get pill shaped button use <div className="highlight">.btn--pill</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm text-white bg-blue-500">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded text-white bg-blue-500">
              Submit
            </button>
            <button className="btn btn--sm btn--pill text-white bg-blue-600">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Colors",
        desc:
          'There are eight preset variants. <div className="highlight">.btn--default</div>, <div className="highlight">.btn--danger</div>, <div className="highlight">.btn--success</div>, <div className="highlight">.btn--dark</div>, <div className="highlight">.btn--blue</div>, <div className="highlight">.btn--yellow</div>, <div className="highlight">.btn--black</div> and <div className="highlight">.btn--white</div>. Preset variant colors have hover effects as well.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--rounded btn--sm btn--default">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--danger ">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--success ">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--dark">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--blue">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--yellow">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--black">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--white">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "No Box-Shadow",
        desc:
          'Buttons by default have box-shadow enabled. To remove add <div className="highlight">.btn--no-shadow</div> class to <div className="highlight">.btn</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm btn--rounded btn--no-shadow btn--blue">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--no-shadow btn--dark">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--no-shadow btn--default">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Outline",
        desc:
          'To use the outlined variant, add <div className="highlight">.btn--outlined</div> class to <div className="highlight">.btn</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm btn--rounded btn--outlined btn--default text-white">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--danger text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--success text-white">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--dark text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--blue text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--yellow text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--black text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--white text-white">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Link",
        desc:
          'To style link/text buttons, add <div className="highlight">.btn--link</div> to <div className="highlight">.btn</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm btn--rounded btn--link text-black">
              Subscribe
            </button>
            <button className="btn btn--sm btn--rounded btn--link text-black">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--link text-black">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Icon and Label",
        desc:
          'Create a button with icon and label by adding a div with class <div className="highlight">.btn__icon</div> that wraps an img/svg inside <div className="highlight">.btn</div>. Depending on position of <div className="highlight">.btn__icon</div> the icon will be positioned first or last.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm btn--rounded btn--default">
              Upload
              <div className="btn__icon icon-sm">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
                </svg>
              </div>
            </button>
            <button className="btn btn--sm btn--rounded btn--danger">
              <div className="btn__icon icon-sm">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
              </div>
              Delete
            </button>
            <button className="btn btn--sm btn--rounded btn--yellow">
              <div className="btn__icon icon-sm">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
              </div>
              Delete
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--success">
              <div className="btn__icon icon-sm">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
                </svg>
              </div>
              Save
            </button>
          </div>
        ),
      },
      {
        name: "Icon only",
        desc:
          'To get buttons with only icon, add <div className="highlight">.btn--icon</div> class to <div className="highlight">.btn</div> and put an img/svg inside.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--icon btn--sm btn--rounded">
              <svg
                className="icon-sm fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
              </svg>
            </button>
            <button className="btn btn--icon-circle btn--sm btn--rounded">
              <svg
                className="icon-sm fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
            </button>
            <button className="btn btn--icon-rounded btn--sm btn--rounded">
              <svg
                className="icon-sm fill-black"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
              </svg>
            </button>
          </div>
        ),
      },
      {
        name: "Disabled",
        desc:
          'To show that a button is disabled, add <div className="highlight">.btn--disabled</div> class.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--rounded btn--sm btn--blue btn--disabled">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--danger btn--disabled">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--success btn--disabled">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Text-button utility",
        desc:
          'To change text style of button to preset style, add <div className="highlight">.text-button</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--rounded btn--sm btn--danger text-button ">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--success text-button ">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--blue text-button">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--yellow text-button">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--danger text-white text-button">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--success text-white text-button">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--blue text-white text-button">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--yellow text-white text-button">
              Search
            </button>
          </div>
        ),
      },
    ],
    darkVariants: [
      {
        name: "Sizes",
        desc:
          'Three different sizes provided. Just add the following class to <div className="highlight">.btn</div> element: <div className="highlight">.btn--sm</div> for smallest, default is <div className="highlight">.btn--md</div> with largest size being <div className="highlight">.btn--lg</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm text-white bg-blue-400">
              Submit
            </button>
            <button className="btn btn--md text-white bg-blue-500">
              Submit
            </button>
            <button className="btn btn--lg text-white bg-blue-600">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Rounded",
        desc:
          'Default button has no rounded edges. Add <div className="highlight">.btn--rounded</div> class to <div className="highlight">.btn</div> to get rounded edges. To get pill shaped button use <div className="highlight">.btn--pill</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm text-white bg-blue-500">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded text-white bg-blue-500">
              Submit
            </button>
            <button className="btn btn--sm btn--pill text-white bg-blue-600">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Colors",
        desc:
          'There are eight preset variants. <div className="highlight">.btn--default</div>, <div className="highlight">.btn--danger</div>, <div className="highlight">.btn--success</div>, <div className="highlight">.btn--dark</div>, <div className="highlight">.btn--blue</div>, <div className="highlight">.btn--yellow</div>, <div className="highlight">.btn--black</div> and <div className="highlight">.btn--white</div>. Preset variant colors have hover effects as well.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--rounded btn--sm btn--default">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--danger ">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--success ">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--dark">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--blue">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--yellow">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--black">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--white">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "No Box-Shadow",
        desc:
          'Buttons by default have box-shadow enabled. To remove add <div className="highlight">.btn--no-shadow</div> class to <div className="highlight">.btn</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm btn--rounded btn--no-shadow btn--blue">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--no-shadow btn--dark">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--no-shadow btn--default">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Outline",
        desc:
          'To use the outlined variant, add <div className="highlight">.btn--outlined</div> class to <div className="highlight">.btn</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm btn--rounded btn--outlined btn--default text-white">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--danger text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--success text-white">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--dark text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--blue text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--yellow text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--black text-white">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--white text-white">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Link",
        desc:
          'To style link/text buttons, add <div className="highlight">.btn--link</div> to <div className="highlight">.btn</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm btn--rounded btn--link text-white">
              Subscribe
            </button>
            <button className="btn btn--sm btn--rounded btn--link text-white">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--link text-white">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Icon and Label",
        desc:
          'Create a button with icon and label by adding a div with class <div className="highlight">.btn__icon</div> that wraps an img/svg inside <div className="highlight">.btn</div>. Depending on position of <div className="highlight">.btn__icon</div> the icon will be positioned first or last.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--sm btn--rounded btn--default">
              Upload
              <div className="btn__icon icon-sm">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
                </svg>
              </div>
            </button>
            <button className="btn btn--sm btn--rounded btn--danger">
              <div className="btn__icon icon-sm">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
              </div>
              Delete
            </button>
            <button className="btn btn--sm btn--rounded btn--yellow">
              <div className="btn__icon icon-sm">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
              </div>
              Delete
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--success">
              <div className="btn__icon icon-sm">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
                </svg>
              </div>
              Save
            </button>
          </div>
        ),
      },
      {
        name: "Icon only",
        desc:
          'To get buttons with only icon, add <div className="highlight">.btn--icon</div> class to <div className="highlight">.btn</div> and put an img/svg inside.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--icon btn--sm btn--rounded">
              <svg
                className="icon-sm"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
              </svg>
            </button>
            <button className="btn btn--icon-circle btn--sm btn--rounded">
              <svg
                className="icon-sm"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
            </button>
            <button className="btn btn--icon-rounded btn--sm btn--rounded">
              <svg
                className="icon-sm"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
              </svg>
            </button>
          </div>
        ),
      },
      {
        name: "Disabled",
        desc:
          'To show that a button is disabled, add <div className="highlight">.btn--disabled</div> class.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--rounded btn--sm btn--blue btn--disabled">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--danger btn--disabled">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--success btn--disabled">
              Search
            </button>
          </div>
        ),
      },
      {
        name: "Text-button utility",
        desc:
          'To change text style of button to preset style, add <div className="highlight">.text-button</div>.',
        code: (
          <div className="comp__eg">
            <button className="btn btn--rounded btn--sm btn--danger text-button ">
              Submit
            </button>
            <button className="btn btn--rounded btn--sm btn--success text-button ">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--blue text-button">
              Search
            </button>
            <button className="btn btn--rounded btn--sm btn--yellow text-button">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--danger text-white text-button">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--success text-white text-button">
              Submit
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--blue text-white text-button">
              Search
            </button>
            <button className="btn btn--sm btn--rounded btn--outlined btn--yellow text-white text-button">
              Search
            </button>
          </div>
        ),
      },
    ],
    classes: [
      ".btn",
      ".btn--sm",
      ".btn--md",
      ".btn--lg",
      ".btn--rounded",
      ".btn--pill",
      ".btn--default",
      ".btn--danger",
      ".btn--success",
      ".btn--dark",
      ".btn--blue",
      ".btn--yellow",
      ".btn-black",
      ".btn--white",
      ".btn--outlined",
      ".btn--link",
      ".btn__icon",
      ".btn--icon",
      ".btn--disabled",
      ".text-button",
    ],
  },
  Card: {
    title: "Card",
    desc: "Cards contain content and actions about a single subject.",
    intro:
      'A card is created by giving a div element a class of <div className="highlight">.card</div>. Card has further classes you can use to build complex structures. <div className="highlight">.card__header</div>, <div className="highlight">.card__media</div>, <div className="highlight">.card__overlay/div>, <div className="highlight">.card__content</div>, <div className="highlight">.card__title</div>, <div className="highlight">.card__actions</div> and <div className="highlight">.card__footer</div> can all be used in conjunction inside <div className="highlight">.card</div> element on div. Card background color, text color and size is not set by default and needs to be set.',
    lightVariants: [
      {
        name: "Simple Card",
        desc:
          'Simple variants can be created by using <div className="highlight">.card</div> and inside add a div with class <div className="highlight">.card__content</div>. Use <div className="highlight">.card__title</div> inside <div className="highlight">.card__content</div> or <div className="highlight">.card__header</div> if required. <div className="highlight">.card__footer</div> can be used to add a footer. If there are actions that need to be performed / buttons, use <div className="highlight">.card__actions</div>, preferably inside footer or header.',
        code: (
          <div className="comp__eg">
            <div className="card bg-black text-white container-xs">
              <div className="card__content text-center">
                <svg
                  aria-hidden="true"
                  className="fill-white"
                  focusable="false"
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
                <p className="text-body1">
                  Blazing fast speed you can depend on.
                </p>
              </div>
            </div>

            <div className="card bg-black text-white container-xs">
              <div className="card__content">
                <div className="card__title">
                  <div className="text-bold text-h5">Title</div>
                  <div className="text-subtitle2">Subtitle for card</div>
                </div>
                <p className="text-body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  dolores ad. Assumenda dolorum sunt, fuga velit sequi officia
                  ea facere nostrum ad...
                </p>
              </div>
              <div className="card__footer">
                <div className="card__actions">
                  <button className="btn btn--sm btn--rounded btn--link ml-auto text-white text-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Full Structure",
        desc:
          'The full structure includes <div className="highlight">.card__media</div> which by default takes up the entire width if there\'s an img inside. Most elements of cards can be used inside the other. For eg. <div className="highlight">.card__title</div> and <div className="highlight">.card__actions</div> can be used iniside <div className="highlight">.card__header</div>.',
        code: (
          <div className="comp__eg">
            <div className="card container-card bg-gray-800 text-white">
              <div className="card__header">
                <div className="avatar bg-red-500 mr-3">SK</div>
                <div className="card__title">
                  <div className="text-gray-50 text-medium">
                    Shrimp and Chorizo
                  </div>
                  <div className="text-subtitle2 text-gray-300">
                    September 14, 2016
                  </div>
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
                <p className="text-subtitle1 text-gray-300 text-light">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
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
            <div className="card container-card bg-black text-white">
              <div className="card__media">
                <img src={reptileImg} alt="" />
              </div>
              <div className="card__content">
                <div className="card__title">
                  <div className="text-h6 text-semibold mb-2">Lizard</div>
                  <div className="text-body1 text-light">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </div>
                </div>
              </div>
              <div className="card__footer">
                <div className="card__actions">
                  <button className="btn btn--sm btn--link text-white text-semibold">
                    Share
                  </button>
                  <button className="btn btn--sm btn--link text-white text-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="card container-card bg-black text-white p-2">
              <div className="card__header border-bottom">
                <div className="card__title">
                  <div className="text-h6 text-bold">Delete</div>
                </div>
              </div>
              <div className="card__content">
                <p className="text-body1  py-2">
                  Are you sure you want to delete this file?
                </p>
              </div>
              <div className="card__footer border-top">
                <div className="card__actions ml-auto">
                  <button className="btn btn--sm btn--rounded btn--default text-button mr-2">
                    No
                  </button>
                  <button className="btn btn--sm btn--rounded btn--danger text-button mr-2">
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Dismiss button",
        desc:
          'Card with dismiss button can be created by wrapping close button isnide <div className="highlight">.card__actions</div> and put inside <div className="highlight">.card__header</div> element of <div className="highlight">.card</div> ',
        code: (
          <div className="comp__eg">
            <h3>Card with dismiss button</h3>
            <div className="card container-card bg-black text-white p-2">
              <div className="card__header">
                <div className="avatar avatar--square bg-white text-black mr-3">
                  EF
                </div>
                <div className="card__title">
                  <div className="text-bold">Elliot Fu</div>
                  <div className="text-subtitle2 text-normal">
                    Friends of Veronika
                  </div>
                </div>
                <div className="card__actions ml-auto">
                  <button className="btn btn--sm btn--icon-circle btn--rounded">
                    <svg
                      className="icon-sm fill-white"
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
                <p className="text-body1">
                  Elliot requested permission to view your contact details
                </p>
              </div>
              <div className="card__footer border-top">
                <div className="card__actions ml-auto">
                  <button className="btn btn--sm btn--success mr-2">
                    Approve
                  </button>
                  <button className="btn btn--sm btn--danger mr-2">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Overlay",
        desc:
          'Overlay can be given to card by adding <div className="highlight">.card__overlay</div> div inside <div className="highlight">.card</div>. It will take up the whole card space as an overlay with opacity. If overlay element is added inside <div className="highlight">.card__media</div>, then it will overlay only the parent media element.',
        code: (
          <div className="comp__eg">
            <div className="card card--square container-card bg-white text-black">
              <div className="card__media">
                <img src={reptileImg} alt="" />
              </div>
              <div className="card__overlay text-white flex-col-reverse">
                <div className="card__title">
                  <div className="text-bold text-h6">Lizard</div>
                  <div className="text-subtitle2">Squamate Reptiles</div>
                </div>
              </div>
            </div>
            {/* card with specific overlay on card__medua */}
            <div className="card container-card bg-black text-white">
              <div className="card__media">
                <img src={reptileImg} alt="" />
                <div className="card__overlay text-white flex-col-reverse">
                  <div className="card__title">
                    <div className="text-bold text-h6">Lizard</div>
                    <div className="text-subtitle2">Squamate Reptiles</div>
                  </div>
                </div>
              </div>
              <div className="card__content">
                <div className="text-body1">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </div>
              </div>
              <div className="card__footer">
                <div className="card__actions">
                  <button className="btn btn--sm btn--link text-white text-bold">
                    Share
                  </button>
                  <button className="btn btn--sm btn--link text-white text-bold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Horizontal Card",
        desc:
          'To make the card horizontal add class <div className="highlight">.card--horizontal</div> and accordingly structure the parts.',
        code: (
          <div className="comp__">
            <div className="card card--horizontal container--sm bg-black text-white">
              <div className="card__media w-1/3">
                <img src={reptileImg} alt="" />
              </div>
              <div className="card__content w-2/3">
                <div className="card__title">
                  <div className="text-bold text-h4">Lizard</div>
                </div>
                <div className="text-body1 mb-2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.
                </div>
                <div className="text-body1 mb-2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </div>
                <div className="card__footer">
                  <div className="card__actions">
                    <button className="btn btn--sm btn--link text-bold text-white text-button">
                      Share
                    </button>
                    <button className="btn btn--sm btn--link text-bold text-white text-button">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    darkVariants: [
      {
        name: "Simple Card",
        desc:
          'Simple variants can be created by using <div className="highlight">.card</div> and inside add a div with class <div className="highlight">.card__content</div>. Use <div className="highlight">.card__title</div> inside <div className="highlight">.card__content</div> or <div className="highlight">.card__header</div> if required. <div className="highlight">.card__footer</div> can be used to add a footer. If there are actions that need to be performed / buttons, use <div className="highlight">.card__actions</div>, preferably inside footer or header.',
        code: (
          <div className="comp__eg">
            <div className="card bg-white text-black container-xs">
              <div className="card__content text-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
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
                <p className="text-body1">
                  Blazing fast speed you can depend on.
                </p>
              </div>
            </div>

            <div className="card bg-white text-black container-xs">
              <div className="card__content">
                <div className="card__title">
                  <div className="text-bold text-h5">Title</div>
                  <div className="text-subtitle2">Subtitle for card</div>
                </div>
                <p className="text-body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  dolores ad. Assumenda dolorum sunt, fuga velit sequi officia
                  ea facere nostrum ad...
                </p>
              </div>
              <div className="card__footer">
                <div className="card__actions">
                  <button className="btn btn--sm btn--rounded btn--link ml-auto text-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Full Structure",
        desc:
          'The full structure includes <div className="highlight">.card__media</div> which by default takes up the entire width if there\'s an img inside. Most elements of cards can be used inside the other. For eg. <div className="highlight">.card__title</div> and <div className="highlight">.card__actions</div> can be used iniside <div className="highlight">.card__header</div>.',
        code: (
          <div className="comp__eg">
            <div className="card container-card bg-gray-800 text-white">
              <div className="card__header">
                <div className="avatar bg-red-500 mr-3">SK</div>
                <div className="card__title">
                  <div className="text-gray-50 text-medium">
                    Shrimp and Chorizo
                  </div>
                  <div className="text-subtitle2 text-gray-300">
                    September 14, 2016
                  </div>
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
                <p className="text-subtitle1 text-gray-300 text-light">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
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
            <div className="card container-card bg-white text-black">
              <div className="card__media">
                <img src={reptileImg} alt="" />
              </div>
              <div className="card__content">
                <div className="card__title">
                  <div className="text-h6 text-semibold mb-2">Lizard</div>
                  <div className="text-body1 text-light">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </div>
                </div>
              </div>
              <div className="card__footer">
                <div className="card__actions">
                  <button className="btn btn--sm btn--link text-semibold">
                    Share
                  </button>
                  <button className="btn btn--sm btn--link text-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="card container-card bg-white text-black p-2">
              <div className="card__header border-bottom">
                <div className="card__title">
                  <div className="text-h6 text-bold">Delete</div>
                </div>
              </div>
              <div className="card__content">
                <p className="text-body1  py-2">
                  Are you sure you want to delete this file?
                </p>
              </div>
              <div className="card__footer border-top">
                <div className="card__actions ml-auto">
                  <button className="btn btn--sm btn--rounded btn--default text-button mr-2">
                    No
                  </button>
                  <button className="btn btn--sm btn--rounded btn--danger text-button mr-2">
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Dismiss button",
        desc:
          'Card with dismiss button can be created by wrapping close button isnide <div className="highlight">.card__actions</div> and put inside <div className="highlight">.card__header</div> element of <div className="highlight">.card</div> ',
        code: (
          <div className="comp__eg">
            <h3>Card with dismiss button</h3>
            <div className="card container-card bg-white text-black p-2">
              <div className="card__header">
                <div className="avatar avatar--square bg-black text-white mr-3">
                  EF
                </div>
                <div className="card__title">
                  <div className="text-bold">Elliot Fu</div>
                  <div className="text-subtitle2 text-normal">
                    Friends of Veronika
                  </div>
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
                <p className="text-body1">
                  Elliot requested permission to view your contact details
                </p>
              </div>
              <div className="card__footer border-top">
                <div className="card__actions ml-auto">
                  <button className="btn btn--sm btn--success mr-2">
                    Approve
                  </button>
                  <button className="btn btn--sm btn--danger mr-2">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Overlay",
        desc:
          'Overlay can be given to card by adding <div className="highlight">.card__overlay</div> div inside <div className="highlight">.card</div>. It will take up the whole card space as an overlay with opacity. If overlay element is added inside <div className="highlight">.card__media</div>, then it will overlay only the parent media element.',
        code: (
          <div className="comp__eg">
            <div className="card card--square container-card bg-white text-black">
              <div className="card__media">
                <img src={reptileImg} alt="" />
              </div>
              <div className="card__overlay text-white flex-col-reverse">
                <div className="card__title">
                  <div className="text-bold text-h6">Lizard</div>
                  <div className="text-subtitle2">Squamate Reptiles</div>
                </div>
              </div>
            </div>
            {/* card with specific overlay on card__medua */}
            <div className="card container-card bg-white text-black">
              <div className="card__media">
                <img src={reptileImg} alt="" />
                <div className="card__overlay text-white flex-col-reverse">
                  <div className="card__title">
                    <div className="text-bold text-h6">Lizard</div>
                    <div className="text-subtitle2">Squamate Reptiles</div>
                  </div>
                </div>
              </div>
              <div className="card__content">
                <div className="text-body1">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </div>
              </div>
              <div className="card__footer">
                <div className="card__actions">
                  <button className="btn btn--sm btn--link text-bold">
                    Share
                  </button>
                  <button className="btn btn--sm btn--link text-bold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Horizontal Card",
        desc:
          'To make the card horizontal add class <div className="highlight">.card--horizontal</div> and accordingly structure the parts.',
        code: (
          <div className="comp__">
            <div className="card card--horizontal container--sm bg-white text-black">
              <div className="card__media w-1/3">
                <img src={reptileImg} alt="" />
              </div>
              <div className="card__content w-2/3">
                <div className="card__title">
                  <div className="text-bold text-h4">Lizard</div>
                </div>
                <div className="text-body1 mb-2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.
                </div>
                <div className="text-body1 mb-2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </div>
                <div className="card__footer">
                  <div className="card__actions">
                    <button className="btn btn--sm btn--link text-bold text-button">
                      Share
                    </button>
                    <button className="btn btn--sm btn--link text-bold text-button">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    classes: [
      ".card",
      ".card__header",
      ".card__title",
      ".card__media",
      ".card__overlay",
      ".card__content",
      ".card__actions",
      ".card__footer",
      ".card--horizontal",
    ],
  },
  Input: {
    title: "Input",
    desc:
      "Input elements like checkbox, toggle, text-input are used when user interaction and input is required.",
    intro: "",
    lightVariants: [
      {
        name: "Checkbox",
        desc:
          'Checkboxes allow the user to select one or more items from a set. To a label give a class of <div className="highlight">.input-checkbox</div> and inside add input of type checkbox and span. Add the label text inside the span.',
        code: (
          <div className="comp_eg">
            <label className="input-checkbox">
              <input type="checkbox" />
              <span>Label</span>
            </label>
          </div>
        ),
      },
      {
        name: "Radio",
        desc:
          'Radio buttons allow the user to select one option from a set. To a label give a class of <div className="highlight">.input-radio</div> and inside add input of type radio and span. Add the label text inside the span. Add <div className="highlight">.radio--light</div> for light scheme variant.',
        code: (
          <div className="comp__eg">
            <label className="input-radio radio--light">
              <input type="radio" name="group" />
              <span>Radio Option Dark 1</span>
            </label>
            <label className="input-radio">
              <input type="radio" name="group" />
              <span>Radio Option Dark 2</span>
            </label>
          </div>
        ),
      },
      {
        name: "Toggle",
        desc:
          'Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. To a label give a class of <div className="highlight">.input-toggle</div> and inside add input of type checkbox and span. Add the label text inside the span. Add <div className="highlight">.toggle--light</div> for light scheme variant.',
        code: (
          <div className="comp__eg">
            <label className="input-toggle toggle--light">
              <input type="checkbox" />
              <span>Toggle</span>
            </label>
          </div>
        ),
      },
      {
        name: "Text",
        desc:
          'Add class <div className="highlight">.input-text</div> to a div element and then inside add a label, input of type text and span with class <div className="highlight">.focus-border</div>. Add <div className="highlight">.input-text--light</div> for light scheme variant.',
        code: (
          <div className="comp__eg">
            <div className="input-text input-text--light container-xs">
              <input type="text" placeholder="Placeholder Text1" />
              <span className="focus-border"></span>
            </div>
          </div>
        ),
      },
      {
        name: "Outlined Text",
        desc:
          'Add class <div className="highlight">.input-text</div> and <div className="highlight">.input-text--bcg</div> to a div element and then inside add a label and input of type text. Add <div className="highlight">.input-text--light</div> for light scheme variant.',
        code: (
          <div className="comp_eg">
            <div className="input-text input-text--bcg input-text--light container-xs mb-4">
              <label htmlFor="placeholder3">Outlined Text Input</label>
              <input
                type="text"
                name="placeholder3"
                id="placeholder3"
                placeholder="Placeholder Text"
              />
            </div>
          </div>
        ),
      },
    ],
    darkVariants: [
      {
        name: "Checkbox",
        desc:
          'Checkboxes allow the user to select one or more items from a set. To a label give a class of <div className="highlight">.input-checkbox</div> and inside add input of type checkbox and span. Add the label text inside the span.',
        code: (
          <div className="comp_eg">
            <label className="input-checkbox">
              <input type="checkbox" />
              <span>Label</span>
            </label>
          </div>
        ),
      },
      {
        name: "Radio",
        desc:
          'Radio buttons allow the user to select one option from a set. To a label give a class of <div className="highlight">.input-radio</div> and inside add input of type radio and span. Add the label text inside the span. Add <div className="highlight">.radio--light</div> for light scheme variant.',
        code: (
          <div className="comp__eg">
            <label className="input-radio">
              <input type="radio" name="group" />
              <span>Radio Option Dark 1</span>
            </label>
            <label className="input-radio">
              <input type="radio" name="group" />
              <span>Radio Option Dark 2</span>
            </label>
          </div>
        ),
      },
      {
        name: "Toggle",
        desc:
          'Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. To a label give a class of <div className="highlight">.input-toggle</div> and inside add input of type checkbox and span. Add the label text inside the span. Add <div className="highlight">.toggle--light</div> for light scheme variant.',
        code: (
          <div className="comp__eg">
            <label className="input-toggle">
              <input type="checkbox" />
              <span>Toggle</span>
            </label>
          </div>
        ),
      },
      {
        name: "Text",
        desc:
          'Add class <div className="highlight">.input-text</div> to a div element and then inside add a label, input of type text and span with class <div className="highlight">.focus-border</div>. Add <div className="highlight">.input-text--light</div> for light scheme variant.',
        code: (
          <div className="comp__eg">
            <div className="input-text container-xs">
              <input type="text" placeholder="Placeholder Text1" />
              <span className="focus-border"></span>
            </div>
          </div>
        ),
      },
      {
        name: "Outlined Text",
        desc:
          'Add class <div className="highlight">.input-text</div> and <div className="highlight">.input-text--bcg</div> to a div element and then inside add a label and input of type text. Add <div className="highlight">.input-text--light</div> for light scheme variant.',
        code: (
          <div className="comp_eg">
            <div className="input-text input-text--bcg container-xs mb-4">
              <label htmlFor="placeholder3">Outlined Text Input</label>
              <input
                type="text"
                name="placeholder3"
                id="placeholder3"
                placeholder="Placeholder Text"
              />
            </div>
          </div>
        ),
      },
    ],
    classes: [
      ".input-checkbox",
      ".input-radio",
      ".input-toggle",
      ".input-text",
      ".input-text--light",
      ".input-text--bcg",
      ".focus-border",
    ],
  },
  Typography: {
    title: "Typography",
    desc:
      "Use typography to present your design and content as clearly and efficiently as possible.",
    intro: "",
    lightVariants: [
      {
        name: "Headline",
        desc:
          'Headline is the first design element the reader\'s eye lands upon. Its purpose is to draw your audience in, and it also sets the tone for the rest of the piece. Four variants of headlines are provided. <div className="highlight">.text-headline1</div>, <div className="highlight">.text-headline1</div>, <div className="highlight">.text-headline1</div> and <div className="highlight">.text-headline1</div> which provide different sizes.',
        code: (
          <div className="comp__eg">
            <div className="text-headline1 text-black">HEADLINE</div>
            <div className="text-headline2 text-black">HEADLINE</div>
            <div className="text-headline3 text-black">HEADLINE</div>
            <div className="text-headline4 text-black">HEADLINE</div>
          </div>
        ),
      },
      {
        name: "Heading",
        desc:
          'Headings are titles or signposts for readers that reveal the structure of the content. Six heading vaaints are provided. <div className="highlight">.text-h1</div>, <div className="highlight">.text-h2</div>, <div className="highlight">.text-h3</div>, <div className="highlight">.text-h4</div>, <div className="highlight">.text-h5</div> and <div className="highlight">.text-h6</div>.',
        code: (
          <div className="comp__eg">
            <div className="text-h1 text-black">Heading</div>
            <div className="text-h2 text-black">Heading</div>
            <div className="text-h3 text-black">Heading</div>
            <div className="text-h4 text-black">Heading</div>
            <div className="text-h5 text-black">Heading</div>
            <div className="text-h6 text-black">Heading</div>
          </div>
        ),
      },
      {
        name: "Subtitle",
        desc:
          'A subtitle is smaller than a heading. It is a single line that is usally used in conbination with title or heading. Two variants are available. <div className="highlight">.text-subtitle1</div> and <div className="highlight">.text-subtitle2</div>.',
        code: (
          <div className="comp__eg">
            <div className="text-subtitle1 text-black">This is subititle 1</div>
            <div className="text-subtitle2 text-black">This is subititle 2</div>
          </div>
        ),
      },
      {
        name: "Body",
        desc:
          'Body text is the text forming the main content. For this use classes <div className="highlight">.text-body1</div> and <div className="highlight">.text-body2</div>',
        code: (
          <div className="comp__eg">
            <div className="text-body1 text-black">This is body 1</div>
            <div className="text-body2 text-black">This is body 2</div>
          </div>
        ),
      },
      {
        name: "Button",
        desc:
          'Styling button text makes the content and design uniform and provides consistency. Use class <div className="highlight">.text-button</div>',
        code: (
          <div className="comp__eg">
            <div className="text-button text-black">Button font style</div>
          </div>
        ),
      },
      {
        name: "Caption",
        desc:
          'A caption is the brief text description accompanying a photograph, illustration or cartoon, most often as part of a longer article. Use class <div className="highlight">.text-caption</div>.',
        code: (
          <div className="comp__eg">
            <div className="text-caption text-black">
              This is a text caption.
            </div>
          </div>
        ),
      },
      {
        name: "Overline",
        desc:
          'Overline text is text with a line above it. Is usually of smaller size or different typeface than the headline. Used sparingly to annotate imagery or to introduce a headline. <div className="highlight">.text-overline</div>',
        code: (
          <div className="comp__eg">
            <div className="text-overline text-black">This is an overline.</div>
          </div>
        ),
      },
      {
        name: "Font Weight",
        desc:
          'Defines how bold the text will be. There are eigth variants. <div className="highlight">.text-thin</div>, <div className="highlight">.text-extralight</div>, <div className="highlight">.text-light</div>, <div className="highlight">.text-normal</div>, <div className="highlight">.text-medium</div>, <div className="highlight">.text-semibold</div>, <div className="highlight">.text-bold</div> and <div className="highlight">.text-extrabold</div>.',
        code: (
          <div className="comp__eg">
            <div className="text-thin text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-extralight text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-light text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-normal text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-medium text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-semibold text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-bold text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-extrabold text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
          </div>
        ),
      },
      {
        name: "Text Align",
        desc:
          'Type alignment controls how text aligns in the space it appears. There are four type alignments available: <div className="highlight">.text-center</div>, <div className="highlight">.text-right</div>, <div className="highlight">.text-left</div> and <div className="highlight">.text-justify</div>.',
        code: (
          <div className="comp__eg">
            <div className="container-xs text-center text-black">
              Text center: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corporis aliquam praesentium temporibus consequuntur
              incidunt.
            </div>
            <div className="container-xs text-left text-black">
              Text Left: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corporis aliquam praesentium temporibus consequuntur
              incidunt.
            </div>
            <div className="container-xs text-right text-black">
              Text Right: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corporis aliquam praesentium temporibus consequuntur
              incidunt.
            </div>
            <div className="container-xs text-justify text-black">
              Text Justify: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corporis aliquam praesentium temporibus consequuntur
              incidunt.
            </div>
          </div>
        ),
      },
    ],
    darkVariants: [
      {
        name: "Headline",
        desc:
          'Headline is the first design element the reader\'s eye lands upon. Its purpose is to draw your audience in, and it also sets the tone for the rest of the piece. Four variants of headlines are provided. <div className="highlight">.text-headline1</div>, <div className="highlight">.text-headline1</div>, <div className="highlight">.text-headline1</div> and <div className="highlight">.text-headline1</div> which provide different sizes.',
        code: (
          <div className="comp__eg">
            <div className="text-headline1">HEADLINE</div>
            <div className="text-headline2">HEADLINE</div>
            <div className="text-headline3">HEADLINE</div>
            <div className="text-headline4">HEADLINE</div>
          </div>
        ),
      },
      {
        name: "Heading",
        desc:
          'Headings are titles or signposts for readers that reveal the structure of the content. Six heading vaaints are provided. <div className="highlight">.text-h1</div>, <div className="highlight">.text-h2</div>, <div className="highlight">.text-h3</div>, <div className="highlight">.text-h4</div>, <div className="highlight">.text-h5</div> and <div className="highlight">.text-h6</div>.',
        code: (
          <div className="comp__eg">
            <div className="text-h1">Heading</div>
            <div className="text-h2">Heading</div>
            <div className="text-h3">Heading</div>
            <div className="text-h4">Heading</div>
            <div className="text-h5">Heading</div>
            <div className="text-h6">Heading</div>
          </div>
        ),
      },
      {
        name: "Subtitle",
        desc:
          'A subtitle is smaller than a heading. It is a single line that is usally used in conbination with title or heading. Two variants are available. <div className="highlight">.text-subtitle1</div> and <div className="highlight">.text-subtitle2</div>.',
        code: (
          <div className="comp__eg">
            <div className="text-subtitle1">This is subititle 1</div>
            <div className="text-subtitle2">This is subititle 2</div>
          </div>
        ),
      },
      {
        name: "Body",
        desc:
          'Body text is the text forming the main content. For this use classes <div className="highlight">.text-body1</div> and <div className="highlight">.text-body2</div>',
        code: (
          <div className="comp__eg">
            <div className="text-body1">This is body 1</div>
            <div className="text-body2">This is body 2</div>
          </div>
        ),
      },
      {
        name: "Button",
        desc:
          'Styling button text makes the content and design uniform and provides consistency. Use class <div className="highlight">.text-button</div>',
        code: (
          <div className="comp__eg">
            <div className="text-button">Button font style</div>
          </div>
        ),
      },
      {
        name: "Caption",
        desc:
          'A caption is the brief text description accompanying a photograph, illustration or cartoon, most often as part of a longer article. Use class <div className="highlight">.text-caption</div>.',
        code: (
          <div className="comp__eg">
            <div className="text-caption">This is a text caption.</div>
          </div>
        ),
      },
      {
        name: "Overline",
        desc:
          'Overline text is text with a line above it. Is usually of smaller size or different typeface than the headline. Used sparingly to annotate imagery or to introduce a headline. <div className="highlight">.text-overline</div>',
        code: (
          <div className="comp__eg">
            <div className="text-overline">This is an overline.</div>
          </div>
        ),
      },
      {
        name: "Font Weight",
        desc:
          'Defines how bold the text will be. There are eigth variants. <div className="highlight">.text-thin</div>, <div className="highlight">.text-extralight</div>, <div className="highlight">.text-light</div>, <div className="highlight">.text-normal</div>, <div className="highlight">.text-medium</div>, <div className="highlight">.text-semibold</div>, <div className="highlight">.text-bold</div> and <div className="highlight">.text-extrabold</div>.',
        code: (
          <div className="comp__eg">
            <div className="text-thin">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-extralight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
            <div className="text-extrabold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              doloribus quidem dignissimos.
            </div>
          </div>
        ),
      },
      {
        name: "Text Align",
        desc:
          'Type alignment controls how text aligns in the space it appears. There are four type alignments available: <div className="highlight">.text-center</div>, <div className="highlight">.text-right</div>, <div className="highlight">.text-left</div> and <div className="highlight">.text-justify</div>.',
        code: (
          <div className="comp__eg">
            <div className="container-xs text-center">
              Text center: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corporis aliquam praesentium temporibus consequuntur
              incidunt.
            </div>
            <div className="container-xs text-left">
              Text Left: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corporis aliquam praesentium temporibus consequuntur
              incidunt.
            </div>
            <div className="container-xs text-right">
              Text Right: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corporis aliquam praesentium temporibus consequuntur
              incidunt.
            </div>
            <div className="container-xs text-justify">
              Text Justify: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corporis aliquam praesentium temporibus consequuntur
              incidunt.
            </div>
          </div>
        ),
      },
    ],
    classes: [
      ".text-headline1",
      ".text-headline2",
      ".text-headline3",
      ".text-headline4",
      ".text-h1",
      ".text-h2",
      ".text-h3",
      ".text-h4",
      ".text-h5",
      ".text-h6",
      ".text-subtitle1",
      ".text-subtitle2",
      ".text-body1",
      ".text-body2",
      ".text-caption",
      ".text-overline",
      ".text-thin",
      ".text-extralight",
      ".text-light",
      ".text-normal",
      ".text-medium",
      ".text-semibold",
      ".text-bold",
      ".text-extrabold",
    ],
  },
  // Utility: {
  //   title: "",
  //   desc: "",
  //   variants: [
  //     {
  //       name: "",
  //       desc: "",
  //       code: "",
  //     },
  //   ],
  //   classes: [

  //   ]
  // },
};
