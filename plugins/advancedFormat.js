import * as Utils from "../src/utils"

let advFormat
export default advFormat = {
  name : "format",
  method : function(formatStr = 'YYYY-MM-DDTHH:mm:ssZ') {
    const weeks = 'Sunday.Monday.Tuesday.Wednesday.Thursday.Friday.Saturday'.split('.')
    const months = 'January.February.March.April.May.June.July.August.September.October.November.December'.split('.')
    const suffixes = ['th', 'st', 'nd', 'rd']

    return formatStr.replace(/Y{2,4}|Q|M{1,4}|Do|D{1,2}|d{1,4}|X|x|H{1,2}|h{1,2}|k{1,2}|a|A|m{1,2}|s{1,2}|S|Z{1,2}/g, (match) => {
      switch (match) {
        case 'YY':
          return String(this.$y).slice(-2)
        case 'YYYY':
          return String(this.$y)
        case 'Q':
          return Math.ceil((this.$M + 1) / 3)
        case 'M':
          return String(this.$M + 1)
        case 'MM':
          return Utils.padStart(String(this.$M + 1), 2, '0')
        case 'MMM':
          return months[this.$M].slice(0, 3)
        case 'MMMM':
          return months[this.$M]
        case 'Do': {
          const digits = Utils.padStart(String(this.$D), 2, '0').slice(-2)
          const ls = parseInt(digits[1], 10)
          return this.$D + suffixes[digits[0] === '1' || ls > 3 ? 0 : ls]
        }
        case 'D':
          return String(this.$D)
        case 'DD':
          return Utils.padStart(String(this.$D), 2, '0')
        case 'd':
          return String(this.$W)
        case 'dddd':
          return weeks[this.$W]
        case 'X':
          return Math.floor(this.$d.getTime() / 1000)
        case 'x':
          return this.$d.getTime()
        case 'H':
          return String(this.$H)
        case 'HH':
          return Utils.padStart(String(this.$H), 2, '0')
        case 'h':
          if (this.$H === 0) {
            return 12
          }
          return this.$H < 13 ? this.$H : this.$H - 12
        case 'hh':
          if (this.$H === 0) {
            return 12
          }
          return Utils.padStart(String(this.$H < 13 ? this.$H : this.$H - 12), 2, '0')
        case 'k':
          return this.$H === 0 ? 24 : this.$H
        case 'kk':
          return Utils.padStart(String(this.$H === 0 ? 24 : this.$H), 2, '0')
        case 'a':
          return this.$H < 12 ? 'am' : 'pm'
        case 'A':
          return this.$H < 12 ? 'AM' : 'PM'
        case 'm':
          return String(this.$m)
        case 'mm':
          return Utils.padStart(String(this.$m), 2, '0')
        case 's':
          return String(this.$s)
        case 'ss':
          return Utils.padStart(String(this.$s), 2, '0')
        case 'S':
          return Utils.padStart(String(this.$ms), 3, '0')
        case 'Z':
          return `${this.$zoneStr.slice(0, -2)}:00`
        default: // 'ZZ'
          return this.$zoneStr
      }
    })
  }
}
