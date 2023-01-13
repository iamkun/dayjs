// This plugin is based on the work of https://github.com/soar-tech & https://github.com/eduolalo

import { abs, absFloor } from '../utils'
import { UNIT_DAY, UNIT_MONTH, UNIT_WEEK, UNIT_YEAR } from './../constants'
import { normalize } from './../units'
import type { Dayjs, Plugin } from '..'
import type { GetUnit, Unit } from './../units'

export type holiday = {
  date: Dayjs
  name: string
  repeat?: number
  repeatUnit?: Exclude<Unit, GetUnit<'D'>>
}

export type optsHoliday = {
  [key: string]: holiday
}

declare module '../types' {
  export interface DayjsFn {
    setHoliday: (holiday: holiday[] | holiday) => void
    clearHoliday(): void
  }
}

declare module '../dayjs' {
  export interface Dayjs {
    // var
    _holiday: optsHoliday

    // business day
    isBusinessDay(): boolean
    addBusinessDay(value: number, unit?: Unit): Dayjs
    subtractBusinessDay(value: number, unit?: Unit): Dayjs
    nextBusinessDay(): Dayjs
    previousBusinessDay(): Dayjs
    lastBusinessDayOf(): Dayjs
    firstBusinessDayOf(): Dayjs
    businessDaysInMonth(): Dayjs[]
    businessDaysInMonthGroupByWeek(): Dayjs[][]

    // holiday
    isHoliday(): boolean
    getHolidays(): optsHoliday
  }
}

const idxBusinessDays = [1, 2, 3, 4, 5]

function $add(this: Dayjs, value: number): Dayjs {
  let restBusinessDay = idxBusinessDays.length - this.day()
  let nbrWeekAdd = 0
  let nbrDayAdd = value
  let idxThisDay = this.day()

  if (restBusinessDay < 0) {
    restBusinessDay = 0
    idxThisDay = 0
  }

  if (restBusinessDay < nbrDayAdd) {
    nbrDayAdd -= restBusinessDay
    idxThisDay = 0

    if (nbrWeekAdd === 0) {
      nbrWeekAdd += 1
    }
  } else {
    if (restBusinessDay === nbrDayAdd) {
      nbrWeekAdd = 0
    }

    if (restBusinessDay > nbrDayAdd) {
      nbrWeekAdd = 0
    }
  }

  if (nbrDayAdd > 5) {
    nbrWeekAdd += absFloor(nbrDayAdd / 5)
    nbrDayAdd -= absFloor(nbrDayAdd / 5) * 5
  }

  return this.add(nbrWeekAdd, UNIT_WEEK)
    .day(idxThisDay)
    .add(nbrDayAdd, UNIT_DAY)
}

// REWORK: This function is not working properly i think or i'm missing something
function $subtract(this: Dayjs, value: number): Dayjs {
  let restBusinessDay =
    idxBusinessDays.length - (idxBusinessDays.length - this.day()) - 1
  let nbrWeekAdd = 0
  let nbrDayAdd = value
  let idxThisDay = this.day()

  if (restBusinessDay <= 0) {
    restBusinessDay = 0
    idxThisDay = 6
  }

  if (restBusinessDay < nbrDayAdd) {
    nbrDayAdd -= restBusinessDay
    idxThisDay = 6

    if (nbrWeekAdd === 0) {
      nbrWeekAdd += 1
    }
  } else {
    if (restBusinessDay === nbrDayAdd) {
      nbrWeekAdd = 0
    }

    if (restBusinessDay > nbrDayAdd) {
      nbrWeekAdd = 0
    }
  }

  if (nbrDayAdd > 5) {
    nbrWeekAdd += absFloor(nbrDayAdd / 5)
    nbrDayAdd -= absFloor(nbrDayAdd / 5) * 5
  }

  // NOTE: Probably not the best solution, but it works.
  const res = this.subtract(nbrWeekAdd, UNIT_WEEK)
    .day(idxThisDay)
    .subtract(nbrDayAdd, UNIT_DAY)
  return [0, 1].includes(this.day()) && nbrWeekAdd > 1
    ? res.nextBusinessDay()
    : res
}

function businessDay(this: Dayjs, value: number, unit: Unit) {
  //  value is not 0

  const v = absFloor(value)
  let res = undefined

  if (v > 0) {
    if (unit === UNIT_DAY) res = $add.call(this, v)
    if (unit === UNIT_WEEK) res = $add.call(this, v * 5)
  }

  if (v < 0) {
    if (unit === UNIT_DAY) res = $subtract.call(this, abs(v))
    if (unit === UNIT_WEEK) res = $subtract.call(this, abs(v) * 5)
  }

  while (res !== undefined && res.isHoliday()) {
    if (v > 0) res = res.nextBusinessDay()
    if (v < 0) res = res.previousBusinessDay()
  }

  return res
}

function $setHoliday(old: optsHoliday, key: string, value: holiday) {
  return {
    ...old,
    [key]: value,
  }
}

