# 插件列表

插件是一些独立的程序，可以给 Day.js 增加新功能和扩展已有功能

默认情况下，Day.js 只包含核心的代码，并没有安装任何插件

您可以加载多个插件来满足您的需求

## API

#### Extend

- 将返回 dayjs 类

使用插件

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // 带参数加载插件
```

## 安装

- 通过 NPM:

```javascript
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat' // 按需加载

dayjs.extend(advancedFormat) // 使用插件
```

- 通过 CDN:

```html
<script src="https://unpkg.com/dayjs"></script>
<!-- 通过 window.dayjs_plugin_NAME 获取 -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat)
</script>
```

## 官方插件列表

### UTC

- UTC 增加了 `.utc` `.local` `.isUTC` APIs 使用 UTC 模式来解析和展示时间.

```javascript
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

// 默认当地时间
dayjs().format() //2019-03-06T17:11:55+08:00
// UTC 模式
dayjs.utc().format() // 2019-03-06T09:11:55Z
dayjs()
  .utc()
  .format() // 2019-03-06T09:11:55Z
// 在 UTC 模式下，所有的展示方法都将使用 UTC 而不是本地时区
// 所有的 get 和 set 方法也都会使用 Date#getUTC* 和 Date#setUTC* 而不是 Date#get* and Date#set*
dayjs.utc().isUTC() // true
dayjs
  .utc()
  .local()
  .format() //2019-03-06T17:11:55+08:00
dayjs.utc('2018-01-01', 'YYYY-MM-DD') // with CustomParseFormat plugin
```

Day.js 默认使用用户本地时区来解析和展示时间。
如果想要使用 UTC 模式来解析和展示时间，可以使用 `dayjs.utc()` 而不是 `dayjs()`

#### dayjs.utc `dayjs.utc(dateType?: string | number | Date | Dayjs, format? string)`

返回一个使用 UTC 模式的 `Dayjs` 对象。

#### Use UTC time `.utc()`

返回一个复制的包含使用 UTC 模式标记的 `Dayjs` 对象。

#### Use local time `.local()`

返回一个复制的包含使用本地时区标记的 `Dayjs` 对象。

#### isUTC mode `.isUTC()`

返回一个 `boolean` 来展示当前 `Dayjs` 对象是不是在 UTC 模式下。

### AdvancedFormat

- AdvancedFormat 扩展了 `dayjs().format` API 以支持更多模版

```javascript
import AdvancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(AdvancedFormat)

dayjs().format('Q Do k kk X x')
```

扩展的模版列表：

| 模版 | 输出             | 简介                   |
| ---- | ---------------- | ---------------------- |
| `Q`  | 1-4              | 季度                   |
| `Do` | 1st 2nd ... 31st | 带序号的月份           |
| `k`  | 1-24             | 时：由 1 开始          |
| `kk` | 01-24            | 时：由 1 开始，二位数  |
| `X`  | 1360013296       | 秒为单位的 Unix 时间戳 |
| `x`  | 1360013296123    | 毫秒单位的 Unix 时间戳 |

### LocalizedFormat

- LocalizedFormat 扩展了 `dayjs().format` API 以支持更多本地化的长日期格式.

```javascript
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

dayjs().format('L LT')
```

扩展的模版列表:

| 模版   | 格式                              | 输出                                    |
| ------ | --------------------------------- | --------------------------------------- |
| `LT`   | HH:mm                             | 8:02                                    |
| `LTS`  | HH:mm:ss                          | 15:25:50                                |
| `L`    | YYYY/MM/DD                        | 2010/02/14                              |
| `LL`   | YYYY 年 M 月 D 日                 | 2010 年 2 月 14 日                      |
| `LLL`  | YYYY 年 M 月 D 日 Ah 点 mm 分     | 2010 年 2 月 14 日下午 3 点 25 分       |
| `LLLL` | YYYY 年 M 月 D 日 ddddAh 点 mm 分 | 2010 年 2 月 14 日星期日下午 3 点 25 分 |
| `l`    | YYYY/M/D                          | 2010/2/14                               |
| `ll`   | YYYY 年 M 月 D 日                 | 2010 年 2 月 14 日                      |
| `lll`  | YYYY 年 M 月 D 日 HH:mm           | 2010 年 2 月 14 日 15:25                |
| `llll` | YYYY 年 M 月 D 日 dddd HH:mm      | 2010 年 2 月 14 日星期日 15:25          |

### RelativeTime

- RelativeTime 增加了 `.from` `.to` `.fromNow` `.toNow` 4 个 API 来展示相对的时间 (e.g. 3 小时以前).

```javascript
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

