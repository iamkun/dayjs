const { createSuite, runSuites } = require('./benchmark')

const moment = require('moment')
const dayjs = require('..')

const scenarios = [
  { input: new Date(), label: 'Date' },
  { input: new Date().valueOf(), label: 'timestamp' },
  { input: '2018-09-15T12:58:07.123Z', label: 'string in ISO 8601' },
  { input: '2018-09-15 14:58:07.123', label: 'string in the local time zone' }
]

function parseDate(input) {
  return new Date(input)
}

const suites = scenarios.map(({ input, label }) =>
  createSuite(`create from ${label}`)
    .add('Moment.js', () => moment(input))
    .add('Day.js', () => dayjs(input))
    .add('Date', () => parseDate(input)))

runSuites(suites)
