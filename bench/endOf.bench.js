const { createSuite, runSuites } = require('./benchmark')

const moment = require('moment')
const dayjs = require('..')

const momentDate = moment('2013-05-25')
const dayjsDate = dayjs('2013-05-25')

const units = ['second', 'minute', 'hour', 'date', 'day', 'week', 'month', 'year']

const suites = units.map((unit) => {
  const suite = createSuite(`endOf ${unit}`)
  suite.add('Moment.js', () => momentDate.endOf(unit))
  suite.add('Day.js', () => dayjsDate.endOf(unit))
  return suite
})

runSuites(suites)
