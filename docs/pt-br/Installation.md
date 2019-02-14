## Guia de Instalação

Existem várias maneiras de incluir o Day.js em seu projeto:

- Via NPM:

```console
npm install dayjs --save
```

```js
import dayjs from 'dayjs'
// Ou se preferir CommonJS
// var dayjs = require('dayjs');
dayjs().format()
```

- Via CDN:

```html
<!-- Javascript mais recente compilado e minificado -->
<script src="https://unpkg.com/dayjs"></script>
<script>
  dayjs().format()
</script>
```

- Via download e _self-hosting_:

Simplesmente baixe a última versão do Day.js: [https://unpkg.com/dayjs/](https://unpkg.com/dayjs/)
