### Notice

The document here **no longer** updates.

Please visit our website [https://day.js.org](https://day.js.org/docs/en/installation/installation) for more  information.

-------------

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

## インストールガイド

複数の方法で Day.js を使用することができます

- NPM を使う場合:

```console
npm install dayjs --save
```

```js
import dayjs from 'dayjs'
// CommonJS の場合は以下
// var dayjs = require('dayjs');
dayjs().format()
```

- CDN を使う場合:

```html
<!-- コンパイル後に minify した最新の JavaScript -->
<script src="https://unpkg.com/dayjs"></script>
<script>
  dayjs().format()
</script>
```

- ダウンロードしてセルフホスティングする場合:

Day.js の最新版を [https://unpkg.com/dayjs/](https://unpkg.com/dayjs/) からダウンロードしてください。
