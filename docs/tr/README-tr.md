Türkçe | [English](../../README.md) | [简体中文](../zh-cn/README.zh-CN.md) | [日本語](../ja/README-ja.md) | [Português Brasileiro](../pt-br/README-pt-br.md) | [한국어](../ko/README-ko.md) | [Español (España)](../es-es/README-es-es.md) | [Русский](../ru/README-ru.md)| [עברית](./docs/he/README-he.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Aynı modern API ile <b>2kB</b> hızlı bir Moment.js alternatifi</p>
<br>
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

> Day.js, büyük ölçüde Moment.js uyumlu bir API ile modern tarayıcılar için tarih ve saatleri dönüştüren, doğrulayan, işleyen ve görüntüleyen minimalist bir JavaScript kütüphanesidir. Moment.js kullanıyorsanız, Day.js'i nasıl kullanacağınızı zaten biliyorsunuzdur.

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .set('year', 2018)
  .format('YYYY-MM-DD HH:mm:ss')
```

- 🕒 Benzer Moment.js API & Kalıpları
- 💪 Değişmez
- 🔥 Zincirlenebilir
- 🌐 I18n destekler
- 📦 2kB boyutunda küçük bir kütaphane
- 👫 Bütün tarayıcılarda desteklenir

---

# Başlarken

### Dökümantasyon

Daha fazla bilgiye, API ve diğer dökümanlara [day.js.org](https://day.js.org/) websitesinden ulaşabilirsiniz.

## Kurulum

```console
npm install dayjs --save
```

📚[Kurulum Rehberi](https://day.js.org/docs/en/installation/installation)

## API

Tarihleri ve saatleri dönüştürmek, doğrulamak, işlemek ve görüntülemek için Day.js API'larını kullanmak kolaydır.

```javascript
dayjs('2018-08-08') // dönüştürme

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // belirli bir formatta görüntüleme

dayjs()
  .set('month', 3)
  .month() // görüntüleme & değer atama

dayjs().add(1, 'year') // değiştirme

dayjs().isBefore(dayjs()) // sorgulama
```

📚[API Referansı](https://day.js.org/docs/en/parse/parse)

## I18n

Day.js, uluslararasılaştırma için büyük desteğe sahiptir.

Ancak siz kullanmadığınız sürece bunların hiçbiri yapınıza dahil edilmeyecektir.

```javascript
import 'dayjs/locale/es' // isteğe göre yükle

dayjs.locale('tr') // yerel ayarı Türkçe olarak kullan

dayjs('2018-05-05')
  .locale('zh-cn')
  .format() //belirli bir durum için Basitleştirilmiş Çince formatında görüntüleme
```

📚[Uluslararasılaştırma](https://day.js.org/docs/en/i18n/i18n)

## Eklenti

Eklenti, işlevselliği genişletmek veya yeni özellikler eklemek için Day.js'e eklenebilen bağımsız bir modüldür.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // isteğe göre yükle

dayjs.extend(advancedFormat) // eklentiyi kullan

dayjs().format('Q Do k kk X x') // diğer mevcut formatlar
```

📚[Eklenti Listesi](https://day.js.org/docs/en/plugin/plugin)

## Sponsorlar

Sponsor olarak bu projeye destek olun. Logonuz, web sayfanızın linki ile birlikte burada görünür. [[Sponsor Ol](https://opencollective.com/dayjs#sponsor)]

<a href="https://opencollective.com/dayjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/3/avatar.svg"></a>

## Katkıda Bulunanlar

Bu proje, katkıda bulunan tüm insanlar sayesinde mevcut.

Lütfen bize destek olmak için projeye 💖 yıldız 💖 verin. Teşekkürler.

Ve tüm destekçilerimize teşekkür ederiz! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Lisans

Day.js, bir [MIT Lisansı](../../LICENSE) altında lisanslanmıştır.
