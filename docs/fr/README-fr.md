Français | [English](../../README.md) | [简体中文](./docs/zh-cn/README.zh-CN.md) | [日本語](./docs/ja/README-ja.md) | [Português Brasileiro](./docs/pt-br/README-pt-br.md) | [한국어](./docs/ko/README-ko.md) | [Español (España)](./docs/es-es/README-es-es.md) | [Русский](./docs/ru/README-ru.md) | [Türkçe](./docs/tr/README-tr.md) | [සිංහල](./docs/si/README-si.md) | [עברית](./docs/he/README-he.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js" /></a></p>
<p align="center">Alternative rapide de <b>2kB</b> à Moment.js avec la même API moderne</p>
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

> Day.js est une bibliothèque JavaScript minimaliste qui analyse, valide, manipule et affiche les dates et heures pour les navigateurs modernes avec une API largement compatible avec Moment.js. Si vous utilisez Moment.js, vous savez déjà comment utiliser Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Familiarité avec l'API et les modèles Moment.js
* 💪 Immuable
* 🔥 Enchaînable
* 🌐 Support I18n
* 📦 Petite bibliothèque de 2kb
* 👫 Tous les navigateurs sont pris en charge

---

## Mise en place

### Documentation

Vous trouverez plus de détails sur l'API et les autres documents sur le site [day.js.org](https://day.js.org/).

### Installation

```console
npm install dayjs --save
```

📚[Guide d'installation](https://day.js.org/docs/en/installation/installation)

### API

Il est facile d'utiliser les API de Day.js pour analyser, valider, manipuler et afficher des dates et des heures.

```javascript
dayjs('2018-08-08') // parse

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

dayjs().set('month', 3).month() // get & set

dayjs().add(1, 'year') // manipulate

dayjs().isBefore(dayjs()) // query
```

📚[API Reference](https://day.js.org/docs/en/parse/parse)

### I18n

Day.js offre une excellente prise en charge de l'internationalisation.

Mais aucun d'entre eu ne sera inclus dans votre construction si vous ne l'utilisez pas.

```javascript
import 'dayjs/locale/es' // load on demand

dayjs.locale('es') // use Spanish locale globally

dayjs('2018-05-05').locale('zh-cn').format() // use Chinese Simplified locale in a specific instance
```

📚[Internationalisation](https://day.js.org/docs/en/i18n/i18n)

### Plugin

Un plugin est un module indépendant qui peut être ajouté à Day.js pour en étendre les fonctionnalités ou en ajouter de nuovelles.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // load on demand

dayjs.extend(advancedFormat) // use plugin

dayjs().format('Q Do k kk X x') // more available formats
```

📚[Liste des plugins](https://day.js.org/docs/en/plugin/plugin)

## Contributeurs

Ce projet existe grâce à toutes les personnes qui y contribuent.

Donnez-nous une 💖 étoile 💖 pour nous soutenir. Nous vous remercions.

Et merci à tous nos donateurs ! 🙏

<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Licence

Day.js est sous licence [MIT License](./LICENSE).
