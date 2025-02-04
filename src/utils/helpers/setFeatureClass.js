import { stateManager } from "../../db/stateManager.js";

/**
 * Sets or toggles a feature class on the `classHolder` element.
 *
 * @param {Object} params - The configuration object for the feature.
 * @param {string} params.dataName - The name of the feature in IndexedDB.
 * @param {string} params.btnId - The ID of the button associated with the feature.
 * @param {string[]} params.classes - The array of CSS classes to toggle.
 * @param {string[]} params.btnTexts - The array of button texts for each state.
 * @param {HTMLElement} params.classHolder - The element to apply the class to (default: document.body).
 * @param {boolean} params.isLoadMode - Whether the function is being called in load mode.
 * @returns {Object} - The updated state of the feature.
 */
export const setFeatureClass = async ({
  dataName,
  btnId,
  classes,
  btnTexts,
  classHolder = document.body,
  isLoadMode = false,
}) => {
  try {
    const savedState = await stateManager.getState(dataName);
    const currentIndex = savedState?.index || 0;

    const newIndex = isLoadMode
      ? currentIndex
      : (currentIndex + 1) % (classes.length + 1);

    classes.forEach((cls) => classHolder.classList.remove(cls));
    const newClass = newIndex > 0 ? classes[newIndex - 1] : null;

    if (newClass) {
      classHolder.classList.add(newClass);
    }

    // Save the updated state in IndexedDB (only in action mode)
    const updatedState = { index: newIndex, property: newClass };
    if (!isLoadMode) {
      await stateManager.setState(dataName, updatedState);
    }

    const formattedText = btnId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const btn = document.getElementById(btnId);
    // update the active class
    btn.classList.toggle("active", newIndex > 0);


    // check if aleast one children has the btn-icon class
    if (btn.querySelector(".btn-icon")) {
      const spanTags = btn.querySelectorAll("span");

      //  find the tag without the class of btn-icon
      const nonBtnIconTag = 
        Array
          .from(spanTags)
          .find(
        (span) => !span.classList.contains("btn-icon")
      );

      nonBtnIconTag.innerText = `${formattedText} ${btnTexts[newIndex] || ""}`;

    }

    // // Update the button text and active class
    // const button = document.getElementById(btnId);

    // if (!button) {
    //   console.log("Button with id of ", btnId, " not found.");
    //   return;
    // }

    // const buttonText = btnTexts[newIndex] || btnId.replace(/-/g, " ");
    // button.innerText = buttonText;

    return updatedState;
  } catch (error) {
    console.error(`Error in setFeatureClass for "${dataName}":`, error);
  }
};

export default setFeatureClass;
