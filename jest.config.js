module.exports = {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.?(m)js?(x)', 
    '**/?(*.)(spec|test).?(m)js?(x)'
  ],
  transform: {
    '^.+\\.(js|mjs)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: ['js', 'mjs'],
}