import MockDate from 'mockdate'
import '../../src/locale/ja';
import { testFormat, testRelativeTime } from './locale-test-builder';

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with Japanese locale function', () => {
  testFormat('ja');
})

it('formats relative time for Japanese locale', () => {
  testRelativeTime('ja');
})
