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

