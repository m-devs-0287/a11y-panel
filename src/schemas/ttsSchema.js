import { iconSets } from "../icons/icons.js";

export const ttsComponent = {
  type: "div",
  id: "tts-component",
  className: "tts-component",
  children: [
    {
      className: "container",
      children: [
        {
          type: "button",
          id: "tts-play-btn",
          className: "tts-btn tts-play-btn",
          "aria-label": "Play text",
          children: [
            {
              type: "span",
              label: "play text",
              className: "a11y-sr-only",
            },
            {
              type: "span",
              attributes: { "aria-hidden": "true" },
              className: "btn-icon",
              children: [iconSets.speakerIcon()],
            },
          ],
        },
        {
          type: "button",
          id: "tts-stop-btn",
          className: "tts-btn tts-stop-btn a11y-hidden",
          "aria-label": "Stop text",
          children: [
            {
              type: "span",
              label: "stop text",
              className: "a11y-sr-only",
            },
            {
              type: "span", attributes: { "aria-hidden": "true" },
              className: "btn-icon",
              children: [iconSets.stopIcon()],
            },
          ],
        },
      ],
    },
  ],
};
