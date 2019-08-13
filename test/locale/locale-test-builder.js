import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'

const assertByUnit = (i, unit, locale) => {
  const dayjsInstance = () => dayjs().locale(locale)
  const momentInstance = () => moment().locale(locale)

  expect(dayjsInstance().subtract(i, unit).fromNow())
    .toEqual(momentInstance().subtract(i, unit).fromNow())

  expect(dayjsInstance().add(i, unit).fromNow())
    .toEqual(momentInstance().add(i, unit).fromNow())
}

export const testFormat = (locale) => {
  for (let i = 1; i <= 7; i += 1) {
    const dayjsInstance = dayjs()
      .locale(locale)
      .add(i, 'day')
    const momentInstance = moment()
      .locale(locale)
      .add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'MMMM'
    const testFormat3 = 'MMM'
    expect(dayjsInstance.format(testFormat1)).toEqual(momentInstance.format(testFormat1))
    expect(dayjsInstance.format(testFormat2)).toEqual(momentInstance.format(testFormat2))
    expect(dayjsInstance.format(testFormat3)).toEqual(momentInstance.format(testFormat3))
    expect(dayjs('2019-07-11').locale(locale).format('MMMM D'))
      .toEqual(moment('2019-07-11').locale(locale).format('MMMM D'))
  }
}

export const testRelativeTime = (locale) => {
  dayjs.extend(relativeTime);

  for (let i = 1; i <= 32; i += 1) {
    assertByUnit(i, 'year', locale);
    assertByUnit(i, 'month', locale);
    assertByUnit(i, 'hour', locale);
    assertByUnit(i, 'minute', locale);
  }
}
