import { setFeatureProperty } from "../utils/helpers/setFeatureProperty.js";

const textAligns = ["left", "center", "right"];

export const setTextAlign = async () => {
  await setFeatureProperty({
    cssKeyProperty: "textAlign",
    values: textAligns,
    transition: "text-align 0.3s ease-in-out",
    btnId: "text-align",
  });
};
