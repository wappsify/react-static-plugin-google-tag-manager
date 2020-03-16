import React from 'react';
import { GtmComponentProps, PreventloadingByCookie } from './types';

export const Script: React.FC<GtmComponentProps> = ({
  id,
  preventloadingByCookie,
}) => (
  <>
    {loadScript(preventloadingByCookie) && (
      <script
        key="gtm"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${id}');`,
        }}
      />
    )}
  </>
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

const loadScript = (
  preventloadingByCookie: PreventloadingByCookie
): boolean => {
  if (typeof document !== undefined) {
    return (
      getCookieValue(preventloadingByCookie.cookieName) ===
      preventloadingByCookie.value
    );
  }

  return true;
};

function getCookieValue(cookieName: string): string | boolean {
  const value = document.cookie.match(
    '(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)'
  );
  return value ? value.pop() : '';
}
