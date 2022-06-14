import MockDate from 'mockdate'
import dayjs from '../../src/index'
import diff from '../../src/plugin/diff/index'

dayjs.extend(diff)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('no unit passed', () => {
  test('throws an error', () => {
    expect(() => dayjs().diff()).toThrow(expect.any(Error))
  })
})

describe('unsupported unit', () => {
  test('throws an error', () => {
    expect(() => dayjs().diff('foo', new Date())).toThrow(expect.any(Error))
  })
})

describe('milliseconds', () => {
  test('returns difference for `millisecond` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-01 12:00:01')]

    expect(dayjs(a).diff('millisecond', b)).toEqual(1000)
  })

  test('returns difference for `milliseconds` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-01 12:00:59')]

    expect(dayjs(a).diff('millisecond', b)).toEqual(59000)
  })
})

describe('seconds', () => {
  test('returns difference for `second` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-01 12:00:01')]

    expect(dayjs(a).diff('second', b)).toEqual(1)
  })

  test('returns difference for `seconds` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-01 12:01:59')]

    expect(dayjs(a).diff('seconds', b)).toEqual(119)
  })
})

describe('minutes', () => {
  test('returns difference for `minute` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-01 12:01:00')]

    expect(dayjs(a).diff('minute', b)).toEqual(1)
  })

  test('returns difference for `minutes` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-01 13:59:00')]

    expect(dayjs(a).diff('minutes', b)).toEqual(119)
  })
})

describe('hours', () => {
  test('returns difference for `hour` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-01 13:00:00')]

    expect(dayjs(a).diff('hour', b)).toEqual(1)
  })

  test('returns difference for `hours` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-02 23:00:00')]

    expect(dayjs(a).diff('hours', b)).toEqual(35)
  })
})

describe('days', () => {
  test('returns difference for `day` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-02 12:00:00')]

    expect(dayjs(a).diff('day', b)).toEqual(1)
  })

  test('returns difference for `days` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-07-01 12:00:00')]

    expect(dayjs(a).diff('days', b)).toEqual(30)
  })
})

describe('weeks', () => {
  test('returns difference for `week` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-06-08 12:00:00')]

    expect(dayjs(a).diff('week', b)).toEqual(1)
  })

  test('returns difference for `weeks` unit', () => {
    const [a, b] = [new Date('2020-06-01 12:00:00'), new Date('2020-07-01 12:00:00')]

    expect(dayjs(a).diff('weeks', b)).toEqual(4)
  })
})
