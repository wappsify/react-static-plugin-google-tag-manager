import React from 'react';
import { GtmComponentProps, CookieRestriction } from './types';

const gtmScript = (
  id: string
) => `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${id}');`;

const wrapWithCookieRestriction = (
  id: string,
  restriction?: CookieRestriction
) => {
  if (restriction) {
    return `var crp_=('; '+document.cookie).split('; '+'${
      restriction.cookieName
    }'+'='); if (crp_.length===2&&crp_.pop().split(';').shift()==='${
      restriction.value
    }') {${gtmScript(id)}}`;
  }

  return gtmScript(id);
};

export const Script: React.FC<GtmComponentProps> = ({
  id,
  cookieRestriction,
}) => (
  <script
    key="gtm"
    dangerouslySetInnerHTML={{
      __html: wrapWithCookieRestriction(id, cookieRestriction),
    }}
  />
);

export const NoScript: React.FC<GtmComponentProps> = ({ id }) => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${id}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);
