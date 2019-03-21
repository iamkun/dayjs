import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import quarterOfYear from '../../src/plugin/quarterOfYear'

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
