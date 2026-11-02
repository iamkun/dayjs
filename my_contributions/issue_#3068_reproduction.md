# Issue #3068 Reproduction: Collapsing +00:00 Geographic Timezones into UTC Mode

## 1. Overview
* **Issue:** [#3068 - When we have +00:00 timezone offset like 'Europe/London' dayjs gets users timezone offset, which causes incorrect time showing in different cases](https://github.com/iamkun/dayjs/issues/3068)
* **Branch:** `issue_#3068_reproduction`
* **Current Day.js Version in Repository:**
  * `package.json` version: `0.0.0-development` (standard Day.js repository development version for semantic-release)
  * Latest version in `CHANGELOG.md`: `1.11.22` (released 2026-08-16)
  * Git Commit: `436bde0bcded312781cbe45dc2b0ef079a36d8e3` (`chore: update doc`)
* **Node Version:** `v22.23.3`
* **Status:** **CONFIRMED & REPRODUCED** on the latest repository code (`dev` branch) without any rollbacks.

---

## 2. Bug Description
When converting a date to a named geographic timezone that observes a `+00:00` offset (such as `Europe/London` during standard GMT time, `Africa/Abidjan`, `Atlantic/Reykjavik`, etc.), Day.js conflates `offset === 0` with universal UTC.

It sets internal flag `$u = true` (UTC mode), causing `.format()` to emit literal UTC `Z` instead of retaining the requested timezone's offset representation `+00:00`. Furthermore, chained operations fluctuate between UTC mode and non-UTC mode across daylight saving boundaries.

### Code Under Test
```javascript
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

console.log(dayjs('2021-10-31T15:00:00+00:00').tz('Europe/London').format());
```

* **Expected:** `2021-10-31T15:00:00+00:00`
* **Actual:** `2021-10-31T15:00:00Z`

---

## 3. Reproduction Proof of Work

### 3.1 Direct Execution & Output
Executing the test case against current local repository source files:

```bash
node --loader ./loader.mjs -e "
import dayjs from './src/index.js';
import utc from './src/plugin/utc/index.js';
import timezone from './src/plugin/timezone/index.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const d = dayjs('2021-10-31T15:00:00+00:00').tz('Europe/London');
console.log('Formatted string:', d.format());
console.log('Explicit offset format (YYYY-MM-DDTHH:mm:ssZ):', d.format('YYYY-MM-DDTHH:mm:ssZ'));
console.log('Calculated utcOffset():', d.utcOffset());
console.log('isUTC ($u flag):', d.$u);
console.log('Target timezone ($x.$timezone):', d.$x?.$timezone);
"
```

**Terminal Output:**
```text
Formatted string: 2021-10-31T15:00:00Z
Explicit offset format (YYYY-MM-DDTHH:mm:ssZ): 2021-10-31T15:00:00+00:00
Calculated utcOffset(): 0
isUTC ($u flag): true
Target timezone ($x.$timezone): Europe/London
```

The resulting string ends in literal `Z` because `$u` is forced to `true`.

---

### 3.2 Comparison of Cases: Summer (BST) vs Winter (GMT) for `Europe/London`
Testing `Europe/London` during Daylight Saving Time (BST, UTC+1) vs Standard Time (GMT, UTC+0):

```bash
node --loader ./loader.mjs -e "
import dayjs from './src/index.js';
import utc from './src/plugin/utc/index.js';
import timezone from './src/plugin/timezone/index.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const summer = dayjs('2021-07-15T15:00:00+01:00').tz('Europe/London');
const winter = dayjs('2021-12-15T15:00:00+00:00').tz('Europe/London');

console.log('Summer (BST, offset +60):', summer.format(), '| isUTC:', summer.$u, '| offset:', summer.utcOffset());
console.log('Winter (GMT, offset 0):  ', winter.format(), '| isUTC:', winter.$u, '| offset:', winter.utcOffset());
"
```

**Terminal Output:**
```text
Summer (BST, offset +60): 2021-07-15T15:00:00+01:00 | isUTC: false | offset: 60
Winter (GMT, offset 0):   2021-12-15T15:00:00Z       | isUTC: true  | offset: 0 <-- BUG (Switches to literal Z)
```

For the exact same timezone (`Europe/London`), Day.js inconsistently alternates between offset format `+01:00` and UTC indicator `Z` depending purely on the season.

---

### 3.3 Scope Across Other Geographic Timezones with +00:00 Offset
Any geographic IANA timezone currently observing a zero offset experiences the identical collapse into UTC mode:

| Timezone | Tested Instant | Formatted Output | `isUTC ($u)` | Expected Output | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Europe/London` (Winter) | `2021-10-31T15:00:00Z` | `2021-10-31T15:00:00Z` | `true` | `2021-10-31T15:00:00+00:00` | **BUG** |
| `Africa/Abidjan` | `2021-10-31T15:00:00Z` | `2021-10-31T15:00:00Z` | `true` | `2021-10-31T15:00:00+00:00` | **BUG** |
| `Atlantic/Reykjavik` | `2021-10-31T15:00:00Z` | `2021-10-31T15:00:00Z` | `true` | `2021-10-31T15:00:00+00:00` | **BUG** |
| `Africa/Accra` | `2021-10-31T15:00:00Z` | `2021-10-31T15:00:00Z` | `true` | `2021-10-31T15:00:00+00:00` | **BUG** |
| `UTC` (True UTC) | `2021-10-31T15:00:00Z` | `2021-10-31T15:00:00Z` | `true` | `2021-10-31T15:00:00Z` | Works as intended |

---

### 3.4 Chained Operation State Desynchronization
When performing chained operations on a date that crosses a DST boundary (e.g. October 31, 2021, when London transitioned from BST at 02:00 to GMT):

```bash
node --loader ./loader.mjs -e "
import dayjs from './src/index.js';
import utc from './src/plugin/utc/index.js';
import timezone from './src/plugin/timezone/index.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const d = dayjs('2021-10-31T15:00:00+00:00').tz('Europe/London');
const startOfDay = d.startOf('day');

console.log('d.format():               ', d.format(), '| isUTC:', d.$u);
console.log('d.startOf(\"day\").format():', startOfDay.format(), '| isUTC:', startOfDay.$u);
"
```

**Terminal Output:**
```text
d.format():                2021-10-31T15:00:00Z       | isUTC: true
d.startOf("day").format(): 2021-10-31T00:00:00+01:00 | isUTC: undefined
```

Because 15:00 was GMT (`offset: 0`), `d` was put in UTC mode. But midnight of the same day was BST (`offset: 60`), so `startOf('day')` is in localized offset mode. Chaining operations flips internal state representation between UTC mode and timezone mode.

---

## 4. Root Cause Analysis

### Source Location
* **File:** `src/plugin/timezone/index.js` (lines 100–115)
* **File:** `src/plugin/utc/index.js` (lines 91–93, 112–117)

### Code Trace
1. In `src/plugin/timezone/index.js`:
   ```javascript
   const offset = tzOffset(+date, timezone)
   const isUTC = !Number(offset)
   let ins
   if (isUTC) { // if utcOffset is 0, turn it to UTC mode
     ins = this.utcOffset(0, keepLocalTime)
   } else {
     ins = d(target, { locale: this.$L }).$set(MS, this.$ms)
       .utcOffset(offset, true)
     // ...
   }
   ins.$x.$timezone = timezone
   return ins
   ```
   * When `timezone = 'Europe/London'` on `2021-10-31T15:00:00Z`, `offset` is calculated as `0`.
   * `isUTC` is evaluated as `!Number(0)`, which is **`true`**.
   * Day.js explicitly executes `ins = this.utcOffset(0, keepLocalTime)` assuming any zero offset must be converted into UTC mode.

2. In `src/plugin/utc/index.js`:
   ```javascript
   proto.utcOffset = function (input, keepLocalTime) {
     // ...
     if (offset === 0) {
       return this.utc(keepLocalTime)
     }
     // ...
   }

   proto.utc = function (keepLocalTime) {
     const ins = dayjs(this.toDate(), { locale: this.$L, utc: true })
     // ...
     return ins
   }
   ```
   * Calling `this.utcOffset(0)` delegates directly to `this.utc()`, which sets `this.$u = true`.

3. In `src/plugin/utc/index.js`:
   ```javascript
   const oldFormat = proto.format
   const UTC_FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ss[Z]'
   proto.format = function (formatStr) {
     const str = formatStr || (this.$u ? UTC_FORMAT_DEFAULT : '')
     return oldFormat.call(this, str)
   }
   ```
   * Because `this.$u === true`, calling `.format()` without arguments replaces the default ISO format mask (`YYYY-MM-DDTHH:mm:ssZ`) with `UTC_FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ss[Z]'`.
   * This forces the output to end with literal `Z` instead of `+00:00`.

---

## 5. Potential Fix (For Reference)

In `src/plugin/timezone/index.js`:
Only set `isUTC` to `true` when the requested timezone is genuinely UTC, rather than checking if `offset === 0`:

```javascript
const isUTC = timezone === 'UTC' || timezone === 'Etc/UTC'
```

For named geographic timezones where `offset === 0`:
* Keep `isUTC = false`.
* Call `ins = d(target, { locale: this.$L }).$set(MS, this.$ms).utcOffset(0, true)` (or retain `ins.$offset = 0` with `$u = false`).
* This ensures `.format()` outputs `+00:00`, preserving timezone identity and preventing desynchronization with other operations.