dayjs().from(dayjs('1990')) // 2 年以前
dayjs().from(dayjs(), true) // 2 年

dayjs().fromNow()

dayjs().to(dayjs())

dayjs().toNow()
```

#### 距离现在的相对时间 `.fromNow(withoutSuffix?: boolean)`

返回 `string` 距离现在的相对时间

#### 距离 X 的相对时间 `.from(compared: Dayjs, withoutSuffix?: boolean)`

返回 `string` 距离 X 的相对时间

#### 到现在的相对时间 `.toNow(withoutSuffix?: boolean)`

返回 `string` 到现在的相对时间

#### 到 X 的相对时间 `.to(compared: Dayjs, withoutSuffix?: boolean)`

返回 `string` 到 X 的相对时间

| Range            | Key | Sample Output          |
| ---------------- | --- | ---------------------- |
| 0 到 44 秒       | s   | 几秒前                 |
| 45 到 89 秒      | m   | 1 分钟前               |
| 90 秒 到 44 分   | mm  | 2 分钟前 ... 44 分钟前 |
| 45 到 89 分      | h   | 1 小时前               |
| 90 分 到 21 小时 | hh  | 2 小时前 ... 21 小时前 |
| 22 到 35 小时    | d   | 1 天前                 |
| 36 小时 到 25 天 | dd  | 2 天前 ... 25 天前     |
| 26 到 45 天      | M   | 1 个月前               |
| 46 天 到 10 月   | MM  | 2 个月前 ... 10 个月前 |
| 11 月 到 17 月   | y   | 1 年前                 |
| 18 月以上        | yy  | 2 年前 ... 20 年前     |

## IsLeapYear

- IsLeapYear 增加了 `.isLeapYear` API 返回一个 `boolean` 来展示一个 `Dayjs`'s 的年份是不是闰年。

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear() // true
```

### BuddhistEra

- BuddhistEra 扩展了 `dayjs().format` API 以支持佛历格式化。
- 佛历是一个年份编号系统，主要用于柬埔寨、老挝、缅甸和泰国等东南亚国家以及斯里兰卡、马来西亚和新加坡的中国人，用于宗教或官方场合（[Wikipedia]（https：//en.wikipedia.org/wiki/Buddhist_calendar））
- 要计算 BE 年，只需在年份中添加 543。 例如，1977 年 5 月 26 日 AD / CE 应显示为 2520 年 5 月 26 日 BE（1977 + 543）

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

- IsSameOrAfter 增加了 `.isSameOrAfter()` API 返回一个 `boolean` 来展示一个时间是否和一个时间相同或在一个时间之后.

```javascript
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrAfter)

dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year')
```

### IsSameOrBefore

- IsSameOrBefore 增加了 `.isSameOrBefore()` API 返回一个 `boolean` 来展示一个时间是否和一个时间相同或在一个时间之前.

```javascript
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

dayjs('2010-10-20').isSameOrBefore('2010-10-19', 'year')
```

### IsBetween

- IsBetween 增加了 `.isBetween()` API 返回一个 `boolean` 来展示一个时间是否介于两个时间之间.

```javascript
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year')
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)')
// '[' 包含, '(' 不包含
```

### DayOfYear

- DayOfYear 增加了 `.dayOfYear()` API 返回一个 `number` 来表示 `Dayjs` 的日期是年中第几天，或设置成是年中第几天。

```javascript
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)

dayjs('2010-01-01').dayOfYear() // 1
dayjs('2010-01-01').dayOfYear(365) // 2010-12-31
```

### WeekOfYear

- WeekOfYear 增加了 `.week()` API 返回一个 `number` 来表示 `Dayjs` 的日期是年中第几周.

```javascript
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('06/27/2018').week() // 26
dayjs('2018-06-27').week(5) // 设置周
```

### WeekDay

- WeekDay 增加了 `.weekday()` API 来获取或设置当前语言的星期。

```javascript
import weekDay from 'dayjs/plugin/weekDay'

dayjs.extend(weekDay)
// when Monday is the first day of the week
dayjs().weekday(-7) // last Monday
dayjs().weekday(7) // next Monday
```

### IsoWeeksInYear

- IsoWeeksInYear 增加了 `.isoWeeksInYear()` API 返回一个 `number` 来得到依据 ISO week 标准一年中有几周

```javascript
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear' // rely on isLeapYear plugin

dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

dayjs('2004-01-01').isoWeeksInYear() // 53
dayjs('2005-01-01').isoWeeksInYear() // 52
```

### QuarterOfYear

