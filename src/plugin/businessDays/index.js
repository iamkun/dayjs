import utils from '../../utils'
import { D, W } from '../../constant'

const absFloor = utils.a
const prettyUnit = utils.p

export default (_, c, d) => {
  const idxBusinessDay = [1, 2, 3, 4, 5]

  const proto = c.prototype

  proto.isBusinessDay = function () {
    return idxBusinessDay.includes(this.day())
  }

  proto.$addBusinessDays = function (n) {
    if (n <= 0) return this

    let restBusinessDay = idxBusinessDay.length - this.day()
    let nbrWeekAdd = absFloor(n / 5)
    let nbrDayAdd = n
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

    return this.add(nbrWeekAdd, 'w').day(idxThisDay).add(nbrDayAdd, 'd')
  }

  proto.addBusinessDays = function (n, u) {
    if (n <= 0) return this

    const forWeek = (n, t) => {
      let res
      for (let i = 0; i < n; i++) {
        res = (res || t).$addBusinessDays(5)
      }
      return res
    }

    switch (prettyUnit(u)) {
      case D:
        return this.$addBusinessDays(n)
      case W:
        return forWeek(n, this)
      default:
        return this.$addBusinessDays(n)
    }
  }

  proto.$subtractBusinessDays = function (n) {
    if (n <= 0) return this

    let restBusinessDay = (idxBusinessDay.length - (idxBusinessDay.length - this.day())) - 1
    let nbrWeekAdd = absFloor(n / 5)
    let nbrDayAdd = n
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

    return this.subtract(nbrWeekAdd, 'w').day(idxThisDay).subtract(nbrDayAdd, 'd')
  }

  proto.subtractBusinessDays = function (n, u) {
    if (n <= 0) return this

    const forWeek = (n, t) => {
      let res
      for (let i = 0; i < n; i++) {
        res = (res || t).subtractBusinessDays(5)
      }
      return res
    }

    switch (prettyUnit(u)) {
      case D:
        return this.$subtractBusinessDays(n)
      case W:
        return forWeek(n, this)
      default:
        return this.$subtractBusinessDays(n)
    }
  }

  proto.$diffBusinessDays = function (n) {
    let currentDate = d(this)
    const nextDate = d(n)
    let infLoop = false

    if (currentDate.isSame(nextDate)) return 0

    let nbrDaysBetween = currentDate.diff(nextDate, 'd')
    let diff = 0

    while (nbrDaysBetween !== 0) {
      diff += 1
      if (this >= n) currentDate = currentDate.subtractBusinessDays(1)
      else currentDate = currentDate.addBusinessDays(1)
      nbrDaysBetween = currentDate.diff(nextDate, 'd')

      // prevent infinite loop
      if (this >= n) {
        if (diff > d(this).diff(nextDate, 'd')) {
          infLoop = true
          break
        }
      } else if (diff > Math.abs(d(this).diff(nextDate, 'd'))) {
        infLoop = true
        break
      }
    }

    if (infLoop) return null
    return this >= n ? diff : -diff
  }

  proto.diffBusinessDays = function (i, u) {
    switch (prettyUnit(u)) {
      case D:
        return this.$diffBusinessDays(i)
      case W:
        return this.$diffBusinessDays(i) ? Math.floor(this.$diffBusinessDays(i) / 5) : null
      default:
        return this.$diffBusinessDays(i)
    }
  }

  proto.nextBusinessDays = function () {
    return this.addBusinessDays(1)
  }

  proto.prevBusinessDays = function () {
    return this.subtractBusinessDays(1)
  }

  proto.businessDaysInMonth = function () {
    const businessDaysInMonthArray = []
    let currentDate = d(this)
      .startOf('M')
      .hour(this.hour())
      .minute(this.minute())
      .second(this.second())
      .millisecond(this.millisecond())

    while (currentDate.month() === d(this).month()) {
      if (currentDate.isBusinessDay()) businessDaysInMonthArray.push(currentDate)
      currentDate = currentDate.addBusinessDays(1)
    }

    return businessDaysInMonthArray
  }

  proto.businessDaysInMonthByWeeks = function () {
    const businessDaysInMonthArray = this.businessDaysInMonth()
    const businessDaysInMonthArrayByWeek = []
    let lastDate = null
    let idxWeek = 0

    businessDaysInMonthArray.forEach((elem) => {
      if (lastDate === null) {
        businessDaysInMonthArrayByWeek.push([elem])
      } else if (lastDate.day() + 1 === elem.day()) {
        businessDaysInMonthArrayByWeek[idxWeek].push(elem)
      } else {
        businessDaysInMonthArrayByWeek.push([elem])
        idxWeek += 1
      }
      lastDate = elem
    })

    return businessDaysInMonthArrayByWeek
  }
}
