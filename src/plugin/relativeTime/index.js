import * as C from '../../constant'
import pluralRules from './pluralRules'

// Returns 0 for singular and 1 for plural for languages with a single plural
const simplePluralRule = 1
// Returns 0 for singular, 1 for plural for 2 <= value <= 4 and 2 for plural
// for value >= 5, which is sufficient for some languages like Czech
const improvedPluralRule = 8

export default (o, c, d) => {
  const proto = c.prototype
  d.en.relativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  }
  // Upgrades the original locale format with the single plural only
  // {
  //   future: '...', past: '..,',
  //   s: '...', m: '...', mm: '...'
  // }
  function upgradeSimpleLocale(loc) {
    // Save wrapper expressions with prepositions
    const { future, past } = loc
    // Prepare localized expressions for durations (neither future nor past)
    const durations = Object.keys(loc).reduce((result, key) => {
      const kl = key.length
      // Skip entries in the locale, which do not format numerals (future and past)
      if (kl <= 2) {
        // Array of plurals uses just one-letter keys
        const unit = key[0]
        // Make sure, that the unit-formatting string has an array of plurals
        const pluralForms = result[unit] || (result[unit] = [])
        // Make sure, that singular comes before the plural in the array
        pluralForms[kl - 1] = loc[key]
      }
      // Remove the original locale entry; the original locale object needs
      // to be retained to prevent upgrading on every formatting call
      delete loc[key]
      return result
    }, {})
    // Prepare localized expressions for future and past
    const futures = {}
    const pasts = {}
    Object.keys(durations).forEach((key) => {
      const pluralForms = durations[key]
      futures[key] = pluralForms.map(pluralForm => future.replace('%s', pluralForm))
      pasts[key] = pluralForms.map(pluralForm => past.replace('%s', pluralForm))
    })
    // Set localized expressions for durations, future and past to the locale
    loc.duration = durations
    loc.future = futures
    loc.past = pasts
    // Recognize a singular and only one plural like in English
    loc.pluralRule = simplePluralRule
  }
  // Upgrade the improved, but not the final version of the localization,
  // which supports two plurals by keys with two and three letters
  // {
  //   duration: { s: '...', m: '...', mm: '...', mmm: '...' },
  //   future: { ... }, past: { ... }
  // }
  function upgradeImprovedLocale(loc) {
    // Put one, two and three lettered strings to an array
    function convertPlurals(object) {
      return Object.keys(object).reduce((result, key) => {
        const kl = key.length
        // Array of plurals uses just one-letter keys
        const unit = key[0]
        // Make sure, that the unit-formatting string has an array of plurals
        const pluralForms = result[unit] || (result[unit] = [])
        // Make sure, that singular comes before plurals and plurals come in
        // the right order
        pluralForms[kl - 1] = object[key]
        return result
      }, {})
    }
    // Set localized expressions for durations, future and past to the locale
    loc.duration = convertPlurals(loc.duration)
    loc.future = convertPlurals(loc.future)
    loc.past = convertPlurals(loc.past)
    // Recognize a singular and two plurals like in Czech
    loc.pluralRule = improvedPluralRule
  }
  // Upgrades old locale format to provide compatibility with older
  // localizations; the grammar may not be correct for fusional languages
  // {
  //   duration: { s: ['...'], m: ['...', '...', ...] },
  //   future: { ... }, past: { ... }, pluralRule: N
  // }
  function upgradeLocale(loc) {
    // Do not upgrade already upgraded locales
    if (loc.s) {
      upgradeSimpleLocale(loc)
    } else if (typeof loc.duration.s === 'string') {
      upgradeImprovedLocale(loc)
    }
  }
  const fromTo = (input, withoutSuffix, instance, isFrom) => {
    const locs = instance.$locale().relativeTime
    const T = [
      { l: 's', r: 44, d: C.S },
      { l: 'm', r: 89 },
      { l: 'm', r: 44, d: C.MIN, m: true }, // eslint-disable-line object-curly-newline
      { l: 'h', r: 89 },
      { l: 'h', r: 21, d: C.H, m: true }, // eslint-disable-line object-curly-newline
      { l: 'd', r: 35 },
      { l: 'd', r: 25, d: C.D, m: true }, // eslint-disable-line object-curly-newline
      { l: 'M', r: 45 },
      { l: 'M', r: 10, d: C.M, m: true }, // eslint-disable-line object-curly-newline
      { l: 'y', r: 17 },
      { l: 'y', d: C.Y, m: true }
    ]
    const Tl = T.length
    let result
    let out

    upgradeLocale(locs)

    for (let i = 0; i < Tl; i += 1) {
      const t = T[i]
      const unit = t.d
      if (unit) {
        result = isFrom
          ? d(input).diff(instance, unit, true)
          : instance.diff(input, unit, true)
      }
      const abs = Math.ceil(Math.abs(result))
      const limit = t.r
      if (abs <= limit || !limit) {
        let loc
        // Use the proper source of localization expressions depending
        // on the requested expression - just duration, future or past
        if (withoutSuffix) {
          loc = locs.duration
        } else if (result > 0) {
          loc = locs.future
        } else {
          loc = locs.past
        }
        const key = t.l
        const pluralForms = loc[key]
        let pluralFormIndex
        if (t.m) {
          // Compute the index in the array of localized expressions;
          // zero is singular, then come plurals
          let { pluralRule } = locs
          if (typeof pluralRule === 'number') {
            pluralRule = pluralRules[pluralRule]
          }
          pluralFormIndex = pluralRule(abs)
        } else {
          // Singular is always the first item in the array
          pluralFormIndex = 0
        }
        out = pluralForms[pluralFormIndex].replace('%d', abs)
        break
      }
    }
    return out
  }
  proto.to = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this, true)
  }
  proto.from = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this)
  }
  proto.toNow = function (withoutSuffix) {
    return this.to(d(), withoutSuffix)
  }
  proto.fromNow = function (withoutSuffix) {
    return this.from(d(), withoutSuffix)
  }
}
