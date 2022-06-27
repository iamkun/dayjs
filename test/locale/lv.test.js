import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/lv'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Latvian locale relative time in past and future with suffix', () => {
  const cases = [
    [1, 's', 'pēc dažām sekundēm'],
    [-1, 's', 'pirms dažām sekundēm'],
    [1, 'm', 'pēc minūtes'],
    [-1, 'm', 'pirms minūtes'],
    [1, 'h', 'pēc stundas'],
    [-1, 'h', 'pirms stundas'],
    [1, 'd', 'pēc dienas'],
    [-1, 'd', 'pirms dienas'],
    [1, 'M', 'pēc mēneša'],
    [-1, 'M', 'pirms mēneša'],
    [2, 'd', 'pēc 2 dienām'],
    [-2, 'd', 'pirms 2 dienām'],
    [10, 'd', 'pēc 10 dienām'],
    [-10, 'd', 'pirms 10 dienām'],
    [6, 'm', 'pēc 6 minūtēm'],
    [-6, 'm', 'pirms 6 minūtēm'],
    [5, 'h', 'pēc 5 stundām'],
    [-5, 'h', 'pirms 5 stundām'],
    [3, 'M', 'pēc 3 mēnešiem'],
    [-3, 'M', 'pirms 3 mēnešiem'],
    [4, 'y', 'pēc 4 gadiem'],
    [-4, 'y', 'pirms 4 gadiem']
  ]

  const locale = 'lv'
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale(locale).fromNow())
      .toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale(locale).fromNow())
      .toBe(moment().add(c[0], c[1]).locale(locale).fromNow())
  })
})
