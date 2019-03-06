## [1.8.9](https://github.com/iamkun/dayjs/compare/v1.8.8...v1.8.9) (2019-03-06)


### Bug Fixes

* Add de-AT locale ([#515](https://github.com/iamkun/dayjs/issues/515)) ([d93f7b6](https://github.com/iamkun/dayjs/commit/d93f7b6))
* Add UTC mode with UTC plugin ([#517](https://github.com/iamkun/dayjs/issues/517)) ([caf335c](https://github.com/iamkun/dayjs/commit/caf335c))
* Adding locale zh-hk ([#516](https://github.com/iamkun/dayjs/issues/516)) ([5fc05a6](https://github.com/iamkun/dayjs/commit/5fc05a6))

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
