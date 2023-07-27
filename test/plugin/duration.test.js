import MockDate from 'mockdate'
import dayjs from '../../src'
import duration from '../../src/plugin/duration'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/fr'
import '../../src/locale/es'

dayjs.extend(relativeTime)
dayjs.extend(duration)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Creating', () => {
  it('no argument', () => {
    expect(dayjs.duration().toISOString()).toBe('P0D')
    expect(dayjs.duration().asMilliseconds()).toBe(0)
  })
  it('milliseconds', () => {
    expect(dayjs.duration(1, 'ms').toISOString()).toBe('PT0.001S')
    expect(dayjs.duration(100).toISOString()).toBe('PT0.1S')
    expect(dayjs.duration(1000).toISOString()).toBe('PT1S')
  })
  it('two argument will bubble up to the next', () => {
    expect(dayjs.duration(59, 'seconds').toISOString()).toBe('PT59S')
    expect(dayjs.duration(60, 'seconds').toISOString()).toBe('PT1M')
    expect(dayjs.duration(13213, 'seconds').toISOString()).toBe('PT3H40M13S')
  })
  it('two argument will bubble up to the next (negative number)', () => {
    expect(dayjs.duration(-59, 'seconds').toISOString()).toBe('-PT59S')
    expect(dayjs.duration(-60, 'seconds').toISOString()).toBe('-PT1M')
    expect(dayjs.duration(-13213, 'seconds').toISOString()).toBe('-PT3H40M13S')
  })
  it('object with float', () => {
    expect(dayjs.duration({
      seconds: 1,
      minutes: 2,
      hours: 3,
      days: 4,
      months: 6,
      years: 7
    }).toISOString()).toBe('P7Y6M4DT3H2M1S')
  })
  it('object with weeks and float', () => {
    expect(dayjs.duration({
      seconds: 1.1,
      minutes: 2,
      hours: 3,
      days: 4,
      weeks: 5,
      months: 6,
      years: 7
    }).toISOString()).toBe('P7Y6M39DT3H2M1.1S')
  })
  it('object with millisecond', () => {
    expect(dayjs.duration({
      ms: 1
    }).toISOString()).toBe('PT0.001S')
  })
  it('object with negative millisecond', () => {
    expect(dayjs.duration({
      ms: -1
    }).toISOString()).toBe('-PT0.001S')
  })
  it('convert to milliseconds', () => {
    expect(+dayjs.duration(100)).toBe(100)
  })
  it('handles rounding to millisecond precision', () => {
    expect(dayjs.duration(2 / 3).toISOString()).toBe('PT0.001S')
  })
  it('should handle round with millisecond precision when negative', () => {
    expect(dayjs.duration(1000.5).toISOString()).toBe('PT1.001S')
    expect(dayjs.duration(-1000.5).toISOString()).toBe('-PT1S')
  })
  it('should handle floating point rounding errors', () => {
    // An example of this is when adding 2 to 0.812 seconds, which is how
    // the seconds component is calculated in .toISOString().
    // > 2 + 0.812
    // 2.8120000000000003
    expect(dayjs.duration(-2812).toISOString()).toBe('-PT2.812S') // was -PT2.8120000000000003S
    expect(dayjs.duration(3121632.27382247).toISOString()).toBe('PT52M1.632S') // was PT52M1.6320000000000001S
    expect(dayjs.duration(7647826.525774224).toISOString()).toBe('PT2H7M27.827S') // was PT2H7M27.826999999999998S
  })
})

describe('Parse ISO string', () => {
  it('Full ISO string', () => {
    expect(dayjs.duration('P7Y6M4DT3H2M1S').toISOString()).toBe('P7Y6M4DT3H2M1S')
  })
  it('Part ISO string', () => {
    expect(dayjs.duration('PT2777H46M40S').toISOString()).toBe('PT2777H46M40S')
  })
  it('Formatting missing components', () => {
    expect(dayjs.duration('PT1H').format('YYYY-MM-DDTHH:mm:ss')).toBe('0000-00-00T01:00:00')
  })
  it('ISO string with week', () => {
    const d = dayjs.duration('P2M3W4D')
    expect(d.toISOString()).toBe('P2M25D')
    expect(d.asDays()).toBe(85.83333333333333) // moment 86, count 2M as 61 days
    expect(d.asWeeks()).toBe(12.261904761904763) // moment 12.285714285714286
    expect(d.asMonths()).toBe(2.8219178082191783) // moment 2.8213721020965523
  })
  it('Invalid ISO string', () => {
    expect(dayjs.duration('Invalid').toISOString()).toBe('P0D')
  })
})

