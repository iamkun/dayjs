import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/uz'
import '../../src/locale/uz-latn'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date('2019-02-11T12:00:00Z'))
})

afterEach(() => {
  MockDate.reset()
})

it('Uzbek Latin relative time', () => {
  expect(dayjs().add(3, 'hour').locale('uz-latn').fromNow()).toBe('3 soatdan keyin')
  expect(dayjs().add(1, 'day').locale('uz-latn').fromNow()).toBe('bir kundan keyin')
  expect(dayjs().subtract(2, 'month').locale('uz-latn').fromNow()).toBe('2 oy oldin')
})

it('Uzbek Cyrillic relative time', () => {
  expect(dayjs().add(5, 'minute').locale('uz').fromNow()).toBe('5 дақиқадан кейин')
  expect(dayjs().add(10, 'second').locale('uz').fromNow()).toBe('сониядан кейин')
  expect(dayjs().subtract(1, 'year').locale('uz').fromNow()).toBe('бир йил олдин')
})

it('Uzbek month and weekday names are lowercase', () => {
  const date = dayjs('2019-02-11')
  expect(date.locale('uz-latn').format('dddd, D MMMM')).toBe('dushanba, 11 fevral')
  expect(date.locale('uz').format('dddd, D MMMM')).toBe('душанба, 11 феврал')
})
