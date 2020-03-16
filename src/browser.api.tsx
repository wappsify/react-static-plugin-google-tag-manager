import React from 'react';
import { GTMPlugin } from './types';
import { checkCookieRestriction } from './helpers';

const gtmPlugin: GTMPlugin = ({ id, debug = false, cookieRestriction }) => {
  const idExists = typeof id === 'string';

  return {
    Root: Root => props => {
      if (debug && idExists && checkCookieRestriction(cookieRestriction)) {
        (function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          //@ts-ignore
          j.async = true;
          //@ts-ignore
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', id);
      }

      return <Root {...props} />;
    },
  };
};

export default gtmPlugin;
