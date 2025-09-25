# Setup & Install (Composite Action)
Sets up Node.js, enables npm caching, and installs dependencies using `npm ci`.

## Inputs
- `node-version` (default `20`)

## Example
```yaml
- uses: ./.github/actions/setup-and-install
  with:
    node-version: '20'
```
