import dayjs from 'dayjs'

const locale = {
  name: 'pt-br',
  weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
  months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
  ordinal: n => `${n}º`
}

dayjs.locale(locale, null, true)

export default locale
