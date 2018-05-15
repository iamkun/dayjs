import * as C from '../constant'

export default (o, c, d) => {
  const proto = c.prototype
  d.en.relativeTime = {
    future: 'in %s',
    past: '%s ago',
    present: 'just now',
    s: 'a second',
    ss: '%d seconds',
    min: 'a minute',
    mins: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    m: 'a month',
    mm: '%d months',
    q: 'a quarter',
    qq: '%d quarters',
    y: 'a year',
    yy: '%d years'
  }
  proto.fromNow = function (input) {
    const U = this.$utils()
    const loc = this.$locale().relativeTime
    const P = [{ l: [loc.s, loc.ss], v: C.MILLISECONDS_A_SECOND },
      { l: [loc.min, loc.mins], v: C.MILLISECONDS_A_SECOND * 60 },
      { l: [loc.h, loc.hh], v: C.MILLISECONDS_A_HOUR },
      { l: [loc.d, loc.dd], v: C.MILLISECONDS_A_DAY },
      { l: [loc.w, loc.ww], v: C.MILLISECONDS_A_WEEK },
      { l: [loc.m, loc.mm], v: C.MILLISECONDS_A_WEEK * 4 },
      { l: [loc.q, loc.qq], v: C.MILLISECONDS_A_WEEK * 12 },
      { l: [loc.y, loc.yy], v: C.MILLISECONDS_A_WEEK * 4 * 12 }]

    const result = input.diff(this, `${C.MS}s`)
    if (!result) return loc.present
    const resabs = Math.abs(result)
    let out = ''
    for (let i = 0; i < P.length; i += 1) {
      if (resabs >= P[i].v) out = `${resabs !== P[i].v ? P[i].l[1].replace('%d', U.absFloor(resabs / P[i].v)) : P[i].l[0].replace('%d', U.absFloor(resabs / P[i].v))}`
    }
    return result > 0 ? loc.future.replace('%s', out) : loc.past.replace('%s', out)
  }
}
