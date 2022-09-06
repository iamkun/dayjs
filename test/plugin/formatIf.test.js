import MockDate from 'mockdate'
import dayjs from '../../src/index'
import formatIf from '../../src/plugin/formatIf'

dayjs.extend(formatIf)

const goodDate = '2022-11-25'
const badDate = 'non-parseable date'
const format = 'DD.MM.YYYY'
const goodOutput = '25.11.2022'
const badOutput = 'invalid'
const badOutputNr = 42

beforeEach(() => {
  MockDate.set(goodDate)
})

afterEach(() => {
  MockDate.reset()
})

it('formatIf present on instance', () => {
  expect(dayjs().formatIf).toBeInstanceOf(Function)
})

it('returns the formatted date when isValid()', () => {
  expect(dayjs(new Date()).formatIf(format)).toEqual(goodOutput)
})

it('returns the formatted date when isValid(), ignoring the invalid response', () => {
  expect(dayjs(new Date()).formatIf(format)).toEqual(goodOutput)
})

it('returns the default invalid response', () => {
  const ret = dayjs(badDate).formatIf(format) === ''
  expect(ret).toBeTruthy()
})

it('returns a specific invalid response', () => {
  let ret = dayjs(badDate).formatIf(format, badOutput) === badOutput
  expect(ret).toBeTruthy()

  ret = dayjs(badDate).formatIf(format, badOutputNr) === badOutputNr
  expect(ret).toBeTruthy()
})
