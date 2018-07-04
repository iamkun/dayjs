# 插件列表

插件是一些独立的程序，可以给 Day.js 增加新功能和扩展已有功能

默认情况下，Day.js 只包含核心的代码，并没有安装任何插件

您可以加载多个插件来满足您的需求

## API

#### Extend

* 将返回dayjs类

使用插件

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // 带参数加载插件
```

## 安装

* 通过 NPM:

```javascript
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat' // 按需加载

dayjs.extend(advancedFormat) // 使用插件
```

* 通过 CDN:
```html
<script src="https://unpkg.com/dayjs"></script>
<!-- 通过 window.dayjs_plugin_NAME 获取 -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat);
</script>
```

## 官方插件列表

### AdvancedFormat
 - AdvancedFormat 扩展了 `dayjs().format` API 以支持更多模版

```javascript
import AdvancedFormat from 'dayjs/plugin/AdvancedFormat'

dayjs.extend(AdvancedFormat)

dayjs().format('Q Do k kk X x')
```

扩展的模版列表：

| 模版   | 输出             | 简介                                  |
| ------ | ---------------- | ------------------------------------- |
| `Q`    | 1-4              | 季度                                  |
| `Do`   | 1st 2nd ... 31st | 带序号的月份                          |
| `k`    | 1-23             | 时：由 1 开始                         |
| `kk`   | 01-23            | 时：由 1 开始，二位数                 |
| `X`    | 1360013296       | 秒为单位的Unix时间戳                  |
| `x`    | 1360013296123    | 毫秒单位的Unix时间戳                  |

### UTC
 - UTC 插件扩展了dayjs关于时区方面的功能

```javascript
import UTCPlugin from 'dayjs/plugin/utc'

dayjs.extend(UTCPlugin)
```

> **⚠️ 注意⚠️** 
>
> 当你 **没使用** 这个插件的时候，`dayjs()`返回的是基于你环境时区的实例
> ```javascript
> dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T05:04:05+08:00
> ```
> 而在你加载这个插件之后，`dayjs()`返回实例的时区将会与你传入的值有关
> ```javascript
> dayjs.extend(UTCPlugin)
> dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T03:04:05+06:00
> ```
> 如果你希望新建的实例的时区总是基于你本地时区，或者你使用这个插件之前已经在项目中使用了dayjs
>
> 你可以在引入插件时附上这个参数`parseToLocal: true`
>
> ```javascript
> dayjs.extend(UTCPlugin, { parseToLocal: true })
> dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T05:04:05+08:00
> ```
>

- API

  #### 解析

    获得一个时区为UTC的实例

    ```javascript
      dayjs.utc() 
      dayjs.utc('2018-05-18T03:04:05+06:00') 
      /* (string | number | Date | Dayjs) 使用方法与 dayjs() 一致 */
    ```

  #### 取值

    你可以使用`dayjs().utcOffset()`来获取实例与UTC的时间差
    > 注意: `dayjs().utcOffset()` 返回的是与UTC真实的 _分钟_ 时差，与`Date.prototype.getTimezoneOffset`返回一个相反值不同

    你也可以使用`dayjs().isLocal()`或`dayjs().isUTC()`来确认当前实例的时区是否为本地时区或是否为UTC时区

    ```javascript
      dayjs().utcOffset() // (-480, -120, 0, 120, 480, etc.)
      dayjs().isLocal()   // true
      dayjs().isUTC()     // false
    ```

  #### 赋值

    使用`dayjs().utc()`和`dayjs().local()`可以将实例的时区切换到UTC或本地时区，你也可以使用`dayjs().utcOffset(Number)`将实例设置到一个指定的时区

    ```javascript
      let day = dayjs('2018-05-18T03:04:05+06:00')
      
      day.utc().format()           // 2018-05-17T21:04:05+00:00

      day.local().format()         // 2018-05-18T05:04:05+08:00

      day.utcOffset(240).format()  // 2018-05-18T01:04:05+04:00
    ```

### RelativeTime
 - RelativeTime 增加了 `.from` `.to` `.fromNow` `.toNow` 4个 API 来展示相对的时间 (e.g. 3 小时以前).

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

#### 距离 X 的相对时间  `.from(compared: Dayjs, withoutSuffix?: boolean)`

返回 `string` 距离 X 的相对时间

#### 到现在的相对时间 `.toNow(withoutSuffix?: boolean)`

返回 `string` 到现在的相对时间

#### 到 X 的相对时间  `.to(compared: Dayjs, withoutSuffix?: boolean)`

返回 `string` 到 X 的相对时间

| Range                    | Key  | Sample Output                    |
| ------------------------ | ---- | -------------------------------- |
| 0 到 44 秒                | s    | 几秒前                |
| 45 到 89 秒               | m    | 1 分钟前                     |
| 90 秒 到 44 分            | mm   | 2 分钟前 ... 44 分钟前 |
| 45 到 89 分               | h    | 1 小时前                      |
| 90 分 到 21 小时          | hh   | 2 小时前 ... 21 小时前     |
| 22 到 35 小时             | d    | 1 天前                        |
| 36 小时 到 25 天          | dd   | 2 天前 ... 25 天前       |
| 26 到 45 天               | M    | 1 个月前                      |
| 46 天 到 10 月           | MM   | 2 个月前 ... 10 个月前   |
| 11 月 到 17月            | y    | 1 年前                       |
| 18 月以上               | yy   | 2 年前 ... 20 年前     |

## IsLeapYear
 - IsLeapYear 增加了 `.isLeapYear` API 返回一个 `boolean` 来展示一个 `Dayjs`'s 的年份是不是闰年.

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear(); // true
```

### 佛历
- BuddhistEra 扩展了 `dayjs().format` API 以支持佛历格式化.
- 佛教时代是一个年份编号系统，主要用于柬埔寨、老挝、缅甸和泰国等东南亚国家以及斯里兰卡、马来西亚和新加坡的中国人，用于宗教或官方场合（[Wikipedia]（https：//en.wikipedia.org/wiki/Buddhist_calendar））
- 要计算BE年，只需在年份中添加543。 例如，1977年5月26日AD / CE应显示为2520年5月26日BE（1977 + 543）

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

### 年中的第几周
 - WeekOfYear 增加了 `.week()` API 返回一个 `number` 来表示 `Dayjs` 的日期是年中第几周.

```javascript
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('06/27/2018').week() // 26
```

## 自定义

你可以根据需要自由的编写一个Day.js插件

欢迎提交PR与大家分享你的插件

Day.js插件模版
```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // 扩展 dayjs() 实例
  // 例：添加 dayjs().isSameOrBefore() 实例方法
  dayjsClass.prototype.isSameOrBefore = function (arguments) {}

  // 扩展 dayjs 类
  // 例：添加 dayjs.utc() 类方法
  dayjsFactory.utc = (arguments) => {}

  // 覆盖已存在的 API
  // 例：扩展 dayjs().format() 方法
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function (arguments) {
    // 原始format结果
    const result = oldFormat(arguments)
    // 返回修改后结果
  }
}
```