import { updateCheckboxState } from "../utils/helpers/updateCheckboxState.js";

// Function to set dark mode
export const setAnimations = () => {
  updateCheckboxState({
    dataName: "animations",
    btnId: "toggle-animation-checkbox",
    className: "disable-animations",
    reverse: true // this param reverse from adding a class to remove it on checked
  });
};
