import dayjs from 'dayjs'

const locale = {
  name: 'km',
  weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
  months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
  weekStart: 1,
  weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
  monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
  weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

