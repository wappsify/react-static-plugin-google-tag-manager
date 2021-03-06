import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import cheerio from 'cheerio';
import { Script, NoScript } from './GtmComponents';
import { GTMPlugin } from './types';

const gtmPlugin: GTMPlugin = ({ id, debug = false, cookieRestriction }) => {
  let shouldInsert = false;
  const idExists = typeof id === 'string';

  const cache = {
    script: undefined,
    noscript: undefined,
  };

  return {
    // we use the afterExport hook only for showing a warning
    afterExport: () => {
      if (shouldInsert && !idExists) {
        console.warn(
          'Warning: react-static-plugin-google-tag-manager - No Google Tag Manager ID was provided, will not insert GTM script.'
        );
      }
    },

    // we insert the GTM <script> and <noscript> tags in beforeDocumentToFile
    beforeDocumentToFile: (html: string, { stage }) => {
      if (!shouldInsert) shouldInsert = stage === 'prod' || debug;

      if (shouldInsert && idExists) {
        const $ = cheerio.load(html);

        if (!cache.script && !cache.noscript && !debug) {
          cache.script = renderToStaticMarkup(
            <Script id={id} cookieRestriction={cookieRestriction} />
          );
          cache.noscript = renderToStaticMarkup(
            <NoScript id={id} cookieRestriction={cookieRestriction} />
          );
        }

        $('head').prepend(cache.script);
        $('body').prepend(cache.noscript);

        return $.html();
      }

      return html;
    },
  };
};

export default gtmPlugin;
