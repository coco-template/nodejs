module.exports = {
  transform: {
    '\\.(ts|tsx|js|jsx)$': '@swc/jest',
  },
  moduleFileExtensions: ['js', 'ts'],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'html'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
}
