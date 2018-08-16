import * as C from '../../constant'

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
  // Upgrades old locale format to provide compatibility with older localisations;
  // the grammar may not be correct for fusional languages
  function upgradeLocale(loc) {
    // Do not upgrade already upgraded locales
    if (!loc.s) {
      return
    }
    // Save wrapper expressions with prepositions
    const { future, past } = loc
    // Prepare localised expressions for durations (neither future nor past)
    const duration = Object.keys(loc).reduce((result, key) => {
      const kl = key.length
      // Skip entries in the locale, which do not format numerals (future and past)
      if (kl <= 2) {
        const val = loc[key]
        // Clone all entries in the locale for formatting numerals
        result[key] = val
        // Copy 'mm' and other two-letter keys to three-letter keys to be
        // able to use them for numerals greater or equal to 5 and leave
        // the original two-letter keys for numerals less than 6
        if (kl === 2) {
          result[key + key[0]] = val
        }
      }
      // Remove the original locale entry; the original locale object needs
      // to be retained to prevent upgrading on every formatting call
      delete loc[key]
      return result
    }, {})
    // Set localised expressions for durations to the locale
    loc.duration = duration
    // Prepare localised expressions for future
    loc.future = Object.keys(duration).reduce((result, key) => {
      result[key] = future.replace('%s', duration[key])
      return result
    }, {})
    // Prepare localised expressions for past
    loc.past = Object.keys(duration).reduce((result, key) => {
      result[key] = past.replace('%s', duration[key])
      return result
    }, {})
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
      if (t.d) {
        result = isFrom
          ? d(input).diff(instance, t.d, true)
          : instance.diff(input, t.d, true)
      }
      const abs = Math.ceil(Math.abs(result))
      if (abs <= t.r || !t.r) {
        let loc
        // Use the proper source of localisation expressions depending
        // on the requested expression - just duration, future or past
        if (withoutSuffix) {
          loc = locs.duration
        } else if (result > 0) {
          loc = locs.future
        } else {
          loc = locs.past
        }
        let key = t.l
        // Use the expression for the numeral greater or equal to 5, if
        // the current expression was for the numeral greater than 1
        // - a two-letter key - and the value value was greater or equal
        // to 5 - a three-letter key is needed
        if (key.length === 2 && abs > 4) {
          key += key[0]
        }
        out = loc[key].replace('%d', abs)
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
