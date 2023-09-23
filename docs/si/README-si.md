සිංහල | [English](../../README.md) | [简体中文](./docs/zh-cn/README.zh-CN.md) | [日本語](./docs/ja/README-ja.md) | [Português Brasileiro](./docs/pt-br/README-pt-br.md) | [한국어](./docs/ko/README-ko.md) | [Español (España)](./docs/es-es/README-es-es.md) | [Русский](./docs/ru/README-ru.md) | [Türkçe](./docs/tr/README-tr.md)| [עברית](./docs/he/README-he.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">නවීන යෙ.ක්‍ර.මු. සමඟින් Moment.js සඳහා <b>කි.බ. 2</b> ක වේගවත් විකල්පයකි</p>
<p align="center">
    <a href="https://unpkg.com/dayjs/dayjs.min.js"><img
            src="https://img.badgesize.io/https://unpkg.com/dayjs/dayjs.min.js?compression=gzip&style=flat-square"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/dayjs"><img src="https://img.shields.io/npm/v/dayjs.svg?style=flat-square&colorB=51C838"
                                                       alt="NPM Version"></a>
    <a href="https://github.com/iamkun/dayjs/actions/workflows/check.yml"><img
            src="https://img.shields.io/github/actions/workflow/status/iamkun/dayjs/check.yml?style=flat-square" alt="Build Status"></a>
    <a href="https://codecov.io/gh/iamkun/dayjs"><img
            src="https://img.shields.io/codecov/c/github/iamkun/dayjs/master.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://github.com/iamkun/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License"></a>
    <br>
    <a href="https://saucelabs.com/u/dayjs">
        <img width="750" src="https://user-images.githubusercontent.com/17680888/40040137-8e3323a6-584b-11e8-9dba-bbe577ee8a7b.png" alt="Sauce Test Status">
    </a>
</p>

> Day.js යනු බොහෝ සෙයින් Moment.js-ගැළපෙන යෙ.ක්‍ර.මු. සහිත නවීන අතිරික්සු සඳහා දින සහ වේලාවන් ප්‍රදර්ශනයට, හැසිරවීමට, වලංගු කිරීමට සහ විග්‍රහ කිරීමට ඉතා කුඩා ජාවාස්ක්‍රිප්ට් එකතුවකි. Moment.js භාවිතා කරන්නේ නම්, Day.js භාවිතා කරන අයුරු ඔබ දැනටමත් දන්නවා.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 හුරුපුරුදු Moment.js යෙ.ක්‍ර.මු. හා රටා
* 💪 නිත්‍යයි
* 🔥 ඈඳීමට හැකිය
* 🌐 I18n සහාය
* 📦 කි.බ. 2 ක කුඩා එකතුව
* 👫 සියළු අතිරික්සු සඳහා සහාය

---

## පටන් ගැනීම

### ප්‍රලේඛනය

[day.js.org](https://day.js.org/) වියමන අඩවියෙහි යෙ.ක්‍ර.මු. සහ වෙනත් ප්‍රලේඛනවල වැඩි විස්තර සොයා ගැනීමට හැකිය.

### ස්ථාපනය

```console
npm install dayjs --save
```

📚[ ස්ථාපන මාර්ගෝපදේශය](https://day.js.org/docs/en/installation/installation)

### යෙ.ක්‍ර.මු.

දින සහ වේලාවන් ප්‍රදර්ශනයට, හැසිරවීමට, වලංගු කිරීමට සහ විග්‍රහ කිරීමට Day.js යෙ.ක්‍ර.මු. භාවිතා කිරීම පහසුය.

```javascript
dayjs('2018-08-08') // parse

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

dayjs().set('month', 3).month() // get & set

dayjs().add(1, 'year') // manipulate

dayjs().isBefore(dayjs()) // query
```

📚[ යෙ.ක්‍ර.මු. යොමුව](https://day.js.org/docs/en/parse/parse)

### I18n

දේශීයකරණය සඳහා Day.js සුවිශේෂී ලෙස සහය දක්වයි.

නමුත් භාවිතා කරන්නේ නම් මිස ඒවා කිසිවක් ඔබගේ තැනීමට ඇතුළත් නොවේ.

```javascript
import 'dayjs/locale/es' // load on demand

dayjs.locale('es') // use Spanish locale globally

dayjs('2018-05-05').locale('zh-cn').format() // use Chinese Simplified locale in a specific instance
```
📚[ දේශීයකරණය](https://day.js.org/docs/en/i18n/i18n)

### දිගුව

දිගුවක් යනු ක්‍රියාකාරිත්වය විස්තීරණයට හෝ නව විශේෂාංග අඩංගු කිරීමට Day.js වෙත එකතු කළ හැකි ස්වාධීන ඒකකයකි.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // load on demand

dayjs.extend(advancedFormat) // use plugin

dayjs().format('Q Do k kk X x') // more available formats
```

📚[ දිගු ලේඛනය](https://day.js.org/docs/en/plugin/plugin)

## අනුග්‍රාහකයින්

අනුග්‍රහය දැක්වීමෙන් මෙම ව්‍යාපෘතියට සහාය වන්න. ඔබගේ අඩවියේ සබැඳියක් සමඟ ඔබගේ ලාංඡනය මෙහි පෙන්වනු ඇත.

[[ගිට්හබ් හරහා අනුග්‍රාහකයෙකු වන්න](https://github.com/sponsors/iamkun/)] [[ඕපන්කලෙක්ටිව් හරහා අනුග්‍රාහකයෙකු වන්න](https://opencollective.com/dayjs#sponsor)]

<a href="https://www.exoflare.com/open-source/?utm_source=dayjs&utm_campaign=open_source" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/162761622-1407a849-0c41-4591-8aa9-f98114ec2092.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/vendure-ecommerce" target="_blank"><img width="70" src="https://avatars.githubusercontent.com/u/39629390?s=52&v=4"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/Velc" target="_blank"><img width="70" src="https://avatars.githubusercontent.com/u/1551649?s=52&v=4"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/projectdiscovery" target="_blank"><img width="70" src="https://avatars.githubusercontent.com/u/50994705?s=52&v=4"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/datawrapper" target="_blank"><img width="70" src="https://images.opencollective.com/datawrapper/c13e229/logo.png"></a>

## දායකයින්

මෙම ව්‍යාපෘතිය පවතිනුයේ දායක වූ සියළුම දෙනාට ස්තූති වන්නටය.

අපට සහාය වීමට 💖 තරුවක් 💖 ලබා දෙන්න. ඔබට තුති.

ඒ වගේම අපගේ මූල්‍යදායකයින් සැමට ස්තුතියි! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## බලපත්‍රය

[MIT බලපත්‍රයක්](./LICENSE) යටතේ Day.js නිකුත් කර ඇත.
