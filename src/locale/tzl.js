// Talossan [tzl]
import dayjs from 'dayjs'

const processRelativeTime = (number, withoutSuffix, key, isFuture) => {
  const format = {
    s: ['viensas secunds', "'iensas secunds"],
    m: ["'n míut", "'iens míut"],
    mm: [`${number} míuts`, `${number} míuts`],
    h: ["'n þora", "'iensa þora"],
    hh: [`${number} þoras`, `${number} þoras`],
    d: ["'n ziua", "'iensa ziua"],
    dd: [`${number} ziuas`, `${number} ziuas`],
    M: ["'n mes", "'iens mes"],
    MM: [`${number} mesen`, `${number} mesen`],
    y: ["'n ar", "'iens ar"],
    yy: [`${number} ars`, `${number} ars`]
  }
  if (isFuture || withoutSuffix) {
    return format[key][0]
  }
  return format[key][1]
}

const locale = {
  name: 'tzl',
  weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
  months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
  monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
  weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: 'osprei %s',
    past: 'ja%s',
    s: processRelativeTime,
    m: processRelativeTime,
    mm: processRelativeTime,
    h: processRelativeTime,
    hh: processRelativeTime,
    d: processRelativeTime,
    dd: processRelativeTime,
    M: processRelativeTime,
    MM: processRelativeTime,
    y: processRelativeTime,
    yy: processRelativeTime
  },
  formats: {
    LT: 'HH.mm',
    LTS: 'HH.mm.ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM [dallas] YYYY',
    LLL: 'D. MMMM [dallas] YYYY HH.mm',
    LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

