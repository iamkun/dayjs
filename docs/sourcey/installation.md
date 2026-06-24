# Installation

## npm

```bash
npm install dayjs --save
```

```javascript
import dayjs from 'dayjs';
// CommonJS
const dayjs = require('dayjs');
```

## CDN

### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script>
  dayjs().format();
</script>
```

### UNPKG

```html
<script src="https://unpkg.com/dayjs@1/dayjs.min.js"></script>
<script>
  dayjs().format();
</script>
```

## Package Managers

### Yarn

```bash
yarn add dayjs
```

### pnpm

```bash
pnpm add dayjs
```

## Quick Start

Once installed, creating and formatting dates is straightforward:

```javascript
const now = dayjs();
console.log(now.format()); // "2024-06-24T10:30:00+03:00"

const parsed = dayjs('2024-01-15');
console.log(parsed.format('YYYY-MM-DD')); // "2024-01-15"

const manipulated = dayjs().add(7, 'day');
console.log(manipulated.format('dddd, MMMM D, YYYY'));
```
