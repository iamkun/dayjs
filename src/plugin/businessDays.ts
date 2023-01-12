import { abs, absFloor } from '../utils'
import { UNIT_DAY, UNIT_HOUR, UNIT_MONTH, UNIT_WEEK } from './../constants'
import { normalize } from './../units'

import type { Unit } from './../units'
import type { Dayjs, Plugin } from '..'

declare module '../types' {
  export interface Extend {
    isBusinessDay: () => boolean
    addBusinessDay: SetterFn
    subtractBusinessDay: SetterFn
    nextBusinessDay: () => Dayjs
    previousBusinessDay: () => Dayjs
    lastBusinessDayOf: () => Dayjs
    firstBusinessDayOf: () => Dayjs
    businessDaysInMonth: () => Dayjs[]
    businessDaysInMonthGroupByWeek: () => Dayjs[][]
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

function businessDay(this: Dayjs, value: number, unit?: Unit) {
  //  value is not 0

  const v = absFloor(value)

  if (unit === undefined) {
    if (v > 0) return $add.call(this, v)
    if (v < 0) return $subtract.call(this, abs(v))
  } else {
    const u = normalize(unit)

    if (v > 0) {
      if (u === UNIT_DAY) return $add.call(this, v)
      if (u === UNIT_WEEK) return $add.call(this, v * 5)
    }

    if (v < 0) {
      if (u === UNIT_DAY) return $subtract.call(this, abs(v))
      if (u === UNIT_WEEK) return $subtract.call(this, abs(v) * 5)
    }
  }
}

const plugin: Plugin = (cls) => {
  // (cls: DayjsClass, fn: DayjsFn)
  const proto = cls.prototype

  proto.isBusinessDay = function (this: Dayjs) {
    return idxBusinessDays.includes(this.day())
  }

  proto.addBusinessDay = function (this: Dayjs, value?: number, unit?: Unit) {
    if (value === undefined || absFloor(value) === 0) return this
    if (unit === undefined) return businessDay.call(this, value) as Dayjs
    return businessDay.call(this, value, unit) as Dayjs
  }

  proto.subtractBusinessDay = function (
    this: Dayjs,
    value?: number,
    unit?: Unit
  ) {
    if (value === undefined || absFloor(value) === 0) return this
    if (unit === undefined) return businessDay.call(this, -value) as Dayjs
    return businessDay.call(this, -value, unit) as Dayjs
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
}
export default plugin
