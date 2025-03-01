import setFeatureProperty from "../utils/helpers/setFeatureProperty.js";
import setFeatureClass from "../utils/helpers/setFeatureClass.js";
import updateCheckboxState from "../utils/helpers/updateCheckboxState.js";
import resetStatesAndReloadFeatures from "../utils/events/resetFeaturesStates.js";
import { resetChildrenOrder } from "../utils/events/resetChildrenOrder.js";
import initializeTooltips from "../utils/dom/tooltipEvents.js";
import { initMagnifier } from "../utils/dom/initMagnifier.js";

const darkThemeColors = ["#ffffff", "#008000", "#0040c9", "#c400b3"];
const lightThemeColors = ["#000000", "#008000", "#0040c9", "#c400b3"];

const properties = {
  fontSizes: ["text-lg", "text-xl", "text-2xl"],
  fontsWeight: ["font-bold"],
  lettersSpacing: [
    "spacing-wide",
    "spacing-wider",
    "spacing-widest",
    "spacing-tighter",
    "spacing-tight",
  ],
  textAlign: ["text-center", "text-right"],
  dyslexiaFonts: ["dyslexia-font-regular"],
  highContrast: ["high-contrast"],
  setTooltip: ["tooltip"],
  lineHeight: [
    "leading-1-2",
    "leading-1-4",
    "leading-1-6",
    "leading-1-8",
    "leading-2-0",
  ],
  magnifier: ["show-magnifier"],
  textColors: () =>
    document.body.classList.contains("dark-mode" || "high-contrast")
      ? darkThemeColors
      : lightThemeColors,
};

export const setAnimations = (isLoadMode) => {
  updateCheckboxState({
    dataName: "animations",
    btnId: "toggle-animation-checkbox",
    className: "disable-animations",
    reverse: true,
    isLoadMode: isLoadMode,
  });
};

export const setDarkMode = (isLoadMode) => {
  updateCheckboxState({
    dataName: "darkMode",
    btnId: "toggle-dark-mode-checkbox",
    className: "dark-mode",
    isLoadMode: isLoadMode,
  });
};

export const setTTS = (isLoadMode) => {
  // workig on this feature on another environment
};

export const setShowBtnIcons = (isLoadMode) => {
  updateCheckboxState({
    dataName: "showIcons",
    btnId: "toggle-icons-checkbox",
    className: "show-btn-icons",
    isLoadMode: isLoadMode,
  });
};

export const setFontSize = async (isLoadMode) => {
  await setFeatureClass({
    dataName: "fontSize",
    btnId: "font-size",
    classes: properties.fontSizes,
    btnTexts: ["", "Large", "XL", "XXL"],
    isLoadMode: isLoadMode,
  });
};

export const setFontWeight = async (isLoadMode) => {
  await setFeatureClass({
    dataName: "fontWeight",
    btnId: "font-weight",
    classes: properties.fontsWeight,
    btnTexts: ["", "Bold"],
    isLoadMode: isLoadMode,
  });
};

export const setTextColor = async (isLoadMode) => {
  await setFeatureProperty({
    cssKeyProperty: "color",
    values: properties.textColors(),
    transition: "all 0.3s ease-in-out",
    btnId: "text-color",
    isLoadMode: isLoadMode,
    btnText: ["", ": Green", ": Blue", ": Magenta"],
  });
};

export const setLetterSpacing = async (isLoadMode) => {
  await setFeatureClass({
    dataName: "letterSpacing",
    btnId: "letter-spacing",
    classes: properties.lettersSpacing,
    btnTexts: ["", "Wide", "Wider", "Widest", "TighTer", "Tight"],
    isLoadMode: isLoadMode,
  });
};

export const setTextAlign = async (isLoadMode) => {
  await setFeatureClass({
    dataName: "textAlign",
    btnId: "text-align",
    classes: properties.textAlign,
    btnTexts: ["Left", "Center", "Right"],
    isLoadMode: isLoadMode,
  });
};
export const setLineHeight = async (isLoadMode) => {
  await setFeatureClass({
    dataName: "lineHeight",
    btnId: "line-height",
    classes: properties.lineHeight,
    btnTexts: ["", "1:2", "1:4", "1:6", "1:8", "2:0"],
    isLoadMode: isLoadMode,
  });
};

export const setDyslexiaFont = async (isLoadMode) => {
  await setFeatureClass({
    dataName: "dyslexiaFont",
    btnId: "dyslexia-font",
    classes: properties.dyslexiaFonts,
    btnTexts: ["", "On"],
    isLoadMode: isLoadMode,
  });
};

export const setHighContrast = async (isLoadMode) => {
  await setFeatureClass({
    dataName: "highContrast",
    btnId: "high-contrast",
    classes: properties.highContrast, // Add the high contrast class here
    btnTexts: ["", "On"],
    isLoadMode: isLoadMode,
  });
};

export const setTooltip = async (isLoadMode) => {
  await setFeatureClass({
    dataName: "tooltip",
    btnId: "tooltip",
    classes: ["show-tooltips"],
    btnTexts: ["", "On"],
    isLoadMode: isLoadMode,
  });
  initializeTooltips();
};
export const setMagnifier = async (isLoadMode) => {};

export const resetAllFeatures = async () => {
  resetStatesAndReloadFeatures();
};

export const resetButtonLayout = async (isLoadMode) => {
  await resetChildrenOrder({
    containers: ["leftContainer", "rightContainer"],
    isLoadMode: isLoadMode,
  });
};
