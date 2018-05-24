import dayjs from 'dayjs'

const locale = {
  name: 'id',
  weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
  months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
  relativeTime: {
    future: 'dalam %s',
    past: 'yang lalu %s',
    present: 'sekarang',
    s: 'beberapa detik',
    m: 'satu menit',
    mm: '%d menit',
    h: 'satu jam',
    hh: '%d jam',
    d: 'satu hari',
    dd: '%d hari',
    M: 'satu bulan',
    MM: '%d bulan',
    y: 'satu tahun',
    yy: '%d tahun'
  },
  ordinal: n => `${n}.`
}

dayjs.locale(locale, null, true)

export default locale
