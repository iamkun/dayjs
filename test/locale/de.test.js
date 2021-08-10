import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/de'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('German locale relative time in past and future with suffix', () => {
  const cases = [
    [1, 's', 'in ein paar Sekunden'],
    [-1, 's', 'vor ein paar Sekunden'],
    [1, 'm', 'in einer Minute'],
    [-1, 'm', 'vor einer Minute'],
    [1, 'h', 'in einer Stunde'],
    [-1, 'h', 'vor einer Stunde'],
    [1, 'd', 'in einem Tag'],
    [-1, 'd', 'vor einem Tag'],
    [1, 'M', 'in einem Monat'],
    [-1, 'M', 'vor einem Monat'],
    [2, 'd', 'in 2 Tagen'],
    [-2, 'd', 'vor 2 Tagen'],
    [10, 'd', 'in 10 Tagen'],
    [-10, 'd', 'vor 10 Tagen'],
    [6, 'm', 'in 6 Minuten'],
    [-6, 'm', 'vor 6 Minuten'],
    [5, 'h', 'in 5 Stunden'],
    [-5, 'h', 'vor 5 Stunden'],
    [3, 'M', 'in 3 Monaten'],
    [-3, 'M', 'vor 3 Monaten'],
    [4, 'y', 'in 4 Jahren'],
    [-4, 'y', 'vor 4 Jahren']
  ]
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale('de').fromNow())
      .toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale('de').fromNow())
      .toBe(moment().add(c[0], c[1]).locale('de').fromNow())
  })
})

it('German locale relative time in past and future without suffix', () => {
  const cases = [
    [1, 's', 'ein paar Sekunden'],
    [-1, 's', 'ein paar Sekunden'],
    [1, 'm', 'eine Minute'],
    [-1, 'm', 'eine Minute'],
    [1, 'h', 'eine Stunde'],
    [-1, 'h', 'eine Stunde'],
    [1, 'd', 'ein Tag'],
    [-1, 'd', 'ein Tag'],
    [2, 'd', '2 Tage'],
    [-2, 'd', '2 Tage'],
    [10, 'd', '10 Tage'],
    [-10, 'd', '10 Tage'],
    [6, 'm', '6 Minuten'],
    [-6, 'm', '6 Minuten'],
    [5, 'h', '5 Stunden'],
    [-5, 'h', '5 Stunden'],
    [3, 'M', '3 Monate'],
    [-3, 'M', '3 Monate'],
    [4, 'y', '4 Jahre'],
    [-4, 'y', '4 Jahre']
  ]
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale('de').fromNow(true))
      .toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale('de').fromNow(true))
      .toBe(moment().add(c[0], c[1]).locale('de').fromNow(true))
  })
})
