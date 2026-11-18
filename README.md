# Platform-Hub-DevOps
# Platform Hub — DevOps Operations Platform

> One platform for release coordination, infrastructure reliability, and developer self-service.

Platform Hub is a unified DevOps operations tool that connects tickets, deployments, integrations, cloud spend, and infrastructure changes so teams can move fast without breaking things.

## Modules

| Module | Description | Status |
|--------|-------------|--------|
| 🚀 **Release Readiness** | Connects Jira & GitHub; flags missing test scope, UAT gaps, and approval blockers before go/no-go | `v1.0 — GA` |
| 📡 **Integration Monitor** | Monitors APIs, webhooks, EDI feeds, and scheduled jobs; surfaces silent failures and delayed data | `v1.0 — GA` |
| 💰 **Cloud Cost Tracker** | Maps AWS/GCP spend to service, team, and feature; flags idle resources and anomalies | `v0.9 — Beta` |
| 🛠️ **Self-Service Envs** | Dev-requested environments from approved templates — no infra ticket needed | `v1.0 — GA` |
| 🚨 **Incident Triage** | Groups alerts, builds timeline, suggests runbooks, correlates recent changes | `v0.9 — Beta` |
| 🛡️ **Infra Guardrail** | Scans Terraform PRs for risky settings and policy drift; explains findings in plain language | `v0.8 — Alpha` |

## Tech Stack

- **Frontend:** React 18 + TypeScript + Tailwind CSS
- **Backend:** Node.js (Express) + PostgreSQL + Redis
- **Integrations:** Jira Cloud API, GitHub Webhooks, AWS Cost Explorer, PagerDuty, Datadog
- **Infrastructure:** Docker, Kubernetes (EKS), Terraform
- **CI/CD:** GitHub Actions

## Quick Start

```bash
git clone https://github.com/PadmavathyVijayakumar/platform-hub-devops.git
cd platform-hub-devops
cp .env.example .env        # fill in your API keys
docker compose up -d        # starts all services locally
open http://localhost:3000
```

## Repository Structure

```
platform-hub-devops/
├── frontend/               # React SPA
├── backend/                # Express API gateway
├── modules/
│   ├── release-readiness/  # Module 1
│   ├── integration-monitor/# Module 2
│   ├── cloud-cost-tracker/ # Module 3
│   ├── self-service-envs/  # Module 4
│   ├── incident-triage/    # Module 5
│   └── infra-guardrail/    # Module 6
├── docs/                   # Architecture, PRD, runbooks
└── .github/workflows/      # CI/CD pipelines
```

## Design Partner Validation

The initial problem set was validated with:
- 3 platform/SRE teams (logistics, fintech, healthtech verticals)
- Key pain points: release night surprises, silent API failures, no env self-service
- 6-week discovery → prioritised Release Readiness + Integration Monitor as v1.0 scope

## Product Metrics (current)

- **Release cycle time:** 4.1 days → 2.6 days (−37%) after adoption
- **Mean time to detect integration failures:** 42 min → 4.2 min (−90%)
- **Environment provisioning wait:** 2 days → 3.2 min (self-service)
- **P1 incidents from infra changes:** 3/quarter → 0 (Guardrail)

## Roadmap

- [ ] Slack/Teams notification surface for all modules
- [ ] Multi-cloud support (Azure)
- [ ] AI-assisted root-cause suggestion in Incident Triage
- [ ] Cost recommendation auto-remediation (Guardrail-linked)

---
*Built by the EZ Innovation Platform Products team.*
