import * as C from '../../constant'

export default (o, c, d) => {
  const proto = c.prototype
  d.en.relativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  }
  const fromTo = (input, withoutSuffix, instance, isFrom) => {
    const loc = instance.$locale().relativeTime
    const T = [
      { l: 's', r: 44, d: C.S },
      { l: 'm', r: 89 },
      { l: 'mm', r: 44, d: C.MIN },
      { l: 'h', r: 89 },
      { l: 'hh', r: 21, d: C.H },
      { l: 'd', r: 35 },
      { l: 'dd', r: 25, d: C.D },
      { l: 'M', r: 45 },
      { l: 'MM', r: 10, d: C.M },
      { l: 'y', r: 17 },
      { l: 'yy', d: C.Y }
    ]
    const Tl = T.length
    let result
    let out

    for (let i = 0; i < Tl; i += 1) {
      let t = T[i]
      if (t.d) {
        result = isFrom
          ? d(input).diff(instance, t.d, true)
          : instance.diff(input, t.d, true)
      }
      const abs = Math.round(Math.abs(result))
      if (abs <= t.r || !t.r) {
        if (abs === 1 && i > 0) t = T[i - 1] // 1 minutes -> a minute
        out = loc[t.l].replace('%d', abs)
        break
      }
    }
    if (withoutSuffix) return out
    return ((result > 0) ? loc.future : loc.past).replace('%s', out)
  }
  proto.to = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this, true)
  }
  proto.from = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this)
  }
  proto.toNow = function (withoutSuffix) {
    return this.to(d(), withoutSuffix)
  }
  proto.fromNow = function (withoutSuffix) {
    return this.from(d(), withoutSuffix)
  }
}
