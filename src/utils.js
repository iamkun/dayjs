export const padStart = (string, length, pad) => {
  if (!string || string.length >= length) return string
  return `${Array((length + 1) - string.length).join(pad)}${string}`
}

export const padZoneStr = (negaHour) => {
  const hour = negaHour * -1
  let replacer = ''
  if (hour < 10) {
    replacer = '0$200'
  } else {
    replacer = '$1$200'
  }
  return String(hour).replace(/^(.)?(\d)/, replacer)
}

export const isNumber = n => (!Number.isNaN(parseFloat(n)) && Number.isFinite(n))

export const monthDiff = (a, b) => {
  // function from moment.js monthDiff
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
  return Number(-(wholeMonthDiff + adjust)) || 0
}

export const absFloor = n => (n < 0 ? Math.ceil(n) || 0 : Math.floor(n))

export const prettyUnit = u => (u && String(u).toLowerCase().replace(/s$/, ''))
