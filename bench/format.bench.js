const { createSuite, runSuites } = require('./benchmark')

const moment = require('moment')
const datefnsFormat = require('date-fns/format')
const dayjs = require('..')

const momentDate = moment('2018-09-15T12:58:07.123Z')
const dayjsDate = dayjs('2018-09-15T12:58:07.123Z')
const date = new Date('2018-09-15T12:58:07.123Z')

const format = 'D.M.YYYY h:mm:ss.SSS A Z'

const formatToISOString = createSuite('format to ISO 8601')
  .add('Moment.js', () => momentDate.toISOString())
  .add('Day.js', () => dayjsDate.toISOString())
  .add('Date', () => date.toISOString())

function formatDate(input) {
  return input.toLocaleString()
}

const customFormat = createSuite('use custom format')
  .add('Moment.js', () => momentDate.format(format))
  .add('date-fns', () => datefnsFormat(date, format))
  .add('Day.js', () => dayjsDate.format(format))
  .add('Date', () => formatDate(date, format))

runSuites([formatToISOString, customFormat])
