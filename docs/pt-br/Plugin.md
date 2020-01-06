# Lista de Plugins

Um plugin é um módulo independente que pode ser adicionado ao Day.js para estendê-lo ou adicionar novas funcionalidades.

Por padrão, o Day.js vem somente com seu código _core_ e sem plugins instalados.

Você pode adicionar múltiplos plugins de acordo com a sua necessidade.

## API

#### Extend

- Retorna objeto Dayjs

Usando um plugin.

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // com opções do plugin
```

## Instalação

- Via NPM:

```javascript
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat' // carregar sob demanda

dayjs.extend(advancedFormat) // usa o plugin
```

- Via CDN:

```html
<script src="https://unpkg.com/dayjs"></script>
<!-- carregar o plugin como window.dayjs_plugin_NOME -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat)
</script>
```

## Lista de plugins oficiais

### UTC

- UTC adds `.utc` `.local` `.isUTC` APIs to parse or display in UTC.

```javascript
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

// default local time
dayjs().format() //2019-03-06T17:11:55+08:00
// UTC mode
dayjs.utc().format() // 2019-03-06T09:11:55Z
dayjs()
  .utc()
  .format() // 2019-03-06T09:11:55Z
// While in UTC mode, all display methods will display in UTC time instead of local time.
// And all getters and setters will internally use the Date#getUTC* and Date#setUTC* methods instead of the Date#get* and Date#set* methods.
dayjs.utc().isUTC() // true
dayjs
  .utc()
  .local()
  .format() //2019-03-06T17:11:55+08:00
dayjs.utc('2018-01-01', 'YYYY-MM-DD') // with CustomParseFormat plugin
```

By default, Day.js parses and displays in local time.

If you want to parse or display in UTC, you can use `dayjs.utc()` instead of `dayjs()`.

#### dayjs.utc `dayjs.utc(dateType?: string | number | Date | Dayjs, format? string)`

Returns a `Dayjs` object in UTC mode.

#### Use UTC time `.utc()`

Returns a cloned `Dayjs` object with a flag to use UTC time.

#### Use local time `.local()`

Returns a cloned `Dayjs` object with a flag to use local time.

#### isUTC mode `.isUTC()`

Returns a `boolean` indicating current `Dayjs` object is in UTC mode or not.

### AdvancedFormat

- O AdvancedFormat estende a API de `dayjs().format` para fornecer mais opções de formatação.

```javascript
import AdvancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(AdvancedFormat)

dayjs().format('Q Do k kk X x')
```

Lista de formatos adicionados:

| Formato | Saída                 | Descrição                                             |
| ------- | --------------------- | ----------------------------------------------------- |
| `Q`     | 1-4                   | Quarter                                               |
| `Do`    | 1st 2nd ... 31st      | Dia do mês com ordinal                                |
| `k`     | 1-24                  | Hora (começando do 1)                                 |
| `kk`    | 01-24                 | Hora, com 2 dígitos (começando do 1)                  |
| `X`     | 1360013296            | Unix Timestamp em segundos                            |
| `x`     | 1360013296123         | Unix Timestamp em milissegundos                       |
| `w`     | 1 2 ... 52 53         | Week of year (depend: weekOfYear plugin)              |
| `ww`    | 01 02 ... 52 53       | Week of year, 2-digits (depend: weekOfYear plugin)    |
| `wo`    | 1st 2nd ... 52nd 53rd | Week of year with ordinal (depend: weekOfYear plugin) |
| `gggg`  | 2017                  | Week Year (depend: weekYear plugin)                   |

### LocalizedFormat

- LocalizedFormat extends `dayjs().format` API to supply localized format options.

```javascript
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

dayjs().format('L LT')
```

List of added formats:

| Format | English Locale            | Sample Output                     |
| ------ | ------------------------- | --------------------------------- |
| `LT`   | h:mm A                    | 8:02 PM                           |
| `LTS`  | h:mm:ss A                 | 8:02:18 PM                        |
| `L`    | MM/DD/YYYY                | 08/16/2018                        |
| `LL`   | MMMM D, YYYY              | August 16, 2018                   |
| `LLL`  | MMMM D, YYYY h:mm A       | August 16, 2018 8:02 PM           |
| `LLLL` | dddd, MMMM D, YYYY h:mm A | Thursday, August 16, 2018 8:02 PM |

### RelativeTime

- RelativeTime adds `.from` `.to` `.fromNow` `.toNow` APIs to formats date to relative time strings (e.g. 3 hours ago).

```javascript
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

dayjs().from(dayjs('1990')) // 2 anos atrás
dayjs().from(dayjs(), true) // 2 anos

dayjs().fromNow()

dayjs().to(dayjs())

