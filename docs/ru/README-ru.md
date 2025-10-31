Русский | [English](../../README.md) | [简体中文](../zh-cn/README.zh-CN.md) | [日本語](../ja/README-ja.md) | [Português Brasileiro](../pt-br/README-pt-br.md) | [한국어](../ko/README-ko.md) | [Español (España)](../es-es/README-es-es.md)| [עברית](./docs/he/README-he.md)

<p align="center"><a href="https://day.js.org/ru/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Быстрая <b>2kB</b> альтернатива Moment.js с тем же современным API</p>
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

> Day.js - это миниатюрная JavaScript библиотека, которая парсит, валидирует, управляет, и отображает даты и время для современных браузеров, обладающая большой совместимостью с Moment.js API. Если вы используете Moment.js, вы уже знаете как пользоваться Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Хорошо знакомые API и паттерны Moment.js
* 💪 Неизменная
* 🔥 Цепная
* 🌐 Поддержка интернационализации (I18n)
* 📦 2kb мини-библиотека
* 👫 Поддерживающаяся всеми браузерами

---

## Начало работы

### Документация

Вы можете найти больше детальной информации, API, и других документов на веб-сайте [day.js.org](https://day.js.org/).

### Установка

```console
npm install dayjs --save
```

📚[Инструкция по установке](https://day.js.org/docs/ru/installation/installation)

### API

API Day.js легко использовать для парсинга, валидации, управления, и отображения дат и времени.

```javascript
dayjs('2018-08-08') // парсинг

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // отображение

dayjs().set('month', 3).month() // получение и установка

dayjs().add(1, 'year') // управление

dayjs().isBefore(dayjs()) // осведомление
```

📚[Ссылка на API](https://day.js.org/docs/ru/parse/parse)

### I18n

Day.js обладает великолепной поддержкой интернационализации.

Но ни одна из локализаций не будет включена в вашу сборку до тех пор, пока вы не начнёте её использовать.
```javascript
import 'dayjs/locale/es' // загрузка по требованию

dayjs.locale('es') // глобальное использование Испанской локали

dayjs('2018-05-05').locale('zh-cn').format() // использование упрощённой Китайской локали в конкретном случае
```
📚[Интернационализация](https://day.js.org/docs/ru/i18n/i18n)

### Плагин

Плагин - это независимый модуль, который может быть добавлен в Day.js с целью расширения функциональных возможностей или добавления новых особенностей.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // загрузка по требованию

dayjs.extend(advancedFormat) // использование плагина

dayjs().format('Q Do k kk X x') // больше доступных форматов
```

📚[Список плагинов](https://day.js.org/docs/ru/plugin/plugin)

## Спонсоры

Поддержите этот проект, став спонсором. Ваш логотип будет показан здесь с ссылкой на ваш веб-сайт. [[Стать спонсором](https://opencollective.com/dayjs#sponsor)]

<a href="https://opencollective.com/dayjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/3/avatar.svg"></a>

## Контрибьюторы

Этот проект существует благодаря всем людям, кто вносит свой вклад в его развитие.

Пожалуйста поставьте 💖 звездочку 💖, чтобы поддержать нас. Спасибо.

Также выражаю благодарность всем нашим спонсорам! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Лицензия

Day.js распространяется под [лицензией MIT](./LICENSE-ru).
