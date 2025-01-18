module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    transform: {
      '^.+\\.(ts|html)$': 'jest-preset-angular',
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.spec.json',
      },
    },
    moduleNameMapper: {
      '@angular/core/testing': 'jest-preset-angular/mock-angular-core',
    },
  };
  