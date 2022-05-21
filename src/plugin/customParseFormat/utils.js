// handle negative values when overflowing month (handling positive and negative values)
function modMonth(n, x) {
  return ((n % x) + x) % x
}

// code duplication as we cannot use 'isLeapYear' plugin here (it is only working with Dayjs objects)
function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
}

// eslint-disable-next-line import/prefer-default-export
export const daysInMonth = (year, month) => {
  if (Number.isNaN(year) || Number.isNaN(month)) {
    return NaN
  }
  const monthAsIndex = month - 1
  const monthInYear = modMonth(monthAsIndex, 12)
  year += (monthAsIndex - monthInYear) / 12
  // eslint-disable-next-line no-nested-ternary
  return monthInYear === 1
    ? isLeapYear(year)
      ? 29
      : 28
    : 31 - ((monthInYear % 7) % 2)
}
