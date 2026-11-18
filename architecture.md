# Platform Hub — Architecture Overview

## High-Level Architecture

```
                        ┌─────────────────────────────┐
                        │       React SPA (port 3000)  │
                        │  6 module views + Overview   │
                        └──────────────┬──────────────┘
                                       │ REST / WebSocket
                        ┌──────────────▼──────────────┐
                        │    Express API Gateway       │
                        │        (port 4000)           │
                        └──┬────┬────┬────┬────┬──────┘
                           │    │    │    │    │
              ┌────────────┘    │    │    │    └────────────┐
              ▼                 ▼    ▼    ▼                 ▼
        Release           Integr.  Cost  Envs  Incidents  Guardrail
        Service           Monitor  Svc   Svc   Service    Service
              │                │
              └────────────────┴──► PostgreSQL + Redis
```

## Module Communication

Modules are co-located in this monorepo but deployed as independent services.  
They communicate via:
- **Synchronous**: REST (internal)  
- **Asynchronous**: Redis pub/sub for cross-module events (e.g., new incident triggers release risk flag)

## Data Storage

| Store | Purpose |
|-------|---------|
| PostgreSQL | All persistent data (incidents, env requests, cost records) |
| Redis | Caching, rate limiting, pub/sub event bus |
| S3 | Terraform plan archives, audit logs, cost export CSVs |

## Key Design Decisions

1. **Monorepo, microservices at deploy-time** — easier for a small team to navigate; services can be split to separate repos if needed
2. **Tag-driven cost attribution** — no agent required; relies on consistent resource tagging enforced by Guardrail
3. **Policy-as-code (OPA)** — policies live in Git, reviewed like code, versioned with the rest of the platform
4. **Templates over tickets** — self-service environments replace a Jira request workflow; approved templates define the guardrails

## Discovery & Validation History

| Phase | Activity | Outcome |
|-------|----------|---------|
| Week 1–2 | 12 user interviews (SRE, dev, release mgr) | Confirmed top pain: release night surprises + silent API failures |
| Week 3–4 | Paper prototype testing | Validated Release Readiness + Integration Monitor as v1 scope |
| Week 5–6 | Design partner setup (3 teams) | Agreed on data sources and integration points |
| Sprint 1–4 | Build + beta | 3 teams live; feedback loop on checklist categories |
| Sprint 5–6 | GA rollout | 8 teams; cost + env modules added to scope |
