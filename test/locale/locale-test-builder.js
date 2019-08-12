import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'

export function testFormat(locale) {
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
  }
}

export function testRelativeTime(locale) {
  dayjs.extend(relativeTime);
  for (let i = 1; i <= 30; i++) {
    const dayjsInstance = () => dayjs().locale(locale)
    const momentInstance = () => moment().locale(locale)

    expect(
      dayjsInstance()
        .subtract(i, 'days')
        .fromNow()
    ).toEqual(
      momentInstance()
        .subtract(i, 'days')
        .fromNow()
    )
    expect(
      dayjsInstance()
        .subtract(i, 'minutes')
        .fromNow()
    ).toEqual(
      momentInstance()
        .subtract(i, 'minutes')
        .fromNow()
    )

    expect(
      dayjsInstance()
        .add(i, 'days')
        .fromNow()
    ).toEqual(
      momentInstance()
        .add(i, 'days')
        .fromNow()
    )
    expect(
      dayjsInstance()
        .add(i, 'minutes')
        .fromNow()
    ).toEqual(
      momentInstance()
        .add(i, 'minutes')
        .fromNow()
    )
  }
}