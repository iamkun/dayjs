import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'
import '../../src/locale/sl'

dayjs.extend(relativeTime)
dayjs.extend(preParsePostFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Slovenian locale relative time in past and future with suffix', () => {
  const cases = [
    [1, 's', 'čez nekaj sekund'],
    [-1, 's', 'pred nekaj sekundami'],
    [1, 'm', 'čez eno minuto'],
    [-1, 'm', 'pred eno minuto'],
    [1, 'h', 'čez eno uro'],
    [-1, 'h', 'pred eno uro'],
    [1, 'd', 'čez en dan'],
    [-1, 'd', 'pred enim dnem'],
    [1, 'M', 'čez en mesec'],
    [-1, 'M', 'pred enim mesecem'],
    [2, 'd', 'čez 2 dni'],
    [-2, 'd', 'pred 2 dnevoma'],
    [10, 'd', 'čez 10 dni'],
    [-10, 'd', 'pred 10 dnevi'],
    [6, 'm', 'čez 6 minut'],
    [-6, 'm', 'pred 6 minutami'],
    [5, 'h', 'čez 5 ur'],
    [-5, 'h', 'pred 5 urami'],
    [3, 'M', 'čez 3 mesece'],
    [-3, 'M', 'pred 3 meseci'],
    [4, 'y', 'čez 4 leta'],
    [-4, 'y', 'pred 4 leti']
  ]

  const locale = 'sl'
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale(locale).fromNow())
      .toBe(c[2])
    expect(dayjs().add(c[0], c[1]).locale(locale).fromNow())
      .toBe(moment().add(c[0], c[1]).locale(locale).fromNow())
  })
})
