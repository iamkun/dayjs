import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'
import weekOfYear from '../../src/plugin/weekOfYear'

import '../../src/locale/zh.js'

dayjs.extend(advancedFormat).extend(weekOfYear)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const dayjsObj = dayjs().locale('zh')

test('Meridiem', () => {
  const momentObj = moment().locale('zh-cn')
  for (let i = 0; i <= 24; i += 1) {
    // prettier conflicts with eslint, so
    // prettier-ignore
    expect(dayjsObj.add(i, 'hour').format('A'))
      .toEqual(momentObj.clone().add(i, 'hour').format('A'))
  }
})

test('ordinal', () => {
  expect(dayjsObj.format('wo')).toEqual(`第${dayjsObj.format('w')}周`)
})
