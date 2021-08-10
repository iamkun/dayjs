import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/sr'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Serbian locale relative time in past and future', () => {
  const cases = [
    [1, 's', 'za nekoliko sekundi', 'nekoliko sekundi'],
    [-1, 's', 'pre nekoliko sekundi', 'nekoliko sekundi'],
    [4, 's', 'za nekoliko sekundi', 'nekoliko sekundi'],
    [1, 'm', 'za jedan minut', 'jedan minut'],
    [-1, 'm', 'pre jednog minuta', 'jedan minut'],
    [4, 'm', 'za 4 minuta', '4 minuta'],
    [5, 'm', 'za 5 minuta', '5 minuta'],
    [21, 'm', 'za 21 minut', '21 minut'],
    [1, 'h', 'za jedan sat', 'jedan sat'],
    [-1, 'h', 'pre jednog sata', 'jedan sat'],
    [4, 'h', 'za 4 sata', '4 sata'],
    [5, 'h', 'za 5 sati', '5 sati'],
    [21, 'h', 'za 21 sat', '21 sat'],
    [1, 'd', 'za jedan dan', 'jedan dan'],
    [-1, 'd', 'pre jednog dana', 'jedan dan'],
    [4, 'd', 'za 4 dana', '4 dana'],
    [5, 'd', 'za 5 dana', '5 dana'],
    [21, 'd', 'za 21 dan', '21 dan'],
    [1, 'M', 'za jedan mesec', 'jedan mesec'],
    [-1, 'M', 'pre jednog meseca', 'jedan mesec'],
    [4, 'M', 'za 4 meseca', '4 meseca'],
    [5, 'M', 'za 5 meseci', '5 meseci'],
    [10, 'M', 'za 10 meseci', '10 meseci'],
    [1, 'y', 'za jednu godinu', 'jedna godina'],
    [-1, 'y', 'pre jedne godine', 'jedna godina'],
    [4, 'y', 'za 4 godine', '4 godine'],
    [5, 'y', 'za 5 godina', '5 godina'],
    [21, 'y', 'za 21 godinu', '21 godina']
  ]

  cases.forEach((c) => {
    // With suffix
    expect(dayjs().add(c[0], c[1]).locale('sr').fromNow()).toBe(c[2])
    // Without suffix
    expect(dayjs().add(c[0], c[1]).locale('sr').fromNow(true)).toBe(c[3])
    // TODO: compare to momentjs once logic and grammar are fixed there
  })
})
