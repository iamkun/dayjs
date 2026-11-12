// Chuvash [cv]
import dayjs from 'dayjs'

const locale = {
  name: 'cv',
  weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
  months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
  weekStart: 1,
  weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
  monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
  weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: (output) => {
      let affix = 'ран'
      if (/сехет$/i.exec(output)) {
        affix = 'рен'
      } else if (/ҫул$/i.exec(output)) {
        affix = 'тан'
      }
      return output + affix
    },
    past: '%s каялла',
    s: 'пӗр-ик ҫеккунт',
    m: 'пӗр минут',
    mm: '%d минут',
    h: 'пӗр сехет',
    hh: '%d сехет',
    d: 'пӗр кун',
    dd: '%d кун',
    M: 'пӗр уйӑх',
    MM: '%d уйӑх',
    y: 'пӗр ҫул',
    yy: '%d ҫул'
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD-MM-YYYY',
    LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
    LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
    LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

