import dayjs from 'dayjs'

const locale = {
  name: 'ne',
  weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
  months: 'वैशाख_जेठ_आषाढ_श्रावण_भाद्र_असोज_कार्तिक_मङ्सिर_पौष_माघ_फाल्गुन_चैत्र '.split('_'),
  relativeTime: {
    future: '%s पछि',
    past: '%s अघि',
    s: 'सेकेन्ड',
    m: 'एक मिनेट',
    mm: '%d मिनेट',
    h: 'घन्टा',
    hh: '%d घन्टा',
    d: 'एक दिन',
    dd: '%d दिन',
    M: 'एक महिना',
    MM: '%d महिना',
    y: 'एक वर्ष',
    yy: '%d वर्ष'
  },
  ordinal: n => `${n}`.replace(/\d/g, i => '०१२३४५६७८९'[i])
}

dayjs.locale(locale, null, true)

export default locale
