<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Alternativa veloz ao Moment.js, com <b>2kB</b> e a mesma API moderna</p>
<br>
<p align="center">
    <a href="https://unpkg.com/dayjs/dayjs.min.js"><img
            src="http://img.badgesize.io/https://unpkg.com/dayjs/dayjs.min.js?compression=gzip&style=flat-square"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/dayjs"><img src="https://img.shields.io/npm/v/dayjs.svg?style=flat-square"
                                                       alt="NPM Version"></a>
    <a href="https://travis-ci.org/iamkun/dayjs"><img
            src="https://img.shields.io/travis/iamkun/dayjs/master.svg?style=flat-square" alt="Build Status"></a>
    <a href="https://codecov.io/gh/iamkun/dayjs"><img
            src="https://img.shields.io/codecov/c/github/iamkun/dayjs/master.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://github.com/iamkun/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/npm/l/dayjs.svg?style=flat-square" alt="License"></a>
    <br>
    <a href="https://saucelabs.com/u/dayjs">
        <img width="750" src="https://user-images.githubusercontent.com/17680888/40040137-8e3323a6-584b-11e8-9dba-bbe577ee8a7b.png" alt="Sauce Test Status">
    </a>
</p>

> Day.js é uma biblioteca JavaScript minimalista que analisa, valida, manipula e formata datas e horas para navegadores modernos, usando uma API quase completamente compatível com Moment.js. Se você já usou Moment.js, já sabe usar Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 API & padrões familiares aos do Moment.js
* 💪 Imutável
* 🔥 Encadeável
* 🌐 Suporta I18n
* 📦 Mini biblioteca de 2kb
* 👫 Suporta todos os navegadores

---

## Começando

### Instalação

```console
npm install dayjs --save
```

📚[Guia de instalação](./Installation.md)

### API

É fácil utilizar a API do Day.js para converter, validar, manipular, e exibir datas e horas.

```javascript
dayjs('2018-08-08') // converte

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // formata

dayjs().set('month', 3).month() // get & set

dayjs().add(1, 'year') // manipula

dayjs().isBefore(dayjs()) // verifica
```

📚[Referência da API](./API-reference.md)

### I18n

Day.js tem suporte para internacionalização.

Porém nenhuma estará inclusa no seu *build* a menos que você utilize-a.

```javascript
import 'dayjs/locale/es' // carregar sob demanda

dayjs.locale('es') // usar locale espanhol globalmente

dayjs('2018-05-05').locale('pt-br').format() // usar locale em português brasileiro em uma instância específica
```
📚[Internacionalização](./I18n.md)

### Plugin

Um plugin é um módulo independente que pode ser adicionado ao Day.js para estender funcionalidades e adicionar novos recursos.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // carregar sob demanda

dayjs.extend(advancedFormat) // usar plugin

dayjs().format('Q Do k kk X x') // mais formatos disponíveis pelo plugin
```

📚[Lista de Plugins](./Plugin.md)

## Patricionadores

Ajude este projeto se tornando um patrocinador. O seu logo será exibido aqui, com um link para o seu site. [[Tornar-se um Patrocinador](https://opencollective.com/dayjs#sponsor)].

<a href="https://opencollective.com/dayjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/2/avatar.svg"></a>

## Contribuidores

Este projeto existe graças a todas as pessoas que contribuem.

Por favor, nos dê uma 💖 estrela 💖 para suportar-nos. Obrigado.

E obrigado a todos os nossos apoiadores!  🙏
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Licença

Day.js é licenciado sob a [MIT License](../../LICENSE).