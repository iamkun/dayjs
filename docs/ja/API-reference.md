## API Reference

Day.js は組み込みの `Date.prototype` を変更する代わりに `Dayjs` オブジェクトと呼ばれる Date オブジェクトのラッパーを作成します。

`Dayjs` オブジェクトは不変 (immutable) です。すなわち、すべての API 操作は新しい `Dayjs` オブジェクトを返します。

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
* [Plugin APIs](#plugin-apis)
  * [RelativeTime](#relativetime)

---

Day.js は指定されない限り、常に新しい Dayjs オブジェクトを返します。

### Parse

サポートされている入力形式のいずれかで `dayjs()` を呼び出します。

#### Now

現在の日付と時間を取得するには、パラメータなしで dayjs() を呼び出します。

```js
dayjs();
```

### String

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) に準拠する形式から作成します。

```js
dayjs(String);
dayjs('1995-12-25');
```

### Unix Timestamp (milliseconds)

Unix エポック (1970年1月1日 12:00AM UTC) 以降のミリ秒数を表す整数値を渡します。

```js
dayjs(Number);
dayjs(1318781876406);
```

### Date

JavaScript の組み込みの Date オブジェクトを渡します。

```js
dayjs(Date);
dayjs(new Date(2018, 8, 18));
```

### Clone

すべての `Dayjs` は不変 (immutable) です。 オブジェクトのコピーが必要な場合は、 `.clone()` を呼び出してください。
`Dayjs` オブジェクトに対して dayjs() を呼び出すと、それもクローンされます。

```js
dayjs(Dayjs);
dayjs().clone();
```

### Validation

* Boolean を返します

`Dayjs` オブジェクトが有効な日付かどうかをチェックします。

```js
dayjs().isValid();
```

---

### Get + Set

日付の取得と設定です。

#### Year

* Number を返します

年を取得します。

```js
dayjs().year();
```

#### Month

* Number を返します

月を取得します。

```js
dayjs().month();
```

#### Date of Month

* Number を返します

日を取得します。

```js
dayjs().date();
```

#### Day of Week

* Number を返します

曜日を取得します。

```js
dayjs().day();
```

#### Hour

* Number を返します

時間を取得します。

```js
dayjs().hour();
```

#### Minute

* Number を返します

分を取得します。

```js
dayjs().minute();
```

#### Second

* Number を返します

秒を取得します。

```js
dayjs().second();
```

#### Millisecond

* Number を返します

ミリ秒を取得します。

```js
dayjs().millisecond();
```

#### Set

日付のセッターです。
単位は大文字・小文字を区別しません。

```js
dayjs().set((unit: String), (value: Int));
dayjs().set('month', 3); // 4月
dayjs().set('second', 30);
```

---

### Manipulate

`Dayjs` オブジェクトは次のような方法で操作することができます:

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .subtract(1, 'year');
```

#### Add

時間を足して新しい `Dayjs` オブジェクトを返します。

```js
dayjs().add((value: Number), (unit: String));
dayjs().add(7, 'day');
```

#### Subtract

時間を引いて新しい `Dayjs` オブジェクトを返します。 `dayjs#add` と全く同じです。

```js
dayjs().subtract((value: Number), (unit: String));
dayjs().subtract(7, 'year');
```

#### Start of Time

Returns a new `Dayjs` object by by setting it to the start of a unit of time.

ある単位の始まりの時間の新しい `Dayjs` オブジェクトを返します。

```js
dayjs().startOf((unit: String));
dayjs().startOf('year');
```

#### End of Time

ある単位の終わりの時間の新しい `Dayjs` オブジェクトを返します。

```js
dayjs().endOf((unit: String));
dayjs().endOf('month');
```

---

### Display

パースや操作が完了したならば `Dayjs` オブジェクトを表示する方法が求められるはずです。

#### Format

* String を返します

文字列を受け取り、対応する日付の値で置き換えます。

```js
dayjs().format(String);
dayjs().format(); // "2014-09-08T08:02:17-05:00" (ISO 8601 形式、小数部は含まない)
dayjs().format('{YYYY} MM-DDTHH:mm:ssZ[Z]'); // "{2014} 09-08T08:02:17-05:00Z"
```

* 文字列内の文字をエスケープするには、文字を角括弧で囲みます (例: [Z]) 。

使用可能なフォーマットの一覧:

| フォーマット | 出力           | 説明                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | 2桁の年                        |
| `YYYY` | 2018             | 4桁の年                       |
| `M`    | 1-12             | 1始まりの月             |
| `MM`   | 01-12            | 1始まりかつ2桁の月                   |
| `MMM`  | Jan-Dec          | 月の略称            |
| `MMMM` | January-December | 月の正式名                   |
| `D`    | 1-31             | 日                  |
| `DD`   | 01-31            | 2桁の日        |
| `d`    | 0-6              | 曜日 (日曜は0) |
| `dddd` | Sunday-Saturday  | 曜日名       |
| `H`    | 0-23             | 時間                              |
| `HH`   | 00-23            | 2桁の時間                    |
| `h`    | 1-12             | 12時制の時間               |
| `hh`   | 01-12            | 12時制かつ2桁の時間     |
| `m`    | 0-59             | 分                            |
| `mm`   | 00-59            | 2桁の分                  |
| `s`    | 0-59             | 秒                            |
| `ss`   | 00-59            | 2桁の秒                  |
| `SSS`  | 000-999          | 3桁のミリ秒             |
| `Z`    | +5:00            | UTC からのオフセット                   |
| `ZZ`   | +0500            | UTC からの2桁のオフセット         |
| `A`    | AM PM            | 午前と午後 (大文字)                                      |
| `a`    | am pm            | 午前と午後 (小文字)                                      |

* More available formats `Q Do k kk X x ...` in plugin [`AdvancedFormat`](./Plugin.md#advancedformat)

#### Difference

* Number を返します

2つの `Dayjs` オブジェクトの差をミリ秒単位で取得します。

```js
dayjs().diff(Dayjs, unit);
dayjs().diff(dayjs(), 'years'); // 0
```

#### Unix Timestamp (milliseconds)

* Number を返します

Unix エポックからのミリ秒数を出力します。

```js
dayjs().valueOf();
```

#### Unix Timestamp (seconds)

* Number を返します

Unix タイムスタンプ (Unix エポックからの秒数) を出力します。

```js
dayjs().unix();
```

#### Days in Month

* Number を返します

その月の日数を取得します。

```js
dayjs().daysInMonth();
```

#### As Javascript Date

* Javascript の `Date` オブジェクトを返します

`Dayjs` オブジェクトから組み込みの `Date` オブジェクトのコピーを取得します。

```js
dayjs().toDate();
```

#### As Array

* Array を返します

Date コンストラクタパラメータに対応する値の配列を返します。

```js
dayjs().toArray(); //[2018, 8, 18, 00, 00, 00, 000];
```

#### As JSON

* JSON String を返します

Serializing a `Dayjs` object to JSON, will return an ISO8601 string.

`Dayjs` オブジェクトを JSON シリアライズし、ISO8601 形式の日付文字列を返します。

```js
dayjs().toJSON(); //"2018-08-08T00:00:00.000Z"
```

#### As ISO 8601 String

* String を返します

ISO8601 形式の文字列にフォーマットします。

```js
dayjs().toISOString();
```

#### As Object

* Object を返します

年、月、...（中略）...、ミリ秒のオブジェクトを返します。


```js
dayjs().toObject(); // { years:2018, months:8, date:18, hours:0, minutes:0, seconds:0, milliseconds:0}
```

#### As String

* String を返します

```js
dayjs().toString();
```

---

### Query

#### Is Before

* Boolean を返します

`Dayjs` オブジェクトが別の `Dayjs` オブジェクト以前の値かどうかを判定します。

```js
dayjs().isBefore(Dayjs);
dayjs().isBefore(dayjs()); // false
```

#### Is Same

* Boolean を返します

`Dayjs` オブジェクトが別の `Dayjs` オブジェクトの値と等しいかどうかを判定します。

```js
dayjs().isSame(Dayjs);
dayjs().isSame(dayjs()); // true
```

#### Is After

* Boolean を返します

`Dayjs` オブジェクトが別の `Dayjs` オブジェクト以降の値かどうかを判定します。

```js
dayjs().isAfter(Dayjs);
dayjs().isAfter(dayjs()); // false
```

#### Is Leap Year

* Boolean を返します

その年がうるう年かどうかをチェックします。

```js
dayjs().isLeapYear();
dayjs('2000-01-01').isLeapYear(); // true
```

## Plugin APIs

### RelativeTime

`.from`, `.to`, `.fromNow`, `.toNow` to get relative time

plugin [`RelativeTime`](./Plugin.md#relativeTime)
