
export class DayjsRange {
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
    return this.start.isValid() && this.end.isValid() && this instanceof DayjsRange
  }

  clone() {
    return new DayjsRange(this.start, this.end)
  }

  isOverlap(other) {
    if (!(other instanceof DayjsRange)) {
      return false
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

  subtractStartRange(number, string) {
    this.start = this.start.subtract(number, string)
    return this
  }

  subtractEndRange(number, string) {
    this.end = this.end.subtract(number, string)
    return this
  }
}

export default(o, c, d) => {
  d.range = function (start, end) {
    return new DayjsRange(d(start), d(end))
  }
}
