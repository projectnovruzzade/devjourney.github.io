# Orbit

Orbit is being evolved from a Lovable-generated React/TanStack Start prototype
into a production platform.

## Current Architecture Direction

```txt
src/
  app/       application-wide providers, bootstrapping, and composition
  routes/    TanStack file routes; keep these thin
  features/  product workflows and domain-owned UI/data/schema modules
  shared/    reusable API, config, lib, type, and UI primitives
  server/    backend-only auth, database, services, integrations
```

The existing Lovable UI and brand components remain the visual foundation. New
product code should move into feature folders first, then be composed from
route files.

## Local Checks

```bash
npm run typecheck
npm run lint
npm run check
```

This repo currently has a `bun.lock`, but Bun is not available in the checked
environment. Install dependencies with the package manager the project will use
before running checks.
