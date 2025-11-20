module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$'
      }
    ]
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'json']
};