dayjs().toNow()
```

#### Tempo a partir de agora `.fromNow(withoutSuffix?: boolean)`

Retorna uma `string` do tempo relativo a partir de agora.

#### Tempo a partir de X `.from(compared: Dayjs, withoutSuffix?: boolean)`

Retorna uma `string` do tempo relativo a partir de X.

#### Tempo até agora `.toNow(withoutSuffix?: boolean)`

Retorna uma `string` do tempo relativo até agora.

#### Tempo até X `.to(compared: Dayjs, withoutSuffix?: boolean)`

Retorna uma `string` do tempo relativo até X.

| Intervalo                | Chave | Sample Output                    |
| ------------------------ | ----- | -------------------------------- |
| 0 to 44 seconds          | s     | a few seconds ago                |
| 45 to 89 seconds         | m     | a minute ago                     |
| 90 seconds to 44 minutes | mm    | 2 minutes ago ... 44 minutes ago |
| 45 to 89 minutes         | h     | an hour ago                      |
| 90 minutes to 21 hours   | hh    | 2 hours ago ... 21 hours ago     |
| 22 to 35 hours           | d     | a day ago                        |
| 36 hours to 25 days      | dd    | 2 days ago ... 25 days ago       |
| 26 to 45 days            | M     | a month ago                      |
| 46 days to 10 months     | MM    | 2 months ago ... 10 months ago   |
| 11 months to 17months    | y     | a year ago                       |
| 18 months+               | yy    | 2 years ago ... 20 years ago     |

### IsLeapYear

- IsLeapYear adiciona `.isLeapYear` à API para retornar um `boolean` indicando se o objeto `Dayjs` é um ano bissexto ou não.

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear() // true
```

### BuddhistEra

