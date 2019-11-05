export interface GtmComponentProps {
  id: string;
}

export interface GTMPluginOptions {
  id: string;
  debug?: boolean;
}

/**
 * Unfortunately react-static does not provide typings for the plugin hooks.
 * So this returns `any` for now…
 */
export type GTMPlugin = (options: GTMPluginOptions) => any;
