# Plugin List

플러그인은 기능을 확장하거나 새로운 기능을 추가하기 위해 Day.js에 추가할 수 있는 독립적인 모듈입니다.

기본적으로 Day.js에는 코어 코드만 있고 플러그인이 설치되어있지 않습니다.

필요에 따라 여러개의 플러그인을 로드할 수 있습니다.

## API

#### Extend

- dayjs를 반환합니다.

플러그인을 사용합니다.

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // with plugin options
```

## Installation

- NPM:

```javascript
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat' // load on demand

dayjs.extend(AdvancedFormat) // use plugin
```

- CDN:

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

- AdvancedFormat은 더 많은 형식 옵션을 제공하기위해 `dayjs().format` API를 확장합니다.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

dayjs().format('Q Do k kk X x')
```

추가된 형식 목록:

| Format | Output           | Description                  |
| ------ | ---------------- | ---------------------------- |
| `Q`    | 1-4              | 분기                         |
| `Do`   | 1st 2nd ... 31st | 서수형식의 일자 명           |
| `k`    | 1-24             | 시간, 1부터 시작             |
| `kk`   | 01-24            | 시간, 2자리 표현, 1부터 시작 |
| `X`    | 1360013296       | 유닉스 타임스템프, 초        |
| `x`    | 1360013296123    | 유닉스 타임스탬프, 밀리 초   |

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

- RelativeTime은 `.from`, `.to`, `.fromNow`, `.toNow` API를 추가하여 날짜를 상대 시간 문자열(예: 3 시간전) 으로 표시합니다.

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

지금 시간부터 상대시간을 `string`으로 반환합니다.

#### Time from X `.from(compared: Dayjs, withoutSuffix?: boolean)`

X 시간으로부터 상대시간을 `string`으로 반환합니다..

#### Time to now `.toNow(withoutSuffix?: boolean)`

지금 시간부터 상대시간을 `string`으로 반환합니다.

#### Time to X `.to(compared: Dayjs, withoutSuffix?: boolean)`

X 시간부터 상대시간을 `string`으로 반환합니다.

| 범위              | Key | 간단 출력              |
| ----------------- | --- | ---------------------- |
| 0 초 ~ 44 초      | s   | 몇 초 전               |
| 45 초 ~ 89 초     | m   | 1 분 전                |
| 90 초 ~ 44 분     | mm  | 2 분 전 ~ 44 분 전     |
| 45 분 ~ 89 분     | h   | 한 시간 전             |
| 90 분 ~ 21 시간   | hh  | 2 시간 전 ~ 21 시간 전 |
| 22 시간 ~ 35 시간 | d   | 하루 전                |
| 36 시간 ~ 25 일   | dd  | 이틀 전 ~ 25 일 전     |
| 26 일 ~ 45 일     | M   | 한달 전                |
| 46 일 ~ 10 달     | MM  | 두달 전 ~ 10 달 전     |
| 11 달 ~ 17 달     | y   | 일년 전                |
| 18 달 이상        | yy  | 2 년 전 ~ 20 년 전     |

### IsLeapYear

- IsLeapYear은 `.isLeapYear` API를 추가하여 `Dayjs`의 년이 윤년인 경우 `boolean`으로 값을 반환합니다.

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear() // true
```

### BuddhistEra

- BuddhistEra는 Buddhist Era (B.E.) 형식 옵션을 제공하기 위해 `dayjs().format` API를 확장합니다.
- Buddhist Era 는 캄보디아, 라오스, 미얀마, 태국 그리고 스리랑카, 말레이시아 및 싱가포르의 중국인들에게 종교적 또는 공식적인 행사로 주로 사용하는 1년 단위 번호 체계입니다.([Wikipedia](https://en.wikipedia.org/wiki/Buddhist_calendar))
- To calculate BE year manually, just add 543 to year. For example 26 May 1977 AD/CE should display as 26 May 2520 BE (1977 + 543)
- BE 년도를 수동으로 계산 시, 연도에 543년 더합니다. 예를 들어, 1977년 5월 26일 AD/CE는 2520년 5월 26일 BE(1977 + 543) 입니다.

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

- IsSameOrAfter는 `.isSameOrAfter()` API를 추가하여 날짜가 다른 날짜와 같거나 나중일 경우 `boolean`으로 값을 반환합니다.

```javascript
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrAfter)

dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year')
```

### IsSameOrBefore

- IsSameOrBefore는 `.isSameOrBefore()` API를 추가하여 날짜가 다른 날짜와 같거나 전일 경우 `boolean`으로 값을 반환합니다.

```javascript
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

dayjs('2010-10-20').isSameOrBefore('2010-10-19', 'year')
```

### IsBetween

- IsBetween은 `.isBetween()` API를 추가하여 두 날짜가 같을 경우 `boolean`으로 값을 반환합니다.

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

- WeekOfYear은 `.week()` API를 추가하여 `Dayjs`의 년의 주를 `number`로 반환 합니다.

```javascript
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('06/27/2018').week() // 26
dayjs('2018-06-27').week(5) // set week
```

### QuarterOfYear

- QuarterOfYear add `.quarter()` API to return to which quarter of the year belongs a date, and extends `.add`, `.subtract`, `.startOf`, `.endOf` API to support unit `quarter`.

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

dayjs('2018 5월 15', 'YYYY MMMM DD', 'ko')
// Returns an instance containing '2018-05-15T00:00:00.000Z'
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
| `Do`   | 1st... 31st      | 서수형식의 일자 명                |

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

## Customize

다양한 요구를 충족하기위해 자신만의 Day.js 플러그인을 만들 수 있습니다.

플러그인을 제작하고 풀 리퀘스트하여 공유하세요.

Day.js 플러그인 템플릿

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
