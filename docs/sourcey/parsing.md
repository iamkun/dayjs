# Parsing

Day.js supports multiple input formats for creating date objects.

## Current Time

```javascript
const now = dayjs();
```

## ISO 8601 String

```javascript
dayjs('2024-01-15');
dayjs('2024-01-15T08:30:00Z');
dayjs('2024-01-15T08:30:00.000Z');
```

## Unix Timestamp (milliseconds)

```javascript
dayjs(1705312200000); // timestamp in milliseconds
```

## Unix Timestamp (seconds)

```javascript
dayjs.unix(1705312200); // timestamp in seconds
```

## JavaScript Date Object

```javascript
dayjs(new Date(2024, 0, 15));
```

## Object

```javascript
dayjs({ year: 2024, month: 0, day: 15 });
dayjs({ year: 2024, month: 0, day: 15, hour: 8, minute: 30 });
```

## Array

```javascript
dayjs([2024, 0, 15]);         // year, month (0-indexed), day
dayjs([2024, 0, 15, 8, 30]); // year, month, day, hour, minute
```

## Clone

```javascript
const a = dayjs();
const b = dayjs(a); // clones a
```

## UTC Mode (with UTC plugin)

```javascript
dayjs.extend(UTC);
dayjs.utc(); // current time in UTC
dayjs.utc('2024-01-15T08:00:00Z');
```

## Custom Format (with CustomParseFormat plugin)

```javascript
dayjs.extend(CustomParseFormat);
dayjs('15-01-2024', 'DD-MM-YYYY');
dayjs('2024/01/15', 'YYYY/MM/DD');
dayjs('2024.01.15 08:30', 'YYYY.MM.DD HH:mm');
```

## Validation

```javascript
dayjs('2024-01-15').isValid(); // true
dayjs('invalid-date').isValid(); // false
```
