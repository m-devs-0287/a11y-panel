import { setFeatureProperty } from "../utils/helpers/setFeatureProperty.js";

const lettersSpacing = ["1px", "2px", "3px", "4px", "5px"];

export const setLetterSpacing = async () => {
  await setFeatureProperty({
    cssKeyProperty: "letterSpacing",
    values: lettersSpacing,
    transition: "letter-spacing 0.3s ease-in-out",
    btnId: "letter-spacing",
  });
};
