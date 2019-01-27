import dayjs from '../../src'
import dynamicLocale from '../../src/plugin/dynamicLocale'

dayjs.extend(dynamicLocale)

const format = 'dddd, D MMMM YYYY'
const date = '2019-1-27'

it('set locale globally', () => {
  dayjs.locale('de')
  const out = dayjs(date).format(format)
  expect(out).toBe('Sonntag, 27 Januar 2019')
})

it('set locale for instance', () => {
  const out = dayjs(date).locale('it').format(format)
  expect(out).toBe('Domenica, 27 Gennaio 2019')
})
