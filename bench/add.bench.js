const { createSuite, runSuites } = require('./benchmark')

const moment = require('moment')
const dayjs = require('..')

const momentDate = moment('2013-05-25')
const dayjsDate = dayjs('2013-05-25')
const date = new Date('2013-05-25')

const units = ['second', 'minute', 'hour', 'date', 'month', 'year']

function addDateUnit(input, value, unit) {
  const instance = new Date(input)
  switch (unit) {
    case 'second':
      instance.setSeconds(instance.getSeconds() + value)
      break
    case 'minute':
      instance.setMinutes(instance.getMinutes() + value)
      break
    case 'hour':
      instance.setHours(instance.getHours() + value)
      break
    case 'date':
      instance.setDate(instance.getDate() + value)
      break
    case 'month':
      instance.setMonth(instance.getMonth() + value)
      break
    case 'year':
      instance.setFullYear(instance.getFullYear() + value)
      break
    default:
      throw new Error(`Unrecognized unit: "${unit}".`)
  }
  return instance
}

const suites = units.map((unit) => {
  const suite = createSuite(`add ${unit}`)
    .add('Moment.js', () => momentDate.add(8, unit))
    .add('Day.js', () => dayjsDate.add(8, unit))
    .add('Date', () => addDateUnit(date, 8, unit))
  return suite
})

runSuites(suites)
