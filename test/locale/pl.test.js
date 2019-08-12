import MockDate from 'mockdate'
import '../../src/locale/pl'
import { testFormat, testRelativeTime } from './locale-test-builder';

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Formats Month with locale function', () => {
  testFormat('pl');
})

it('formats relative time for Polish locale', () => {
  testRelativeTime('pl');
})
