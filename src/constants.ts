export const SECONDS_A_MINUTE = 60
export const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60
export const SECONDS_A_DAY = SECONDS_A_HOUR * 24
export const SECONDS_A_WEEK = SECONDS_A_DAY * 7

export const MILLISECONDS_A_SECOND = 1000
export const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND
export const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND
export const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND
export const MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND

export const INVALID_DATE_STRING = 'Invalid Date'
export const DEFAULT_FORMAT = 'YYYY-MM-DDTHH:mm:ssZ'

export const REGEX_PARSE =
  /^(\d{4})[/-]?(\d{1,2})?[/-]?(\d{0,2})[\sTt]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
export const REGEX_FORMAT =
  /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g

export const UNIT_YEAR = 'year'
export const UNIT_MONTH = 'month'
export const UNIT_QUARTER = 'quarter'
export const UNIT_WEEK = 'week'
export const UNIT_DAY = 'day' // day of week
export const UNIT_DATE = 'date' // day of month
export const UNIT_HOUR = 'hour'
export const UNIT_MINUTE = 'minute'
export const UNIT_SECOND = 'second'
export const UNIT_MILLISECOND = 'millisecond'

export const GETTER_SETTER_METHODS = {
  [UNIT_YEAR]: 'FullYear',
  [UNIT_MONTH]: 'Month',
  [UNIT_DATE]: 'Date', // day of month
  [UNIT_DAY]: 'Day', // day of week
  [UNIT_HOUR]: 'Hours',
  [UNIT_MINUTE]: 'Minutes',
  [UNIT_SECOND]: 'Seconds',
  [UNIT_MILLISECOND]: 'Milliseconds',
} as const
