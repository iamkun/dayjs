# API Reference

Instead of modifying the native `Date.prototype`, Day.js creates a wrapper for the Date object, called `Dayjs` object.

The `Dayjs` object is immutable, that is, all API operations that change the `Dayjs` object in some way will return a new instance of it.

- [API Reference](#api-reference)
  - [Parsing](#parsing)
    - [Constructor `dayjs(existing?: string | number | Date | Dayjs)`](#constructor-dayjsexisting-string--number--date--dayjs)
      - [ISO 8601 string](#iso-8601-string)
      - [Unix Timestamp (milliseconds since the Unix Epoch - Jan 1 1970, 12AM UTC)](#unix-timestamp-milliseconds-since-the-unix-epoch---jan-1-1970-12am-utc)
      - [Native Javascript Date object](#native-javascript-date-object)
    - [Clone `.clone() | dayjs(original: Dayjs)`](#clone-clone-dayjsoriginal-dayjs)
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
    - [Set `.set(unit: string, value: number)`](#set-setunit-string-value-number)
  - [Manipulating](#manipulating)
    - [Add `.add(value: number, unit: string)`](#add-addvalue-number-unit-string)
    - [Subtract `.subtract(value: number, unit: string)`](#subtract-subtractvalue-number-unit-string)
    - [Start of Time `.startOf(unit: string)`](#start-of-time-startofunit-string)
    - [End of Time `.endOf(unit: string)`](#end-of-time-endofunit-string)
  - [Displaying](#displaying)
    - [Format `.format(stringWithTokens: string)`](#format-formatstringwithtokens-string)
      - [List of all available formats](#list-of-all-available-formats)
    - [Difference `.diff(compared: Dayjs, unit: string (default: 'milliseconds'), float?: boolean)`](#difference-diffcompared-dayjs-unit-string-default-milliseconds-float-boolean)
    - [Unix Timestamp (milliseconds) `.valueOf()`](#unix-timestamp-milliseconds-valueof)
    - [Unix Timestamp (seconds) `.unix()`](#unix-timestamp-seconds-unix)
    - [Days in the Month `.daysInMonth()`](#days-in-the-month-daysinmonth)
    - [As Javascript Date `.toDate()`](#as-javascript-date-todate)
    - [As Array `.toArray()`](#as-array-toarray)
    - [As JSON `.toJSON()`](#as-json-tojson)
    - [As ISO 8601 String `.toISOString()`](#as-iso-8601-string-toisostring)
    - [As Object `.toObject()`](#as-object-toobject)
    - [As String `.toString()`](#as-string-tostring)
  - [Query](#query)
    - [Is Before `.isBefore(compared: Dayjs)`](#is-before-isbeforecompared-dayjs)
    - [Is Same `.isSame(compared: Dayjs)`](#is-same-issamecompared-dayjs)
    - [Is After `.isAfter(compared: Dayjs)`](#is-after-isaftercompared-dayjs)
    - [Is a Dayjs `.isDayjs()`](#is-a-dayjs-isdayjscompared-any)
  - [UTC Mode](#utc-mode)
    - [Date-Only Mode`](#date-only-mode)
    - [Is UTC `.isUTC()`](#is-utc-isutc)
    - [To UTC `.utc() | dayjs(original: Dayjs, { utc: true })`](#to-utc-utcdayjsoriginal-dayjs-utc-true)
    - [To Local `.local() | dayjs(original: Dayjs, { utc: false })`](#to-local-localdayjsoriginal-dayjs-utc-true)
    - [UTC Offset `.utcOffset()`](#utc-offset-utcoffset)
  - [Plugin APIs](#plugin-apis)
    - [RelativeTime](#relativetime)
    - [IsLeapYear](#isleapyear)
    - [WeekOfYear](#weekofyear)
    - [IsBetween](#isbetween)

## Parsing

### Constructor `dayjs(existing?: string | number | Date | Dayjs)`

Calling it without parameters returns a fresh `Dayjs` object with the current date and time.

```js
dayjs();
```

Day.js also parses other date formats.

#### [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string

```js
dayjs('2018-04-04T16:00:00.000Z');
```

#### Unix Timestamp (milliseconds since the Unix Epoch - Jan 1 1970, 12AM UTC)

```js
dayjs(1318781876406);
```

#### Native Javascript Date object

```js
dayjs(new Date(2018, 8, 18));
```

### Clone `.clone() | dayjs(original: Dayjs)`

Returns a cloned `Dayjs`.

```js
dayjs().clone();
dayjs(dayjs('2019-01-25')); // passing a Dayjs object to a constructor will also clone it
```

### Validation `.isValid()`

Returns a `boolean` indicating whether the `Dayjs`'s date is valid.

```js
dayjs().isValid();
```

## Get and Set

### Year `.year()`

Returns a `number` representing the `Dayjs`'s year.

```js
dayjs().year();
```

### Month `.month()`

Returns a `number` representing the `Dayjs`'s month.

```js
dayjs().month();
```

### Day of the Month `.date()`

Returns a `number` representing the `Dayjs`'s day of the month.

```js
dayjs().date();
```

### Day of the Week `.day()`

Returns a `number` representing the `Dayjs`'s day of the week

```js
dayjs().day();
```

### Hour `.hour()`

Returns a `number` representing the `Dayjs`'s hour.

```js
dayjs().hour();
```

### Minute `.minute()`

Returns a `number` representing the `Dayjs`'s minute.

```js
dayjs().minute();
```

### Second `.second()`

Returns a `number` representing the `Dayjs`'s second.

```js
dayjs().second();
```

### Millisecond `.millisecond()`

Returns a `number` representing the `Dayjs`'s millisecond.

```js
dayjs().millisecond();
```

### Set `.set(unit: string, value: number)`

Returns a `Dayjs` with the applied changes.

```js
dayjs().set('date', 1);
dayjs().set('month', 3); // April
dayjs().set('second', 30);
```

#### List of all available units

| Unit          | Shorthand | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `date`        |           | Date of Month                            |
| `day`         | `d`       | Day of Week (Sunday as 0, Saturday as 6) |
| `month`       | `M`       | Month                                    |
| `year`        | `y`       | Year                                     |
| `hour`        | `h`       | Hour                                     |
| `minute`      | `m`       | Minute                                   |
| `second`      | `s`       | Second                                   |
| `millisecond` | `ms`      | Millisecond                              |

## Manipulating

`Dayjs` objects can be manipulated in many ways.

```js
dayjs('2019-01-25')
  .add(1, 'day')
  .subtract(1, 'year').toString(); // Fri, 26 Jan 2018 00:00:00 GMT
```

### Add `.add(value: number, unit: string)`

Returns a cloned `Dayjs` with a specified amount of time added.

```js
dayjs().add(7, 'day');
```

### Subtract `.subtract(value: number, unit: string)`

Returns a cloned `Dayjs` with a specified amount of time subtracted.

```js
dayjs().subtract(7, 'year');
```

### Start of Time `.startOf(unit: string)`

Returns a cloned `Dayjs` set to the start of the specified unit of time.

```js
dayjs().startOf('week');
```

### End of Time `.endOf(unit: string)`

Returns a cloned `Dayjs` set to the end of the specified unit of time.

```js
dayjs().endOf('month');
```

## Displaying

### Format `.format(stringWithTokens: string)`

Returns a `string` with the `Dayjs`'s formatted date.
To escape characters, wrap them in square or culy brackets (e.g. `[G] {um}`).

```js
dayjs().format(); // current date in ISO6801, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('{YYYY} MM-DDTHH:mm:ssZ[Z]'); // '{2019} 01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY'); // '25/01/2019'
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

* More available formats `Q Do k kk X x ...` in plugin [`AdvancedFormat`](./Plugin.md#advancedformat)

### Difference `.diff(compared: Dayjs, unit: string (default: 'milliseconds'), float?: boolean)`

Returns a `number` indicating the difference of two `Dayjs`s in the specified unit.

```js
const date1 = dayjs('2019-01-25');
const date2 = dayjs('2018-06-05');
date1.diff(date2); // 20214000000
date1.diff(date2, 'months'); // 7
date1.diff(date2, 'months', true); // 7.645161290322581
date1.diff(date2, 'days'); // 233
```

### Unix Timestamp (milliseconds) `.valueOf()`

Returns the `number` of milliseconds since the Unix Epoch for the `Dayjs`.

```js
dayjs('2019-01-25').valueOf(); // 1548381600000
```

### Unix Timestamp (seconds) `.unix()`

Returns the `number` of seconds since the Unix Epoch for the `Dayjs`.

```js
dayjs('2019-01-25').unix(); // 1548381600
```

### Days in the Month `.daysInMonth()`

Returns the `number` of days in the `Dayjs`'s month.

```js
dayjs('2019-01-25').daysInMonth(); // 31
```

### As Javascript Date `.toDate()`

Returns a copy of the native `Date` object parsed from the `Dayjs` object.

```js
dayjs('2019-01-25').toDate();
```

### As Array `.toArray()`

Returns an `array` that mirrors the parameters from new Date().

```js
dayjs('2019-01-25').toArray(); // [ 2019, 0, 25, 0, 0, 0, 0 ]
```

### As JSON `.toJSON()`

Returns the `Dayjs` formatted in an ISO8601 `string`.

```js
dayjs('2019-01-25').toJSON(); // '2019-01-25T02:00:00.000Z'
```

### As ISO 8601 String `.toISOString()`

Returns the `Dayjs` formatted in an ISO8601 `string`.

```js
dayjs('2019-01-25').toISOString(); // '2019-01-25T02:00:00.000Z'
```

### As Object `.toObject()`

Returns an `object` with the date's properties.

```js
dayjs('2019-01-25').toObject();
/* { years: 2019,
     months: 0,
     date: 25,
     hours: 0,
     minutes: 0,
     seconds: 0,
     milliseconds: 0 } */
```

### As String `.toString()`

Returns a `string` representation of the date.

```js
dayjs('2019-01-25').toString(); // 'Fri, 25 Jan 2019 02:00:00 GMT'
```

## Query

### Is Before `.isBefore(compared: Dayjs)`

Returns a `boolean` indicating whether the `Dayjs`'s date is before the other supplied `Dayjs`'s.

```js
dayjs().isBefore(dayjs()); // false
```

### Is Same `.isSame(compared: Dayjs)`

Returns a `boolean` indicating whether the `Dayjs`'s date is the same as the other supplied `Dayjs`'s.

```js
dayjs().isSame(dayjs()); // true
```

### Is After `.isAfter(compared: Dayjs)`

Returns a `boolean` indicating whether the `Dayjs`'s date is after the other supplied `Dayjs`'s.

```js
dayjs().isAfter(dayjs()); // false
```

### Is a Dayjs `.isDayjs(compared: any)`

Returns a `boolean` indicating whether a variable is a dayjs object or not.

```js
dayjs.isDayjs(dayjs()); // true
dayjs.isDayjs(new Date()); // false
```

## UTC

`Day.js` instances can be initialized using a string with any time zone offset. However, the native JavaScript `Date` object used internally works only in the local time zone with the support of accessing the object value in UTC too. If no time zone is specified, the local time zone is assumed. `Day.js` follows the same principle.

`Day.js` instances can be initialized in the *UTC mode*, which makes getters, setters and formatting methods use the UTC properties of the `Date` object. It can be useful to:

* Initialize and use `Day.js` instances always in UTC, without specifying the time zone explicitly.
* Initialize and use `Day.js` instances in a *date-only mode*.

### Date-only Mode

Sometimes only the day is important; not the time. If a `Day.js` instance or a `Date` object itself is initialized with the date part only, the constructor assumes a full UTC date and automatically adds the time part:

```js
const date = dayjs('2018-09-07')
new Date('2018-09-07')
// Both assume an input "2018-09-07T00:00:00Z".
// Both initialize the date to "2018-09-07 02:00:00 +02:00" in Central Europe.
const day = date.date() // Returns 7, OK.
const day = date.hour() // Returns 2, but well, we do not use the time part.
```

Because the input is assumed in UTC, when converting to the local time zone, which is used by default in both `Day.js` instances and `Date` objects, a time zone conversion will be performed. It can change the value of the day, if the time zone offset from UTC is negative, which may be a problem:

```js
const date = dayjs('2018-09-07')
new Date('2018-09-07')
// Both assume an input "2018-09-07T00:00:00Z".
// Both initialize the date to "2018-09-06 18:00:00 -06:00" in North-East America.
const day = date.date() // Returns 6, a bad surprise.
const day = date.hour() // Returns 18, but well, we do not use the time part.
```

Switching the `Day.js` instance to the UTC mode will not change the initialization or value of the internal `Date` object, so that any date computations and comparisons with other `Day.js` instances will be correct. However, getters, setters and formatting methods will use date parts in UTC, making at appear, that no conversion to the local time zone took place.

```js
const date = dayjs('2018-09-07', { utc: true })
const date = dayjs('2018-09-07').utc()
// Both assume an input "2018-09-07T00:00:00Z".
// Both initialize the date to "2018-09-06 18:00:00 -06:00" in North-East America.
// Both remember to use UTC date parts on the interface of Day.js.
const day = date.date() // Returns 7, OK.
const day = date.hour() // Returns 0, OK; well, we do not use the time part.
```

### Is UTC `.isUTC()`

Returns a `boolean` indicating whether the `Dayjs` instance works in the UTC mode or not.

```js
dayjs().isUTC(); // Returns false
dayjs().utc().isUTC(); // Returns true
```

### To UTC `.utc() | dayjs(original: Dayjs, { utc: true })`

Returns a cloned `Dayjs` instance in the UTC mode. The UTC mode will be retained, when cloning the `Day.js` instance further, unless `utc: false` is specified.

```js
dayjs().utc();
dayjs('2019-01-25', { utc: true });
dayjs().utc().clone(); // continues in the UTC mode
dayjs(dayjs('2019-01-25', { utc: true })); // continues in the UTC mode
```

### To Local `.local() | dayjs(original: Dayjs, { utc: false })`

Returns a cloned `Dayjs` instance in the local time zone mode. The local time zone mode will be retained, when cloning the `Day.js` instance further, unless `utc: true` is specified. It is also the default mode of constructing a new `Day.js` instance.

```js
dayjs('2019-01-25', { utc: true }).local();
dayjs('2019-01-25 15:43', { utc: false }); // default, not necessary
dayjs('2019-01-25', { utc: true }).local().clone(); // continues in the local mode
dayjs(dayjs().utc().local()); // continues in the local mode
```

### UTC Offset `.utcOffset()`

Returns an offset of the `Dayjs`'s instance to UTC in minutes. It is a negative offset like `Date.prototype.getTimezoneOffset` returns it. If it is *added* to a zoned time, a time in UTC will be obtained.

```js
const date = dayjs('2019-01-25 15:43');
const offset = date.utcOffset() // Returns -60 in Central Europe
```

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

### IsBetween

`.isBetween` to check if a date is between two other dates

plugin [`IsBetween`](./Plugin.md#isbetween)
