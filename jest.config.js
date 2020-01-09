module.exports = {
  automock: false,
  setupFiles: [
    './setupJest.js'
  ],
  moduleNameMapper: {
    '^MOCKS(.*)$': '<rootDir>/__mocks__$1',
    '\\.(sass|scss|css)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