const plugin: Plugin = (cls, fn) => {
  // (cls: DayjsClass, fn: DayjsFn)
  const proto = cls.prototype
  // global var
  proto._holiday = proto._holiday || {}

  // global function
  fn.setHoliday = function (this: Dayjs, holiday: holiday[] | holiday) {
    if (Array.isArray(holiday) && holiday.length > 0) {
      holiday.forEach((h) => {
        if (!h.repeat)
          proto._holiday = $setHoliday(
            proto._holiday,
            h.date.format('YYYY-MM-DD'),
            h
          )
        else {
          for (let i = 0, l = h.repeat; i < l; i++) {
            if (!h.repeatUnit) h.repeatUnit = UNIT_YEAR

            proto._holiday = $setHoliday(
              proto._holiday,
              h.repeatUnit === UNIT_DAY || h.repeatUnit === UNIT_MONTH
                ? h.date.addBusinessDay(i, h.repeatUnit).format('YYYY-MM-DD')
                : h.date.add(i, h.repeatUnit).format('YYYY-MM-DD'),
              {
                ...h,
                date: h.date.add(i, h.repeatUnit),
              }
            )
          }
        }
      })
    } else if (holiday && !Array.isArray(holiday))
      if (!holiday.repeat)
        proto._holiday = $setHoliday(
          proto._holiday,
          holiday.date.format('YYYY-MM-DD'),
          holiday
        )
      else {
        for (let i = 0, l = holiday.repeat; i < l; i++) {
          if (!holiday.repeatUnit) holiday.repeatUnit = UNIT_YEAR

          proto._holiday = $setHoliday(
            proto._holiday,
            holiday.repeatUnit === UNIT_DAY || holiday.repeatUnit === UNIT_MONTH
              ? holiday.date
                .addBusinessDay(i, holiday.repeatUnit)
                .format('YYYY-MM-DD')
              : holiday.date.add(i, holiday.repeatUnit).format('YYYY-MM-DD'),
            {
              ...holiday,
              date: holiday.date.add(i, holiday.repeatUnit),
            }
          )
        }
      }
  }

  fn.clearHoliday = function (this: Dayjs) {
    proto._holiday = {}
  }

  // Business day
  proto.isBusinessDay = function (this: Dayjs) {
    return idxBusinessDays.includes(this.day()) && !this.isHoliday()
  }

  proto.addBusinessDay = function (this: Dayjs, value?: number, unit?: Unit) {
    /* NOTE:
      1.  !(absFloor(value=undefined) => NaN, absFloor(value=0) => 0) => true, 
          but ts doesn't know that apparently, so we obligate to check if value is not undefined and not 0

      2.  uncovered branch (l.241), but it's not possible to reach it, because if value is 0 `!value` will be true and we will return `this`
    */
    if (!value) return this
    // if (!absFloor(value)) return this
    const u: Unit = unit ? normalize(unit) : UNIT_DAY

    return businessDay.call(this, abs(value), u) as Dayjs
  }

  proto.subtractBusinessDay = function (
    this: Dayjs,
    value?: number,
    unit?: Unit
  ) {
    /* NOTE:
      1.  !(absFloor(value=undefined) => NaN, absFloor(value=0) => 0) => true, 
          but ts doesn't know that apparently, so we obligate to check if value is not undefined and not 0

      2.  uncovered branch (l.241), but it's not possible to reach it, because if value is 0 `!value` will be true and we will return `this`
    */
    if (!value) return this
    // if (!absFloor(value)) return this
    const u: Unit = unit ? normalize(unit) : UNIT_DAY

    return businessDay.call(this, -abs(value), u) as Dayjs
  }

  proto.nextBusinessDay = function (this: Dayjs) {
    return this.addBusinessDay(1)
  }

  proto.previousBusinessDay = function (this: Dayjs) {
    return this.subtractBusinessDay(1)
  }

  proto.lastBusinessDayOf = function (this: Dayjs, unit?: Unit) {
    const lm = this.endOf(unit || UNIT_MONTH)
    return lm.isBusinessDay() ? lm : lm.previousBusinessDay()
  }

  proto.firstBusinessDayOf = function (this: Dayjs, unit?: Unit) {
    const fm = this.startOf(unit || UNIT_MONTH)
    return fm.isBusinessDay() ? fm : fm.nextBusinessDay()
  }

  proto.businessDaysInMonth = function (this: Dayjs) {
    let start = this.startOf(UNIT_MONTH).hour(this.hour())
    let end = this.endOf(UNIT_MONTH).hour(this.hour())
    if (!start.isBusinessDay()) start = start.nextBusinessDay()
    if (!end.isBusinessDay()) end = end.previousBusinessDay()

    const arr = []
    let current = start

    while (current.month() === end.month()) {
      arr.push(current)
      current = current.nextBusinessDay()
    }

    return arr
  }

  proto.businessDaysInMonthGroupByWeek = function (this: Dayjs) {
    const days = this.businessDaysInMonth()
    const arr: Dayjs[][] = []

    let lastDate: Dayjs | undefined,
      idxWeek = 0

    days.forEach((day) => {
      if (!lastDate) arr.push([day])
      else if (lastDate.day() + 1 === day.day()) arr[idxWeek].push(day)
      else {
        arr.push([day])
        idxWeek += 1
      }
      lastDate = day
    })

    return arr
  }

  // holidays
  proto.getHolidays = function (this: Dayjs) {
    return proto._holiday
  }

  proto.isHoliday = function (this: Dayjs) {
    return !!this.getHolidays()[this.format('YYYY-MM-DD')]
  }
}
export default plugin