it('Is duration', () => {
  expect(dayjs.isDuration(dayjs.duration())).toBe(true)
  expect(dayjs.isDuration(dayjs.duration(1))).toBe(true)
  expect(dayjs.isDuration(dayjs())).toBe(false)
  expect(dayjs.isDuration({})).toBe(false)
  expect(dayjs.isDuration()).toBe(false)
})

it('toJSON', () => {
  expect(JSON.stringify({
    postDuration: dayjs.duration(5, 'minutes')
  })).toBe('{"postDuration":"PT5M"}')
})

describe('Humanize', () => {
  it('Humaniz', () => {
    expect(dayjs.duration(1, 'minutes').humanize()).toBe('a minute')
    expect(dayjs.duration(2, 'minutes').humanize()).toBe('2 minutes')
    expect(dayjs.duration(24, 'hours').humanize()).toBe('a day')
    expect(dayjs.duration(1, 'minutes').humanize(true)).toBe('in a minute')
    expect(dayjs.duration(-1, 'minutes').humanize(true)).toBe('a minute ago')
  })

  it('Locale', () => {
    expect(dayjs.duration(1, 'minutes').humanize(true)).toBe('in a minute')
    expect(dayjs.duration(1, 'minutes').locale('fr').humanize(true)).toBe('dans une minute')
    expect(dayjs.duration(1, 'minutes').locale('es').humanize(true)).toBe('en un minuto')
  })
  it('Global Locale', () => {
    dayjs.locale('en')
    expect(dayjs.duration(1, 'minutes').humanize(true)).toBe('in a minute')
    dayjs.locale('fr')
    expect(dayjs.duration(1, 'minutes').humanize(true)).toBe('dans une minute')
    dayjs.locale('es')
    expect(dayjs.duration(1, 'minutes').humanize(true)).toBe('en un minuto')
    dayjs.locale('en')
  })
})

describe('Clone', () => {
  it('Locale clone', () => {
    const d = dayjs.duration(1, 'minutes').locale('fr')
    const r = 'dans une minute'
    expect(d.humanize(true)).toBe(r)
    expect(d.clone().humanize(true)).toBe(r)
  })
})

describe('Milliseconds', () => {
  expect(dayjs.duration(500).milliseconds()).toBe(500)
  expect(dayjs.duration(1500).milliseconds()).toBe(500)
  expect(dayjs.duration(15000).milliseconds()).toBe(0)
  expect(dayjs.duration(500).asMilliseconds()).toBe(500)
  expect(dayjs.duration(1500).asMilliseconds()).toBe(1500)
  expect(dayjs.duration(15000).asMilliseconds()).toBe(15000)
})

describe('Milliseconds', () => {
  describe('Positive number', () => {
    expect(dayjs.duration(500).milliseconds()).toBe(500)
    expect(dayjs.duration(1500).milliseconds()).toBe(500)
    expect(dayjs.duration(15000).milliseconds()).toBe(0)
    expect(dayjs.duration(500).asMilliseconds()).toBe(500)
    expect(dayjs.duration(1500).asMilliseconds()).toBe(1500)
    expect(dayjs.duration(15000).asMilliseconds()).toBe(15000)
  })

  describe('Negative number', () => {
    expect(dayjs.duration(-500).milliseconds()).toBe(-500)
    expect(dayjs.duration(-1500).milliseconds()).toBe(-500)
    expect(dayjs.duration(-15000).milliseconds()).toBe(0)
    expect(dayjs.duration(-500).asMilliseconds()).toBe(-500)
    expect(dayjs.duration(-1500).asMilliseconds()).toBe(-1500)
    expect(dayjs.duration(-15000).asMilliseconds()).toBe(-15000)
  })
})

describe('Add', () => {
  const a = dayjs.duration(1, 'days')
  const b = dayjs.duration(2, 'days')
  expect(a.add(b).days()).toBe(3)
  expect(a.add(1, 'days').days()).toBe(2)
  expect(a.add({ days: 5 }).days()).toBe(6)
})

describe('Add to a dayjs()', () => {
  const a = dayjs()
  const b = dayjs.duration({ hours: 7, minutes: 10 })
  expect(a.add(b)).toEqual(a.add(7, 'hours').add(10, 'minutes'))
})

