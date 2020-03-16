export interface GtmComponentProps {
  id: string;
  preventloadingByCookie?: PreventloadingByCookie;
}

export interface GTMPluginOptions {
  id: string;
  debug?: boolean;
  preventloadingByCookie?: PreventloadingByCookie;
}

export interface PreventloadingByCookie {
  cookieName: string;
  value: string | number;
}

/**
 * Unfortunately react-static does not provide typings for the plugin hooks.
 * So this returns `any` for now…
 */
export type GTMPlugin = (options: GTMPluginOptions) => any;
