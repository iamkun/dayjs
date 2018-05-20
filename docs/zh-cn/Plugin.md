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
dayjs.extend(plugin, options) // with plugin options
```

## 安装

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

## 自定义

你可以根据需要自由的编写一个Day.js插件

欢迎提交PR与大家分享你的插件

Day.js插件模版
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