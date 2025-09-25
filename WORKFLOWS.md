# GitHub Actions Workflows

## 1) CI Pipeline (`.github/workflows/ci.yml`)
**Purpose:** Lint code (ESLint + Prettier check), run unit tests with coverage (≥80%), upload coverage to Codecov, then build and upload artifacts.  
**Triggers:** Pushes to `main` and `develop`, PRs targeting `main`.  
**Job order:** `lint` → `test` (needs lint) → `build` (needs test).  
**Artifacts:** `coverage/` and `dist/`.  
**Secrets:** `CODECOV_TOKEN` (only for private repos).  
**Troubleshooting:**
- Lint fails: run `npm run lint:fix` locally.
- Coverage <80%: expand tests; run `npm test -- --coverage`.
- Codecov upload error: confirm token (private repos) and that `coverage/` exists.

## 2) Daily Dependency Audit (`.github/workflows/dependency-audit.yml`)
**Purpose:** Security audit via `npm audit` daily; creates a GitHub Issue if any vulnerabilities are detected.  
**Triggers:** Daily cron at 13:00 UTC; manual dispatch.  
**Permissions:** `issues: write` required for issue creation.  
**Troubleshooting:** If no issue appears, check the job logs and ensure repo Issues are enabled.

## 3) Deploy to GitHub Pages (`.github/workflows/deploy.yml`)
**Purpose:** Build static site to `dist/` and deploy to GitHub Pages.  
**Triggers:** Pushes to `main`, manual dispatch.  
**Environment Variables:** `NODE_ENV`, `APP_NAME`.  
**Permissions:** `pages: write`, `id-token: write`.  
**Setup:** In **Settings → Pages**, set “Build and deployment” to “GitHub Actions”.  
**Troubleshooting:** Ensure `dist/index.html` exists in the Pages artifact.

## Reusable Composite Action (`.github/actions/setup-and-install`)
Sets up Node, enables npm caching, and runs `npm ci` to keep workflows DRY.
