import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/ko'
import customParseFormat from '../../src/plugin/customParseFormat'

dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Korean locale relative time in past and future', () => {
  const cases = [
    [1, 'd', '하루 후'],
    [-1, 'd', '하루 전'],
    [2, 'd', '2일 후'],
    [-2, 'd', '2일 전'],
    [10, 'd', '10일 후'],
    [-10, 'd', '10일 전'],
    [6, 'm', '6분 후'],
    [-6, 'm', '6분 전'],
    [5, 'h', '5시간 후'],
    [-5, 'h', '5시간 전'],
    [3, 'M', '3달 후'],
    [-3, 'M', '3달 전'],
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

it('Korean customParseFormat', () => {
  expect(dayjs('2019-01-01').locale('ko').format('YYYY-MM-DD'))
    .toBe(moment('2019-01-01').locale('ko').format('YYYY-MM-DD'))

  expect(dayjs('오전 1:00', 'a h:mm').locale('ko').format('YYYY-MM-DD'))
    .toBe(moment('오전 1:00', 'a h:mm').locale('ko').format('YYYY-MM-DD'))

  expect(dayjs('오후 1:00', 'a h:mm', 'ko').format('a h:mm'))
    .toBe(moment('오후 1:00', 'a h:mm', 'ko').format('a h:mm'))
})
