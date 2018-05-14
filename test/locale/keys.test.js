/* eslint-disable camelcase */
import es from '../../src/locale/es'
import zh_cn from '../../src/locale/zh-cn'

jest.mock('dayjs')

const L = [es, zh_cn]

it('Locale keys', () => {
  L.forEach((l) => {
    const {
      name, ordinal, weekdays, months
    } = l
    expect(name).toEqual(expect.any(String))
    expect(weekdays).toEqual(expect.any(Array))
    expect(months).toEqual(expect.any(Array))
    // function pass date return string or number or null
    expect(ordinal(1)).toEqual(expect.anything())
  })
})
