/**
 * Resolve a file from `public/` against Astro's configured deployment base.
 * GitHub project pages are served from `/<repository>/`, not from `/`.
 */
export const publicPath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
