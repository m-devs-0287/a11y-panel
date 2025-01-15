export const updateButtonState = (btnId, state, btnTexts, dynamicText) => {
  const button = document.getElementById(btnId);
  if (!button) return;

  // Update active class
  if (state.value !== undefined) {
    button.classList.toggle("active", state.value); // For boolean-based states
    if (button.type === "checkbox") {
      button.checked = state.value; // Update checkbox state
    }
  } else if (state.index !== undefined) {
    button.classList.toggle("active", state.index > 0); // For index-based states
  }

  // Update button text
  if (dynamicText) {
    button.textContent = dynamicText(state);
  } else if (btnTexts && Array.isArray(btnTexts)) {
    const textIndex =
      state.value !== undefined
        ? (state.value ? 1 : 0)
        : state.index || 0;
    button.textContent = btnTexts[textIndex] || "Unknown";
  }
};

export default updateButtonState;