import {
  setDarkMode,
  setAnimations,
  setDyslexiaFont,
  setFontSize,
  setFontWeight,
  setLetterSpacing,
  setTextAlign,
} from "../features/featureActions.js";

export const features = {
  darkMode: {
    btnId: "toggle-dark-mode-checkbox",
    hasState: true,
    defaultState: { value: false },
    action: setDarkMode,
    btnTexts: ["Off", "On"], // For boolean states
  },
  animations: {
    btnId: "toggle-animation-checkbox",
    hasState: true,
    defaultState: { value: true },
    action: setAnimations,
    btnTexts: ["Disabled", "Enabled"], // For boolean states
  },
  fontSize: {
    btnId: "font-size",
    hasState: true,
    defaultState: { index: 0, property: "16px" },
    action: setFontSize,
    dynamicText: (state) => `Font Size: ${state.property}`, // Dynamic text
  },
  letterSpacing: {
    btnId: "letter-spacing",
    hasState: true,
    defaultState: { index: 0, property: "1px" },
    action: setLetterSpacing,
    dynamicText: (state) => `Letter Spacing: ${state.property}`, // Dynamic text
  },
  textAlign: {
    btnId: "text-align",
    hasState: true,
    defaultState: { index: 0, property: "left" },
    action: setTextAlign,
    dynamicText: (state) => `Text Align: ${state.property}`, // Dynamic text
  },
  fontWeight: {
    btnId: "font-weight",
    hasState: true,
    defaultState: { index: 0, property: "normal" },
    action: setFontWeight,
    dynamicText: (state) => `Font Weight: ${state.property}`, // Dynamic text
  },
  dyslexiaFont: {
    btnId: "dyslexia-font",
    hasState: true,
    defaultState: { index: 0, property: "" },
    action: setDyslexiaFont,
  },
};
