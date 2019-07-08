## [1.8.15](https://github.com/iamkun/dayjs/compare/v1.8.14...v1.8.15) (2019-07-08)


### Bug Fixes

* Fix dayjs.locale() returns current global locale ([#602](https://github.com/iamkun/dayjs/issues/602)) ([790cd1a](https://github.com/iamkun/dayjs/commit/790cd1a))
* Fix incorrect Thai locale translation of July ([#607](https://github.com/iamkun/dayjs/issues/607)) ([43cbfd3](https://github.com/iamkun/dayjs/commit/43cbfd3))
* Lowercase french locale months and weekdays ([#615](https://github.com/iamkun/dayjs/issues/615)) ([e5a257c](https://github.com/iamkun/dayjs/commit/e5a257c))
* Type - Export Ls object to query all available locales ([#623](https://github.com/iamkun/dayjs/issues/623)) ([f6bfae0](https://github.com/iamkun/dayjs/commit/f6bfae0))
* Update  nb (Norsk Bokmål) locale ([#604](https://github.com/iamkun/dayjs/issues/604)) ([907f5c9](https://github.com/iamkun/dayjs/commit/907f5c9))
* Update types of `.diff` API ([#617](https://github.com/iamkun/dayjs/issues/617)) ([f0f43d2](https://github.com/iamkun/dayjs/commit/f0f43d2))

## [1.8.14](https://github.com/iamkun/dayjs/compare/v1.8.13...v1.8.14) (2019-05-07)


### Bug Fixes

* Fix `.format` API returns UTC offset when value is 0 bug ([b254964](https://github.com/iamkun/dayjs/commit/b254964))
* Fix QuarterOfYear plugin bug ([#591](https://github.com/iamkun/dayjs/issues/591)) ([434f774](https://github.com/iamkun/dayjs/commit/434f774))
* Fix UTC plugin add day DST bug ([#590](https://github.com/iamkun/dayjs/issues/590)) ([86cd839](https://github.com/iamkun/dayjs/commit/86cd839))

## [1.8.13](https://github.com/iamkun/dayjs/compare/v1.8.12...v1.8.13) (2019-04-26)


### Bug Fixes

* Add missing relativeTime and formats for some locales ([#560](https://github.com/iamkun/dayjs/issues/560)) ([96b917e](https://github.com/iamkun/dayjs/commit/96b917e))
* Add weekday (locale aware day of the week) plugin ([#569](https://github.com/iamkun/dayjs/issues/569)) ([9007cc5](https://github.com/iamkun/dayjs/commit/9007cc5)), closes [#559](https://github.com/iamkun/dayjs/issues/559)
* Allow customizing "am" / "pm" strings with locale meridiem function ([#580](https://github.com/iamkun/dayjs/issues/580)) ([576e93e](https://github.com/iamkun/dayjs/commit/576e93e)), closes [#578](https://github.com/iamkun/dayjs/issues/578)
* Fix `.add` day/week decimal rouding bug ([800f6c9](https://github.com/iamkun/dayjs/commit/800f6c9))
* Fix `.diff` type definition error ([#565](https://github.com/iamkun/dayjs/issues/565)) ([c4921ae](https://github.com/iamkun/dayjs/commit/c4921ae)), closes [#561](https://github.com/iamkun/dayjs/issues/561)
* Fix CustomParseFormat plugin bug ([#568](https://github.com/iamkun/dayjs/issues/568)) ([1f5a9db](https://github.com/iamkun/dayjs/commit/1f5a9db)), closes [#555](https://github.com/iamkun/dayjs/issues/555)
* Fix relativeTime plugin Math.round bug ([40bea40](https://github.com/iamkun/dayjs/commit/40bea40))
* skip square brackets in  buddhistEra, advancedFormat plugins ([#556](https://github.com/iamkun/dayjs/issues/556)) ([9279718](https://github.com/iamkun/dayjs/commit/9279718)), closes [#554](https://github.com/iamkun/dayjs/issues/554)
* Update Indonesian locale([#574](https://github.com/iamkun/dayjs/issues/574)) ([0aa7143](https://github.com/iamkun/dayjs/commit/0aa7143))
* Update locale month to support both array and function ([#581](https://github.com/iamkun/dayjs/issues/581)) ([b6599d3](https://github.com/iamkun/dayjs/commit/b6599d3))
* Update LocalizedFormat plugin lowercase formats logic ([#557](https://github.com/iamkun/dayjs/issues/557)) ([d409304](https://github.com/iamkun/dayjs/commit/d409304))

## [1.8.12](https://github.com/iamkun/dayjs/compare/v1.8.11...v1.8.12) (2019-04-02)


### Bug Fixes

* Add .get API ([7318797](https://github.com/iamkun/dayjs/commit/7318797))
* Add 79 locales ([#541](https://github.com/iamkun/dayjs/issues/541)) ([f75a125](https://github.com/iamkun/dayjs/commit/f75a125))
* Add Calendar plugin ([d1b9cf9](https://github.com/iamkun/dayjs/commit/d1b9cf9))
* Add isoWeeksInYear plugin ([2db8631](https://github.com/iamkun/dayjs/commit/2db8631))
* Add Occitan (oc-lnc) locale file ([#551](https://github.com/iamkun/dayjs/issues/551)) ([c30b715](https://github.com/iamkun/dayjs/commit/c30b715))
* Add plugin minMax to sopport .max .min ([2870a23](https://github.com/iamkun/dayjs/commit/2870a23))
* Fix set Month Year error in last day of the month ([d058f4a](https://github.com/iamkun/dayjs/commit/d058f4a))
* Update ko locale weekdaysShort  ([#543](https://github.com/iamkun/dayjs/issues/543)) ([317fd3e](https://github.com/iamkun/dayjs/commit/317fd3e))
* Update localizedFormat plugin to support lowercase localizable formats (l, ll, lll, llll) ([#546](https://github.com/iamkun/dayjs/issues/546)) ([f2b5ebf](https://github.com/iamkun/dayjs/commit/f2b5ebf))

## [1.8.11](https://github.com/iamkun/dayjs/compare/v1.8.10...v1.8.11) (2019-03-21)


### Bug Fixes

* Add .add('quarter') .startOf('quarter') through plugin quarterOfYear ([dde39e9](https://github.com/iamkun/dayjs/commit/dde39e9)), closes [#537](https://github.com/iamkun/dayjs/issues/537) [#531](https://github.com/iamkun/dayjs/issues/531)
* Add locale support for Azerbaijani language (az) ([#535](https://github.com/iamkun/dayjs/issues/535)) ([eeb20fa](https://github.com/iamkun/dayjs/commit/eeb20fa))
* Correct typescript definition `add` ([22a249c](https://github.com/iamkun/dayjs/commit/22a249c)), closes [#531](https://github.com/iamkun/dayjs/issues/531)
* Fix CustomParseFormat plugin formatting bug ([#536](https://github.com/iamkun/dayjs/issues/536)) ([8578546](https://github.com/iamkun/dayjs/commit/8578546)), closes [#533](https://github.com/iamkun/dayjs/issues/533)
* Update pt locale ([#538](https://github.com/iamkun/dayjs/issues/538)) ([1ac9e1e](https://github.com/iamkun/dayjs/commit/1ac9e1e))

## [1.8.10](https://github.com/iamkun/dayjs/compare/v1.8.9...v1.8.10) (2019-03-10)


### Bug Fixes

* **locale:** Add nepali (ne) locale ([#524](https://github.com/iamkun/dayjs/issues/524)) ([bdbec01](https://github.com/iamkun/dayjs/commit/bdbec01))
* Add WeekYear plugin ([a892608](https://github.com/iamkun/dayjs/commit/a892608))
* API .locale() with no argument should return current locale name string ([8d63d88](https://github.com/iamkun/dayjs/commit/8d63d88))
* CustomParseFormat correct parse HH:mm:ss with only one digit like 0:12:10 ([600d547](https://github.com/iamkun/dayjs/commit/600d547))
* CustomParseFormat plugin parse Do format string ([bf27fda](https://github.com/iamkun/dayjs/commit/bf27fda)), closes [#522](https://github.com/iamkun/dayjs/issues/522)
* Expand setters like .year(2000) .hour(12) ([ac532a0](https://github.com/iamkun/dayjs/commit/ac532a0))
* Move toObject, toArray API to separate plugin from core ([40a3431](https://github.com/iamkun/dayjs/commit/40a3431))

## [1.8.9](https://github.com/iamkun/dayjs/compare/v1.8.8...v1.8.9) (2019-03-06)


### Features

* Add UTC mode with UTC plugin ([#517](https://github.com/iamkun/dayjs/issues/517)) ([caf335c](https://github.com/iamkun/dayjs/commit/caf335c))

> For plugin developers: Please note, we have changed the name of some method in `Utils` in order to reduce the file size. ([#517](https://github.com/iamkun/dayjs/issues/517)) ([detail](https://github.com/iamkun/dayjs/pull/517/files#diff-2b4ca49d4bb0a774c4d4c1672d7aa781R46))

### Bug Fixes

* Add locale de-AT ([#515](https://github.com/iamkun/dayjs/issues/515)) ([d93f7b6](https://github.com/iamkun/dayjs/commit/d93f7b6))
* Add locale zh-hk ([#516](https://github.com/iamkun/dayjs/issues/516)) ([5fc05a6](https://github.com/iamkun/dayjs/commit/5fc05a6))

## [1.8.8](https://github.com/iamkun/dayjs/compare/v1.8.7...v1.8.8) (2019-02-25)


### Bug Fixes

* Update relativeTime plugin type definition ([de56f2c](https://github.com/iamkun/dayjs/commit/de56f2c))

## [1.8.7](https://github.com/iamkun/dayjs/compare/v1.8.6...v1.8.7) (2019-02-24)


### Bug Fixes

* Add plugin type definitions ([#418](https://github.com/iamkun/dayjs/issues/418)) ([361d437](https://github.com/iamkun/dayjs/commit/361d437))
* Add Swahili locale ([#508](https://github.com/iamkun/dayjs/issues/508)) ([b9cee84](https://github.com/iamkun/dayjs/commit/b9cee84))
* Parse month string 'MMMM MMM (February, Feb)' in customParseFormat ([#457](https://github.com/iamkun/dayjs/issues/457)) ([f343206](https://github.com/iamkun/dayjs/commit/f343206))
* Update declaration file .diff .isBefore .isSame .isAfter ([#496](https://github.com/iamkun/dayjs/issues/496)) ([4523275](https://github.com/iamkun/dayjs/commit/4523275))
* Word orders corrections for locale 'fa' ([#491](https://github.com/iamkun/dayjs/issues/491)) ([56050c2](https://github.com/iamkun/dayjs/commit/56050c2))

## [1.8.6](https://github.com/iamkun/dayjs/compare/v1.8.5...v1.8.6) (2019-02-14)


### Bug Fixes

* Add Bahasa Melayu (Malaysia) locale ([#485](https://github.com/iamkun/dayjs/issues/485)) ([cb208b0](https://github.com/iamkun/dayjs/commit/cb208b0))
* Copy & export built-in en locale to /locale folder as a separate file ([a7e05e0](https://github.com/iamkun/dayjs/commit/a7e05e0))
* Fix bug in customParseFormat plugin while month(MM) is '01' ([9884ca5](https://github.com/iamkun/dayjs/commit/9884ca5)), closes [#494](https://github.com/iamkun/dayjs/issues/494)
* Fix startOf week bug while week start is not Sunday ([5eaf77b](https://github.com/iamkun/dayjs/commit/5eaf77b))
* Implemented isBetween inclusivity ([#464](https://github.com/iamkun/dayjs/issues/464)) ([af2f4f1](https://github.com/iamkun/dayjs/commit/af2f4f1))
* Update Swedish and Finnish locales ([#488](https://github.com/iamkun/dayjs/issues/488)) ([f142082](https://github.com/iamkun/dayjs/commit/f142082))
* Fix commonJS require ES Module bug in webpack4 ([23f9f3d](https://github.com/iamkun/dayjs/commit/23f9f3d)), check [#492](https://github.com/iamkun/dayjs/issues/492)

> Get access to ESM code with `import dayjs from 'dayjs/esm'`

## [1.8.5](https://github.com/iamkun/dayjs/compare/v1.8.4...v1.8.5) (2019-02-07)


### Bug Fixes

* Add en-gb locale ([#478](https://github.com/iamkun/dayjs/issues/478)) ([508c3a7](https://github.com/iamkun/dayjs/commit/508c3a7))
* **module:** transpile everything except ES6 modules in the 'module' entrypoint ([#477](https://github.com/iamkun/dayjs/issues/477)) ([#480](https://github.com/iamkun/dayjs/issues/480)) ([#482](https://github.com/iamkun/dayjs/issues/482)) ([767017d](https://github.com/iamkun/dayjs/commit/767017d))
* update customParseFormat plugin support hh:mm ([54947cc](https://github.com/iamkun/dayjs/commit/54947cc)), closes [#484](https://github.com/iamkun/dayjs/issues/484)
* Update module in package.json ([5c5a7a0](https://github.com/iamkun/dayjs/commit/5c5a7a0))

## [1.8.4](https://github.com/iamkun/dayjs/compare/v1.8.3...v1.8.4) (2019-02-05)

* Allow set start day of week in locale && Allow set week in weekOfYear plugin ([1295591](https://github.com/iamkun/dayjs/commit/1295591))
### Bug Fixes
* update all locale files with correct week start ([5b03412](https://github.com/iamkun/dayjs/commit/5b03412))
* update es es-do locale adding weekStart && update weekStart test ([66e42ec](https://github.com/iamkun/dayjs/commit/66e42ec))
* Revert default export ([b00da1b](https://github.com/iamkun/dayjs/commit/b00da1b))

## [1.8.3](https://github.com/iamkun/dayjs/compare/v1.8.2...v1.8.3) (2019-02-04)


### Bug Fixes

* fix ios safari YYYY-MM-DD HH:mm parse BUG ([e02ae82](https://github.com/iamkun/dayjs/commit/e02ae82)), closes [#254](https://github.com/iamkun/dayjs/issues/254)

## [1.8.2](https://github.com/iamkun/dayjs/compare/v1.8.1...v1.8.2) (2019-02-02)


### Bug Fixes

* Add missing czech language locale ([#461](https://github.com/iamkun/dayjs/issues/461)) ([7e04004](https://github.com/iamkun/dayjs/commit/7e04004))
* Add utcOffset api method and fix calculating diff error in DST ([#453](https://github.com/iamkun/dayjs/issues/453)) ([ce2e30e](https://github.com/iamkun/dayjs/commit/ce2e30e))
* Fix it locale error ([#458](https://github.com/iamkun/dayjs/issues/458)) ([f6d9a64](https://github.com/iamkun/dayjs/commit/f6d9a64))
* Add DayOfYear plugin (#454)
* Fix es locale monthsShort error

## [1.8.1](https://github.com/iamkun/dayjs/compare/v1.8.0...v1.8.1) (2019-02-02)

* Add LocalizedFormat plugin supplying format like LTS, LT, LLLL 

* <del>update declaration File with default export (#278)</del>
> <del>From v1.8.1, in TypeScript Project, just `import from dayjs from 'dayjs'`</del>
* add ES2015 module support (#451)

### Performance Improvements

* **format:** reuse matches instead of created when replacing ([#441](https://github.com/iamkun/dayjs/issues/441)) ([10b79d8](https://github.com/iamkun/dayjs/commit/10b79d8))

# [1.8.0](https://github.com/iamkun/dayjs/compare/v1.7.8...v1.8.0) (2019-01-14)


### Features

* add CustomParseFormat plugin  and QuarterOfYear plugin ([#450](https://github.com/iamkun/dayjs/issues/450)) ([8f6f63c](https://github.com/iamkun/dayjs/commit/8f6f63c))

## [1.7.8](https://github.com/iamkun/dayjs/compare/v1.7.7...v1.7.8) (2018-12-13)


### Feature

* update isSame isBefore isAfter supports units ([fd65464](https://github.com/iamkun/dayjs/commit/fd65464))

* add greek lithuanian locales 

## [1.7.7](https://github.com/iamkun/dayjs/compare/v1.7.6...v1.7.7) (2018-09-26)


### Bug Fixes

* **DST:** fix daylight saving time DST bug && add test ([#354](https://github.com/iamkun/dayjs/issues/354)) ([6fca6d5](https://github.com/iamkun/dayjs/commit/6fca6d5))

## [1.7.6](https://github.com/iamkun/dayjs/compare/v1.7.5...v1.7.6) (2018-09-25)


### Bug Fixes

* **add dayjs.unix:** add dayjs.unix to parse timestamp in seconds && locale update ([5711c5e](https://github.com/iamkun/dayjs/commit/5711c5e))

## [1.7.5](https://github.com/iamkun/dayjs/compare/v1.7.4...v1.7.5) (2018-08-10)


### Bug Fixes

* add isBetween API & update ([b5fc3d1](https://github.com/iamkun/dayjs/commit/b5fc3d1))

## [1.7.4](https://github.com/iamkun/dayjs/compare/v1.7.3...v1.7.4) (2018-07-11)


### Bug Fixes

* update set week logic ([60b6325](https://github.com/iamkun/dayjs/commit/60b6325)), closes [#276](https://github.com/iamkun/dayjs/issues/276)

## [1.7.3](https://github.com/iamkun/dayjs/compare/v1.7.2...v1.7.3) (2018-07-10)


### Bug Fixes

* **locale-nl:** set correct weekdays and months ([6d089d7](https://github.com/iamkun/dayjs/commit/6d089d7))

## [1.7.2](https://github.com/iamkun/dayjs/compare/v1.7.1...v1.7.2) (2018-07-04)


### Bug Fixes

* DEPRECATED isLeapYear, use IsLeapYear plugin instead ([e2e5116](https://github.com/iamkun/dayjs/commit/e2e5116))

## [1.7.1](https://github.com/iamkun/dayjs/compare/v1.7.0...v1.7.1) (2018-07-03)


### Bug Fixes

* fix week() error near the end of the year ([fa03689](https://github.com/iamkun/dayjs/commit/fa03689))

# [1.7.0](https://github.com/iamkun/dayjs/compare/v1.6.10...v1.7.0) (2018-07-02)


### Features

* Added method `.week()` to retrieve week of the year ([e1c1b1c](https://github.com/iamkun/dayjs/commit/e1c1b1c))
* Updated Japanese locae

## [1.6.10](https://github.com/iamkun/dayjs/compare/v1.6.9...v1.6.10) (2018-06-25)


### Bug Fixes

* Add relative locales to russian language ([c7e9898](https://github.com/iamkun/dayjs/commit/c7e9898)), closes [#256](https://github.com/iamkun/dayjs/issues/256)

## [1.6.9](https://github.com/iamkun/dayjs/compare/v1.6.8...v1.6.9) (2018-06-14)


### Bug Fixes

* add isDayjs => boolean API ([6227c8b](https://github.com/iamkun/dayjs/commit/6227c8b))

## [1.6.8](https://github.com/iamkun/dayjs/compare/v1.6.7...v1.6.8) (2018-06-14)


### Bug Fixes

* fix  Advanced format bug in zh-cn ([0c07874](https://github.com/iamkun/dayjs/commit/0c07874)), closes [#242](https://github.com/iamkun/dayjs/issues/242)

## [1.6.7](https://github.com/iamkun/dayjs/compare/v1.6.6...v1.6.7) (2018-06-11)


### Bug Fixes

* fix id locale ([1ebbeb8](https://github.com/iamkun/dayjs/commit/1ebbeb8)), closes [#234](https://github.com/iamkun/dayjs/issues/234)

<a name="1.6.6"></a>
## [1.6.6](https://github.com/iamkun/dayjs/compare/v1.6.5...v1.6.6) (2018-06-06)


### Bug Fixes

*  format API update and locale file update ([5ca48f0](https://github.com/iamkun/dayjs/commit/5ca48f0)), closes [#228](https://github.com/iamkun/dayjs/issues/228)

<a name="1.6.5"></a>
## [1.6.5](https://github.com/iamkun/dayjs/compare/v1.6.4...v1.6.5) (2018-05-31)


### Bug Fixes

* bugfix, utils update and  locale file update ([ebcb6d5](https://github.com/iamkun/dayjs/commit/ebcb6d5)), closes [#214](https://github.com/iamkun/dayjs/issues/214)

<a name="1.6.4"></a>
## [1.6.4](https://github.com/iamkun/dayjs/compare/v1.6.3...v1.6.4) (2018-05-25)


### Bug Fixes

* add RelativeTime plugin and locale file update ([c1fbbca](https://github.com/iamkun/dayjs/commit/c1fbbca)), closes [#198](https://github.com/iamkun/dayjs/issues/198)

<a name="1.6.3"></a>
## [1.6.3](https://github.com/iamkun/dayjs/compare/v1.6.2...v1.6.3) (2018-05-21)


### Bug Fixes

* Changing locales locally is immutable from this release ([2cce729](https://github.com/iamkun/dayjs/commit/2cce729)), closes [#182](https://github.com/iamkun/dayjs/issues/182)
* instance locale change should be immutable ([84597c9](https://github.com/iamkun/dayjs/commit/84597c9))
* Add more locales
* english ordinal fix

<a name="1.6.2"></a>
## [1.6.2](https://github.com/iamkun/dayjs/compare/v1.6.1...v1.6.2) (2018-05-18)


### Bug Fixes

* change-log update && test new npm release ([aa49cba](https://github.com/iamkun/dayjs/commit/aa49cba)), closes [#163](https://github.com/iamkun/dayjs/issues/163)

<a name="1.6.1"></a>
## [1.6.1](https://github.com/iamkun/dayjs/compare/v1.6.0...v1.6.1) (2018-05-18)


### Bug Fixes

* Add German, Brazilian Portuguese locales
* add() & parse() bug fix & add locale de, pt-br ([bf1331e](https://github.com/iamkun/dayjs/commit/bf1331e))

<a name="1.6.0"></a>
# [1.6.0](https://github.com/iamkun/dayjs/compare/v1.5.24...v1.6.0) (2018-05-15)


### Features

* Locale && Plugin ([2342c55](https://github.com/iamkun/dayjs/commit/2342c55)), closes [#141](https://github.com/iamkun/dayjs/issues/141)
