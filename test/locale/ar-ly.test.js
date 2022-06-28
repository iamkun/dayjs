import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'
import '../../src/locale/ar-ly'

dayjs.extend(relativeTime)
dayjs.extend(preParsePostFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Arabic (Lybia) locale relative time in past and future with suffix', () => {
  const cases = [
    [1, 's', 'بعد ثانية واحدة'],
    [-1, 's', 'منذ ثانية واحدة'],
    [1, 'm', 'بعد دقيقة واحدة'],
    [-1, 'm', 'منذ دقيقة واحدة'],
    [1, 'h', 'بعد ساعة واحدة'],
    [-1, 'h', 'منذ ساعة واحدة'],
    [1, 'd', 'بعد يوم واحد'],
    [-1, 'd', 'منذ يوم واحد'],
    [1, 'M', 'بعد شهر واحد'],
    [-1, 'M', 'منذ شهر واحد'],
    [2, 'd', 'بعد 2 أيام'],
    [-2, 'd', 'منذ 2 أيام'],
    [10, 'd', 'بعد 10 أيام'],
    [-10, 'd', 'منذ 10 أيام'],
    [6, 'm', 'بعد 6 دقائق'],
    [-6, 'm', 'منذ 6 دقائق'],
    [5, 'h', 'بعد 5 ساعات'],
    [-5, 'h', 'منذ 5 ساعات'],
    [3, 'M', 'بعد 3 أشهر'],
    [-3, 'M', 'منذ 3 أشهر'],
    [4, 'y', 'بعد 4 أعوام'],
    [-4, 'y', 'منذ 4 أعوام']
  ]

  const locale = 'ar-ly'
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale(locale).fromNow())
      .toBe(c[2])
  })
})
