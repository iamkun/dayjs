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

// TODO add comment
export interface Locale {
  name: string
  weekdays: RepeatDay
  weekdaysShort?: RepeatDay
  weekdaysMin?: RepeatDay
  months: RepeatMonth
  monthsShort?: RepeatMonth
  // TODO strict type
  ordinal?: (number: string, period: string) => string
  weekStart?: number
  yearStart?: number
  formats?: Partial<Record<Format, string>>
  relativeTime?: Record<Relative, string>
  meridiem?: (hour: number, minute: number, isLowercase: boolean) => string
  invalidDate?: string
}
