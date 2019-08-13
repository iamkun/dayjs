import MockDate from 'mockdate'
import '../../src/locale/ar';
import { testFormat, testRelativeTime } from './locale-test-builder';

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with Arabic locale function', () => {
  testFormat('ar');
})

it('formats relative time for Arabic locale', () => {
  testRelativeTime('ar');
})
