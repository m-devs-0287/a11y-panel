import {
  setDarkMode,
  setAnimations,
  setDyslexiaFont,
  setFontSize,
  setFontWeight,
  setLetterSpacing,
  setTextAlign,
  setHighContrast,
  setTooltip,
  setTTS,
  resetAllFeatures,
  resetButtonLayout,
  setLineHeight,
  setTextColor,
  setShowBtnIcons,
  setMagnifier,
} from "../features/featureActions.js";

/**
 * The `features` object defines the configuration for all accessibility features in the application.
 * Each key in this object represents a feature and will also be used as the key for storing/retrieving its state
 * in the IndexedDB. The structure of each feature includes:
 *
 * - `btnId`: The ID of the button associated with the feature.
 * - `hasState`: Indicates whether the feature requires a saved state in the IndexedDB.
 * - `defaultState`: The initial state of the feature if no saved state exists in the IndexedDB.
 * - `action`: The function to execute when toggling or activating the feature.
 * - `btnTexts`: (Optional) An array of button texts for features with boolean states.
 *
 * Note: The key of each feature (  "darkMode", "animations") will be used as the name of the key in the IndexedDB.
 */
export const features = {
  // Set Checkbokes
  //----------------------------------------------------------------------------
  darkMode: {
    btnId: "toggle-dark-mode-checkbox",
    hasState: true,
    defaultState: { value: false },
    action: setDarkMode,
    btnTexts: ["Off", "On"], // For boolean states
  },

  textToSpeech: {
    btnId: "toggle-tts-checkbox",
    hasState: false,
    defaultState: { value: true },
    action: setTTS,
    btnTexts: ["Off", "On"], // For boolean states
  },

  animations: {
    btnId: "toggle-animation-checkbox",
    hasState: true,
    defaultState: { value: true },
    action: setAnimations,
    btnTexts: ["Disabled", "Enabled"], // For boolean states
  },
  showIcons: {
    btnId: "toggle-icons-checkbox",
    hasState: true,
    defaultState: { value: true },
    action: setShowBtnIcons,
    btnTexts: ["Disabled", "Enabled"], // For boolean states
  },

  fontSize: {
    btnId: "font-size",
    hasState: true,
    defaultState: { index: 0, property: "" },
    action: setFontSize,
  },
  letterSpacing: {
    btnId: "letter-spacing",
    hasState: true,
    defaultState: { index: 0, property: "" },
    action: setLetterSpacing,
  },
  textAlign: {
    btnId: "text-align",
    hasState: true,
    defaultState: { index: 0, property: "" },
    action: setTextAlign,
  },
  fontWeight: {
    btnId: "font-weight",
    hasState: true,
    defaultState: { index: 0, property: "black" },
    action: setFontWeight,
  },
  color: {
    btnId: "text-color",
    hasState: true,
    defaultState: { index: 0, property: "#000000" },
    action: setTextColor,
  },

  lineHeight: {
    btnId: "line-height",
    hasState: true,
    defaultState: { index: 0, property: "1.5" },
    action: setLineHeight,
  },
  dyslexiaFont: {
    btnId: "dyslexia-font",
    hasState: true,
    defaultState: { index: 0, property: "" },
    action: setDyslexiaFont,
  },
  highContrast: {
    btnId: "high-contrast",
    hasState: true,
    defaultState: { index: 0, property: "" },
    action: setHighContrast,
  },

  tooltip: {
    btnId: "tooltip",
    hasState: true,
    defaultState: { value: false },
    action: setTooltip,
  },

  // magnifier: {
  //   btnId: "toggle-magnifier",
  //   hasState: true,
  //   defaultState: { value: false },
  //   action: setMagnifier,
  // },

  // Drag and Drop
  // -----------------------------------------------------------------------------
  leftContainer: {
    containerId: "a11y-left-container",
    hasState: true,
    defaultState: {
      property: ["0", "1", "2", "3", "4"],
    },
    action: () => {},
  },
  rightContainer: {
    containerId: "a11y-right-container",
    hasState: true,
    defaultState: {
      property: ["5", "6", "7", "8", "9"],
    },
    action: () => {},
  },

  // reset all features
  resetAllFeatures: {
    btnId: "reset-all",
    hasState: false,
    action: resetAllFeatures,
  },
  resetButtonLayout: {
    btnId: "reset-layout",
    hasState: false,
    action: resetButtonLayout,
  },
};
