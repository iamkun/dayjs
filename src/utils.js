import * as C from './constant'

const padStart = (string, length, pad) => {
  const s = String(string)
  const neg = s[0] === '-'
  const abs = neg ? s.slice(1) : s
  if (!abs || abs.length >= length) return string
  return `${neg ? '-' : ''}${Array((length + 1) - abs.length).join(pad)}${abs}`
}

const padZoneStr = (instance) => {
  const negMinutes = -instance.utcOffset()
  const minutes = Math.abs(negMinutes)
  const hourOffset = Math.floor(minutes / 60)
  const minuteOffset = minutes % 60
  return `${negMinutes <= 0 ? '+' : '-'}${padStart(hourOffset, 2, '0')}:${padStart(minuteOffset, 2, '0')}`
}

const monthDiff = (a, b) => {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a)
  const wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month())
  const anchor = a.clone().add(wholeMonthDiff, C.M)
  const c = b - anchor < 0
  const anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), C.M)
  return +(-(wholeMonthDiff + ((b - anchor) / (c ? (anchor - anchor2) :
    (anchor2 - anchor)))) || 0)
}

const absFloor = n => (n < 0 ? Math.ceil(n) || 0 : Math.floor(n))

const prettyUnit = (u) => {
  const special = {
    M: C.M,
    y: C.Y,
    w: C.W,
    d: C.D,
    D: C.DATE,
    h: C.H,
    m: C.MIN,
    s: C.S,
    ms: C.MS,
    Q: C.Q
  }
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '')
}

const isUndefined = s => s === undefined

export default {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
}
