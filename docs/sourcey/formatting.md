# Formatting Tokens

The following tokens can be used in `dayjs().format(tokenString)`.

## Date Tokens

| Token | Output | Description |
|-------|--------|-------------|
| `YY` | 24 | Two-digit year |
| `YYYY` | 2024 | Four-digit year |
| `M` | 1-12 | Month number |
| `MM` | 01-12 | Month number (zero-padded) |
| `MMM` | Jan-Dec | Abbreviated month name |
| `MMMM` | January-December | Full month name |
| `D` | 1-31 | Day of month |
| `DD` | 01-31 | Day of month (zero-padded) |

## Day of Week Tokens

| Token | Output | Description |
|-------|--------|-------------|
| `d` | 0-6 | Day of week (Sunday = 0) |
| `dd` | Su-Sa | Minimal day of week name |
| `ddd` | Sun-Sat | Short day of week name |
| `dddd` | Sunday-Saturday | Full day of week name |

## Time Tokens

| Token | Output | Description |
|-------|--------|-------------|
| `H` | 0-23 | Hour (24-hour) |
| `HH` | 00-23 | Hour (24-hour, zero-padded) |
| `h` | 1-12 | Hour (12-hour) |
| `hh` | 01-12 | Hour (12-hour, zero-padded) |
| `m` | 0-59 | Minute |
| `mm` | 00-59 | Minute (zero-padded) |
| `s` | 0-59 | Second |
| `ss` | 00-59 | Second (zero-padded) |
| `SSS` | 000-999 | Millisecond (zero-padded) |

## Timezone Tokens

| Token | Output | Description |
|-------|--------|-------------|
| `Z` | +05:00 | UTC offset (colon-separated) |
| `ZZ` | +0500 | UTC offset (compact) |

## Meridiem Tokens

| Token | Output | Description |
|-------|--------|-------------|
| `A` | AM / PM | Uppercase meridiem |
| `a` | am / pm | Lowercase meridiem |

## Examples

```javascript
// Common formats
dayjs().format('YYYY-MM-DD');         // "2024-06-15"
dayjs().format('MM/DD/YYYY');         // "06/15/2024"
dayjs().format('DD-MM-YYYY');         // "15-06-2024"
dayjs().format('dddd, MMMM D, YYYY'); // "Saturday, June 15, 2024"

// Time formats
dayjs().format('HH:mm:ss');           // "10:30:45"
dayjs().format('h:mm A');             // "10:30 AM"
dayjs().format('hh:mm:ss a');         // "10:30:45 am"

// ISO-like
dayjs().format('YYYY-MM-DDTHH:mm:ssZ'); // "2024-06-15T10:30:45+03:00"

// With localized format plugin
dayjs.extend(LocalizedFormat);
dayjs().format('LTS'); // "10:30:45 AM"
dayjs().format('LT');  // "10:30 AM"
dayjs().format('L');   // "06/15/2024"
dayjs().format('LL');  // "June 15, 2024"
```
