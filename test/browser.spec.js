/* eslint-disable prefer-arrow-callback,func-names */
// Please do NOT modify or change this file
// Checkout our unit test files in test/*.test.js
describe('Install', function () {
  it('window.dayjs ', function () {
    if (!window.dayjs) throw new Error('No window.dayjs')
  })
})

describe('Core APIs', function () {
  it('Chain Methods', function () {
    expect(dayjs('2011-02-05T14:48:00.000Z')
      .clone()
      .set('month', 3)
      .set('second', 30)
      .endOf('month')
      .startOf('week')
      .add(1, 'day')
      .subtract(1, 'year')
      .format('{YYYY} MM-DDTHH:mm:ss')).toBe('{2010} 04-25T00:00:00')
  })

  it('Date parse - nonstandard date string', function () {
    expect(dayjs('2018-4-1 1:1:1:22').format('YYYY-MM-DD hh:mm:ss'))
      .toBe('2018-04-01 01:01:01')
    expect(dayjs('2018-4-1').format('YYYY-MM-DD hh:mm:ss'))
      .toBe('2018-04-01 12:00:00')
    expect(dayjs('2018-4-1 11:49').format('YYYY-MM-DD hh:mm:ss')) // fix ios bug
      .toBe('2018-04-01 11:49:00')
  })
})
