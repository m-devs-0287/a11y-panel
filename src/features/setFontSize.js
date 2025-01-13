import { setFeatureProperty } from "../utils/helpers/setFeatureProperty.js";

const fontSizes = ["16px", "18px", "20px", "22px", "24px"];

export const setFontSize = async () => {
  await setFeatureProperty({
    cssKeyProperty: "fontSize",
    values: fontSizes,
    transition: "font-size 0.3s ease-in-out",
    btnId: "font-size",
  });
};
