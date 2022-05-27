// Venetian [vec]
import dayjs from 'dayjs'

const locale = {
  name: 'vec',
  weekdays: 'doménega_luni_marti_mèrcore_xòbia_vénare_sabo'.split('_'),
  weekdaysShort: 'dom_lun_mar_mèr_xòb_vén_sab'.split('_'),
  weekdaysMin: 'do_lu_ma_mè_xò_vé_sa'.split('_'),
  months: 'xenàro_febràro_marso_avril_majo_xugno_lujo_agosto_setènbre_otóbre_novènbre_desènbre'.split('_'),
  monthsShort: 'xen_feb_mar_avr_maj_xun_luj_ago_set_oto_nov_des'.split('_'),
  ordinal: n => `${n}º`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'tra %s',
    past: '%s fa',
    s: 'poucos segóndi',
    m: 'un menudo',
    mm: '%d menudi',
    h: 'na óra',
    hh: '%d óre',
    d: 'un dì',
    dd: '%d dì',
    M: 'un méxe',
    MM: '%d méxi',
    y: 'un ano',
    yy: '%d ani'
  }
}

dayjs.locale(locale, null, true)

export default locale
