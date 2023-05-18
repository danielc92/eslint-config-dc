/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
   testEnvironment: "jsdom",
   clearMocks: true,
   coverageProvider: 'v8',
   testPathIgnorePatterns: ['src/testing-files'],
   "transform": {
      "\\.[jt]sx?$": "babel-jest"
    },
};
