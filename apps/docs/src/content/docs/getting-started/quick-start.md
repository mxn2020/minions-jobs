---
title: Quick Start
description: Get up and running with Minions Jobs in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-jobs/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_jobs import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
jobs info
```
