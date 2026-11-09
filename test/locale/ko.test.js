import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import localizedFormat from '../../src/plugin/localizedFormat'
import advancedFormat from '../../src/plugin/advancedFormat'
import '../../src/locale/ko'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.extend(advancedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Korean locale relative time in past and future', () => {
  const cases = [
    [1, 's', '몇 초 후'],
    [-1, 's', '몇 초 전'],
    [1, 'm', '1분 후'],
    [-1, 'm', '1분 전'],
    [10, 'm', '10분 후'],
    [-10, 'm', '10분 전'],
    [1, 'h', '한 시간 후'],
    [-1, 'h', '한 시간 전'],
    [5, 'h', '5시간 후'],
    [-5, 'h', '5시간 전'],
    [1, 'd', '하루 후'],
    [-1, 'd', '하루 전'],
    [2, 'd', '2일 후'],
    [-2, 'd', '2일 전'],
    [1, 'M', '한 달 후'],
    [-1, 'M', '한 달 전'],
    [3, 'M', '3달 후'],
    [-3, 'M', '3달 전'],
    [1, 'y', '일 년 후'],
    [-1, 'y', '일 년 전'],
    [4, 'y', '4년 후'],
    [-4, 'y', '4년 전']
  ]
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale('ko').fromNow())
      .toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale('ko').fromNow())
      .toBe(moment().add(c[0], c[1]).locale('ko').fromNow())
  })
  expect(dayjs().add(-10, 'd').locale('ko').fromNow(true))
    .toBe('10일')
  expect(dayjs().add(-10, 'd').locale('ko').fromNow(true))
    .toBe(moment().add(-10, 'd').locale('ko').fromNow(true))
})

it('Korean locale meridiem and ordinal', () => {
  expect(dayjs('2020-01-01 03:00:00').locale('ko').format('A')).toBe('오전')
  expect(dayjs('2020-01-01 15:00:00').locale('ko').format('A')).toBe('오후')
  expect(dayjs('2020-01-01 12:00:00').locale('ko').format('A'))
    .toBe(moment('2020-01-01 12:00:00').locale('ko').format('A'))
  expect(dayjs('2020-01-01').locale('ko').format('Do')).toBe('1일')
  expect(dayjs('2020-01-02').locale('ko').format('Do')).toBe('2일')
})

it('Korean locale weekdays and months', () => {
  expect(dayjs('2023-10-01').locale('ko').format('dddd')).toBe('일요일')
  expect(dayjs('2023-10-02').locale('ko').format('ddd')).toBe('월')
  expect(dayjs('2023-01-01').locale('ko').format('MMMM')).toBe('1월')
  expect(dayjs('2023-12-31').locale('ko').format('MMMM')).toBe('12월')
})

it('Korean locale localized formats', () => {
  const date = dayjs('2020-02-03T15:04:05')
  expect(date.locale('ko').format('LT')).toBe('오후 3:04')
  expect(date.locale('ko').format('L')).toBe('2020.02.03.')
  expect(date.locale('ko').format('LL')).toBe('2020년 2월 3일')
  expect(date.locale('ko').format('LLL')).toBe('2020년 2월 3일 오후 3:04')
  expect(date.locale('ko').format('LLLL')).toBe('2020년 2월 3일 월요일 오후 3:04')
  expect(date.locale('ko').format('llll')).toBe('2020년 2월 3일 월요일 오후 3:04')
})
