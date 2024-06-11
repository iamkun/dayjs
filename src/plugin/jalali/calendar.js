/*  MOD  --  Modulus function which works for non-integers.  */
const $floor = Math.floor
function mod(a, b) {
  return a - (b * $floor(a / b))
}

//  LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?

function lg(year) {
  return ((year % 4) == 0) &&
    (!(((year % 100) == 0) && ((year % 400) != 0)))
}

//  GREGORIAN_TO_JD  --  Determine Julian day number from Gregorian calendar date

// GREGORIAN_EPOCH
const GE = 1721425.5

function g2j(year, month, day) {
  return (GE - 1) +
    (365 * (year - 1)) +
    $floor((year - 1) / 4) +
    (-$floor((year - 1) / 100)) +
    $floor((year - 1) / 400) +
    $floor((((367 * month) - 362) / 12) +
      ((month <= 2) ? 0 :
        (lg(year) ? -1 : -2)
      ) +
      day)
}

//  JD_TO_GREGORIAN  --  Calculate Gregorian calendar date from Julian day

function j2g(jd) {
  let wjd,
    depoch,
    quadricent,
    dqc,
    cent,
    dcent,
    quad,
    dquad,
    yindex,
    year,
    yearday,
    leapadj

  wjd = $floor(jd - 0.5) + 0.5
  depoch = wjd - GE
  quadricent = $floor(depoch / 146097)
  dqc = mod(depoch, 146097)
  cent = $floor(dqc / 36524)
  dcent = mod(dqc, 36524)
  quad = $floor(dcent / 1461)
  dquad = mod(dcent, 1461)
  yindex = $floor(dquad / 365)
  year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex
  if (!((cent == 4) || (yindex == 4))) {
    year++
  }
  yearday = wjd - g2j(year, 1, 1)
  leapadj = ((wjd < g2j(year, 3, 1)) ? 0
    :
    (lg(year) ? 1 : 2)
  )
  let month = $floor((((yearday + leapadj) * 12) + 373) / 367),
    day = (wjd - g2j(year, month, 1)) + 1

  return [year, month, day]
}

// PERSIAN_EPOCH
const PE = 1948320.5

//  PERSIAN_TO_JD  --  Determine Julian day from Persian date

function p2j(year, month, day) {
  let epbase, epyear

  epbase = year - ((year >= 0) ? 474 : 473)
  epyear = 474 + mod(epbase, 2820)

  return day +
    ((month <= 7) ?
      ((month - 1) * 31) :
      (((month - 1) * 30) + 6)
    ) +
    $floor(((epyear * 682) - 110) / 2816) +
    (epyear - 1) * 365 +
    $floor(epbase / 2820) * 1029983 +
    (PE - 1)
}

//  JD_TO_PERSIAN  --  Calculate Persian date from Julian day

function j2p(jd) {
  let year,
    month,
    day,
    depoch,
    cycle,
    cyear,
    ycycle,
    aux1,
    aux2,
    yday


  jd = $floor(jd) + 0.5

  depoch = jd - p2j(475, 1, 1)
  cycle = $floor(depoch / 1029983)
  cyear = mod(depoch, 1029983)
  if (cyear == 1029982) {
    ycycle = 2820
  } else {
    aux1 = $floor(cyear / 366)
    aux2 = mod(cyear, 366)
    ycycle = $floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) +
      aux1 + 1
  }
  year = ycycle + (2820 * cycle) + 474
  if (year <= 0) {
    year--
  }
  yday = (jd - p2j(year, 1, 1)) + 1
  month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30)
  day = (jd - p2j(year, month, 1)) + 1
  return [year, month, day]
}

export default {
  J: (y, m, d) => j2p(g2j(y, m, d)),
  G: (y, m, d) => j2g(p2j(y, m, d))
}
