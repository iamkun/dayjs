import dayjs from '../../src'

describe('issue 2793 - diff with invalid date should return NaN', () => {
  ['days', 'week', 'month', 'quarter', 'year', 'hour', 'minute', 'second'].forEach((unit) => {
    it(`should return NaN for ${unit}`, () => {
      const currentDate = dayjs()
      const expiresOn = dayjs(null)
      const diffDays = expiresOn.diff(currentDate, unit)
      expect(diffDays).toBeNaN()
    })
  })
})
