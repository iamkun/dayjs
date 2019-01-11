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

function addExpressionToken(token, regex) {
  parseTokenExpressions[token] = regex
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
addParseToken(['s', 'ss'], 'seconds')

addExpressionToken('m', match1to2)
addExpressionToken('mm', match2)
addParseToken(['m', 'mm'], 'minutes')

addExpressionToken('H', match1to2)
addExpressionToken('h', match1to2)
addExpressionToken('HH', match2)
addExpressionToken('hh', match2)
addParseToken(['H', 'HH', 'h', 'hh'], 'hours')

addExpressionToken('D', match1to2)
addExpressionToken('DD', match2)
addParseToken(['D', 'DD'], 'day')

addExpressionToken('M', match1to2)
addExpressionToken('MM', match2)
addParseToken(['M', 'MM'], 'month')

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

export default parseFormattedInput
