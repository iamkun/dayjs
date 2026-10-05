import moment from 'moment'
import dayjs from '../../src'
import isoWeek from '../../src/plugin/isoWeek'
import utc from '../../src/plugin/utc'
import badMutable from '../../src/plugin/badMutable'

dayjs.extend(isoWeek)
dayjs.extend(utc)
dayjs.extend(badMutable)

const dates = [
  '2019-12-30T12:34:56.789',
  '2021-01-01T12:34:56.789',
  '2021-01-03T12:34:56.789',
  '2021-01-04T12:34:56.789',
  '2021-01-07T12:34:56.789',
  '2021-01-09T12:34:56.789',
  '2022-02-02T12:34:56.789'
]

const modes = [
  ['local', dayjs, moment],
  ['utc', dayjs.utc, moment.utc]
]

modes.forEach(([mode, makeDayjs, makeMoment]) => {
  describe(`isoWeek with badMutable in ${mode} mode`, () => {
    dates.forEach((input) => {
      ['isoWeek', 'isoWeekYear'].forEach((getter) => {
        it(`${getter} preserves ${input}`, () => {
          const value = makeDayjs(input)
          const timestamp = value.valueOf()
          const expected = makeMoment(input)[getter]()

          expect(value[getter]()).toBe(expected)
          expect(value.valueOf()).toBe(timestamp)
          expect(value[getter]()).toBe(expected)
          expect(value.valueOf()).toBe(timestamp)
        })
      })
    });

    [0, 10, 53].forEach((week) => {
      it(`setting ISO week ${week} preserves the weekday and time`, () => {
        const input = '2021-01-04T12:34:56.789'
        const value = makeDayjs(input)
        const result = value.isoWeek(week)

        expect(result).toBe(value)
        expect(value.valueOf()).toBe(makeMoment(input).isoWeek(week).valueOf())
      })
    })
  })
})
