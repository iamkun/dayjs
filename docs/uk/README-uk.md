Українська | [English](../../README.md) | [Русский](../ru/README-ru.md) | [简体中文](../zh-cn/README.zh-CN.md) | [日本語](../ja/README-ja.md) | [Português Brasileiro](../pt-br/README-pt-br.md) | [한국어](../ko/README-ko.md) | [Español (España)](../es-es/README-es-es.md) | [עברית](../he/README-he.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Швидка <b>2kB</b> альтернатива Moment.js із таким самим сучасним API</p>
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

> Day.js — це мінімалістична бібліотека JavaScript для сучасних браузерів, яка дає змогу аналізувати, перевіряти, змінювати та відображати дату й час і має API, значною мірою сумісний із Moment.js. Якщо ви користувались Moment.js, то вже знаєте, як працювати з Day.js.

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .set('year', 2018)
  .format('YYYY-MM-DD HH:mm:ss')
```

- 🕒 Знайомі API та шаблони Moment.js
- 💪 Незмінний
- 🔥 Ланцюжковий
- 🌐 Підтримка інтернаціоналізації (I18n)
- 📦 Бібліотека розміром 2 kB
- 👫 Підтримується усіма браузерами

---

## Початок роботи

### Документація

Докладнішу інформацію, опис API та іншу документацію можна знайти на офіційному сайті [day.js.org].(https://day.js.org/).

### Встановлення

```console
npm install dayjs --save
```

📚[Інструкція з встановлення](https://day.js.org/docs/en/installation/installation)

### API

API Day.js легко використовувати для аналізу, валідації, керування та форматування дат і часу.

```javascript
dayjs('2018-08-08') // аналіз

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // форматування

dayjs()
  .set('month', 3)
  .month() // отримання та встановлення

dayjs().add(1, 'year') // керування

dayjs().isBefore(dayjs()) // перевірка
```

📚[Посилання на API](https://day.js.org/docs/en/parse/parse)

### I18n

Day.js має чудову підтримку інтернаціоналізації.

Але жодна локаль не буде включена до вашої збірки, доки ви її не використовуватимете.

```javascript
import 'dayjs/locale/es' // завантаження за потреби

dayjs.locale('es') // глобальне використання іспанської локалі

dayjs('2018-05-05')
  .locale('zh-cn')
  .format() // використання спрощеної китайської локалі в конкретному випадку
```

📚[Інтернаціоналізація](https://day.js.org/docs/en/i18n/i18n)

### Плагіни

Плагін — це незалежний модуль, який можна додати до Day.js для розширення функціональності або додавання нових можливостей.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // завантаження за потреби

dayjs.extend(advancedFormat) // використання плагіна

dayjs().format('Q Do k kk X x') // більше доступних форматів
```

📚[Список плагінів](https://day.js.org/docs/en/plugin/plugin)

## Спонсори

Підтримайте цей проєкт, ставши спонсором. Ваш логотип буде показано тут із посиланням на ваш вебсайт. [[Стати спонсором](https://opencollective.com/dayjs#sponsor)]

## Учасники

Цей проєкт існує завдяки всім людям, які беруть участь у його розвитку.

Будь ласка, поставте 💖 зірочку 💖, щоб підтримати нас. Дякуємо.

Також дякуємо всім нашим спонсорам! 🙏

<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Ліцензія

Day.js поширюється під [ліцензією MIT](../../LICENSE).
