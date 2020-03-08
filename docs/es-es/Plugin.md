### Notice

The document here **no longer** updates.

Please visit our website [https://day.js.org](https://day.js.org/docs/en/plugin/plugin) for more  information.

-------------

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

# Lista de complementos

Un complemento o _plugin_ es un módulo independiente que puede añadirse a Day.js para extender su funcionalidad o añadir nuevas características.

Por defecto, Day.js viene sin ningún complemento preinstalado, incluyendo únicamente el núcleo de la librería.

Puedes cargar diversos complementos según tus necesidades.

## API

### Extend

- Devuelve un objeto dayjs

Método para declarar el uso de un complemento.

```js
import nombreComplemento
dayjs.extend(nombreComplemento)
dayjs.extend(nombreComplemento, options) // uso del complemento con opciones
```

## Instalación

- Vía NPM:

```javascript
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat' // carga bajo demanda

dayjs.extend(AdvancedFormat) // uso del complemento
```

- Vía CDN:

```html
<script src="https://unpkg.com/dayjs"></script>
<!-- Carga del complemento en window.dayjs_plugin_nombreComplemento -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat)
</script>
```

## Lista de complementos oficiales

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

- AdvancedFormat extiende la API `dayjs().format` para proporcionar más opciones de formato.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

dayjs().format('Q Do k kk X x')
```

Lista de formatos añadidos:

| Formato | Salida                | Descripción                                           |
| ------- | --------------------- | ----------------------------------------------------- |
| `Q`     | 1-4                   | Cuarto                                                |
| `Do`    | 1º 2º ... 31º         | Día del mes con ordinal                               |
| `k`     | 1-24                  | Hora, contando desde 1                                |
| `kk`    | 01-24                 | Hora, con 2 dígitos, contando desde 1                 |
| `X`     | 1360013296            | Tiempo Unix en segundos                               |
| `x`     | 1360013296123         | Tiempo Unix en milisegundos                           |
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

- RelativeTime añade las API `.from` `.to` `.fromNow` `.toNow` para dar formato de tiempo relativo a fechas (p.ej.: hace 3 horas).

```javascript
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

dayjs().from(dayjs('1990')) // hace 2 años
dayjs().from(dayjs(), true) // 2 años

dayjs().fromNow()

dayjs().to(dayjs())

dayjs().toNow()
```

#### Tiempo desde ahora `.fromNow(withoutSuffix?: boolean)`

Devuelve un dato de tipo `string`, con el tiempo relativo desde el instante actual.

#### Tiempo desde X `.from(compared: Dayjs, withoutSuffix?: boolean)`

Devuelve un dato de tipo `string`, con el tiempo relativo desde el instante X.

#### Tiempo hasta ahora `.toNow(withoutSuffix?: boolean)`

Devuelve dato de tipo `string`, con el tiempo relativo transcurrido desde la fecha representada por el objeto `Dayjs` dado hasta el instante actual.

#### Tiempo hasta X `.to(compared: Dayjs, withoutSuffix?: boolean)`

Devuelve dato de tipo `string`, con el tiempo relativo transcurrido desde la fecha representada por el objeto `Dayjs` dado hasta el instante X especificado.

| Rango                       | Clave | Ejemplo de salida                  |
| --------------------------- | ----- | ---------------------------------- |
| de 0 a 44 segundos          | s     | hace unos segundos                 |
| de 45 a 89 segundos         | m     | hace un minuto                     |
| de 90 segundos a 44 minutos | mm    | hace 2 minutos ... hace 44 minutos |
| de 45 a 89 minutos          | h     | hace una hora                      |
| de 90 minutos a 21 horas    | hh    | hace 2 horas ... hace 21 horas     |
| de 22 a 35 horas            | d     | hace un día                        |
| de 36 horas a 25 días       | dd    | hace 2 días ... hace 25 días       |
| de 26 a 45 días             | M     | hace un mes                        |
| de 46 días a 10 meses       | MM    | hace 2 meses ... hace 10 meses     |
| de 11 a 17 meses            | y     | hace un año                        |
| más de 18 meses             | yy    | hace 2 años ... hace 20 años       |

### IsLeapYear

- IsLeapYear añade la API `.isLeapYear`, que devuelve un dato de tipo `boolean` indicando si el año del objeto `Dayjs` es bisiesto o no.

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear() // true
```

### BuddhistEra

- BuddhistEra extiende la API `dayjs().format` para añadir opciones de formato relacionadas con la Era Budista (B.E.)
- La Era Budista es un sistema de numeración anual, usado principalmente en los países del sudeste del continente asiático: Camboya, Laos, Birmania y Tailandia,así como en Sri Lanka y entre la población china de Malasia y Singapur, por razones religiosas o en eventos oficiales ([Wikipedia](https://en.wikipedia.org/wiki/Buddhist_calendar))
- Para calcular manualmente el año de la BE tan sólo hemos de sumar 543 al año. Por ejemplo, el 26 Mayo 1977 AD/EC debe mostrarse como 26 Mayo 2520 BE (1977 + 543)

```javascript
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.extend(buddhistEra)

dayjs().format('BBBB BB')
```

Lista de formatos añadidos:

| Formato | Salida | Descripción                 |
| ------- | ------ | --------------------------- |
| `BBBB`  | 2561   | Año BE completo (Año + 543) |
| `BB`    | 61     | Año BE con 2 dígitos        |

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

- IsBetween añade la API `.isBetween()`, que devuelve un dato de tipo `boolean` indicando si una fecha se encuentra o no entre otras dos dadas.

```javascript
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year')
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)')
// '[' indicates inclusion, '(' indicates exclusion
```

### DayOfYear

- DayOfYear añade a la API `.dayOfYear()`, que devuelve un dato de tipo `number` indicando el día del año correspondiente a la fecha del objeto `Dayjs`, or to set the day of the year.

```javascript
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)

dayjs('2018-01-01').week() // 1
dayjs('2010-01-01').dayOfYear(365) // 2010-12-31
```

### WeekOfYear

- WeekOfYear añade la API `.week()`, que devuelve un dato de tipo `number` indicando la semana del año correspondiente a la fecha del objeto `Dayjs`.

```javascript
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('2018-06-27').week() // 26
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

dayjs('2018 Enero 15', 'YYYY MMMM DD', 'es')
// Returns an instance containing '2018-01-15T00:00:00.000Z'
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
| `Do`   | 1st... 31st      | Día del mes con ordinal           |

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

## Personalización

Puedes construir tu propio complemento de Day.js para cubrir tus necesidades.

Siéntete libre de abrir una pull request para compartir tu complemento.

Plantilla de un complemento de Day.js.

```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // extensión de dayjs()
  // p.ej.: se añade dayjs().isSameOrBefore()
  dayjsClass.prototype.isSameOrBefore = function(arguments) {}

  // extensión de dayjs
  // p.ej.: se añade dayjs.utc()
  dayjsFactory.utc = arguments => {}

  // sobrescritura de la API existente
  // p.ej.: extensión de dayjs().format()
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function(arguments) {
    // result contiene el formato original
    const result = oldFormat(arguments)
    // se ha de devolver result modificado
  }
}
```
