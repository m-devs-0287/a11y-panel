/**
 * initAccessibilityPanel.js
 *
 * This file is the core entry point for initializing and managing the Accessibility Panel on the web page.
 * It handles key setup tasks such as applying themes, initializing features, managing drag-and-drop
 * functionality, and configuring language support. The panel is designed to enhance the accessibility of
 * the page, providing options like keyboard shortcuts, customizable themes, language translation, and
 * persistent states across sessions.
 *
 * Key Functionalities:
 * - Dynamically generate and cache DOM elements required by the panel.
 * - Initialize drag-and-drop for repositioning the panel.
 * - Apply themes and configurations based on user or environment settings.
 * - Set up persistent states using a database to maintain feature configurations.
 * - Provide an accessible language selector with support for multiple languages.
 * - Enable keyboard interactions and shortcuts for opening, closing, and navigating the panel.
 * - Handle panel visibility and ARIA attributes for screen reader support.
 *
 *
 */

// rollup's imports
// import './themes/css/default.css'
// import './css/styles.css'

import { initFeatures } from "./features/initFeatures.js";
import { initializeDB } from "./db/initializeDB.js";
import { loadCurrentStates } from "./states/loadCurrentStates.js";
import { initializeGTranslate } from "./utils/events/languageSelector.js";
import { toggleClassName } from "./utils/index.js";
import { applyTheme } from "./themes/js/applyTheme.js";
import { genAndCachedDOMElements } from "./cache/cachePanel.js";
import { appendGenHTML, handleDragging } from "./utils/index.js";
import { toggleAccessiblePanel } from "./utils/dom/toggleAccessiblePanel.js";
import initializeEnvironment from "./enviroments/index.js";
import initFeatBtnsDragAndDrop from "./utils/events/initFeatBtnsDragAndDrop.js";
// import { initMagnifier } from "./utils/dom/initMagnifier.js";
// import { observeClass } from "./utils/dom/observeClass.js";

/**
 *
 * Functions included on this comment should not yet be deleted
 * working with them for other features
 *
 * import {handlePanelInteractions} from "./utils/index.js";
 * import registerKeyboardShortcut from "./utils/events/registerKeyboardShortcut.js";
 * import handleTextToSpeech from "./utils/events/handleTextToSpeech.js";
 * import handleDragAndDropFeatures from "./utils/dom/handleDragAndDropFeatures.js";
 * import { handleDragAndDrop } from "./utils/events/dragAndDrop.js";
 * import { initTTS } from "./utils/dom/initTTS.js";
 * import { observeClass } from "./utils/dom/observeClass.js";
 *
 *
 */

/**
 * Initializes the Accessibility Panel.
 * @param {Object} options - Configuration options for the panel.
 * @param {string} options.panelLocation - Selector for the panel container.
 * @param {string} options.buttonLocation - Selector for the button container.
 * @param {string} [options.theme="default"] - Theme to apply.
 * @param {boolean} [options.active=true] - Whether the panel is active by default.
 * @param {string} [options.environment="production"] - Environment mode.
 * @param {string} [options.language="en"] - Default language for the panel.
 * @param {boolean} [options.debugMode=false] - Enables debug logs.
 */
export const initAccessibilityPanel = ({
  panelLocation = "body",
  theme,
  environment = "production",
  language,
}) => {
  const initializePanel = async () => {
    try {
      // append HTML components
      const { panel, buttons, modalNav, tts, magnifier } =
        genAndCachedDOMElements();
      appendGenHTML(panelLocation, panel);
      appendGenHTML(panelLocation, buttons);
      // appendGenHTML(panelLocation, magnifier);
      // appendGenHTML(panelLocation, tts);
      // appendGenHTML(buttonLocation, modalNav);

      /**
       * initialize drag and drop functionality for main feature buttons
       */
      initFeatBtnsDragAndDrop();

      /**
       * Apply theme
       * theme: light, dark, default
       * NOTE: allow user to provide a path for a custome theme
       */
      applyTheme(theme);

      /**
       * Initialize the environment
       * enviroments include development, production and testing
       */
      initializeEnvironment(environment);

      /**
       * Initialize the database on page load for all panel features
       */
      await initializeDB();

      /**
       * Load current states on page load for all panel feature features
       * base on last saved state
       */
      await loadCurrentStates();

      /**
       * Initialize features on page load for panel feature based features
       */
      initFeatures();

      /**
       * Initialize the language selector widget
       */
      initializeGTranslate("lang-dropdown-menu", {
        languages: language || [
          "en",
          "fr",
          "de",
          "it",
          "es",
          "ja",
          "ru",
          "zh-CN",
          "zh-TW",
          "ar",
          "bn",
        ],
      });

      /**
       * controls the visibility of the dropdown menu
       */
      toggleClassName({
        btnId: "dropdown-btn",
        classHolder: "lang-dropdown-menu",
        className: "is-open",
        aria: true,
      });

      /**
       * Handler access panel interactions
       * incude open and close functionality for the panel
       * include shortcuts for closing the panel using the escape key
       */
      toggleAccessiblePanel({
        target: "accessibility-panel",
        trigger: "a11y-feat-access-btn",
        closeButton: "a11y-close-btn",
      });

      /**
       * Handler access panel interactions
       * provide the hability to move access panel across the page view port
       */
      handleDragging(
        document.getElementById("a11y-access-panel"),
        document.getElementById("drag-icon")
      );
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  };

  /**
   * await for the DOM to be fully loaded
   */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePanel);
  } else {
    initializePanel();
  }
};
