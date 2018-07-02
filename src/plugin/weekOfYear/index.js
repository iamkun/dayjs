import { MILLISECONDS_A_DAY } from '../../constant'

export default (o, c) => {
  const proto = c.prototype
  proto.week = function () {
    const day = this.$W || 7 // Return sunday as 7
    // Create date at nearest thursday
    const ins = new Date(this.$y, this.$M, (this.$D - day) + 4)
    const yearStart = new Date(Date.UTC(this.$y, 0, 1)) // Get first day of year
    return Math.ceil((((ins - yearStart) / MILLISECONDS_A_DAY) + 1) / 7) // Calculate weeks
  }
}
