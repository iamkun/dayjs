# Fix for Day.js Issue #3068

## Summary

When a named IANA timezone has a zero offset at the converted instant, such as
`Europe/London` during GMT, `Dayjs#tz` currently treats that timezone as UTC.
This makes the default `format()` output end in `Z` instead of `+00:00` and
sets the internal UTC-mode flag even though the requested timezone is a named
geographic timezone.

The initial fix avoided UTC mode for named zero-offset zones, but reparsing a
localized wall-clock string still made the result depend on the host timezone.
For example, `02:30` is a valid London time on 2026-03-08, but it falls in
New York's spring-forward gap and is normalized to `03:30` when parsed as a
host-local time.

The corrected implementation constructs zero-offset dates from their
timestamp using UTC fields, then records them as offset-mode dates with
`$offset = 0` and `$u = false`. The UTC plugin reads those cached fields in
UTC and treats the explicit zero host-offset adjustment as zero, preserving
both the wall-clock time and instant without parsing a host-local date.

## Implementation

`src/plugin/timezone/index.js` reserves UTC mode for explicitly requested
`UTC` and `Etc/UTC` zones. Named geographic zero-offset zones use a timestamp-
based construction path for both `.tz()` conversion and `dayjs.tz()` parsing.
The same representation is used for `keepLocalTime` conversions, with the
existing offset adjustment applied afterward.

`src/plugin/utc/index.js` initializes zero-offset instances from UTC date
fields and honors an explicit zero local-offset adjustment when calculating
`valueOf()`. Explicit UTC conversions and parsing retain UTC mode and `Z`
formatting.

## Verification Performed

The candidate changes were applied in memory to the local plugin modules and
tested without saving changes to source files. Assertion-based checks passed
for:

- `Europe/London` in winter formatting as
  `2021-10-31T15:00:00+00:00`, with `$u === false`, offset `0`, and the
  original timestamp unchanged.
- `startOf('day')` on the reported date formatting as
  `2021-10-31T00:00:00+01:00`.
- Same-instant conversion from London to Paris.
- Summer London (`+01:00`) and named zero-offset zones `Africa/Abidjan`,
  `Atlantic/Reykjavik`, and `Africa/Accra`.
- Explicit `UTC` and `Etc/UTC` retaining `Z`.
- Host-DST gap regressions under `TZ=America/New_York` for both
  `dayjs(...).tz('Europe/London')` and `dayjs.tz(..., 'Europe/London')`,
  including their expected timestamps.
- Negative and positive offsets in `America/New_York` and `Asia/Tokyo`.
- Adding one hour preserving the expected timestamp.

The targeted timezone plugin suite under `TZ=America/New_York` passed all new
zero-offset regression cases. The suite also reports one unrelated existing
fall-back overlap parsing failure: Day.js chooses `-05:00` where the test
expects Moment's `-04:00`.

### Rejected Shortcut

`scratch/verify_proposed_fix.mjs` only calls the original `.tz()` and then
changes `$u` and `$offset` on the result. Although that makes the output end
in `+00:00`, it does not repair the timestamp: the script reports
`valueOf() === 1635712200000` instead of the original
`1635692400000`. Do not use this metadata-only workaround.

## Scope and Test Limitations

The candidate fix addresses the zero-offset UTC-mode conflation and the
reported formatting/state behavior. It does not make every later
`.add()`/`.subtract()` operation recalculate an IANA timezone's offset after
crossing a daylight-saving transition; that behavior is separate from this
change and should not be inferred as fixed by these checks.

The complete timezone plugin suite was run under `TZ=America/New_York`; it
reported 58 passing tests and the unrelated fall-back overlap failure noted
above. The full project test suite was not run.

## Change Status

The source implementation and regression tests are included in the working
tree.
