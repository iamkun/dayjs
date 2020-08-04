## [1.8.32](https://github.com/iamkun/dayjs/compare/v1.8.31...v1.8.32) (2020-08-04)


### Bug Fixes

* Add Experimental Timezone Plugin ([#974](https://github.com/iamkun/dayjs/issues/974)) ([e69caba](https://github.com/iamkun/dayjs/commit/e69caba1b0957241a855aa0ae38db899fa2c3795))
* fix parse date string error e.g. '2020/9/30' ([#980](https://github.com/iamkun/dayjs/issues/980)) ([231790d](https://github.com/iamkun/dayjs/commit/231790da62af0494732960c2c50d86ae9bf63ec6)), closes [#979](https://github.com/iamkun/dayjs/issues/979)
* update monthDiff function to get more accurate results ([19e8a7f](https://github.com/iamkun/dayjs/commit/19e8a7f2f7582b717f49d446822e39603694433c))
* Update UTC plugin to support keepLocalTime ([#973](https://github.com/iamkun/dayjs/issues/973)) ([9f488e5](https://github.com/iamkun/dayjs/commit/9f488e5aca92f0b4c2951459436829d79f86d8d7))

## [1.8.31](https://github.com/iamkun/dayjs/compare/v1.8.30...v1.8.31) (2020-07-29)


### Bug Fixes

* Rollback LocalePresetType to string ([#968](https://github.com/iamkun/dayjs/issues/968)) ([b342bd3](https://github.com/iamkun/dayjs/commit/b342bd3d84987d6c7587a0c4590d614fb0e670d7))
* Update Regex to parse 'YYYY' correctly ([#969](https://github.com/iamkun/dayjs/issues/969)) ([70c1239](https://github.com/iamkun/dayjs/commit/70c123990dcc6bd479fa2b5d7f9985127872a826))

## [1.8.30](https://github.com/iamkun/dayjs/compare/v1.8.29...v1.8.30) (2020-07-22)


### Bug Fixes

* Add Haitian Creole (ht) and Spanish Puerto Rico (es-pr) locale configs ([#958](https://github.com/iamkun/dayjs/issues/958)) ([b2642e2](https://github.com/iamkun/dayjs/commit/b2642e2d1f87734a34808c66e5176cb18bc0414d))
* Fix UTC plugin wrong hour bug while adding month or year  ([#957](https://github.com/iamkun/dayjs/issues/957)) ([28ae070](https://github.com/iamkun/dayjs/commit/28ae070024ff26685c88ce4cc8747307e86923c9))
* Update French (fr) locale to set correct yearStart ([14ab808](https://github.com/iamkun/dayjs/commit/14ab808a7b7e226f2eb2cbe894916a18ed5d967d)), closes [#956](https://github.com/iamkun/dayjs/issues/956)

## [1.8.29](https://github.com/iamkun/dayjs/compare/v1.8.28...v1.8.29) (2020-07-02)


### Bug Fixes

* Duration plugin supports parse ISO string with week (W) ([#950](https://github.com/iamkun/dayjs/issues/950)) ([f0fc12a](https://github.com/iamkun/dayjs/commit/f0fc12adadcab53fb0577ad8f5e2f1cf784fd8f5))
* LocaleData plugin supports locale order ([#938](https://github.com/iamkun/dayjs/issues/938)) ([62f429d](https://github.com/iamkun/dayjs/commit/62f429db73a0a069b1267231dea172b85f4b90e3)), closes [#936](https://github.com/iamkun/dayjs/issues/936)
* Update type definition to support array format ([#945](https://github.com/iamkun/dayjs/issues/945)) ([81d4740](https://github.com/iamkun/dayjs/commit/81d4740511d47e34f891b21afeb0449ef8a28688)), closes [#944](https://github.com/iamkun/dayjs/issues/944)
* Update type definition to support strict mode ([#951](https://github.com/iamkun/dayjs/issues/951)) ([8d54f3f](https://github.com/iamkun/dayjs/commit/8d54f3f7d4d161e72c767fa09699e70a2b3d681c))

## [1.8.28](https://github.com/iamkun/dayjs/compare/v1.8.27...v1.8.28) (2020-05-28)


### Bug Fixes

* Fix CustomParseFormat plugin month index error ([#918](https://github.com/iamkun/dayjs/issues/918)) ([fa2ec7f](https://github.com/iamkun/dayjs/commit/fa2ec7fcb980dcd2c7498dafe2f9ca2e52d735cf)), closes [#915](https://github.com/iamkun/dayjs/issues/915)
* Update Ukrainian (uk) locale monthFormat and monthStandalone ([#899](https://github.com/iamkun/dayjs/issues/899)) ([a08756e](https://github.com/iamkun/dayjs/commit/a08756e80bd1d7126fca28c5ad9e382613fc86c4))

## [1.8.27](https://github.com/iamkun/dayjs/compare/v1.8.26...v1.8.27) (2020-05-14)


### Bug Fixes

* Add Kinyarwanda (rw) locale ([#903](https://github.com/iamkun/dayjs/issues/903)) ([f355235](https://github.com/iamkun/dayjs/commit/f355235a836540d77880959fb1b614c87e9f7b3e))
* Add plugin objectSupport ([#887](https://github.com/iamkun/dayjs/issues/887)) ([52dfb13](https://github.com/iamkun/dayjs/commit/52dfb13a6b84f0a753cc5761192b92416f440961))
* Add Turkmen (tk) locale ([#893](https://github.com/iamkun/dayjs/issues/893)) ([a9ca8dc](https://github.com/iamkun/dayjs/commit/a9ca8dcbbd0964c5b9abb4e8a2d620c983cf091a))
* Fix CustomParseFormat plugin set locale error ([#896](https://github.com/iamkun/dayjs/issues/896)) ([8035c8a](https://github.com/iamkun/dayjs/commit/8035c8a760549b631252252718db3cdc4ab2f68f))
* Fix locale month function bug ([#908](https://github.com/iamkun/dayjs/issues/908)) ([bf347c3](https://github.com/iamkun/dayjs/commit/bf347c36e401f50727fb5afcc537497b54b90d6b))
* Update CustomParseFormat plugin to support Array formats ([#906](https://github.com/iamkun/dayjs/issues/906)) ([97856c6](https://github.com/iamkun/dayjs/commit/97856c603ef5fbbeb1cf8a42387479e56a77dbe8))

## [1.8.26](https://github.com/iamkun/dayjs/compare/v1.8.25...v1.8.26) (2020-04-30)


### Bug Fixes

* Fix Duration plugin `.toISOString` format bug ([#889](https://github.com/iamkun/dayjs/issues/889)) ([058d624](https://github.com/iamkun/dayjs/commit/058d624808fd2be024ae846bcb2e03885f39b556)), closes [#888](https://github.com/iamkun/dayjs/issues/888)
* Fix WeekOfYear plugin bug while using BadMutable plugin ([#884](https://github.com/iamkun/dayjs/issues/884)) ([2977438](https://github.com/iamkun/dayjs/commit/2977438458542573a4500e21f7ba5d1f8442960e))
* Update CustomParseFormat plugin strict mode ([#882](https://github.com/iamkun/dayjs/issues/882)) ([db642ac](https://github.com/iamkun/dayjs/commit/db642ac73e52e00d8c41546b2935c9e691cf66e0))
* Update RelativeTime plugin default config ([#883](https://github.com/iamkun/dayjs/issues/883)) ([0606f42](https://github.com/iamkun/dayjs/commit/0606f425aef8ccbfc3da3e43cba368130603b0cc))

## [1.8.25](https://github.com/iamkun/dayjs/compare/v1.8.24...v1.8.25) (2020-04-21)


### Bug Fixes

* Fix CustomParseFormat plugin of parsing only YYYY / YYYY-MM bug ([#873](https://github.com/iamkun/dayjs/issues/873)) ([3cea04d](https://github.com/iamkun/dayjs/commit/3cea04d33d54d44bbdd3d026b5c7f67ebf176116)), closes [#849](https://github.com/iamkun/dayjs/issues/849)
* Fix Duration plugin get seconds ([#867](https://github.com/iamkun/dayjs/issues/867)) ([62b092d](https://github.com/iamkun/dayjs/commit/62b092d9f9a3db5506ef01f798bdf211f163f53f))
* Fix type definition of locale ([9790b85](https://github.com/iamkun/dayjs/commit/9790b853e6113243a7f4a81dd12c6509e406a102))
* Fix UTC plugin startOf, endOf bug ([#872](https://github.com/iamkun/dayjs/issues/872)) ([4141084](https://github.com/iamkun/dayjs/commit/4141084ba96d35cadcda3f1e661bf1d0f6c8e4de)), closes [#809](https://github.com/iamkun/dayjs/issues/809) [#808](https://github.com/iamkun/dayjs/issues/808)

## [1.8.24](https://github.com/iamkun/dayjs/compare/v1.8.23...v1.8.24) (2020-04-10)


### Bug Fixes

* Add config option to RelativeTime plugin ([#851](https://github.com/iamkun/dayjs/issues/851)) ([bd24034](https://github.com/iamkun/dayjs/commit/bd24034b95bfc656024b75ef3f3c986708845fed))
* add Duration plugin ([#858](https://github.com/iamkun/dayjs/issues/858)) ([d568273](https://github.com/iamkun/dayjs/commit/d568273223199ca0497f238e2cc3a8d3dcf32d0f))
* Add en-in, en-tt locales ([#855](https://github.com/iamkun/dayjs/issues/855)) ([c39fb96](https://github.com/iamkun/dayjs/commit/c39fb96e2a9102c14b004c14a6c073af9d266f2f))
* add isToday, isTomorrow, isYesterday plugins ([#857](https://github.com/iamkun/dayjs/issues/857)) ([fc08ab6](https://github.com/iamkun/dayjs/commit/fc08ab68f8a28269802deeab9d6b0473b92cdc51))
* Add option callback to Calendar plugin ([#839](https://github.com/iamkun/dayjs/issues/839)) ([b25be90](https://github.com/iamkun/dayjs/commit/b25be9094325295310c8fc5e617fb058be8a5f68))
* Fix monthsShort for locale fr ([#862](https://github.com/iamkun/dayjs/issues/862)) ([d2de9a0](https://github.com/iamkun/dayjs/commit/d2de9a0b44b830038ed0094f79bfd40726311f2a))
* Update Breton locale (br) meridiem config ([#856](https://github.com/iamkun/dayjs/issues/856)) ([a2a6672](https://github.com/iamkun/dayjs/commit/a2a66720abb788a8f1cffbfd0929b35579f29c72))
* Update Ukrainian (uk) locale relative time ([#842](https://github.com/iamkun/dayjs/issues/842)) ([578bc1a](https://github.com/iamkun/dayjs/commit/578bc1a23c6e737783bbac3da12c0ed5d1edcf82))

## [1.8.23](https://github.com/iamkun/dayjs/compare/v1.8.22...v1.8.23) (2020-03-16)


### Bug Fixes

* Add Chinese (zh) locale ([f9b8945](https://github.com/iamkun/dayjs/commit/f9b89453166d8b53d33b1d7eefd9942022552e6e))
* Fix IsoWeek plugin typescript definition ([#828](https://github.com/iamkun/dayjs/issues/828)) ([30aab0c](https://github.com/iamkun/dayjs/commit/30aab0c7bce85dfac0ae208a891def30f88b5cb4))
* Update Arabic (ar) locale relative time ([#836](https://github.com/iamkun/dayjs/issues/836)) ([14044c6](https://github.com/iamkun/dayjs/commit/14044c6fda1229e3f0e5473d3f886bd79589b15f))
* Update Slovak (sk) locale,  Czech (cs) locale ([#833](https://github.com/iamkun/dayjs/issues/833)) ([f0d451f](https://github.com/iamkun/dayjs/commit/f0d451f795e9ebf752cd854d51b25b11de2343a3))
* Update Thai (th) locale relativeTime ([#826](https://github.com/iamkun/dayjs/issues/826)) ([63b7c03](https://github.com/iamkun/dayjs/commit/63b7c03a6dbb0507d60776e8bad6cccde3828b88)), closes [#816](https://github.com/iamkun/dayjs/issues/816)

## [1.8.22](https://github.com/iamkun/dayjs/compare/v1.8.21...v1.8.22) (2020-03-08)


### Bug Fixes

* Add IsoWeek plugin ([#811](https://github.com/iamkun/dayjs/issues/811)) ([28a2207](https://github.com/iamkun/dayjs/commit/28a2207ef9849afbac15dd29267b2e7a09cd3c16))
* Fix unsupported locale fallback to previous one ([#819](https://github.com/iamkun/dayjs/issues/819)) ([4868715](https://github.com/iamkun/dayjs/commit/48687152cf5bee6a4c1b8ceea4bda8b9bab9be10))

## [1.8.21](https://github.com/iamkun/dayjs/compare/v1.8.20...v1.8.21) (2020-02-26)


### Bug Fixes

* Set + Get accept 'D' as the short version of 'date' ([#795](https://github.com/iamkun/dayjs/issues/795)) ([523c038](https://github.com/iamkun/dayjs/commit/523c03880fa8bbad83214494ad02cd606cdb8b30))
* Update DayOfYear plugin type ([#799](https://github.com/iamkun/dayjs/issues/799)) ([5809652](https://github.com/iamkun/dayjs/commit/5809652e40245b7759827d9bf317abdcfa75a330))
* Update fi (Finnish) locale relativeTime ([#797](https://github.com/iamkun/dayjs/issues/797)) ([4a470fb](https://github.com/iamkun/dayjs/commit/4a470fbd6fef9e051727d0f26d53cc050b85935d))

## [1.8.20](https://github.com/iamkun/dayjs/compare/v1.8.19...v1.8.20) (2020-02-04)


### Bug Fixes

* Add Bislama Locale (bi) ([#780](https://github.com/iamkun/dayjs/issues/780)) ([9ac6ab4](https://github.com/iamkun/dayjs/commit/9ac6ab481bc883dd4ecc02caab12c8b2fc218a42))
* Fix weekOfYear plugin to support yearStart locale for better week number result ([#769](https://github.com/iamkun/dayjs/issues/769)) ([f00db36](https://github.com/iamkun/dayjs/commit/f00db36e70bc7beaca1abadeb30a9b1fbb3261ee))
* Update et (Estonian) locale relativeTime ([#790](https://github.com/iamkun/dayjs/issues/790)) ([d8e0f45](https://github.com/iamkun/dayjs/commit/d8e0f45f6cd2d5e5704b9797929227454c92d1a5))
* Update LocaleData plugin to support dayjs.localeData().weekdays() API ([287fed6](https://github.com/iamkun/dayjs/commit/287fed6db9eb4fd979b4861aca4dacbd32422533)), closes [#779](https://github.com/iamkun/dayjs/issues/779)
* Update LocaleData plugin to support dayjs.months dayjs.weekdays API ([144c2ae](https://github.com/iamkun/dayjs/commit/144c2ae6e15fbf89e3acd7c8cb9e237c5f6e1348)), closes [#779](https://github.com/iamkun/dayjs/issues/779)
* Update pl locale fusional config ([d372475](https://github.com/iamkun/dayjs/commit/d3724758bb27d5b17587b995ba14e7e80dcd1151))

## [1.8.19](https://github.com/iamkun/dayjs/compare/v1.8.18...v1.8.19) (2020-01-06)


### Bug Fixes

* Add UpdateLocale plugin to update a locale's properties ([#766](https://github.com/iamkun/dayjs/issues/766)) ([82ce2ba](https://github.com/iamkun/dayjs/commit/82ce2ba8d7e402e40f6d005d400eb5356a0b0633))
* Fix CustomParseFormat Plugin 'YYYY-MM' use first day of the month ([ba709ec](https://github.com/iamkun/dayjs/commit/ba709eca86a71ae648bc68bf67d9abdc229198d4)), closes [#761](https://github.com/iamkun/dayjs/issues/761)
* Fix CustomParseFormat Plugin to set correct locale ([66ce23f](https://github.com/iamkun/dayjs/commit/66ce23f2e18c5506e8f1a7ef20d3483a4df80087))
* Fix WeekOfYear Plugin wrong calender week number bug ([79b86db](https://github.com/iamkun/dayjs/commit/79b86dbbf3cfd3f1e2165b3d479a7061ad1b6925)), closes [#760](https://github.com/iamkun/dayjs/issues/760)
* Update RelativeTime plugin to support function to make additional processing ([#767](https://github.com/iamkun/dayjs/issues/767)) ([4bd9250](https://github.com/iamkun/dayjs/commit/4bd9250fbe7131e2fddfb5fa1b3350e8c2262ca9))
* Update ru, uk, cs locale to support relativeTime with plural ([3f080f7](https://github.com/iamkun/dayjs/commit/3f080f7d6bfdc4018cbb7c4d0112ff1ead4ef6b8))

## [1.8.18](https://github.com/iamkun/dayjs/compare/v1.8.17...v1.8.18) (2019-12-18)


### Bug Fixes

* Add missing locale type definition ([#716](https://github.com/iamkun/dayjs/issues/716)) ([cde5d0b](https://github.com/iamkun/dayjs/commit/cde5d0b91be7b2f5f3098de4aa0b9a4f0f28ea5c))
* Fix .locale() handel unsupported locale ([78ec173](https://github.com/iamkun/dayjs/commit/78ec173fcecc1299516ab7b44f4554d431b4b2fd))
* Update Italian locale (it) ([#727](https://github.com/iamkun/dayjs/issues/727)) ([5b53e98](https://github.com/iamkun/dayjs/commit/5b53e98c0a3ba0eb9573a9c77caeb907439be9e7))
* Update locale (fa) ([#733](https://github.com/iamkun/dayjs/issues/733)) ([9ad2e47](https://github.com/iamkun/dayjs/commit/9ad2e47e0569b23991bb0d5578f49c792c12df08))
* Update locale (zh-cn) ([#706](https://github.com/iamkun/dayjs/issues/706)) ([e31e544](https://github.com/iamkun/dayjs/commit/e31e54414fb90e1f54da13a117748ba37f52645d))
* Update locale (zh-cn) meridiem ([#735](https://github.com/iamkun/dayjs/issues/735)) ([15d1b81](https://github.com/iamkun/dayjs/commit/15d1b813e7faf5a1f9d1ea6fc673fd27ac49d8b1))
* Update LocaleData plugin to support dayjs().longDateFormat() ([#734](https://github.com/iamkun/dayjs/issues/734)) ([aa0f210](https://github.com/iamkun/dayjs/commit/aa0f210a1e3c4f6aba61c3b96f9eb445b43a33f0)), closes [#680](https://github.com/iamkun/dayjs/issues/680)
* Update Mongolian (mn) locale relativeTime ([#753](https://github.com/iamkun/dayjs/issues/753)) ([6d51435](https://github.com/iamkun/dayjs/commit/6d51435092c0c94d8e50256d3f0f058cdd15febe))
* Update Swedish locale (sv) fix ordinal error ([#745](https://github.com/iamkun/dayjs/issues/745)) ([49670d5](https://github.com/iamkun/dayjs/commit/49670d5ae31e4e21636cc5a8bfe35fef0f6d9e4a)), closes [#743](https://github.com/iamkun/dayjs/issues/743)

## [1.8.17](https://github.com/iamkun/dayjs/compare/v1.8.16...v1.8.17) (2019-11-06)


### Bug Fixes

* Fix set utcOffset in utc mode ([d148115](https://github.com/iamkun/dayjs/commit/d148115dad8f1a5afc0a64e9b8163dfeba4616b6))
* Update advancedFormat plugin to support w ww wo week tokens … ([#678](https://github.com/iamkun/dayjs/issues/678)) ([26cfa63](https://github.com/iamkun/dayjs/commit/26cfa63a524b803f7966dac5464f9cbf8f63387e)), closes [#676](https://github.com/iamkun/dayjs/issues/676)
* Update ka locale weekdays ([f8ca3d4](https://github.com/iamkun/dayjs/commit/f8ca3d4ba1d3cbe41613d3909c0627935a51a0c4))
* Update nb locale ([#679](https://github.com/iamkun/dayjs/issues/679)) ([1063b0e](https://github.com/iamkun/dayjs/commit/1063b0e1b5c19a1354d233cc0f21438e7073233a))
* Update Polish locale (pl)([#713](https://github.com/iamkun/dayjs/issues/713)) ([30d2f02](https://github.com/iamkun/dayjs/commit/30d2f026b47188833a4f44fee4bab52467d4a718))
* Update Ukrainian locale (uk) ([#710](https://github.com/iamkun/dayjs/issues/710)) ([360161c](https://github.com/iamkun/dayjs/commit/360161cac75f597fdd51d9d1ff138601282a1b4b))
* UTC plugin set utcOffset value ([#668](https://github.com/iamkun/dayjs/issues/668)) ([8877883](https://github.com/iamkun/dayjs/commit/88778838e71dd309e79cd1a8094d5bea36ca3390))

## [1.8.16](https://github.com/iamkun/dayjs/compare/v1.8.15...v1.8.16) (2019-08-27)


### Bug Fixes

* Fix relativeTime Plugin .FromNow() result error in UTC mode ([a385d5c](https://github.com/iamkun/dayjs/commit/a385d5c))
* Handle locale in WeekOfYear plugin ([#658](https://github.com/iamkun/dayjs/issues/658)) ([0e45b0a](https://github.com/iamkun/dayjs/commit/0e45b0a))
* LocaleData plugin returns all months and weekdays data when pas no argument ([#645](https://github.com/iamkun/dayjs/issues/645)) ([95e70b4](https://github.com/iamkun/dayjs/commit/95e70b4))
* Return null in toJSON if not valid ([#633](https://github.com/iamkun/dayjs/issues/633)) ([19affc8](https://github.com/iamkun/dayjs/commit/19affc8))
* Update Danish (da) locale ([#626](https://github.com/iamkun/dayjs/issues/626)) ([ac2ec77](https://github.com/iamkun/dayjs/commit/ac2ec77))
* Update Korean locale meridiem ([#642](https://github.com/iamkun/dayjs/issues/642)) ([b457146](https://github.com/iamkun/dayjs/commit/b457146))
* update Occitan locale Catalan locale ([#630](https://github.com/iamkun/dayjs/issues/630)) ([fef135e](https://github.com/iamkun/dayjs/commit/fef135e))
* update pt-br locale ([#628](https://github.com/iamkun/dayjs/issues/628)) ([ccf596d](https://github.com/iamkun/dayjs/commit/ccf596d))
* Update weekdaysShort to some locale files ([#643](https://github.com/iamkun/dayjs/issues/643)) ([cc1f15f](https://github.com/iamkun/dayjs/commit/cc1f15f))

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
