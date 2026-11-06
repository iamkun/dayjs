import dayjs from './customRelativeTime.js';

const now = dayjs();
const old = dayjs('2025-10-07T20:55:07Z');

console.log(old.fromNow());
console.log('Now:', now.toISOString());
console.log('Old:', old.toISOString());
console.log(dayjs.Ls.en.relativeTime);
