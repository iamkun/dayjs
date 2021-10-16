export interface Locale {
  name: string
  weekdays: string[]
  weekdaysShort?: string[]
  weekdaysMin?: string[]
  months: string[]
  monthsShort?: string[]
  ordinal?: (number: string, period: string) => string
  weekStart?: number
  yearStart?: number
  formats?: Record<string, string>
  relativeTime?: Record<string, string>
  meridiem?: (hour: number, minute: number, isLowercase: boolean) => string
}
