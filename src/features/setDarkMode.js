import { updateCheckboxState } from "../utils/helpers/updateCheckboxState.js";

// Function to set dark mode
export const setDarkMode = () => {
  updateCheckboxState({
    dataName: "darkMode",
    btnId: "toggle-dark-mode-checkbox",
    className: "dark-mode",
  });
};
