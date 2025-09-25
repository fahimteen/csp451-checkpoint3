# Checkpoint 3 — CI/CD

[![CI](https://github.com/<YOUR_USER_OR_ORG>/<YOUR_REPO>/actions/workflows/ci.yml/badge.svg)](https://github.com/<YOUR_USER_OR_ORG>/<YOUR_REPO>/actions/workflows/ci.yml)
[![Deploy to Pages](https://github.com/<YOUR_USER_OR_ORG>/<YOUR_REPO>/actions/workflows/deploy.yml/badge.svg)](https://github.com/<YOUR_USER_OR_ORG>/<YOUR_REPO>/actions/workflows/deploy.yml)
[![codecov](https://codecov.io/gh/<YOUR_USER_OR_ORG>/<YOUR_REPO>/branch/main/graph/badge.svg)](https://codecov.io/gh/<YOUR_USER_OR_ORG>/<YOUR_REPO>)

This repository contains:
- CI pipeline (ESLint + Prettier check, Jest with coverage ≥80%, build, artifacts)
- Daily dependency audit that opens a GitHub Issue on vulnerabilities
- Deploy to GitHub Pages on push to `main`
- A reusable composite action for setup/install
- Workflow documentation in `WORKFLOWS.md`
