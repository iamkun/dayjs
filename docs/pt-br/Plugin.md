# Lista de Plugins

Um plugin é um módulo independente que pode ser adicionado ao Day.js para estendê-lo ou adicionar novas funcionalidades.

Por padrão, o Day.js vem somente com seu código *core* e sem plugins instalados.

Você pode adicionar múltiplos plugins de acordo com a sua necessidade.

## API

#### Extend

* Retorna objeto Dayjs

Usando um plugin.

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // com opções do plugin
```

## Instalação

* Via NPM:

```javascript
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat' // carregar sob demanda

dayjs.extend(advancedFormat) // usa o plugin
```

* Via CDN:
```html
<script src="https://unpkg.com/dayjs"></script>
<!-- carregar o plugin como window.dayjs_plugin_NOME -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat);
</script>
```

## Lista de plugins oficiais

### AdvancedFormat
 - O AdvancedFormat estende a API de `dayjs().format` para fornecer mais opções de formatação.

```javascript
import AdvancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(AdvancedFormat)

dayjs().format('Q Do k kk X x')
```

Lista de formatos adicionados:

| Formato | Saída            | Descrição                             |
| ------- | ---------------- | ------------------------------------- |
| `Q`     | 1-4              | Quarter                               |
| `Do`    | 1st 2nd ... 31st | Dia do mês com ordinal                |
| `k`     | 1-23             | Hora (começando do 1)                 |
| `kk`    | 01-23            | Hora, com 2 dígitos (começando do 1)  |
| `X`     | 1360013296       | Unix Timestamp em segundos            |
| `x`     | 1360013296123    | Unix Timestamp em milissegundos       |

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

#### Tempo a partir de X  `.from(compared: Dayjs, withoutSuffix?: boolean)`

Retorna uma `string` do tempo relativo a partir de X.

#### Tempo até agora `.toNow(withoutSuffix?: boolean)`

Retorna uma `string` do tempo relativo até agora.

#### Tempo até X  `.to(compared: Dayjs, withoutSuffix?: boolean)`

Retorna uma `string` do tempo relativo até X.

| Intervalo                | Chave  | Sample Output                    |
| ------------------------ | ------ | -------------------------------- |
| 0 to 44 seconds          | s      | a few seconds ago                |
| 45 to 89 seconds         | m      | a minute ago                     |
| 90 seconds to 44 minutes | mm     | 2 minutes ago ... 44 minutes ago |
| 45 to 89 minutes         | h      | an hour ago                      |
| 90 minutes to 21 hours   | hh     | 2 hours ago ... 21 hours ago     |
| 22 to 35 hours           | d      | a day ago                        |
| 36 hours to 25 days      | dd     | 2 days ago ... 25 days ago       |
| 26 to 45 days            | M      | a month ago                      |
| 46 days to 10 months     | MM     | 2 months ago ... 10 months ago   |
| 11 months to 17months    | y      | a year ago                       |
| 18 months+               | yy     | 2 years ago ... 20 years ago     |

### IsLeapYear
 - IsLeapYear adiciona `.isLeapYear` à API para retornar um `boolean` indicando se  o objeto `Dayjs` é um ano bissexto ou não.

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear(); // true
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

| Formato | Saída            | Descrição                             |
| ------- | ---------------- | ------------------------------------- |
| `BBBB`  | 2561             | Full BE Year (Year + 543)             |
| `BB`    | 61               | 2-digit of BE Year                    |

### IsSameOrAfter
 - IsSameOrAfter adds `.isSameOrAfter()` API to returns a `boolean` indicating if a date is same of after another date.

```javascript
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrAfter)

dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year');
```

### IsSameOrBefore
 - IsSameOrBefore adds `.isSameOrBefore()` API to returns a `boolean` indicating if a date is same of before another date.

```javascript
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

dayjs('2010-10-20').isSameOrBefore('2010-10-19', 'year');
```

### IsBetween
 - IsBetween adiciona `.isBetween()` à API para retornar um `boolean` indicando se a data está entre outras duas datas.

```javascript
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year');
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)'); 
// '[' indicates inclusion, '(' indicates exclusion
```
### DayOfYear

- DayOfYear adds `.dayOfYear()` API to returns a `number` indicating the `Dayjs`'s day of the year, or to set the day of the year.

```javascript
import dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(dayOfYear);

dayjs("2010-01-01").dayOfYear(); // 1
dayjs("2010-01-01").dayOfYear(365); // 2010-12-31
```

### WeekOfYear
 - WeekOfYear adiciona `.week()` à API para retornar um `number` indicando um objeto `Dayjs` com a semana do ano..

```javascript
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('06/27/2018').week() // 26
```

### QuarterOfYear
- QuarterOfYear add `.quarter()` API to return to which quarter of the year belongs a date

```javascript
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

dayjs('2010-04-01').quarter(); // 2
```

### CustomParseFormat
 - CustomParseFormat extends `dayjs()` constructor to support custom formats of input strings.

To escape characters, wrap them in square brackets (e.g. `[G]`). Punctuation symbols (-:/.()) do not need to be wrapped.

```javascript
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

dayjs('05/02/69 1:02:03 PM -05:00', 'MM/DD/YY H:mm:ss A Z')
// Returns an instance containing '1969-05-02T18:02:03.000Z'
```

#### List of all available format tokens

| Format | Output           | Description                       |
| ------ | ---------------- | --------------------------------- |
| `YY`   | 18               | Two-digit year                    |
| `YYYY` | 2018             | Four-digit year                   |
| `M`    | 1-12             | Month, beginning at 1             |
| `MM`   | 01-12            | Month, 2-digits                   |
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
| `Z`    | -5:00            | Offset from UTC                   |
| `ZZ`   | -0500            | Compact offset from UTC, 2-digits |
| `A`    | AM PM            | Post or ante meridiem, upper-case |
| `a`    | am pm            | Post or ante meridiem, lower-case |

## Customizar

Você também pode construir seu próprio plugin Day.js para diferentes necessidades.

Sinta-se à vontade para abrir um pull request e compartilhar seu plugin.

Modelo de um plugin Day.js.
```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // estender dayjs()
  // ex: adicionar dayjs().isSameOrBefore()
  dayjsClass.prototype.isSameOrBefore = function (arguments) {}

  // estender dayjs
  // ex: adicionar dayjs.utc()
  dayjsFactory.utc = (arguments) => {}

  // sobrescrever API existente
  // ex: estender dayjs().format()
  const formatoAntigo = dayjsClass.prototype.format
  dayjsClass.prototype.format = function (arguments) {
    // original
    const result = formatoAntigo(arguments)
    // retornar modificado
  }
}
```