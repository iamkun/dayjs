## [1.8.2](https://github.com/iamkun/dayjs/compare/v1.8.1...v1.8.2) (2019-02-02)


### Bug Fixes

*  Add missing czech language locale ([#461](https://github.com/iamkun/dayjs/issues/461)) ([7e04004](https://github.com/iamkun/dayjs/commit/7e04004))
* add deltaZone in the equation when calculating diff and added utcOffset api method ([#453](https://github.com/iamkun/dayjs/issues/453)) ([ce2e30e](https://github.com/iamkun/dayjs/commit/ce2e30e))
* fix it locale error ([#458](https://github.com/iamkun/dayjs/issues/458)) ([f6d9a64](https://github.com/iamkun/dayjs/commit/f6d9a64))

## [1.8.1](https://github.com/iamkun/dayjs/compare/v1.8.0...v1.8.1) (2019-02-02)


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
