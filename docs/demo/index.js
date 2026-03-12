import dayjs from 'dayjs'
// basic usage
dayjs().format()

// parse
dayjs('2018-08-08').format()

// format
dayjs().format('YYYY-MM-DD')

// locale
dayjs().locale('zh-cn').format()

// add
dayjs().add(1, 'year').format()

// subtract
dayjs().subtract(1, 'year').format()

// diff
dayjs().diff(dayjs().add(1, 'year'), 'year')

// isBefore
dayjs().isBefore(dayjs().add(1, 'year'))

// isAfter
dayjs().isAfter(dayjs().subtract(1, 'year'))

// isSame
dayjs().isSame(dayjs())

// isLeapYear
dayjs().isLeapYear()

// isBetween
dayjs().isBetween(dayjs().subtract(1, 'year'), dayjs().add(1, 'year'))

// isSameOrAfter
dayjs().isSameOrAfter(dayjs().subtract(1, 'year'))

// isSameOrBefore
dayjs().isSameOrBefore(dayjs().add(1, 'year'))

// startOf
dayjs().startOf('year').format()

// endOf
dayjs().endOf('year').format()

// week
dayjs().week()

// weekday
dayjs().weekday()
