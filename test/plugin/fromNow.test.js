import MockDate from 'mockdate'
import timeago from 'timeago.js'
import dayjs from '../../src'
import fromNow from '../../src/plugin/fromNow'

dayjs.extend(fromNow)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('fromNow -> in seconds, days, weeks, months, quarters, years ', () => {
  const dayjsA = dayjs()
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
  expect(dayjsG.fromNow(dayjsC)).toBe(timeago(dayjsG.toDate()).format(dayjsC.toDate()))
})
