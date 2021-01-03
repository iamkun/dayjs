import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'
import { REGEX_PARSE } from '../src/constant'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Parse', () => {
  it('Now', () => {
    expect(dayjs().valueOf()).toBe(moment().valueOf())
  })

  it('moment-js like formatted dates', () => {
    global.console.warn = jest.genMockFunction()// moment.js '2018-4-1 1:1:1:22' will throw warn
    let d = '20130108'
    expect(dayjs(d).valueOf()).toBe(moment(d).valueOf())
    d = '2018-04-24'
    expect(dayjs(d).valueOf()).toBe(moment(d).valueOf())
    d = '2018-04-24 11:12'
    expect(dayjs(d).format()).toBe(moment(d).format()) // not recommend
    d = '2018-05-02 11:12:13'
    expect(dayjs(d).valueOf()).toBe(moment(d).valueOf())
    d = '2018-05-02 11:12:13.998'
    expect(dayjs(d).valueOf()).toBe(moment(d).valueOf())
    d = '2018-4-1'
    expect(dayjs(d).valueOf()).toBe(moment(d).valueOf()) // not recommend
    d = '2018-4-1 11:12'
    expect(dayjs(d).format()).toBe(moment(d).format()) // not recommend
    d = '2018-4-1 1:1:1:223'
    expect(dayjs(d).valueOf()).toBe(moment(d).valueOf()) // not recommend
    d = '2018-01'
    expect(dayjs(d).valueOf()).toBe(moment(d).valueOf()) // not recommend
    d = '2018'
    expect(dayjs(d).format()).toBe(moment(d).format()) // not recommend
    d = '2018-05-02T11:12:13Z' // should go direct to new Date() rather our regex
    expect(dayjs(d).format()).toBe(moment(d).format()) // not recommend
  })

  it('String ISO 8601 date, time and zone', () => {
    const time = '2018-04-04T16:00:00.000Z'
    expect(dayjs(time).valueOf()).toBe(moment(time).valueOf())
  })

  it('String RFC 2822, time and zone', () => {
    const time = 'Mon, 11 Feb 2019 09:46:50 GMT+1'
    const expected = '2019-02-11T08:46:50.000Z'
    const d = dayjs(time)
    expect(d.toISOString()).toEqual(expected)
    expect(d.valueOf()).toBe(moment(time).valueOf())
  })

  it('String ECMAScript, time and zone', () => {
    // should parse dates formatted in ECMA script format
    // see https://www.ecma-international.org/ecma-262/9.0/index.html#sec-date.prototype.tostring
    const time = 'Mon Feb 11 2019 11:01:37 GMT+0100 (Mitteleuropäische Normalzeit)'
    const expected = '2019-02-11T10:01:37.000Z'
    const d = dayjs(time)
    expect(d.toISOString()).toEqual(expected)
    expect(d.valueOf()).toBe(moment(time).valueOf())
  })

  it('rejects invalid values', () => {
    expect(dayjs({}).isValid()).toBe(false)
    expect(dayjs(() => '2018-01-01').isValid()).toBe(false)
    expect(dayjs(Infinity).isValid()).toBe(false)
    expect(dayjs(NaN).isValid()).toBe(false)
    expect(dayjs([2018, 5, 1, 13, 52, 44]).isValid()).toBe(false) // Arrays with time part
  })

  it('parses Arrays with date part', () => {
    const dateParts = [2018, 5, 1]
    const expected = '2018-05-01T00:00:00.000Z'
    const d = dayjs(dateParts)
    const normalized = d.add(d.utcOffset(), 'minutes') // make test run in every timezone
    expect(normalized.toISOString()).toEqual(expected)
  })

  it('parses unlimited millisecond', () => {
    const date = '2019-03-25T06:41:00.999999999'
    const ds = dayjs(date)
    const ms = moment(date)
    expect(ds.valueOf()).toEqual(ms.valueOf())
    expect(ds.millisecond()).toEqual(ms.millisecond())
  })

  it('String Other, Null and isValid', () => {
    global.console.warn = jest.genMockFunction()// moment.js otherString will throw warn
    expect(dayjs('otherString').toString().toLowerCase()).toBe(moment('otherString').toString().toLowerCase())
    expect(dayjs().isValid()).toBe(true)
    expect(dayjs('').isValid()).toBe(false)
    expect(dayjs('otherString').isValid()).toBe(false)
    expect(dayjs(null).toString().toLowerCase()).toBe(moment(null).toString().toLowerCase())
  })
})

it('Unix Timestamp Number (milliseconds) 1523520536000', () => {
  const timestamp = 1523520536000
  expect(dayjs(timestamp).valueOf()).toBe(moment(timestamp).valueOf())
})

it('Unix Timestamp Number (seconds) 1318781876', () => {
  const timestamp1 = 1318781876
  const timestamp2 = 1318781876.721
  expect(dayjs.unix(timestamp1).valueOf()).toBe(moment.unix(timestamp1).valueOf())
  expect(dayjs.unix(timestamp2).valueOf()).toBe(moment.unix(timestamp2).valueOf())
})

it('String and Number 20180101', () => {
  expect(dayjs(20180101).valueOf()).toBe(moment(20180101).valueOf())
  expect(dayjs('20180101').valueOf()).toBe(moment('20180101').valueOf())
})

it('Number 0', () => {
  expect(dayjs(0).valueOf()).toBe(moment(0).valueOf())
})

it('Clone not affect each other', () => {
  const base = dayjs(20170101)
  const year = base.year()
  const another = base.set('year', year + 1)
  expect(another.unix() - base.unix()).toBe(31536000)
})

it('Clone with same value', () => {
  const base = dayjs()
  const year = base.year()
  const newBase = base.set('year', year + 1)
  const another = newBase.clone()
  expect(newBase.toString()).toBe(another.toString())
})

describe('REGEX_PARSE', () => {
  it('2020/9/30', () => {
    const date = '2020/9/30'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).valueOf()).toBe(moment(date).valueOf())
    expect(d.join('-')).toBe('2020/9/30-2020-9-30----')
  })
  it('2019-03-25T06:41:00.999999999', () => {
    const date = '2019-03-25T06:41:00.999999999'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).valueOf()).toBe(moment(date).valueOf())
    expect(d.join('-')).toBe('2019-03-25T06:41:00.999999999-2019-03-25-06-41-00-999999999')
  })
  it('20210102T012345', () => {
    const date = '20210102T012345'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).valueOf()).toBe(moment(date).valueOf())
    expect(d.join('-')).toBe('20210102T012345-2021-01-02-01-23-45-')
  })
  it('2021-01-02T01:23', () => {
    const date = '2021-01-02T01:23'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).valueOf()).toBe(moment(date).valueOf())
    expect(d.join('-')).toBe('2021-01-02T01:23-2021-01-02-01-23--')
  })
  it('2021-01-02T01:23:45', () => {
    const date = '2021-01-02T01:23:45'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).valueOf()).toBe(moment(date).valueOf())
    expect(d.join('-')).toBe('2021-01-02T01:23:45-2021-01-02-01-23-45-')
  })
  it('2021-01-02T01:23:45-0500 (no regex match)', () => {
    const date = '2021-01-02T01:23:45-0500'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).valueOf()).toBe(moment(date).valueOf())
    expect(d).toBe(null)
  })
  it('2021-01-02T01:23:45Z (no regex match)', () => {
    const date = '2021-01-02T01:23:45Z'
    const d = date.match(REGEX_PARSE)
    expect(dayjs(date).valueOf()).toBe(moment(date).valueOf())
    expect(d).toBe(null)
  })
})
