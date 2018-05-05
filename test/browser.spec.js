describe('Day.js init', () => {
  it('window.dayjs ', () => {
    if (!window.dayjs) throw new Error('No window.dayjs')
  })
})

describe('dayjs', () => {
  it('dayjs init', () => {
    expect(dayjs(1523520536000).valueOf()).toBe(1523520536000)
  })
})
