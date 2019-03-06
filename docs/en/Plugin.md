# Plugin List

A plugin is an independent module that can be added to Day.js to extend functionality or add new features.

By default, Day.js comes with core code only and no installed plugin.

You can load multiple plugins based on your need.

## API

#### Extend

- Returns dayjs

Use a plugin.

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // with plugin options
```

## Installation

- Via NPM:

```javascript
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat' // load on demand

dayjs.extend(AdvancedFormat) // use plugin
```

- Via CDN:

```html
<script src="https://unpkg.com/dayjs"></script>
<!-- Load plugin as window.dayjs_plugin_NAME -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat)
</script>
```

## List of official plugins

### UTC

- UTC adds `.utc` `.local` `.isUTC` APIs to parse or display in UTC.

By default, Day.js parses and displays in local time.

If you want to parse or display in UTC, you can use dayjs.utc() instead of dayjs().

#### dayjs.utc `dayjs.utc(dateType?: string | number | Date | Dayjs, format? string)`

Returns a fresh `Dayjs` object in UTC mode.

#### Use UTC time `.utc()`

Returns a cloned `Dayjs` object with a flag to use UTC time.

#### Use local time `.local()`

Returns a cloned `Dayjs` object with a flag to use local time.

#### isUTC mode `.isUTC()`

Returns a `boolean` indicating current `Dayjs` object is in UTC mode or not.

```javascript
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

// default local time
dayjs().format() //2019-03-06T17:11:55+08:00
// UTC mode
dayjs.utc().format() // 2019-03-06T09:11:55Z
dayjs().utc().format() // 2019-03-06T09:11:55Z
// While in UTC mode, all display methods will display in UTC time instead of local time.
// And all getters and setters will internally use the Date#getUTC* and Date#setUTC* methods instead of the Date#get* and Date#set* methods.
dayjs.utc().isUTC() // true
dayjs.utc().local().format() //2019-03-06T17:11:55+08:00
dayjs.utc('2018-01-01', 'YYYY-MM-DD') // with CustomParseFormat plugin
```

### AdvancedFormat

- AdvancedFormat extends `dayjs().format` API to supply more format options.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

dayjs().format('Q Do k kk X x')
```

List of added formats:

| Format | Output           | Description                        |
| ------ | ---------------- | ---------------------------------- |
| `Q`    | 1-4              | Quarter                            |
| `Do`   | 1st 2nd ... 31st | Day of Month with ordinal          |
| `k`    | 1-24             | The hour, beginning at 1           |
| `kk`   | 01-24            | The hour, 2-digits, beginning at 1 |
| `X`    | 1360013296       | Unix Timestamp in second           |
| `x`    | 1360013296123    | Unix Timestamp in millisecond      |

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

dayjs().from(dayjs('1990')) // 2 years ago
dayjs().from(dayjs(), true) // 2 years

dayjs().fromNow()

dayjs().to(dayjs())

dayjs().toNow()
```

#### Time from now `.fromNow(withoutSuffix?: boolean)`

Returns the `string` of relative time from now.

#### Time from X `.from(compared: Dayjs, withoutSuffix?: boolean)`

Returns the `string` of relative time from X.

#### Time to now `.toNow(withoutSuffix?: boolean)`

Returns the `string` of relative time to now.

#### Time to X `.to(compared: Dayjs, withoutSuffix?: boolean)`

Returns the `string` of relative time to X.

| Range                    | Key | Sample Output                    |
| ------------------------ | --- | -------------------------------- |
| 0 to 44 seconds          | s   | a few seconds ago                |
| 45 to 89 seconds         | m   | a minute ago                     |
| 90 seconds to 44 minutes | mm  | 2 minutes ago ... 44 minutes ago |
| 45 to 89 minutes         | h   | an hour ago                      |
| 90 minutes to 21 hours   | hh  | 2 hours ago ... 21 hours ago     |
| 22 to 35 hours           | d   | a day ago                        |
| 36 hours to 25 days      | dd  | 2 days ago ... 25 days ago       |
| 26 to 45 days            | M   | a month ago                      |
| 46 days to 10 months     | MM  | 2 months ago ... 10 months ago   |
| 11 months to 17months    | y   | a year ago                       |
| 18 months+               | yy  | 2 years ago ... 20 years ago     |

### IsLeapYear

- IsLeapYear adds `.isLeapYear` API to returns a `boolean` indicating whether the `Dayjs`'s year is a leap year or not.

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear() // true
```

### BuddhistEra

- BuddhistEra extends `dayjs().format` API to supply Buddhist Era (B.E.) format options.
- Buddhist Era is a year numbering system that primarily used in mainland Southeast Asian countries of Cambodia, Laos, Myanmar and Thailand as well as in Sri Lanka and Chinese populations of Malaysia and Singapore for religious or official occasions ([Wikipedia](https://en.wikipedia.org/wiki/Buddhist_calendar))
- To calculate BE year manually, just add 543 to year. For example 26 May 1977 AD/CE should display as 26 May 2520 BE (1977 + 543)

```javascript
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.extend(buddhistEra)

dayjs().format('BBBB BB')
```

List of added formats:

| Format | Output | Description               |
| ------ | ------ | ------------------------- |
| `BBBB` | 2561   | Full BE Year (Year + 543) |
| `BB`   | 61     | 2-digit of BE Year        |

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

- IsBetween adds `.isBetween()` API to returns a `boolean` indicating if a date is between two other dates.

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

- WeekOfYear adds `.week()` API to returns a `number` indicating the `Dayjs`'s week of the year.

```javascript
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('2018-06-27').week() // 26
dayjs('2018-06-27').week(5) // set week
```

### QuarterOfYear

- QuarterOfYear add `.quarter()` API to return to which quarter of the year belongs a date

```javascript
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

dayjs('2010-04-01').quarter() // 2
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
| `Z`    | -5:00            | Offset from UTC                   |
| `ZZ`   | -0500            | Compact offset from UTC, 2-digits |
| `A`    | AM PM            | Post or ante meridiem, upper-case |
| `a`    | am pm            | Post or ante meridiem, lower-case |

## Customize

You could build your own Day.js plugin to meet different needs.

Feel free to open a pull request to share your plugin.

Template of a Day.js plugin.

```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // extend dayjs()
  // e.g. add dayjs().isSameOrBefore()
  dayjsClass.prototype.isSameOrBefore = function(arguments) {}

  // extend dayjs
  // e.g. add dayjs.utc()
  dayjsFactory.utc = arguments => {}

  // overriding existing API
  // e.g. extend dayjs().format()
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function(arguments) {
    // original format result
    const result = oldFormat(arguments)
    // return modified result
  }
}
```
