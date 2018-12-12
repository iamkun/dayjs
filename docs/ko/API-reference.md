## API Reference

Day.js는 네이티브 `Date.prototype`을 수정하는 대신 `Dayjs` 오브젝트인 Date 오브젝트 래퍼를 생성합니다.

`Dayjs` 오브젝트는 변경이 불가능(immutable)합니다. 즉, 모든 API 작업은 새로운 `Dayjs` 오브젝트를 반환합니다.

- [API Reference](#api-reference)
  - [Parsing](#parsing)
    - [Constructor `dayjs(existing?: string | number | Date | Dayjs)`](#constructor-dayjsexisting--string-number-date-dayjs)
      - [ISO 8601 string](#iso-8601https---enwikipediaorg-wiki-iso-8601-string)
      - [Native Javascript Date object](#native-javascript-date-object)
      - [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds)
    - [Unix Timestamp (seconds)](#unix-timestamp-seconds-unixvalue-number)
    - [Clone `.clone() | dayjs(original: Dayjs)`](#clone-clone-dayjsoriginal--dayjs)
    - [Validation `.isValid()`](#validation-isvalid)
  - [Get and Set](#get-and-set)
    - [Year `.year()`](#year-year)
    - [Month `.month()`](#month-month)
    - [Day of the Month `.date()`](#day-of-the-month-date)
    - [Day of the Week `.day()`](#day-of-the-week-day)
    - [Hour `.hour()`](#hour-hour)
    - [Minute `.minute()`](#minute-minute)
    - [Second `.second()`](#second-second)
    - [Millisecond `.millisecond()`](#millisecond-millisecond)
    - [Set `.set(unit: string, value: number)`](#set-setunit--string--value--number)
  - [Manipulating](#manipulating)
    - [Add `.add(value: number, unit: string)`](#add-addvalue--number--unit--string)
    - [Subtract `.subtract(value: number, unit: string)`](#subtract-subtractvalue--number--unit--string)
    - [Start of Time `.startOf(unit: string)`](#start-of-time-startofunit--string)
    - [End of Time `.endOf(unit: string)`](#end-of-time-endofunit--string)
  - [Displaying](#displaying)
    - [Format `.format(stringWithTokens: string)`](#format-formatstringwithtokens--string)
       - [List of all available formats](#list-of-all-available-formats)
    - [Difference `.diff(compared: Dayjs, unit: string (default: 'milliseconds'), float?: boolean)`](#difference-diffcompared--dayjs--unit--string-default--milliseconds--float--boolean)
    - [Unix Timestamp (milliseconds) `.valueOf()`](#unix-timestamp-milliseconds-valueof)
    - [Unix Timestamp (seconds) `.unix()`](#unix-timestamp-seconds-unix)
    - [Days in the Month `.daysInMonth()`](#days-in-the-month-daysinmonth)
    - [As Javascript Date `.toDate()`](#as-javascript-date-todate)
    - [As Array `.toArray()`](#as-array-toarray)
    - [As JSON `.toJSON()`](#as-json-tojson)
    - [As ISO 8601 String `.toISOString()`](#as-iso-8601-string-toisostring)
    - [As Object `.toObject()`](#as-object-toobject)
    - [As String `.toString()`](#as-string-tostring)
  - [Query](#query)
    - [Is Before `.isBefore(compared: Dayjs, unit?: string)`](#is-before-isbeforecompared--dayjs-unit-string)
    - [Is Same `.isSame(compared: Dayjs, unit?: string)`](#is-same-issamecompared--dayjs-unit-string)
    - [Is After `.isAfter(compared: Dayjs, unit?: string)`](#is-after-isaftercompared--dayjs-unit-string)
    - [Is a Dayjs `.isDayjs()`](#is-a-dayjs-isdayjscompared-any)
  - [Plugin APIs](#plugin-apis)
    - [RelativeTime](#relativetime)
    - [IsLeapYear](#isleapyear)
    - [WeekOfYear](#weekofyear)
    - [IsBetween](#isbetween)

## Parsing

### Constructor `dayjs(existing?: string | number | Date | Dayjs)`

매개 변수없이 호출하면 현재 날짜와 시간을 가진 새로운 `Dayjs` 오브젝트가 반환됩니다.

```js
dayjs();
```

Day.js는 다른 날짜 형식도 구분 분석합니다.

#### [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string

```js
dayjs('2018-04-04T16:00:00.000Z');
```

#### Native Javascript Date object

```js
dayjs(new Date(2018, 8, 18));
```

#### Unix Timestamp (milliseconds)

Returns a `Dayjs` from a Unix timestamp (milliseconds since the Unix Epoch)

```js
dayjs(1318781876406);
```

### Unix Timestamp (seconds) `.unix(value: number)`

Returns a `Dayjs` from a Unix timestamp (seconds since the Unix Epoch)

```js
dayjs.unix(1318781876);
dayjs.unix(1318781876.721);
```

### Clone `.clone() | dayjs(original: Dayjs)`

`Dayjs` 클론 오브젝트를 반환합니다.

```js
dayjs().clone();
dayjs(dayjs('2019-01-25')); // passing a Dayjs object to a constructor will also clone it
```

### Validation `.isValid()`

`Dayjs` 날짜가 유효한지 확인합니다. 반환 타입은 `boolean` 입니다.

```js
dayjs().isValid();
```

## Get and Set

### Year `.year()`

`Dayjs`에서 연도 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs().year();
```

### Month `.month()`

`Dayjs`에서 달을 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs().month();
```

### Day of the Month `.date()`

`Dayjs`에서 날짜를 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs().date();
```

### Day of the Week `.day()`

`Dayjs`에서 요일을 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs().day();
```

### Hour `.hour()`

`Dayjs`에서 시를 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs().hour();
```

### Minute `.minute()`

`Dayjs`에서 분을 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs().minute();
```

### Second `.second()`

`Dayjs`에서 초를 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs().second();
```

### Millisecond `.millisecond()`

`Dayjs`에서 밀리 초를 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs().millisecond();
```

### Set `.set(unit: string, value: number)`

변경 사항이 적용된 `Dayjs`를 반환합니다.

```js
dayjs().set('date', 1);
dayjs().set('month', 3); // April
dayjs().set('second', 30);
```

#### List of all available units

| Unit          | Shorthand | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `date`        |           | Date of Month                            |
| `day`         | `d`       | Day of Week (Sunday as 0, Saturday as 6) |
| `month`       | `M`       | Month                                    |
| `year`        | `y`       | Year                                     |
| `hour`        | `h`       | Hour                                     |
| `minute`      | `m`       | Minute                                   |
| `second`      | `s`       | Second                                   |
| `millisecond` | `ms`      | Millisecond                              |

## Manipulating

`Dayjs` 오브젝트는 여러 방법으로 처리할 수 있습니다.

```js
dayjs('2019-01-25')
  .add(1, 'day')
  .subtract(1, 'year').toString(); // Fri, 26 Jan 2018 00:00:00 GMT
```

### Add `.add(value: number, unit: string)`

지정한 시간을 더한 `Dayjs` 오브젝트 복제본을 반환합니다.

```js
dayjs().add(7, 'day');
```

### Subtract `.subtract(value: number, unit: string)`

지정한 시간을 뺀 `Dayjs` 오브젝트 복제본을 반환합니다.

```js
dayjs().subtract(7, 'year');
```

### Start of Time `.startOf(unit: string)`

특정 시간 단위의 시작 시점에 대한 시간을 `Dayjs` 오브젝트 복제본으로 반환합니다.

```js
dayjs().startOf('week');
```

### End of Time `.endOf(unit: string)`

특정 시간 단위의 끝나는 시점에 대한 시간을 `Dayjs` 오브젝트 복제본으로 반환힙니다.

```js
dayjs().endOf('month');
```

## Displaying

### Format `.format(stringWithTokens: string)`

`Dayjs` 오브젝트 시간을 기본 형식으로 출력합니다. 반환 형식은 `string` 입니다.
예외하고 싶은 문자일 경우, 대괄호나 중괄호를 사용하여 묶으면됩니다. (예, `[G] {um}`)

```js
dayjs().format(); // 분과 초가 없는 ISO5801 형식의 현재 시간을 나타냅니다. 예: '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('{YYYY} MM-DDTHH:mm:ssZ[Z]'); // '{2019} 01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY'); // '25/01/2019'
```

#### List of all available formats

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | 두 자리로 된 연도                      |
| `YYYY` | 2018             | 네 자리로 된 연도                      |
| `M`    | 1-12             | 달, 1부터 시작                         |
| `MM`   | 01-12            | 달, 두 자리로 표현                     |
| `MMM`  | Jan-Dec          | 월 이름 약어                           |
| `MMMM` | January-December | 월 이름                               |
| `D`    | 1-31             | 일                                    |
| `DD`   | 01-31            | 일, 두 자리로 표현                     |
| `d`    | 0-6              | 요일, 일요일은 0                       |
| `dd`   | Su-Sa            | The min name of the day of the week   |
| `ddd`  | Sun-Sat          | The short name of the day of the week |
| `dddd` | Sunday-Saturday  | 요일 이름                              |
| `H`    | 0-23             | 시간                                  |
| `HH`   | 00-23            | 시간, 두 자리로 표현                   |
| `h`    | 1-12             | 시간, 12시간                          |
| `hh`   | 01-12            | 시간, 12시간, 두 자리로 표현           |
| `m`    | 0-59             | 분                                    |
| `mm`   | 00-59            | 분, 두 자리로 표현                     |
| `s`    | 0-59             | 초                                    |
| `ss`   | 00-59            | 초, 두 자리로 표현                     |
| `SSS`  | 000-999          | 밀리 초, 3자리로 표현                  |
| `Z`    | +5:00            | UTC로부터 추가된 시간                  |
| `ZZ`   | +0500            | UTC로부터 추가된 시간, 두자리로 표현    |
| `A`    | AM PM            |                                       |
| `a`    | am pm            |                                       |

* 플러그인 [`AdvancedFormat`](./Plugin.md#advancedformat) 을 사용하면 더 많은 형식(`Q Do k kk X x ...`)을 사용할 수 있습니다.

### Difference `.diff(compared: Dayjs, unit: string (default: 'milliseconds'), float?: boolean)`

두 `Dayjs` 오브젝트 차이를 지정한 단위로 가져옵니다. 반환 타입은 `number` 입니다.

```js
const date1 = dayjs('2019-01-25');
const date2 = dayjs('2018-06-05');
date1.diff(date2); // 20214000000
date1.diff(date2, 'month'); // 7
date1.diff(date2, 'month', true); // 7.645161290322581
date1.diff(date2, 'day'); // 233
```

### Unix Timestamp (milliseconds) `.valueOf()`

`Dayjs`에 대한 Unix Epoch 이후의 밀리 초 시간을 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs('2019-01-25').valueOf(); // 1548381600000
```

### Unix Timestamp (seconds) `.unix()`

`Dayjs`에 대한 Unix Epoch 이후의 초 시간을 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs('2019-01-25').unix(); // 1548381600
```

### Days in the Month `.daysInMonth()`

`Dayjs`에서 표기하는 달에서 일수를 가져옵니다. 반환 타입은 `number` 입니다.

```js
dayjs('2019-01-25').daysInMonth(); // 31
```

### As Javascript Date `.toDate()`

`Dayjs` 오브젝트에서 파싱된 네이티브 `Date` 오브젝트 복사본을 반환합니다.  

```js
dayjs('2019-01-25').toDate();
```

### As Array `.toArray()`

새로운 `Date()`로부터 매개변수로 입력한 날짜를 가져옵니다. 반환 타입은 `array` 입니다.

```js
dayjs('2019-01-25').toArray(); // [ 2019, 01, 25, 0, 0, 0, 0 ]
```

### As JSON `.toJSON()`

ISO8601에 대한 형식으로 `Dayjs`를 출력합니다. 반환 타입은 `string` 입니다.

```js
dayjs('2019-01-25').toJSON(); // '2019-01-25T02:00:00.000Z'
```

### As ISO 8601 String `.toISOString()`

ISO8601에 대한 형식으로 `Dayjs`를 출력합니다. 반환 타입은 `string` 입니다.

```js
dayjs('2019-01-25').toISOString(); // '2019-01-25T02:00:00.000Z'
```

### As Object `.toObject()`

날짜 속성을 가진 `object` 타입 값으로 반환합니다.

```js
dayjs('2019-01-25').toObject();
/* { years: 2019,
     months: 0,
     date: 25,
     hours: 0,
     minutes: 0,
     seconds: 0,
     milliseconds: 0 } */
```

### As String `.toString()`

날짜를 `string` 타입 값으로 반환합니다.

```js
dayjs('2019-01-25').toString(); // 'Fri, 25 Jan 2019 02:00:00 GMT'
```

## Query

### Is Before `.isBefore(compared: Dayjs, unit?: string)`

`Dayjs`가 다른 `Dayjs`보다 앞선 시점인지를 확인합니다. 반환 타입은 `boolean` 입니다.

```js
dayjs().isBefore(dayjs()); // false
dayjs().isBefore(dayjs(), 'year'); // false
```

### Is Same `.isSame(compared: Dayjs, unit?: string)`

`Dayjs`가 다른 `Dayjs`과 동일한 시점인지를 확인합니다. 반환 타입은 `boolean` 입니다.

```js
dayjs().isSame(dayjs()); // true
dayjs().isSame(dayjs(), 'year'); // true
```

### Is After `.isAfter(compared: Dayjs, unit?: string)`

`Dayjs`가 다른 `Dayjs`보다 뒷선 시점인지를 확인합니다. 반환 타입은 `boolean` 입니다.

```js
dayjs().isAfter(dayjs()); // false
dayjs().isAfter(dayjs(), 'year'); // false
```

### Is a Dayjs `.isDayjs(compared: any)`

Returns a `boolean` indicating whether a variable is a dayjs object or not.

```js
dayjs.isDayjs(dayjs()); // true
dayjs.isDayjs(new Date()); // false
```

## Plugin APIs

### RelativeTime

`.from` `.to` `.fromNow` `.toNow`에 대한 상대 시간을 가져옵니다.

플러그인 [`RelativeTime`](./Plugin.md#relativetime)

### IsLeapYear

`.isLeapYear` to get is a leap year or not

plugin [`IsLeapYear`](./Plugin.md#isleapyear)

### WeekOfYear

`.week` to get week of the year

plugin [`WeekOfYear`](./Plugin.md#weekofyear)

### IsBetween

`.isBetween` to check if a date is between two other dates

plugin [`IsBetween`](./Plugin.md#isbetween)
