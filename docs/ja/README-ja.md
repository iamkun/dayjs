日本語 | [English](../../README.md) | [简体中文](../zh-cn/README.zh-CN.md) | [Português Brasileiro](../pt-br/README-pt-br.md) | [한국어](../ko/README-ko.md) | [Español (España)](../es-es/README-es-es.md) | [Русский](../ru/README-ru.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Moment.js と同じ API を備えた <b>2kB</b> の軽量ライブラリ</p>
<br>
<p align="center">
    <a href="https://unpkg.com/dayjs/dayjs.min.js"><img
            src="https://img.badgesize.io/https://unpkg.com/dayjs/dayjs.min.js?compression=gzip&style=flat-square"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/dayjs"><img src="https://img.shields.io/npm/v/dayjs.svg?style=flat-square"
                                                       alt="NPM Version"></a>
    <a href="https://travis-ci.org/iamkun/dayjs"><img
            src="https://img.shields.io/travis/iamkun/dayjs/master.svg?style=flat-square" alt="Build Status"></a>
    <a href="https://codecov.io/gh/iamkun/dayjs"><img
            src="https://img.shields.io/codecov/c/github/iamkun/dayjs/master.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://github.com/iamkun/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/npm/l/dayjs.svg?style=flat-square" alt="License"></a>
    <br>
    <a href="https://saucelabs.com/u/dayjs">
        <img width="750" src="https://user-images.githubusercontent.com/17680888/40040137-8e3323a6-584b-11e8-9dba-bbe577ee8a7b.png" alt="Sauce Test Status">
    </a>
</p>

> Day.js は日付と時刻をパース・検証・操作・表示する最小のモダンブラウザ向け JavaScript ライブラリであり、 Moment.js の API との広い互換性を持ちます。 Moment.js を使ったことがあればすぐにでも Day.js を使い始めることができます。

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .set('year', 2018)
  .format('YYYY-MM-DD HH:mm:ss')
```

- 🕒 Moment.js と類似した API と使用法
- 💪 イミュータブル
- 🔥 メソッドチェーン
- 🌐 国際化サポート (I18n)
- 📦 2kb の軽量ライブラリ
- 👫 全ブラウザをサポート

---

## はじめに

### Documentation

You can find for more details, API, and other docs on [day.js.org](https://day.js.org/) website.

### インストール

```console
npm install dayjs --save
```

📚[インストールガイド](https://day.js.org/docs/en/installation/installation)

### API

Day.js API で日付と時刻をパース・検証・操作・表示するのは簡単です。

```javascript
dayjs('2018-08-08') // パース

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // 表示

dayjs()
  .set('month', 3)
  .month() // get & set

dayjs().add(1, 'year') // 操作

dayjs().isBefore(dayjs()) // クエリ
```

📚[API リファレンス](https://day.js.org/docs/en/parse/parse)

### 国際化 (I18n)

Day.js は国際化を手厚くサポートしています。

また、使用しないロケールをビルドに含みません。

```javascript
import 'dayjs/locale/es' // 必要に応じて読み込み

dayjs.locale('es') // スペイン語をグローバルロケールとして適用

dayjs('2018-05-05')
  .locale('zh-cn')
  .format() // 簡体字中国語を特定のインスタンスにのみ適用
```

📚[国際化](https://day.js.org/docs/en/i18n/i18n)

### プラグイン

プラグインとは、 Day.js の機能を拡張したり、新たな機能を追加するための独立したモジュールのことです。

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // 必要に応じて読み込み

dayjs.extend(advancedFormat) // プラグインを使用

dayjs().format('Q Do k kk X x') // 多様なフォーマットが利用可能に
```

📚[プラグインリスト](https://day.js.org/docs/en/plugin/plugin)

## ライセンス

Day.js は [MIT License](../../LICENSE) のもとで利用を許諾します。
