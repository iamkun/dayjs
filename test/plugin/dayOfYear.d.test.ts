import * as dayjs from 'dayjs'
import * as dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)

dayjs('2015-01-01T00:00:00.000').dayOfYear() === 1
