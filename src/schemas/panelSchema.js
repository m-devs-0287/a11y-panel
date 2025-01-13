export const panelUI = {
  id: "accessibility-panel",
  role: "dialog",
  ariaLabelledby: "accessibility-heading",
  ariaHidden: "true",
  className: "no-feature",
  children: [
    {
      className: "content-top",
      children: [
        {
          className: "content-top-header",
          children: [
            {
              type: "h2",
              id: "accessibility-heading",
              label: "Accessibility",
            },
            {
              id: "accessibility-close-button",
              type: "button",
              className: "accessibility-close-button",
              ariaLabel: "Close Accessibility Panel",
              children: [
                {
                  type: "span",
                  className: "screen-reader-only",
                  label: "Close panel",
                },
                {
                  type: "span",
                  children: [
                    {
                      type: "svg",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      focusable: "false",
                      children: [
                        {
                          type: "path",
                          fill: "currentColor",
                          d: "m12 12.708l3.246 3.246q.14.14.344.15t.364-.15t.16-.354t-.16-.354L12.708 12l3.246-3.246q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16L12 11.292L8.754 8.046q-.14-.14-.344-.15t-.364.15t-.16.354t.16.354L11.292 12l-3.246 3.246q-.14.14-.15.345q-.01.203.15.363t.354.16t.354-.16zM12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          className: "check-boxes",
          children: [
            {
              className: "toggle-mode-container",
              children: [
                {
                  type: "label",
                  className: "toggle-mode",
                  id: "toggle-dark-mode",
                  children: [
                    {
                      type: "span",
                      label: "Dark Mode",
                    },
                    {
                      type: "input",
                      id: "toggle-dark-mode-checkbox",
                      attributes: { type: "checkbox" },
                    },
                    {
                      type: "span",
                      className: "slider",
                    },
                  ],
                },
              ],
            },
            {
              className: "toggle-mode-container",
              children: [
                {
                  type: "label",
                  className: "toggle-mode",
                  id: "toggle-animation",
                  children: [
                    {
                      type: "span",
                      label: "Animations",
                    },
                    {
                      type: "input",
                      id: "toggle-animation-checkbox",
                      attributes: { type: "checkbox" },
                    },
                    {
                      type: "span",
                      className: "slider",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          className: "language-selector-container",
          children: [
            {
              type: "label",
              for: "language-selector",
              className: "language-selector-label",
              children: [
                {
                  type: "span",
                  label: "Language",
                },
              ],
            },
            {
              type: "select",
              id: "language-selector",
              className: "language-selector",
              children: [
                {
                  type: "option",
                  value: "es",
                  label: "EN - English",
                },
                {
                  type: "option",
                  value: "es",
                  label: "ES - Español",
                },
                {
                  type: "option",
                  value: "fr",
                  label: "FR - Français",
                },
                {
                  type: "option",
                  value: "de",
                  label: "DE - Deutsch",
                },
                {
                  type: "option",
                  value: "zh",
                  label: "ZH - 中文",
                },
                {
                  type: "option",
                  value: "ja",
                  label: "JA - 日本語",
                },
              ],
            },
          ],
        },
      ],
    },
    /* content center
      ------------------------------------------------------------------------*/
    {
      className: "content-center",
      children: [
        {
          id: "font-size",
          className: "accessibility-feat-button",
          label: "Font Size 16px",
          ariaLabel: "Increase Font Size",
          type: "button",
        },
        {
          id: "letter-spacing",
          className: "accessibility-feat-button",
          label: "Letter Spacing 1px",
          ariaLabel: "Increase Letter Spacing",
          type: "button",
        },
        {
          id: "font-weight",
          className: "accessibility-feat-button",
          label: "Font Weight 400",
          ariaLabel: "Adjust Font Weight",
          type: "button",
        },
        {
          id: "dyslexia-font",
          className: "accessibility-feat-button",
          label: "Dyslexia Font",
          ariaLabel: "Switch to Dyslexia-Friendly Font",
          type: "button",
        },
        {
          id: "high-contrast",
          className: "accessibility-feat-button",
          label: "High Contrast",
          ariaLabel: "Enable High Contrast Mode",
          type: "button",
        },
        {
          id: "text-align",
          className: "accessibility-feat-button",
          label: "Text Align",
          ariaLabel: "Adjust Text Alignment",
          type: "button",
        },
        {
          id: "zoom-content",
          className: "accessibility-feat-button",
          label: "Zoom Content",
          ariaLabel: "Zoom Content",
          type: "button",
        },
        {
          id: "tooltip-toggle",
          className: "accessibility-feat-button",
          label: "Tooltip",
          ariaLabel: "Enable or Disable Tooltips",
          type: "button",
        },
        {
          id: "highlight",
          className: "accessibility-feat-button",
          label: "Highlight",
          ariaLabel: "Highlight Selected Text",
          type: "button",
        },
        {
          id: "view-links",
          className: "accessibility-feat-button",
          label: "View Links",
          ariaLabel: "View Highlighted Links",
          type: "button",
        },
      ],
    },
    {
      className: "bottom-overlay",
    },
    {
      className: "content-bottom",
      children: [
        {
          id: "reset-all",
          className: "accessibility-feat-button",
          label: "Reset All",
          ariaLabel: "Reset All Settings",
          type: "button",
        },
      ],
    },
  ],
};