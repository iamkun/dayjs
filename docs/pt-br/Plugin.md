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
import AdvancedFormat from 'dayjs/plugin/AdvancedFormat' // carregar sob demanda

dayjs.extend(AdvancedFormat) // usar plugin
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