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

const parseTokenFunctions = {}
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
  if (!array) return false
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

function addParseToken(tokens, property) {
  if (typeof tokens === 'string') {
    tokens = [tokens]
  }
  const callback = typeof property === 'string' ? function (input) {
    this[property] = +input
  } : property
  for (let i = 0, { length } = tokens; i < length; i += 1) {
    parseTokenFunctions[tokens[i]] = callback
  }
}

function offsetFromString(string) {
  const parts = string.match(/([+-]|\d\d)/g)
  const minutes = +(parts[1] * 60) + +parts[2]
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes // eslint-disable-line no-nested-ternary
}

addParseToken(['A'], function (input) {
  this.afternoon = input === 'PM'
})
addParseToken(['a'], function (input) {
  this.afternoon = input === 'pm'
})

for (let token = 'S', factor = 100; factor >= 1; token += 'S', factor /= 10) {
  addParseToken(token, function (input) {
    this.milliseconds = +input * factor
  })
}
addParseToken(['s', 'ss'], 'seconds')
addParseToken(['m', 'mm'], 'minutes')
addParseToken(['H', 'HH', 'h', 'hh'], 'hours')
addParseToken(['D', 'DD'], 'day')
addParseToken(['M', 'MM'], 'month')
addParseToken(['Y', 'YYYY'], 'year')
addParseToken('YY', function (input) {
  input = +input
  this.year = input + (input > 68 ? 1900 : 2000)
})
addParseToken('z', function (input) {
  // istanbul ignore next
  const zone = this.zone || (this.zone = {})
  zone.abbreviation = input
})
addParseToken(['Z', 'ZZ'], function (input) {
  const zone = this.zone || (this.zone = {})
  zone.offset = offsetFromString(input)
})

export default (input, format) => {
  const parser = makeParser(format)
  if (parser) {
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
  }
  return new Date(Number.NaN)
}
