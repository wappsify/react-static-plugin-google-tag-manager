# react-static-plugin-google-tag-manager 📈

![License](https://img.shields.io/github/license/wappsify/react-static-plugin-google-tag-manager.svg)
![David dependencies](https://david-dm.org/wappsify/react-static-plugin-google-tag-manager.svg)

This plugin adds the GTM script tag to your HTML files. You only need to supply the GTM ID.

## Installation

In an existing react-static site run:

```bash
$ yarn add -D react-static-plugin-google-tag-manager
```

Then add the plugin to your `static.config.js`:

```javascript
export default {
  plugins: [
    [
      'react-static-plugin-google-tag-manager',
      {
        // example configuration
        id: 'your-gtm-id-here',
        debug: true,
      },
    ],
  ],
};
```

## Options

In your `static.config.js`, you should pass configuration options to the plugin.

### `id: string`

Pass your Google Tag Manager ID in here. The plugin will not work without it.

### `debug: boolean`

Default value: `false`

When setting `debug` to `true`, the plugin will not check for `stage === 'prod'` and instead always inject the GTM. Useful for debugging data layer events and such locally.
