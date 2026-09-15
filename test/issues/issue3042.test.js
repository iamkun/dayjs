import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import duration from '../../src/plugin/duration'

dayjs.extend(utc)
dayjs.extend(duration)

const BASE = dayjs.utc('2018-06-27T00:00:00.000Z')

const subtracted = input => BASE.subtract(input).toISOString()
const added = input => BASE.add(input).toISOString()

describe('issue 3042 - subtract duration object with weeks and milliseconds', () => {
  it('subtracts milliseconds duration objects', () => {
    expect(subtracted(dayjs.duration({ milliseconds: 1000 })))
      .toBe('2018-06-26T23:59:59.000Z')
  })

  it('subtracts weeks duration objects', () => {
    expect(subtracted(dayjs.duration({ weeks: 2 })))
      .toBe('2018-06-13T00:00:00.000Z')
  })

  it('subtracts mixed week and day duration objects', () => {
    expect(subtracted(dayjs.duration({ weeks: 1, days: 3 })))
      .toBe('2018-06-17T00:00:00.000Z')
  })

  it('adds milliseconds duration objects', () => {
    expect(added(dayjs.duration({ milliseconds: 1000 })))
      .toBe('2018-06-27T00:00:01.000Z')
  })

  it('adds weeks duration objects', () => {
    expect(added(dayjs.duration({ weeks: 2 })))
      .toBe('2018-07-11T00:00:00.000Z')
  })
})
