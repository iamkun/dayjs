# Introduction to Day.js

**Day.js** is a minimalist JavaScript date library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.

## Why Day.js?

- **Tiny size**: Only ~2KB gzipped (`dayjs.min.js`), max 2.99 KB. Compare to Moment.js at ~67KB.
- **Immutable**: All API operations that change the Day.js object return a new instance instead of mutating the original.
- **Chainable**: Methods can be chained naturally: `dayjs().startOf('month').add(1, 'day').format('YYYY-MM-DD')`.
- **Plugin architecture**: Core is minimal; extend with plugins only when you need them.
- **i18n**: Internationalization support with locale files loaded on demand.
- **TypeScript support**: Type definitions included via `index.d.ts`.
- **Moment.js-compatible API**: Familiar API patterns for anyone who has used Moment.js.

## Key Concepts

### Immutability

Once a Day.js object is created, it cannot be changed. Any operation that modifies the date returns a **new** Day.js instance:

```javascript
const d1 = dayjs();
const d2 = d1.add(1, 'day');
// d1 is unchanged, d2 is a new Day.js object
```

### Chaining

Day.js methods can be chained together:

```javascript
dayjs()
  .startOf('month')
  .add(7, 'day')
  .set('hour', 8)
  .format('YYYY-MM-DD HH:mm:ss');
// e.g. "2024-06-08 08:00:00"
```

### Plugin System

The core library is intentionally minimal. Additional features are loaded via plugins:

```javascript
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

dayjs('2020-01-01').fromNow(); // "4 years ago"
```

## Comparison with Moment.js

| Feature | Day.js | Moment.js |
|---------|--------|-----------|
| Size | ~2KB gzipped | ~67KB gzipped |
| Immutable | Yes | No |
| Plugin system | Yes | No |
| API compatibility | High | — |
| Tree-shakeable | Yes | No |
