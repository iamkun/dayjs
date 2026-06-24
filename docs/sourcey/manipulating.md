# Manipulating

Day.js provides methods to add, subtract, and manipulate dates.

## Add

Returns a new Day.js object with the specified time added:

```javascript
const d = dayjs('2024-01-15');

d.add(7, 'day');    // January 22, 2024
d.add(1, 'month');  // February 15, 2024
d.add(1, 'year');   // January 15, 2025
d.add(2, 'hour');   // 2 hours later
d.add(30, 'minute');// 30 minutes later
d.add(1, 'week');   // January 22, 2024
```

## Subtract

Returns a new Day.js object with the specified time subtracted:

```javascript
d.subtract(7, 'day');    // January 8, 2024
d.subtract(1, 'month');  // December 15, 2023
d.subtract(1, 'year');   // January 15, 2023
d.subtract(2, 'hour');   // 2 hours earlier
```

## Start Of

Sets the date to the start of the specified unit:

```javascript
dayjs('2024-06-15 10:30:45').startOf('year');
// 2024-01-01 00:00:00

dayjs('2024-06-15 10:30:45').startOf('month');
// 2024-06-01 00:00:00

dayjs('2024-06-15 10:30:45').startOf('week');
// 2024-06-09 00:00:00 (Sunday)

dayjs('2024-06-15 10:30:45').startOf('day');
// 2024-06-15 00:00:00

dayjs('2024-06-15 10:30:45').startOf('hour');
// 2024-06-15 10:00:00
```

## End Of

Sets the date to the end of the specified unit:

```javascript
dayjs('2024-06-15 10:30:45').endOf('year');
// 2024-12-31 23:59:59.999

dayjs('2024-06-15 10:30:45').endOf('month');
// 2024-06-30 23:59:59.999

dayjs('2024-06-15 10:30:45').endOf('day');
// 2024-06-15 23:59:59.999
```

## UTC / Local (with UTC plugin)

```javascript
dayjs.extend(UTC);

// Convert to UTC
dayjs().utc();

// Convert to local time
dayjs.utc('2024-01-15T08:00:00Z').local();
```

## UTC Offset (with UTC plugin)

```javascript
dayjs.extend(UTC);

dayjs().utcOffset();     // current offset in minutes
dayjs().utcOffset(120);  // set offset to UTC+2
```

## Min / Max (with MinMax plugin)

```javascript
dayjs.extend(MinMax);

dayjs.max(dayjs('2024-01-01'), dayjs('2024-06-15'));
// June 15, 2024

dayjs.min(dayjs('2024-01-01'), dayjs('2024-06-15'));
// January 1, 2024
```
