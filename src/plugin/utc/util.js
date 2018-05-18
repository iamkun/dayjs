function timezoneOffsetToString(tz) {
  if (tz === 0) return 'Z'
  const h = Math.floor(Math.abs(tz) / 60)
  const m = Math.abs(tz) % 60
  return `${tz > 0 ? '-' : '+'}${h < 10 ? '0' : ''}${h}${m < 10 ? '0' : ''}${m}`
}

function parseTimezoneOffset(tz) {
  let execRet
  switch (typeof (tz)) {
    case 'string':
      if (tz === 'Z') return 0
      execRet = /([+-])(\d{2}):?(\d{2})/.exec(tz)
      return execRet && ((+execRet[3]) + (execRet[2] * 60)) * (execRet[1] === '+' ? 1 : -1)
    case 'number':
      if (Number.isNaN(tz)) return null
      return Math.abs(tz) < 16 ? tz * 60 : tz
    default:
      return null
  }
}

export {
  timezoneOffsetToString,
  parseTimezoneOffset
}
