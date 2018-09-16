const { createSuite, runSuites } = require('./benchmark')

const moment = require('moment')
const datefnsEndOfSeconds = require('date-fns/end_of_second')
const datefnsEndOfMinutes = require('date-fns/end_of_minute')
const datefnsEndOfHours = require('date-fns/end_of_hour')
const datefnsEndOfDays = require('date-fns/end_of_day')
const datefnsEndOfWeek = require('date-fns/end_of_week')
const datefnsEndOfMonths = require('date-fns/end_of_month')
const datefnsEndOfYears = require('date-fns/end_of_year')
const dayjs = require('..')

const momentDate = moment('2013-05-25')
const dayjsDate = dayjs('2013-05-25')
const date = new Date('2013-05-25')

const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']

function endOfDateFnsUnit(input, unit) {
  switch (unit) {
    case 'second':
      return datefnsEndOfSeconds(input)
    case 'minute':
      return datefnsEndOfMinutes(input)
    case 'hour':
      return datefnsEndOfHours(input)
    case 'day':
      return datefnsEndOfDays(input)
    case 'week':
      return datefnsEndOfWeek(input)
    case 'month':
      return datefnsEndOfMonths(input)
    case 'year':
      return datefnsEndOfYears(input)
    default:
      throw new Error(`Unrecognized unit: "${unit}".`)
  }
}

const suites = units.map((unit) => {
  const suite = createSuite(`endOf ${unit}`)
  suite.add('Moment.js', () => momentDate.endOf(unit))
  suite.add('date-fns', () => endOfDateFnsUnit(date, unit))
  suite.add('Day.js', () => dayjsDate.endOf(unit))
  return suite
})

runSuites(suites)
