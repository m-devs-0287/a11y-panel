import { developmentMode } from "./developmentMode.js";
import { productionMode } from "./production.js";
import { testingMode } from "./testing.js";

const initializeEnvironment = (env) => {
  switch (env) {
    case "development":
      return developmentMode();

    case "production":
      return productionMode();

    case "testing":
      return testingMode();

    default:
      throw new Error(`Unknown mode: ${env}`);
  }
};

export default initializeEnvironment;