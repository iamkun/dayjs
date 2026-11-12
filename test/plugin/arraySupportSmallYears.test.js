import moment from 'moment'
import dayjs from '../../src'
import arraySupport from '../../src/plugin/arraySupport'
import utc from '../../src/plugin/utc'

dayjs.extend(utc)
dayjs.extend(arraySupport)

const inputs = [
  [0], [1], [4], [68], [99],
  [0, 1, 29, 12, 34, 56, 789],
  [4, 1, 29], [99, 1, 28], [100, 1, 28], [2026, 1, 28]
]

inputs.forEach((input) => {
  it(`preserves array year locally: ${input}`, () => {
    const original = input.slice()
    expect(dayjs(input).valueOf()).toBe(moment(input).valueOf())
    expect(input).toEqual(original)
  })
  it(`preserves array year in UTC: ${input}`, () => {
    const original = input.slice()
    expect(dayjs.utc(input).valueOf()).toBe(moment.utc(input).valueOf())
    expect(dayjs.utc(input).isUTC()).toBe(true)
    expect(input).toEqual(original)
  })
})
