import dayjs from '.'

dayjs()

dayjs('1993-03-1')

dayjs(730944000000)

dayjs(new Date(1993, 3, 1))

dayjs().clone()

dayjs().isValid()

dayjs().year()

dayjs().month()

dayjs().date()

dayjs().hour()

dayjs().minute()

dayjs().second()

dayjs().millisecond()

dayjs().set('month', 3)
dayjs().set('second', 30)

dayjs().add(7, 'day')

dayjs().subtract(7, 'year')

dayjs().startOf('year')

dayjs().endOf('month')

dayjs().startOf('month').add(1, 'day').subtract(1, 'year')

dayjs().format()
dayjs().format('[YYYY] MM-DDTHH:mm:ssZ')

dayjs().diff(dayjs(), 'year')

dayjs().valueOf()

dayjs().unix()

dayjs().daysInMonth()

dayjs().toDate()

dayjs().toArray()

dayjs().toJSON()

dayjs().toISOString()

dayjs().toObject()

dayjs().toString()

dayjs().isBefore(dayjs())

dayjs().isSame(dayjs())

dayjs().isAfter(dayjs())

dayjs('2000-01-01').isLeapYear(dayjs())
