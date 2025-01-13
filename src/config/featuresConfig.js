import {
  setFontSize,
  setLetterSpacing,
  setDarkMode,
  setFontWeight,
  setTextAlign,
  setDyslexiaFont,
  setViewLinks,
  setAnimations,
  setResetFeatures,
} from "./../features/index.js";

export const featuresConfig = {
  darkMode: {
    id: "toggle-dark-mode-checkbox",
    action: setDarkMode,
    hasState: true,
  },
  animations: {
    id: "toggle-animation-checkbox",
    action: setAnimations,
    hasState: true,
  },
  fontSize: {
    id: "font-size",
    action: setFontSize,
    hasState: true,
  },
  letterSpacing: {
    id: "letter-spacing",
    action: setLetterSpacing,
    hasState: true,
  },
  textAlign: {
    id: "text-align",
    action: setTextAlign,
    hasState: true,
  },
  fontWeight: {
    id: "font-weight",
    action: setFontWeight,
    hasState: true,
  },
  DyslexiaFont: {
    id: "dyslexia-font",
    action: setDyslexiaFont,
  },
  // ViewLinks: {
  //   id: "view-links",
  //   action: setViewLinks,
  // },
  resetFeatures: {
    id: "reset-all",
    action: setResetFeatures,
    hasState: false,
  },
};
