const pluginOrders = ['duration first', 'quarterOfYear first']

pluginOrders.forEach((order) => {
  describe(order, () => {
    let dayjs

    beforeAll(() => {
      jest.resetModules()
      dayjs = jest.requireActual('../../src').default
      const duration = jest.requireActual('../../src/plugin/duration').default
      const quarterOfYear = jest.requireActual('../../src/plugin/quarterOfYear').default
      const plugins = order === 'duration first' ?
        [duration, quarterOfYear] : [quarterOfYear, duration]
      plugins.forEach(plugin => dayjs.extend(plugin))
    })

    it('adds a calendar month at the end of a month', () => {
      const date = dayjs('2025-01-31T12:00:00')
      const result = date.add(dayjs.duration({ months: 1 }))

      expect(result.format('YYYY-MM-DDTHH:mm:ss')).toBe('2025-02-28T12:00:00')
      expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2025-01-31T12:00:00')
    })

    it('subtracts a calendar month at the end of a month', () => {
      const date = dayjs('2025-03-31T12:00:00')
      const result = date.subtract(dayjs.duration({ months: 1 }))

      expect(result.format('YYYY-MM-DDTHH:mm:ss')).toBe('2025-02-28T12:00:00')
    })

    it('preserves calendar years across a leap year', () => {
      const date = dayjs('2024-01-31T12:00:00')
      const result = date.add(dayjs.duration({ years: 1 }))

      expect(result.format('YYYY-MM-DDTHH:mm:ss')).toBe('2025-01-31T12:00:00')
    })

    it('accepts numeric strings for quarter arithmetic', () => {
      const date = dayjs('2025-01-31T12:00:00')

      expect(date.add('1', 'quarter').format('YYYY-MM-DD')).toBe('2025-04-30')
      expect(date.subtract('1', 'quarter').format('YYYY-MM-DD')).toBe('2024-10-31')
    })
  })
})
