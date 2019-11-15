
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  testRegex: "(/__tests__/.*\\.test)\\.ts$",
  setupFiles: [
    "<rootDir>/__tests__/setup.ts"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "node"
  ],
  collectCoverageFrom: [
    "src/**/*.{ts,js}",
    "!src/modules/FFProbe.ts",
  ],
  coverageReporters: ["text-summary", "lcov"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
