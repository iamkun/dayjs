## Referência da API

Ao invés de modificar o 'Date.prototype' nativo, o Day.js empacota o objeto nativo Date em um objeto `Dayjs`.

Este objeto `Dayjs` é imutável, ou seja, todas as operações desta API irão retornar um novo objeto `Dayjs`.

* [Criação](#criação)
  * [Data e Hora Atual](#data-e-hora-atual)
  * [String](#string)
  * [Unix Timestamp (millisegundos)](#unix-timestamp-millisegundos)
  * [Date](#date)
  * [Clonar](#clonar)
  * [Validação](#validação)
* [Get e Set](#get-e-set)
  * [Ano](#ano)
  * [Mês](#mês)
  * [Dia do Mês](#dia-do-mês)
  * [Dia da Semana](#dia-da-semana)
  * [Hora](#hora)
  * [Minuto](#minuto)
  * [Segundo](#segundo)
  * [Milisegundo](#milisegundo)
  * [Set](#set)
* [Manipulação](#manipulação)
  * [Adicionar Tempo](#adicionar-tempo)
  * [Subtrair Tempo](#subtrair-tempo)
  * [Começo do Tempo](#começo-do-tempo)
  * [Fim do Tempo](#fim-do-tempo)
* [Visualização](#visualização)
  * [Formatar](#formatar)
  * [Diferença](#diferença)
  * [Unix Timestamp (milliseconds)](#unix-timestamp-milissegundos-1)
  * [Unix Timestamp (seconds)](#unix-timestamp-segundos)
  * [Dias no Mês](#days-in-month)
  * [Como Date do Javascript](#como-date-do-javascript)
  * [Como Array](#como-array)
  * [Como JSON](#como-json)
  * [Como String ISO 8601](#como-string-iso-8601)
  * [Como Object](#como-object)
  * [Como String](#como-string)
* [Verificação](#verificação)
  * [Antes](#antes)
  * [Igual](#igual)
  * [Depois](#depois)
  * [Is a Dayjs `.isDayjs()`](#is-a-dayjs-isdayjscompared-any)
* [Plugin APIs](#plugin-apis)
  * [RelativeTime](#relativetime)
  * [IsLeapYear](#isleapyear)

---
O Day.js sempre irá retornar um novo objeto `Dayjs` se nada for especificado.

### Criação

Pode-se criar objetos Dayjs chamando `dayjs()`, passando um dos vários tipos de parâmetro disponíveis.

#### Data e hora atual

Se não passar nenhum parâmetro, o objeto `Dayjs` usará a data e hora atual.

```js
dayjs();
```

### String

String que atende ao formato [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

```js
dayjs(String);
dayjs('1995-12-25');
```

### Unix Timestamp (millisegundos)

Valor inteiro representando o número de milissegundos desde o Unix Epoch (meio-dia de 1º de janeiro de 1970, no fuso horário UTC).

```js
dayjs(Number);
dayjs(1318781876406);
```

### Date

Objeto Date nativo do Javascript.

```js
dayjs(Date);
dayjs(new Date(2018, 8, 18));
```

### Clonar

Todos os objetos `Dayjs` são imutáveis. Se quiser uma cópia, simplesmente chame `.clone()`.
Chamar `dayjs()` passando um objeto `Dayjs` também irá cloná-lo.

```js
dayjs(Dayjs);
dayjs().clone();
```

### Validação

* retorna um Boolean

Se a data do objeto `Dayjs` é considerada válida.

```js
dayjs().isValid();
```

---

### Get e Set

Obter (get) e modificar (set) datas.

#### Ano

* retorna um Number.

```js
dayjs().year();
```

#### Mês

* retorna um Number

```js
dayjs().month();
```

#### Dia do Mês

* retorna um Number

```js
dayjs().date();
```

#### Dia da Semana

* retorna um Number

```js
dayjs().day();
```

#### Hora

* retorna um Number

```js
dayjs().hour();
```

#### Minuto

* retorna um Number

```js
dayjs().minute();
```

#### Segundo

* retorna um Number

```js
dayjs().second();
```

#### Milisegundo

* retorna um Number

```js
dayjs().millisecond();
```

#### Set

Modificar a data.
As unidades não fazem distinção entre maiúsculas e minúsculas.

```js
dayjs().set((unit: String), (value: Int));
dayjs().set('date', 1);
dayjs().set('month', 3); // April
dayjs().set('second', 30);
```

---

### Manipulação

É possível manipular um objeto `Dayjs` de várias formas. Por exemplo:

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .subtract(1, 'year');
```

#### Adicionar Tempo

Novo objeto `Dayjs` com tempo adicionado.

```js
dayjs().add((value: Number), (unit: String));
dayjs().add(7, 'day');
```

#### Subtrair Tempo

Novo objeto `Dayjs`com tempo subtraído.

```js
dayjs().subtract((value: Number), (unit: String));
dayjs().subtract(7, 'year');
```

#### Começo do Tempo

Novo objeto `Dayjs`com tempo voltado para o começo da unidade de tempo passada.

```js
dayjs().startOf((unit: String));
dayjs().startOf('year');
```

#### Fim do Tempo

Novo objeto `Dayjs`com tempo adiantado para o fim da unidade de tempo passada.

```js
dayjs().endOf((unit: String));
dayjs().endOf('month');
```

---

### Visualização

Existem várias maneiras de mostrar o objeto `Dayjs` para o usuário.

#### Formatar

* retorna uma string

Recebe uma string com símbolos que serão substituídos por seus valores correspondentes.

```js
dayjs().format(String);
dayjs().format(); // "2014-09-08T08:02:17-05:00" (ISO 8601, sem fração de segundo)
dayjs().format('{YYYY} MM-DDTHH:mm:ssZ[Z]'); // "{2014} 09-08T08:02:17-05:00Z"
```

* Para não processar caracteres na string passada como parâmetro, coloque-os entre chaves (ex: [Z]).

Lista de todos os formatos disponíveis:

| Formato | Saída            | Descrição                                     |
| ------  | ---------------- | --------------------------------------------- |
| `YY`    | 18               | Ano, com 2 dígitos                            |
| `YYYY`  | 2018             | Ano, com 4 dígitos                            |
| `M`     | 1-12             | Mês (começa em 1)                             |
| `MM`    | 01-12            | Mês, com 2 dígitos                            |
| `MMM`   | Jan-Dec          | Nome do mês abreviado                         |
| `MMMM`  | January-December | Nome do mês completo                          |
| `D`     | 1-31             | Dia do mês                                    |
| `DD`    | 01-31            | Dia do mês, com 2 dígitos                     |
| `d`     | 0-6              | Dia da semana (Domingo = 0)                   |
| `dd`    | Su-Sa            | The min name of the day of the week   |
| `ddd`   | Sun-Sat          | The short name of the day of the week |
| `dddd`  | Sunday-Saturday  | Nome do dia da semana                         |
| `H`     | 0-23             | Hora                                          |
| `HH`    | 00-23            | Hora, com 2 dígitos                           |
| `h`     | 1-12             | Hora (formato de 12 horas)                    |
| `hh`    | 01-12            | Hora, com 2 dígitos (formato de 12 horas)     |
| `m`     | 0-59             | Minuto                                        |
| `mm`    | 00-59            | Minuto, com 2 dígitos                         |
| `s`     | 0-59             | Segundo                                       |
| `ss`    | 00-59            | Segundo, com 2 dígitos                        |
| `SSS`   | 000-999          | Milisegundo, com 3 dígitos                    |
| `Z`     | +5:00            | Diferença do fuso horário UTC                 |
| `ZZ`    | +0500            | Diferença do fuso horário UTC, com 2 dígitos  |
| `A`     | AM PM            |                                               |
| `a`     | am pm            |                                               |

* More available formats `Q Do k kk X x ...` in plugin [`AdvancedFormat`](./Plugin.md#advancedformat)

#### Diferença

* retorna um Number

Diferença de dois objetos `Dayjs` em milissegundos ou outra unidade de tempo especificada.

```js
dayjs().diff(Dayjs, unit);
dayjs().diff(dayjs(), 'years'); // 0
```

#### Unix Timestamp (milissegundos)

* retorna um Number

Número de milissegundos desde o Unix Epoch.

```js
dayjs().valueOf();
```

#### Unix Timestamp (segundos)

* retorna um Number

Número de segundos desde o Unix Epoch.

```js
dayjs().unix();
```

#### Dias no Mês

* retorna um Number

Número de dias no mês atual.

```js
dayjs().daysInMonth();
```

#### Como Date do Javascript

* retorna um objeto `Date` do Javascript

Obter cópia de um objeto `Date` nativo a partir do objeto `Dayjs`.

```js
dayjs().toDate();
```

#### Como Array

* retorna um Array

Retorna um array no formato dos parâmetros de `new Date()`.

```js
dayjs().toArray(); //[2018, 8, 18, 00, 00, 00, 000];
```

#### Como JSON

* retorna uma string

Ao serializar um objeto `Dayjs` para JSON, retornará uma string no padrão ISO 8601.

```js
dayjs().toJSON(); //"2018-08-08T00:00:00.000Z"
```

#### Como String ISO 8601

* retorna uma string

Retorna uma string no padrão ISO 8601.

```js
dayjs().toISOString();
```

#### Como Object

* retorna um Object

Retorna um Object contendo de ano a milisegundo.

```js
dayjs().toObject(); // { years:2018, months:8, date:18, hours:0, minutes:0, seconds:0, milliseconds:0}
```

#### Como String

* retorna uma string

```js
dayjs().toString();
```

---

### Verificação

#### Antes

* retorna um Boolean

Se a data de um objeto `Dayjs` é anterior à de outro objeto `Dayjs`.

```js
dayjs().isBefore(Dayjs);
dayjs().isBefore(dayjs()); // false
```

#### Igual

* retorna um Boolean

Se a data de um objeto `Dayjs` é igual à de outro objeto `Dayjs`.

```js
dayjs().isSame(Dayjs);
dayjs().isSame(dayjs()); // true
```

#### Depois

* retorna um Boolean

Se a data de um objeto `Dayjs` é posterior à de outro objeto `Dayjs`.

```js
dayjs().isAfter(Dayjs);
dayjs().isAfter(dayjs()); // false
```

### Is a Dayjs `.isDayjs(compared: any)`

Returns a `boolean` indicating whether a variable is a dayjs object or not.

```js
dayjs.isDayjs(dayjs()); // true
dayjs.isDayjs(new Date()); // false
```

#### Ano Bissexto

**[DEPRECATED] in 1.7.0, use [`IsLeapYear plugin`](./Plugin.md#isleapyear) instead**

* retorna um Boolean

Se um ano é bissexto.

```js
dayjs().isLeapYear();
dayjs('2000-01-01').isLeapYear(); // true
```

## Plugin APIs

### RelativeTime

`.from` `.to` `.fromNow` `.toNow` to get relative time

plugin [`RelativeTime`](./Plugin.md#relativetime)

### IsLeapYear

`.isLeapYear` to get is a leap year or not

plugin [`IsLeapYear`](./Plugin.md#isleapyear)
