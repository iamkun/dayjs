# Query

Day.js provides methods to compare and query dates.

## Comparison

```javascript
const a = dayjs('2024-01-01');
const b = dayjs('2024-06-15');

a.isBefore(b);          // true
b.isBefore(a);          // false
a.isBefore(b, 'year');  // false (same year)

a.isAfter(b);           // false
b.isAfter(a);           // true

a.isSame(a);            // true
a.isSame(b);            // false
a.isSame(b, 'year');    // true (both 2024)
```

## Is Same or Before / After (with plugins)

```javascript
dayjs.extend(IsSameOrBefore);
dayjs.extend(IsSameOrAfter);

a.isSameOrBefore(b);    // true
b.isSameOrBefore(a);    // false
b.isSameOrAfter(a);     // true
```

## Is Between (with IsBetween plugin)

```javascript
dayjs.extend(IsBetween);

dayjs('2024-03-15').isBetween('2024-01-01', '2024-06-30');
// true

dayjs('2024-07-01').isBetween('2024-01-01', '2024-06-30');
// false

dayjs('2024-01-01').isBetween('2024-01-01', '2024-06-30', null, '[)');
// true (inclusive start, exclusive end)
```

## Leap Year (with IsLeapYear plugin)

```javascript
dayjs.extend(IsLeapYear);

dayjs('2024-01-01').isLeapYear(); // true (2024 is a leap year)
dayjs('2023-01-01').isLeapYear(); // false
```

## Today / Tomorrow / Yesterday (with plugins)

```javascript
dayjs.extend(IsToday);
dayjs.extend(IsTomorrow);
dayjs.extend(IsYesterday);

dayjs().isToday();       // true
dayjs().add(1, 'day').isTomorrow(); // true
dayjs().subtract(1, 'day').isYesterday(); // true
```

## Validation

```javascript
dayjs('2024-01-15').isValid();  // true
dayjs('').isValid();            // false
dayjs(null).isValid();          // false
dayjs('invalid-date').isValid(); // false
```

## isDayjs

```javascript
dayjs.isDayjs(dayjs());  // true
dayjs.isDayjs(new Date());// false
dayjs.isDayjs('string'); // false
```
