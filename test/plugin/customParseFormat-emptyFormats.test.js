import moment from 'moment'
import dayjs from '../../src'
import '../../src/locale/zh-cn'
import customParseFormat from '../../src/plugin/customParseFormat'
import utc from '../../src/plugin/utc'

dayjs.extend(customParseFormat)
dayjs.extend(utc)

const input = '2024-02-29'
const options = [
  [],
  [true],
  ['zh-cn'],
  ['zh-cn', true]
]

const modes = [
  ['local', dayjs, moment],
  ['UTC', dayjs.utc, moment.utc]
]

modes.forEach(([mode, parse, reference]) => {
  describe(`empty format arrays in ${mode}`, () => {
    options.forEach((args) => {
      it(`returns an invalid date with options ${JSON.stringify(args)}`, () => {
        const actual = parse(input, [], ...args)
        const expected = reference(input, [], ...args)

        expect(expected.isValid()).toBe(false)
        expect(actual.isValid()).toBe(false)
        expect(actual.valueOf()).toBeNaN()
        expect(actual.year()).toBeNaN()
        expect(actual.month()).toBeNaN()
        expect(actual.date()).toBeNaN()
        expect(actual.format()).toBe('Invalid Date')
        expect(actual.toJSON()).toBeNull()
        expect(actual.clone().isValid()).toBe(false)
      })
    })
  })
})
