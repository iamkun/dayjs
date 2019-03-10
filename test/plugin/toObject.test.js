import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import toObject from '../../src/plugin/toObject'

dayjs.extend(toObject)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('As Object -> toObject', () => {
  expect(dayjs().toObject()).toEqual(moment().toObject())
})
