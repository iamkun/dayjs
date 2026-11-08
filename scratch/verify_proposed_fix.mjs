import dayjs from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/index.js';
import utc from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/plugin/utc/index.js';
import timezone from 'file:///c:/Users/srira/Desktop/work_integration/dayjs-WI/src/plugin/timezone/index.js';

dayjs.extend(utc);
dayjs.extend(timezone);

console.log('=== BEFORE FIX ===');
const dBefore = dayjs('2021-10-31T15:00:00+00:00').tz('Europe/London');
console.log('London winter format():', dBefore.format());
console.log('London winter $u:', dBefore.$u);
console.log('London winter $offset:', dBefore.$offset);

// --- APPLY PROPOSED FIX IN RUNTIME HARNESS ---
// Let's inspect the original proto.tz and create the patched proto.tz
const originalTz = dayjs.prototype.tz;

dayjs.prototype.tz = function (tzName, keepLocalTime) {
  // If timezone is specifically 'UTC' or 'Etc/UTC', maintain core UTC behavior
  const zone = tzName || dayjs.tz.guess();
  const isExplicitUTC = zone === 'UTC' || zone === 'Etc/UTC';

  if (isExplicitUTC) {
    return originalTz.call(this, zone, keepLocalTime);
  }

  // Otherwise, use original proto.tz logic but if offset is 0 for a named timezone,
  // ensure it does not collapse into UTC mode ($u = true)
  const res = originalTz.call(this, zone, keepLocalTime);
  if (res.utcOffset() === 0) {
    // Preserve timezone identity and non-UTC format (+00:00)
    res.$u = false;
    res.$offset = 0;
  }
  return res;
};

console.log('\n=== AFTER FIX ===');
const dAfter = dayjs('2021-10-31T15:00:00+00:00').tz('Europe/London');
console.log('London winter format():', dAfter.format());
console.log('London winter $u:', dAfter.$u);
console.log('London winter $offset:', dAfter.$offset);
console.log('London winter valueOf():', dAfter.valueOf());
console.log('Original timestamp valueOf():', dayjs('2021-10-31T15:00:00+00:00').valueOf());
console.log('Matches timestamp?:', dAfter.valueOf() === dayjs('2021-10-31T15:00:00+00:00').valueOf());

console.log('\n=== CHECKING OTHER ZONES FOR SIDE EFFECTS ===');
// 1. True UTC
const dUtc = dayjs('2021-10-31T15:00:00+00:00').tz('UTC');
console.log('UTC format():', dUtc.format(), '(Expected ending with Z: true ->', dUtc.format().endsWith('Z'), ')');

// 2. Europe/London in Summer (BST, +01:00)
const dLondonSummer = dayjs('2021-07-15T15:00:00+01:00').tz('Europe/London');
console.log('London summer format():', dLondonSummer.format(), '(Expected +01:00 ->', dLondonSummer.format().endsWith('+01:00'), ')');

// 3. America/New_York (negative offset)
const dNy = dayjs('2021-10-31T15:00:00+00:00').tz('America/New_York');
console.log('New York format():', dNy.format(), '(Expected -04:00 ->', dNy.format().endsWith('-04:00'), ')');

// 4. Asia/Tokyo (positive offset)
const dTokyo = dayjs('2021-10-31T15:00:00+00:00').tz('Asia/Tokyo');
console.log('Tokyo format():', dTokyo.format(), '(Expected +09:00 ->', dTokyo.format().endsWith('+09:00'), ')');

// 5. Africa/Abidjan (Fixed 0 offset)
const dAbidjan = dayjs('2021-10-31T15:00:00+00:00').tz('Africa/Abidjan');
console.log('Abidjan format():', dAbidjan.format(), '(Expected +00:00 ->', dAbidjan.format().endsWith('+00:00'), ')');

// 6. Chained operations: startOf('day'), add(1, 'hour'), subtract(1, 'day')
console.log('\n=== CHAINED OPERATIONS ===');
const startOfDay = dAfter.startOf('day');
console.log('dAfter.startOf("day").format():', startOfDay.format());
const addHour = dAfter.add(1, 'hour');
console.log('dAfter.add(1, "hour").format():', addHour.format());
const subDay = dAfter.subtract(1, 'day');
console.log('dAfter.subtract(1, "day").format():', subDay.format());

