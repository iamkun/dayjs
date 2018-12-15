import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('StartOf EndOf', () => {
  it('StartOf EndOf Year ... with s and upper case', () => {
    const testArr = ['Year', 'year', 'YearS', 'month', 'day', 'date',
      'week', 'hour', 'minute', 'second']
    testArr.forEach((d) => {
      expect(dayjs().startOf(d).valueOf()).toBe(moment().startOf(d).valueOf())
      expect(dayjs().endOf(d).valueOf()).toBe(moment().endOf(d).valueOf())
    })
  })

  it('StartOf EndOf Other -> no change', () => {
    expect(dayjs().startOf('otherString').valueOf()).toBe(moment().startOf('otherString').valueOf())
    expect(dayjs().endOf('otherString').valueOf()).toBe(moment().endOf('otherString').valueOf())
  })
})


it('Add Time days', () => {
  expect(dayjs().add(1, 'ms').valueOf()).toBe(moment().add(1, 'ms').valueOf())
  expect(dayjs().add(1, 'milliseconds').valueOf()).toBe(moment().add(1, 'milliseconds').valueOf())
  expect(dayjs().add(1, 's').valueOf()).toBe(moment().add(1, 's').valueOf())
  expect(dayjs().add(1, 'seconds').valueOf()).toBe(moment().add(1, 'seconds').valueOf())
  expect(dayjs().add(1, 'm').valueOf()).toBe(moment().add(1, 'm').valueOf())
  expect(dayjs().add(1, 'minutes').valueOf()).toBe(moment().add(1, 'minutes').valueOf())
  expect(dayjs().add(1, 'h').valueOf()).toBe(moment().add(1, 'h').valueOf())
  expect(dayjs().add(1, 'hours').valueOf()).toBe(moment().add(1, 'hours').valueOf())
  expect(dayjs().add(1, 'w').valueOf()).toBe(moment().add(1, 'w').valueOf())
  expect(dayjs().add(1, 'weeks').valueOf()).toBe(moment().add(1, 'weeks').valueOf())
  expect(dayjs().add(1, 'd').valueOf()).toBe(moment().add(1, 'd').valueOf())
  expect(dayjs().add(1, 'days').valueOf()).toBe(moment().add(1, 'days').valueOf())
  expect(dayjs().add(1, 'M').valueOf()).toBe(moment().add(1, 'M').valueOf())
  expect(dayjs().add(1, 'y').valueOf()).toBe(moment().add(1, 'y').valueOf())
  expect(dayjs('20111031').add(1, 'months').valueOf()).toBe(moment('20111031').add(1, 'months').valueOf())
  expect(dayjs('20160131').add(1, 'months').valueOf()).toBe(moment('20160131').add(1, 'months').valueOf())
  expect(dayjs('20160229').add(1, 'year').valueOf()).toBe(moment('20160229').add(1, 'year').valueOf())

  expect(dayjs().add('2', 'years').valueOf()).toBe(moment().add('2', 'years').valueOf())
})

it('Subtract Time days', () => {
  expect(dayjs().subtract(1, 'days').valueOf()).toBe(moment().subtract(1, 'days').valueOf())
})

it('Add Time days (DST)', () => {
  // change timezone before running test
  // New Zealand (-720)
  expect(dayjs('2018-04-01').add(1, 'd').format()).toBe(moment('2018-04-01').add(1, 'd').format())
  expect(dayjs('2018-03-28').add(1, 'w').format()).toBe(moment('2018-03-28').add(1, 'w').format())
  // London (-60)
  expect(dayjs('2018-10-28').add(1, 'd').format()).toBe(moment('2018-10-28').add(1, 'd').format())
  expect(dayjs('2018-10-26').add(1, 'w').format()).toBe(moment('2018-10-26').add(1, 'w').format())
})
