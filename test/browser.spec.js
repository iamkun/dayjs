describe('Day.js init', function () {
  it('window.dayjs ', function () {
    if (!window.dayjs) throw new Error('No window.dayjs')
  })
})

describe('dayjs', function () {
  it('dayjs init', function () {
    expect(dayjs(1523520536000).valueOf()).toBe(1523520536000);
  })
})