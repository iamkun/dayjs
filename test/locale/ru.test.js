import MockDate from 'mockdate'
import '../../src/locale/ru'
import { testFormat, testRelativeTime } from './locale-test-builder';

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Formats Month with Russian locale function', () => {
  testFormat('ru');
})

it('formats relative time for Russian locale', () => {
  testRelativeTime('ru');
})
