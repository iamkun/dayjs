import * as C from './constant'
import U from './utils'
import en from './locale/en'
import polyfillLoader from './plugin/timezones/polyfillLoader'

let L = 'en' // global locale
const Ls = {} // global loaded locale
Ls[L] = en

const isDayjs = d => d instanceof Dayjs // eslint-disable-line no-use-before-define

const parseLocale = (preset, object, isLocal) => {
  let l
  if (!preset) return L
  if (typeof preset === 'string') {
    if (Ls[preset]) {
      l = preset
    }
    if (object) {
      Ls[preset] = object
      l = preset
    } else if (!Ls[preset]) {
      l = preset // using intl api
      Ls[preset] = { name: preset }
    }
  } else {
    const { name } = preset
    Ls[name] = preset
    l = name
  }
  if (!isLocal) L = l
  return l
}

const dayjs = (date, c, pl) => {
  if (isDayjs(date)) {
    return date.clone()
  }
  let cfg
  if (c) {
    if (typeof c === 'string') {
      cfg = { format: c, pl }
    } else {
      cfg = c
    }
  } else {
    cfg = {}
  }
  cfg.date = date
  return new Dayjs(cfg) // eslint-disable-line no-use-before-define
}

const wrapper = (date, instance) => dayjs(date, {
  locale: instance.$L,
  utc: instance.$u,
  timeZone: instance.timeZone,
  tzOffsetModifier: instance.$tzOffsetModifier
})

const Utils = U // for plugin use
Utils.l = parseLocale
Utils.i = isDayjs
Utils.w = wrapper

const parseDate = (cfg) => {
  const { date, utc } = cfg
  if (date === null) return new Date(NaN) // null is invalid
  if (Utils.u(date)) return new Date() // today
  if (date instanceof Date) return new Date(date)
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(C.REGEX_PARSE)
    if (d) {
      if (utc) {
        return new Date(Date.UTC(d[1], d[2] - 1, d[3]
          || 1, d[4] || 0, d[5] || 0, d[6] || 0, d[7] || 0))
      }
      return new Date(d[1], d[2] - 1, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, d[7] || 0)
    }
  }

  return new Date(date) // everything else
}

class Dayjs {
  constructor(cfg) {
    this.$L = this.$L || parseLocale(cfg.locale, null, true)
    this.parse(cfg) // for plugin
  }

  parse(cfg) {
    this.$d = parseDate(cfg)
    this.timeZone = cfg.timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone
    // how much offset changed after tz change
    this.$tzOffsetModifier = cfg.tzOffsetModifier ? cfg.tzOffsetModifier : 0
    this.init()
  }

  init() {
    const { $d } = this
    this.$y = $d.getFullYear()
    this.$M = $d.getMonth()
    this.$D = $d.getDate()
    this.$W = $d.getDay()
    this.$H = $d.getHours()
    this.$m = $d.getMinutes()
    this.$s = $d.getSeconds()
    this.$ms = $d.getMilliseconds()
  }

  // eslint-disable-next-line class-methods-use-this
  $utils() {
    return Utils
  }

  isValid() {
    return !(this.$d.toString() === C.INVALID_DATE_STRING)
  }

  isSame(that, units) {
    const other = dayjs(that)
    return this.startOf(units) <= other && other <= this.endOf(units)
  }

  isAfter(that, units) {
    return dayjs(that) < this.startOf(units)
  }

  isBefore(that, units) {
    return this.endOf(units) < dayjs(that)
  }

  $g(input, get, set) {
    if (Utils.u(input)) return this[get]
    return this.set(set, input)
  }

  year(input) {
    return this.$g(input, '$y', C.Y)
  }

  month(input) {
    return this.$g(input, '$M', C.M)
  }

  day(input) {
    return this.$g(input, '$W', C.D)
  }

  date(input) {
    return this.$g(input, '$D', C.DATE)
  }

  hour(input) {
    return this.$g(input, '$H', C.H)
  }

  minute(input) {
    return this.$g(input, '$m', C.MIN)
  }

  second(input) {
    return this.$g(input, '$s', C.S)
  }

  millisecond(input) {
    return this.$g(input, '$ms', C.MS)
  }

  unix() {
    return Math.floor(this.valueOf() / 1000)
  }

  valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime()
  }

  startOf(units, startOf) { // startOf -> endOf
    const isStartOf = !Utils.u(startOf) ? startOf : true
    const unit = Utils.p(units)
    const instanceFactory = (d, m) => {
      const ins = Utils.w(this.$u ?
        Date.UTC(this.$y, m, d) : new Date(this.$y, m, d), this)
      return isStartOf ? ins : ins.endOf(C.D)
    }
    const instanceFactorySet = (method, slice) => {
      const argumentStart = [0, 0, 0, 0]
      const argumentEnd = [23, 59, 59, 999]
      return Utils.w(this.toDate()[method].apply( // eslint-disable-line prefer-spread
        this.toDate(),
        (isStartOf ? argumentStart : argumentEnd).slice(slice)
      ), this)
    }
    const { $W, $M, $D } = this
    const utcPad = `set${this.$u ? 'UTC' : ''}`
    switch (unit) {
      case C.Y:
        return isStartOf ? instanceFactory(1, 0) :
          instanceFactory(31, 11)
      case C.M:
        return isStartOf ? instanceFactory(1, $M) :
          instanceFactory(0, $M + 1)
      case C.W: {
        const weekStart = this.$locale().weekStart || 0
        const gap = ($W < weekStart ? $W + 7 : $W) - weekStart
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M)
      }
      case C.D:
      case C.DATE:
        return instanceFactorySet(`${utcPad}Hours`, 0)
      case C.H:
        return instanceFactorySet(`${utcPad}Minutes`, 1)
      case C.MIN:
        return instanceFactorySet(`${utcPad}Seconds`, 2)
      case C.S:
        return instanceFactorySet(`${utcPad}Milliseconds`, 3)
      default:
        return this.clone()
    }
  }

  endOf(arg) {
    return this.startOf(arg, false)
  }

  $set(units, int) { // private set
    const unit = Utils.p(units)
    const utcPad = `set${this.$u ? 'UTC' : ''}`
    const name = {
      [C.D]: `${utcPad}Date`,
      [C.DATE]: `${utcPad}Date`,
      [C.M]: `${utcPad}Month`,
      [C.Y]: `${utcPad}FullYear`,
      [C.H]: `${utcPad}Hours`,
      [C.MIN]: `${utcPad}Minutes`,
      [C.S]: `${utcPad}Seconds`,
      [C.MS]: `${utcPad}Milliseconds`
    }[unit]
    const arg = unit === C.D ? this.$D + (int - this.$W) : int

    if (unit === C.M || unit === C.Y) {
      // clone is for badMutable plugin
      const date = this.clone().set(C.DATE, 1)
      date.$d[name](arg)
      date.init()
      this.$d = date.set(C.DATE, Math.min(this.$D, date.daysInMonth())).toDate()
    } else if (name) this.$d[name](arg)

    this.init()
    return this
  }

  set(string, int) {
    return this.clone().$set(string, int)
  }

  get(unit) {
    return this[Utils.p(unit)]()
  }

  add(number, units) {
    number = Number(number) // eslint-disable-line no-param-reassign
    const unit = Utils.p(units)
    const instanceFactorySet = (n) => {
      const d = dayjs(this)
      return Utils.w(d.date(d.date() + Math.round(n * number)), this)
    }
    if (unit === C.M) {
      return this.set(C.M, this.$M + number)
    }
    if (unit === C.Y) {
      return this.set(C.Y, this.$y + number)
    }
    if (unit === C.D) {
      return instanceFactorySet(1)
    }
    if (unit === C.W) {
      return instanceFactorySet(7)
    }
    const step = {
      [C.MIN]: C.MILLISECONDS_A_MINUTE,
      [C.H]: C.MILLISECONDS_A_HOUR,
      [C.S]: C.MILLISECONDS_A_SECOND
    }[unit] || 1 // ms

    const nextTimeStamp = this.valueOf() + (number * step)
    return Utils.w(nextTimeStamp, this)
  }

  subtract(number, string) {
    return this.add(number * -1, string)
  }

  format(formatStr, options = {}) {
    if (!this.isValid()) return C.INVALID_DATE_STRING
    const locale = this.$locale()
    const { name } = locale
    const isIntl = Object.keys(locale).length === 1
    const str = formatStr || (!isIntl && C.FORMAT_DEFAULT) || ''
    if (isIntl) {
      polyfillLoader()
    }
    const zoneStr = Utils.z(this)
    const {
      $H, $m, $M, $W, $ms
    } = this
    const getShort = (arr, index, full, length) => (
      (arr && (arr[index] || arr(this, str))) || full[index].substr(0, length)
    )
    const get$H = num => (
      Utils.s($H % 12 || 12, num, '0')
    )

    if (isIntl) { // using intl api from browser
      const a = { // value abreviations
        n: 'numeric',
        t: '2-digit',
        s: 'short',
        l: 'long',
        na: 'narrow'
      }

      const c = field => // create object for options
        value => ({ [field]: value })

      const h12 = c('hour12')
      const wd = c('weekday')
      const y = c('year')
      const m = c('month')
      const d = c('day')
      const h = c('hour')
      const mi = c('minute')
      const s = c('second')
      const matches = {
        YY: y(a.t),
        YYYY: y(a.n),
        M: m(a.n),
        MM: m(a.t),
        MMM: m(a.s),
        MMMM: m(a.l),
        D: d(a.n),
        DD: d(a.t),
        d: wd(a.s),
        dd: wd(a.s),
        ddd: wd(a.s),
        dddd: wd(a.l),
        H: [h(a.n), h12(false)],
        HH: [h(a.t), h12(false)],
        h: [h(a.n), h12(true)],
        hh: [h(a.t), h12(true)],
        a: { a: true }, // td
        A: { A: true }, // td
        m: mi(a.n),
        mm: mi(a.t),
        s: s(a.n),
        ss: s(a.t),
        SSS: { SSS: true }, // td
        Z: { Z: zoneStr },
        ZZ: { ZZ: zoneStr.replace(':', '') }
      }
      const keys = {} // used to determine which options are passed
      const opt = (str.match(C.REGEX_FORMAT) || []).reduce((ab, x) => {
        if (Array.isArray(x)) { // h and H
          const opts = x.reduce((az, xz) => Object.assign(az, matches[xz]), ab)
          Object.assign(keys, opts)
          return opts
        }
        Object.assign(keys, { [x]: true })
        return Object.assign(ab, matches[x])
      }, {})
      Object.assign(opt, options)
      let dateToUse = this.$d
      if (options.timeZoneName) {
        dateToUse = this.add(this.$tzOffsetModifier, 'minute').toDate()
        Object.assign(opt, { timeZone: this.timeZone })
      }
      const stringified = Intl.DateTimeFormat(name, opt).formatToParts(dateToUse).map((x) => {
        switch (x.type) {
          case 'weekday':
            if (keys.d) {
              return String($W)
            } else if (opt.dd) {
              return x.value.substring(0, 2)
            }
            break
          case 'dayPeriod':
            if (keys.a) {
              return x.value.toLocaleLowerCase(name)
            } else if (keys.A) {
              return x.value.toLocaleUpperCase(name)
            }
            break
          case 'second':
            if (keys.SSS) {
              return Utils.s($ms, 3, '0')
            }
            break
          default:
            return x.value
        }
        return x.value
      }).join('')
      if (opt.Z) {
        return stringified + opt.Z
      } else if (opt.ZZ) {
        return stringified + opt.ZZ
      }
      return stringified
    }
    // using locale files
    const {
      weekdays, months, meridiem
    } = locale

    const meridiemFunc = meridiem || ((hour, minute, isLowercase) => {
      const m = (hour < 12 ? 'AM' : 'PM')
      return isLowercase ? m.toLowerCase() : m
    })

    const matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: months[$M] || months(this, str),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr // 'ZZ' logic below
    }
    return str.replace(C.REGEX_FORMAT, (match, $1) => $1 || matches[match] || zoneStr.replace(':', '')) // 'ZZ'
  }

  utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round((this.$d.getTimezoneOffset() + this.$tzOffsetModifier) / 15) * 15
  }

  diff(input, units, float) {
    const unit = Utils.p(units)
    const that = dayjs(input)
    const zoneDelta = (that.utcOffset() - this.utcOffset()) * C.MILLISECONDS_A_MINUTE
    const diff = this - that
    let result = Utils.m(this, that)

    result = {
      [C.Y]: result / 12,
      [C.M]: result,
      [C.Q]: result / 3,
      [C.W]: (diff - zoneDelta) / C.MILLISECONDS_A_WEEK,
      [C.D]: (diff - zoneDelta) / C.MILLISECONDS_A_DAY,
      [C.H]: diff / C.MILLISECONDS_A_HOUR,
      [C.MIN]: diff / C.MILLISECONDS_A_MINUTE,
      [C.S]: diff / C.MILLISECONDS_A_SECOND
    }[unit] || diff // milliseconds

    return float ? result : Utils.a(result)
  }

  daysInMonth() {
    return this.endOf(C.M).$D
  }

  utc() {
    // const converted = this.tz('Etc/UTC')
    const a = this.tz('Etc/UTC')
    return a
  }

  $locale() { // get locale object
    return Ls[this.$L]
  }

  locale(preset, object) {
    if (!preset) return this.$L
    const that = this.clone()
    that.$L = parseLocale(preset, object, true)
    return that
  }

  clone() {
    return Utils.w(this.toDate(), this)
  }

  toDate() {
    return new Date(this.$d)
  }

  toJSON() {
    return this.toISOString()
  }

  toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString()
  }

  toString() {
    return this.$d.toUTCString()
  }
}

dayjs.prototype = Dayjs.prototype

dayjs.extend = (plugin, option) => {
  plugin(option, Dayjs, dayjs)
  return dayjs
}

dayjs.locale = parseLocale

dayjs.isDayjs = isDayjs

dayjs.unix = timestamp => (
  dayjs(timestamp * 1e3)
)

dayjs.en = Ls[L]
dayjs.Ls = Ls

export default dayjs
