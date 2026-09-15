# Get + Set

Day.js provides getter and setter methods for reading and modifying date components.

## Getter

```javascript
const d = dayjs('2024-06-15');

d.year();        // 2024
d.month();       // 5 (0-indexed, January = 0)
d.date();        // 15
d.day();         // 6 (Sunday = 0, Saturday = 6)
d.hour();        // 0
d.minute();      // 0
d.second();      // 0
d.millisecond(); // 0
```

## Generic Getter

```javascript
d.get('year');  // 2024
d.get('month'); // 5
d.get('date');  // 15
d.get('day');   // 6
```

## Setter

Setters return a new Day.js instance (immutable):

```javascript
const d = dayjs('2024-06-15');

d.year(2025);        // June 15, 2025
d.month(0);          // January 15, 2024
d.date(1);           // June 1, 2024
d.hour(12);          // June 15, 2024 12:00
d.minute(30);        // June 15, 2024 00:30
d.second(45);        // June 15, 2024 00:00:45
```

## Generic Setter

```javascript
d.set('year', 2025);
d.set('month', 11);
d.set('date', 25);
d.set('hour', 14);
```

## Plugin-enhanced Getters/Setters

```javascript
// With weekOfYear plugin
dayjs.extend(weekOfYear);
d.week();       // current week of year
d.week(25);     // set week of year

// With IsoWeek plugin
dayjs.extend(IsoWeek);
d.isoWeek();       // ISO week number
d.isoWeekday();    // ISO weekday (Monday=1)

// With QuarterOfYear plugin
dayjs.extend(QuarterOfYear);
d.quarter();       // 2 (Q2)

// With DayOfYear plugin
dayjs.extend(DayOfYear);
d.dayOfYear();     // 167
```
