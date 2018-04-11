const weeks = [ '日', '一', '二', '三', '四', '五', '六' ]

class Moment {
    constructor(arg = new Date().getTime()) {
        this.date = new Date(arg)
    }

    static unix(timestamp) {
        return new Moment(timestamp * 1000)
    }

    unix() {
        return Math.round(this.date.getTime() / 1000)
    }

    format(formatStr) {
        const date = this.date
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const week = date.getDay()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()

        return formatStr.replace(/Y{2,4}|M{1,2}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}/g, (match) => {
            switch (match) {
            case 'YY':
                return String(year).slice(-2)
            case 'YYY':
            case 'YYYY':
                return String(year)
            case 'M':
                return String(month)
            case 'MM':
                return String(month).padStart(2, '0')
            case 'D':
                return String(day)
            case 'DD':
                return String(day).padStart(2, '0')
            case 'd':
                return String(week)
            case 'dd':
                return weeks[week]
            case 'ddd':
                return '周' + weeks[week]
            case 'dddd':
                return '星期' + weeks[week]
            case 'H':
                return String(hour)
            case 'HH':
                return String(hour).padStart(2, '0')
            case 'm':
                return String(minute)
            case 'mm':
                return String(minute).padStart(2, '0')
            case 's':
                return String(second)
            case 'ss':
                return String(second).padStart(2, '0')
            default:
                return match
            }
        })
    }
}

export default Moment