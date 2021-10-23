
export class DayjsRange {
  constructor(startDate, endDate) {
    const { s, e } = startDate > endDate
      ? { s: endDate, e: startDate }
      : { s: startDate, e: endDate }

    this.startDate = s
    this.endDate = e
  }

  isValidRange() {
    return this.startDate.isValid() && this.endDate.isValid()
  }

  clone() {
    return new DayjsRange(this.startDate, this.endDate)
  }

  isOverlap(other) {
    if (!(other instanceof DayjsRange) || !(other.isValidRange())) {
      return false
    }

    if (
      (this.startDate >= other.startDate && this.startDate <= other.endDate) ||
      (this.endDate >= other.startDate && this.endDate <= other.endDate) ||
      (this.startDate <= other.startDate && this.endDate >= other.endDate)
    ) {
      return true
    }

    return false
  }

  isEqual(other) {
    return this.startDate.isSame(other.startDate) && this.endDate.isSame(other.endDate)
  }

  addStartRange(number, unit) {
    return new DayjsRange(this.startDate.add(number, unit), this.endDate)
  }

  addEndRange(number, unit) {
    return new DayjsRange(this.startDate, this.endDate.add(number, unit))
  }

  subtractStartRange(number, string) {
    return new DayjsRange(this.startDate.subtract(number, string))
  }

  subtractEndRange(number, string) {
    return new DayjsRange(this.startDate, this.endDate.subtract(number, string))
  }
}

export default(o, c, d) => {
  d.range = function (start, end) {
    return new DayjsRange(d(start), d(end))
  }
}
