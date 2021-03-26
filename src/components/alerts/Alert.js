import React from "react";

export default function Alert() {
  return (
    <div className="component-wrapper container-md">
      <h2>Alert</h2>
      <p>Takes width of parent container</p>
      <h3>Alert with different severity</h3>
      <div className="alert">
        {" "}
        <div className="alert__msg"> This is a normal alert!</div>
      </div>
      <div className="alert alert--error">
        {" "}
        <div className="alert__msg"> This is an error alert!</div>
      </div>
      <div className="alert alert--warning">
        {" "}
        <div className="alert__msg"> This is a warning alert!</div>
      </div>
      <div className="alert alert--info">
        {" "}
        <div className="alert__msg"> This is an info alert!</div>
      </div>
      <div className="alert alert--success">
        {" "}
        <div className="alert__msg"> This is a success alert!</div>
      </div>
      {/* ---------------------------rounded------------------------------- */}
      <h3>Rounded Alerts</h3>
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
      {/* ------------------------------title------------------------------ */}
      <h3>Alerts with title</h3>
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
      {/* ---------------------icon------------------------------------- */}
      <h3>Alerts with icon</h3>
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
      {/* ---------------------actions------------------------------------- */}
      <h3>Alerts with actions</h3>
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
      {/* ---------------------outline------------------------------------- */}
      <h3>Alerts with outline variant</h3>
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
      {/* ---------------------light------------------------------------- */}
      <h3>Alerts with light scheme</h3>
      <div className="alert alert--light alert--rounded">
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
      <div className="alert alert--error alert--light alert--rounded">
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
      <div className="alert alert--warning alert--light alert--rounded">
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
      <div className="alert alert--info alert--light alert--rounded">
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
      <div className="alert alert--success alert--light alert--rounded">
        <div className="alert__icon">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
          </svg>
        </div>
        <div className="alert__msg">This is a success alert!</div>
        <div className="alert__actions">
          <button>Undo</button>
        </div>
      </div>
    </div>
  );
}
