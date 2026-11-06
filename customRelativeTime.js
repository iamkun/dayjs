import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import updateLocale from 'dayjs/plugin/updateLocale.js';

// Register plugins
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);

// Update the English locale for shorter relative times
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'few sec',
    m: '1 min',
    mm: '%d min',
    h: '1 hr',
    hh: '%d hr',
    d: '1 d',
    dd: '%d d',
    M: '1 mo',
    MM: '%d mo',
    y: '1 yr',
    yy: '%d yr'
  }
});

export default dayjs;
