const { createSuite, runSuites } = require('./benchmark')

const moment = require('moment')
const datefnsDiference = require('date-fns/difference_in_milliseconds')
const dayjs = require('..')

const momentDate = moment('2013-05-25')
const dayjsDate = dayjs('2013-05-25')
const date = new Date('2013-05-25')

const scenarios = [
  { input: '2013-04-25', label: 'an older' },
  { input: '2013-05-25', label: 'the same' },
  { input: '2013-06-25', label: 'a newer' }
]

const suites = scenarios.map(({ input, label }) => {
  const momentInput = moment(input)
  const dayjsInput = dayjs(input)
  const dateInput = new Date(input)
  const suite = createSuite(`diff with ${label} date`)
    .add('Moment.js', () => momentDate.diff(momentInput))
    .add('date-fns', () => datefnsDiference(date, dateInput))
    .add('Day.js', () => dayjsDate.diff(dayjsInput))
  return suite
})

runSuites(suites)
