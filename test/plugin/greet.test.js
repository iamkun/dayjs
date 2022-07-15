import dayjs from '../../src'
import greet from '../../src/plugin/greet'
import '../../src/locale/cs'
import '../../src/locale/da'
import '../../src/locale/de'
import '../../src/locale/el'
import '../../src/locale/es'
import '../../src/locale/fr'
import '../../src/locale/he'
import '../../src/locale/hr'
import '../../src/locale/it'
import '../../src/locale/nb'
import '../../src/locale/nl'
import '../../src/locale/pl'
import '../../src/locale/ro'
import '../../src/locale/ru'
import '../../src/locale/sk'
import '../../src/locale/sv'
import '../../src/locale/tr'
import '../../src/locale/uk'

dayjs.extend(greet)

it('Greet in EN', () => {
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Good morning')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Good morning')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Good morning custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Good afternoon')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Good afternoon')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Good afternoon custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Good evening')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Good evening')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Good evening custom suffix')
})

it('Greet in CS', () => {
  dayjs.locale('cs')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobré jitro')
  expect(dayjs('2022-07-07 07:59:59').greet()).toBe('Dobré jitro')
  expect(dayjs('2022-07-07 07:59:59').greet(' custom suffix')).toBe('Dobré jitro custom suffix')
  expect(dayjs('2022-07-07 08:00:00').greet()).toBe('Dobré dopoledne')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Dobré dopoledne')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Dobré dopoledne custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Dobré poledne')
  expect(dayjs('2022-07-07 12:00:00').greet(' custom suffix')).toBe('Dobré poledne custom suffix')
  expect(dayjs('2022-07-07 12:01:00').greet()).toBe('Dobré odpoledne')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Dobré odpoledne')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Dobré odpoledne custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Dobrý večer')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dobrý večer')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Dobrý večer custom suffix')
})

it('Greet in DA', () => {
  dayjs.locale('da')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('God morgen')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('God morgen')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('God morgen custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('God dag')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('God dag')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('God dag custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('God aften')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('God aften')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('God aften custom suffix')
})

it('Greet in DE', () => {
  dayjs.locale('de')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Guten Morgen')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Guten Morgen')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Guten Morgen custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Guten Tag')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Guten Tag')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Guten Tag custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Guten Abend')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Guten Abend')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Guten Abend custom suffix')
})

it('Greet in EL', () => {
  dayjs.locale('el')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Kαλημέρα')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Kαλημέρα')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Kαλημέρα custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Kαλησπέρα')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Kαλησπέρα')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Kαλησπέρα custom suffix')
})

it('Greet in ES', () => {
  dayjs.locale('es')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Buenos días')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Buenos días')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Buenos días custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Buenas tardes')
  expect(dayjs('2022-07-07 19:59:59').greet()).toBe('Buenas tardes')
  expect(dayjs('2022-07-07 19:59:59').greet(' custom suffix')).toBe('Buenas tardes custom suffix')
  expect(dayjs('2022-07-07 20:00:00').greet()).toBe('Buenas noches')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Buenas noches')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Buenas noches custom suffix')
})

it('Greet in FR', () => {
  dayjs.locale('fr')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Bonjour')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Bonjour')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Bonjour custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Bonsoir')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Bonsoir')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Bonsoir custom suffix')
})

it('Greet in HE', () => {
  dayjs.locale('he')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('בוקר טוב')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('בוקר טוב')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('בוקר טוב custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('ערב טוב')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('ערב טוב')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('ערב טוב custom suffix')
})

it('Greet in HR', () => {
  dayjs.locale('hr')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobro jutro')
  expect(dayjs('2022-07-07 09:59:59').greet()).toBe('Dobro jutro')
  expect(dayjs('2022-07-07 09:59:59').greet(' custom suffix')).toBe('Dobro jutro custom suffix')
  expect(dayjs('2022-07-07 10:00:00').greet()).toBe('Dobar dan')
  expect(dayjs('2022-07-07 19:59:59').greet()).toBe('Dobar dan')
  expect(dayjs('2022-07-07 19:59:59').greet(' custom suffix')).toBe('Dobar dan custom suffix')
  expect(dayjs('2022-07-07 20:00:00').greet()).toBe('Dobra večer')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dobra večer')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Dobra večer custom suffix')
})

it('Greet in IT', () => {
  dayjs.locale('it')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Buongiorno')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Buongiorno')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Buongiorno custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Buonasera')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Buonasera')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Buonasera custom suffix')
})

it('Greet in NB', () => {
  dayjs.locale('nb')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('God morgen')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('God morgen')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('God morgen custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('God dag')
  expect(dayjs('2022-07-07 16:59:59').greet()).toBe('God dag')
  expect(dayjs('2022-07-07 16:59:59').greet(' custom suffix')).toBe('God dag custom suffix')
  expect(dayjs('2022-07-07 17:00:00').greet()).toBe('God kveld')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('God kveld')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('God kveld custom suffix')
})

it('Greet in NL', () => {
  dayjs.locale('nl')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Goedemorgen')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Goedemorgen')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Goedemorgen custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Goedemiddag')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Goedemiddag')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Goedemiddag custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Goedenavond')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Goedenavond')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Goedenavond custom suffix')
})

it('Greet in PL', () => {
  dayjs.locale('pl')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dzień dobry')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Dzień dobry')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Dzień dobry custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Dobry wieczór')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dobry wieczór')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Dobry wieczór custom suffix')
})

it('Greet in RO', () => {
  dayjs.locale('ro')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Bună dimineața')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Bună dimineața')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Bună dimineața custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Bună ziua')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Bună ziua')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Bună ziua custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Bună seara')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Bună seara')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Bună seara custom suffix')
})

it('Greet in RU', () => {
  dayjs.locale('ru')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Доброе утро')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Доброе утро')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Доброе утро custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Добрый день')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Добрый день')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Добрый день custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Добрый вечер')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Добрый вечер')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Добрый вечер custom suffix')
})

it('Greet in SK', () => {
  dayjs.locale('sk')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobro jutro')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Dobro jutro')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Dobro jutro custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Dober dan')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Dober dan')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Dober dan custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Dober večer')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dober večer')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Dober večer custom suffix')
})

it('Greet in SV', () => {
  dayjs.locale('sv')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobrý deň')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Dobrý deň')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Dobrý deň custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Dobrý večer')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dobrý večer')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Dobrý večer custom suffix')
})

it('Greet in TR', () => {
  dayjs.locale('tr')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Günaydın')
  expect(dayjs('2022-07-07 10:59:59').greet()).toBe('Günaydın')
  expect(dayjs('2022-07-07 10:59:59').greet(' custom suffix')).toBe('Günaydın custom suffix')
  expect(dayjs('2022-07-07 11:00:00').greet()).toBe('İyi günler')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('İyi günler')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('İyi günler custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('İyi akşamlar')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('İyi akşamlar')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('İyi akşamlar custom suffix')
})

it('Greet in UK', () => {
  dayjs.locale('uk')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Доброго ранку')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Доброго ранку')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe('Доброго ранку custom suffix')
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Добрий день')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Добрий день')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe('Добрий день custom suffix')
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Добрий вечір')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Добрий вечір')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe('Добрий вечір custom suffix')
})
