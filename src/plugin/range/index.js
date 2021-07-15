
export class DateRange {
  constructor(start, end) {
    let s = start
    let e = end

    if (s > e) {
      s = end
      e = start
    }

    this.start = s
    this.end = e
  }

  isRange() {
    return this.start.isValid() && this.end.isValid() && this instanceof DateRange
  }

  clone() {
    return new DateRange(this.start, this.end)
  }

  isOverlap(other) {
    if (!(other instanceof DateRange)) {
      return other.isRange()
    }

    if (
      (this.start >= other.start && this.start <= other.end) ||
      (this.end >= other.start && this.end <= other.end) ||
      (this.start <= other.start && this.end >= other.end)
    ) {
      return true
    }

    return false
  }

  isEqual(other) {
    return this.start.isSame(other.start) && this.end.isSame(other.end)
  }

  addStartRange(number, unit) {
    this.start = this.start.add(number, unit)
    return this
  }

  addEndRange(number, unit) {
    this.end = this.end.add(number, unit)
    return this
  }
}

export default(o, c, d) => {
  d.range = function (start, end) {
    return new DateRange(d(start), d(end))
  }
}
