import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import bigIntSupport from '../../src/plugin/bigIntSupport'

dayjs.extend(bigIntSupport)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

/* global BigInt */

it('Parse BigInt ts and tsms', () => {
  const tsms = 1666310421101
  const tsmsBig = BigInt(tsms)
  const ts = 1666311003
  const tsBig = BigInt(ts)
  const momentTsms = moment(tsms)
  const momentTs = moment.unix(ts)
  expect(dayjs(tsms).valueOf()).toBe(momentTsms.valueOf())
  expect(dayjs(tsms).valueOf()).toBe(dayjs(tsmsBig).valueOf())
  expect(dayjs.unix(ts).valueOf()).toBe(momentTs.valueOf())
  expect(dayjs.unix(tsBig).valueOf()).toBe(dayjs.unix(tsBig).valueOf())
})

