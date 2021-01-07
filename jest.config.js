module.exports = {
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./test/setup.ts'],
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  collectCoverage: true,
  testMatch: ['**/*.test.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
