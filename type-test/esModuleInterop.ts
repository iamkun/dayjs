import dayjs from 'dayjs/esm';

import customParseFormat from 'dayjs/esm/plugin/customParseFormat';
import duration from 'dayjs/esm/plugin/duration';
import relativeTime from 'dayjs/esm/plugin/relativeTime';

new dayjs.Dayjs();

dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
