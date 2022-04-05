import { InitialOptionsTsJest } from "ts-jest/dist/types";

const jestConfig: InitialOptionsTsJest = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  preset: "ts-jest/presets/js-with-babel",

  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@cds/core|@cds/react|lit|@lit|lit-element|lit-html|ramda)",
  ],

  testMatch: ["**/test.test.tsx"],

  testEnvironment: "jsdom"
};

export default jestConfig;