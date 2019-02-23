import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

dayjs().fromNow().trim()
dayjs().fromNow(true).trim()

dayjs().from(dayjs()).trim()
dayjs().from(123, true).trim()
dayjs().from('2018-01-23').trim()
dayjs().from(new Date(), true).trim()

dayjs().toNow().trim()
dayjs().toNow(true).trim()

dayjs().to(dayjs()).trim()
dayjs().to(123, true).trim()
dayjs().to('2018-01-23').trim()
dayjs().to(new Date(), true).trim()
