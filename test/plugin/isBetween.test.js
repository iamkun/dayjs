import MockDate from 'mockdate'
import dayjs from '../../src'
import isBetween from '../../src/plugin/isBetween'

dayjs.extend(isBetween)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('is between', () => {
  expect(dayjs('2018-01-01').isBetween(dayjs('2017-12-31'), dayjs('2018-01-02'))).toBeTruthy()
  expect(dayjs('2018-01-03 00:01').isBetween(dayjs('2018-01-03 00:00'), dayjs('2018-01-03 00:02'))).toBeTruthy()
  expect(dayjs('2018-01-03').isBetween(dayjs('2017-12-31'), dayjs('2018-01-02'))).toBeFalsy()
})

it('if isBetween receive non dayjs-like object – throws error', (done) => {
  try {
    dayjs('2018-01-01').isBetween(new Date(), dayjs('2017-12-31'))
  } catch (err) {
    done()
  }
})
