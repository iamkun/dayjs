import * as C from '../constant'
import * as _U from '../utils'

export default (o, c) => {
  const proto = c.prototype
  proto.fromNow = function (input) {
    const U = _U.default
    const loc = this.$locale()
    const Cs = this.$locale().M ? this.$locale() : C
    const P = [{ l: [Cs.S, Cs.SS], v: C.MILLISECONDS_A_SECOND },
      { l: [Cs.MIN, Cs.MINS], v: C.MILLISECONDS_A_SECOND * 60 },
      { l: [Cs.H, Cs.HH], v: C.MILLISECONDS_A_HOUR },
      { l: [Cs.D, Cs.DD], v: C.MILLISECONDS_A_DAY },
      { l: [Cs.W, Cs.WW], v: C.MILLISECONDS_A_WEEK },
      { l: [Cs.M, Cs.MM], v: C.MILLISECONDS_A_WEEK * 4 },
      { l: [Cs.Q, Cs.QQ], v: C.MILLISECONDS_A_WEEK * 12 },
      { l: [Cs.Y, Cs.YY], v: C.MILLISECONDS_A_WEEK * 4 * 12 }]

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
