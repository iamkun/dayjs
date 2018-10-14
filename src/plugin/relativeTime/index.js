import * as C from '../../constant'
import pluralRules from './pluralRules'

// Special plural rules for upgraded locales, which are not complete
// Returns 0 for plural for languages with a single plural
const simplePluralRule = () => 0
// Returns 0 for plural for 2 <= value <= 4 and 1 for plural
// for value >= 5, which is sufficient for some languages like Czech
const improvedPluralRule = n => n >= 2 && n <= 4 ? 0 : 1 // eslint-disable-line no-confusing-arrow

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
        // Save the special singular without any number with the single-letter key and the
        // single plural to be used with any number greater then 1 with the two-letter key
        const text = loc[key]
        result[key] = kl === 1 ? text : [text]
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
      const value = durations[key]
      if (typeof value === 'string') {
        // Handle singular texts
        futures[key] = future.replace('%s', value)
        pasts[key] = past.replace('%s', value)
      } else {
        // Handle plural texts
        futures[key] = value.map(pluralForm => future.replace('%s', pluralForm))
        pasts[key] = value.map(pluralForm => past.replace('%s', pluralForm))
      }
    })
    // Set localized expressions for durations, future and past to the locale
    loc.duration = durations
    loc.future = futures
    loc.past = pasts
    // Recognize only one plural like in English
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
        const text = object[key]
        if (kl === 1) {
          // Leave the special singular without any number as-is
          result[key] = text
        } else {
          // Array of plurals uses the two-letter key
          const singularUnit = key[0]
          const pluralUnit = singularUnit + singularUnit
          // Make sure, that the unit-formatting string contains an array
          const pluralForms = result[pluralUnit] || (result[pluralUnit] = [])
          // Make sure, that the plural for 2-4 comes before the others in the array
          pluralForms[kl - 2] = text
        }
        return result
      }, {})
    }
    // Set localized expressions for durations, future and past to the locale
    loc.duration = convertPlurals(loc.duration)
    loc.future = convertPlurals(loc.future)
    loc.past = convertPlurals(loc.past)
    // Recognize two plurals like in the Czech language
    loc.pluralRule = improvedPluralRule
  }
  // Upgrades old locale format to provide compatibility with older
  // localizations; the grammar may not be correct for fusional languages
  // {
  //   duration: { s: '...', m: '...', mm: ['...', '...', ...] },
  //   future: { ... }, past: { ... }, pluralRule: N
  // }
  function upgradeLocale(loc) {
    // Do not upgrade already upgraded locales
    if (loc.s) {
      upgradeSimpleLocale(loc)
    } else if (typeof loc.duration.mm === 'string') {
      upgradeImprovedLocale(loc)
    }
  }
  const fromTo = (input, withoutSuffix, instance, isFrom) => {
    const locs = instance.$locale().relativeTime
    const T = [
      { l: 's', r: 44, d: C.S },
      { l: 'm', r: 89 },
      { l: 'mm', r: 44, d: C.MIN },
      { l: 'h', r: 89 },
      { l: 'hh', r: 21, d: C.H },
      { l: 'd', r: 35 },
      { l: 'dd', r: 25, d: C.D },
      { l: 'M', r: 45 },
      { l: 'MM', r: 10, d: C.M },
      { l: 'y', r: 17 },
      { l: 'yy', d: C.Y }
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
        if (key.length === 1) {
          // Handle singular using a special text without any number
          out = loc[key]
        } else {
          // Choose the plural form using the index decided by the plural rule
          let { pluralRule } = locs
          if (typeof pluralRule === 'number') {
            pluralRule = pluralRules[pluralRule]
          }
          const pluralForms = loc[key]
          const pluralFormIndex = pluralRule(abs)
          out = pluralForms[pluralFormIndex].replace('%d', abs)
        }
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
