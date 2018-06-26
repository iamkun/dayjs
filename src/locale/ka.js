import dayjs from 'dayjs'

const locale = {
  name: 'ka',
  weekdays: 'კვირა_ორშაბათი_სამშაბათი_გარემო_ხუთშაბათი_პარასკევი_შაბათს'.split('_'),
  months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
  relativeTime: {
    future: '%s შემდეგ',
    past: '%s წინ',
    s: 'წამი',
    m: 'წუთი',
    mm: '%d წუთი',
    h: 'საათი',
    hh: '%d საათის',
    d: 'დღეს',
    dd: '%d დღის განმავლობაში',
    M: 'თვის',
    MM: '%d თვის',
    y: 'წელი',
    yy: '%d წლის'
  },
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale
