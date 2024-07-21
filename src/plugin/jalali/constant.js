export const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})[-/]?(\d{0,2})(.*)?$/
export const REGEX_FORMAT = /\[.*?\]|jY{2,4}|jM{1,4}|jD{1,2}|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g

export const DATE = 'date'
export const D = 'day'
export const M = 'month'
export const Y = 'year'
export const W = 'week'

export const FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ'

export const fa = {
  jmonths: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_')
}
