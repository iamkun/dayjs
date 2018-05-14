import MockDate from 'mockdate'
import timeago from 'timeago.js'
import dayjs from '../../src'
import fromNow from '../../src/plugin/fromNow'
import en from '../../src/locale/en'
import es from '../../src/locale/es'

dayjs.extend(fromNow)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('fromNow -> in seconds, days, weeks, months, quarters, years ', () => {
  const dayjsA = dayjs().locale(en)
  const dayjsB = dayjs().add(1000, 'days')
  const dayjsC = dayjs().subtract(1000, 'days')
  const dayjsD = dayjs().add(20, 'days')
  const dayjsE = dayjs().subtract(30, 'seconds')
  const dayjsF = dayjs().subtract(5, 'hours')
  const dayjsG = dayjs().add(1001, 'days')

  expect(dayjsA.fromNow(dayjsB)).toBe(timeago(dayjsA.toDate()).format(dayjsB.toDate()))
  expect(dayjsA.fromNow(dayjsC)).toBe(timeago(dayjsA.toDate()).format(dayjsC.toDate()))
  expect(dayjsA.fromNow(dayjsD)).toBe(timeago(dayjsA.toDate()).format(dayjsD.toDate()))
  expect(dayjsA.fromNow(dayjsE)).toBe(timeago(dayjsA.toDate()).format(dayjsE.toDate()))
  expect(dayjsA.fromNow(dayjsF)).toBe(timeago(dayjsA.toDate()).format(dayjsF.toDate()))
  expect(dayjsB.fromNow(dayjsC)).toBe(timeago(dayjsB.toDate()).format(dayjsC.toDate()))
  expect(dayjsB.fromNow(dayjsB)).toBe(timeago(dayjsB.toDate()).format(dayjsB.toDate()))
  expect(dayjsG.fromNow(dayjsB)).toBe(timeago(dayjsG.toDate()).format(dayjsB.toDate()))
})

it('fromNow -> in seconds, days, weeks, months, quarters, years in Spanish ', () => {
  const dayjsA = dayjs().locale(es)
  const dayjsB = dayjs().locale(es).add(1000, 'days')
  const dayjsC = dayjs().subtract(1000, 'days').locale(es)
  const dayjsD = dayjs().add(20, 'days').locale(es)
  const dayjsE = dayjs().subtract(30, 'seconds').locale(es)
  const dayjsF = dayjs().subtract(5, 'hours').locale(es)
  const dayjsG = dayjs().add(1001, 'days').locale(es)

  expect(dayjsA.fromNow(dayjsB)).toBe('en 2 años')
  expect(dayjsA.fromNow(dayjsC)).toBe('hace 2 años')
  expect(dayjsA.fromNow(dayjsD)).toBe('en 2 semanas')
  expect(dayjsA.fromNow(dayjsE)).toBe('hace 30 segundos')
  expect(dayjsA.fromNow(dayjsF)).toBe('hace 5 horas')
  expect(dayjsB.fromNow(dayjsC)).toBe('hace 5 años')
  expect(dayjsB.fromNow(dayjsB)).toBe('justo ahora')
  expect(dayjsG.fromNow(dayjsB)).toBe('hace 1 día')
})
