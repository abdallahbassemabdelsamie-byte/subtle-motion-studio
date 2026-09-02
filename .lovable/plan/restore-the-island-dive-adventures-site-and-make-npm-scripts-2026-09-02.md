# Restore the Island Dive Adventures site and make npm scripts work

## What I found

The project currently in the workspace is the untouched blank starter: `src/routes/index.tsx` still renders the placeholder image and there are no site pages, components, or tour data. The uploaded `island-dive-adventures-main` archive contains the full site (home, about, contact, Hurghada, Marsa Alam, tour detail pages, header, tour data, image asset pointers, shadcn UI components).

Checks on the uploaded code:
- Every third-party import in it (Radix, lucide, sonner, recharts, embla, vaul, react-hook-form, TanStack) is already listed in the project's `package.json` — no missing dependencies.
- `vite.config.ts` and `tsconfig.json` are byte-identical to the current ones.
- The only `package.json` difference is an older `@lovable.dev/vite-tanstack-config` version in the archive; the current, newer one stays.
- The archive also carries a stray duplicate stylesheet at `src/routes/styles.css` (a copy of `src/styles.css`) which should not be restored.

So the real issue is missing app files, not a broken toolchain. This project is already React + Vite + TypeScript with Node/npm-compatible scripts; it uses TanStack Start (the Vite-based React framework on this platform), which I'll keep — swapping routers/frameworks isn't supported here and would throw away the routing and SEO setup.

## What I'll do

1. Copy the site source from the archive into the project (routes, components, data, assets pointers, public files), excluding any git metadata and the duplicate `src/routes/styles.css`.
2. Keep the existing `vite.config.ts`, `tsconfig.json`, `src/server.ts`, `src/start.ts`, and dependency versions.
3. Let the router regenerate `src/routeTree.gen.ts` so all restored routes register.
4. Confirm `package.json` scripts are correct and npm-runnable:
   - `dev`: `vite dev`
   - `build`: `vite build`
   - `preview`: `vite preview`
   (`vite dev` is required instead of bare `vite` so the SSR dev server starts; it is still plain Vite and works under `npm run dev`.)
5. Verify with a clean `npm install`, then run the dev server and load every page to confirm no runtime errors, no invalid imports, and that design plus per-route SEO metadata render as before.

## Technical notes

- Restore via `rsync --exclude=.git` from the extracted archive so repository metadata is never overwritten.
- Verification: `npm install`, typecheck, dev-server smoke test of `/`, `/about`, `/contact`, `/hurghada`, `/marsa-alam`, and one `/tour/$slug` page, plus a production `vite build`.
- If `npm install` trips on the bun lockfile, I'll let npm generate its own `package-lock.json` and keep both lockfiles consistent with the same dependency versions.
