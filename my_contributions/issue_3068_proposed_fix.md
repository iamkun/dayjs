# Proposed Fix for Day.js Issue #3068

## Summary

When a named IANA timezone has a zero offset at the converted instant, such as
`Europe/London` during GMT, `Dayjs#tz` currently treats that timezone as UTC.
This makes the default `format()` output end in `Z` instead of `+00:00` and
sets the internal UTC-mode flag even though the requested timezone is a named
geographic timezone.

The root cause is in both the timezone and UTC plugins:

1. `src/plugin/timezone/index.js` sets `isUTC` whenever `offset` is zero.
2. `src/plugin/utc/index.js` sends `utcOffset(0, true)` to `.utc()` before it
   handles `keepLocalTime`, so the zero-offset non-UTC case cannot retain its
   non-UTC mode.

## Proposed Change

In `src/plugin/timezone/index.js`, reserve UTC mode for explicitly requested
UTC zones:

```javascript
const isUTC = timezone === 'UTC' || timezone === 'Etc/UTC'
```

In `src/plugin/utc/index.js`, handle `keepLocalTime` before the zero-offset
shortcut. The relevant logic should be ordered as follows:

```javascript
let ins = this.clone()

if (keepLocalTime) {
  ins.$offset = offset
  ins.$u = false
  return ins
}

if (offset === 0) {
  return this.utc(keepLocalTime)
}
```

This allows named zero-offset zones to take the non-UTC timezone path and
retain `$offset = 0` with `$u = false`, while explicit `UTC` and `Etc/UTC`
conversions keep their existing `Z` formatting.

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
- Negative and positive offsets in `America/New_York` and `Asia/Tokyo`.
- Adding one hour preserving the expected timestamp.

The existing runtime drafts `scratch/test_fix.mjs` and
`scratch/test_full_suite.mjs` also printed the expected values for their
covered cases.

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

The repository's Jest suite was not run because dependencies are not installed
(`node_modules` is absent). The in-memory checks do not replace the full
project test suite.

## Change Status

This document records the proposed change and its runtime verification only.
No source code or existing project files were modified.
