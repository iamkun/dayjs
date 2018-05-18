import dayjs from '../../../src'
import utcPlugin from '../../../src/plugin/utc'

dayjs.extend(utcPlugin) // only one API

test('setter / getter blackbox', () => {
  const m = dayjs('2010-1-1')

  expect(m.clone().utcOffset(0).utcOffset()).toBe(0)

  expect(m.clone().utcOffset(1).utcOffset()).toBe(60)
  expect(m.clone().utcOffset(60).utcOffset()).toBe(60)
  expect(m.clone().utcOffset('+01:00').utcOffset()).toBe(60)
  expect(m.clone().utcOffset('+0100').utcOffset()).toBe(60)

  expect(m.clone().utcOffset(-1).utcOffset()).toBe(-60)
  expect(m.clone().utcOffset(-60).utcOffset()).toBe(-60)
  expect(m.clone().utcOffset('-01:00').utcOffset()).toBe(-60)
  expect(m.clone().utcOffset('-0100').utcOffset()).toBe(-60)

  expect(m.clone().utcOffset(1.5).utcOffset()).toBe(90)
  expect(m.clone().utcOffset(90).utcOffset()).toBe(90)
  expect(m.clone().utcOffset('+01:30').utcOffset()).toBe(90)
  expect(m.clone().utcOffset('+0130').utcOffset()).toBe(90)

  expect(m.clone().utcOffset(-1.5).utcOffset()).toBe(-90)
  expect(m.clone().utcOffset(-90).utcOffset()).toBe(-90)
  expect(m.clone().utcOffset('-01:30').utcOffset()).toBe(-90)
  expect(m.clone().utcOffset('-0130').utcOffset()).toBe(-90)
  expect(m.clone().utcOffset('+00:10').utcOffset()).toBe(10)
  expect(m.clone().utcOffset('-00:10').utcOffset()).toBe(-10)
  expect(m.clone().utcOffset('+0010').utcOffset()).toBe(10)
  expect(m.clone().utcOffset('-0010').utcOffset()).toBe(-10)
})

test('utcOffset shorthand hours -> minutes', () => {
  for (let i = -15; i <= 15; i += 1) {
    expect(dayjs().utcOffset(i).utcOffset()).toBe(i * 60)
  }
  expect(dayjs().utcOffset(-16).utcOffset()).toBe(-16)
  expect(dayjs().utcOffset(16).utcOffset()).toBe(16)
})

test('isLocal, isUTC', () => {
  expect(dayjs().isLocal()).toBe(true)
  expect(!dayjs.utc().isLocal()).toBe(true)
  expect(dayjs.utc().local().isLocal()).toBe(true)
  expect(!dayjs().utcOffset(5).isLocal()).toBe(true)
  expect(dayjs().utcOffset(5).local().isLocal()).toBe(true)

  expect(dayjs.utc().isUTC()).toBe(true)
  expect(dayjs().utcOffset(0).isUTC()).toBe(true)
  expect(!dayjs().utcOffset(1).isUTC()).toBe(true)
})

test('isUTC', () => {
  expect(dayjs.utc().isUTC()).toBe(true)
  expect(dayjs().utcOffset(0).isUTC()).toBe(true)
  expect(!dayjs().utcOffset(1).isUTC()).toBe(true)
})

test('change hours when changing the utc offset', () => {
  const m = dayjs.utc('2000-1-1 6:00')
  expect(m.hour()).toBe(6)

  // sanity check
  m.utcOffset(0)
  expect(m.hour()).toBe(6)

  m.utcOffset(-60)
  expect(m.hour()).toBe(5)

  m.utcOffset(60)
  expect(m.hour()).toBe(7)
})

