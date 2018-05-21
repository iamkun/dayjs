import dayjs from 'dayjs'

const locale = {
  name: 'es',
  weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    present: 'justo ahora',
    s: 'unos segundos',
    ss: '%d segundos',
    min: 'un minuto',
    mins: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    w: 'una semana',
    ww: '%d semanas',
    m: 'un mes',
    mm: '%d meses',
    q: 'un trimestre',
    qq: '%d trimestres',
    y: 'un año',
    yy: '%d años'
  },
  ordinal: n => `${n}º`
}

dayjs.locale(locale, null, true)

export default locale
