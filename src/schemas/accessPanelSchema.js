import { iconSets } from "../icons/icons.js";

export const accessPanel = {
  type: "div",
  id: "a11y-access-panel",
  className: "a11y-access-panel",
  children: [
    {
      type: "button",
      id: "drag-icon",
      className: "a11y-drag-btn",
      "aria-label": "Accessibility Drag Button",
      attributes: { "data-tooltip": "Drag to move component" },
      children: [
        {
          type: "span",
          attributes: { "aria-hidden": "true" },
          children: [iconSets.dragIcon()],
        },
        { type: "span", label: "drag component", className: "a11y-sr-only" },
      ],
    },

    // {
    //   type: "button",
    //   id: "text-to-speech",
    //   className: "a11y-btn a11y-feat-access-btn text-to-speech",
    //   "aria-label": "TTS Button",
    //   attributes: {
    //     "data-tooltip": "Text to Speech (TTS) \n  ctrl + alt + s  ",
    //   },
    //   children: [
    //     {
    //       type: "span",
    //       className: "a11y-sr-only",
    //       label: "TTS Button",
    //     },
    //     {
    //       type: "span",
    //       attributes: { "aria-hidden": "true" },
    //       children: [iconSets.voiceIcon()],
    //     },
    //   ],
    // },
    {
      type: "a",
      id: "accessibility-up-button",
      className: "access-panel-btn",
      href:"#",
      "aria-label": "Accessibility Button",
      attributes: { "data-tooltip": "Back to top"},
      children: [
        {
          type: "span",
          className: "a11y-sr-only",
          label: "Accessibility Button",
        },

        {
          type: "span",
          className:"icon",
          attributes: { "aria-hidden": "true" },
          children: [iconSets.arrowUpIcon()],
        },
      ],
    },
    {
      type: "button",
      id: "a11y-feat-access-btn",
      className: "access-panel-btn",
      attributes: {
        "aria-expanded": "false",
        "aria-controls": "accessibility-panel",
      },
      children: [
        {
          type: "span",
          className: "a11y-sr-only",
          label: "Accessibility Button",
        },
        {
          type: "span",
          className:"icon",
          attributes: { "aria-hidden": "true" },
          children: [iconSets.accessibilityIcon()],
        },
      ],
    },
  ],
};
