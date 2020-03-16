export interface GtmComponentProps {
  id: string;
  cookieRestriction?: CookieRestriction;
}

export interface GTMPluginOptions {
  id: string;
  debug?: boolean;
  cookieRestriction?: CookieRestriction;
}

export interface CookieRestriction {
  cookieName: string;
  value: string | number;
}

/**
 * Unfortunately react-static does not provide typings for the plugin hooks.
 * So this returns `any` for now…
 */
export type GTMPlugin = (options: GTMPluginOptions) => any;
