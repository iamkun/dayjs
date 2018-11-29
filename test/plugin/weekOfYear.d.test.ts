import * as dayjs from 'dayjs'
import * as weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

dayjs('2010-10-20').week() === 43
