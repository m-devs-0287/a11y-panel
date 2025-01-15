import { generateDynamicNavigationLinks } from "../utils/helpers/generateDynamicNavigationLinks.js"; // Ensure this path is correct

// IDs to look for on the page
const idsToInclude = ["header", "aside", "footer"];

// Dynamically generate links for existing IDs on the page
const dynamicLinks = generateDynamicNavigationLinks(idsToInclude);

export const modalNavigation = {
  id: "modal-navigation",
  className: "modal-navigation",
  children: [
    {
      type: "div",
      className: "modal-navigation-header",
      children: [
        {
          type: "h2",
          className: "modal-heading",
          label: "Keyboard Shortcuts",
        },
        {
          type: "div",
          className: "current-page",
          children: [
            {
              type: "p",
              label: "Columbia Business School | Home",
            },
          ],
        },
      ],
    },
    {
      type: "div",
      className: "modal-navigation-body",
      children: [
        {
          type: "div",
          className: "modal-navigation-container",
          children: [
            {
              type: "ul",
              className: "modal-navigation-list",
              children: dynamicLinks,
            },
          ],
        },
      ],
    },
    {
      type: "div",
      className: "modal-navigation-footer",
      children: [
        {
          type: "button",
          label: "Press ESC to close",
        },
      ],
    },
  ],
};
