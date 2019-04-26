import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/ru'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsRU = dayjs().locale('ru').add(i, 'day')
    const momentRU = moment().locale('ru').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'MMMM'
    const testFormat3 = 'MMM'
    expect(dayjsRU.format(testFormat1)).toEqual(momentRU.format(testFormat1))
    expect(dayjsRU.format(testFormat2)).toEqual(momentRU.format(testFormat2))
    expect(dayjsRU.format(testFormat3)).toEqual(momentRU.format(testFormat3))
  }
})
