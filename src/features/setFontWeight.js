import { setFeatureProperty } from "../utils/helpers/setFeatureProperty.js";

const fontsWeight = ["400", "700"];

export const setFontWeight = async () => {
  await setFeatureProperty({
    cssKeyProperty: "fontWeight",
    values: fontsWeight,
    transition: "font-weight 0.3s ease-in-out",
    btnId: "font-weight",
  });
};

