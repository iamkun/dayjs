import MockDate from 'mockdate'
import moment from 'moment'
import 'moment-timezone'
import dayjs from '../../src'
import isoWeek from '../../src/plugin/isoWeek'
import utc from '../../src/plugin/utc'
import timezone from '../../src/plugin/timezone'
import customParseFormat from '../../src/plugin/customParseFormat'
import '../../src/locale/fr'

dayjs.extend(isoWeek)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const dates = [
  '2020-01-01T00:00:00.000Z',
  '2020-01-01T00:00:00.000+01:00',
  '2020-01-01T00:00:00.000-05:00',
  '2020-12-31T23:59:59.999Z'
]

describe('Iso week when date have hour and or timezone', () => {
  dates.forEach((d) => {
    it(d, () => {
      expect(dayjs(d).isoWeek()).toBe(moment(d).isoWeek())
    })
  })

  it('Get iso week when using timezone, utc and other plugins', () => {
    const isoWeek1 = dayjs.utc('2024-01-16T22:00:00.000Z').locale('fr').tz('Europe/Paris').isoWeek()
    const isoWeek2 = dayjs.utc('2024-01-16T23:00:00.000Z').locale('fr').tz('Europe/Paris').isoWeek()
    const momentISOWeek = moment.utc('2024-01-16T22:00:00.000Z').locale('fr').tz('Europe/Paris').isoWeek()
    expect(isoWeek1).toBe(isoWeek2)
    expect(isoWeek1).toBe(momentISOWeek)
  })
})
