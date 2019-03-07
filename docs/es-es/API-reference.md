# Referencia de la API

En lugar de modificar el `Date.prototype` nativo, Day.js construye una abstracción sobre el objeto `Date`: el objeto `Dayjs`.

El objeto `Dayjs` es inmutable, por lo que toda operación de la API que altere de alguna forma la información contenida en el objeto `Dayjs` devolverá una nueva instancia de este.

- [Referencia de la API](#referencia-de-la-api)
  - [Análisis](#análisis)
    - [Constructor `dayjs(existing?: string | number | Date | Dayjs)`](#constructor-dayjsexisting-string--number--date--dayjs)
      - [Cadena [ISO 8601]](#cadena-iso-8601)
      - [Objeto `Date` nativo](#objeto-date-nativo)
      - [Tiempo Unix (milisegundos)](#tiempo-unix-milisegundos)
    - [Tiempo Unix (segundos)](#tiempo-unix-segundos-unixvalue-number)
    - [Custom Parse Format](#custom-parse-format)
    - [Clonar `.clone() | dayjs(original: Dayjs)`](#clonar-clone--dayjsoriginal-dayjs)
    - [Validación `.isValid()`](#validación-isvalid)
  - [Get y Set](#get-y-set)
    - [Año `.year()`](#año-year)
    - [Mes `.month()`](#mes-month)
    - [Día del mes `.date()`](#día-del-mes-date)
    - [Día de la semana `.day()`](#día-de-la-semana-day)
    - [Hora `.hour()`](#hora-hour)
    - [Minuto `.minute()`](#minuto-minute)
    - [Segundo `.second()`](#segundo-second)
    - [Milisegundo `.millisecond()`](#milisegundo-millisecond)
    - [Set `.set(unit: string, value: number)`](#set-setunit-string-value-number)
      - [Lista de unidades disponibles](#lista-de-unidades-disponibles)
  - [Manipulación](#manipulación)
    - [Añadir `.add(value: number, unit: string)`](#añadir-addvalue-number-unit-string)
    - [Restar `.subtract(value: number, unit: string)`](#restar-subtractvalue-number-unit-string)
    - [Principio de `.startOf(unit: string)`](#principio-de-startofunit-string)
    - [Fin de `.endOf(unit: string)`](#fin-de-endofunit-string)
  - [Presentación](#presentación)
    - [Dar formato `.format(stringWithTokens: string)`](#dar-formato-formatstringwithtokens-string)
      - [Lista de formatos disponibles](#lista-de-formatos-disponibles)
    - [Diferencia `.diff(compared: Dayjs, unit: string (predeterminada: 'milliseconds'), float?: boolean)`](#diferencia-diffcompared-dayjs-unit-string-predeterminada-milliseconds-float-boolean)
    - [Tiempo Unix (milisegundos) `.valueOf()`](#tiempo-unix-milisegundos-valueof)
    - [Tiempo Unix (segundos) `.unix()`](#tiempo-unix-segundos-unix)
    - [UTC offset (minutos) `.utcOffset()`](#utc-offset-minutos-utcoffset)
    - [Días en el mes `.daysInMonth()`](#días-en-el-mes-daysinmonth)
    - [Como objeto `Date` `.toDate()`](#como-objeto-date-todate)
    - [Como JSON `.toJSON()`](#como-json-tojson)
    - [Como cadena ISO 8601 `.toISOString()`](#como-cadena-iso-8601-toisostring)
    - [Como cadena `.toString()`](#como-cadena-tostring)
  - [Consulta](#consulta)
    - [Anterior a `.isBefore(compared: Dayjs, unit?: string)`](#anterior-a-isbeforecompared-dayjs-unit-string)
    - [Igual que `.isSame(compared: Dayjs, unit?: string)`](#igual-que-issamecompared-dayjs-unit-string)
    - [Posterior a `.isAfter(compared: Dayjs, unit?: string)`](#posterior-a-isaftercompared-dayjs-unit-string)
    - [Es Dayjs `.isDayjs()`](#es-dayjs-isdayjscompared-any)
  - [UTC](#utc)
  - [API de complementos](#api-de-complementos)
    - [RelativeTime](#relativetime)
    - [IsLeapYear](#isleapyear)
    - [WeekOfYear](#weekofyear)
    - [IsSameOrAfter](#issameorafter)
    - [IsSameOrBefore](#issameorbefore)
    - [IsBetween](#isbetween)
    - [QuarterOfYear](#quarterofyear)
    - [ToArray](#toarray)
    - [ToObject](#toobject)

## Análisis

### Constructor `dayjs(existing?: string | number | Date | Dayjs)`

Si se llama al constructor sin parámetros, este devuelve un nuevo objeto `Dayjs` con la fecha y hora actual.

```js
dayjs()
```

Day.js también analiza otros formatos de fecha.

#### Cadena [ISO 8601](https://es.wikipedia.org/wiki/ISO_8601)

```js
dayjs('2018-04-04T16:00:00.000Z')
```

#### Objeto `Date` nativo

```js
dayjs(new Date(2018, 8, 18))
```

#### Tiempo Unix (milisegundos)

Devuelve un objeto `Dayjs` a partir de un tiempo unix (milisegundos desde la época Unix).

```js
dayjs(1318781876406)
```

### Tiempo Unix (segundos) `.unix(value: number)`

Devuelve un objeto `Dayjs` a partir de un tiempo Unix (segundos desde la época Unix).

```js
dayjs.unix(1318781876)
dayjs.unix(1318781876.721)
```

### Custom Parse Format

- parse custom formats `dayjs("12-25-1995", "MM-DD-YYYY")` in plugin [`CustomParseFormat`](./Plugin.md#customparseformat)

### Clonar `.clone() | dayjs(original: Dayjs)`

Devuelve una copia de `Dayjs`.

```js
dayjs().clone()
dayjs(dayjs('2019-01-25')) // si el constructor recibe un objeto Dayjs también lo clonará
```

### Validación `.isValid()`

Devuelve un dato de tipo `boolean`, que indica si la fecha `Dayjs` es válida o no.

```js
dayjs().isValid()
```

## Get y Set

### Año `.year()`

Gets or sets the year.

```js
dayjs().year()
dayjs().year(2000)
```

### Mes `.month()`

Gets or sets the month. Starts at 0

```js
dayjs().month()
dayjs().month(0)
```

### Día del mes `.date()`

Gets or sets the day of the month. Starts at 1

```js
dayjs().date()
dayjs().date(1)
```

### Día de la semana `.day()`

Gets or sets the day of the week. Starts on Sunday with 0

```js
dayjs().day()
dayjs().day(0)
```

### Hora `.hour()`

Gets or sets the hour.

```js
dayjs().hour()
dayjs().hour(12)
```

### Minuto `.minute()`

Gets or sets the minute.

```js
dayjs().minute()
dayjs().minute(59)
```

### Segundo `.second()`

Gets or sets the second.

```js
dayjs().second()
dayjs().second(1)
```

### Milisegundo `.millisecond()`

Gets or sets the millisecond.

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

### Set `.set(unit: string, value: number)`

Devuelve un nuevo objeto `Dayjs` con los cambios aplicados.

```js
dayjs().set('date', 1)
dayjs().set('month', 3) // Abril
dayjs().set('second', 30)
```

#### Lista de unidades disponibles

| Unit          | Abreviatura | Descripción                                 |
| ------------- | ----------- | ------------------------------------------- |
| `date`        |             | Día del mes                                 |
| `day`         | `d`         | Día de la semana (de domingo 0, a sábado 6) |
| `month`       | `M`         | Mes                                         |
| `year`        | `y`         | Año                                         |
| `hour`        | `h`         | Hora                                        |
| `minute`      | `m`         | Minuto                                      |
| `second`      | `s`         | Segundo                                     |
| `millisecond` | `ms`        | Milisegundo                                 |

## Manipulación

Los objetos `Dayjs` pueden manipularse de diversas formas.

```js
dayjs('2019-01-25')
  .add(1, 'day')
  .subtract(1, 'year')
  .toString() // Fri, 26 Jan 2018 00:00:00 GMT
```

### Añadir `.add(value: number, unit: string)`

Devuelve un nuevo objeto `Dayjs`, resultante de añadir al actual el tiempo indicado.

```js
dayjs().add(7, 'day')
```

### Restar `.subtract(value: number, unit: string)`

Devuelve un nuevo objeto `Dayjs`, resultante de restar al actual el tiempo indicado.

```js
dayjs().subtract(7, 'year')
```

### Principio de `.startOf(unit: string)`

Devuelve un nuevo objeto `Dayjs`, resultante de ajustar el actual al principio de la unidad de tiempo indicada.

```js
dayjs().startOf('week') // Depends on `weekStart` in locale
```

### Fin de `.endOf(unit: string)`

Devuelve un nuevo objeto `Dayjs`, resultante de ajustar el actual al final de la unidad de tiempo indicada.

```js
dayjs().endOf('month')
```

## Presentación

### Dar formato `.format(stringWithTokens: string)`

Devuelve un dato de tipo `string` con la fecha del objeto `Dayjs` formateada.
Para escapar caracteres, estos se han de encerrar entre corchetes (p.ej.: `[A] [MM]`).

```js
dayjs().format() // fecha actual en ISO6801, sin fracciones de segundo p.ej. '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYY] YYYY-MM-DDTHH:mm:ssZ[Z]') // 'YYYY 2019-01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```

#### Lista de formatos disponibles

| Formato | Salida           | Descripción                              |
| ------- | ---------------- | ---------------------------------------- |
| `YY`    | 18               | Año, con 2 dígitos                       |
| `YYYY`  | 2018             | Año, con 4 dígitos                       |
| `M`     | 1-12             | Mes, contando desde 1                    |
| `MM`    | 01-12            | Mes, con 2 dígitos                       |
| `MMM`   | Jan-Dec          | Nombre abreviado del mes                 |
| `MMMM`  | January-December | Nombre completo del mes                  |
| `D`     | 1-31             | Día del mes                              |
| `DD`    | 01-31            | Día del mes, con 2 dígitos               |
| `d`     | 0-6              | Día de la semana, siendo el domingo el 0 |
| `dd`    | Su-Sa            | Nombre mínimo del día de la semana       |
| `ddd`   | Sun-Sat          | Nombre abreviado del día de la semana    |
| `dddd`  | Sunday-Saturday  | Nombre del día de la semana              |
| `H`     | 0-23             | Hora                                     |
| `HH`    | 00-23            | Hora, con 2 dígitos                      |
| `h`     | 1-12             | Hora, formato de 12 horas                |
| `hh`    | 01-12            | Hora, formato de 12 horas, con 2 dígitos |
| `m`     | 0-59             | Minutos                                  |
| `mm`    | 00-59            | Minutos, con 2 dígitos                   |
| `s`     | 0-59             | Segundos                                 |
| `ss`    | 00-59            | Segundos, con 2 dígitos                  |
| `SSS`   | 000-999          | Milisegundos, con 3 dígitos              |
| `Z`     | +5:00            | Diferencia horaria UTC                   |
| `ZZ`    | +0500            | Diferencia horaria UTC, con 2 dígitos    |
| `A`     | AM PM            |                                          |
| `a`     | am pm            |                                          |

- Más formatos disponibles `Q Do k kk X x ...` con el complemento [`AdvancedFormat`](./Plugin.md#advancedformat)
- Localized format options `L LT LTS ...` in plugin [`LocalizedFormat`](./Plugin.md#localizedFormat)

### Diferencia `.diff(compared: Dayjs, unit: string (predeterminada: 'milliseconds'), float?: boolean)`

Devuelve un dato de tipo `number`, que indica la diferencia existente entre dos objetos `Dayjs`, expresada en la unidad de tiempo dada.

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000
date1.diff(date2, 'month') // 7
date1.diff(date2, 'month', true) // 7.645161290322581
date1.diff(date2, 'day') // 233
```

### Tiempo Unix (milisegundos) `.valueOf()`

Devuelve un dato de tipo `number`, que indica el número de milisegundos transcurridos desde la época Unix para el objeto `Dayjs`.

```js
dayjs('2019-01-25').valueOf() // 1548381600000
```

### Tiempo Unix (segundos) `.unix()`

Devuelve un dato de tipo `number`, que indica el número de segundos transcurridos desde la época Unix para el objeto `Dayjs`.

```js
dayjs('2019-01-25').unix() // 1548381600
```

### UTC Offset (minutos) `.utcOffset()`

Devuelve el UTC offset en minutos del `Dayjs`.

```js
dayjs().utcOffset()
```

### Días en el mes `.daysInMonth()`

Devuelve un dato de tipo `number`, que indica el número de días contenidos en el mes del objeto `Dayjs`.

```js
dayjs('2019-01-25').daysInMonth() // 31
```

### Como objeto `Date` `.toDate()`

Devuelve un objeto `Date` nativo, obtenido a partir del objeto `Dayjs`.

```js
dayjs('2019-01-25').toDate()
```

### Como JSON `.toJSON()`

Devuelve un objeto `Dayjs` formateado como una cadena ISO8601.

```js
dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```

### Como cadena ISO 8601 `.toISOString()`

Devuelve un objeto `Dayjs` formateado como una cadena ISO8601.

```js
dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
```

### Como cadena `.toString()`

Devuelve un dato de tipo `string`, que representa la fecha.

```js
dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
```

## Consulta

### Anterior a `.isBefore(compared: Dayjs, unit?: string)`

Devuelve un dato de tipo `boolean`, que indica si la fecha del objeto `Dayjs` inicial es anterior o no a la fecha del objeto `Dayjs` a comparar.

```js
dayjs().isBefore(dayjs()) // false
dayjs().isBefore(dayjs(), 'year') // false
```

### Igual que `.isSame(compared: Dayjs, unit?: string)`

Devuelve un dato de tipo `boolean`, que indica si la fecha del objeto `Dayjs` inicial es igual o no que la fecha del objeto `Dayjs` a comparar.

```js
dayjs().isSame(dayjs()) // true
dayjs().isSame(dayjs(), 'year') // true
```

### Posterior a `.isAfter(compared: Dayjs, unit?: string)`

Devuelve un dato de tipo `boolean`, que indica si la fecha del objeto `Dayjs` inicial es posterior o no a la fecha del objeto `Dayjs` a comparar.

```js
dayjs().isAfter(dayjs()) // false
dayjs().isAfter(dayjs(), 'year') // false
```

### Es Dayjs `.isDayjs(compared: any)`

Devuelve un dato de tipo `boolean`, que indica si la variable proporcionada es un objeto `Dayjs` o no.

```js
dayjs.isDayjs(dayjs()) // true
dayjs.isDayjs(new Date()) // false
```

The operator `instanceof` works equally well:

```js
dayjs() instanceof dayjs // true
```

## UTC

If you want to parse or display in UTC, you can use `.utc` `.local` `.isUTC` with plugin [`UTC`](./Plugin.md#utc)

## API de complementos

### RelativeTime

`.from` `.to` `.fromNow` `.toNow` para obtener el tiempo relativo

complemento [`RelativeTime`](./Plugin.md#relativetime)

### IsLeapYear

`.isLeapYear` para saber si se trata de un año bisiesto o no

complemento [`IsLeapYear`](./Plugin.md#isleapyear)

### WeekOfYear

`.week` para obtener la semana del año

complemento [`WeekOfYear`](./Plugin.md#weekofyear)

### IsSameOrAfter

`.isSameOrAfter` to check if a date is same of after another date

plugin [`IsSameOrAfter`](./Plugin.md#issameorafter)

### IsSameOrBefore

`.isSameOrBefore` to check if a date is same of before another date.

plugin [`IsSameOrBefore`](./Plugin.md#issameorbefore)

### IsBetween

`.isBetween` para comprobar si una fecha se encuentra entre otras dos fechas dadas

complemento [`IsBetween`](./Plugin.md#isbetween)

### QuarterOfYear

`.quarter` to get quarter of the year

plugin [`QuarterOfYear`](./Plugin.md#quarterofyear)

### ToArray

`.toArray` to return an `array` that mirrors the parameters

plugin [`ToArray`](./Plugin.md#toarray)

### ToObject

`.toObject` to return an `object` with the date's properties.

plugin [`ToObject`](./Plugin.md#toobject)
