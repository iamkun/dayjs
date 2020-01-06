## Referência da API

Ao invés de modificar o `Date.prototype` nativo, o Day.js empacota o objeto nativo `Date` em um objeto `Dayjs`.

O objeto `Dayjs` é imutável, ou seja, todas as operações da API que alteram o objeto `Dayjs` irão retornar uma nova instancia deste objeto.

- [Referência da API](#referência-da-api)
  - [Conversões](#conversões)
    - [Construtor `dayjs(existing?: string | number | Date | Dayjs)`](#construtor-dayjsexisting-string--number--date--dayjs)
      - [string ISO 8601](#string-iso-8601)
      - [Objeto `Date` nativo](#objeto-date-nativo)
      - [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds)
    - [Unix Timestamp (seconds)](#unix-timestamp-seconds-unixvalue-number)
    - [Custom Parse Format](#custom-parse-format)
    - [Clonar `.clone() | dayjs(original: Dayjs)`](#clonar-clone--dayjsoriginal-dayjs)
    - [Validação `.isValid()`](#validação-isvalid)
  - [Get and Set](#get-and-set)
    - [Ano `.year()`](#ano-year)
    - [Mês `.month()`](#mês-month)
    - [Dia do Mês `.date()`](#dia-do-mês-date)
    - [Dia da Semana `.day()`](#dia-da-semana-day)
    - [Hora `.hour()`](#hora-hour)
    - [Minuto `.minute()`](#minuto-minute)
    - [Segundo `.second()`](#segundo-second)
    - [Milissegundo `.millisecond()`](#milissegundo-millisecond)
    - [Get `.get(unit: string)`](#get-getunit-string)
      - [Lista de todas as unidades disponíveis](#lista-de-todas-as-unidades-disponíveis)
    - [Set `.set(unit: string, value: number)`](#set-setunit-string-value-number)
  - [Manipulando](#manipulando)
    - [Adicionar `.add(value: number, unit: string)`](#adicionar-addvalue-number-unit-string)
    - [Subtrair `.subtract(value: number, unit: string)`](#subtrair-subtractvalue-number-unit-string)
    - [Início do Tempo `.startOf(unit: string)`](#início-do-tempo-startofunit-string)
    - [Fim do Tempo `.endOf(unit: string)`](#fim-do-tempo-endofunit-string)
  - [Exibindo](#exibindo)
    - [Formatação `.format(stringWithTokens: string)`](#formatação-formatstringwithtokens-string)
      - [Lista com todos os formatos disponíveis](#lista-com-todos-os-formatos-disponíveis)
    - [Difference `.diff(compared: Dayjs, unit?: string, float?: boolean)`](#difference-diffcompared-dayjs-unit-string-float-boolean)
    - [Unix Timestamp (milissegundos) `.valueOf()`](#unix-timestamp-milissegundos-valueof)
    - [Unix Timestamp (segundos) `.unix()`](#unix-timestamp-segundos-unix)
    - [UTC offset (minutes) `.utcOffset()`](#utc-offset-minutes-utcoffset)
    - [Dias no Mês `.daysInMonth()`](#dias-no-mês-daysinmonth)
    - [Como objeto `Date` do Javascript `.toDate()`](#como-objeto-date-do-javascript-todate)
    - [Como JSON `.toJSON()`](#como-json-tojson)
    - [Como uma string ISO 8601 `.toISOString()`](#como-uma-string-iso-8601-toisostring)
    - [Como String `.toString()`](#como-string-tostring)
  - [Consulta](#consulta)
    - [Antes `.isBefore(compared: Dayjs, unit?: string)`](#antes-isbeforecompared-dayjs-unit-string)
    - [Igual `.isSame(compared: Dayjs, unit?: string)`](#igual-issamecompared-dayjs-unit-string)
    - [Depois `.isAfter(compared: Dayjs, unit?: string)`](#depois-isaftercompared-dayjs-unit-string)
    - [É um objeto `Dayjs` `.isDayjs()`](#é-um-objeto-dayjs-isdayjs)
  - [UTC](#utc)
  - [Plugin APIs](#plugin-apis)

## Conversões

### Construtor `dayjs(existing?: string | number | Date | Dayjs)`

Chamando este construtor sem parâmetros, será retornado um objeto `Dayjs` contendo a data e hora atual.

```js
dayjs()
```

Day.js também converte outros formatos de data.

#### string [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

```js
dayjs('2018-04-04T16:00:00.000Z')
```

#### Objeto `Date` nativo

```js
dayjs(new Date(2018, 8, 18))
```

#### Unix Timestamp (milliseconds)

```js
dayjs(1318781876406)
```

### Unix Timestamp (seconds) `.unix(value: number)`

Returns a `Dayjs` from a Unix timestamp (seconds since the Unix Epoch)

```js
dayjs.unix(1318781876)
dayjs.unix(1318781876.721)
```

### Custom Parse Format

- parse custom formats `dayjs("12-25-1995", "MM-DD-YYYY")` in plugin [`CustomParseFormat`](./Plugin.md#customparseformat)

### Clonar `.clone() | dayjs(original: Dayjs)`

Retorna um objeto `Dayjs` clonado.

```js
dayjs().clone()
dayjs(dayjs('2019-01-25')) // passando um objeto Dayjs para o construtor também irá cloná-lo
```

### Validação `.isValid()`

Retorna um `boolean` indicando se a data do objeto `Dayjs` é válida.

```js
dayjs().isValid()
```

## Get and Set

### Ano `.year()`

Gets or sets the year.

```js
dayjs().year()
dayjs().year(2000)
```

### Mês `.month()`

Gets or sets the month. Starts at 0

```js
dayjs().month()
dayjs().month(0)
```

### Dia do Mês `.date()`

Gets or sets the day of the month. Starts at 1

```js
dayjs().date()
dayjs().date(1)
```

### Dia da Semana `.day()`

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

### Milissegundo `.millisecond()`

Gets or sets the millisecond.

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

### Get `.get(unit: string)`

Returns a `number` with information getting from `Dayjs` object

```js
dayjs().get('month') // start 0
dayjs().get('day')
```

#### Lista de todas as unidades disponíveis

| Unidade       | Shorthand | Descrição                                     |
| ------------- | --------- | --------------------------------------------- |
| `date`        |           | Data do Mês                                   |
| `day`         | `d`       | Dia da Semana (Domingo como 0, Sábado como 6) |
| `month`       | `M`       | Mês (January as 0, December as 11)            |
| `year`        | `y`       | Ano                                           |
| `hour`        | `h`       | Hora                                          |
| `minute`      | `m`       | Minuto                                        |
| `second`      | `s`       | Segundo                                       |
| `millisecond` | `ms`      | Milissegundo                                  |

### Set `.set(unit: string, value: number)`

Retorna um `Dayjs` com as mudanças aplicadas.

```js
dayjs().set('date', 1)
dayjs().set('month', 3) // April
dayjs().set('second', 30)
```

## Manipulando

Um objeto `Dayjs` pode ser manipulado de várias maneiras.

```js
dayjs('2019-01-25')
  .add(1, 'day')
  .subtract(1, 'year')
  .toString() // Fri, 26 Jan 2018 00:00:00 GMT
```

### Adicionar `.add(value: number, unit: string)`

Retorna um objeto `Dayjs` clonado com a quantidade especificada de dias adicionados.

```js
dayjs().add(7, 'day')
```

### Subtrair `.subtract(value: number, unit: string)`

Retorna um objeto `Dayjs` clonado com a quantidade especificada de dias subtraídos.

```js
dayjs().subtract(7, 'year')
```

### Início do Tempo `.startOf(unit: string)`

Retorna um objeto `Dayjs` clonado definido com o começo da unidade de tempo especificada.

```js
dayjs().startOf('week') // Depends on `weekStart` in locale
```

### Fim do Tempo `.endOf(unit: string)`

Retorna um objeto `Dayjs` clonado definido com o fim da unidade de tempo especificada.

```js
dayjs().endOf('month')
```

## Exibindo

### Formatação `.format(stringWithTokens: string)`

Retorna uma `string` com um objeto `Dayjs` contendo a data formatada.
Para escapar caracteres, envolva-os entre colchetes (por exemplo: `[A] [MM]`).

```js
dayjs().format() // current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYY] YYYY-MM-DDTHH:mm:ssZ[Z]') // 'YYYY 2019-01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```

#### Lista com todos os formatos disponíveis

| Formato | Saída            | Descrição                                    |
| ------- | ---------------- | -------------------------------------------- |
| `YY`    | 18               | Ano, com 2 dígitos                           |
| `YYYY`  | 2018             | Ano, com 4 dígitos                           |
| `M`     | 1-12             | Mês (começa em 1)                            |
| `MM`    | 01-12            | Mês, com 2 dígitos                           |
| `MMM`   | Jan-Dec          | Nome do mês abreviado                        |
| `MMMM`  | January-December | Nome do mês completo                         |
| `D`     | 1-31             | Dia do mês                                   |
| `DD`    | 01-31            | Dia do mês, com 2 dígitos                    |
| `d`     | 0-6              | Dia da semana (Domingo = 0)                  |
| `dd`    | Su-Sa            | The min name of the day of the week          |
| `ddd`   | Sun-Sat          | The short name of the day of the week        |
| `dddd`  | Sunday-Saturday  | Nome do dia da semana                        |
| `H`     | 0-23             | Hora                                         |
| `HH`    | 00-23            | Hora, com 2 dígitos                          |
| `h`     | 1-12             | Hora (formato de 12 horas)                   |
| `hh`    | 01-12            | Hora, com 2 dígitos (formato de 12 horas)    |
| `m`     | 0-59             | Minuto                                       |
| `mm`    | 00-59            | Minuto, com 2 dígitos                        |
| `s`     | 0-59             | Segundo                                      |
| `ss`    | 00-59            | Segundo, com 2 dígitos                       |
| `SSS`   | 000-999          | Milisegundo, com 3 dígitos                   |
| `Z`     | +05:00           | Diferença do fuso horário UTC                |
| `ZZ`    | +0500            | Diferença do fuso horário UTC, com 2 dígitos |
| `A`     | AM PM            |                                              |
| `a`     | am pm            |                                              |

- Mais formatos disponíveis `Q Do k kk X x ...` no plugin [`AdvancedFormat`](./Plugin.md#advancedformat)
- Localized format options `L LT LTS ...` in plugin [`LocalizedFormat`](./Plugin.md#localizedFormat)

### Difference `.diff(compared: Dayjs, unit?: string, float?: boolean)`

Retorna um `number` indicando a diferença entre dois objetos `Dayjs` na unidade especificada.

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 default milliseconds
date1.diff(date2, 'month') // 7
date1.diff(date2, 'month', true) // 7.645161290322581
date1.diff(date2, 'day') // 233
```

### Unix Timestamp (milissegundos) `.valueOf()`

Retorna um `number` em milissegundos desde a Unix Epoch para o objeto `Dayjs`.

```js
dayjs('2019-01-25').valueOf() // 1548381600000
```

### Unix Timestamp (segundos) `.unix()`

Retorna um `number` em segundos desde a Unix Epoch para o objeto `Dayjs`.

```js
dayjs('2019-01-25').unix() // 1548381600
```

### UTC Offset (minutes) `.utcOffset()`

Returns the UTC offset in minutes for the `Dayjs`.

```js
dayjs().utcOffset()
```

### Dias no Mês `.daysInMonth()`

Retorna um `number` em contendo o número de dias no mês do objeto `Dayjs`.

```js
dayjs('2019-01-25').daysInMonth() // 31
```

### Como objeto `Date` do Javascript `.toDate()`

Retorna uma cópia do objeto nativo `Date` convertido de um objeto `Dayjs`.

```js
dayjs('2019-01-25').toDate()
```

### Como JSON `.toJSON()`

Retorna o objeto `Dayjs` formatado em uma `string` ISO8601.

```js
dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```

### Como uma string ISO 8601 `.toISOString()`

Retorna o objeto `Dayjs` formatado em uma `string` ISO8601.

```js
dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
```

### Como String `.toString()`

Retorna uma representação em `string` da data.

```js
dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
```

## Consulta

### Antes `.isBefore(compared: Dayjs, unit?: string)`]

Retorna um `boolean` indicando se a data do objeto `Dayjs` é antes da data fornecida de em outro objeto `Dayjs`.

```js
dayjs().isBefore(dayjs()) // false
dayjs().isBefore(dayjs(), 'year') // false
```

### Igual `.isSame(compared: Dayjs, unit?: string)`]

Retorna um `boolean` indicando se a data do objeto `Dayjs` é a mesma data fornecida de em outro objeto `Dayjs`.

```js
dayjs().isSame(dayjs()) // true
dayjs().isSame(dayjs(), 'year') // true
```

### Depois `.isAfter(compared: Dayjs, unit?: string)`]

Retorna um `boolean` indicando se a data do objeto `Dayjs` é depois da data fornecida de em outro objeto `Dayjs`.

```js
dayjs().isAfter(dayjs()) // false
dayjs().isAfter(dayjs(), 'year') // false
```

### É um objeto `Dayjs` `.isDayjs()`

Retorna um `boolean` indicando se a variável é um objeto `Dayjs` ou não.

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

## Plugin APIs

### RelativeTime

`.from` `.to` `.fromNow` `.toNow` para obter o tempo relativo

plugin [`RelativeTime`](./Plugin.md#relativetime)

### IsLeapYear

`.isLeapYear` para obter um ano bissexto ou não

plugin [`IsLeapYear`](./Plugin.md#isleapyear)

### WeekOfYear

`.week` para obter a semana do ano

plugin [`WeekOfYear`](./Plugin.md#weekofyear)

### WeekDay

`.weekday` to get or set locale aware day of the week

plugin [`WeekDay`](./Plugin.md#weekday)

### IsoWeeksInYear

`.isoWeeksInYear` to get the number of weeks in year

plugin [`IsoWeeksInYear`](./Plugin.md#isoweeksinyear)

### IsSameOrAfter

`.isSameOrAfter` to check if a date is same of after another date

plugin [`IsSameOrAfter`](./Plugin.md#issameorafter)

### IsSameOrBefore

`.isSameOrBefore` to check if a date is same of before another date.

plugin [`IsSameOrBefore`](./Plugin.md#issameorbefore)

### IsBetween

`.isBetween` para verificar se uma data está entre duas outras datas

plugin [`IsBetween`](./Plugin.md#isbetween)

### QuarterOfYear

`.quarter` to get quarter of the year

plugin [`QuarterOfYear`](./Plugin.md#quarterofyear)

### ToArray

`.toArray` to return an `array` that mirrors the parameters

plugin [`ToArray`](./Plugin.md#toarray)

### ToObject

`.toObject` to return an `object` with the date's properties.

plugin [`ToObject`](./Plugin.md#toobject)

### MinMax

`.min` `.max` to compare given dayjs instances.

plugin [`MinMax`](./Plugin.md#minmax)

### Calendar

`.calendar` to display calendar time

plugin [`Calendar`](./Plugin.md#calendar)

### UpdateLocale

`.updateLocale` to update a locale's properties

plugin [`UpdateLocale`](./Plugin.md#updateLocale)
