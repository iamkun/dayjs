import dayjs from 'dayjs'

const locale = {
  name: 'uz-latn',
  weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
  months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
  monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
  weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

