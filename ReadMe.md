English | [简体中文](./ReadMe.zh-CN.md)

<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Fast <b>2kB</b> alternative to Moment.js with the same modern API</p>
<br>
<p align="center">
    <a href="https://unpkg.com/dayjs/dist/dayjs.min.js"><img
            src="http://img.badgesize.io/https://unpkg.com/dayjs/dist/dayjs.min.js?compression=gzip&style=flat-square"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/dayjs"><img src="https://img.shields.io/npm/v/dayjs.svg?style=flat-square"
                                                       alt="NPM Version"></a>
    <a href="https://travis-ci.org/xx45/dayjs"><img
            src="https://img.shields.io/travis/xx45/dayjs/master.svg?style=flat-square" alt="Build Status"></a>
    <a href="https://codecov.io/gh/xx45/dayjs"><img
            src="https://img.shields.io/codecov/c/github/xx45/dayjs/master.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://github.com/xx45/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/npm/l/dayjs.svg?style=flat-square" alt="License"></a>
</p>

> Day.js is a minimalist JavaScript library for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Familiar Moment.js API & patterns
* 💪 Immutable
* 🔥 Chainable
* 📦 2kb mini library
* 👫 All browsers support

---

## Installation

You have multiple ways of getting Day.js:

* Via NPM:

```console
npm install dayjs --save
```

```js
var dayjs = require('dayjs');
dayjs().format();
```

* Via CDN:

```html
<!-- Latest compiled and minified JavaScript -->
<script src="https://unpkg.com/dayjs"></script>
<script>
  dayjs().format();
</script>
```

* Via download and self-hosting:

