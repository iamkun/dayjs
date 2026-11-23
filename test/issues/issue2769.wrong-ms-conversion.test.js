import MockDate from 'mockdate'
import dayjs from '../../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('issue 2769 - wrong ms conversion', () => {
  it('should correctly convert date string without timezone', () => {
    const ds1 = '2024-11-18T02:04:48'
    expect(dayjs(ds1).valueOf()).toEqual(new Date(ds1).valueOf())
    const ds2 = '2024-11-18T02:04:48.3'
    expect(dayjs(ds2).valueOf()).toEqual(new Date(ds2).valueOf())
    const ds3 = '2024-11-18T02:04:48.19'
    expect(dayjs(ds3).valueOf()).toEqual(new Date(ds3).valueOf())
    const ds4 = '2024-11-18T02:04:48.195'
    expect(dayjs(ds4).valueOf()).toEqual(new Date(ds4).valueOf())
  })

  it('should correctly convert date string with timezone', () => {
    const ds1 = '2024-11-18T02:04:48Z'
    expect(dayjs(ds1).valueOf()).toEqual(new Date(ds1).valueOf())
    const ds2 = '2024-11-18T02:04:48.3Z'
    expect(dayjs(ds2).valueOf()).toEqual(new Date(ds2).valueOf())
    const ds3 = '2024-11-18T02:04:48.19Z'
    expect(dayjs(ds3).valueOf()).toEqual(new Date(ds3).valueOf())
    const ds4 = '2024-11-18T02:04:48.195Z'
    expect(dayjs(ds4).valueOf()).toEqual(new Date(ds4).valueOf())
  })
})
