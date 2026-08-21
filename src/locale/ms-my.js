// Malay [ms-my]
import dayjs from 'dayjs'

const locale = {
  name: 'ms-my',
  weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
  months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
  monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
  weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, h:mm A',
    LLLL: 'dddd, D MMMM YYYY, h:mm A'
  },
  relativeTime: {
    future: 'dalam %s',
    past: '%s yang lepas',
    s: 'beberapa saat',
    m: 'seminit',
    mm: '%d minit',
    h: 'sejam',
    hh: '%d jam',
    d: 'sehari',
    dd: '%d hari',
    M: 'sebulan',
    MM: '%d bulan',
    y: 'setahun',
    yy: '%d tahun'
  },
  meridiem: (hour, minute, isLowercase) => {
    const hm = (hour * 100) + minute;
    
    if (hm <= 59) {
      return isLowercase ? 'tgh mlm' : 'tengah malam';
    } else if (hm <= 1159) { 
      return isLowercase ? 'pg' : 'pagi';
    } else if (hm <= 1359) { 
      return isLowercase ? 'tgh hari' : 'tengah hari';
    } else if (hm <= 1859) { 
      return isLowercase ? 'ptg' : 'petang';
    }
    return isLowercase ? 'mlm' : 'malam';
  }

}

dayjs.locale(locale, null, true)

export default locale

