# Plugin List

A plugin is an independent module that can be added to Day.js to extend functionality or add new features.

By default, Day.js comes with core code only and no installed plugin.

You can load multiple plugins based on your need.

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