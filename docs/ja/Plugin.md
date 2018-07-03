# プラグインリスト

プラグインとは、 Day.js の機能を拡張したり、新たな機能を追加するための独立したモジュールのことです。

デフォルトでは Day.js にはコアコードのみがあり、プラグインはインストールされていません。

必要に応じて複数のプラグインを読み込むことができます。

## API

#### 拡張

* dayjs オブジェクトを返します

プラグインの使用例です。

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // プラグインのオプションを指定
```

## インストール

* NPM を使う場合:

```javascript
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat' // 必要に応じて読み込み

dayjs.extend(advancedFormat) // プラグインを使用
```

* CDN を使う場合:

```html
<script src="https://unpkg.com/dayjs"></script>
<!-- プラグインを window.dayjs_plugin_NAME として読み込み -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat);
</script>
```

## 公式プラグイン

### AdvancedFormat
 - AdvancedFormat はより多様なフォーマットを表現するために `dayjs().format` API を拡張するプラグインです。

```javascript
import AdvancedFormat from 'dayjs/plugin/AdvancedFormat'

dayjs.extend(AdvancedFormat)

dayjs().format('Q Do k kk X x')
```

追加されるフォーマットの一覧:

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `Q`    | 1-4              | 四半期                               |
| `Do`   | 1st 2nd ... 31st | 序数付きの日             |
| `k`    | 1-23             | 1始まりの時間              |
| `kk`   | 01-23            | 1始まりで2桁の時間    |
| `X`    | 1360013296       | Unix タイムスタンプ (秒)              |
| `x`    | 1360013296123    | Unix タイムスタンプ (ミリ秒)         |

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

#### Time from X  `.from(compared: Dayjs, withoutSuffix?: boolean)`

Returns the `string` of relative time from X.

#### Time to now `.toNow(withoutSuffix?: boolean)`

Returns the `string` of relative time to now.

#### Time to X  `.to(compared: Dayjs, withoutSuffix?: boolean)`

Returns the `string` of relative time to X.

| Range                    | Key  | Sample Output                    |
| ------------------------ | ---- | -------------------------------- |
| 0 to 44 seconds          | s    | a few seconds ago                |
| 45 to 89 seconds         | m    | a minute ago                     |
| 90 seconds to 44 minutes | mm   | 2 minutes ago ... 44 minutes ago |
| 45 to 89 minutes         | h    | an hour ago                      |
| 90 minutes to 21 hours   | hh   | 2 hours ago ... 21 hours ago     |
| 22 to 35 hours           | d    | a day ago                        |
| 36 hours to 25 days      | dd   | 2 days ago ... 25 days ago       |
| 26 to 45 days            | M    | a month ago                      |
| 46 days to 10 months     | MM   | 2 months ago ... 10 months ago   |
| 11 months to 17months    | y    | a year ago                       |
| 18 months+               | yy   | 2 years ago ... 20 years ago     |

### IsLeapYear
 - IsLeapYear adds `.isLeapYear` API to returns a `boolean` indicating whether the `Dayjs`'s year is a leap year or not.

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear(); // true
```

### BuddhistEra
- BuddhistEra extends `dayjs().format` API to supply Buddhist Era (B.E.) format options.
- Buddhist Era is a year numbering system that primarily used in  mainland Southeast Asian countries of Cambodia, Laos, Myanmar and Thailand as well as in Sri Lanka and Chinese populations of Malaysia and Singapore for religious or official occasions ([Wikipedia](https://en.wikipedia.org/wiki/Buddhist_calendar))
- To calculate BE year manually, just add 543 to year. For example 26 May 1977 AD/CE should display as 26 May 2520 BE (1977 + 543)

```javascript
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.extend(buddhistEra)

dayjs().format('BBBB BB')
```

List of added formats:

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `BBBB` | 2561             | Full BE Year (Year + 543)             |
| `BB`   | 61               | 2-digit of BE Year                    |

### WeekOfYear
 - WeekOfYear adds `.week()` API to returns a `number` indicating the `Dayjs`'s week of the year.

```javascript
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('06/27/2018').week() // 26
```

## カスタマイズ

さまざまなニーズに合わせて独自の Day.js プラグインを構築することができます。

あなたのプラグインを共有する pull request を是非送ってみてください。

以下は Day.js プラグインのテンプレートです。

```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // dayjs() を拡張する
  // 例) dayjs().isSameOrBefore() を追加
  dayjsClass.prototype.isSameOrBefore = function (arguments) {}

  // dayjs() を拡張する
  // 例) dayjs().utc() を追加
  dayjsFactory.utc = (arguments) => {}

  // 既存 API の上書き
  // 例) dayjs().format() を拡張
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function (arguments) {
    // 既存のフォーマット
    const result = oldFormat(arguments)
    // 変更後のフォーマット
  }
}
```
