# Changelog

## v1.1.0 (2019-11--5)

- Update devDependencies
- Add `@types/cheerio` in devDependencies (for full typing for `cheerio`)
- Add `.prettierrc` file for consistent Prettier settings
- Refactor: Move React components into external file `GtmComponents.tsx`
- Refactor: Use `renderToStaticMarkup` of `react-dom/server` for generation of inline scripts
- Refactor: Stop using `headElements` plugin hook, add all `<script>` and `<noscript>` tags in `beforeDocumentToFile`
- Add cache for static markup, so plugin computes injected strings only once
- Add typings for options and plugin function itself

## v1.0.4 (2019-11-04)

- Add `debug` option for easier debugging.

## v1.0.3 (2019-07-18)

- Switch to Typescript for plugin code
- Add CHANGELOG.md
- Add plugin name prefix to console warning when not providing GTM ID
