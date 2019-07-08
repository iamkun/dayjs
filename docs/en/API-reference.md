# API Reference

Instead of modifying the native `Date.prototype`, Day.js creates a wrapper for the Date object, called `Dayjs` object.

The `Dayjs` object is immutable, that is, all API operations that change the `Dayjs` object in some way will return a new instance of it.

- [API Reference](#api-reference)
  - [Parsing](#parsing)
    - [Constructor `dayjs(dateType?: string | number | Date | Dayjs)`](#constructor-dayjsdateType-string--number--date--dayjs)
      - [ISO 8601 string](#iso-8601-string)
      - [Native Javascript Date object](#native-javascript-date-object)
      - [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds)
    - [Unix Timestamp (seconds)](#unix-timestamp-seconds-unixvalue-number)
    - [Custom Parse Format](#custom-parse-format)
    - [Clone `.clone() | dayjs(original: Dayjs)`](#clone-clone--dayjsoriginal-dayjs)
    - [Validation `.isValid()`](#validation-isvalid)
  - [Get and Set](#get-and-set)
    - [Year `.year()`](#year-year)
    - [Month `.month()`](#month-month)
    - [Day of the Month `.date()`](#day-of-the-month-date)
    - [Day of the Week `.day()`](#day-of-the-week-day)
    - [Hour `.hour()`](#hour-hour)
    - [Minute `.minute()`](#minute-minute)
    - [Second `.second()`](#second-second)
    - [Millisecond `.millisecond()`](#millisecond-millisecond)
    - [Get `.get(unit: string)`](#get-getunit-string)
      - [List of all available units](#list-of-all-available-units)
    - [Set `.set(unit: string, value: number)`](#set-setunit-string-value-number)
  - [Manipulating](#manipulating)
    - [Add `.add(value: number, unit: string)`](#add-addvalue-number-unit-string)
    - [Subtract `.subtract(value: number, unit: string)`](#subtract-subtractvalue-number-unit-string)
    - [Start of Time `.startOf(unit: string)`](#start-of-time-startofunit-string)
    - [End of Time `.endOf(unit: string)`](#end-of-time-endofunit-string)
  - [Displaying](#displaying)
    - [Format `.format(stringWithTokens: string)`](#format-formatstringwithtokens-string)
      - [List of all available formats](#list-of-all-available-formats)
    - [Difference `.diff(compared: Dayjs, unit?: string, float?: boolean)`](#difference-diffcompared-dayjs-unit-string-float-boolean)
    - [Unix Timestamp (milliseconds) `.valueOf()`](#unix-timestamp-milliseconds-valueof)
    - [Unix Timestamp (seconds) `.unix()`](#unix-timestamp-seconds-unix)
    - [UTC offset (minutes) `.utcOffset()`](#utc-offset-minutes-utcoffset)
    - [Days in the Month `.daysInMonth()`](#days-in-the-month-daysinmonth)
    - [As Javascript Date `.toDate()`](#as-javascript-date-todate)
    - [As JSON `.toJSON()`](#as-json-tojson)
    - [As ISO 8601 String `.toISOString()`](#as-iso-8601-string-toisostring)
    - [As String `.toString()`](#as-string-tostring)
  - [Query](#query)
    - [Is Before `.isBefore(compared: Dayjs, unit?: string)`](#is-before-isbeforecompared-dayjs-unit-string)
    - [Is Same `.isSame(compared: Dayjs, unit?: string)`](#is-same-issamecompared-dayjs-unit-string)
    - [Is After `.isAfter(compared: Dayjs, unit?: string)`](#is-after-isaftercompared-dayjs-unit-string)
    - [Is a Dayjs `.isDayjs()`](#is-a-dayjs-isdayjscompared-any)
  - [UTC](#utc)
  - [Plugin APIs](#plugin-apis)

## Parsing

### Constructor `dayjs(dateType?: string | number | Date | Dayjs)`

Calling it without parameters returns a fresh `Dayjs` object with the current date and time.

```js
dayjs()
```

Day.js also parses other date formats.

#### [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string

```js
dayjs('2018-04-04T16:00:00.000Z')
```

#### Native Javascript Date object

```js
dayjs(new Date(2018, 8, 18))
```

#### Unix Timestamp (milliseconds)

Returns a `Dayjs` from a Unix timestamp (milliseconds since the Unix Epoch)

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

### Clone `.clone() | dayjs(original: Dayjs)`

Returns a cloned `Dayjs`.

```js
dayjs().clone()
dayjs(dayjs('2019-01-25')) // passing a Dayjs object to a constructor will also clone it
```

### Validation `.isValid()`

Returns a `boolean` indicating whether the `Dayjs`'s date is valid.

```js
dayjs().isValid()
```

## Get and Set

### Year `.year()`

Gets or sets the year.

```js
dayjs().year()
dayjs().year(2000)
```

### Month `.month()`

Gets or sets the month. Starts at 0

```js
dayjs().month()
dayjs().month(0)
```

### Day of the Month `.date()`

Gets or sets the day of the month. Starts at 1

```js
dayjs().date()
dayjs().date(1)
```

### Day of the Week `.day()`

Gets or sets the day of the week. Starts on Sunday with 0

```js
dayjs().day()
dayjs().day(0)
```

### Hour `.hour()`

Gets or sets the hour.

```js
dayjs().hour()
dayjs().hour(12)
```

### Minute `.minute()`

Gets or sets the minute.

```js
dayjs().minute()
dayjs().minute(59)
```

### Second `.second()`

Gets or sets the second.

```js
dayjs().second()
dayjs().second(1)
```

### Millisecond `.millisecond()`

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

#### List of all available units

| Unit          | Shorthand | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `date`        |           | Date of Month                            |
| `day`         | `d`       | Day of Week (Sunday as 0, Saturday as 6) |
| `month`       | `M`       | Month (January as 0, December as 11)     |
| `year`        | `y`       | Year                                     |
| `hour`        | `h`       | Hour                                     |
| `minute`      | `m`       | Minute                                   |
| `second`      | `s`       | Second                                   |
| `millisecond` | `ms`      | Millisecond                              |

### Set `.set(unit: string, value: number)`

Returns a `Dayjs` with the applied changes.

```js
dayjs().set('date', 1)
dayjs().set('month', 3) // April
dayjs().set('second', 30)
```

## Manipulating

`Dayjs` object can be manipulated in many ways.

```js
dayjs('2019-01-25')
  .add(1, 'day')
  .subtract(1, 'year')
  .toString() // Fri, 26 Jan 2018 00:00:00 GMT
```

### Add `.add(value: number, unit: string)`

Returns a cloned `Dayjs` with a specified amount of time added.

```js
dayjs().add(7, 'day')
```

### Subtract `.subtract(value: number, unit: string)`

Returns a cloned `Dayjs` with a specified amount of time subtracted.

```js
dayjs().subtract(7, 'year')
```

### Start of Time `.startOf(unit: string)`

Returns a cloned `Dayjs` set to the start of the specified unit of time.

```js
dayjs().startOf('week') // Depends on `weekStart` in locale
```

### End of Time `.endOf(unit: string)`

Returns a cloned `Dayjs` set to the end of the specified unit of time.

```js
dayjs().endOf('month')
```

## Displaying

### Format `.format(stringWithTokens: string)`

Returns a `string` with the `Dayjs`'s formatted date.
To escape characters, wrap them in square brackets (e.g. `[A] [MM]`).

```js
dayjs().format() // current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYY] YYYY-MM-DDTHH:mm:ssZ[Z]') // 'YYYY 2019-01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```

#### List of all available formats

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | Two-digit year                        |
| `YYYY` | 2018             | Four-digit year                       |
| `M`    | 1-12             | The month, beginning at 1             |
| `MM`   | 01-12            | The month, 2-digits                   |
| `MMM`  | Jan-Dec          | The abbreviated month name            |
| `MMMM` | January-December | The full month name                   |
| `D`    | 1-31             | The day of the month                  |
| `DD`   | 01-31            | The day of the month, 2-digits        |
| `d`    | 0-6              | The day of the week, with Sunday as 0 |
| `dd`   | Su-Sa            | The min name of the day of the week   |
| `ddd`  | Sun-Sat          | The short name of the day of the week |
| `dddd` | Sunday-Saturday  | The name of the day of the week       |
| `H`    | 0-23             | The hour                              |
| `HH`   | 00-23            | The hour, 2-digits                    |
| `h`    | 1-12             | The hour, 12-hour clock               |
| `hh`   | 01-12            | The hour, 12-hour clock, 2-digits     |
| `m`    | 0-59             | The minute                            |
| `mm`   | 00-59            | The minute, 2-digits                  |
| `s`    | 0-59             | The second                            |
| `ss`   | 00-59            | The second, 2-digits                  |
| `SSS`  | 000-999          | The millisecond, 3-digits             |
| `Z`    | +5:00            | The offset from UTC                   |
| `ZZ`   | +0500            | The offset from UTC, 2-digits         |
| `A`    | AM PM            |                                       |
| `a`    | am pm            |                                       |

- More available formats `Q Do k kk X x ...` in plugin [`AdvancedFormat`](./Plugin.md#advancedformat)
- Localized format options `L LT LTS ...` in plugin [`LocalizedFormat`](./Plugin.md#localizedFormat)

### Difference `.diff(compared: Dayjs, unit?: string, float?: boolean)`

Returns a `number` indicating the difference of two `Dayjs`s in the specified unit.

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 default milliseconds
date1.diff(date2, 'month') // 7
date1.diff(date2, 'month', true) // 7.645161290322581
date1.diff(date2, 'day') // 233
```

### Unix Timestamp (milliseconds) `.valueOf()`

Returns the `number` of milliseconds since the Unix Epoch for the `Dayjs`.

```js
dayjs('2019-01-25').valueOf() // 1548381600000
```

### Unix Timestamp (seconds) `.unix()`

Returns the `number` of seconds since the Unix Epoch for the `Dayjs`.

```js
dayjs('2019-01-25').unix() // 1548381600
```

### UTC Offset (minutes) `.utcOffset()`

Returns the UTC offset in minutes for the `Dayjs`.

```js
dayjs().utcOffset()
```

### Days in the Month `.daysInMonth()`

Returns the `number` of days in the `Dayjs`'s month.

```js
dayjs('2019-01-25').daysInMonth() // 31
```

### As Javascript Date `.toDate()`

Returns a copy of the native `Date` object parsed from the `Dayjs` object.

```js
dayjs('2019-01-25').toDate()
```

### As JSON `.toJSON()`

Returns the `Dayjs` formatted in an ISO8601 `string`.

```js
dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```

### As ISO 8601 String `.toISOString()`

Returns the `Dayjs` formatted in an ISO8601 `string`.

```js
dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
```

### As String `.toString()`

Returns a `string` representation of the date.

```js
dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
```

## Query

### Is Before `.isBefore(compared: Dayjs, unit?: string)`

Returns a `boolean` indicating whether the `Dayjs`'s date is before the other supplied `Dayjs`'s.

```js
dayjs().isBefore(dayjs()) // false
dayjs().isBefore(dayjs(), 'year') // false
```

### Is Same `.isSame(compared: Dayjs, unit?: string)`

Returns a `boolean` indicating whether the `Dayjs`'s date is the same as the other supplied `Dayjs`'s.

```js
dayjs().isSame(dayjs()) // true
dayjs().isSame(dayjs(), 'year') // true
```

### Is After `.isAfter(compared: Dayjs, unit?: string)`

Returns a `boolean` indicating whether the `Dayjs`'s date is after the other supplied `Dayjs`'s.

```js
dayjs().isAfter(dayjs()) // false
dayjs().isAfter(dayjs(), 'year') // false
```

### Is a Dayjs `.isDayjs(compared: any)`

Returns a `boolean` indicating whether a variable is a dayjs object or not.

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

`.from` `.to` `.fromNow` `.toNow` to get relative time

plugin [`RelativeTime`](./Plugin.md#relativetime)

### IsLeapYear

`.isLeapYear` to get is a leap year or not

plugin [`IsLeapYear`](./Plugin.md#isleapyear)

### WeekOfYear

`.week` to get week of the year

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

`.isBetween` to check if a date is between two other dates

plugin [`IsBetween`](./Plugin.md#isbetween)

### QuarterOfYear

`.quarter` to get quarter of the year

plugin [`QuarterOfYear`](./Plugin.md#quarterofyear)

### ToArray

`.toArray` to return an `array` that mirrors the parameters

plugin [`ToArray`](./Plugin.md#toarray)

### ToObject

`.toObject` to return an `object` with the date's properties

plugin [`ToObject`](./Plugin.md#toobject)

### MinMax

`.min` `.max` to compare given dayjs instances

plugin [`MinMax`](./Plugin.md#minmax)

### Calendar

`.calendar` to display calendar time

plugin [`Calendar`](./Plugin.md#calendar)
