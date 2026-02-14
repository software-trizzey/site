# AGENTS.md

Repository-specific guidance for coding agents working in this project.

## 1) Project Snapshot

- Stack: Next.js App Router + MDX + TypeScript + Tailwind CSS.
- Package manager: pnpm (`packageManager: pnpm@10.28.0`).
- Runtime target: Node.js `>=25.0.0` (`.nvmrc` is `v25`).
- Deployment target: Vercel-style Next app (static + server features).
- Database access: `postgres` client used in `next.config.ts` redirects.

## 2) Rules Files Check

- `.cursor/rules/`: not present.
- `.cursorrules`: not present.
- `.github/copilot-instructions.md`: not present.
- Therefore, this file is the canonical in-repo agent guidance.

## 3) Setup Commands

- Install deps: `pnpm install`
- Use Node 25 with pnpm-managed Node (if needed):
  - `pnpm env use --global 25`
  - verify with `node --version`
- Start dev server: `pnpm dev`
- Production build: `pnpm build`
- Run prod server locally: `pnpm start`

## 4) Build / Lint / Test Matrix

Current scripts from `package.json`:

- `pnpm dev`
- `pnpm build`
- `pnpm start`
- `pnpm run delete` (project-specific cleanup command)

Lint status:

- No lint script is currently configured.
- No ESLint config file is currently present.
- Do not assume `pnpm lint` works in this repo unless you add lint tooling.

Test status:

- No test framework is currently configured.
- No `*.test.*` or `*.spec.*` files currently exist.

Single-test guidance (important):

- There is no single-test command today because there are no tests.
- If you add a test framework, also add a documented single-test command.
- Preferred convention when tests are introduced:
  - file-level: `pnpm test path/to/file.test.ts`
  - test-name-level: `pnpm test path/to/file.test.ts -t "case name"`

Minimum verification before opening PRs/commits:

- Run `pnpm build` and ensure it succeeds.
- For content-only MDX edits, still run `pnpm build` to catch MDX/runtime issues.

## 5) Code Organization Conventions

- `app/` contains routes and MDX pages.
- Posts live under `app/posts/.../page.mdx`.
- Projects live under `app/projects/<slug>/page.mdx`.
- Shared constants live in `app/lib/constants.ts`.
- Global layout is in `app/layout.tsx`.
- Sitemap logic is in `app/sitemap.ts`.

When adding a new project page:

- Create `app/projects/<slug>/page.mdx`.
- Export `metadata` with title + canonical URL.
- Use `ROUTES.PROJECTS` for canonical path composition.
- Add a link entry in `app/page.mdx` under "Projects".

## 6) Import and Module Style

Observed import style:

- Use ES module syntax (`import ... from ...`).
- Prefer single quotes.
- Keep semicolons.
- Keep external imports before local imports.
- In Next layout files, CSS side-effect import first (e.g. `import './globals.css';`).

Path style:

- TS/TSX commonly uses alias imports (`@/...`) when convenient.
- MDX pages currently use relative imports; follow local file patterns.
- Do not churn import paths only for style if behavior is unchanged.

## 7) TypeScript Guidelines

- `strict` mode is enabled; preserve strictness.
- Avoid `any`; use concrete types or narrow unknown values.
- Prefer explicit return shapes for exported functions when non-trivial.
- Use `Readonly<{ ... }>` for React props where appropriate.
- Keep `as const` for literal maps like route constants.
- Avoid default parameter values unless truly necessary.

## 8) React / Next.js Guidelines

- Prefer small, focused components.
- Keep component names in PascalCase.
- Keep helper/function names in camelCase.
- Use App Router metadata exports on page/layout modules.
- Preserve static-first behavior where possible.
- Do not introduce client components unless interactivity requires it.

MDX page pattern:

- Optional imports at top.
- `export const metadata = { ... }` near top.
- Content sections with concise headings.
- Use existing visual patterns (`<blockquote className="aside">`, `AnimatedName`).

## 9) Naming Conventions

- Files for routes: `page.mdx`, `layout.tsx`, `sitemap.ts`.
- Component identifiers: PascalCase (`AnimatedName`, `RootLayout`).
- Variables/functions: camelCase (`nextConfig`, `getPostsSlugs`).
- Constants object names: UPPER_SNAKE for exported maps (`ROUTES`).
- Route slugs: kebab-case (`project-teapot`, `rust-bitcoin-price-tracker`).

## 10) Error Handling and Safety

- Guard environment-dependent logic early.
  - Example: return empty redirects if `POSTGRES_URL` is absent.
- Prefer safe fallbacks over hard crashes for optional platform features.
- Do not silently swallow errors when adding new runtime logic.
- Keep transformations explicit and predictable.

## 11) Formatting and Editing Expectations

- Follow existing formatting in touched files; avoid unrelated reformatting.
- Keep diffs focused and minimal.
- Do not add comments unless they clarify non-obvious logic.
- Preserve ASCII unless file already requires non-ASCII glyphs.

## 12) Dependency and Tooling Notes

- Build scripts for `sharp` are allowlisted via:
  - `"pnpm": { "onlyBuiltDependencies": ["sharp"] }`
- If install warnings reappear, verify this field remains intact.
- Do not reintroduce Bun lockfiles or npm lockfiles.
- Canonical lockfile is `pnpm-lock.yaml`.

## 13) Git and Change Hygiene for Agents

- Do not revert user-authored unrelated changes.
- Keep commits scoped to the requested task.
- Run `pnpm build` before proposing commit/push.
- If adding tooling (lint/tests), document commands in this file.

## 14) Quick Pre-Completion Checklist

- Dependencies installed with pnpm.
- Node version compatible (`>=25`).
- Changed routes render and metadata is valid.
- `pnpm build` passes.
- Homepage links updated for new posts/projects when applicable.
- No accidental lockfile/package-manager regressions.
