// Chinese (Taiwan) [zh-tw]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'zh-tw',
  weekdays: [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ],
  weekdaysShort: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  weekdaysMin: ['日', '一', '二', '三', '四', '五', '六'],
  months: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  monthsShort: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  ordinal: (number, period) => (period === 'W' ? `${number}週` : `${number}日`),
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY年M月D日',
    LLL: 'YYYY年M月D日 HH:mm',
    LLLL: 'YYYY年M月D日dddd HH:mm',
    l: 'YYYY/M/D',
    ll: 'YYYY年M月D日',
    lll: 'YYYY年M月D日 HH:mm',
    llll: 'YYYY年M月D日dddd HH:mm',
  },
  relativeTime: {
    future: '%s內',
    past: '%s前',
    s: '幾秒',
    m: '1 分鐘',
    mm: '%d 分鐘',
    h: '1 小時',
    hh: '%d 小時',
    d: '1 天',
    dd: '%d 天',
    M: '1 個月',
    MM: '%d 個月',
    y: '1 年',
    yy: '%d 年',
  },
  meridiem: (hour, minute) => {
    const hm = hour * 100 + minute
    return hm < 600
      ? '凌晨'
      : hm < 900
        ? '早上'
        : hm < 1100
          ? '上午'
          : hm < 1300
            ? '中午'
            : hm < 1800
              ? '下午'
              : '晚上'
  },
}

dayjs.locale(locale, true)

export default locale
