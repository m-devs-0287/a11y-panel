
import { setFeatureClass } from "../utils/helpers/setFeatureClass.js";

export const setDyslexiaFont = async () => {
  await setFeatureClass({
    classes: ["dyslexia-font", "dyslexia-bold"],
    btnId: "dyslexia-font",
  });
};