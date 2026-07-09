# Layouts

The GitHub Pages production build has one layout family:

- `landing/` is for the public single-page landing surface.

Routes stay in `src/routes` because TanStack Start owns file-based routing there.
Use the landing layout from route files instead of duplicating shared shell
markup in each page.

Authentication and role-specific layouts were pruned from this deployment.
