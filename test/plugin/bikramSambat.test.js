import dayjs from '../../src'
import ne from '../../src/locale/ne'
import bikramSambat from '../../src/plugin/bikramSambat'

dayjs.extend(bikramSambat)

it('default format', () => {
  expect(dayjs('2016-01-18').toBS()).toContain('2072-10-04T')
})

it('invalid date', () => {
  expect(dayjs('1943-01-18').toBS()).toBe('Invalid Date')
})

it('convert to BS', () => {
  expect(dayjs('2019-03-10').toBS('YYYY-MM-DD')).toBe('2075-11-26')
  expect(dayjs('1989-07-01').toBS('YYYY-MM-DD')).toBe('2046-03-17')
  expect(dayjs('2018-07-17').toBS('YYYY-MM-DD')).toBe('2075-04-01')
})

it('format to BS (en)', () => {
  expect(dayjs('2019-03-21').toBS('YY YYYY M MM MMM MMMM D DD')).toBe('75 2075 12 12 Chai Chaitra 7 07')
  expect(dayjs('1951-02-18').toBS('YYYY-MM-DD ddd')).toBe('2007-11-07 Sun')
  expect(dayjs('1993-03-20').toBS('YYYY MMMM MMM DD')).toBe('2049 Chaitra Chai 07')
  expect(dayjs('1990-02-17').toBS('YYYY/MMMM/DD dddd ddd dd')).toBe('2046/Faalgun/06 Saturday Sat Sa')
})

it('format to BS (ne)', () => {
  const opts = { locale: ne }
  expect(dayjs('1993-03-20', opts).toBS('YYYY MMMM MMM DD')).toBe('२०४९ चैत्र चै ०७')
  expect(dayjs('1990-02-17', opts).toBS('YYYY/MMMM/DD dddd ddd dd')).toBe('२०४६/फाल्गुन/०६ शनिबार शनि श')
})
