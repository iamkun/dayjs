import fa from 'dayjs/esm/locale/fa'

import jdate from './calendar'
import * as C from './constant'

export default (o, Dayjs, dayjs) => {
  const proto = Dayjs.prototype
  const U = proto.$utils()
  const $isJalali = (v) => v.$C === 'jalali'
  const $prettyUnit = U.prettyUnit || U.p
  const $isUndefined = U.isUndefined || U.u
  const $padStart = U.padStart || U.s
  const $monthDiff = U.monthDiff || U.m
  const $absFloor = U.absFloor || U.a
  const wrapperOfTruth = (action) => function (...args) {
    const unsure = action.bind(this)(...args)
    unsure.$C = this.$C
    if (unsure.isJalali()) {
      unsure.InitJalali()
    }
    return unsure
  }

  // keep calendar on date manipulation
  proto.startOf = wrapperOfTruth(proto.startOf)
  proto.endOf = wrapperOfTruth(proto.endOf)
  proto.add = wrapperOfTruth(proto.add)
  proto.subtract = wrapperOfTruth(proto.subtract)
  proto.set = wrapperOfTruth(proto.set)
  const oldParse = proto.parse
  const oldInit = proto.init
  const oldStartOf = proto.startOf
  const old$Set = proto.$set
  const oldAdd = proto.add
  const oldFormat = proto.format
  const oldDiff = proto.diff
  const oldYear = proto.year
  const oldMonth = proto.month
  const oldDate = proto.date
  const oldDaysInMonth = proto.daysInMonth
  const oldToArray = proto.toArray

  dayjs.$C = 'gregory'
  // First Day Of Week
  dayjs.$fdow = 6 // 0: sunday, ...

  dayjs.calendar = function (calendar) {
    dayjs.$C = calendar
    return dayjs
  }

  proto.calendar = function (calendar) {
    const that = this.clone()
    that.$C = calendar
    if (that.isJalali()) {
      that.InitJalali()
    }
    return that
  }

  proto.isJalali = function () {
    return $isJalali(this)
  }

  dayjs.en.jmonths = 'Farvardin_Ordibehesht_Khordaad_Tir_Mordaad_Shahrivar_Mehr_Aabaan_Aazar_Dey_Bahman_Esfand'.split('_')
  dayjs.locale('fa', { ...fa, ...C.fa }, true)

  const wrapper = function (date, instance) {
    return dayjs(date, {
      locale: instance.$L,
      utc: instance.$u,
      calendar: instance.$C
    })
  }

  proto.init = function (cfg = {}) {
    oldInit.bind(this)(cfg)

    if (this.isJalali()) {
      this.InitJalali()
    }
  }

  proto.parse = function (cfg) {
    let reg
    this.$C = cfg.calendar || this.$C || dayjs.$C
    // eslint-disable-next-line no-cond-assign
    if (cfg.jalali && (typeof cfg.date === 'string')
      && (/.*[^Z]$/i.test(cfg.date)) // looking for a better way
      && (reg = cfg.date.match(C.REGEX_PARSE))) {
      // 1397-08-08 or 13970808
      const [y, m, d] = jdate.G(
        parseInt(reg[1], 10),
        parseInt(reg[2], 10),
        parseInt(reg[3] || 1, 10)
      )
      cfg.date = `${y}-${m}-${d}${reg[4] || ''}`
    }
    return oldParse.bind(this)(cfg)
  }

  proto.InitJalali = function () {
    const [jy, jm, jd] = jdate.J(this.$y, this.$M + 1, this.$D)
    this.$jy = jy
    this.$jM = jm - 1
    this.$jD = jd
  }

  proto.startOf = function (units, startOf) { // startOf -> endOf
    if (!$isJalali(this)) {
      return oldStartOf.bind(this)(units, startOf)
    }
    const isStartOf = !$isUndefined(startOf) ? startOf : true
    const unit = $prettyUnit(units)
    const instanceFactory = (d, m, y = this.$jy) => {
      const [gy, gm, gd] = jdate.G(y, m + 1, d)
      const ins = wrapper(new Date(gy, gm - 1, gd), this)
      return (isStartOf ? ins : ins.endOf(C.D))
        .$set('hour', 1) // prevent daylight saving issue in safari
    }
    const WModifier = (this.$W + (7 - dayjs.$fdow)) % 7
    switch (unit) {
      case C.Y:
        return isStartOf ? instanceFactory(1, 0)
          : instanceFactory(0, 0, this.$jy + 1)
      case C.M:
        return isStartOf ? instanceFactory(1, this.$jM)
          : instanceFactory(
            0,
            (this.$jM + 1) % 12,
            this.$jy + parseInt((this.$jM + 1) / 12, 10)
          )
      case C.W:
        return isStartOf ? instanceFactory(this.$jD - WModifier, this.$jM)
          : instanceFactory(this.$jD + (6 - WModifier), this.$jM)
      default:
        return oldStartOf.bind(this)(units, startOf)
    }
  }

  proto.$set = function (units, int) {
    if (!$isJalali(this)) {
      return old$Set.bind(this)(units, int)
    }
    const unit = $prettyUnit(units)
    const instanceFactory = (d, m, y = this.$jy) => {
      const [gy, gm, gd] = jdate.G(y, m + 1, d)
      this.$d.setFullYear(gy)
      this.$d.setMonth(gm - 1)
      this.$d.setDate(gd)
      return this
    }
    switch (unit) {
      case C.DATE:
      case C.D:
        instanceFactory(int, this.$jM)
        break
      case C.M:
        instanceFactory(this.$jD, int)
        break
      case C.Y:
        instanceFactory(this.$jD, this.$jM, int)
        break
      default:
        return old$Set.bind(this)(units, int)
    }
    this.init()
    return this
  }

  proto.add = function (number, units) {
    if (!$isJalali(this)) {
      return oldAdd.bind(this)(number, units)
    }
    number = Number(number) // eslint-disable-line no-param-reassign
    // units === 'ms' hard code here, will update in next release
    const unit = (units && (units.length === 1 || units === 'ms')) ? units : $prettyUnit(units)
    const instanceFactory = (u, n) => {
      const date = this.set(C.DATE, 1).set(u, n + number)
      return date.set(C.DATE, Math.min(this.$jD, date.daysInMonth()))
    }
    if (['M', C.M].indexOf(unit) > -1) {
      const n = this.$jM + number
      const y = n < 0 ? -Math.ceil(-n / 12) : parseInt(n / 12, 10)
      const d = this.$jD
      const x = this.set(C.D, 1).add(y, C.Y).set(C.M, n - (y * 12))
      return x.set(C.D, Math.min(x.daysInMonth(), d))
    }
    if (['y', C.Y].indexOf(unit) > -1) {
      return instanceFactory(C.Y, this.$jy)
    }
    if (['d', C.D].indexOf(unit) > -1) {
      const date = new Date(this.$d)
      date.setDate(date.getDate() + number)
      return wrapper(date, this)
    }

    return oldAdd.bind(this)(number, units)
  }

  proto.format = function (formatStr, localeObject) {
    if (!$isJalali(this)) {
      return oldFormat.bind(this)(formatStr, localeObject)
    }
    const str = formatStr || C.FORMAT_DEFAULT
    const locale = localeObject || this.$locale()
    const { jmonths } = locale
    return str.replace(C.REGEX_FORMAT, (match) => {
      if (match.indexOf('[') > -1) return match.replace(/\[|\]/g, '')
      switch (match) {
        case 'YY':
          return String(this.$jy).slice(-2)
        case 'YYYY':
          return String(this.$jy)
        case 'M':
          return String(this.$jM + 1)
        case 'MM':
          return $padStart(this.$jM + 1, 2, '0')
        case 'MMM':
          return jmonths[this.$jM].slice(0, 3)
        case 'MMMM':
          return jmonths[this.$jM]
        case 'D':
          return String(this.$jD)
        case 'DD':
          return $padStart(this.$jD, 2, '0')
        default:
          return oldFormat.bind(this)(match, localeObject)
      }
    })
  }

  proto.diff = function (input, units, float) {
    if (!$isJalali(this)) {
      return oldDiff.bind(this)(input, units, float)
    }
    const unit = $prettyUnit(units)
    const that = dayjs(input)
    let result = $monthDiff(this, that)
    switch (unit) {
      case C.Y:
        result /= 12
        break
      case C.M:
        break
      default: // milliseconds
        return oldDiff.bind(this)(input, units, float)
    }
    return float ? result : $absFloor(result)
  }

  proto.$g = function (input, get, set) {
    if ($isUndefined(input)) return this[get]
    return this.set(set, input)
  }

  proto.year = function (input) {
    if (!$isJalali(this)) {
      return oldYear.bind(this)(input)
    }
    return this.$g(input, '$jy', C.Y)
  }

  proto.month = function (input) {
    if (!$isJalali(this)) {
      return oldMonth.bind(this)(input)
    }
    return this.$g(input, '$jM', C.M)
  }

  proto.date = function (input) {
    if (!$isJalali(this)) {
      return oldDate.bind(this)(input)
    }
    return this.$g(input, '$jD', C.D)
  }

  proto.daysInMonth = function () {
    if (!$isJalali(this)) {
      return oldDaysInMonth.bind(this)()
    }
    return this.endOf(C.M).$jD
  }

  /**
   * toArray function moved to official plugin
   * Check function existence before override
   */
  if (oldToArray) {
    proto.toArray = function () {
      if (!$isJalali(this)) {
        return oldToArray.bind(this)()
      }
      return [this.$jy, this.$jM, this.$jD, this.$H, this.$m, this.$s, this.$ms]
    }
  }

  proto.clone = function () {
    return wrapper(this.toDate(), this)
  }
}
