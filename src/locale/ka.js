// Georgian [ka]
import dayjs from 'dayjs'

const locale = {
  name: 'ka',
  weekdays: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
  weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
  weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
  months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
  monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A'
  },
  relativeTime: {
    future: s => s.replace(
      /(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,
      ($0, $1, $2) => ($2 === 'ი' ? `${$1}ში` : `${$1}${$2}ში`)
    ),
    past: s => (/წელი/.test(s)
      ? s.replace(/წელი$/, 'წლის წინ')
      : s.replace(/(ი|ე)$/, 'ის წინ')),
    s: 'რამდენიმე წამი',
    m: 'წუთი',
    mm: '%d წუთი',
    h: 'საათი',
    hh: '%d საათი',
    d: 'დღე',
    dd: '%d დღე',
    M: 'თვე',
    MM: '%d თვე',
    y: 'წელი',
    yy: '%d წელი'
  },
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale
