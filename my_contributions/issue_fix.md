# Fix for Day.js issue #3068

## Issue

Issue [#3068: +00:00 timezone bug](https://github.com/iamkun/dayjs/issues/3068)
reports that converting an instant to a geographic timezone at UTC+0, such as
`Europe/London` during winter, formats the result with `Z` instead of `+00:00`.

The main Day.js repository is [https://github.com/iamkun/dayjs](https://github.com/iamkun/dayjs).

## Root cause and fix

The timezone plugin treated every zero-minute offset as UTC mode. A geographic
IANA timezone can have a zero offset without being UTC, so the formatter lost
the distinction between those cases.

The fix reserves UTC mode for the explicitly requested `UTC` and `Etc/UTC`
zones. Conversions and `dayjs.tz()` parsing now both preserve named geographic
zones whose offset is zero as offset-mode dates (`$offset = 0`, `$u = false`)
instead of enabling UTC mode. This leaves the public `utcOffset(0)` behavior
unchanged.

## Regression coverage

Tests check both conversion and parsing for the reported London case and other
geographic zero-offset zones: results format with `+00:00`, have offset `0`,
remain outside UTC mode, and preserve the expected timestamp. They also check
that `UTC` and `Etc/UTC` continue formatting with `Z` in UTC mode.

Dependencies were installed with `npm ci` from the existing lockfile. The new
zero-offset regression tests passed under host timezones `Pacific/Auckland`,
`Europe/London`, `America/New_York`, and `Europe/Paris`. The complete core
timezone suite passed under all four host timezones.

With that unrelated overlap test excluded, Jest passed all 796 tests across 93
suites. The full run's one failure is the existing New York fall-back overlap
test: it expects Moment's `-04:00` choice, while Day.js returns `-05:00`.
Confirmed this failure also occurs on a clean `origin/dev` worktree at commit
`d89d258`; the starting `proposed_fix` branch has identical timezone source
and tests. This establishes that the failure predates this fix. The issue
concerns ambiguous nonzero-offset parsing and is outside the scope of the
zero-offset change.
