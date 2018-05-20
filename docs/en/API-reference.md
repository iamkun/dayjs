# API Reference

Instead of modifying the native `Date.prototype`, Day.js creates a wrapper for the Date object, called `Dayjs` object.

The `Dayjs` object is immutable, that is, all API operations that change the `Dayjs` object in some way will return a new instance of it.

- [API Reference](#api-reference)
  - [Parsing](#parsing)
    - [Constructor `.dayjs(existing?: string | number | Date | Dayjs)`](#constructor-dayjsexisting-string-number-date-dayjs)
      - [ISO 8601 string](#iso-8601httpsenwikipediaorgwikiiso8601-string)
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
    - [Difference `.diff(unit: string (default: 'milliseconds'))`](#difference-diffunit-string-default-milliseconds)
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
    - [Is Leap Year `.isLeapYear()`](#is-leap-year-isleapyear)

## Parsing

### Constructor `.dayjs(existing?: string | number | Date | Dayjs)`

Calling it without parameters returns a fresh `Dayjs` object with the current date and time, just like `new Date()` or `moment.now()`.

```js
dayjs();
```

Day.js also parses other date formats.

#### [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string

```js
dayjs(String);
dayjs('1995-12-25');
```

#### Unix Timestamp (milliseconds since the Unix Epoch - Jan 1 1970, 12AM UTC)

```js
dayjs(Number);
dayjs(1318781876406);
```

#### Native Javascript Date object

```js
dayjs(Date);
dayjs(new Date(2018, 8, 18));
```

### Clone `.clone() | dayjs(original: Dayjs)`

Returns a cloned `Dayjs` object.

```js
dayjs().clone();
dayjs(Dayjs); // passing a Dayjs object to a constructor will also clone it
```

### Validation `.isValid()`

Returns a boolean indicating whether the `Dayjs` object's date is valid.

```js
dayjs().isValid();
```

## Get and Set

### Year `.year()`

Returns a number representing the `Dayjs` object's year.

```js
dayjs().year();
```

### Month `.month()`

Returns a number representing the `Dayjs` object's month.

```js
dayjs().month();
```

### Day of the Month `.date()`

Returns a number representing the `Dayjs` object's day of the month.

```js
dayjs().date();
```

### Day of the Week `.day()`

Returns a number representing the `Dayjs` object's day of the week

```js
dayjs().day();
```

### Hour `.hour()`

Returns a number representing the `Dayjs` object's hour.

```js
dayjs().hour();
```

### Minute `.minute()`

Returns a number representing the `Dayjs` object's minute.

```js
dayjs().minute();
```

### Second `.second()`

Returns a number representing the `Dayjs` object's second.

```js
dayjs().second();
```

### Millisecond `.millisecond()`

Returns a number representing the `Dayjs` object's millisecond.

```js
dayjs().millisecond();
```

### Set `.set(unit: string, value: number)`

Returns a `Dayjs` object with the applied changes.

```js
dayjs().set('month', 3).set('year', 2020); // April 2020
```

## Manipulating

`Dayjs` objects can be manipulated in many ways.

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .subtract(1, 'year');
```

### Add `.add(value: number, unit: string)`

Returns a Dayjs object.

```js
dayjs().add(7, 'day');
```

### Subtract `.subtract(value: number, unit: string)`

Returns a Dayjs object.

```js
dayjs().subtract(7, 'year');
```

### Start of Time `.startOf(unit: string)`

Returns a Dayjs object set to the end of the specified unit of time.

```js
dayjs().startOf('week');
```

### End of Time `.endOf(unit: string)`

Returns a Dayjs object set to the end of the specified unit of time.

```js
dayjs().endOf('month');
dayjs().endOf('year');
```

## Displaying

### Format `.format(stringWithTokens: string)`

Returns a formatted string.
To escape characters, wrap them in square or culy brackets (e.g. `[G] {um}`).

```js
dayjs().format(); // "2020-04-02T08:02:17-05:00" (ISO 8601, no fractional seconds)

dayjs().format('{YYYY} MM-DDTHH:mm:ssZ[Z]'); // "{2020} 04-02T08:02:17-05:00Z"

dayjs().format('DD/MM/YYYY'); // "02/04/2020"
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

### Difference `.diff(unit: string (default: 'milliseconds'))`

Returns a number indicating the difference of two `Dayjs` objects in the specified unit

```js
dayjs().diff(Dayjs, unit);
dayjs().diff(dayjs(), 'years'); // 0
```

### Unix Timestamp (milliseconds) `.valueOf()`

Returns the number of milliseconds since the Unix Epoch.

```js
dayjs().valueOf();
```

### Unix Timestamp (seconds) `.unix()`

Returns the number of seconds since the Unix Epoch.

```js
dayjs().unix();
```

### Days in the Month `.daysInMonth()`

Returns the number of days in the `Dayjs` object's month.

```js
dayjs().daysInMonth();
```

### As Javascript Date `.toDate()`

Returns a copy of the native `Date` object parsed from the `Dayjs` object.

```js
dayjs().toDate();
```

### As Array `.toArray()`

Returns an array that mirrors the parameters from new Date().

```js
dayjs().toArray(); //[2018, 8, 18, 00, 00, 00, 000];
```

### As JSON `.toJSON()`

Returns an ISO8601 string.

```js
dayjs().toJSON(); //"2018-08-08T00:00:00.000Z"
```

### As ISO 8601 String `.toISOString()`

Returns an ISO8601 string.

```js
dayjs().toISOString();
```

### As Object `.toObject()`

Returns an object with year, month, `...`, millisecond.

```js
dayjs().toObject();
// { years: 2018, months: 8, date: 18, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
```

### As String `.toString()`

Returns a string.

```js
dayjs().toString();
```

## Query

### Is Before `.isBefore(compared: Dayjs)`

Returns a boolean indicating whether the `Dayjs` object's date is before a supplied `Dayjs` object's.

```js
dayjs().isBefore(Dayjs);
dayjs().isBefore(dayjs()); // false
```

### Is Same `.isSame(compared: Dayjs)`

Returns a boolean indicating whether the `Dayjs` object's date is the same as a supplied `Dayjs` object's.

```js
dayjs().isSame(Dayjs);
dayjs().isSame(dayjs()); // true
```

### Is After `.isAfter(compared: Dayjs)`

Returns a boolean indicating whether the `Dayjs` object's date is after a supplied `Dayjs` object's.

```js
dayjs().isAfter(Dayjs);
dayjs().isAfter(dayjs()); // false
```

### Is Leap Year `.isLeapYear()`

Returns a boolean indicating whether the `Dayjs` object's year is a leap year or not.

```js
dayjs().isLeapYear();
dayjs('2000-01-01').isLeapYear(); // true
```
