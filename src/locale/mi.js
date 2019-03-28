import dayjs from 'dayjs'

const locale = {
  name: 'mi',
  weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
  months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
  monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
  weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

