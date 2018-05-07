import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'

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

  it('String 20130208', () => {
    global.console.warn = jest.genMockFunction()// moment.js '2018-4-1 1:1:1:22' will throw warn
    const timeArr = [
      '20130108',
      '2018-04-24',
      '2018-05-02 11:12:13',
      '2018-05-02 11:12:13.998',
      '2018-4-1', // not recommend
      '2018-4-1 1:1:1:22' // not recommend
    ]
    timeArr.forEach((t) => {
      expect(dayjs(t).valueOf()).toBe(moment(t).valueOf())
    })
  })

  it('String ISO 8601 date, time and zone', () => {
    const time = '2018-04-04T16:00:00.000Z'
    expect(dayjs(time).valueOf()).toBe(moment(time).valueOf())
  })

  it('String Other, Null and isValid', () => {
    global.console.warn = jest.genMockFunction()// moment.js otherString will throw warn
    expect(dayjs('otherString').toString().toLowerCase()).toBe(moment('otherString').toString().toLowerCase())
    expect(dayjs().isValid()).toBe(true)
    expect(dayjs('otherString').isValid()).toBe(false)
    expect(dayjs(null).toString().toLowerCase()).toBe(moment(null).toString().toLowerCase())
  })
})

it('Unix Timestamp Number (milliseconds) 1523520536000', () => {
  const timestamp = 1523520536000
  expect(dayjs(timestamp).valueOf()).toBe(moment(timestamp).valueOf())
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
