# 插件列表

插件是一些独立的程序，可以给 Day.js 增加新功能和扩展已有功能

默认情况下，Day.js 只包含核心的代码，并没有安装任何插件

您可以加载多个插件来满足您的需求

## API

#### Extend

* Returns dayjs

Use a plugin.

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // with plugin options
```

## Installation

* Via NPM:

```javascript
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/AdvancedFormat' // load on demand

dayjs.extend(AdvancedFormat) // use plugin
```

* Via CDN:
```html
<script src="https://unpkg.com/dayjs"></script>
<!-- Load plugin as window.dayjs_plugin_NAME -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat);
</script>
```

## List of official plugins

### AdvancedFormat
 - AdvancedFormat extends `dayjs().format` API to supply more format options.

```javascript
import AdvancedFormat from 'dayjs/plugin/AdvancedFormat'

dayjs.extend(AdvancedFormat)

dayjs().format('Q Do k kk X x')
```

List of added formats:

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `Q`    | 1-4              | Quarter                               |
| `Do`   | 1st 2nd ... 31st | Day of Month with ordinal             |
| `k`    | 1-23             | The hour, beginning at 1              |
| `kk`   | 01-23            | The hour, 2-digits, beginning at 1    |
| `X`    | 1360013296       | Unix Timestamp in second              |
| `x`    | 1360013296123    | Unix Timestamp in millisecond         |

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

## Customize

You could build your own Day.js plugin to meet different needs.

Feel free to open a pull request to share your plugin.

Template of a Day.js plugin.
```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // extend dayjs()
  // e.g. add dayjs().isSameOrBefore()
  dayjsClass.prototype.isSameOrBefore = function (arguments) {}

  // extend dayjs
  // e.g. add dayjs.utc()
  dayjsFactory.utc = (arguments) => {}

  // overriding existing API
  // e.g. extend dayjs().format()
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function (arguments) {
    // original format result
    const result = oldFormat(arguments)
    // return modified result
  }
}
```