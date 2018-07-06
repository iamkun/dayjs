module.exports = {
  reporters: ['default', './jest.seed-reporter.js'],
  roots: [
    'test'
  ],
  testRegex: 'test/(.*?/)?.*test.js$',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*'
  ]
}
