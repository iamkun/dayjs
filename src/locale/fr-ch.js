import dayjs from 'dayjs'

const locale = {
  name: 'fr-ch',
  weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
  weekStart: 1,
  weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

