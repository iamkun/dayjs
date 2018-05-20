## API Reference

Вместо изменения прототипа стандартного объекта Date, Day.js использует обёртку для объекта Date с названием `Dayjs`.
Объект `Dayjs` неизменяемый, все операции с API возвращают новый `Dayjs` объект.

* [Parse](#parse)
  * [Now](#now)
  * [String](#string)
  * [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds)
  * [Date](#date)
  * [Clone](#clone)
  * [Validation](#validation)
* [Get + Set](#get--set)
  * [Year](#year)
  * [Month](#month)
  * [Date of Month](#date-of-month)
  * [Day of Week](#day-of-week)
  * [Hour](#hour)
  * [Minute](#minute)
  * [Second](#second)
  * [Millisecond](#millisecond)
  * [Set](#set)
* [Manipulate](#manipulate)
  * [Add](#add)
  * [Subtract](#subtract)
  * [Start of Time](#start-of-time)
  * [End of Time](#end-of-time)
* [Display](#display)
  * [Format](#format)
  * [Difference](#difference)
  * [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds-1)
  * [Unix Timestamp (seconds)](#unix-timestamp-seconds)
  * [Days in Month](#days-in-month)
  * [As Javascript Date](#as-javascript-date)
  * [As Array](#as-array)
  * [As JSON](#as-json)
  * [As ISO 8601 String](#as-iso-8601-string)
  * [As Object](#as-object)
  * [As String](#as-string)
* [Query](#query)
  * [Is Before](#is-before)
  * [Is Same](#is-same)
  * [Is After](#is-after)
  * [Is Leap Year](#is-leap-year)

---
Day.js возвращает новый объект, если иное не обговорено специально.

### Парсинг

Просто сделайте вызов `dayjs()` с одним из поддерживаемых параметров.
#### Текущее время

Чтобы получить текущую дату и время, просто вызовите dayjs() без параметров.

```js
dayjs();
```

### Строки

Создание из строки в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

```js
dayjs(String);
dayjs('1995-12-25');
```

### Unix Timestamp (milliseconds)

Передайте целое число, представляющее количество миллисекунд, прошедших с 00:00 1 Января 1970 года.

```js
dayjs(Number);
dayjs(1318781876406);
```

### Date

Передайте предопределённый стандартный объект Date.

```js
dayjs(Date);
dayjs(new Date(2018, 8, 18));
```

### Клонирование

Все `Dayjs` объекты неизменяемые. Если вы хотите получить копию объекта, просто вызовите `.clone()`.
Вызов dayjs() на `Dayjs` объекта так же скопирует его.

```js
dayjs(Dayjs);
dayjs().clone();
```

### Валидация

* returns a Boolean

Проверяет что `Dayjs` содержит неправильные данные.

```js
dayjs().isValid();
```

---

### Геттеры и Сеттеры

Получить и установить дату

#### Год

* returns a Number

Получить год.

```js
dayjs().year();
```

#### Месяц

* returns a Number

Получить месяц.

```js
dayjs().month();
```

#### Число месяца

* returns a Number

Получить номер дня в месяце.

```js
dayjs().date();
```

#### День недели.

* returns a Number

Получить номер дня недели.

```js
dayjs().day();
```

#### Час

* returns a Number

Получить час.

```js
dayjs().hour();
```

#### Минута

* returns a Number

Получить минуту.

```js
dayjs().minute();
```

#### Секунда.

* returns a Number

Получить секунду.

```js
dayjs().second();
```

#### Миллисекунда

* returns a Number

Получить миллисекунду.

```js
dayjs().millisecond();
```

#### Сеттер

Установщик даты.
Названия части регистронезависимы.

```js
dayjs().set((unit: String), (value: Int));
dayjs().set('month', 3); // Апрель
dayjs().set('second', 30);
```

---

### Манипуляции

Вы можете делать манипуляции с `Dayjs` объектом в следующем виде:

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .subtract(1, 'year');
```

#### Add

Returns a new `Dayjs` object by adding time.

```js
dayjs().add((value: Number), (unit: String));
dayjs().add(7, 'day');
```

#### Subtract

Returns a new `Dayjs` object by subtracting time. exactly the same as `dayjs#add`.

```js
dayjs().subtract((value: Number), (unit: String));
dayjs().subtract(7, 'year');
```

#### Start of Time

Returns a new `Dayjs` object by setting it to the start of a unit of time.

```js
dayjs().startOf((unit: String));
dayjs().startOf('year');
```

#### End of Time

Returns a new `Dayjs` object by setting it to the end of a unit of time.

```js
dayjs().endOf((unit: String));
dayjs().endOf('month');
```

---

### Display

Once parsing and manipulation are done, you need some way to display the `Dayjs` object.

#### Format

* returns a String

Принимает строку токенов и заменяет их в соответствие с их значениями.

```js
dayjs().format(String);
dayjs().format(); // "2014-09-08T08:02:17-05:00" (ISO 8601, без дробной части секунд)
dayjs().format('{YYYY} MM-DDTHH:mm:ssZ[Z]'); // "{2014} 09-08T08:02:17-05:00Z"
```

* Для экранирования символов в строке, оберните их в квадратные скобки (например [Z]).

Список всех доступных токенов:

| Формат | Результат        | Описание                             |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | Год, представленный двумя цифрами    |
| `YYYY` | 2018             | Год, представленный четырьмя цифрами |
| `M`    | 1-12             | Номер месяца (нумерация с 1)         |
| `MM`   | 01-12            | Номер месяца (двумя цифрами)        |
| `MMM`  | Jan-Dec          | Аббривеатура названия месяца          |
| `MMMM` | January-December | Полное название месяца                |
| `D`    | 1-31             | The day of the month                  |
| `DD`   | 01-31            | The day of the month, 2-digits        |
| `d`    | 0-6              | The day of the week, with Sunday as 0 |
| `dddd` | Sunday-Saturday  | The name of the day of the week       |
| `H`    | 0-23             | The hour                              |
| `HH`   | 00-23            | The hour, 2-digits                    |
| `h`    | 1-12             | The hour, 12-hour clock               |
| `hh`   | 01-12            | The hour, 12-hour clock, 2-digits     |
| `m`    | 0-59             | The minute                            |
| `mm`   | 00-59            | The minute, 2-digits                  |
| `s`    | 0-59             | Секунда                               |
| `ss`   | 00-59            | Секунда (двумя цифрами)              |
| `SSS`  | 000-999          | Миллисекунды (тремя цифрами)        |
| `Z`    | +5:00            | Смещение от UTC                      |
| `ZZ`   | +0500            | Смещение от UTC (двумя цифрами)     |
| `A`    | AM PM            | После полудня или до полудня         |
| `a`    | am pm            |                                       |

#### Difference

* returns a Number

Get the difference of two `Dayjs` objects in milliseconds or another unit.

```js
dayjs().diff(Dayjs, unit);
dayjs().diff(dayjs(), 'years'); // 0
```

#### Unix Timestamp (milliseconds)

* returns a Number

Outputs the number of milliseconds since the Unix Epoch

```js
dayjs().valueOf();
```

#### Unix Timestamp (seconds)

* returns a Number

Outputs a Unix timestamp (the number of seconds since the Unix Epoch).

```js
dayjs().unix();
```

#### Days in Month

* returns a Number

Получить количество дней в месяце.

```js
dayjs().daysInMonth();
```

#### As Javascript Date

* returns a Javascript `Date` object

Получить копию стандартного объекта `Date` из `Dayjs`.

```js
dayjs().toDate();
```

#### As Array

* returns an Array

Возвращает массив, который можно передать параметрами в new Date() конструктор.

```js
dayjs().toArray(); //[2018, 8, 18, 00, 00, 00, 000];
```

#### As JSON

* returns a JSON String

Сериализует `Dayjs` объект в JSON, возвращает строку в формате ISO8601.

```js
dayjs().toJSON(); //"2018-08-08T00:00:00.000Z"
```

#### As ISO 8601 String

* returns a String

Возвращает строку в формате ISO8601.

```js
dayjs().toISOString();
```

#### As Object

* returns an Object

Возвращает объект с ключами: год, месяц ... миллисекунды.

```js
dayjs().toObject(); // { years:2018, months:8, date:18, hours:0, minutes:0, seconds:0, milliseconds:0}
```

#### As String

* returns a String

```js
dayjs().toString();
```

---

### Запросы

#### Is Before

* returns a Boolean

Проверяет, что `Dayjs` представляет доту, перед другой датой.

```js
dayjs().isBefore(Dayjs);
dayjs().isBefore(dayjs()); // false
```

#### Is Same

* returns a Boolean

Проверяет, что `Dayjs` представляет одинаковую дату вместе с другим объектом.

```js
dayjs().isSame(Dayjs);
dayjs().isSame(dayjs()); // true
```

#### Is After

* returns a Boolean

Проверяет, что `Dayjs` представляет дату, после другой даты.

```js
dayjs().isAfter(Dayjs);
dayjs().isAfter(dayjs()); // false
```

#### Is Leap Year

* returns a Boolean

Проверяет что год - високосный.

```js
dayjs().isLeapYear();
dayjs('2000-01-01').isLeapYear(); // true
```
