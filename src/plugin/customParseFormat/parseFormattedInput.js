const formattingTokens = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g

const match1 = /\d/ // 0 - 9
const match2 = /\d\d/ // 00 - 99
const match3 = /\d{3}/ // 000 - 999
const match4 = /\d{4}/ // 0000 - 9999
const match1to2 = /\d\d?/ // 0 - 99
const matchUpperCaseAMPM = /[AP]M/
const matchLowerCaseAMPM = /[ap]m/
const matchSigned = /[+-]?\d+/ // -inf - inf
const matchOffset = /[+-]\d\d:?\d\d/ // +00:00 -00:00 +0000 or -0000
const matchAbbreviation = /[A-Z]{3,4}/ // CET

function offsetFromString(string) {
  const parts = string.match(/([+-]|\d\d)/g)
  const minutes = +(parts[1] * 60) + +parts[2]
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes // eslint-disable-line no-nested-ternary
}

const parseTokenExpressions = {
  A: matchUpperCaseAMPM,
  a: matchLowerCaseAMPM,
  S: match1,
  SS: match2,
  SSS: match3,
  s: match1to2,
  ss: match2,
  m: match1to2,
  mm: match2,
  H: match1to2,
  h: match1to2,
  HH: match2,
  hh: match2,
  D: match1to2,
  DD: match2,
  M: match1to2,
  MM: match2,
  Y: matchSigned,
  YY: match2,
  YYYY: match4,
  z: matchAbbreviation,
  Z: matchOffset,
  ZZ: matchOffset
}

const addInput = function (property) {
  return function (input) {
    this[property] = +input
  }
}

/* eslint-disable object-shorthand */
const parseTokenFunctions = {
  A: function (input) {
    this.afternoon = input === 'PM'
  },
  a: function (input) {
    this.afternoon = input === 'pm'
  },
  s: addInput('seconds'),
  ss: addInput('seconds'),
  m: addInput('minutes'),
  mm: addInput('minutes'),
  H: addInput('hours'),
  HH: addInput('hours'),
  h: addInput('hours'),
  hh: addInput('hours'),
  D: addInput('day'),
  DD: addInput('day'),
  M: addInput('month'),
  MM: addInput('month'),
  Y: addInput('year'),
  YYYY: addInput('year'),
  YY: function (input) {
    input = +input
    this.year = input + (input > 68 ? 1900 : 2000)
  },
  z: function (input) {
    // istanbul ignore next
    const zone = this.zone || (this.zone = {})
    zone.abbreviation = input
  },
  Z: function (input) {
    const zone = this.zone || (this.zone = {})
    zone.offset = offsetFromString(input)
  },
  S: function (input) {
    this.milliseconds = +input * 100
  },
  SS: function (input) {
    this.milliseconds = +input * 10
  },
  SSS: function (input) {
    this.milliseconds = +input
  }
}

parseTokenFunctions.ZZ = parseTokenFunctions.Z

/* eslint-enable */


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
    const regex = parseTokenExpressions[token]
    const parser = parseTokenFunctions[token]
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

export default (input, format) => {
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
    return new Date(
      year, month - 1, day,
      hours || 0, minutes || 0, seconds || 0, milliseconds || 0
    )
  } catch (e) {
    return new Date('') // Invalid Date
  }
}
