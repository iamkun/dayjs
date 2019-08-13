import MockDate from 'mockdate'
import '../../src/locale/it'
import { testFormat, testRelativeTime } from './locale-test-builder'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with Italian locale function', () => {
  testFormat('it')
})

it('formats relative time for Italian locale', () => {
  testRelativeTime('it')
})