test('change minutes when changing the utc offset', () => {
  const m = dayjs.utc('2000-1-1 6:31')

  m.utcOffset(0)
  expect(m.format('HH:mm')).toBe('06:31')

  m.utcOffset(-30)
  expect(m.format('HH:mm')).toBe('06:01')

  m.utcOffset(30)
  expect(m.format('HH:mm')).toBe('07:01')

  m.utcOffset(-1380)
  expect(m.format('HH:mm')).toBe('07:31')

  m.utcOffset(NaN)
  expect(m.format('HH:mm')).toBe('07:31')

  m.utcOffset(null)
  expect(m.format('HH:mm')).toBe('07:31')
})

test('distance from the unix epoch', () => {
  const zoneA = dayjs()
  const zoneB = dayjs(zoneA)
  const zoneC = dayjs(zoneA)
  const zoneD = dayjs(zoneA)
  const zoneE = dayjs(zoneA)

  zoneB.utc()
  expect(+zoneA).toBe(+zoneB)

  zoneC.utcOffset(60)
  expect(+zoneA).toBe(+zoneC)

  zoneD.utcOffset(-480)
  expect(+zoneA).toBe(+zoneD)

  zoneE.utcOffset(-1000)
  expect(+zoneA).toBe(+zoneE)
})

// ////////////////
test('getters and setters', () => {
  const a = dayjs('2011-6-20')

  expect(a.clone().utcOffset(-120).set('year', 2012).year()).toBe(2012)
  expect(a.clone().utcOffset(-120).set('month', 1).month()).toBe(1)
  expect(a.clone().utcOffset(-120).set('date', 2).date()).toBe(2)
  expect(a.clone().utcOffset(-120).set('hour', 1).hour()).toBe(1)
  expect(a.clone().utcOffset(-120).set('minute', 1).minute()).toBe(1)
})

test('getters', () => {
  const a = dayjs.utc('2012-1-1 0:0:0')

  expect(a.clone().utcOffset(-120).year()).toBe(2011)
  expect(a.clone().utcOffset(-120).month()).toBe(11)
  expect(a.clone().utcOffset(-120).date()).toBe(31)
  expect(a.clone().utcOffset(-120).hour()).toBe(22)
  expect(a.clone().utcOffset(-120).minute()).toBe(0)

  expect(a.clone().utcOffset(120).year()).toBe(2012)
  expect(a.clone().utcOffset(120).month()).toBe(0)
  expect(a.clone().utcOffset(120).date()).toBe(1)
  expect(a.clone().utcOffset(120).hour()).toBe(2)
  expect(a.clone().utcOffset(120).minute()).toBe(0)

  expect(a.clone().utcOffset(90).year()).toBe(2012)
  expect(a.clone().utcOffset(90).month()).toBe(0)
  expect(a.clone().utcOffset(90).date()).toBe(1)
  expect(a.clone().utcOffset(90).hour()).toBe(1)
  expect(a.clone().utcOffset(90).minute()).toBe(30)
})

test('diff', () => {
  const zoneA = dayjs()
  const zoneB = dayjs(zoneA).utcOffset(-720)
  const zoneC = dayjs(zoneA).utcOffset(-360)
  const zoneD = dayjs(zoneA).utcOffset(690)
  const other = dayjs(zoneA).add(35, 'milliseconds')

  expect(zoneA.diff(other, 'minute', true)).toBe(zoneB.diff(other, 'minute', true))
  expect(zoneA.diff(other, 'minute', true)).toBe(zoneC.diff(other, 'minute', true))
  expect(zoneA.diff(other, 'minute', true)).toBe(zoneD.diff(other, 'minute', true))

  expect(zoneA.diff(other, 'hour', true)).toBe(zoneB.diff(other, 'hour', true))
  expect(zoneA.diff(other, 'hour', true)).toBe(zoneC.diff(other, 'hour', true))
  expect(zoneA.diff(other, 'hour', true)).toBe(zoneD.diff(other, 'hour', true))
})

