

import setFeatureProperty from "../utils/helpers/setFeatureProperty.js";
import setFeatureClass from "../utils/helpers/setFeatureClass.js";
import updateCheckboxState from "../utils/helpers/updateCheckboxState.js";

const properties = {
  fontSizes: ["16px", "18px", "20px", "22px", "24px"],
  fontsWeight: ["400", "700"],
  lettersSpacing: ["1px", "2px", "3px", "4px", "5px"],
  textAligns: ["left", "center", "right"],
  dyslexiaFonts: ["dyslexia-font-regular"]
};

export const setAnimations = (isLoadMode) => {
  updateCheckboxState({
    dataName: "animations",
    btnId: "toggle-animation-checkbox",
    className: "disable-animations",
    reverse: true,
    isLoadMode: isLoadMode
  });
};

// Function to set dark mode
export const setDarkMode = (isLoadMode) => {
  updateCheckboxState({
    dataName: "darkMode",
    btnId: "toggle-dark-mode-checkbox",
    className: "dark-mode",
    isLoadMode: isLoadMode
  });
};

export const setDyslexiaFont = async (isLoadMode) => {
   await setFeatureClass({
    dataName: "dyslexiaFont",
    btnId: "dyslexia-font",
    classes: properties.dyslexiaFonts,
    btnTexts: ["Dyslexia Font", "Dyslexia Font: On"],
    isLoadMode: isLoadMode
  });
};

export const setFontSize = async (isLoadMode) => {
  await setFeatureProperty({
    cssKeyProperty: "fontSize",
    values: properties.fontSizes,
    transition: "font-size 0.3s ease-in-out",
    btnId: "font-size",
    isLoadMode: isLoadMode
  });
};

export const setFontWeight = async (isLoadMode) => {
  await setFeatureProperty({
    cssKeyProperty: "fontWeight",
    values: properties.fontsWeight,
    transition: "font-weight 0.3s ease-in-out",
    btnId: "font-weight",
    isLoadMode: isLoadMode
  });
};

export const setLetterSpacing = async (isLoadMode) => {
  await setFeatureProperty({
    cssKeyProperty: "letterSpacing",
    values: properties.lettersSpacing,
    transition: "letter-spacing 0.3s ease-in-out",
    btnId: "letter-spacing",
    isLoadMode: isLoadMode
  });
};

export const setTextAlign = async (isLoadMode) => {
  await setFeatureProperty({
    cssKeyProperty: "textAlign",
    values: properties.textAligns,
    transition: "text-align 0.3s ease-in-out",
    btnId: "text-align",
    isLoadMode: isLoadMode
  });
};

export default {
  setDarkMode,
  setAnimations,
  setDyslexiaFont,
  setFontSize,
  setFontWeight,
  setLetterSpacing,
  setTextAlign,
};
