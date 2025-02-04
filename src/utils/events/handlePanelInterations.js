import { toggleClassName, removeClassName } from "../dom/handleClasses.js";
import { toggleTabbing } from "../dom/toggleTabbing.js";

export const handlePanelInteractions = ({
  panel,
  toggleButton,
  closeButton,
  debugMode,
}) => {
  // if (!panel || !toggleButton || !closeButton) {
  //   if (debugMode) {
  //     console.error("Missing elements for panel interactions:");
  //     if (!panel) console.error(" - Panel is undefined.");
  //     if (!toggleButton) console.error(" - Toggle button is undefined.");
  //     if (!closeButton) console.error(" - Close button is undefined.");
  //   }
  //   return;
  // }

  // // Manage panel open/close via the toggle button
  // toggleClassName({
  //   btnId: toggleButton.id,
  //   classHolder: panel.id,
  //   className: "active",
  //   aria: true, // Or true if ARIA attributes are required
  // }); // Use imported function for toggle

  
  // toggleButton.addEventListener("click", () => {
  //   const isOpen = panel.classList.contains("active");
  //   toggleTabbing(panel, isOpen, debugMode);
  //   if (debugMode) console.log(`Panel toggled. Open state: ${isOpen}`);
  // });

  // // Close panel via the close button
  // removeClassName(closeButton, panel, "active"); // Use imported function for remove
  // closeButton.addEventListener("click", () => {
  //   toggleTabbing(panel, false, debugMode);
  //   if (debugMode) console.log("Panel closed via close button.");
  // });

  // // Close panel when clicking outside
  // document.addEventListener("click", (event) => {
  //   if (!panel.contains(event.target) && !toggleButton.contains(event.target)) {
  //     panel.classList.remove("active");
  //     toggleTabbing(panel, false, debugMode);
  //     if (debugMode) console.log("Panel closed due to outside click.");
  //   }
  // });

  // // Close panel when pressing Escape
  // document.addEventListener("keydown", (event) => {
  //   if (event.key === "Escape" && panel.classList.contains("active")) {
  //     panel.classList.remove("active");
  //     toggleTabbing(panel, false, debugMode);
  //     if (debugMode) console.log("Panel closed due to Escape key.");
  //   }
  // });

  // if (debugMode) console.log("Panel interaction handlers initialized.");
};
