/* eslint-disable prefer-arrow-callback,func-names */
// Please do NOT modify or change this file
// Checkout our unit test files in test/*.test.js
describe('Day.js init', function () {
  it('window.dayjs ', function () {
    if (!window.dayjs) throw new Error('No window.dayjs')
  })
})

describe('dayjs', function () {
  it('dayjs init', function () {
    expect(dayjs(1523520536000).valueOf()).toBe(1523520536000)
  })
})
