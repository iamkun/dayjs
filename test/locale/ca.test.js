import moment from 'moment'
import dayjs from '../../src'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/ca'

dayjs.extend(localizedFormat)

const MONTHS_LOWERCASE = [
  'gener', 'febrer', 'març', 'abril', 'maig', 'juny',
  'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'
]

const WEEKDAYS_LOWERCASE = [
  'diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'
]

const MONTHS_SHORT = [
  'gen.', 'febr.', 'març', 'abr.', 'maig', 'juny',
  'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'
]

it('Catalan locale months are lowercase', () => {
  MONTHS_LOWERCASE.forEach((expected, index) => {
    expect(dayjs('2026-01-15').locale('ca').month(index).format('MMMM')).toEqual(expected)
  })
})

it('Catalan locale weekdays are lowercase', () => {
  // 2026-03-15 is a Sunday
  WEEKDAYS_LOWERCASE.forEach((expected, index) => {
    expect(dayjs('2026-03-15').locale('ca').add(index, 'day').format('dddd')).toEqual(expected)
  })
})

it('Catalan locale MMMM of maig and gener', () => {
  expect(dayjs('2026-05-15').locale('ca').format('MMMM')).toEqual('maig')
  expect(dayjs('2026-01-15').locale('ca').format('MMMM')).toEqual('gener')
})

it('Catalan locale dddd of diumenge and dilluns', () => {
  expect(dayjs('2026-03-15').locale('ca').format('dddd')).toEqual('diumenge')
  expect(dayjs('2026-03-16').locale('ca').format('dddd')).toEqual('dilluns')
})

it('Catalan locale short forms MMM, dd and ddd', () => {
  const dayjsDate = dayjs('2026-05-15').locale('ca') // a divendres (Friday)
  expect(dayjsDate.format('MMM')).toEqual('maig')
  expect(dayjsDate.format('dd')).toEqual('dv')
  expect(dayjsDate.format('ddd')).toEqual('dv.')

  MONTHS_SHORT.forEach((expected, index) => {
    expect(dayjs('2026-01-15').locale('ca').month(index).format('MMM')).toEqual(expected)
  })
})

it('Catalan locale LL and LLLL localized formats', () => {
  // 2026-03-15 is a Sunday
  const dayjsDate = dayjs('2026-03-15').locale('ca')
  expect(dayjsDate.format('LL')).toEqual('15 de març de 2026')
  expect(dayjsDate.format('LLLL')).toEqual('diumenge 15 de març de 2026 a les 0:00')
  expect(dayjsDate.format('LLLL').startsWith('diumenge 15 de març de 2026'))
    .toBe(true)
})

it('Catalan locale matches moment', () => {
  for (let i = 0; i < 12; i += 1) {
    const dayjsDate = dayjs('2026-01-15').locale('ca').add(i, 'month')
    const momentDate = moment('2026-01-15').locale('ca').add(i, 'month')
    expect(dayjsDate.format('MMMM')).toEqual(momentDate.format('MMMM'))
    expect(dayjsDate.format('MMM')).toEqual(momentDate.format('MMM'))
  }
  for (let i = 0; i < 7; i += 1) {
    const dayjsDate = dayjs('2026-03-15').locale('ca').add(i, 'day')
    const momentDate = moment('2026-03-15').locale('ca').add(i, 'day')
    expect(dayjsDate.format('dddd')).toEqual(momentDate.format('dddd'))
    expect(dayjsDate.format('ddd')).toEqual(momentDate.format('ddd'))
    expect(dayjsDate.format('dd')).toEqual(momentDate.format('dd'))
  }
  const dayjsLocalized = dayjs('2026-03-15').locale('ca')
  const momentLocalized = moment('2026-03-15').locale('ca')
  expect(dayjsLocalized.format('LL')).toEqual(momentLocalized.format('LL'))
  expect(dayjsLocalized.format('LLL')).toEqual(momentLocalized.format('LLL'))
  expect(dayjsLocalized.format('LLLL')).toEqual(momentLocalized.format('LLLL'))
  expect(dayjsLocalized.format('ll')).toEqual(momentLocalized.format('ll'))
})
