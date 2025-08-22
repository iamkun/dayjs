// Chuvash [cv]
import dayjs from 'dayjs'

const locale = {
  name: 'cv',
  weekdays: 'Вырсарникун_Тунтикун_Ытларикун_Юнкун_Кӗҫнерникун_Эрнекун_Шӑматкун'.split('_'),
  months: 'Кӑрлач_Нарӑс_Пуш_Ака_Май_Ҫӗртме_Утӑ_Ҫурла_Авӑн_Юпа_Чӳк_Раштав'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Выр_Тун_Ытл_Юн_Кӗҫ_Эрн_Шӑм'.split('_'),
  monthsShort: 'Кӑр_Нар_Пуш_Ака_Май_Ҫӗр_Утӑ_Ҫур_Авн_Юпа_Чӳк_Раш'.split('_'),
  weekdaysMin: 'Вр_Тн_Ыт_Юн_Кҫ_Эр_Шм'.split('_'),
  ordinal: n => n,
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

