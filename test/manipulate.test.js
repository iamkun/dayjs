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
    expect(dayjs().startOf('otherString').unix()).toBe(moment().startOf('otherString').unix())
    expect(dayjs().endOf('otherString').unix()).toBe(moment().endOf('otherString').unix())
  })
})


it('Add Time days', () => {
  expect(dayjs().add(1, 's').unix()).toBe(moment().add(1, 's').unix())
  expect(dayjs().add(1, 'seconds').unix()).toBe(moment().add(1, 'seconds').unix())
  expect(dayjs().add(1, 'm').unix()).toBe(moment().add(1, 'm').unix())
  expect(dayjs().add(1, 'minutes').unix()).toBe(moment().add(1, 'minutes').unix())
  expect(dayjs().add(1, 'h').unix()).toBe(moment().add(1, 'h').unix())
  expect(dayjs().add(1, 'hours').unix()).toBe(moment().add(1, 'hours').unix())
  expect(dayjs().add(1, 'w').unix()).toBe(moment().add(1, 'w').unix())
  expect(dayjs().add(1, 'weeks').unix()).toBe(moment().add(1, 'weeks').unix())
  expect(dayjs().add(1, 'd').unix()).toBe(moment().add(1, 'd').unix())
  expect(dayjs().add(1, 'days').unix()).toBe(moment().add(1, 'days').unix())
  expect(dayjs().add(1, 'M').unix()).toBe(moment().add(1, 'M').unix())
  expect(dayjs().add(1, 'y').unix()).toBe(moment().add(1, 'y').unix())
  expect(dayjs('20111031').add(1, 'months').unix()).toBe(moment('20111031').add(1, 'months').unix())
})

it('Subtract Time days', () => {
  expect(dayjs().subtract(1, 'days').unix()).toBe(moment().subtract(1, 'days').unix())
})
