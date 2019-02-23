import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(isLeapYear)

dayjs('2010-10-20').isLeapYear() === false
