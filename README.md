English | [简体中文](./README.zh-CN.md)

<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Fast <b>2kB</b> alternative to Moment.js with the same modern API</p>
<br>
<p align="center">
    <a href="https://unpkg.com/dayjs/dayjs.min.js"><img
            src="http://img.badgesize.io/https://unpkg.com/dayjs/dayjs.min.js?compression=gzip&style=flat-square"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/dayjs"><img src="https://img.shields.io/npm/v/dayjs.svg?style=flat-square"
                                                       alt="NPM Version"></a>
    <a href="https://travis-ci.org/xx45/dayjs"><img
            src="https://img.shields.io/travis/xx45/dayjs/master.svg?style=flat-square" alt="Build Status"></a>
    <a href="https://codecov.io/gh/xx45/dayjs"><img
            src="https://img.shields.io/codecov/c/github/xx45/dayjs/master.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://github.com/xx45/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/npm/l/dayjs.svg?style=flat-square" alt="License"></a>
    <br>
    <a href="https://saucelabs.com/u/dayjs">
        <img width="750" src="https://user-images.githubusercontent.com/17680888/40040137-8e3323a6-584b-11e8-9dba-bbe577ee8a7b.png" alt="Sauce Test Status">
    </a>
</p>

> Day.js is a minimalist JavaScript library that parse, validate, manipulate, and display dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Familiar Moment.js API & patterns
* 💪 Immutable
* 🔥 Chainable
* 📦 2kb mini library
* 👫 All browsers supported

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

Just download the latest version of Day.js at [https://unpkg.com/dayjs/](https://unpkg.com/dayjs/)

## Getting Started

Instead of modifying the native `Date.prototype`, Day.js creates a wrapper for the Date object, called `Dayjs` object.
`Dayjs` object is immutable, that is to say, all API operation will return a new `Dayjs` object.

## API

[API Reference](./docs/en/API-reference.md)
---

## License

[MIT](./LICENSE)
