const { createSuite, runSuites } = require('./benchmark')

const moment = require('moment')
const datefnsIsBefore = require('date-fns/is_before')
const datefnsIsAfter = require('date-fns/is_after')
const datefnsIsSameSecond = require('date-fns/is_same_second')
const dayjs = require('..')

const momentDate = moment('2013-05-25')
const dayjsDate = dayjs('2013-05-25')
const date = new Date('2013-05-25')

const methods = ['isSame', 'isAfter', 'isBefore']
const scenarios = [
  { input: '2013-04-25', label: 'an older' },
  { input: '2013-05-25', label: 'the same' },
  { input: '2013-06-25', label: 'a newer' }
]

const datefnsCompare = {
  isSame: datefnsIsSameSecond,
  isAfter: datefnsIsAfter,
  isBefore: datefnsIsBefore
}

const compareDate = {
  isSame(input) {
    return date == input // eslint-disable-line eqeqeq
  },

  isAfter(input) {
    return date < input
  },

  isBefore(input) {
    return date > input
  }
}

const suites = methods.reduce((result, method) => {
  const subSuites = scenarios.map(({ input, label }) => {
    const momentInput = moment(input)
    const dayjsInput = dayjs(input)
    const dateInput = new Date(input)
    const suite = createSuite(`${method} with ${label} date`)
      .add('Moment.js', () => momentDate[method](momentInput))
      .add('date-fns', () => datefnsCompare[method](date, dateInput))
      .add('Day.js', () => dayjsDate[method](dayjsInput))
      .add('Date', () => compareDate[method](dateInput))
    return suite
  })
  return result.concat(subSuites)
}, [])

runSuites(suites)
