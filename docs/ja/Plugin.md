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
import AdvancedFormat from 'dayjs/plugin/AdvancedFormat' // 必要に応じて読み込み

dayjs.extend(AdvancedFormat) // プラグインを使用
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

### UTC
 - UTC plugin gives dayjs the ability to operate utc timezone

```javascript
import UTCPlugin from 'dayjs/plugin/utc'

dayjs.extend(UTCPlugin)
```

> **⚠️ NOTICE⚠️** 
>
> when **NOT** add this plugin `dayjs()` will return an instance that timezone based of you local
> ```javascript
> dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T05:04:05+08:00
> ```
> after load this plugin the timezone of instance return by `dayjs()` will rely on what you passed
> ```javascript
> dayjs.extend(UTCPlugin)
> dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T03:04:05+06:00
> ```
> if you always want an local timezone instance would be create or you already use dayjs in you project
>
> you can load this plugin with option `parseToLocal: true`
>
> ```javascript
> dayjs.extend(UTCPlugin, { parseToLocal: true })
> dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T05:04:05+08:00
> ```
>

- API

  #### Parse

    get an instance in UTC

    ```javascript
      dayjs.utc() 
      dayjs.utc('2018-05-18T03:04:05+06:00') 
      /* (string | number | Date | Dayjs) support like dayjs() */
    ```

  #### Get

    with `dayjs().utcOffset()` you can get the UTC offset in minutes.
    > Note: `dayjs().utcOffset()` returns the real offset from UTC, not the reverse offset (as returned by Date.prototype.getTimezoneOffset).

    also you can check the timezone of an instance is local or UTC by `dayjs().isLocal()` and `dayjs().isUTC()`

    ```javascript
      dayjs().utcOffset() // (-480, -120, 0, 120, 480, etc.)
      dayjs().isLocal()   // true
      dayjs().isUTC()     // false
    ```

  #### set

    using `dayjs().utc()` and `dayjs().local()` you can set the timezone to UTC or you local timezone , and `dayjs().utcOffset(Number)` you can specify the timezone you want 

    ```javascript
      let day = dayjs('2018-05-18T03:04:05+06:00')
      
      day.utc().format()           // 2018-05-17T21:04:05+00:00

      day.local().format()         // 2018-05-18T05:04:05+08:00

      day.utcOffset(240).format()  // 2018-05-18T01:04:05+04:00
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
