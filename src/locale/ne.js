import dayjs from 'dayjs'

const locale = {
  name: 'ne',
  weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
  weekdaysShort: 'आइत_सोम_मङ्गल_बुध_बिहि_शुक्_शनि'.split('_'),
  weekdaysMin: 'आ_सो_म_बु_बि_शु_श'.split('_'),
  months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
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
