import { iconSets } from "../icons/icons.js";

export const panelUI = {
  id: "accessibility-panel",
  attributes: {
    "role": "menu",
    "aria-hidden": true,
    "tabindex": "-1",
    "aria-label": "accessibility panel",
    "role": "navigation",
  },
  className: "accessibility-panel no-feature panel",
  children: [
    {
      className: "panel-container",
      children: [
        // top
        {
          className: "content-top",
          children: [
            {
              className: "content-top-header",
              children: [
                {
                  type: "h2",
                  id: "accessibility-heading",
                  label: "Accessibility Tools",
                },
              ],
            },
            // Switches
            {
              className: "switchers-container",
              children: [
                {
                  type: "label",
                  className: "toggle-switch",
                  children: [
                    {
                      type: "input",
                      id: "toggle-dark-mode-checkbox",
                      attributes: {
                        "type": "checkbox",
                        "role": "switch",
                        "aria-checked": "false",
                        "aria-label": "Dark Mode",
                      },
                    },
                    { type: "span", className: "slider" },
                    {
                      type: "span",
                      className: "switch-text",
                      label: "Dark Mode",
                    },
                  ],
                },
                {
                  type: "label",
                  className: "toggle-switch disabled",
                  children: [
                    {
                      type: "input",
                      id: "toggle-tts",
                      attributes: {
                        "type": "checkbox",
                        "role": "switch",
                        "aria-checked": "false",
                        "aria-label": "text reader",
                        "aria-hidden": "true",
                        "tabindex": "-1",
                      },
                    },
                    { type: "span", className: "slider" },
                    {
                      type: "span",
                      className: "switch-text",
                      label: "Text Reader",
                    },
                  ],
                },
                {
                  type: "label",
                  className: "toggle-switch",
                  children: [
                    {
                      type: "input",
                      id: "toggle-animation-checkbox",
                      attributes: {
                        "type": "checkbox",
                        "role": "switch",
                        "aria-checked": "false",
                        "aria-label": "animations",
                      },
                    },
                    { type: "span", className: "slider" },
                    {
                      type: "span",
                      className: "switch-text",
                      label: "Animations",
                    },
                  ],
                },
                {
                  type: "label",
                  className: "toggle-switch",
                  children: [
                    {
                      type: "input",
                      id: "toggle-icons-checkbox",
                      attributes: {
                        "type": "checkbox",
                        "role": "switch",
                        "aria-checked": "false",
                        "aria-label": "panel icons",
                      },
                    },
                    { type: "span", className: "slider" },
                    {
                      type: "span",
                      className: "switch-text",
                      label: "Panel Icons",
                    },
                  ],
                },
              ],
            },
            // Lang button
            {
              className: "lang-dropdown-container",
              children: [
                {
                  id: "lang-dropdown",
                  className: "lang-dropdown",
                  children: [
                    {
                      type: "button",
                      id: "dropdown-btn",
                      className: "dropdown-btn",
                      ariaLabel: "Change Language",
                      attributes: {
                        "aria-controls": "lang-dropdown-menu",
                        "aria-haspopup": "true",
                        "aria-label": "language",
                        "aria-expanded": "false",
                      },
                      children: [
                        {
                          type: "span",
                          label: "Language",
                        },
                        {
                          type: "span",
                          className: "dropdown-btn-icon",
                          children: [iconSets.arrowDownIcon()],
                        },
                      ],
                    },
                    // lang menu
                    {
                      className: "lang-dropdown-menu",
                      id: "lang-dropdown-menu",
                      attributes: {
                        "role": "menu",
                        "tabindex": "-1"
                      },
                      children: [
                        {
                          className: "gtranslate_wrapper gt_container--6wb20p",
                          children: [
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "en",
                                "className":
                                  "glink nturl notranslate gt-current-lang",
                              },
                              label: "English",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "fr",
                                "className": "glink nturl notranslate",
                              },
                              label: "French",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "de",
                                "className": "glink nturl notranslate",
                              },
                              label: "German",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "it",
                                "className": "glink nturl notranslate",
                              },
                              label: "Italian",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "es",
                                "className": "glink nturl notranslate",
                              },
                              label: "Spanish",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "ja",
                                "className": "glink nturl notranslate",
                              },
                              label: "Japanese",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "ru",
                                "className": "glink nturl notranslate",
                              },
                              label: "Russian",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "zh-CN",
                                "className": "glink nturl notranslate",
                              },
                              label: "Chinese (Simplified)",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "zh-TW",
                                "className": "glink nturl notranslate",
                              },
                              label: "Chinese (Traditional)",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "ar",
                                "className": "glink nturl notranslate",
                              },
                              label: "Arabic",
                            },
                            {
                              type: "a",
                              href: "#",
                              attributes: {
                                "data-gt-lang": "bn",
                                "className": "glink nturl notranslate",
                              },
                              label: "Bengali",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: "live-region",
                      className:"a11y-sr-only",
                      attributes: {
                        "aria-live": "polite"
                      }
                    }
                  ],
                },
              ],
            },
          ],
        },
        // center
        {
          className: "content-center",
          id: "content-center",
          children: [
            {
              className: "content-center-wrapper",
              id: "content-center-wrapper",
              children: [
                // left container
                {
                  id: "a11y-left-container",
                  className: "a11y-left-container a11y-dragover-container",
                  children: [
                    {
                      id: "font-size",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "Increase Font Size",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 0,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.fontSizeIcon()],
                        },
                        { type: "span", label: "Font Size 16px" },
                      ],
                    },
                    {
                      id: "letter-spacing",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "Increase Letter Spacing",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 1,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.letterSpacingIcon()],
                        },
                        { type: "span", label: "Letter Spacing 0px" },
                      ],
                    },
                    {
                      id: "font-weight",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "Adjust Font Weight",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 2,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.boldIcon()],
                        },
                        { type: "span", label: "Font Weight: 400" },
                      ],
                    },
                    {
                      id: "dyslexia-font",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "Switch to Dyslexia-Friendly Font",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 3,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.dyslexiaIcon()],
                        },
                        { type: "span", label: "Dyslexia-Friendly Font" },
                      ],
                    },
                    {
                      id: "text-color",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "Chnage Text",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 4,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.textColorIcon()],
                        },
                        { type: "span", label: "Text Color" },
                      ],
                    },
                  ],
                },
                // right container
                {
                  id: "a11y-right-container",
                  className: "a11y-right-container a11y-dragover-container",
                  children: [
                    {
                      id: "high-contrast",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "Enable High Contrast Mode",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 5,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.highContrastIcon()],
                        },
                        { type: "span", label: "High Contrast" },
                      ],
                    },
                    {
                      id: "text-align",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "Adjust Text Alignment",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 6,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.textAlignIcon()],
                        },
                        { type: "span", label: "Text Align: Left" },
                      ],
                    },
                    {
                      id: "line-height",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "change Line Height",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 7,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.lineHeightIcon()],
                        },
                        { type: "span", label: "Line Height: 1.2" },
                      ],
                    },
                    {
                      id: "tooltip",
                      className: "a11y-btn a11y-feat-btn a11y-draggable",
                      ariaLabel: "Enable or Disable Tooltips",
                      type: "button",
                      attributes: {
                        "draggable": "true",
                        "data-id": 8,
                        "aria-live": "polite",
                      },
                      children: [
                        {
                          type: "span",
                          className: "btn-icon",
                          attributes: { "aria-hidden": "true" },
                          children: [iconSets.tooltipIcon()],
                        },
                        { type: "span", label: "Tooltip" },
                      ],
                    },
                    // {
                    //   id: "toggle-magnifier",
                    //   className: "a11y-btn a11y-feat-btn a11y-draggable",
                    //   ariaLabel: "Enable or Disable magnifier",
                    //   type: "button",
                    //   attributes: { draggable: "true", "data-id": 9 },
                    //   children: [
                    //     {
                    //       type: "span",
                    //       className: "btn-icon",
                    //       attributes: { "aria-hidden": "true" },
                    //       children: [iconSets.zoomIcon()],
                    //     },
                    //     { type: "span", label: "Magnifier" },
                    //   ],
                    // },
                  ],
                },
              ],
            },
          ],
        },
        // overlay
        {
          className: "bottom-overlay",
        },
        // bottom
        {
          className: "content-bottom",
          children: [
            {
              id: "reset-all",
              className: "a11y-btn a11y-feat-btn",
              ariaLabel: "Reset All Settings",
              type: "button",
              children: [
                {
                  type: "span",
                  className: "btn-icon",
                  attributes: { "aria-hidden": "true" },
                  children: [iconSets.resetFeatIcon()],
                },
                { type: "span", label: "Reset Features" },
              ],
            },
            {
              id: "reset-layout",
              className: "a11y-btn a11y-feat-btn",
              ariaLabel: "Reset Buttons Layout",
              type: "button",
              children: [
                {
                  type: "span",
                  className: "btn-icon",
                  attributes: { "aria-hidden": "true" },
                  children: [iconSets.resetLayoutIcon()],
                },
                { type: "span", label: "Reset Layout" },
              ],
            },
            {
              type: "button",
              id: "a11y-close-btn",
              className: "a11y-btn a11y-close-btn",
              ariaLabel: "Close Accessibility Panel",
              children: [
                {
                  type: "span",
                  className: "a11y-sr-only",
                  label: "Close",
                },
                {
                  type: "span",
                  className: " a11y-close-icon",
                  children: [iconSets.closeIcon()],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
