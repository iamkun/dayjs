import MockDate from 'mockdate'
// moment does not have ku-kmr yet!
// import moment from 'moment'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import kuKmr from '../../src/locale/ku-kmr'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Kurdish (Kurmanji) locale relative time in past and future with suffix', () => {
  const cases = [
    [1, 's', 'di çend sanîyeyan de'],
    [-1, 's', 'berî çend sanîyeyan'],
    [1, 'm', 'di deqîqeyekê de'],
    [-1, 'm', 'berî deqîqeyekê'],
    [1, 'h', 'di saetekê de'],
    [-1, 'h', 'berî saetekê'],
    [1, 'd', 'di rojekê de'],
    [-1, 'd', 'berî rojekê'],
    [1, 'M', 'di mehekê de'],
    [-1, 'M', 'berî mehekê'],
    [2, 'd', 'di 2 rojan de'],
    [-2, 'd', 'berî du rojan'],
    [10, 'd', 'di 10 rojan de'],
    [-10, 'd', 'berî 10 rojan'],
    [6, 'm', 'di 6 deqîqeyan de'],
    [-6, 'm', 'berî 6 deqîqeyan'],
    [5, 'h', 'di 5 saetan de'],
    [-5, 'h', 'berî 5 saetan'],
    [3, 'M', 'di 3 mehan de'],
    [-3, 'M', 'berî 3 mehan'],
    [4, 'y', 'di 4 salan de'],
    [-4, 'y', 'berî 4 salan']
  ]
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale(kuKmr).fromNow())
      .toBe(c[2])
    // expect(dayjs().add(c[0], c[1]).locale(kuKmr).fromNow())
    //  .toBe(moment().add(c[0], c[1]).locale(kuKmr).fromNow())
  })
})

it('Kurdish (Kurmanji) locale relative time in past and future without suffix', () => {
  const cases = [
    [1, 's', 'çend sanîye'],
    [-1, 's', 'çend sanîyeyan'],
    [1, 'm', 'deqîqeye'],
    [-1, 'm', 'deqîqeyekê'],
    [1, 'h', 'saet'],
    [-1, 'h', 'saetekê'],
    [1, 'd', 'roj'],
    [-1, 'd', 'rojekê'],
    [2, 'd', '2 roj'],
    [-2, 'd', '2 rojan'],
    [10, 'd', '10 roj'],
    [-10, 'd', '10 rojan'],
    [6, 'm', '6 deqîqe'],
    [-6, 'm', '6 deqîqeyan'],
    [5, 'h', '5 saet'],
    [-5, 'h', '5 saetan'],
    [3, 'M', '3 meh'],
    [-3, 'M', '3 mehan'],
    [4, 'y', '4 sal'],
    [-4, 'y', '4 salan']
  ]
  cases.forEach((c) => {
    expect(dayjs().add(c[0], c[1]).locale(kuKmr).fromNow(true))
      .toBe(c[2])
    // expect(dayjs().add(c[0], c[1]).locale(kuKmr).fromNow(true))
    //  .toBe(moment().add(c[0], c[1]).locale(kuKmr).fromNow(true))
  })
})
