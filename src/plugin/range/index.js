
export class DayjsRange {
  constructor(start, end) {
    let s = start
    let e = end

const { s, e } = start > end ? { s: end, e: start } : { s: start, e: end }
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
    return new DayjsRange(this.start.add(number, unit), this.end)
  }

  addEndRange(number, unit) {
    return new DayjsRange(this.start, this.end.add(number, unit))
  }

  subtractStartRange(number, string) {
    return new DayjsRange(this.start.subtract(number, string))
  }

  subtractEndRange(number, string) {
    return new DayjsRange(this.start, this.end.subtract(number, string))
  }
}

export default(o, c, d) => {
  d.range = function (start, end) {
    return new DayjsRange(d(start), d(end))
  }
}
