import dayjs from 'dayjs'

const locale = {
  name: 'id',
  MS: 'milidetik',
  S: 'detik',
  MIN: 'menit',
  H: 'jam',
  D: 'hari',
  W: 'minggu',
  M: 'bulan',
  Q: 'kuartal',
  Y: 'tahun',
  DATE: 'tanggal',
  weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jum\'at_Sabtu'.split('_'),
  months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
  relativeTime: {
    future: 'dalam %s',
    past: 'yang lalu %s',
    present: 'sekarang',
    s: 'beberapa detik',
    ss: '%d detik',
    min: 'satu menit',
    mins: '%d menit',
    h: 'satu jam',
    hh: '%d jam',
    d: 'satu hari',
    dd: '%d hari',
    w: 'satu minggu',
    ww: '%d minggu',
    m: 'satu bulan',
    mm: '%d bulan',
    q: 'seperempat',
    qq: '%d kuartal',
    y: 'satu tahun',
    yy: '%d tahun'
  },
  ordinal: n => `${n}.`
}

dayjs.locale(locale, null, true)

export default locale
