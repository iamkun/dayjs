import dayjs from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/index.js';
import utc from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/plugin/utc/index.js';
import timezone from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/plugin/timezone/index.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const MIN = 'minute';
const MS = 'millisecond';

// --- IMPLEMENT CLEAN PROPOSED FIX ---
const proto = dayjs.prototype;

// 1. Patch utcOffset in prototype to handle keepLocalTime: true before checking offset === 0
const originalUtcOffset = proto.utcOffset;
proto.utcOffset = function (input, keepLocalTime) {
  const { u } = this.$utils();
  if (u(input)) {
    if (this.$u) return 0;
    if (!u(this.$offset)) return this.$offset;
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }
  let offset = input;
  if (typeof input === 'string') {
    const match = input.match(/([+-]|\d\d)/g);
    if (match) {
      offset = (+match[1] * 60) + (+match[2]);
      offset = match[0] === '+' ? offset : -offset;
    }
  }
  offset = Math.abs(offset) <= 16 ? offset * 60 : offset;

  let ins = this.clone();

  // If keepLocalTime is requested, preserve local time and assign offset (even if offset is 0)
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

// 2. Patch proto.tz to only treat timezone as UTC when it is explicitly UTC / Etc/UTC
const originalTz = proto.tz;
proto.tz = function (tz = 'UTC', keepLocalTime) {
  if (!this.isValid()) return this;
  const isExplicitUTC = tz === 'UTC' || tz === 'Etc/UTC';
  
  if (isExplicitUTC) {
    return originalTz.call(this, tz, keepLocalTime);
  }

  // Named timezone (e.g. Europe/London, Africa/Abidjan)
  const oldOffset = this.utcOffset();
  const date = this.toDate();
  const target = date.toLocaleString('en-US', { timeZone: tz });
  
  // Compute target offset
  const dtf = new Intl.DateTimeFormat('en-US', {
    hour12: false,
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const parts = dtf.formatToParts(date);
  const filled = {};
  for (const p of parts) filled[p.type] = p.value;
  const hour = parseInt(filled.hour, 10) === 24 ? 0 : parseInt(filled.hour, 10);
  const utcStr = `${filled.year}-${filled.month}-${filled.day} ${hour}:${filled.minute}:${filled.second}:000`;
  const utcTs = dayjs.utc(utcStr).valueOf();
  let asTS = +date;
  asTS -= (asTS % 1000);
  const offset = (utcTs - asTS) / (60 * 1000);

  // Use localized target and set offset with keepLocalTime: true
  let ins = dayjs(target, { locale: this.$L }).$set(MS, this.$ms)
    .utcOffset(offset, true);

  if (keepLocalTime) {
    const newOffset = ins.utcOffset();
    ins = ins.add(oldOffset - newOffset, MIN);
  }

  ins.$x = ins.$x || {};
  ins.$x.$timezone = tz;
  return ins;
};

console.log('=== TEST 1: The Reported Bug Case ===');
const londonWinter = dayjs('2021-10-31T15:00:00+00:00').tz('Europe/London');
console.log('London Winter formatted:', londonWinter.format());
console.log('Matches expected (2021-10-31T15:00:00+00:00)?:', londonWinter.format() === '2021-10-31T15:00:00+00:00');
console.log('valueOf matches original timestamp?:', londonWinter.valueOf() === dayjs('2021-10-31T15:00:00+00:00').valueOf());
console.log('utcOffset is 0?:', londonWinter.utcOffset() === 0);
console.log('$u flag is false (not raw UTC)?:', londonWinter.$u === false);

console.log('\n=== TEST 2: True UTC Zone ===');
const trueUtc = dayjs('2021-10-31T15:00:00+00:00').tz('UTC');
console.log('UTC formatted:', trueUtc.format());
console.log('Matches expected (ends with Z)?:', trueUtc.format() === '2021-10-31T15:00:00Z');
console.log('$u flag is true?:', trueUtc.$u === true);

console.log('\n=== TEST 3: Summer BST Zone (+01:00) ===');
const londonSummer = dayjs('2021-07-15T15:00:00+01:00').tz('Europe/London');
console.log('London Summer formatted:', londonSummer.format());
console.log('Matches expected (ends with +01:00)?:', londonSummer.format() === '2021-07-15T15:00:00+01:00');
console.log('valueOf matches?:', londonSummer.valueOf() === dayjs('2021-07-15T15:00:00+01:00').valueOf());

console.log('\n=== TEST 4: Other Geographic +00:00 Zones ===');
const abidjan = dayjs('2021-10-31T15:00:00+00:00').tz('Africa/Abidjan');
console.log('Abidjan formatted:', abidjan.format());
console.log('Matches expected (+00:00)?:', abidjan.format() === '2021-10-31T15:00:00+00:00');

console.log('\n=== TEST 5: Chained Date Arithmetic ===');
const startOfDay = londonWinter.startOf('day');
console.log('startOf("day"):', startOfDay.format());
const plusOneHour = londonWinter.add(1, 'hour');
console.log('add(1, "hour"):', plusOneHour.format());
console.log('add(1, "hour") valueOf matches expected?:', plusOneHour.valueOf() === (londonWinter.valueOf() + 3600000));
const minusOneDay = londonWinter.subtract(1, 'day');
console.log('subtract(1, "day"):', minusOneDay.format());

console.log('\n=== TEST 6: Zone Conversion from London Winter to Paris ===');
const paris = londonWinter.tz('Europe/Paris');
console.log('Converted to Paris:', paris.format());
console.log('Paris valueOf matches?:', paris.valueOf() === londonWinter.valueOf());

