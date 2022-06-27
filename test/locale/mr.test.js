import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'
import '../../src/locale/mr'

dayjs.extend(relativeTime)
dayjs.extend(preParsePostFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Marathi locale relative time in past and future with suffix', () => {
  const cases = [
    [1, 's', 'काही सेकंदांमध्ये'],
    [-1, 's', 'काही सेकंदांपूर्वी'],
    [1, 'm', 'एका मिनिटामध्ये'],
    [-1, 'm', 'एका मिनिटापूर्वी'],
    [1, 'h', 'एका तासामध्ये'],
    [-1, 'h', 'एका तासापूर्वी'],
    [1, 'd', 'एका दिवसामध्ये'],
    [-1, 'd', 'एका दिवसापूर्वी'],
    [1, 'M', 'एका महिन्यामध्ये'],
    [-1, 'M', 'एका महिन्यापूर्वी'],
    [2, 'd', '२ दिवसांमध्ये'],
    [-2, 'd', '२ दिवसांपूर्वी'],
    [10, 'd', '१० दिवसांमध्ये'],
    [-10, 'd', '१० दिवसांपूर्वी'],
    [6, 'm', '६ मिनिटांमध्ये'],
    [-6, 'm', '६ मिनिटांपूर्वी'],
    [5, 'h', '५ तासांमध्ये'],
    [-5, 'h', '५ तासांपूर्वी'],
    [3, 'M', '३ महिन्यांमध्ये'],
    [-3, 'M', '३ महिन्यांपूर्वी'],
    [4, 'y', '४ वर्षांमध्ये'],
    [-4, 'y', '४ वर्षांपूर्वी']
  ]

  const locale = 'mr'
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale(locale).fromNow())
      .toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale(locale).fromNow())
      .toBe(moment().add(c[0], c[1]).locale(locale).fromNow())
  })
})