- BuddhistEra estende a API `dayjs().format` para fornecer opções de formação da era Budista (B.E.).
- A era Budista é um sistema de numeração do ano que se usou primeiramente em países asiáticos do Sudeste Asiático de Cambodia, de Laos, de Myanmar e da Tailândia, assim como em Sri Lanka e em populações chinesas da Malaysia e de Cingapura para ocasiões religiosas ou oficiais [Wikipedia](https://en.wikipedia.org/wiki/Buddhist_calendar))
- Para calcular um ano da era Budista manualmente, apenas adicione 543 ao ano. Por exemplo, 26 de maio de 1977 AD/CE deverá ser exibido como 26 de maio de 2520 BE (1977 + 543).

```javascript
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.extend(buddhistEra)

dayjs().format('BBBB BB')
```

Lista de formatos adicionados:

| Formato | Saída | Descrição                 |
| ------- | ----- | ------------------------- |
| `BBBB`  | 2561  | Full BE Year (Year + 543) |
| `BB`    | 61    | 2-digit of BE Year        |

### IsSameOrAfter

- IsSameOrAfter adds `.isSameOrAfter()` API to returns a `boolean` indicating if a date is same of after another date.

```javascript
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrAfter)

dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year')
```

### IsSameOrBefore

- IsSameOrBefore adds `.isSameOrBefore()` API to returns a `boolean` indicating if a date is same of before another date.

```javascript
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

dayjs('2010-10-20').isSameOrBefore('2010-10-19', 'year')
```

### IsBetween

- IsBetween adiciona `.isBetween()` à API para retornar um `boolean` indicando se a data está entre outras duas datas.

```javascript
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year')
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)')
// '[' indicates inclusion, '(' indicates exclusion
```

### DayOfYear

- DayOfYear adds `.dayOfYear()` API to returns a `number` indicating the `Dayjs`'s day of the year, or to set the day of the year.

```javascript
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)

dayjs('2010-01-01').dayOfYear() // 1
dayjs('2010-01-01').dayOfYear(365) // 2010-12-31
```

### WeekOfYear

- WeekOfYear adiciona `.week()` à API para retornar um `number` indicando um objeto `Dayjs` com a semana do ano..

```javascript
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('06/27/2018').week() // 26
dayjs('2018-06-27').week(5) // set week
```

### WeekDay

- WeekDay adds `.weekday()` API to get or set locale aware day of the week.

```javascript
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(weekday)
// when Monday is the first day of the week
dayjs().weekday(-7) // last Monday
dayjs().weekday(7) // next Monday
```

### IsoWeeksInYear

- IsoWeeksInYear adds `.isoWeeksInYear()` API to return a `number` to get the number of weeks in year, according to ISO weeks.

```javascript
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear' // rely on isLeapYear plugin

dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

dayjs('2004-01-01').isoWeeksInYear() // 53
dayjs('2005-01-01').isoWeeksInYear() // 52
```

### QuarterOfYear

- QuarterOfYear add `.quarter()` API to return to which quarter of the year belongs a date, and extends `.add` `.subtract` `.startOf` `.endOf` APIs to support unit `quarter`.

```javascript
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

dayjs('2010-04-01').quarter() // 2
dayjs('2010-04-01').quarter(2)
```

### CustomParseFormat

- CustomParseFormat extends `dayjs()` constructor to support custom formats of input strings.

To escape characters, wrap them in square brackets (e.g. `[G]`). Punctuation symbols (-:/.()) do not need to be wrapped.

```javascript
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

dayjs('05/02/69 1:02:03 PM -05:00', 'MM/DD/YY H:mm:ss A Z')
// Returns an instance containing '1969-05-02T18:02:03.000Z'

dayjs('2018 Fevereiro 15', 'YYYY MMMM DD', 'pt_br')
// Returns an instance containing '2018-02-15T00:00:00.000Z'
```

#### List of all available format tokens

| Format | Output           | Description                       |
| ------ | ---------------- | --------------------------------- |
| `YY`   | 18               | Two-digit year                    |
| `YYYY` | 2018             | Four-digit year                   |
| `M`    | 1-12             | Month, beginning at 1             |
| `MM`   | 01-12            | Month, 2-digits                   |
| `MMM`  | Jan-Dec          | The abbreviated month name        |
| `MMMM` | January-December | The full month name               |
| `D`    | 1-31             | Day of month                      |
| `DD`   | 01-31            | Day of month, 2-digits            |
| `H`    | 0-23             | Hours                             |
| `HH`   | 00-23            | Hours, 2-digits                   |
| `h`    | 1-12             | Hours, 12-hour clock              |
| `hh`   | 01-12            | Hours, 12-hour clock, 2-digits    |
| `m`    | 0-59             | Minutes                           |
| `mm`   | 00-59            | Minutes, 2-digits                 |
| `s`    | 0-59             | Seconds                           |
| `ss`   | 00-59            | Seconds, 2-digits                 |
| `S`    | 0-9              | Hundreds of milliseconds, 1-digit |
| `SS`   | 00-99            | Tens of milliseconds, 2-digits    |
| `SSS`  | 000-999          | Milliseconds, 3-digits            |
| `Z`    | -05:00           | Offset from UTC                   |
| `ZZ`   | -0500            | Compact offset from UTC, 2-digits |
| `A`    | AM PM            | Post or ante meridiem, upper-case |
| `a`    | am pm            | Post or ante meridiem, lower-case |
| `Do`   | 1st... 31st      | Dia do mês com ordinal            |

### ToArray

- ToArray add `.toArray()` API to return an `array` that mirrors the parameters

```javascript
import toArray from 'dayjs/plugin/toArray'

dayjs.extend(toArray)

dayjs('2019-01-25').toArray() // [ 2019, 0, 25, 0, 0, 0, 0 ]
```

### ToObject

- ToObject add `.toObject()` API to return an `object` with the date's properties.

```javascript
import toObject from 'dayjs/plugin/toObject'

dayjs.extend(toObject)

dayjs('2019-01-25').toObject()
/* { years: 2019,
     months: 0,
     date: 25,
     hours: 0,
     minutes: 0,
     seconds: 0,
     milliseconds: 0 } */
```

### MinMax

- MinMax adds `.min` `.max` APIs to return a `dayjs` to compare given dayjs instances.

```javascript
import minMax from 'dayjs/plugin/minMax'

dayjs.extend(minMax)

dayjs.max(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.min([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```

### Calendar

- Calendar adds `.calendar` API to return a `string` to display calendar time

```javascript
import calendar from 'dayjs/plugin/calendar'

dayjs.extend(calendar)

dayjs().calendar(dayjs('2008-01-01'))
dayjs().calendar(null, {
  sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
  nextDay: '[Tomorrow]', // The next day ( Tomorrow at 2:30 AM )
  nextWeek: 'dddd', // The next week ( Sunday at 2:30 AM )
  lastDay: '[Yesterday]', // The day before ( Yesterday at 2:30 AM )
  lastWeek: '[Last] dddd', // Last week ( Last Monday at 2:30 AM )
  sameElse: 'DD/MM/YYYY' // Everything else ( 7/10/2011 )
})
```

### UpdateLocale

- UpdateLocale adds `.updateLocale` API to update a locale's properties.

```javascript
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  months : String[]
})
```

## Customizar

Você também pode construir seu próprio plugin Day.js para diferentes necessidades.

Sinta-se à vontade para abrir um pull request e compartilhar seu plugin.

Modelo de um plugin Day.js.

```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // estender dayjs()
  // ex: adicionar dayjs().isSameOrBefore()
  dayjsClass.prototype.isSameOrBefore = function(arguments) {}

  // estender dayjs
  // ex: adicionar dayjs.utc()
  dayjsFactory.utc = arguments => {}

  // sobrescrever API existente
  // ex: estender dayjs().format()
  const formatoAntigo = dayjsClass.prototype.format
  dayjsClass.prototype.format = function(arguments) {
    // original
    const result = formatoAntigo(arguments)
    // retornar modificado
  }
}
```
