import dayjs from '../../src'
import duration from '../../src/plugin/duration'

dayjs.extend(duration)

it('empty object', () => {
  expect(dayjs().duration()).toEqual({})
})

it('duration object', () => {
  expect(dayjs().duration(90, 'seconde').ISO).toBe('P1M30S')
})
