<div dir="rtl">

עברית | [English](../../README.md)  | [简体中文](./docs/zh-cn/README.zh-CN.md) | [日本語](./docs/ja/README-ja.md) | [Português Brasileiro](./docs/pt-br/README-pt-br.md) | [한국어](./docs/ko/README-ko.md) | [Español (España)](./docs/es-es/README-es-es.md) | [Русский](./docs/ru/README-ru.md) | [Türkçe](./docs/tr/README-tr.md) | [සිංහල](./docs/si/README-si.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">אלטרנטיבה מהירה ל-Moment.js ששוקלת רק <b>2kB</b> עם אותן יכולות מודרניות</p>
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

> Day.js היא ספרייה מינימלסטית לפענוח, אימות, מניפולציה והצגה של תאריכים ושעות לדפדפנים מודרנים עם תאימות גבוהה ל-API של Moment.js. אם השתמשתם ב-Moment.js, אתם כבר יודעים את Day.js

<div dir="ltr">

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

</div>

* 🕒 תבניות ו-API זהים ל-Moment.js
* 💪 אינו ניתן לשינוי
* 🔥 ניתן לשרשור
* 🌐 תמיכה ב-I18n
* 📦 ספרייה קטנטנה 2kb
* 👫 נתמכת בכל הדפדפנים

---

## צעדים ראשונים

### דוקומנטצייה
באתר [day.js.org](https://day.js.org/) ניתן למצוא פרטים נוספים, API, ותיעודים נוספים.


### התקנה

```console
npm install dayjs --save
```

📚[מדריך התקנה](https://day.js.org/docs/en/installation/installation)

### API
מאוד קל להשתמש ב-Day.js לפענוח, אימות, מניפולציה והצגה של תאריכים ושעות.

<div dir="ltr">


```javascript
dayjs('2018-08-08') // פענוח

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // הצגה

dayjs().set('month', 3).month() // קבלה והגדרה

dayjs().add(1, 'year') // מניפולציה

dayjs().isBefore(dayjs()) // שאילתה
```

</div>

📚[תיעודי API](https://day.js.org/docs/en/parse/parse)

### I18n
ל-Day.js יש תמיכה מצוינית בבינלאומיות.

אבל אף אחד מהם לא יכלל בקובץ הסופי אלא אם כן יתבצע בהם שימוש.

<div dir="ltr">


```javascript
import 'dayjs/locale/es' // טעינה לפי הצורך

dayjs.locale('es') // הגדרה לשימוש בספרדית באופן גלובלאלי

dayjs('2018-05-05').locale('zh-cn').format() // הגדרה לשימוש בסינית פשוטה למופע ספיציפי בלבד
```

</div>


📚[בינלאומיות](https://day.js.org/docs/en/i18n/i18n)

### תוסף

תוסף הוא מודל בלתי-תלוי הניתן להוספה ל-Day.js להרחבה או להוספה של פונקציות.


<div dir="ltr">


```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' //  טעינה לפי הצורך

dayjs.extend(advancedFormat) // שימוש בתוסף

dayjs().format('Q Do k kk X x') // כעת יותר אפשרויות זמינות
```

</div>

📚[רשימת תוספים](https://day.js.org/docs/en/plugin/plugin)

### ספונסרים
תמכו בפרויקט זה כדי להיות ספונסר. קבלו לוגו עם קישור לאתר שלכם שיופיע כאן.

[[תמיכה דרך Github](https://github.com/sponsors/iamkun/)] [[תמיכה דרך OpenCollective](https://opencollective.com/dayjs#sponsor)]

<a href="https://toyokumo.co.jp" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/197092231-2367b5eb-1e43-467e-a311-23f7cd97b086.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/alan-eu" target="_blank">
  <img width="70" src="https://avatars.githubusercontent.com/u/18175329?s=52&v=4">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/sight-and-sound-ministries" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/232316426-cb99b4cf-0ccb-4e73-a6ce-e16dba6aadf4.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.exoflare.com/open-source/?utm_source=dayjs&utm_campaign=open_source" target="_blank">
  <img width="70" src="https://user-images.githubusercontent.com/17680888/162761622-1407a849-0c41-4591-8aa9-f98114ec2092.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://rxdb.info/?utm_source=day.js.org&utm_medium=banner&utm_campaign=day.js.org-sponsored" target="_blank"><img width="70" src="https://user-images.githubusercontent.com/17680888/200301812-9c9bd523-5dc4-4cab-b380-543fbcd3802c.svg"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/vendure-ecommerce" target="_blank"><img width="70" src="https://avatars.githubusercontent.com/u/39629390?s=52&v=4"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/docbot" target="_blank"><img width="70" src="https://images.opencollective.com/docbot/457761e/logo.png"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/datawrapper" target="_blank"><img width="70" src="https://images.opencollective.com/datawrapper/c13e229/logo.png"></a>

## תורמים

פרויקט זה קיים הודות לכל האנשים שתמכו בו.

תנו לנו 💖 כוכב 💖 כדי לתמוך בנו. תודה רבה.

ותודה רבה לכל התומכים שלנו! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img width="35" src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<br />
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## רישיון

Day.js מורשה לשימוש עם [רישיון MIT](./LICENSE).
</div>
