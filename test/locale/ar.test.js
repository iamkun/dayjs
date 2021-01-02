import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'
import localeData from '../../src/plugin/localeData'
import '../../src/locale/ar'

dayjs.extend(localeData)
dayjs.extend(relativeTime)
dayjs.extend(preParsePostFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsAR = dayjs().locale('ar').add(i, 'day')
    const momentAR = moment().locale('ar').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'MMMM'
    const testFormat3 = 'MMM'
    expect(dayjsAR.format(testFormat1)).toEqual(momentAR.format(testFormat1))
    expect(dayjsAR.format(testFormat2)).toEqual(momentAR.format(testFormat2))
    expect(dayjsAR.format(testFormat3)).toEqual(momentAR.format(testFormat3))
  }
})

it('Preparse with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    dayjs.locale('ar')
    const momentAR = moment().locale('ar').add(i, 'day')
    expect(dayjs(momentAR.format()).format()).toEqual(momentAR.format())
  }
})

it('RelativeTime: Time from X gets formatted', () => {
  const T = [
    [44.4, 'second', 'منذ ثانية واحدة']
  ]

  T.forEach((t) => {
    dayjs.locale('ar')
    expect(dayjs().from(dayjs().add(t[0], t[1])))
      .toBe(t[2])
  })
})
