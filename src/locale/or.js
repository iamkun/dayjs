import dayjs from "dayjs";

const locale = {
  name: "or",
  weekdays: "ରବିବାର_ସୋମବାର_ମଙ୍ଗଳବାର_ବୁଧବାର_ଗୁରୁବାର_ଶୁକ୍ରବାର_ଶନିବାର".split("_"),
  months:
    "ଜାନୁଆରୀ_ଫେବୃଆରୀ_ମାର୍ଚ୍ଚ_ଅପ୍ରେଲ_ମେ_ଜୁନ_ଜୁଲାଇ_ଅଗଷ୍ଟ_ସେପ୍ଟେମ୍ବର_ଅକ୍ଟୋବର_ନଭେମ୍ବର_ଡିସେମ୍ବର".split(
      "_",
    ),
  weekdaysShort: "ରବି_ସୋମ_ମଙ୍ଗଳ_ବୁଧ_ଗୁରୁ_ଶୁକ୍ର_ଶନି".split("_"),
  monthsShort:
    "ଜାନୁ._ଫେବ୍._ମାର୍._ଅପ୍ରେ._ମେ_ଜୁନ୍_ଜୁଲା._ଅଗ._ସେପ୍._ଅକ୍ଟୋ._ନଭେ._ଡିସେ.".split(
      "_",
    ),
  weekdaysMin: "ର_ସୋ_ମଂ_ବୁ_ଗୁ_ଶୁ_ଶ".split("_"),
  ordinal: (n) => n,
  formats: {
    LT: "A h:mm",
    LTS: "A h:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY, A h:mm",
    LLLL: "dddd, D MMMM YYYY, A h:mm",
  },
  relativeTime: {
    future: "%s ପରେ",
    past: "%s ପୂର୍ବରୁ",
    s: "କିଛି ମୁହୂର୍ତ୍ତ",
    m: "ଏକ ମିନିଟ୍",
    mm: "%d ମିନିଟ୍",
    h: "ଏକ ଘଣ୍ଟା",
    hh: "%d ଘଣ୍ଟା",
    d: "ଏକ ଦିନ",
    dd: "%d ଦିନ",
    M: "ଏକ ମାସ",
    MM: "%d ମାସ",
    y: "ଏକ ବର୍ଷ",
    yy: "%d ବର୍ଷ",
  },
};

dayjs.locale(locale, undefined, true);

export default locale;
