# Plugins

Day.js has a plugin system to extend functionality. The core is intentionally minimal; plugins add features on demand.

## Loading a Plugin

```javascript
import pluginName from 'dayjs/plugin/pluginName';
dayjs.extend(pluginName);
```

## Official Plugins

| Plugin | Description |
|--------|-------------|
| **AdvancedFormat** | Extended format tokens like `Q`, `Do`, `k`, `kk` |
| **ArraySupport** | Create Day.js from `[year, month, day]` arrays |
| **BadMutable** | Makes Day.js mutable (mutates original) |
| **BigIntSupport** | BigInt timestamp parsing |
| **BuddhistEra** | Buddhist Era (BE) year display |
| **Calendar** | `.calendar()` method for calendar-time strings |
| **CustomParseFormat** | Parse strings with custom format patterns |
| **DayOfYear** | `.dayOfYear()` getter/setter |
| **Duration** | Full duration/interval API |
| **IsBetween** | `.isBetween()` comparison |
| **IsLeapYear** | `.isLeapYear()` check |
| **IsSameOrAfter** | `.isSameOrAfter()` comparison |
| **IsSameOrBefore** | `.isSameOrBefore()` comparison |
| **IsToday** | `.isToday()` check |
| **IsTomorrow** | `.isTomorrow()` check |
| **IsYesterday** | `.isYesterday()` check |
| **IsoWeek** | ISO week getters/setters |
| **IsoWeeksInYear** | `.isoWeeksInYear()` method |
| **LocaleData** | Access locale-specific data |
| **LocalizedFormat** | Locale-aware format tokens (`L`, `LL`, `LT`) |
| **MinMax** | `dayjs.max()` and `dayjs.min()` |
| **ObjectSupport** | Create Day.js from plain objects |
| **PluralGetSet** | Plural getter/setter aliases (`.years()`, `.months()`) |
| **PreParsePostFormat** | Hook into parse/format stages |
| **QuarterOfYear** | `.quarter()` getter/setter |
| **RelativeTime** | `.fromNow()`, `.from()`, `.toNow()`, `.to()` |
| **Timezone** | Full timezone support via `dayjs.tz()` |
| **ToArray** | `.toArray()` method |
| **ToObject** | `.toObject()` method |
| **UpdateLocale** | Update locale data at runtime |
| **UTC** | UTC mode (`.utc()`, `.local()`, `.utcOffset()`) |
| **WeekOfYear** | `.week()` getter/setter |
| **WeekYear** | `.weekYear()` getter/setter |
| **Weekday** | Locale-aware `.weekday()` |

## Duration Plugin

```javascript
dayjs.extend(Duration);

const dur = dayjs.duration(3600000); // 1 hour in ms
dur.humanize(); // "an hour"
dur.format('HH:mm:ss'); // "01:00:00"
dur.minutes(); // 60
dur.as('hours'); // 1

// From an object
const dur2 = dayjs.duration({ hours: 2, minutes: 30 });
dur2.humanize(); // "2.5 hours"
```

## Timezone Plugin

```javascript
dayjs.extend(UTC);
dayjs.extend(Timezone);

// Guess user timezone
dayjs.tz.guess(); // "Europe/Istanbul"

// Parse in a specific timezone
dayjs.tz('2024-06-15 10:00', 'America/New_York');

// Convert to timezone
dayjs('2024-06-15').tz('Asia/Tokyo');

// Set default timezone
dayjs.tz.setDefault('America/New_York');
```
