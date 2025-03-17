import { iconSets } from "../icons/icons.js";

export const accessPanel = {
  type: "div",
  id: "a11y-access-panel",
  className: "a11y-access-panel",
  attributes: {
    "aria-label": "access hub",
    "role": "banner",
    "tabindex": "0",
  },

  children: [
    {
      type: "button",
      id: "drag-icon",
      className: "a11y-drag-btn",
      attributes: {
        "data-tooltip": "Drag to move component",
        // "aria-hidden": "true",
        "tabindex": "-1",
        "data-tooltip": "Accessibility Drag Button",
      },
      children: [
        {
          type: "span",
          attributes: {
            "aria-hidden": "true",
            "style": "pointer-events: none",
          },
          children: [iconSets.dragIcon()],
        },
        { type: "span", label: "drag component", className: "a11y-sr-only" },
      ],
    },
    {
      "type": "a",
      "id": "accessibility-up-button",
      "className": "access-panel-btn",
      "href": "#",
      "aria-label": "button back to top",
      "attributes": { "data-tooltip": "Back to top" },
      "children": [
        {
          type: "span",
          className: "a11y-sr-only",
          label: "Accessibility Button",
        },

        {
          type: "span",
          className: "icon",
          attributes: {
            "aria-hidden": "true",
            "style": "pointer-events: none",
          },
          children: [iconSets.arrowUpIcon()],
        },
      ],
    },
    {
      type: "button",
      id: "a11y-open-btn",
      className: "access-panel-btn",
      attributes: {
        "aria-expanded": false,
        "aria-controls": "accessibility-panel",
        "data-tooltip": "Accessibility Open Button",
      },
      children: [
        {
          type: "span",
          className: "a11y-sr-only",
          label: "accessibility open button",
        },
        {
          type: "span",
          className: "icon",
          attributes: {
            "aria-hidden": "true",
            "style": "pointer-events: none",
          },
          children: [iconSets.accessibilityIcon()],
        },
      ],
    },
  ],
};
