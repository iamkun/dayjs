import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import '../../src/locale/is'
import relativeTime from '../../src/plugin/relativeTime'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const expectations = [
  [1, 's', 'nokkrar sekúndur', 'fyrir nokkrum sekúndum síðan', 'eftir nokkrar sekúndur'],
  [1, 'm', 'mínúta', 'fyrir mínútu síðan', 'eftir mínútu'],
  [1, 'h', 'klukkustund', 'fyrir klukkustund síðan', 'eftir klukkustund'],
  [1, 'd', 'dagur', 'fyrir degi síðan', 'eftir dag'],
  [1, 'M', 'mánuður', 'fyrir mánuði síðan', 'eftir mánuð'],
  [1, 'y', 'ár', 'fyrir ári síðan', 'eftir ár'],
  [2, 'm', '2 mínútur', 'fyrir 2 mínútum síðan', 'eftir 2 mínútur'],
  [2, 'h', '2 klukkustundir', 'fyrir 2 klukkustundum síðan', 'eftir 2 klukkustundir'],
  [2, 'd', '2 dagar', 'fyrir 2 dögum síðan', 'eftir 2 daga'],
  [2, 'M', '2 mánuðir', 'fyrir 2 mánuðum síðan', 'eftir 2 mánuði'],
  [2, 'y', '2 ár', 'fyrir 2 árum síðan', 'eftir 2 ár'],
  [21, 'm', '21 mínúta', 'fyrir 21 mínútu síðan', 'eftir 21 mínútu'],
  [21, 'h', '21 klukkustund', 'fyrir 21 klukkustund síðan', 'eftir 21 klukkustund'],
  [21, 'd', '21 dagur', 'fyrir 21 degi síðan', 'eftir 21 dag'],
  [21, 'y', '21 ár', 'fyrir 21 ári síðan', 'eftir 21 ár']
]

describe('moment compatibility', () => {
  it('without suffix', () => {
    expectations.forEach((expectation) => {
      const [offset, unit, expectationWithoutSuffix] = expectation

      const momentResult = moment()
        .add(offset, unit)
        .locale('is')
        .fromNow(true)

      expect(expectationWithoutSuffix).toBe(momentResult)
    })
  })

  it('past', () => {
    expectations.forEach((expectation) => {
      const [offset, unit, , pastExpectation] = expectation

      const momentResult = moment()
        .add(-offset, unit)
        .locale('is')
        .fromNow()

      expect(pastExpectation).toBe(momentResult)
    })
  })

  it('future', () => {
    expectations.forEach((expectation) => {
      const [offset, unit, , , futureExpectation] = expectation

      const momentResult = moment()
        .add(offset, unit)
        .locale('is')
        .fromNow()

      expect(futureExpectation).toBe(momentResult)
    })
  })
})

describe('Icelandic output matches moment output', () => {
  it('without suffix', () => {
    expectations.forEach((expectation) => {
      const [offset, unit, expectationWithoutSuffix] = expectation

      const result = dayjs()
        .add(offset, unit)
        .locale('is')
        .fromNow(true)

      expect(result).toBe(expectationWithoutSuffix)
    })
  })

  it('past', () => {
    expectations.forEach((expectation) => {
      const [offset, unit, , pastExpectation] = expectation

      const result = dayjs()
        .add(-offset, unit)
        .locale('is')
        .fromNow()

      expect(result).toBe(pastExpectation)
    })
  })

  it('future', () => {
    expectations.forEach((expectation) => {
      const [offset, unit, , , futureExpectation] = expectation

      const result = dayjs()
        .add(offset, unit)
        .locale('is')
        .fromNow()

      expect(result).toBe(futureExpectation)
    })
  })
})
