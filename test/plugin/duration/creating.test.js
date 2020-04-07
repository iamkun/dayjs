import MockDate from 'mockdate'
import dayjs from '../../../src'
import duration from '../../../src/plugin/duration'

dayjs.extend(duration)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Creating from two argument', () => {
  it('Creating from two argument', () => {
    expect(dayjs.duration(13213, 'seconds').toISOString()).toBe('PT3H40M13S')
  })
})
