import dayjs from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/index.js';
import utc from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/plugin/utc/index.js';
import timezone from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/plugin/timezone/index.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const MILLISECONDS_A_MINUTE = 60 * 1000;
const MIN = 'minute';
const MS = 'millisecond';

// Let's test the proper fix:
// 1. In proto.utcOffset: if keepLocalTime is true, set $offset and $u = false even if offset === 0
const proto = dayjs.prototype;
const originalUtcOffset = proto.utcOffset;

proto.utcOffset = function (input, keepLocalTime) {
  const { u } = this.$utils();
  if (u(input)) {
    if (this.$u) {
      return 0;
    }
    if (!u(this.$offset)) {
      return this.$offset;
    }
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }
  let offset = input;
  if (typeof input === 'string') {
    // parse string offset
    const match = input.match(/([+-]|\d\d)/g);
    if (match) {
      offset = (+match[1] * 60) + (+match[2]);
      offset = match[0] === '+' ? offset : -offset;
    }
  }
  offset = Math.abs(offset) <= 16 ? offset * 60 : offset;

  let ins = this.clone();

  if (keepLocalTime) {
    ins.$offset = offset;
    ins.$u = false;
    return ins;
  }

  if (offset === 0) {
    return this.utc(keepLocalTime);
  }

  const localTimezoneOffset = this.$u
    ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
  ins = this.local().add(offset + localTimezoneOffset, MIN);
  ins.$offset = offset;
  ins.$x.$localOffset = localTimezoneOffset;

  return ins;
};

// 2. In proto.tz: isUTC should only be true for explicit UTC zones (UTC, Etc/UTC)
proto.tz = function (timezone = 'UTC', keepLocalTime) {
  if (!this.isValid()) return this;
  const oldOffset = this.utcOffset();
  const date = this.toDate();
  const target = date.toLocaleString('en-US', { timeZone: timezone });
  
  // tzOffset calculation
  const dtf = new Intl.DateTimeFormat('en-US', {
    hour12: false,
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const parts = dtf.formatToParts(date);
  const filled = {};
  for (const part of parts) {
    filled[part.type] = part.value;
  }
  const hour = parseInt(filled.hour, 10) === 24 ? 0 : parseInt(filled.hour, 10);
  const utcStr = `${filled.year}-${filled.month}-${filled.day} ${hour}:${filled.minute}:${filled.second}:000`;
  const utcTs = dayjs.utc(utcStr).valueOf();
  let asTS = +date;
  asTS -= (asTS % 1000);
  const offset = (utcTs - asTS) / (60 * 1000);

  const isUTC = timezone === 'UTC' || timezone === 'Etc/UTC';
  let ins;
  if (isUTC) {
    ins = this.utcOffset(0, keepLocalTime);
  } else {
    ins = dayjs(target, { locale: this.$L }).$set(MS, this.$ms)
      .utcOffset(offset, true);
    if (keepLocalTime) {
      const newOffset = ins.utcOffset();
      ins = ins.add(oldOffset - newOffset, MIN);
    }
  }
  ins.$x = ins.$x || {};
  ins.$x.$timezone = timezone;
  return ins;
};

console.log('=== VERIFYING THE PROPOSED FIX ===');
const d1 = dayjs('2021-10-31T15:00:00+00:00').tz('Europe/London');
console.log('London winter format():', d1.format());
console.log('London winter utcOffset():', d1.utcOffset());
console.log('London winter $u:', d1.$u);
console.log('London winter $offset:', d1.$offset);
console.log('London winter valueOf():', d1.valueOf());
console.log('Original timestamp valueOf():', dayjs('2021-10-31T15:00:00+00:00').valueOf());
console.log('valueOf matches?:', d1.valueOf() === dayjs('2021-10-31T15:00:00+00:00').valueOf());

console.log('\n=== OTHER ZONES VERIFICATION ===');
// 1. UTC
const dUtc = dayjs('2021-10-31T15:00:00+00:00').tz('UTC');
console.log('UTC format():', dUtc.format(), '| valueOf match:', dUtc.valueOf() === 1635692400000);

// 2. London Summer (BST, +01:00)
const dSummer = dayjs('2021-07-15T15:00:00+01:00').tz('Europe/London');
console.log('London Summer format():', dSummer.format(), '| valueOf match:', dSummer.valueOf() === dayjs('2021-07-15T15:00:00+01:00').valueOf());

// 3. New York
const dNy = dayjs('2021-10-31T15:00:00+00:00').tz('America/New_York');
console.log('New York format():', dNy.format(), '| valueOf match:', dNy.valueOf() === 1635692400000);

// 4. Africa/Abidjan (Fixed 0-offset)
const dAbidjan = dayjs('2021-10-31T15:00:00+00:00').tz('Africa/Abidjan');
console.log('Abidjan format():', dAbidjan.format(), '| valueOf match:', dAbidjan.valueOf() === 1635692400000);

console.log('\n=== CHAINED OPERATIONS VERIFICATION ===');
console.log('d1.startOf("day").format():', d1.startOf('day').format());
console.log('d1.add(1, "hour").format():', d1.add(1, 'hour').format());
console.log('d1.subtract(1, "day").format():', d1.subtract(1, 'day').format());
console.log('d1.add(1, "hour").valueOf():', d1.add(1, 'hour').valueOf(), '| expected:', 1635692400000 + 3600000);

