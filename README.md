# react-static-plugin-google-tag-manager

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
        id: 'your-gtm-id-here'
      }
    ]
  ]
};
```

## Options

In your `static.config.js`, you should pass configuration options to the plugin.

### `id: string`

Pass your Google Tag Manager ID in here. The plugin will not work without it.
