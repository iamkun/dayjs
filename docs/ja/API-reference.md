## API Reference

Day.js は組み込みの `Date.prototype` を変更する代わりに `Dayjs` オブジェクトと呼ばれる Date オブジェクトのラッパーを作成します。

`Dayjs` オブジェクトは不変 (immutable) です。すなわち、すべての API 操作は新しい `Dayjs` オブジェクトを返します。

- [API Reference](#api-reference)
- [Parsing](#parsing)
  - [Constructor `dayjs(dateType?: string | number | Date | Dayjs)`](#constructor-dayjsdatetype-string--number--date--dayjs)
    - [ISO 8601 形式](#iso-8601-%E5%BD%A2%E5%BC%8F)
    - [Native Javascript Date object](#native-javascript-date-object)
    - [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds)
  - [Unix Timestamp (seconds) `.unix(value: number)`](#unix-timestamp-seconds-unixvalue-number)
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
  - [Difference `.diff(compared: Dayjs, unit: string (default: 'milliseconds'), float?: boolean)`](#difference-diffcompared-dayjs-unit-string-default-milliseconds-float-boolean)
  - [Unix Timestamp (milliseconds) `.valueOf()`](#unix-timestamp-milliseconds-valueof)
  - [Unix Timestamp (seconds) `.unix()`](#unix-timestamp-seconds-unix)
  - [UTC Offset (minutes) `.utcOffset()`](#utc-offset-minutes-utcoffset)
  - [Days in the Month `.daysInMonth()`](#days-in-the-month-daysinmonth)
  - [As Javascript Date `.toDate()`](#as-javascript-date-todate)
  - [As JSON `.toJSON()`](#as-json-tojson)
  - [As ISO 8601 String `.toISOString()`](#as-iso-8601-string-toisostring)
  - [As String `.toString()`](#as-string-tostring)
- [Query](#query)
  - [Is Before `.isBefore(compared: Dayjs, unit?: string)`](#is-before-isbeforecompared-dayjs-unit-string)
  - [Is Same `.isSame(compared: Dayjs, unit?: string)`](#is-same-issamecompared-dayjs-unit-string)
  - [Is After `.isAfter(compared: Dayjs, unit?: string)`](#is-after-isaftercompared-dayjs-unit-string)
  - [Is a Dayjs `.isDayjs(compared: any)`](#is-a-dayjs-isdayjscompared-any)
- [UTC](#utc)
- [Plugin APIs](#plugin-apis)

## Parsing

### Constructor `dayjs(dateType?: string | number | Date | Dayjs)`

パラメータなしで実行すると現在の日付と時刻を持った新しい`Dayjs`オブジェクトを返します。

```js
dayjs()
```

Day.js は他の日付フォーマットもパースします。

#### [ISO 8601](https://ja.wikipedia.org/wiki/ISO_8601) 形式

```js
dayjs('2018-04-04T16:00:00.000Z')
```

#### Native Javascript Date object

```js
dayjs(new Date(2018, 8, 18))
```

#### Unix Timestamp (milliseconds)

Unix タイムスタンプ（Unix エポックのミリ秒）から`Dayjs`オブジェクトを返します。

```js
dayjs(1318781876406)
```

### Unix Timestamp (seconds) `.unix(value: number)`

Unix タイムスタンプ（Unix エポックの秒）から`Dayjs`オブジェクトを返します。

```js
dayjs.unix(1318781876)
dayjs.unix(1318781876.721)
```

### Custom Parse Format

- `dayjs("12-25-1995", "MM-DD-YYYY")` といった独自フォーマットのパースは[`CustomParseFormat`](./Plugin.md#customparseformat)で利用できます。

### Clone `.clone() | dayjs(original: Dayjs)`

`Dayjs`オブジェクトを複製して返します。

```js
dayjs().clone()
dayjs(dayjs('2019-01-25')) // Dayjsオブジェクトをコンストラクタに渡しても複製されます
```

### Validation `.isValid()`

`Dayjs`の日付が有効かの真偽値を返します。

```js
dayjs().isValid()
```

## Get and Set

### Year `.year()`

年の取得と設定。

```js
dayjs().year()
dayjs().year(2000)
```

### Month `.month()`

月の取得と設定です。月は`0`から始まります。

```js
dayjs().month()
dayjs().month(0)
```

### Day of the Month `.date()`

月の日にちの取得と設定です。日にちは`1`から始まります。

```js
dayjs().date()
dayjs().date(1)
```

### Day of the Week `.day()`

曜日の取得と設定です。`0`で日曜日から始まります。

```js
dayjs().day()
dayjs().day(0)
```

### Hour `.hour()`

時の取得と設定です。

```js
dayjs().hour()
dayjs().hour(12)
```

### Minute `.minute()`

分の取得と設定です。

```js
dayjs().minute()
dayjs().minute(59)
```

### Second `.second()`

秒の取得と設定です。

```js
dayjs().second()
dayjs().second(1)
```

### Millisecond `.millisecond()`

ミリ秒の取得と設定です。

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

### Get `.get(unit: string)`

`Dayjs` オブジェクトから`数値`を返します。

```js
dayjs().get('month') // `0`始まり
dayjs().get('day')
```

#### List of all available units

| 単位          | ショートハンド | 説明                             |
| ------------- | -------------- | -------------------------------- |
| `date`        |                | 月の日ひち                       |
| `day`         | `d`            | 曜日（日曜日は`0`、土曜日は`6`） |
| `month`       | `M`            | 月（1 月は`0`、12 月は`11`）     |
| `year`        | `y`            | 年                               |
| `hour`        | `h`            | 時                               |
| `minute`      | `m`            | 分                               |
| `second`      | `s`            | 秒                               |
| `millisecond` | `ms`           | ミリ秒                           |

### Set `.set(unit: string, value: number)`

変更を適応した`Dayjs`オブジェクトを返します。

```js
dayjs().set('date', 1)
dayjs().set('month', 3) // 4月
dayjs().set('second', 30)
```

## Manipulating

様々な方法で`Dayjs`オブジェクトを操作できます。

```js
dayjs('2019-01-25')
  .add(1, 'day')
  .subtract(1, 'year')
  .toString() // Fri, 26 Jan 2018 00:00:00 GMT
```

### Add `.add(value: number, unit: string)`

指定した時間を追加した`Dayjs`オブジェクトを複製して返します。

```js
dayjs().add(7, 'day')
```

### Subtract `.subtract(value: number, unit: string)`

指定した時間を引いた`Dayjs`オブジェクトを複製して返します。

```js
dayjs().subtract(7, 'year')
```

### Start of Time `.startOf(unit: string)`

指定した単位の開始時点に設定された`Dayjs`オブジェクトを複製して返します。

```js
dayjs().startOf('week') // locale の `weekStart` に依存
```

### End of Time `.endOf(unit: string)`

指定した単位の終了時点に設定された`Dayjs`オブジェクトを複製して返します。

```js
dayjs().endOf('month')
```

## Displaying

### Format `.format(stringWithTokens: string)`

フォーマットされた日付の文字列を返します。  
文字をエスケープするにはブラケットで囲みます。（例 `[A][MM]`）

```js
dayjs().format() // ISO8601形式で、端数秒なしの現在の日時。例 '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYY] YYYY-MM-DDTHH:mm:ssZ[Z]') // 'YYYY 2019-01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```

#### List of all available formats

| フォーマット | 出力             | 説明                        |
| ------------ | ---------------- | --------------------------- |
| `YY`         | 18               | 2 桁の年                    |
| `YYYY`       | 2018             | 4 桁の年                    |
| `M`          | 1-12             | 1 始まりの月                |
| `MM`         | 01-12            | 1 始まりの 2 桁の月         |
| `MMM`        | Jan-Dec          | 月の略称                    |
| `MMMM`       | January-December | 月の正式名                  |
| `D`          | 1-31             | 月ごとの日にち              |
| `DD`         | 01-31            | 月ごとの 2 桁の日にち       |
| `d`          | 0-6              | `0`で日曜日から始まる曜日   |
| `dd`         | Su-Sa            | 最も短い曜日の略称          |
| `ddd`        | Sun-Sat          | 曜日の略称                  |
| `dddd`       | Sunday-Saturday  | 曜日名                      |
| `H`          | 0-23             | 時間                        |
| `HH`         | 00-23            | 2 桁の時間                  |
| `h`          | 1-12             | 12 時制の時間               |
| `hh`         | 01-12            | 12 時制で 2 桁の時間        |
| `m`          | 0-59             | 分                          |
| `mm`         | 00-59            | 2 桁の分                    |
| `s`          | 0-59             | 秒                          |
| `ss`         | 00-59            | 2 桁の秒                    |
| `SSS`        | 000-999          | 3 桁のミリ秒                |
| `Z`          | +5:00            | UTC からのオフセット        |
| `ZZ`         | +0500            | UTC からの 2 桁のオフセット |
| `A`          | AM PM            | 午前と午後（大文字）        |
| `a`          | am pm            | 午前と午後（小文字）        |

- 利用可能な他のフォーマット `Q Do k kk X x ...` in plugin [`AdvancedFormat`](./Plugin.md#advancedformat)
- ローカライズのフォーマットオプション `L LT LTS ...` in plugin [`LocalizedFormat`](./Plugin.md#localizedFormat)

### Difference `.diff(compared: Dayjs, unit: string (default: 'milliseconds'), float?: boolean)`

2 つの`Dayjs`オブジェクトの差分を指定した単位で数値で返します。

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000
date1.diff(date2, 'month') // 7
date1.diff(date2, 'month', true) // 7.645161290322581
date1.diff(date2, 'day') // 233
```

### Unix Timestamp (milliseconds) `.valueOf()`

`Dayjs`オブジェクトの Unix エポックからのミリ秒を数値で返します。

```js
dayjs('2019-01-25').valueOf() // 1548381600000
```

### Unix Timestamp (seconds) `.unix()`

`Dayjs`オブジェクトの Unix エポックからの秒を数値で返します。

```js
dayjs('2019-01-25').unix() // 1548381600
```

### UTC Offset (minutes) `.utcOffset()`

`Dayjs`オブジェクトの UTC オフセットを分単位の数値で返します。

```js
dayjs().utcOffset()
```

### Days in the Month `.daysInMonth()`

`Dayjs`オブジェクトの月の日数を数値で返します。

```js
dayjs('2019-01-25').daysInMonth() // 31
```

### As Javascript Date `.toDate()`

`Dayjs`オブジェクトをパースして複製したネイティブの`Date`オブジェクトを返します。

```js
dayjs('2019-01-25').toDate()
```

### As JSON `.toJSON()`

`Dayjs`オブジェクトの日付を ISO8601 形式にして文字列で返します。

```js
dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```

### As ISO 8601 String `.toISOString()`

`Dayjs`オブジェクトの日付を ISO8601 形式にして文字列で返します。

```js
dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
```

### As String `.toString()`

日付を文字列で返します。

```js
dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
```

## Query

### Is Before `.isBefore(compared: Dayjs, unit?: string)`

`Dayjs`オブジェクトの日付が、引数に与えた他の`Dayjs`オブジェクトの日付より前かどうかの真偽値を返します。

```js
dayjs().isBefore(dayjs()) // false
dayjs().isBefore(dayjs(), 'year') // false
```

### Is Same `.isSame(compared: Dayjs, unit?: string)`

`Dayjs`オブジェクトの日付が、引数に与えた他の`Dayjs`オブジェクトの日付と同じかどうかの真偽値を返します。

```js
dayjs().isSame(dayjs()) // true
dayjs().isSame(dayjs(), 'year') // true
```

### Is After `.isAfter(compared: Dayjs, unit?: string)`

`Dayjs`オブジェクトの日付が、引数に与えた他の`Dayjs`オブジェクトの日付より後かどうかの真偽値を返します。

```js
dayjs().isAfter(dayjs()) // false
dayjs().isAfter(dayjs(), 'year') // false
```

### Is a Dayjs `.isDayjs(compared: any)`

引数に与えた変数が`Dayjs`オブジェクトかどうかの真偽値を返します。

```js
dayjs.isDayjs(dayjs()) // true
dayjs.isDayjs(new Date()) // false
```

`instanceof`オペレータでも同じように動作します。

```js
dayjs() instanceof dayjs // true
```

## UTC

UTC でパースや表示をしたい場合は、[`UTC`](./Plugin.md#utc)プラグインの`.utc` `.local` `.isUTC` で行えます。

## Plugin APIs

### RelativeTime

`.from` `.to` `.fromNow` `.toNow` で相対時間が得られます。

プラグイン [`RelativeTime`](./Plugin.md#relativetime)

### IsLeapYear

`.isLeapYear` で閏年かどうかが得られます。

プラグイン [`IsLeapYear`](./Plugin.md#isleapyear)

### WeekOfYear

`.week` でその年における週数が得られます。

プラグイン [`WeekOfYear`](./Plugin.md#weekofyear)

### WeekDay

`.weekday` でロケールに対応した曜日の取得、設定ができます。

プラグイン [`WeekDay`](./Plugin.md#weekday)

### IsoWeeksInYear

`.isoWeeksInYear` でその年の週数が得られます。

プラグイン [`IsoWeeksInYear`](./Plugin.md#isoweeksinyear)

### IsSameOrAfter

`.isSameOrAfter` で日付が別の日付と同じかそれより後であるかを得られます。

プラグイン [`IsSameOrAfter`](./Plugin.md#issameorafter)

### IsSameOrBefore

`.isSameOrBefore`で日付が別の日付と同じかそれより前であるかを得られます。

プラグイン [`IsSameOrBefore`](./Plugin.md#issameorbefore)

### IsBetween

`.isBetween`で他の 2 つの日付の間であるかどうかを得られます。

プラグイン [`IsBetween`](./Plugin.md#isbetween)

### QuarterOfYear

`.quarter`で年の四半期のいつかが得られます。

プラグイン [`QuarterOfYear`](./Plugin.md#quarterofyear)

### ToArray

`.toArray`でパラメータの配列が得られます。

プラグイン [`ToArray`](./Plugin.md#toarray)

### ToObject

`.toObject`でパラメータをキーに持ったオブジェクトが得られます。

プラグイン [`ToObject`](./Plugin.md#toobject)

### MinMax

`.min` `.max`で与えた複数の`Dayjs`インスタンスの中から最小もしくは最大のものが得られます。

プラグイン [`MinMax`](./Plugin.md#minmax)

### Calendar

`.calendar`で与えた日付のカレンダー上の情報が得られます。

プラグイン [`Calendar`](./Plugin.md#calendar)
