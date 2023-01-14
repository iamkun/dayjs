type RepeatDay<T = string> = [T, T, T, T, T, T, T]
type RepeatMonth<T = string> = [T, T, T, T, T, T, T, T, T, T, T, T]
type Format =
  | 'LT'
  | 'LTS'
  | 'L'
  | 'LL'
  | 'LLL'
  | 'LLLL'
  | 'l'
  | 'll'
  | 'lll'
  | 'llll'
type Relative =
  | 'future'
  | 'past'
  | 's'
  | 'm'
  | 'mm'
  | 'h'
  | 'hh'
  | 'd'
  | 'dd'
  | 'M'
  | 'MM'
  | 'y'
  | 'yy'

// plugin/relativeTime (not yet implemented) need this type for relativeTime => Record<Relative, string | ()>
// type RelativeTimeFormatFn = (
//   number: number,
//   withoutSuffix?: boolean,
//   key?: string,
//   isFuture?: boolean
// ) => string

// TODO add comment
export interface Locale {
  name: string
  weekdays: RepeatDay
  weekdaysShort?: RepeatDay
  weekdaysMin?: RepeatDay
  months: RepeatMonth
  monthsShort?: RepeatMonth
  ordinal?: (number: string, period?: 'W') => string
  weekStart?: number
  yearStart?: number
  formats?: Partial<Record<Format, string>>
  relativeTime?: Record<Relative, string>
  meridiem?: (hour: number, minute: number, isLowercase: boolean) => string
  invalidDate?: string
}
