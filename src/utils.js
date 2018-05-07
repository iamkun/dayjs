export const padStart = (string, length, pad) => {
  const s = String(string)
  if (!s || s.length >= length) return string
  return `${Array((length + 1) - s.length).join(pad)}${string}`
}

export const padZoneStr = (negMinuts) => {
  const minutes = Math.abs(negMinuts)
  const sign = negMinuts <= 0 ? '+' : '-'
  const hourOffset = Math.floor(minutes / 60)
  const minuteOffset = minutes % 60

  return `${sign}${padStart(hourOffset, 2, '0')}:${padStart(minuteOffset, 2, '0')}`
}

export const isNumber = n => (!Number.isNaN(parseFloat(n)) && Number.isFinite(n))

export const monthDiff = (a, b) => {
  // function from moment.js in order to keep the same result
  const wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month())
  const anchor = a.clone().add(wholeMonthDiff, 'months')
  let anchor2
  let adjust
  if (b - anchor < 0) {
    anchor2 = a.clone().add(wholeMonthDiff - 1, 'months')
    adjust = (b - anchor) / (anchor - anchor2)
  } else {
    anchor2 = a.clone().add(wholeMonthDiff + 1, 'months')
    adjust = (b - anchor) / (anchor2 - anchor)
  }
  return Number(-(wholeMonthDiff + adjust))
}

export const absFloor = n => (n < 0 ? Math.ceil(n) || 0 : Math.floor(n))

export const prettyUnit = u => (u && String(u).toLowerCase().replace(/s$/, ''))

export const isUndefined = s => s === undefined
