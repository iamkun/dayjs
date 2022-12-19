Azərbaycan dili | [English](../../README.md) | [简体中文](../zh-cn/README.zh-CN.md) | [日本語](../ja/README-ja.md) | [Português Brasileiro](../pt-br/README-pt-br.md) | [한국어](../ko/README-ko.md) | [Español (España)](../es-es/README-es-es.md) | [Русский](../ru/README-ru.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Eyni modern API ilə <b>2kB</b> sürətli bir Moment.js alternativi</p>
<br>
<p align="center">
    <a href="https://unpkg.com/dayjs/dayjs.min.js"><img
            src="https://img.badgesize.io/https://unpkg.com/dayjs/dayjs.min.js?compression=gzip&style=flat-square"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/dayjs"><img src="https://img.shields.io/npm/v/dayjs.svg?style=flat-square&colorB=51C838"
                                                       alt="NPM Version"></a>
    <a href="https://travis-ci.org/iamkun/dayjs"><img
            src="https://img.shields.io/travis/iamkun/dayjs/master.svg?style=flat-square" alt="Build Status"></a>
    <a href="https://codecov.io/gh/iamkun/dayjs"><img
            src="https://img.shields.io/codecov/c/github/iamkun/dayjs/master.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://github.com/iamkun/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License"></a>
    <br>
    <a href="https://saucelabs.com/u/dayjs">
        <img width="750" src="https://user-images.githubusercontent.com/17680888/40040137-8e3323a6-584b-11e8-9dba-bbe577ee8a7b.png" alt="Sauce Test Status">
    </a>
</p>

> Day.js, böyük ölçüdə Moment.js ilə uyuşan bir API ilə modern brovzerlər üçün tarix ve saatları uyğunlaşdıran, doğrulayan, işləyən ve göstərən minimalist bir JavaScript kitabxanasıdır. Moment.js işlədirsəniz, Day.js'i nece içlədəcəyinizi artıq bilirsiniz.

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .set('year', 2018)
  .format('YYYY-MM-DD HH:mm:ss')
```

- 🕒 Bənzer Moment.js API & Şablonları
- 💪 Dəğişməz
- 🔥 Zincirlənəbilər
- 🌐 I18n dəstəkləyir
- 📦 2kB həcmində kiçik bir kitabxana
- 👫 Bütün brovzerlərdə dəstəklənir

---

# Başlayarkən

### Bələdci

Daha çox məlumata, API ve digər bələdcilərə [day.js.org](https://day.js.org/) vebsaytından çata bilərsiniz.

## yükləmə

```console
npm install dayjs --save
```

📚[Yüləmə Rəhbəri](https://day.js.org/docs/en/installation/installation)

## API

Tarixləri ve saatləri uyğunlaşdırmaq, doğrulamaq, işləmək ve göstərmək üçün Day.js API'larını işlətmək asandır.

```javascript
dayjs('2018-08-08') // çevirmə

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // müəyyən bir formada göstərmək

dayjs()
  .set('month', 3)
  .month() // göstərmək və dəyər vermə

dayjs().add(1, 'year') // dəyişdirmə

dayjs().isBefore(dayjs()) // sorğulama
```

📚[API Referansı](https://day.js.org/docs/en/parse/parse)

## I18n

Day.js, beynəlxalqlaşdımaq üçün böyük destəyə malikdir.

Ancaq siz istifadə etmədiyiniz müddətcə heçbirini sturukdurunuza daxil edilməyəcəkdir.

```javascript
import 'dayjs/locale/es' // istəyə görə yüklə

dayjs.locale('az') // yerli parametiri Azərbaycanca olaraq işlədin

dayjs('2018-05-05')
  .locale('zh-cn')
  .format() // müəyyən bir vəziyyət üçün Bəsitləşdirilmiş Çincə formasında göstərmə
```

📚[Beynəlxalqlaşdıma](https://day.js.org/docs/en/i18n/i18n)

## Plagin

Plagin, mexanizmi genişlətmək vəya yeni xususiyyət əlavə etmək üçün Day.js'ə əlavə olunabilən müstəqil bir moduldur.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // istəyə görə yüklə

dayjs.extend(advancedFormat) // plagini işlət

dayjs().format('Q Do k kk X x') // diğər mövcut formalar
```

📚[Plagin Siayhısı](https://day.js.org/docs/en/plugin/plugin)

## Sponsorlar

Sponsor olaraq bu proyektə dəstək olun. Logonuz, web saytınızın linki ilə birlikte burada görünür. [[Sponsor Ol](https://opencollective.com/dayjs#sponsor)]

<a href="https://opencollective.com/dayjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/3/avatar.svg"></a>

## Dəstək olanlar

Bu proyekt, dəstək olan bütün insanlar sayəsində mövcutdur.

Lütfən bizə dəstək olmaq üçün proyektə 💖 ulduz 💖 verin. Təşəkkürlər.

Və bütün dəstəkçilərimizə təşəkkür edirik! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Lisans

Day.js, bir [MIT Lisansı](../../LICENSE) altında lisanslanmışdır.