test('Add duration', () => {
  const a = dayjs('2020-10-01')
  const days = dayjs.duration(2, 'days')
  expect(a.add(days).format('YYYY-MM-DD')).toBe('2020-10-03')

  const b = dayjs('2023-02-01 00:00:00')
  const p = dayjs.duration('P1Y1M1DT1H1M1S')
  expect(b.add(p).format('YYYY-MM-DD HH:mm:ss')).toBe('2024-03-02 01:01:01')
})

describe('Subtract', () => {
  const a = dayjs.duration(3, 'days')
  const b = dayjs.duration(2, 'days')
  expect(a.subtract(b).days()).toBe(1)
})

test('Subtract duration', () => {
  const a = dayjs('2020-10-20')
  const days = dayjs.duration(2, 'days')
  expect(a.subtract(days).format('YYYY-MM-DD')).toBe('2020-10-18')

  const b = dayjs('2023-03-02 02:02:02')
  const p = dayjs.duration('P1Y1M1DT1H1M1S')
  expect(b.subtract(p).format('YYYY-MM-DD HH:mm:ss')).toBe('2022-02-01 01:01:01')
})

describe('Seconds', () => {
  expect(dayjs.duration(500).seconds()).toBe(0)
  expect(dayjs.duration(1500).seconds()).toBe(1)
  expect(dayjs.duration(15000).seconds()).toBe(15)
  expect(dayjs.duration(61000).seconds()).toBe(1) // 1 minute 1 second
  expect(dayjs.duration(500).asSeconds()).toBe(0.5)
  expect(dayjs.duration(1500).asSeconds()).toBe(1.5)
  expect(dayjs.duration(15000).asSeconds()).toBe(15)
})

describe('Minutes', () => {
  expect(dayjs.duration(100000).minutes()).toBe(1)
  expect(dayjs.duration(61000).minutes()).toBe(1) // 1 minute 1 second
  expect(dayjs.duration(100000).asMinutes().toFixed(2)).toBe('1.67')
})

describe('Hours', () => {
  expect(dayjs.duration(10000000).hours()).toBe(2)
  expect(dayjs.duration(10000000).asHours().toFixed(2)).toBe('2.78')
})

describe('Days', () => {
  it('positive number', () => {
    expect(dayjs.duration(100000000).days()).toBe(1)
    expect(dayjs.duration(100000000).asDays().toFixed(2)).toBe('1.16')
  })

  it('negative number', () => {
    expect(dayjs.duration(-1).days()).toBe(0)
    expect(dayjs.duration(-86399999).asDays()).toBeCloseTo(-0.999999, 4)
  })
})

describe('Weeks', () => {
  expect(dayjs.duration(1000000000).weeks()).toBe(1)
  expect(dayjs.duration(1000000000).asWeeks().toFixed(2)).toBe('1.65')
})

describe('Month', () => {
  expect(dayjs.duration(10000000000).months()).toBe(3)
  expect(dayjs.duration({ months: 3 }).asMonths()).toBe(3)
})

describe('Years', () => {
  expect(dayjs.duration(100000000000).years()).toBe(3)
  expect(dayjs.duration(100000000000).asYears().toFixed(2)).toBe('3.17')
})

describe('prettyUnit', () => {
  const d = dayjs.duration(2, 's')
  expect(d.toISOString()).toBe('PT2S')
  expect(d.as('seconds')).toBe(2)
  expect(d.get('s')).toBe(2)
  expect(dayjs.duration({
    M: 12,
    m: 12
  }).toISOString()).toBe('P12MT12M')
})

describe('Format', () => {
  test('no formatStr', () => {
    const d = dayjs.duration(15, 'seconds')
      .add(13, 'hours')
      .add(35, 'minutes')
      .add(16, 'days')
      .add(10, 'months')
      .add(22, 'years')
    expect(d.format()).toBe('0022-10-16T13:35:15')
  })

  test('with formatStr for all tokens', () => {
    const d = dayjs.duration(1, 'seconds')
      .add(8, 'hours')
      .add(5, 'minutes')
      .add(6, 'days')
      .add(9, 'months')
      .add(2, 'years')
      .add(10, 'milliseconds')
    expect(d.format('Y/YY.YYYYTESTM:MM:D:DD:H:HH:m:mm:s:ss:SSS'))
      .toBe('2/02.0002TEST9:09:6:06:8:08:5:05:1:01:010')
  })
})
