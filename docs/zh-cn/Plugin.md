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

### RelativeTime
 - RelativeTime 增加了 `.from`, `.to`, `.fromNow`, `.toNow` 4个 API 来展示相对的时间 (e.g. 3 小时以前).

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