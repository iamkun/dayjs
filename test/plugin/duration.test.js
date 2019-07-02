import dayjs from '../../src'
import duration from '../../src/plugin/duration'

dayjs.extend(duration)

it('should return an empty object', () => {
  expect(dayjs().duration()).toEqual({})
})

it('should return an empty object', () => {
  expect(dayjs().duration(10, 'badunit')).toEqual({})
})

it('should return the duration in ISO 8601 format', () => {
  expect(dayjs().duration(90, 'second').ISO).toBe('P1M30S')
})