Just download the latest version of Day.js at [https://unpkg.com/dayjs](https://unpkg.com/dayjs)

## Getting Started

Instead of modifying the native `Date.prototype`, Day.js creates a wrapper for the Date object, called `Dayjs` object.
`Dayjs` object is immutable, that is to say, all API operation will return a new `Dayjs` object.

## API

API will always return a new `Dayjs` object if not specified.

* [Parse](#parse)
  * [Now](#now)
  * [String](#string)
  * [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds)
  * [Date](#date)
  * [Clone](#clone)
  * [Validation](#validation)
* [Get + Set](#get--set)
  * [Year](#year)
  * [Month](#month)
  * [Date of Month](#date-of-month)
  * [Hour](#hour)
  * [Minute](#minute)
  * [Second](#second)
  * [Millisecond](#millisecond)
  * [Set](#set)
* [Manipulate](#manipulate)
  * [Add](#add)
  * [Subtract](#subtract)
  * [Start of Time](#start-of-time)
  * [End of Time](#end-of-time)
* [Display](#display)
  * [Format](#format)
  * [Difference](#different)
  * [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds-1)
  * [Unix Timestamp (seconds)](#unix-timestamp-seconds)
  * [Days in Month](#days-in-month)
  * [As Javascript Date](#as-javascript-date)
  * [As Array](#as-array)
  * [As JSON](#as-json)
  * [As ISO 8601 String](#as-iso-8601-string)
  * [As Object](#as-object)
  * [As String](#as-string)
* [Query](#query)
  * [Is Before](#is-before)
  * [Is Same](#is-same)
  * [Is After](#is-after)
  * [Is Leap Year](#is-leap-year)

---

### Parse

Simply call `dayjs()` with one of the supported input types.

#### Now

To get the current date and time, just call dayjs() with no parameters.

```js
dayjs();
```

### String

Creating from a string matches [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

```js
dayjs(String);
dayjs('1995-12-25');
```

### Unix Timestamp (milliseconds)

Passing an integer value representing the number of milliseconds since the Unix Epoch (Jan 1 1970 12AM UTC).

```js
dayjs(Number);
dayjs(1318781876406);
```

### Date

Passing a pre-existing native Javascript Date object.

```js
dayjs(Date);
dayjs(new Date(2018, 8, 18));
```

### Clone

All `Dayjs` are immutable. If you want a copy of the object, just call `.clone()`.
Calling dayjs() on a `Dayjs` object will also clone it.

```js
dayjs(Dayjs);
dayjs().clone();
```

### Validation

* returns a Boolean

Check whether the `Dayjs` object considers the date invalid.

```js
dayjs().isValid();
```

---

### Get + Set

Get and set date.

#### Year

* returns a Number

Get year.

```js
dayjs().year();
```

#### Month

* returns a Number

Get month.

```js
dayjs().month();
```

#### Date of Month

* returns a Number

Get day of the month.

```js
dayjs().date();
```

#### Hour

* returns a Number

Get hour.

```js
dayjs().hour();
```

#### Minute

* returns a Number

Get minute.

```js
dayjs().minute();
```

#### Second

* returns a Number

Get second.

```js
dayjs().second();
```

#### Millisecond

* returns a Number

Get millisecond.

```js
dayjs().millisecond();
```

#### Set

Date setter.
Units are case insensitive

```js
dayjs().set((unit: String), (value: Int));
dayjs().set('month', 3); // April
dayjs().set('second', 30);
```

---

### Manipulate

Once you have a `Dayjs` object, you may want to manipulate it in some way like this:

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .subtract(1, 'year');
```

#### Add

Returns a new `Dayjs` object by adding time.

```js
dayjs().add((value: Number), (unit: String));
dayjs().add(7, 'day');
```

#### Subtract

Returns a new `Dayjs` object by subtracting time. exactly the same as `dayjs#add`.

```js
dayjs().subtract((value: Number), (unit: String));
dayjs().subtract(7, 'year');
```

#### Start of Time

Returns a new `Dayjs` object by by setting it to the start of a unit of time.

```js
dayjs().startOf((unit: String));
dayjs().startOf('year');
```

#### End of Time

Returns a new `Dayjs` object by by setting it to the end of a unit of time.

```js
dayjs().endOf((unit: String));
dayjs().endOf('month');
```

---

### Display

Once parsing and manipulation are done, you need some way to display the `Dayjs` object.

#### Format

* returns a String

Takes a string of tokens and replaces them with their corresponding date values.

```js
dayjs().format(String);
dayjs().format(); // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
dayjs().format('[YYYY] MM-DDTHH:mm:ssZ'); // "[2014] 09-08T08:02:17-05:00"
```

List of all available formats:

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | Two digit year                        |
| `YYYY` | 2018             | Four digit year                       |
| `M`    | 1-12             | The month, beginning at 1             |
| `MM`   | 01-12            | The month, with preceeding 0          |
| `MMM`  | Jan-Dec          | The abbreviated month name            |
| `MMMM` | January-December | The full month name                   |
| `D`    | 1-31             | The day of the month                  |
| `DD`   | 01-31            | The day of the month, preceeding 0    |
| `d`    | 0-6              | The day of the week, with Sunday as 0 |
| `dddd` | Sunday-Saturday  | The name of the day of the week       |
| `H`    | 0-23             | The hour                              |
| `HH`   | 00-23            | The hour, with preceeding 0           |
| `m`    | 0-59             | The minute                            |
| `mm`   | 00-59            | The minute, with preceeding 0         |
| `s`    | 0-59             | The second                            |
| `ss`   | 00-59            | The second, with preceeding 0         |
| `Z`    | +5:00            | The offset from UTC                   |
| `ZZ`   | +0500            | The offset from UTC with preceeding 0 |

#### Difference

* returns a Number

Get the difference of two `Dayjs` object in milliseconds or other unit.

```js
dayjs().diff(Dayjs, unit);
dayjs().diff(dayjs(), 'years'); // 0
```

#### Unix Timestamp (milliseconds)

* returns a Number

Outputs the number of milliseconds since the Unix Epoch

```js
dayjs().valueOf();
```

#### Unix Timestamp (seconds)

* returns a Number

Outputs a Unix timestamp (the number of seconds since the Unix Epoch).

```js
dayjs().unix();
```

#### Days in Month

* returns a Number

Get the number of days in the current month.

```js
dayjs().daysInMonth();
```

#### As Javascript Date

* returns a Javascript `Date` object

Get copy of the native `Date` object from `Dayjs` object.

```js
dayjs().toDate();
```

#### As Array

* returns a Array

Returns an array that mirrors the parameters from new Date().

```js
dayjs().toArray(); //[2018, 8, 18, 00, 00, 00, 000];
```

#### As JSON

* returns a JSON String

Serializing an `Dayjs` to JSON, will return an ISO8601 string.

```js
dayjs().toJSON(); //"2018-08-08T00:00:00.000Z"
```

#### As ISO 8601 String

* returns a String

Formats a string to the ISO8601 standard.

```js
dayjs().toISOString();
```

#### As Object

* returns a Object

Returns an object with year, month ... millisecond.

```js
dayjs().toObject(); // { years:2018, months:8, date:18, hours:0, minutes:0, seconds:0, milliseconds:0}
```

#### As String

* returns a String

```js
dayjs().toString();
```

---

### Query

#### Is Before

* returns a Boolean

Check if a `Dayjs` object is before another `Dayjs` object.

```js
dayjs().isBefore(Dayjs);
dayjs().isBefore(dayjs()); // false
```

#### Is Same

* returns a Boolean

Check if a `Dayjs` object is same as another `Dayjs` object.

```js
dayjs().isSame(Dayjs);
dayjs().isSame(dayjs()); // true
```

#### Is After

* returns a Boolean

Check if a `Dayjs` object is after another `Dayjs` object.

```js
dayjs().isAfter(Dayjs);
dayjs().isAfter(dayjs()); // false
```

#### Is Leap Year

* returns a Boolean

Check if a year is a leap year.

```js
dayjs().isLeapYear();
dayjs('2000-01-01').isLeapYear(); // true
```

---

## License

MIT
