
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

  isOverlap(other) {
    if (!(other instanceof DateRange)) {
      return false
    }

    if (
      (this.start >= other.start && this.start <= other.end) ||
      (this.end >= other.start && this.end <= other.end)
    ) {
      return true
    }

    return false
  }

  isEqual(other) {
    return this.start.isSame(other.start) && this.end(this.isSame(other.end))
  }
}

export default(o, c, d) => {
  d.range = function (start, end) {
    return new DateRange(d(start), d(end))
  }
}
