import React from 'react';
import cheerio from 'cheerio';

export default ({ id, debug = false }) => ({
  afterExport: ({ stage }) => {
    if (stage === 'prod' || debug) {
      if (!id) {
        console.warn(
          'Warning: react-static-plugin-google-tag-manager - No Google Tag Manager ID was provided, will not insert GTM script.'
        );
      }
    }
  },

  headElements: (elements: React.ReactNodeArray, { stage }) => {
    if (stage === 'prod' && id) {
      return [
        <script
          key="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${id}');`,
          }}
        />,
        ...elements,
      ];
    }

    return elements;
  },

  beforeDocumentToFile: (html: string, { stage }) => {
    if ((stage === 'prod' || debug) && id) {
      const $ = cheerio.load(html);

      $('body')
        .prepend(`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`);

      return $.html();
    }

    return html;
  },
});
