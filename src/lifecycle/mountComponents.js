import {
  appendGenHTML,
  handleDragging,
  handlePanelInteractions,
} from "./../utils/index.js";
import { applyTheme } from "./../themes/js/applyTheme.js";
import { genAndCachedDOMElements } from "./../cache/cachePanel.js";
import setupKeyboardShortcuts from "../utils/events/keyboardShortcuts.js";

export const mountComponents = ({
  panelLocation,
  buttonLocation,
  theme,
  isDev,
}) => {
  // make panel and buttons available for mount
  const { panel, buttons, modalNav } = genAndCachedDOMElements();

  appendGenHTML(panelLocation, panel);
  appendGenHTML(buttonLocation, buttons);
  appendGenHTML(buttonLocation, modalNav);

  // Apply theme
  applyTheme(theme, isDev);

  // Enable dragging
  const accessHub = document.querySelector("#a11y-access-hub");
  const dragIcon = document.querySelector("#drag-icon");
  handleDragging(accessHub, dragIcon);

  // Handle panel interactions
  const toggleButton = document.querySelector("#toggle-panel");
  const closeButton = document.querySelector("#accessibility-close-button");
  handlePanelInteractions({ panel, toggleButton, closeButton });

  // console.log(modalNav.className)

  //   // handle modal navigation
  //   setupKeyboardShortcuts(
  //     modalNav,
  //     ["Control", 'm'],
  //     () => {
  //       modalNav.classList.toggle('active')
  //       document.querySelector(".modal-navigation-list li a")?.focus();

  //     }
  //   )

  //   // remove class active from modalNav when keypress esc
  //   document.addEventListener("keydown", (event) => {
  //     if (event.key === "Escape") {
  //       modalNav.classList.remove("active");
  //     }
  //   });
  // // or when clicking outside
  //   document.addEventListener("click", (event) => {
  //     if (!modalNav.contains(event.target)) {
  //       modalNav.classList.remove("active");
  //   }
  //   })
};
