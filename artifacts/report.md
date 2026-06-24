# Sourcey Documentation for Day.js

## Summary

Comprehensive Sourcey-generated API documentation for [Day.js](https://day.js.org), a 2kB immutable date-time library alternative to Moment.js with 47k+ GitHub stars. This delivery covers 10 documentation pages spanning the full Day.js API surface, built and deployed via Sourcey 3.6.4.

## Scope

- 10 markdown pages covering: Introduction, Installation, Parsing, Get/Set, Manipulating, Displaying, Querying, Formatting, Plugins, I18n
- Search-enabled documentation site with responsive design
- Open Graph images for social sharing
- LLM-ready context files (llms.txt, llms-full.txt)

## Deployment URL

- Live site: https://codeboost-tr.github.io/dayjs/
- Source repository: https://github.com/codeboost-tr/dayjs (gh-pages branch)
- Upstream PR: https://github.com/iamkun/dayjs/pull/3148

## Ecosystem Differentiation

| Feature | Day.js | Moment.js | Luxon | date-fns |
|---------|--------|-----------|-------|----------|
| Size | 2kB | 232kB | 23kB | 21kB (tree-shaken) |
| Immutable | Yes | No | Yes | Yes |
| Moment-compatible API | Yes | - | No | No |
| Plugin system | Yes | No | No | No |
| I18n | 100+ locales built-in | Via separate files | Native Intl | Via separate imports |
| Tree-shakeable | Partial (plugins) | No | Yes | Yes |

## Quality Features

- Full-text search across all pages
- Mobile-responsive layout
- OG images for all pages
- Sourcey's built-in syntax highlighting for code examples
- LLM-ready content export
- Canonical sitemap.xml

## Maintainer-Facing Gaps

- No automated sync with Day.js upstream releases (version pinning is manual)
- Does not cover Day.js Pro plugins or TypeScript types in depth
- Missing interactive playground / REPL integration
- No automated i18n coverage tracking
