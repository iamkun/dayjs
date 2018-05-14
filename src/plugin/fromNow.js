import * as C from '../constant'
import * as U from '../utils'

export default (o, c) => {
  const proto = c.prototype
  proto.fromNow = function (input) {
    const loc = this.$locale()
    const P = [{ l: [loc.s, loc.ss], v: C.MILLISECONDS_A_SECOND },
      { l: [loc.min, loc.mins], v: C.MILLISECONDS_A_SECOND * 60 },
      { l: [loc.h, loc.hh], v: C.MILLISECONDS_A_HOUR },
      { l: [loc.d, loc.dd], v: C.MILLISECONDS_A_DAY },
      { l: [loc.w, loc.ww], v: C.MILLISECONDS_A_WEEK },
      { l: [loc.m, loc.mm], v: C.MILLISECONDS_A_WEEK * 4 },
      { l: [loc.q, loc.qq], v: C.MILLISECONDS_A_WEEK * 12 },
      { l: [loc.y, loc.yy], v: C.MILLISECONDS_A_WEEK * 4 * 12 }]

    const result = input.diff(this, `${C.MS}s`)
    const resabs = Math.abs(result)
    let out = ''
    for (let i = 0; i < P.length; i += 1) {
      if (resabs >= P[i].v) out = `${U.absFloor(resabs / P[i].v)} ${resabs !== P[i].v ? P[i].l[1] : P[i].l[0]}`
    }
    if (!result) return loc.present
    return result > 0 ? loc.future.replace('%s', out) : loc.past.replace('%s', out)
  }
}
