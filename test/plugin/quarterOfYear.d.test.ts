import * as dayjs from 'dayjs'
import * as quarterOfYear from 'dayjs/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

dayjs('2013-01-01T00:00:00.000').quarter() === 1
