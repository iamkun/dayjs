import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import locale from '../../src/locale/ku'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'

const englishToArabicNumbersMap = {
  1: '١',
  2: '٢',
  3: '٣',
  4: '٤',
  5: '٥',
  6: '٦',
  7: '٧',
  8: '٨',
  9: '٩',
  0: '٠'
}

dayjs.extend(preParsePostFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format meridiem correctly', () => {
  for (let i = 0; i <= 23; i += 1) {
    const dayjsKu = dayjs()
      .startOf('day')
      .add(i, 'hour')
    const hour = (i % 12 || 12)
      .toString()
      .replace(/\d/g, match => englishToArabicNumbersMap[match])
    const m = i < 12 ? 'پ.ن' : 'د.ن'
    expect(dayjsKu.locale('ku').format('h A')).toBe(`${hour} ${m}`)
  }
})

it('Preparse with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    dayjs.locale(locale)
    const momentKu = moment()
      .locale('ku')
      .add(i, 'day')
    expect(dayjs(momentKu.format()).format()).toEqual(momentKu.format())
  }
})

it('ku locale export is a locale object (not a wrapper)', () => {
  expect(typeof locale).toBe('object')
  expect(locale.name).toBe('ku')
  expect(typeof dayjs('2020-01-01').locale('ku').format('MMMM')).toBe('string')
})
