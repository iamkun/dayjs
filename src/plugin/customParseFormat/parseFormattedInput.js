/* eslint-disable prefer-arrow-callback */

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

const parseTokenExpressions = {}
const parseTokenFunctions = {}
const parsers = {}

const daysInMonths = [
  31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function checkDay(time) {
  const { day, month } = time
  let days
  if (month === 2) {
    days = isLeapYear(time.year) ? 29 : 28
  } else {
    days = daysInMonths[month - 1]
  }
  if (!(day >= 1 && day <= days)) {
    throw new Error(`Invalid day: "${day}".`)
  }
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
  if (!array) {
    throw new Error(`Invalid format: "${format}".`)
  }
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
        if (input.indexOf(token, start) !== start) {
          const part = input.substr(start, token.length)
          throw new Error(`Expected "${token}" at character ${start}, found "${part}".`)
        }
        start += token.length
      } else {
        const { regex, parser } = token
        const part = input.substr(start)
        const match = regex.exec(part)
        if (!match || match.index !== 0) {
          throw new Error(`Matching "${regex}" at character ${start} failed with "${part}".`)
        }
        const value = match[0]
        parser.call(time, value)
        start += value.length
      }
    }
    checkDay(time)
    correctHours(time)
    return time
  }
}

function addExpressionToken(token, regex) {
  parseTokenExpressions[token] = regex
}

function addParseToken(tokens, property, check) {
  if (typeof tokens === 'string') {
    tokens = [tokens]
  }
  let callback
  if (typeof property === 'string') {
    if (check) {
      callback = function (input) {
        const value = +input
        if (!check(value)) {
          throw new Error(`Invalid ${property}: "${input}".`)
        }
        this[property] = value
      }
    } else {
      callback = function (input) {
        this[property] = +input
      }
    }
  } else {
    callback = property
  }
  for (let i = 0, { length } = tokens; i < length; i += 1) {
    parseTokenFunctions[tokens[i]] = callback
  }
}

function offsetFromString(string) {
  const parts = string.match(/([+-]|\d\d)/g)
  const minutes = +(parts[1] * 60) + +parts[2]
  const offset = minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes // eslint-disable-line no-nested-ternary
  if (!(offset % 15 === 0 && Math.abs(offset) <= 765)) { // 00:00 - 12:45
    throw new Error(`Invalid time zone offset: "${string}".`)
  }
  return offset
}

addExpressionToken('A', matchUpperCaseAMPM)
addParseToken(['A'], function (input) {
  this.afternoon = input === 'PM'
})
addExpressionToken('a', matchLowerCaseAMPM)
addParseToken(['a'], function (input) {
  this.afternoon = input === 'pm'
})

addExpressionToken('S', match1)
addExpressionToken('SS', match2)
addExpressionToken('SSS', match3)
for (let token = 'S', factor = 100; factor >= 1; token += 'S', factor /= 10) {
  addParseToken(token, function (input) {
    this.milliseconds = +input * factor
  })
}

addExpressionToken('s', match1to2)
addExpressionToken('ss', match2)
addParseToken(['s', 'ss'], 'seconds', function (seconds) {
  return seconds <= 59
})

addExpressionToken('m', match1to2)
addExpressionToken('mm', match2)
addParseToken(['m', 'mm'], 'minutes', function (minutes) {
  return minutes <= 59
})

addExpressionToken('H', match1to2)
addExpressionToken('h', match1to2)
addExpressionToken('HH', match2)
addExpressionToken('hh', match2)
addParseToken(['H', 'HH'], 'hours', function (hours) {
  return hours <= 23
})
addParseToken(['h', 'hh'], 'hours', function (hours) {
  return hours >= 1 && hours <= 12
})

addExpressionToken('D', match1to2)
addExpressionToken('DD', match2)
addParseToken(['D', 'DD'], 'day')

addExpressionToken('M', match1to2)
addExpressionToken('MM', match2)
addParseToken(['M', 'MM'], 'month', function (month) {
  return month >= 1 && month <= 12
})

addExpressionToken('Y', matchSigned)
addExpressionToken('YY', match2)
addExpressionToken('YYYY', match4)
addParseToken(['Y', 'YYYY'], 'year')
addParseToken('YY', function (input) {
  input = +input
  this.year = input + (input > 68 ? 1900 : 2000)
})

addExpressionToken('z', matchAbbreviation)
addParseToken('z', function (input) {
  // istanbul ignore next
  const zone = this.zone || (this.zone = {})
  zone.abbreviation = input
})

addExpressionToken('Z', matchOffset)
addExpressionToken('ZZ', matchOffset)
addParseToken(['Z', 'ZZ'], function (input) {
  const zone = this.zone || (this.zone = {})
  zone.offset = offsetFromString(input)
})

function parseFormattedInput(input, format) {
  let parser = parsers[format]
  if (!parser) {
    parser = makeParser(format)
    parsers[format] = parser
  }
  const {
    year, month, day, hours, minutes, seconds, milliseconds, zone
  } = parser(input)
  if (zone) {
    return new Date(Date.UTC(
      year, month - 1, day,
      hours || 0, minutes || 0, seconds || 0, milliseconds || 0
    ) + (zone.offset * 60 * 1000))
  }
  return new Date(
    year, month - 1, day,
    hours || 0, minutes || 0, seconds || 0, milliseconds || 0
  )
}

export default parseFormattedInput
