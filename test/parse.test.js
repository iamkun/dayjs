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
    expect(dayjs().unix()).toBe(moment().unix())
  })

  it('String 20130208', () => {
    const timeArr = ['20130108', '2018-04-24']
    timeArr.forEach((t) => {
      expect(dayjs(t).unix()).toBe(moment(t).unix())
    })
  })

  it('String ISO 8601 date, time and zone', () => {
    const time = '2018-04-04T16:00:00.000Z'
    expect(dayjs(time).unix()).toBe(moment(time).unix())
  })

  it('String Other and isValid', () => {
    global.console.warn = jest.genMockFunction()// moment.js otherString will throw warn
    expect(dayjs('otherString').toString().toLowerCase()).toBe(moment('otherString').toString().toLowerCase())
    expect(dayjs().isValid()).toBe(true)
    expect(dayjs('otherString').isValid()).toBe(false)
  })
})

it('Unix Timestamp Number (milliseconds) 1523520536000', () => {
  const timestamp = 1523520536000
  expect(dayjs(timestamp).unix()).toBe(moment(timestamp).unix())
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
