const formattingTokens = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g

const match1 = /\d/ // 0 - 9
const match2 = /\d\d/ // 00 - 99
const match3 = /\d{3}/ // 000 - 999
const match4 = /\d{4}/ // 0000 - 9999
const match1to2 = /\d\d?/ // 0 - 99
const matchUpperCaseAMPM = /[AP]M/
const matchLowerCaseAMPM = /[ap]m/
const matchSigned = /[+-]?\d+/ // -inf - inf
const matchOffset = /[+-]\d\d:?\d\d/ // +00:00 -00:00 +0000 or -0000
const matchWord = /\d*[^\s\d]+/ // Word

let locale

function offsetFromString(string) {
  const parts = string.match(/([+-]|\d\d)/g)
  const minutes = +(parts[1] * 60) + +parts[2]
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes // eslint-disable-line no-nested-ternary
}

const addInput = function (property) {
  return function (input) {
    this[property] = +input
  }
}

const zoneExpressions = [matchOffset, function (input) {
  const zone = this.zone || (this.zone = {})
  zone.offset = offsetFromString(input)
}]

const expressions = {
  A: [matchUpperCaseAMPM, function (input) {
    this.afternoon = input === 'PM'
  }],
  a: [matchLowerCaseAMPM, function (input) {
    this.afternoon = input === 'pm'
  }],
  S: [match1, function (input) {
    this.milliseconds = +input * 100
  }],
  SS: [match2, function (input) {
    this.milliseconds = +input * 10
  }],
  SSS: [match3, function (input) {
    this.milliseconds = +input
  }],
  s: [match1to2, addInput('seconds')],
  ss: [match1to2, addInput('seconds')],
  m: [match1to2, addInput('minutes')],
  mm: [match1to2, addInput('minutes')],
  H: [match1to2, addInput('hours')],
  h: [match1to2, addInput('hours')],
  HH: [match1to2, addInput('hours')],
  hh: [match1to2, addInput('hours')],
  D: [match1to2, addInput('day')],
  DD: [match2, addInput('day')],
  M: [match1to2, addInput('month')],
  MM: [match2, addInput('month')],
  MMM: [matchWord, function (input) {
    const { months, monthsShort } = locale
    const matchIndex = monthsShort
      ? monthsShort.findIndex(month => month === input)
      : months.findIndex(month => month.substr(0, 3) === input)
    if (matchIndex < 0) {
      throw new Error()
    }
    this.month = matchIndex + 1
  }],
  MMMM: [matchWord, function (input) {
    const { months } = locale
    const matchIndex = months.indexOf(input)
    if (matchIndex < 0) {
      throw new Error()
    }
    this.month = matchIndex + 1
  }],
  Y: [matchSigned, addInput('year')],
  YY: [match2, function (input) {
    input = +input
    this.year = input + (input > 68 ? 1900 : 2000)
  }],
  YYYY: [match4, addInput('year')],
  Z: zoneExpressions,
  ZZ: zoneExpressions
}

function correctHours(time) {
  const { afternoon } = time
  if (afternoon !== undefined) {
    const { hours } = time
    if (afternoon) {
      if (hours < 12) {
        time.hours += 12
      }
    } else if (hours === 12) {
      time.hours = 0
    }
    delete time.afternoon
  }
}

function makeParser(format) {
  const array = format.match(formattingTokens)
  const { length } = array
  for (let i = 0; i < length; i += 1) {
    const token = array[i]
    const parseTo = expressions[token]
    const regex = parseTo && parseTo[0]
    const parser = parseTo && parseTo[1]
    if (parser) {
      array[i] = { regex, parser }
    } else {
      array[i] = token.replace(/^\[|\]$/g, '')
    }
  }
  return function (input) {
    const time = {}
    for (let i = 0, start = 0; i < length; i += 1) {
      const token = array[i]
      if (typeof token === 'string') {
        start += token.length
      } else {
        const { regex, parser } = token
        const part = input.substr(start)
        const match = regex.exec(part)
        const value = match[0]
        parser.call(time, value)
        start += value.length
      }
    }
    correctHours(time)
    return time
  }
}

const parseFormattedInput = (input, format, utc) => {
  try {
    const parser = makeParser(format)
    const {
      year, month, day, hours, minutes, seconds, milliseconds, zone
    } = parser(input)
    if (zone) {
      return new Date(Date.UTC(
        year, month - 1, day,
        hours || 0,
        minutes || 0, seconds || 0, milliseconds || 0
      ) + (zone.offset * 60 * 1000))
    }
    const now = new Date()
    const y = year || now.getFullYear()
    const M = month > 0 ? month - 1 : now.getMonth()
    const d = day || now.getDate()
    const h = hours || 0
    const m = minutes || 0
    const s = seconds || 0
    const ms = milliseconds || 0
    if (utc) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms))
    }
    return new Date(y, M, d, h, m, s, ms)
  } catch (e) {
    return new Date('') // Invalid Date
  }
}


export default (o, C, d) => {
  const proto = C.prototype
  const oldParse = proto.parse
  proto.parse = function (cfg) {
    const {
      date,
      format,
      pl,
      utc
    } = cfg
    this.$u = utc
    if (format) {
      locale = pl ? d.Ls[pl] : this.$locale()
      this.$d = parseFormattedInput(date, format, utc)
      this.init(cfg)
    } else {
      oldParse.call(this, cfg)
    }
  }
}
