Swahili | [English](../../README.md) | [Kireno](../pt-br/README-pt-br.md) | [Kichina](../zh-cn/README.zh-CN.md) | [Kijapani](../ja/README-ja.md) | [Kikorea](../ko/README-ko.md) | [Kihispania](../es-es/README-es-es.md) | [Kirusi](../ru/README-ru.md) | [Kituruki](../tr/README-tr.md) | [Sinhala](../si/README-si.md) | [Kiebrania](../he/README-he.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js" /></a></p>
<p align="center">Fast <b>2kB</b> mbadala wa Moment.js ukiwa na API zinazofanana na za kisasa</p>
<p align="center">
    <a href="https://bundlephobia.com/package/dayjs"><img
            src="https://img.shields.io/bundlephobia/minzip/dayjs?style=flat-square&color=%2345cc11"
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

> Day.js ni Maktaba ya JavaScript ya minimalist ambayo inachanganua, kuthibitisha, kudhibiti, na kuonyesha tarehe na nyakati kwa vivinjari vya kisasa na API inayofanana sana na Moment.js. Ikiwa unatumia Moment.js, tayari unajua jinsi ya kutumia Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Michoro na API maarufu za Moment.js
* 💪 Hazibadiliki
* 🔥 Zinaunganishwa
* 🌐 Zinaruhusu I18n
* 📦 Maktaba ndogo ya 2kb
* 👫 Browser zote zinaruhusu

---

## Kuanza

### Nyaraka

Unaweza kutafuta maelekezo zaidi ya  API na nyaraka zingine kupitia tovuti ya [day.js.org](https://day.js.org/).

### Kusakinisha

```console
npm install dayjs --save
```

📚[Maelekezo ya Kusakinisha](https://day.js.org/docs/en/installation/installation)

### API

Ni rahisi kutumia Day.js kupitisha, kuhakiki, kubadili na kuonesha tarehe na mda.

```javascript
dayjs('2018-08-08') // changanua

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

dayjs().set('month', 3).month() // chukua na weka
dayjs().add(1, 'year') // manipulate

dayjs().isBefore(dayjs()) // query
```

📚[Maelekezo Ya API](https://day.js.org/docs/en/parse/parse)

### I18n

Day.js ina ruhusu kwa internalization.

Lakini hakuna hata moja ambayo itawekwa katika utengezaji endapo utatumia.

```javascript
import 'dayjs/locale/es' // load on demand

dayjs.locale('es') // use Spanish locale globally

dayjs('2018-05-05').locale('zh-cn').format() // use Chinese Simplified locale in a specific instance
```

📚[Internationalization](https://day.js.org/docs/en/i18n/i18n)

### Zana

Zana ya Kujumuisha ni moduli inayojitegemea ambayo inaweza ikaweka katika Day.js ili kuweza kuongeza uwezo au kuongeza sifa.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // Upakiaji kwa Mahitaji

dayjs.extend(advancedFormat) // tumia plugin

dayjs().format('Q Do k kk X x') // njia zaidi zilizopo
```

📚[Idadi Ya Plugin](https://day.js.org/docs/en/plugin/plugin)

### Trend Zinazoweza Tumika

<a href="https://npm-compare.com/moment,dayjs/#timeRange=THREE_YEARS" target="_blank">
  <img src="https://user-images.githubusercontent.com/3455798/270162667-c7bd2ebe-675e-45c6-a2c9-dc67f3b65d6e.png">
</a>

## Wafadhili

Toa mchango wako kwa huu mradi kwa kuwa mfadhili. Nembo yako itaonekana hapa pamoja na link ya kwenda kwenye tovuti yako.

[[Kuwa mfadhili kupitia GitHub](https://github.com/sponsors/iamkun/)] [[Kuwa mfadhili kupitia OpenCollective](https://opencollective.com/dayjs#sponsor)]

<a href="https://toyokumo.co.jp" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/197092231-2367b5eb-1e43-467e-a311-23f7cd97b086.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/ken-swyfft" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/65305317?v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/sight-and-sound-ministries" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/232316426-cb99b4cf-0ccb-4e73-a6ce-e16dba6aadf4.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://chudovo.com/" target="_blank">
  <img width="70" src="https://images.opencollective.com/chudovo/3c866f5/logo/256.png?height=256">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/alan-eu" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/18175329?s=52&v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.exoflare.com/open-source/?utm_source=dayjs&utm_campaign=open_source" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/162761622-1407a849-0c41-4591-8aa9-f98114ec2092.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/storyblok" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/13880908?s=200&v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://bestkru.com/" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/159320286" alt="BestKru">
</a>


## Wachangiaji

Huu mradi umefika hapa ulipo hapa shukrani ziende kwa watu wote wanao changia.

Tafadhali tupe 💖 nyota/maua 💖 kutuunga mkono sisi.Ahsante.

Na ahsante kwa wafadhili wote! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<br />
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Leseni

Day.js ipo chini ya kibali cha [leseni ya MTI](./LICENSE).