test('unix offset and timestamp', () => {
  const zoneA = dayjs()
  const zoneB = dayjs(zoneA).utcOffset(-720)
  const zoneC = dayjs(zoneA).utcOffset(-360)
  const zoneD = dayjs(zoneA).utcOffset(690)

  expect(zoneA.unix()).toBe(zoneB.unix())
  expect(zoneA.unix()).toBe(zoneC.unix())
  expect(zoneA.unix()).toBe(zoneD.unix())

  expect(+zoneA).toBe(+zoneB)
  expect(+zoneA).toBe(+zoneC)
  expect(+zoneA).toBe(+zoneD)
})

test('cloning', () => {
  expect(dayjs().utcOffset(-120).clone().utcOffset()).toBe(-120)
  expect(dayjs().utcOffset(120).clone().utcOffset()).toBe(120)
  expect(dayjs(dayjs().utcOffset(-120)).utcOffset()).toBe(-120)
  expect(dayjs(dayjs().utcOffset(120)).utcOffset()).toBe(120)
})

test('start of / end of', () => {
  const a = dayjs.utc('2010-2-2 0:0:0').utcOffset(-450)

  expect(a.clone().startOf('day').hour()).toBe(0)
  expect(a.clone().startOf('day').minute()).toBe(0)
  expect(a.clone().startOf('hour').minute()).toBe(0)

  expect(a.clone().endOf('day').hour()).toBe(23)
  expect(a.clone().endOf('day').minute()).toBe(59)
  expect(a.clone().endOf('hour').minute()).toBe(59)
})

test('reset offset with moment#utc', () => {
  const a = dayjs.utc('2012-1-1').utcOffset(-480)

  expect(a.clone().hour()).toBe(16)
  expect(a.clone().utc().hour()).toBe(0)
})

test('reset offset with moment#local', () => {
  const a = dayjs('2012-1-1').utcOffset(-480)

  expect(a.clone().local().hour()).toBe(0)
})

test('toDate', () => {
  const zoneA = new Date()
  const zoneB = dayjs(zoneA).utcOffset(-720).toDate()
  const zoneC = dayjs(zoneA).utcOffset(-360).toDate()
  const zoneD = dayjs(zoneA).utcOffset(690).toDate()

  expect(+zoneA).toBe(+zoneB)
  expect(+zoneA).toBe(+zoneC)
  expect(+zoneA).toBe(+zoneD)
})

test('same / before / after', () => {
  let zoneA = dayjs().utc()
  const zoneB = dayjs(zoneA).utcOffset(-120)
  const zoneC = dayjs(zoneA).utcOffset(120)

  expect(zoneA.isSame(zoneB)).toBe(true)
  expect(zoneA.isSame(zoneC)).toBe(true)

  expect(zoneA.isSame(zoneB, 'hour')).toBe(true)
  expect(zoneA.isSame(zoneC, 'hour')).toBe(true)

  zoneA = zoneA.add(1)

  expect(zoneA.isAfter(zoneB)).toBe(true)
  expect(zoneA.isAfter(zoneC)).toBe(true)

  expect(zoneA.isAfter(zoneB, 'hour')).toBe(true)
  expect(zoneA.isAfter(zoneC, 'hour')).toBe(true)

  zoneA = zoneA.subtract(2)

  expect(zoneA.isBefore(zoneB)).toBe(true)
  expect(zoneA.isBefore(zoneC)).toBe(true)

  expect(zoneA.isBefore(zoneB, 'hour')).toBe(true)
  expect(zoneA.isBefore(zoneC, 'hour')).toBe(true)
})

test('timezone format', () => {
  expect(dayjs().utcOffset(60).format('ZZ')).toBe('+0100')
  expect(dayjs().utcOffset(90).format('ZZ')).toBe('+0130')
  expect(dayjs().utcOffset(120).format('ZZ')).toBe('+0200')

  expect(dayjs().utcOffset(-60).format('ZZ')).toBe('-0100')
  expect(dayjs().utcOffset(-90).format('ZZ')).toBe('-0130')
  expect(dayjs().utcOffset(-120).format('ZZ')).toBe('-0200')
})
