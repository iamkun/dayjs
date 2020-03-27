import * as C from '../../constant'

const LOOSE_THRESHOLDS = [
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

const STRICT_THRESHOLDS = [
  { l: 's', r: 1 },
  { l: 'ss', r: 59, d: C.S },
  { l: 'm', r: 1 },
  { l: 'mm', r: 59, d: C.MIN },
  { l: 'h', r: 1 },
  { l: 'hh', r: 23, d: C.H },
  { l: 'd', r: 1 },
  { l: 'dd', r: 29, d: C.D },
  { l: 'M', r: 1 },
  { l: 'MM', r: 11, d: C.M },
  { l: 'y' },
  { l: 'yy', d: C.Y }
]

const LOOSE_EN_LOCALE = {
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

const STRICT_EN_LOCALE = {
  future: 'in %s',
  past: '%s ago',
  s: '%d second', // 0 or 1
  ss: '%d seconds',
  m: '1 minute',
  mm: '%d minutes',
  h: '1 hour',
  hh: '%d hours',
  d: '1 day',
  dd: '%d days',
  M: '1 month',
  MM: '%d months',
  y: '1 year',
  yy: '%d years'
}

export default (o, c, d) => {
  o = o || {}
  const proto = c.prototype
  d.en.relativeTime = o.strict ? STRICT_EN_LOCALE : LOOSE_EN_LOCALE
  const fromTo = (input, withoutSuffix, instance, isFrom) => {
    const loc = instance.$locale().relativeTime
    const T = o.thresholds || (o.strict ? STRICT_THRESHOLDS : LOOSE_THRESHOLDS)
    if (!loc.ss) {
      loc.ss = loc.s // locale like Chinese
    }
    const Tl = T.length
    let result
    let out
    let isFuture

    for (let i = 0; i < Tl; i += 1) {
      let t = T[i]
      if (t.d) {
        result = isFrom
          ? d(input).diff(instance, t.d, true)
          : instance.diff(input, t.d, true)
      }
      const abs = Math[o.strict ? 'floor' : 'round'](Math.abs(result))
      isFuture = result > 0
      if (abs <= t.r || !t.r) {
        if (abs <= 1 && i > 0) t = T[i - 1] // 1 minutes -> a minute, 0 seconds -> 0 second
        const format = loc[t.l]
        if (typeof format === 'string') {
          out = format.replace('%d', abs)
        } else {
          out = format(abs, withoutSuffix, t.l, isFuture)
        }
        break
      }
    }
    if (withoutSuffix) return out
    return (isFuture ? loc.future : loc.past).replace('%s', out)
  }
  proto.to = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this, true)
  }
  proto.from = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this)
  }

  const makeNow = thisDay => (thisDay.$u ? d.utc() : d())

  proto.toNow = function (withoutSuffix) {
    return this.to(makeNow(this), withoutSuffix)
  }
  proto.fromNow = function (withoutSuffix) {
    return this.from(makeNow(this), withoutSuffix)
  }
}
