import { expect, it } from 'vitest'
import { Dayjs, dayjs, unix } from '../src'

it('supports instanceof dayjs', () => {
  expect(dayjs() instanceof Dayjs).toBeTruthy()
})

it('does not break isDayjs', () => {
  expect(dayjs.isDayjs(dayjs())).toBeTruthy()
})

it('should parse from unix timestamp', () => {
  expect(unix(86400).valueOf()).toBe(86400000)
})
