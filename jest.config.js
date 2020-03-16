module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/dist/'
  ]
};