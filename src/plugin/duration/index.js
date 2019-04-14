import * as C from '../../constant'

const dayStart = dt => dt.startOf(C.D)

function dayDiff(earlier, later) {
  return Math.floor(dayStart(later).diff(dayStart(earlier)) / C.MILLISECONDS_A_DAY)
}

function highOrderDiffs(cursor, later, isPast) {
  const differs = [
    [C.Y, (a, b) => b.year() - a.year()],
    [C.M, (a, b) => (b.month() - a.month()) + ((b.year() - a.year()) * C.MONTHS_A_YEAR)],
    [C.D, dayDiff]
  ]
  const results = {}
  let cdelta
  for (const [unit, differ] of differs) {
    let delta = differ(cursor, later)
    cdelta = cursor.add(delta, unit)
    if (cdelta > later) {
      delta -= 1
      cursor = cursor.add(delta, unit)
    } else {
      cursor = cdelta
    }
    results[unit] = isPast ? -1 * delta : delta
  }
  return [cursor, results]
}

function lowerOrderDiffs(rms, isPast) {
  const differs = [
    [C.H, ms => Math.floor(ms / C.MILLISECONDS_A_HOUR),
      (ms, h) => ms - (h * C.MILLISECONDS_A_HOUR)
    ],
    [C.MIN, ms => Math.floor(ms / C.MILLISECONDS_A_MINUTE),
      (ms, m) => ms - (m * C.MILLISECONDS_A_MINUTE)
    ],
    [C.S, ms => Math.floor(ms / C.MILLISECONDS_A_SECOND),
      (ms, s) => ms - (s * C.MILLISECONDS_A_SECOND)
    ],
    [C.MS, ms => Math.floor(ms)]
  ]
  const results = {}
  let delta = 0
  for (const [unit, differ, rimender] of differs) {
    if (rms > 0) {
      delta = differ(rms)
      if (delta >= 0 && unit !== C.MS) {
        rms = rimender(rms, delta)
      } else {
        rms = 0
      }
    }
    results[unit] = isPast ? -1 * delta : delta
    delta = 0
  }
  return results
}

export default (o, c, d) => {
  const proto = c.prototype
  proto.duration = function (input) {
    const instance = d(this)
    const that = d(input)
    const isPast = instance > that
    const earlier = isPast ? that : instance
    const later = isPast ? instance : that

    const [cursor, results] = highOrderDiffs(earlier, later, isPast)

    const remainingMillis = later - cursor

    return Object.assign(results, lowerOrderDiffs(remainingMillis, isPast))
  }
}
