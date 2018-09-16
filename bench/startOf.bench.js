const { createSuite, runSuites } = require('./benchmark')

const moment = require('moment')
const datefnsStartOfSeconds = require('date-fns/start_of_second')
const datefnsStartOfMinutes = require('date-fns/start_of_minute')
const datefnsStartOfHours = require('date-fns/start_of_hour')
const datefnsStartOfDays = require('date-fns/start_of_day')
const datefnsStartOfWeek = require('date-fns/start_of_week')
const datefnsStartOfMonths = require('date-fns/start_of_month')
const datefnsStartOfYears = require('date-fns/start_of_year')
const dayjs = require('..')

const momentDate = moment('2013-05-25')
const dayjsDate = dayjs('2013-05-25')
const date = new Date('2013-05-25')

const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']

function startOfDateFnsUnit(input, unit) {
  switch (unit) {
    case 'second':
      return datefnsStartOfSeconds(input)
    case 'minute':
      return datefnsStartOfMinutes(input)
    case 'hour':
      return datefnsStartOfHours(input)
    case 'day':
      return datefnsStartOfDays(input)
    case 'week':
      return datefnsStartOfWeek(input)
    case 'month':
      return datefnsStartOfMonths(input)
    case 'year':
      return datefnsStartOfYears(input)
    default:
      throw new Error(`Unrecognized unit: "${unit}".`)
  }
}

const suites = units.map((unit) => {
  const suite = createSuite(`startOf ${unit}`)
  suite.add('Moment.js', () => momentDate.startOf(unit))
  suite.add('date-fns', () => startOfDateFnsUnit(date, unit))
  suite.add('Day.js', () => dayjsDate.startOf(unit))
  return suite
})

runSuites(suites)
