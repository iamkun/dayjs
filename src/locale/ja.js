import dayjs from 'dayjs'

const locale = {
  name: 'ja',
  weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
  months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  ordinal: n => `${n}日`
}

dayjs.locale(locale, null, true)

export default locale
