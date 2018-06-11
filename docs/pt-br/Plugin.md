# Lista de Plugins

Um plugin é um módulo independente que pode ser adicionado ao Day.js para estendê-lo com mais funcionalidades.

Por padrão, o Day.js vêm apenas com seu código central, sem plugins instalados.

Você pode adicionar vários plugins de acordo com sua necessidade.

## API

#### Extend

* Retorna objeto Dayjs

Usar um plugin.

```js
import plugin
dayjs.extend(plugin)
dayjs.extend(plugin, options) // com opções do plugin
```

## Instalação

* Via NPM:

```javascript
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat' // carregar sob demanda

dayjs.extend(advancedFormat) // usar plugin
```

* Via CDN:
```html
<script src="https://unpkg.com/dayjs"></script>
<!-- carregar plugin como window.dayjs_plugin_NOME -->
<script src="https://unpkg.com/dayjs/plugin/advancedFormat"></script>
<script>
  dayjs.extend(dayjs_plugin_advancedFormat);
</script>
```

## Lista de plugins oficiais

### AdvancedFormat
 - O AdvancedFormat modifica a API de `dayjs().format` para adicionar mais opções de formatação.

```javascript
import AdvancedFormat from 'dayjs/plugin/AdvancedFormat'

dayjs.extend(AdvancedFormat)

dayjs().format('Q Do k kk X x')
```

Lista de formatos adicionados:

| Formato | Saída            | Descrição                             |
| ------- | ---------------- | ------------------------------------- |
| `Q`     | 1-4              | Quarter                               |
| `Do`    | 1st 2nd ... 31st | Dia do mês com ordinal                |
| `k`     | 1-23             | Hora (começando do 1)                 |
| `kk`    | 01-23            | Hora, com 2 dígitos (começando do 1)  |
| `X`     | 1360013296       | Unix Timestamp em segundos            |
| `x`     | 1360013296123    | Unix Timestamp em milissegundos       |

### RelativeTime
 - RelativeTime adds `.from` `.to` `.fromNow` `.toNow` APIs to formats date to relative time strings (e.g. 3 hours ago).

```javascript
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

dayjs().from(dayjs('1990')) // 2 years ago
dayjs().from(dayjs(), true) // 2 years

dayjs().fromNow()

dayjs().to(dayjs())

dayjs().toNow()
```

#### Time from now `.fromNow(withoutSuffix?: boolean)`

Returns the `string` of relative time from now.

#### Time from X  `.from(compared: Dayjs, withoutSuffix?: boolean)`

Returns the `string` of relative time from X.

#### Time to now `.toNow(withoutSuffix?: boolean)`

Returns the `string` of relative time to now.

#### Time to X  `.to(compared: Dayjs, withoutSuffix?: boolean)`

Returns the `string` of relative time to X.

| Range                    | Key  | Sample Output                    |
| ------------------------ | ---- | -------------------------------- |
| 0 to 44 seconds          | s    | a few seconds ago                |
| 45 to 89 seconds         | m    | a minute ago                     |
| 90 seconds to 44 minutes | mm   | 2 minutes ago ... 44 minutes ago |
| 45 to 89 minutes         | h    | an hour ago                      |
| 90 minutes to 21 hours   | hh   | 2 hours ago ... 21 hours ago     |
| 22 to 35 hours           | d    | a day ago                        |
| 36 hours to 25 days      | dd   | 2 days ago ... 25 days ago       |
| 26 to 45 days            | M    | a month ago                      |
| 46 days to 10 months     | MM   | 2 months ago ... 10 months ago   |
| 11 months to 17months    | y    | a year ago                       |
| 18 months+               | yy   | 2 years ago ... 20 years ago     |

### IsLeapYear
 - IsLeapYear adds `.isLeapYear` API to returns a `boolean` indicating whether the `Dayjs`'s year is a leap year or not.

```javascript
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear(); // true
```

### BuddhistEra
- BuddhistEra extends `dayjs().format` API to supply Buddhist Era (B.E.) format options.
- Buddhist Era is a year numbering system that primarily used in  mainland Southeast Asian countries of Cambodia, Laos, Myanmar and Thailand as well as in Sri Lanka and Chinese populations of Malaysia and Singapore for religious or official occasions ([Wikipedia](https://en.wikipedia.org/wiki/Buddhist_calendar))
- To calculate BE year manually, just add 543 to year. For example 26 May 1977 AD/CE should display as 26 May 2520 BE (1977 + 543)

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

## Customizar

Você também pode construir seu próprio plugin Day.js para diferentes necessidades. Sinta-se à vontade para abrir um pull request e compartilhar seu plugin com a comunidade.

Template de um plugin Day.js.
```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // estender dayjs()
  // ex: adicionar dayjs().isSameOrBefore()
  dayjsClass.prototype.isSameOrBefore = function (arguments) {}

  // estender dayjs
  // ex: adicionar dayjs.utc()
  dayjsFactory.utc = (arguments) => {}

  // sobrescrever API existente
  // ex: estender dayjs().format()
  const formatoAntigo = dayjsClass.prototype.format
  dayjsClass.prototype.format = function (arguments) {
    // original
    const result = formatoAntigo(arguments)
    // retornar modificado
  }
}
```