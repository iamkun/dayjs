<div align="center">
<a href="https://go.warp.dev/dayjs" target="_blank">
<img alt="Warp sponsorship" width="400" src="https://github.com/warpdotdev/brand-assets/blob/main/Github/Sponsor/Warp-Github-LG-02.png">
<br>
<h>Warp ถูกสร้างขึ้นเพื่อการเขียนโค้ดร่วมกับ AI agent หลายตัว</h>
</a>
</div>

---

[English](../../README.md) | [简体中文](../zh-cn/README.zh-CN.md) | [日本語](../ja/README-ja.md) | [Português Brasileiro](../pt-br/README-pt-br.md) | [한국어](../ko/README-ko.md) | [Español (España)](../es-es/README-es-es.md) | [Русский](../ru/README-ru.md) | [Türkçe](../tr/README-tr.md) | [සිංහල](../si/README-si.md) | [עברית](../he/README-he.md) | ไทย

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js" /></a></p>
<p align="center">ทางเลือกที่รวดเร็ว <b>2kB</b> สำหรับ Moment.js พร้อม API สมัยใหม่แบบเดียวกัน</p>
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

> Day.js เป็นไลบรารี JavaScript ขนาดเล็กที่ใช้สำหรับแปลง ตรวจสอบ ปรับแต่ง และแสดงวันที่และเวลาในเบราว์เซอร์สมัยใหม่ โดยมี API ที่คล้ายกับ Moment.js หากคุณเคยใช้ Moment.js คุณก็สามารถใช้ Day.js ได้ทันที

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 API และรูปแบบการใช้งานคล้าย Moment.js
* 💪 ไม่เปลี่ยนแปลงค่าเดิม (Immutable)
* 🔥 เชื่อมต่อคำสั่งได้ (Chainable)
* 🌐 รองรับหลายภาษา (I18n)
* 📦 ไลบรารีขนาดเล็ก 2kb
* 👫 รองรับทุกเบราว์เซอร์

---

## เริ่มต้นใช้งาน

### เอกสารประกอบ

สามารถดูรายละเอียดเพิ่มเติม, API และเอกสารอื่น ๆ ได้ที่เว็บไซต์ [day.js.org](https://day.js.org/)

### การติดตั้ง

```console
npm install dayjs --save
```

📚[คู่มือการติดตั้ง](https://day.js.org/docs/en/installation/installation)

### API

ใช้งาน API ของ Day.js ได้ง่ายในการแปลง ตรวจสอบ ปรับแต่ง และแสดงวันที่และเวลา

```javascript
dayjs('2018-08-08') // แปลง

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // แสดงผล

dayjs().set('month', 3).month() // get & set

dayjs().add(1, 'year') // ปรับแต่ง

dayjs().isBefore(dayjs()) // ตรวจสอบ
```

📚[API Reference](https://day.js.org/docs/en/parse/parse)

### I18n

Day.js รองรับการแปลหลายภาษาอย่างดี

แต่จะไม่ถูกเพิ่มเข้าไปใน build ของคุณ เว้นแต่คุณจะเรียกใช้งาน

```javascript
import 'dayjs/locale/es' // โหลดเมื่อจำเป็น

dayjs.locale('es') // ใช้ภาษา Spanish ทั่วทั้งโปรเจกต์

dayjs('2018-05-05').locale('zh-cn').format() // ใช้ภาษาจีนใน instance เฉพาะ
```

📚[Internationalization](https://day.js.org/docs/en/i18n/i18n)

### Plugin

Plugin คือโมดูลอิสระที่สามารถเพิ่มเข้าไปใน Day.js เพื่อขยายความสามารถหรือเพิ่มฟีเจอร์ใหม่

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // โหลดเมื่อจำเป็น

dayjs.extend(advancedFormat) // ใช้งาน plugin

dayjs().format('Q Do k kk X x') // รูปแบบเพิ่มเติม
```

📚[รายการ Plugin](https://day.js.org/docs/en/plugin/plugin)

## ผู้สนับสนุน

สนับสนุนโปรเจกต์นี้โดยการเป็นผู้สนับสนุน โลโก้ของคุณจะปรากฏที่นี่พร้อมลิงก์ไปยังเว็บไซต์ของคุณ

[[เป็นผู้สนับสนุนผ่าน Github](https://github.com/sponsors/iamkun/)] [[เป็นผู้สนับสนุนผ่าน OpenCollective](https://opencollective.com/dayjs#sponsor)]

<a href="https://toyokumo.co.jp" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/197092231-2367b5eb-1e43-467e-a311-23f7cd97b086.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/ken-swyfft" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/65305317?v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/sight-sound" target="_blank">
  <img width="70" src="https://images.opencollective.com/sight-sound/54f7220/logo/256.png?height=256">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/radioplusexperts" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/188567998?v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/storyblok" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/13880908?s=200&v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://bestkru.com/" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/159320286" alt="BestKru">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://handsontable.com/docs/react-data-grid/?utm_source=Dayjs_GH&utm_medium=sponsorship&utm_campaign=library_sponsorship" target="_blank">
  <img width="70" src="https://github.com/user-attachments/assets/426c3476-dc34-44d1-a904-ed58dbd20dd6">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://route4me.com/" target="_blank">
  <img width="70" src="https://github.com/user-attachments/assets/3fbc86c5-98a9-49c2-beae-1969026fcd76" alt="Route Optimizer and Route Planner Software">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/Nftsworld007" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/133202490">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/sentdm" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/153308555?s=200&v=4">
</a>

## ผู้ร่วมพัฒนา

โปรเจกต์นี้เกิดขึ้นได้ด้วยผู้ร่วมพัฒนาทุกคน

ขอเชิญให้กด 💖 star 💖 เพื่อสนับสนุนเรา ขอบคุณมาก

และขอขอบคุณผู้สนับสนุนทุกท่าน! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<br />
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## ลิขสิทธิ์

Day.js ได้รับอนุญาตภายใต้ [สัญญาอนุญาต MIT](../../LICENSE)
