Українська | [English](../../README.md) | [简体中文](./docs/zh-cn/README.zh-CN.md) | [日本語](./docs/ja/README-ja.md) | [Português Brasileiro](./docs/pt-br/README-pt-br.md) | [한국어](./docs/ko/README-ko.md) | [Español (España)](./docs/es-es/README-es-es.md) | [Русский](./docs/ru/README-ru.md) | [Türkçe](./docs/tr/README-tr.md) | [සිංහල](./docs/si/README-si.md) | [עברית](./docs/he/README-he.md)

<p align="center"><a href="https://day.js.org/ru/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Швидка <b>2kB</b> альтернатива Moment.js із аналогічним сумісним API</p>
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

> Day.js - це мініатюрна JavaScript бібліотека, яка парсить, валідує, керує, і відображає дати та час для сучасних браузерів, що має велику сумісність з Moment.js API. Якщо ви використовуєте Moment.js, ви вже знаєте, як користуватися Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Добре знайомий API та патерни Moment.js
* 💪 Стабільна
* 🔥 З послідовним викликом методів
* 🌐 Підтримка інтернаціоналізації (I18n)
* 📦 2kb міні-бібліотека
* 👫 Підтримується усіма браузерами

---

## Початок роботи

### Документація

Ви можете знайти більше детальної інформації, API, та інших документів на веб-сайті [day.js.org](https://day.js.org/).

### Встановлення

```console
npm install dayjs --save
```

📚[Інструкція з встановлення](https://day.js.org/docs/ru/installation/installation)

### API

API Day.js легко використовувати для парсингу, валідації, управління та відображення дат і часу.

```javascript
dayjs('2018-08-08') // парсинг

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // відображення

dayjs().set('month', 3).month() // отримання і встановлення

dayjs().add(1, 'year') // управління

dayjs().isBefore(dayjs()) // інформування
```

📚[Посилання на API](https://day.js.org/docs/ru/parse/parse)

### I18n

Day.js має чудову підтримку інтернаціоналізації.

Проте жодна з локалізацій не буде включена до вашої збірки доти, доки ви не почнете її використовувати.
```javascript
import 'dayjs/locale/es' // завантаження за вимоги

dayjs.locale('uk') // глобальне використання Української локалі

dayjs('2018-05-05').locale('zh-cn').format() // використання спрощеної китайської локалі в конкретному випадку
```
📚[Інтернаціоналізація](https://day.js.org/docs/ru/i18n/i18n)

### Плагін

Плагін - це незалежний модуль, який може бути доданий до Day.js з метою розширення функціональних можливостей або додавання нових особливостей.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // завантаження за вимоги

dayjs.extend(advancedFormat) // використання плагіну

dayjs().format('Q Do k kk X x') // більше доступних форматів
```

📚[Перелік плагінів](https://day.js.org/docs/ru/plugin/plugin)

### Тенденція використання

<a href="https://npm-compare.com/moment,dayjs/#timeRange=THREE_YEARS" target="_blank">
  <img src="https://user-images.githubusercontent.com/3455798/270162667-c7bd2ebe-675e-45c6-a2c9-dc67f3b65d6e.png">
</a>

## Спонсори

Підтримайте цей проект, ставши спонсором. Ваш логотип буде показаний тут із посиланням на ваш веб-сайт. [[Стати спонсором](https://opencollective.com/dayjs#sponsor)]

<a href="https://toyokumo.co.jp" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/197092231-2367b5eb-1e43-467e-a311-23f7cd97b086.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/ken-swyfft" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/65305317?v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://chudovo.com/" target="_blank">
  <img width="70" src="https://images.opencollective.com/chudovo/3c866f5/logo/256.png?height=256">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.ratrav.com" target="_blank">
  <img width="70" src="https://images.opencollective.com/ratrav/8bad59c/logo/256.png?height=256">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/sight-sound" target="_blank">
  <img width="70" src="https://images.opencollective.com/sight-sound/54f7220/logo/256.png?height=256">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.honrev.com" target="_blank">
  <img width="70" src="https://github.com/user-attachments/assets/b3203350-34c1-4637-b8b1-d9b8bab346d3">
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://handsontable.com/docs/react-data-grid/?utm_source=Dayjs_GH&utm_medium=sponsorship&utm_campaign=library_sponsorship" target="_blank">
  <img width="70" src="https://github.com/user-attachments/assets/426c3476-dc34-44d1-a904-ed58dbd20dd6">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://route4me.com/" target="_blank">
  <img width="70" src="https://github.com/user-attachments/assets/3fbc86c5-98a9-49c2-beae-1969026fcd76" alt="Route Optimizer and Route Planner Software">
</a>

## Контриб'ютори

Цей проект існує завдяки всім людям, що роблять свій внесок у його розвиток.

Будь ласка, поставте 💖 зірочку 💖, щоб підтримати нас. Дякую.

Також висловлюю подяку всім нашим спонсорам! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<br />
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Лицензия

Day.js поширюється під [ліцензією MIT](./LICENSE-uk).
