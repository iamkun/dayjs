import dayjs from 'dayjs'

const locale = {
  name: 'es',
  MS: 'milisegundo',
  MSS: 'milisegundos',
  S: 'segundo',
  SS: 'segundos',
  MIN: 'minuto',
  MINS: 'minutos',
  H: 'hora',
  HH: 'horas',
  D: 'día',
  DD: 'días',
  W: 'semana',
  WW: 'semanas',
  M: 'mes',
  MM: 'meses',
  Q: 'trimestre',
  QQ: 'trimestres',
  Y: 'año',
  YY: 'años',
  DATE: 'fecha',
  weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  past: 'hace %s',
  present: 'justo ahora',
  future: 'en %s',
  ordinal: n => `${n}º`
}

dayjs.locale(locale, null, true)

export default locale