- QuarterOfYear 增加了 `.quarter()` API 返回一个 `number` 来表示 `Dayjs` 的日期是第几个季度，并扩展了 `.add` `.subtract` `.startOf` `.endOf` API 来支持 `quarter` 季度单位。

```javascript
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

dayjs('2010-04-01').quarter() // 2
dayjs('2010-04-01').quarter(2)
```

### CustomParseFormat

- CustomParseFormat 拓展了 `dayjs()` 支持自定义时间格式.

使用方括号来表示需要保留的字符 (e.g. `[G]`) .

```javascript
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

dayjs('05/02/69 1:02:03 PM -05:00', 'MM/DD/YY H:mm:ss A Z')
// Returns an instance containing '1969-05-02T18:02:03.000Z'

dayjs('2018 五月 15', 'YYYY MMMM DD', 'zh_cn')
// Returns an instance containing '2018-05-15T00:00:00.000Z'
```

#### List of all available format tokens

| 格式   | 例子             | 描述                         |
| ------ | ---------------- | ---------------------------- |
| `YY`   | 18               | 两位数的年份                 |
| `YYYY` | 2018             | 四位数的年份                 |
| `M`    | 1-12             | 月份，从 1 开始              |
| `MM`   | 01-12            | 月份，两位数                 |
| `MMM`  | Jan-Dec          | 简写的月份名称               |
| `MMMM` | January-December | 完整的月份名称               |
| `D`    | 1-31             | 月份里的一天                 |
| `DD`   | 01-31            | 月份里的一天，两位数         |
| `H`    | 0-23             | 小时                         |
| `HH`   | 00-23            | 小时，两位数                 |
| `h`    | 1-12             | 小时, 12 小时制              |
| `hh`   | 01-12            | Hours, 12 小时制, 两位数     |
| `m`    | 0-59             | 分钟                         |
| `mm`   | 00-59            | 分钟，两位数                 |
| `s`    | 0-59             | 秒                           |
| `ss`   | 00-59            | 秒 两位数                    |
| `S`    | 0-9              | 毫秒 一位数                  |
| `SS`   | 00-99            | 毫秒 两位数                  |
| `SSS`  | 000-999          | 毫秒 三位数                  |
| `Z`    | +5:00            | UTC 的偏移量                 |
| `ZZ`   | +0500            | UTC 的偏移量，数字前面加上 0 |
| `A`    | AM PM            |                              |
| `a`    | am pm            |                              |
| `Do`   | 1st... 31st      | 带序号的月份                 |

### ToArray

- ToArray 增加了 `.toArray()` API 来返回包含时间数值的数组。

```javascript
import toArray from 'dayjs/plugin/toArray'

dayjs.extend(toArray)

dayjs('2019-01-25').toArray() // [ 2019, 0, 25, 0, 0, 0, 0 ]
```

### ToObject

- ToObject 增加了 `.toObject()` API 来返回包含时间数值的对象。

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

### MinMax

- MinMax 增加了 `.min` `.max` API 返回一个 `dayjs` 来比较传入的 dayjs 实例的大小。

```javascript
import minMax from 'dayjs/plugin/minMax'

dayjs.extend(minMax)

dayjs.max(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.min([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```

### Calendar

- Calendar 增加了 `.calendar` API 返回一个 `string` 来显示日历时间。

```javascript
import calendar from 'dayjs/plugin/calendar'

dayjs.extend(calendar)

dayjs().calendar(dayjs('2008-01-01'))
dayjs().calendar(null, {
  sameDay: '[今天] HH:mm', // 今天 ( 今天 2:30 AM )
  nextDay: '[明天]', // 明天 ( 明天 2:30 AM )
  nextWeek: '[下]dddd', // 下周 ( Sunday at 2:30 AM )
  lastDay: '[昨天]', // 昨天 ( 昨天 2:30 AM )
  lastWeek: '[上] dddd', // 上周 ( Last Monday at 2:30 AM )
  sameElse: 'DD/MM/YYYY' // 其他情况 ( 7/10/2011 )
})
```

## 自定义

你可以根据需要自由的编写一个 Day.js 插件

欢迎提交 PR 与大家分享你的插件

Day.js 插件模版

```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // 扩展 dayjs() 实例
  // 例：添加 dayjs().isSameOrBefore() 实例方法
  dayjsClass.prototype.isSameOrBefore = function(arguments) {}

  // 扩展 dayjs 类
  // 例：添加 dayjs.utc() 类方法
  dayjsFactory.utc = arguments => {}

  // 覆盖已存在的 API
  // 例：扩展 dayjs().format() 方法
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function(arguments) {
    // 原始format结果
    const result = oldFormat(arguments)
    // 返回修改后结果
  }
}
```
