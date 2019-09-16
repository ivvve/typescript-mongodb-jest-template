const {
    compilerOptions: { paths },
  } = require('./tsconfig');
const { resolve } = require('path');

const moduleNameMapper = {};
for (key in paths) { 
  const moduleName = `${key.slice(0, key.length - 1)}(.*)$`;
  moduleNameMapper[moduleName] = resolve(__dirname, `./${paths[key][0].slice(0, paths[key][0].length - 1)}$1`);
}

module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'], 
};