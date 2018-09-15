const { createSuite } = require('./benchmark')

const moment = require('moment')
const dayjs = require('..')

const momentDate = moment('2013-05-25')
const dayjsDate = dayjs('2013-05-25')
const date = new Date('2013-05-25')

function cloneDate(input) {
  return new Date(input)
}

createSuite('clone')
  .add('Moment.js', () => momentDate.clone())
  .add('Day.js', () => dayjsDate.clone())
  .add('Date', () => cloneDate(date))
  .start()
