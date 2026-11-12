# Display

Day.js provides methods to format and display dates in various ways.

## Format

```javascript
dayjs('2024-06-15').format();
// "2024-06-15T00:00:00+03:00" (ISO 8601)

dayjs('2024-06-15').format('YYYY-MM-DD');
// "2024-06-15"

dayjs('2024-06-15').format('dddd, MMMM D, YYYY');
// "Saturday, June 15, 2024"

dayjs('2024-06-15').format('HH:mm:ss');
// "00:00:00"

dayjs('2024-06-15').format('MM/DD/YYYY h:mm A');
// "06/15/2024 12:00 AM"
```

## Time from Now (with RelativeTime plugin)

```javascript
dayjs.extend(RelativeTime);

dayjs('2020-01-01').fromNow();
// "4 years ago"

dayjs().fromNow();
// "a few seconds ago"

dayjs().fromNow(true); // without suffix
// "a few seconds"
```

## Time from X (with RelativeTime plugin)

```javascript
dayjs.extend(RelativeTime);

const a = dayjs('2024-01-01');
const b = dayjs('2024-06-15');
a.from(b); // "5 months ago"
b.from(a); // "in 5 months"
```

## Time to Now / to X (with RelativeTime plugin)

```javascript
dayjs.extend(RelativeTime);

dayjs('2020-01-01').toNow();
// "in 4 years"

const a = dayjs('2024-01-01');
const b = dayjs('2024-06-15');
a.to(b); // "in 5 months"
b.to(a); // "5 months ago"
```

## Calendar Time (with Calendar plugin)

```javascript
dayjs.extend(Calendar);

dayjs().calendar();
// "Today at 8:02 PM"

dayjs('2024-06-14').calendar();
// "Yesterday at 12:00 AM"

dayjs('2024-06-22').calendar();
// "Next Saturday at 12:00 AM"

dayjs('2024-01-01').calendar();
// "01/01/2024"
```

## Difference

```javascript
const a = dayjs('2024-01-01');
const b = dayjs('2024-06-15');

b.diff(a);              // 14256000000 (milliseconds)
b.diff(a, 'day');       // 166
b.diff(a, 'month');     // 5
b.diff(a, 'year');      // 0
b.diff(a, 'day', true); // 166 (float)
```

## Unix Timestamps

```javascript
dayjs('2024-06-15').valueOf();
// 1718409600000 (milliseconds)

dayjs('2024-06-15').unix();
// 1718409600 (seconds)
```

## Days in Month

```javascript
dayjs('2024-02-01').daysInMonth();
// 29 (leap year)

dayjs('2024-01-01').daysInMonth();
// 31
```

## Native JavaScript Date Output

```javascript
dayjs('2024-06-15').toDate();
// Sat Jun 15 2024 00:00:00 GMT+0300

dayjs('2024-06-15').toJSON();
// "2024-06-14T21:00:00.000Z"

dayjs('2024-06-15').toISOString();
// "2024-06-14T21:00:00.000Z"

dayjs('2024-06-15').toArray();
// [2024, 5, 15, 0, 0, 0, 0]

dayjs('2024-06-15').toObject();
// { years: 2024, months: 5, date: 15, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }

dayjs('2024-06-15').toString();
// "Sat, 15 Jun 2024 00:00:00 GMT"
```
