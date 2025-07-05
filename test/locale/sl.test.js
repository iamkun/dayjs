import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/sl'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Slovenian locale relative time in past and future', () => {
  const cases = [
    [1, 's', 'čez nekaj sekund', 'nekaj sekund'],
    [-1, 's', 'pred nekaj sekundami', 'nekaj sekund'],
    [1, 'm', 'čez eno minuto', 'ena minuta'],
    [-1, 'm', 'pred eno minuto', 'ena minuta'],
    [2, 'm', 'čez 2 minuti', '2 minuti'],
    [-2, 'm', 'pred 2 minutama', '2 minuti'],
    [3, 'm', 'čez 3 minute', '3 minute'],
    [-3, 'm', 'pred 3 minutami', '3 minute'],
    [5, 'm', 'čez 5 minut', '5 minut'],
    [-5, 'm', 'pred 5 minutami', '5 minut'],
    [1, 'h', 'čez eno uro', 'ena ura'],
    [-1, 'h', 'pred eno uro', 'ena ura'],
    [2, 'h', 'čez 2 uri', '2 uri'],
    [-2, 'h', 'pred 2 urama', '2 uri'],
    [3, 'h', 'čez 3 ure', '3 ure'],
    [-3, 'h', 'pred 3 urami', '3 ure'],
    [5, 'h', 'čez 5 ur', '5 ur'],
    [-5, 'h', 'pred 5 urami', '5 ur'],
    [1, 'd', 'čez en dan', 'en dan'],
    [-1, 'd', 'pred enim dnem', 'en dan'],
    [2, 'd', 'čez 2 dneva', '2 dneva'],
    [-2, 'd', 'pred 2 dnevoma', '2 dneva'],
    [3, 'd', 'čez 3 dni', '3 dni'],
    [-3, 'd', 'pred 3 dnevi', '3 dni'],
    [5, 'd', 'čez 5 dni', '5 dni'],
    [-5, 'd', 'pred 5 dnevi', '5 dni'],
    [1, 'M', 'čez en mesec', 'en mesec'],
    [-1, 'M', 'pred enim mesecem', 'en mesec'],
    [2, 'M', 'čez 2 meseca', '2 meseca'],
    [-2, 'M', 'pred 2 mesecema', '2 meseca'],
    [3, 'M', 'čez 3 mesece', '3 mesece'],
    [-3, 'M', 'pred 3 meseci', '3 mesece'],
    [5, 'M', 'čez 5 mesecev', '5 mesecev'],
    [-5, 'M', 'pred 5 meseci', '5 mesecev'],
    [1, 'y', 'čez eno leto', 'eno leto'],
    [-1, 'y', 'pred enim letom', 'eno leto'],
    [2, 'y', 'čez 2 leti', '2 leti'],
    [-2, 'y', 'pred 2 letoma', '2 leti'],
    [3, 'y', 'čez 3 leta', '3 leta'],
    [-3, 'y', 'pred 3 leti', '3 leta'],
    [5, 'y', 'čez 5 let', '5 let'],
    [-5, 'y', 'pred 5 leti', '5 let']
    // these are rounded
    // if user decides to change rounding then it would be good to test them also
    // [102, 's', 'čez 102 sekundi', '102 sekundi'],
    // [-102, 's', 'pred 102 sekundama', '102 sekundi'],
    // [103, 's', 'čez 103 sekunde', '103 sekunde'],
    // [-103, 's', 'pred 103 sekundami', '103 sekunde'],
    // [114, 's', 'čez 114 sekund', '114 sekund'],
    // [-114, 's', 'pred 114 sekundami', '114 sekund'],
    // [-102, 'm', 'čez 102 minuti', '102 minuti'],
    // [-102, 'm', 'pred 102 minutama', '102 minuti'],
    // [103, 'm', 'čez 103 minute', '103 minute'],
    // [-103, 'm', 'pred 103 minutami', '103 minute'],
    // [114, 'm', 'čez 114 minut', '114 minut'],
    // [-114, 'm', 'pred 114 minutami', '114 minut']
  ]

  cases.forEach((c) => {
    // With suffix
    expect(dayjs().add(c[0], c[1]).locale('sl').fromNow()).toBe(c[2])
    // Without suffix
    expect(dayjs().add(c[0], c[1]).locale('sl').fromNow(true)).toBe(c[3])
  })
})
