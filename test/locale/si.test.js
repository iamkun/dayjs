import moment from 'moment'
import dayjs from '../../src'
import '../../src/locale/si'

it('Meridiem', () => {
  for (let i = 0; i < 24; i += 1) {
    dayjs.locale('si')
    moment.locale('si')
    const time = `2020-01-01 ${String(i).padStart(2, '0')}:00:00`
    expect(dayjs(time).format('A')).toBe(moment(time).format('A'))
    expect(dayjs(time).format('a')).toBe(moment(time).format('a'))
  }
})
