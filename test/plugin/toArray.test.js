import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import toArray from '../../src/plugin/toArray'

dayjs.extend(toArray)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('As Array -> toArray', () => {
  expect(dayjs().toArray()).toEqual(moment().toArray())
})
