module.exports = {
  transform: {
    '\\.(ts|tsx|js|jsx)$': 'esbuild-jest',
  },
  moduleFileExtensions: ['js', 'ts'],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'html'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.spec.{js,ts}'],
  testPathIgnorePatterns: ['/node_modules/'],
};
