[English](./ReadMe.md) | 简体中文
<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Moment.js 的 <b>2kB</b> 轻量化方案，拥有同样强大的 API</p>
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

> Day.js 是一个轻量的 JavaScript 时间日期处理库，和 Moment.js 的 API 设计保持完全一样. 如果你曾经用过 Moment.js, 那么你已经知道如何使用  Day.js

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

- 🕒 和 Moment.js 相同的 API 和用法
- 💪 不可变数据 (Immutable)
- 🔥 支持链式操作 (Chainable)
- 📦 仅 2kb 大小的微型库
- 👫 全浏览器兼容
---

## 安装

可以有如下多种方法安装使用 Day.js:

- NPM:
```console
    npm install dayjs --save
```
```js
    var dayjs = require('dayjs');
    dayjs().format();
```
- CDN:
```html
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://unpkg.com/dayjs"></script>
    <script>
      dayjs().format();
    </script>
```

- 下载到您自己的服务器上:

从 [https://unpkg.com/dayjs](https://unpkg.com/dayjs) 下载最新的 Dayjs 源文件，并自行部署到您的服务器上。

## 开始
`Dayjs` 并没有改变或覆盖 Javascript 原生的 `Date.prototype`， 而是创造了一个全新的包含 `Javascript Date` 对象的 `Dayjs` 的对象。

`Dayjs` 对象是不可变的, 所有的 API 操作都将返回一个新的 `Dayjs` 对象。


## API
如果没有特别说明，API 的返回值都是新的 `Dayjs` 对象。

* [解析](#解析)
  * [当前时间](#当前时间)
  * [时间字符串](#时间字符串)
  * [Unix 时间戳 (毫秒)](#unix-时间戳-毫秒)
  * [Date 对象](#date-对象)
  * [复制](#复制)
  * [验证](#验证)
* [获取+设置](#获取设置)
  * [年](#年)
  * [月](#月)
  * [日](#日)
  * [时](#时)
  * [分](#分)
  * [秒](#秒)
  * [毫秒](#毫秒)
  * [设置](#设置)
* [操作](#操作)
  * [增加](#增加)
  * [减少](#减少)
  * [开头时间](#开头时间)
  * [末尾时间](#末尾时间)
* [显示](#显示)
  * [格式化](#格式化)
  * [时间差](#时间差)
  * [Unix 时间戳 (毫秒)](#unix-时间戳-毫秒-1)
  * [Unix 时间戳 (秒)](#unix-时间戳-秒)
  * [天数 (月)](#天数-月)
  * [Date 对象](#date-对象-1)
  * [数组](#数组)
  * [JSON](#as-json)
  * [ISO 8601 字符串](#iso-8601-字符串)
  * [对象](#对象)
  * [字符串](#字符串)
* [查询](#查询)
  * [是否之前](#是否之前)
  * [是否相同](#是否相同)
  * [是否之后](#是否之后)
  * [是否闰年](#是否闰年)

---
### 解析
在 `dayjs()` 中传入支持的格式
#### 当前时间
直接运行 `dayjs()`，得到包含当前时间和日期的 `Dayjs` 对象。
```js
dayjs();
```
### 时间字符串
可以解析传入的一个标准的[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)时间字符串。
```js
dayjs(String);
dayjs("1995-12-25");
```
### Unix 时间戳 (毫秒)
可以解析传入的一个 Unix 时间戳 (13位数字)。
```js
dayjs(Number);
dayjs(1318781876406);
```
### Date 对象
可以解析传入的一个 Javascript Date 对象。
```js
dayjs(Date);
dayjs(new Date(2018, 8, 18));
```
### 复制
`Dayjs` 对象是不可变的，如果你想获得一个对象的拷贝，请执行 `.clone()`。
向 `dayjs()` 里传入一个 `Dayjs` 对象也能实现同样的效果。
```js
dayjs(Dayjs);
dayjs().clone();
```
### 验证
- return Boolean

检测当前 `Dayjs` 对象是否是一个有效的时间。
```js
dayjs().isValid();
```
---
### 获取+设置
获取和改变日期。
#### 年
- return Number

获取年份。
```js
dayjs().year();
```
#### 月
- return Number

获取月份。
```js
dayjs().month();
```
#### 日
- return Number

获取日期。
```js
dayjs().date();
```
#### 时
- return Number

获取小时。
```js
dayjs().hour();
```
#### 分
- return Number

获取分钟。
```js
dayjs().minute();
```
#### 秒
- return Number

获取秒。
```js
dayjs().second();
```
#### 毫秒
- return Number

获取毫秒。
```js
dayjs().millisecond();
```
#### 设置
设置时间
传入的单位 (unit) 对大小写不敏感。
```js
dayjs().set(unit : String, value : Int);
dayjs().set('month', 3);  // April
dayjs().set('second', 30);
```
---
### 操作
你可以对 `Dayjs` 对象如下增加减少之类的操作：
```js
dayjs().startOf('month').add(1, 'day').subtract(1, 'year')
```
#### 增加
增加时间并返回一个新的 `Dayjs()` 对象。
```js
dayjs().add(value : Number, unit : String);
dayjs().add(7, 'day');
```
#### 减少
减少时间并返回一个新的 `Dayjs()` 对象，使用方法和 `dayjs#add` 相同。
```js
dayjs().subtract(value : Number, unit : String);
dayjs().subtract(7, 'year');
```
#### 开头时间
返回当前时间的开头时间的 `Dayjs()` 对象，如月份的第一天。
```js
dayjs().startOf(unit : String);
dayjs().startOf('year');
```
#### 末尾时间
返回当前时间的末尾时间的 `Dayjs()` 对象，如月份的最后一天。
```js
dayjs().endOf(unit : String);
dayjs().endOf('month');
```
---
### 显示
格式化 `Dayjs` 对象并展示。
#### 格式化
- return String

接收一系列的时间日期字符串并替换成相应的值。
```js
dayjs().format(String);
dayjs().format();                       // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
dayjs().format("[YYYY] MM-DDTHH:mm:ssZ"); // "[2014] 09-08T08:02:17-05:00"
```
#### 时间差
- return Number

获取两个 `Dayjs` 对象的时间差，默认毫秒。
```js
dayjs().diff(Dayjs, unit);
dayjs().diff(dayjs(), 'years'); // 0
```
#### Unix 时间戳 (毫秒)
- return Number

返回 Unix 时间戳 (毫秒)
```js
dayjs().valueOf();
```
#### Unix 时间戳 (秒)
- return Number

返回 Unix 时间戳 (秒)。
```js
dayjs().unix();
```
#### 天数 (月)
- return Number

返回月份的天数。
```js
dayjs().daysInMonth();
```
#### Date 对象
- return Javascript `Date` object

返回原生的 `Date` 对象。
```js
dayjs().toDate();
```
#### 数组
- return Array

返回包含时间数值的数组。
```js
dayjs().toArray(); //[2018, 8, 18, 00, 00, 00, 000];
```
#### As JSON
- return JSON String

当序列化 `Dayjs` 对象时，会返回 ISO8601 格式的字符串。
```js
dayjs().toJSON(); //"2018-08-08T00:00:00.000Z"
```
#### ISO 8601 字符串
- return String

返回 ISO8601 格式的字符串。
```js
dayjs().toISOString();
```
#### 对象
- return Object

返回包含时间数值的对象。
```js
dayjs().toObject();// { years:2018, months:8, date:18, hours:0, minutes:0, seconds:0, milliseconds:0}
```
#### 字符串
- return String

```js
dayjs().toString();
```
####格式化
- return String

根据所输入的规范，格式化时间字符串

```js
dayjs().format(String);
dayjs().format();                       // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
dayjs().format("[YYYY] MM-DDTHH:mm:ssZ"); // "[2014] 09-08T08:02:17-05:00"
```
List of all available formats:

| Format | Output | Description |
| ------ | ------ | ----------- |
| `YY` | 18 | 两位数的年份 |
| `YYYY` | 2018 | 四位数的年份 |
| `M` | 1-12 | 月份，从1开始 |
| `MM` | 01-12 | 月份，数字前面加上0
| `MMM` | Jan-Dec | 简写的月份名称 |
| `MMMM` | January-December | 完整的月份名称 |
| `D` | 1-31 | 月份里的一天 |
| `DD` | 01-31 | 月份里的一天，数字前面加上0 |
| `d` | 0-6 | 一周中的一天，星期天是0 |
| `dddd` | Sunday-Saturday | 一周中一天的名称 |
| `H` | 0-23 | 小时 |
| `HH` | 00-23 | 小时，数字前面加上0 |
| `m` | 0-59 | 分钟 |
| `mm` | 00-59 | 分钟，数字前面加上0 |
| `s` | 0-59 | 秒 |
| `ss` | 00-59 | 秒，数字前面加上0 |
| `Z` | +5:00 | UTC的偏移量 |
| `ZZ` | +0500 | UTC的偏移量，数字前面加上0 |

---
### 查询
#### 是否之前
- return Boolean

检查一个 `Dayjs` 对象是否在另一个 `Dayjs` 对象时间之前。
```js
dayjs().isBefore(Dayjs);
dayjs().isBefore(dayjs()); // false
```
#### 是否相同
- return Boolean

检查一个 `Dayjs` 对象是否和另一个 `Dayjs` 对象时间相同。
```js
dayjs().isSame(Dayjs);
dayjs().isSame(dayjs()); // true
```
#### 是否之后
- return Boolean

检查一个 `Dayjs` 对象是否在另一个 `Dayjs` 对象时间之后。
```js
dayjs().isAfter(Dayjs);
dayjs().isAfter(dayjs()); // false
```
#### 是否闰年
- return Boolean

是否闰年。
```js
dayjs().isLeapYear();
dayjs('2000-01-01').isLeapYear(); // true
```
---
## 开源协议

MIT
