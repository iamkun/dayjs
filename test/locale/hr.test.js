import moment from 'moment'
import dayjs from '../../src'
import '../../src/locale/hr'

it('Format month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsUK = dayjs().locale('hr').add(i, 'day')
    const momentUK = moment().locale('hr').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'dddd, MMMM D YYYY'
    const testFormat3 = 'MMMM'
    const testFormat4 = 'MMM'
    expect(dayjsUK.format(testFormat1)).toEqual(momentUK.format(testFormat1))
    expect(dayjsUK.format(testFormat2)).toEqual(momentUK.format(testFormat2))
    expect(dayjsUK.format(testFormat3)).toEqual(momentUK.format(testFormat3))
    expect(dayjsUK.format(testFormat4)).toEqual(momentUK.format(testFormat4))
  }
})
