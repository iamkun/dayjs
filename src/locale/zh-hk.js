import dayjs from 'dayjs'

const locale = {
  name: 'zh-hk',
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysMin: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  ordinal: n => `${n}日`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY年M月D日',
    LLL: 'YYYY年M月D日 HH:mm',
    LLLL: 'YYYY年M月D日dddd HH:mm'
  },
  relativeTime: {
    future: '於 %s',
    past: '%s 前',
    s: '數秒',
    m: '一分鐘',
    mm: '%d 分鐘',
    h: '一小時',
    hh: '%d 小時',
    d: '一天',
    dd: '%d 天',
    M: '一個月',
    MM: '%d 月',
    y: '一年',
    yy: '%d 年'
  }
}

dayjs.locale(locale, null, true)

export default locale
