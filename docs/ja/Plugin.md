# プラグインリスト

プラグインとは、 Day.js の機能を拡張したり、新たな機能を追加するための独立したモジュールのことです。

デフォルトでは Day.js にはコアコードのみがあり、プラグインはインストールされていません。

必要に応じて複数のプラグインを読み込むことができます。

## API

#### 拡張

- dayjs オブジェクトを返します

プラグインの使用例です。

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // プラグインのオプションを指定
```

## インストール

- NPM を使う場合:

```javascript
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat' // 必要に応じて読み込み

dayjs.extend(advancedFormat) // プラグインを使用
```

- CDN を使う場合:

```html
<script src="https://unpkg.com/dayjs"></script>
<!-- プラグインを window.dayjs_plugin_NAME として読み込み -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat)
</script>
```

## 公式プラグイン

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

- AdvancedFormat はより多様なフォーマットを表現するために `dayjs().format` API を拡張するプラグインです。

```javascript
import AdvancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(AdvancedFormat)

dayjs().format('Q Do k kk X x')
```

追加されるフォーマットの一覧:

| フォーマット | 出力             | 説明                         |
| ------------ | ---------------- | ---------------------------- |
| `Q`          | 1-4              | 四半期                       |
| `Do`         | 1st 2nd ... 31st | 序数付きの日                 |
| `k`          | 1-24             | 1 始まりの時間               |
| `kk`         | 01-24            | 1 始まりで 2 桁の時間        |
| `X`          | 1360013296       | Unix タイムスタンプ (秒)     |
| `x`          | 1360013296123    | Unix タイムスタンプ (ミリ秒) |

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

- RelativeTime は日付を文字列で表現された相対的な時刻(例： 3 hours ago)にフォーマットする `.from` `.to` `.fromNow` `.toNow` API を追加します。

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

- String を返します

ある日付から現在を見た時の相対的な時刻を返します。

#### Time from X `.from(compared: Dayjs, withoutSuffix?: boolean)`

- String を返します

ある日付から引数として渡した日付を見た時の相対的な時刻を返します。

#### Time to now `.toNow(withoutSuffix?: boolean)`

- String を返します

現在からある日付を見た時の相対的な時刻を返します。

#### Time to X `.to(compared: Dayjs, withoutSuffix?: boolean)`

- String を返します

引数として渡した日付からある日付を見た時の相対的な時刻を返します。

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

- IsLeapYear はある `Dayjs` オブジェクトがうるう年かどうかを Boolean で返す `.isLeapYear` API を追加します。

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear() // true
```

### BuddhistEra

- BuddhistEra は仏滅紀元 (仏暦、B.E.) を表現するフォーマットを提供するために `dayjs().format` API を拡張します。
- 仏滅紀元（ぶつめつきげん、英：Buddhist calendar）とは、釈迦が入滅したとされる年、またはその翌年を元年とする紀年法である。
  仏暦（ぶつれき）ともいう。東南アジアの仏教徒の多い国などで用いられている。([Wikipedia](https://ja.wikipedia.org/wiki/%E4%BB%8F%E6%BB%85%E7%B4%80%E5%85%83))
- 手動で仏暦を計算するには、ちょうど 543 を年に足します。例として西暦 1977 年 5 月 26 日は仏暦 2520 年 5 月 26 日と表示されます。(1977 + 543)

```javascript
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.extend(buddhistEra)

dayjs().format('BBBB BB')
```

追加されるフォーマットの一覧:

| フォーマット | 出力 | 説明                  |
| ------------ | ---- | --------------------- |
| `BBBB`       | 2561 | 完全な仏暦 (年 + 543) |
| `BB`         | 61   | 2 桁の仏暦            |

### IsSameOrAfter

- IsSameOrAfter はある日付が別の日付と同じまたはそれ以降であるかどうかを `Boolean` で返す `.isSameOrAfter()` API を追加します。

```javascript
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrAfter)

dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year')
```

### IsSameOrBefore

- IsSameOrBefore はある日付が別の日付と同じまたはそれ以前であるかどうかを `boolean` で返す `.isSameOrBefore()` API を追加します。

```javascript
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

dayjs('2010-10-20').isSameOrBefore('2010-10-19', 'year')
```

### IsBetween

- IsBetween はある日付が別の 2 つの日付の間にあるかどうかを `Boolean` で返す `.isBetween()` API を追加します。

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

- WeekOfYear はある `Dayjs` オブジェクトがその年の何週目であるかを `Number` で返す `.week()` API を追加します。

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

dayjs('2018 5月 15', 'YYYY MMMM DD', 'ja')
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
| `Do`   | 1st... 31st      | 序数付きの日                      |

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

## カスタマイズ

さまざまなニーズに合わせて独自の Day.js プラグインを構築することができます。

あなたのプラグインを共有する pull request を是非送ってみてください。

以下は Day.js プラグインのテンプレートです。

```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // dayjs() を拡張する
  // 例) dayjs().isSameOrBefore() を追加
  dayjsClass.prototype.isSameOrBefore = function(arguments) {}

  // dayjs() を拡張する
  // 例) dayjs().utc() を追加
  dayjsFactory.utc = arguments => {}

  // 既存 API の上書き
  // 例) dayjs().format() を拡張
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function(arguments) {
    // 既存のフォーマット
    const result = oldFormat(arguments)
    // 変更後のフォーマット
  }
}
```
