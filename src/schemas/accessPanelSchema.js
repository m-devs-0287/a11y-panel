export const accessPanel = {
  type: "div",
  id: "a11y-access-hub",
  className: "a11y-panel-buttons-container",
  children: [
    {
      type: "button",
      id: "drag-icon",
      className: "accessibility-drag-button",
      title: "Drag to move",
      children: [
        {
          type: "svg",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 24 24",

          children: [
            {
              type: "path",
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zM4 4v.01M8 4v.01M12 4v.01M16 4v.01M4 8v.01M4 12v.01M4 16v.01",
            },
          ],
        },
      ],
    },
    {
      type: "button",
      id: "accessibility-up-button",
      class: "access-panel-btn",
      "aria-label": "Accessibility Button",
      title: "Click to go back to top of page",
      children: [
        {
          type: "span",
          className: "screen-reader-only",
          label: "Accessibility Button",
        },
        {
          type: "svg",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 24 24",
          children: [
            {
              type: "path",
              fill: "currentColor",
              d: "M8.925 14.4L12 11.325l3.075 3.075L16.5 13L12 8.5L7.5 13zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8",
            },
          ],
        },
      ],
    },
    {
      type: "button",
      id: "toggle-panel",
      className: "access-panel-btn",
      "aria-label": "Accessibility Button",
      title: "click to access accessibility panel",
      children: [
        {
          type: "span",
          className: "screen-reader-only",
          label: "Accessibility Button",
        },
        {
          type: "svg",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 24 24",
          children: [
            {
              type: "g",
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              children: [
                {
                  type: "path",
                  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M7 9l5 1m5-1l-5 1m0 0v3m0 0l-2 5m2-5l2 5",
                },
                {
                  type: "path",
                  fill: "currentColor",
                  d: "M12 7a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};