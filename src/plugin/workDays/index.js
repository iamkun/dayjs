export default (option, dayjsClass, dayjs) => {
    const format = date => date.format("YYYY-MM-DD")
    dayjsClass.prototype.workDays = function (end = new Date(), weekends = [0, 6], vacations = [], overtimes = []) {
        const startDate = dayjs(this).startOf("date"),
            endDate = dayjs(end).startOf("date"),
            weekendDays = weekends.map(num => +num),
            vacationsDates = vacations.map(fdate => format(dayjs(fdate))),
            overtimesDates = overtimes.map(fdate => format(dayjs(fdate))),
            dayDiff = endDate.diff(startDate, 'day'),
            direction = dayDiff >= 0 ? 1 : -1,
            result = [],
            isExclude = date => {
                if (overtimesDates.includes(format(date))) {
                    return false
                } else {
                    return weekendDays.includes(date.day()) || vacationsDates.includes(format(date))
                }
            }
        let current = startDate
        for (let count = 0; direction >= 0 ? count <= dayDiff : count >= dayDiff; count += direction) {
            current = startDate.add(count, 'day')
            if (!isExclude(current)) {
                result.push(format(current))
            }
        }
        return result
    }
}