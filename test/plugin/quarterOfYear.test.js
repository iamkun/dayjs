import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import quarterOfYear from '../../src/plugin/quarterOfYear'
import updateLocale from '../../src/plugin/updateLocale'

dayjs.extend(quarterOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('get QuarterOfYear', () => {
  expect(dayjs('2013-01-01T00:00:00.000').quarter()).toBe(1)
  expect(dayjs('2013-04-01T00:00:00.000').subtract(1, 'ms').quarter()).toBe(1)
  expect(dayjs('2013-04-01T00:00:00.000').quarter()).toBe(2)
  expect(dayjs('2013-07-01T00:00:00.000').subtract(1, 'ms').quarter()).toBe(2)
  expect(dayjs('2013-07-01T00:00:00.000').quarter()).toBe(3)
  expect(dayjs('2013-10-01T00:00:00.000').subtract(1, 'ms').quarter()).toBe(3)
  expect(dayjs('2013-10-01T00:00:00.000').quarter()).toBe(4)
  expect(dayjs('2014-01-01T00:00:00.000').subtract(1, 'ms').quarter()).toBe(4)
})

it('set QuarterOfYear', () => {
  const d1 = '2013-01-01T00:00:00.000'
  expect(dayjs(d1).quarter(2).format())
    .toBe(moment(d1).quarter(2).format())
  const d2 = '2013-02-05T05:06:07.000'
  expect(dayjs(d2).quarter(2).format())
    .toBe(moment(d2).quarter(2).format())
  const d3 = '2018-11-25T05:06:07.000'
  expect(dayjs(d3).quarter(3).format())
    .toBe(moment(d3).quarter(3).format())
})

it('add subtract quarter', () => {
  expect(dayjs().add(2, 'quarter').format())
    .toBe(moment().add(2, 'quarter').format())
  expect(dayjs().subtract(2, 'quarter').format())
    .toBe(moment().subtract(2, 'quarter').format())
})

it('startOf endOf quarter', () => {
  expect(dayjs().startOf('quarter').format())
    .toBe(moment().startOf('quarter').format())
  expect(dayjs().endOf('quarter').format())
    .toBe(moment().endOf('quarter').format())
})


it('handle different start month ', () => {
  const testDifferentMonth = (startMonth, quarters) => {
    dayjs.updateLocale('en', {
      quarterStart: startMonth
    })

    Object.keys(quarters).forEach((quarter) => {
      const months = quarters[quarter]
      const numericQuarter = parseInt(quarter, 10)

      months.forEach((month) => {
        const monthString = month > 9 ? month.toString() : `0${month}`
        const date = `2013-${monthString}-01T00:00:00.000`

        expect(dayjs(date).quarter()).toBe(numericQuarter)

        const quarterStart = dayjs(date).startOf('quarter').month() + 1
        const quarterEnd = dayjs(date).endOf('quarter').month() + 1

        expect(quarterStart).toBe(months[0])
        expect(quarterEnd).toBe(months[2])
      })
    })
  }

  dayjs.extend(updateLocale)

  // quarter starts in january
  testDifferentMonth(1, {
    1: [1, 2, 3],
    2: [4, 5, 6],
    3: [7, 8, 9],
    4: [10, 11, 12]
  })

  // quarter starts in feb
  testDifferentMonth(2, {
    1: [2, 3, 4],
    2: [5, 6, 7],
    3: [8, 9, 10],
    4: [11, 12, 1]
  })

  // first quarter starts in july
  testDifferentMonth(7, {
    1: [7, 8, 9],
    2: [10, 11, 12],
    3: [1, 2, 3],
    4: [4, 5, 6]
  })
})
