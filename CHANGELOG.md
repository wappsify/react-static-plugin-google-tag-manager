# Changelog

## Unpublished

- Update all dependencies

## v1.1.2 (2020-03-16)

- Add `prepublish` task in `package.json`
- Update dependencies
- Fix GTM being included twice in built HTML when debug is true (#4)
- When debug is true, the plugin will now inject the GTM script in dev server as well
- Multiple small refactorings (extract helpers into their own file)
- Feature: add option to restrict loading of script based on the value of a cookie

## v1.1.1 (2019-11-07)

- Fix `debug` flag not inserting `<script>` tag in development mode

## v1.1.0 (2019-11-05)

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
