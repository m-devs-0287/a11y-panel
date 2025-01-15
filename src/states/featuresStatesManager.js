// import { stateManager } from "../db/stateManager.js";
// import { featuresStates } from "./featuresStates.js";

// /**
//  * Fetches current states from IndexedDB and updates the `featuresStates` object.
//  */
// export const updateFeaturesStates = async () => {
//   try {
//     // Fetch states for each feature and update the global featuresStates object
//     const fontSize = await stateManager.getState("fontSize");
//     const letterSpacing = await stateManager.getState("letterSpacing");

//     if (fontSize) featuresStates.fontSize = fontSize;
//     if (letterSpacing) featuresStates.letterSpacing = letterSpacing;
    
//   } catch (error) {
//     console.error("Error updating feature states from DB:", error);
//   }
// };
