import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import '../../src/locale/zh-cn'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Meridiem', () => {
  const dayjsObj = dayjs().locale('zh-cn')
  const momentObj = moment().locale('zh-cn')
  for (let i = 0; i <= 24; i += 1) {
    expect(dayjsObj.add(i, 'hour').format('A'))
      .toEqual(momentObj.clone().add(i, 'hour').format('A'))
  }
})
