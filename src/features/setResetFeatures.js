import { stateManager } from "../db/stateManager.js";
import { loadCurrentStates } from "../states/loadCurrentStates.js";
import { featuresStates } from "./../states/featuresStates.js";

export const setResetFeatures = async () => {
  try {
    await Promise.all(
      Object.entries(featuresStates).map(async ([featureKey, defaultState]) => {
        await stateManager.setState(featureKey, defaultState);
        console.log(`Reset state for feature: ${featureKey}`);
      })
    );

    loadCurrentStates();
  } catch (error) {
    console.error("Error resetting features:", error);
  }
};
