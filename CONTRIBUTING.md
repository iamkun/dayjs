# Contributing to Day.js

Thank you for taking the time to read our contribution guidelines. You can start contributing in many ways like filing bug reports, [improving the locale and documentation](https://github.com/iamkun/dayjs/issues/171), or helping others.

Our open source community strives to be nice, welcoming and professional. Instances of abusive, harassing, or otherwise unacceptable behavior will not be tolerated.

## Style

* Day.js is written in ES6.
* We use ESLint to check our code. You can use `npm run lint` before submitting a pull request.
* Please use semantic commit message.

## Bugs

* Before submitting a bug report, search the issues for similar tickets. Your issue may have already been discussed and resolved. 
* Feel free to add a comment to an existing issue, even if it's closed.
* Be thorough in your title and report, don't leave out important details.
* English, please.

## Tests

* Feel free to create a new `test/*.test.js` file if none of the existing test files suits your test case.
* Help us keep 100% test coverage :D.
* You can use `npm test` before submitting a pull request.
* Results depend on your computer's time zone. Day.js reads and formats dates in the machine's local time, and some tests use fixed UTC timestamps such as `new Date(0)`, so their expected values assume a machine at or ahead of UTC. On a machine behind UTC (e.g. anywhere in the Americas) a few tests, such as in `dayOfYear` and `localizedFormat`, fail even on a clean checkout. CI runs in UTC, so run `TZ=UTC npm test` locally to match it.
* `npm test` also re-runs the timezone tests under several fixed time zones (`cross-env TZ=...`). If you change timezone or DST behaviour, test it with the machine set to zones on both sides of UTC, and use `MockDate` when a result depends on today's date.
