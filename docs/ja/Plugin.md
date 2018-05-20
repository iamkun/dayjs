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
