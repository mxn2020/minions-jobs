# minions-jobs

**Canonical schemas for job postings and extracted signals across freelance platforms**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-jobs/sdk minions-sdk

# Python
pip install minions-jobs

# CLI (global)
npm install -g @minions-jobs/cli
```

---

## CLI

```bash
# Show help
jobs --help
```

---

## Python SDK

```python
from minions_jobs import create_client

client = create_client()
```

---

## Project Structure

```
minions-jobs/
  packages/
    core/           # TypeScript core library (@minions-jobs/sdk on npm)
    python/         # Python SDK (minions-jobs on PyPI)
    cli/            # CLI tool (@minions-jobs/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [jobs.minions.help](https://jobs.minions.help)
- Blog: [jobs.minions.blog](https://jobs.minions.blog)
- App: [jobs.minions.wtf](https://jobs.minions.wtf)

---

## License

[MIT](LICENSE)
