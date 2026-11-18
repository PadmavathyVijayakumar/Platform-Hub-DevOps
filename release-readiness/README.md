# Module 1 — Release Readiness & Coordination Hub

Connects Jira tickets, GitHub PRs, QA sign-offs, and UAT approvals into a single go/no-go checklist.  
Flags blockers and approval gaps before they surprise you on release night.

## Key Features

- **Release checklist aggregator** — pulls open blockers from Jira, unmerged PRs from GitHub, and pending sign-offs from Confluence
- **Go/no-go dashboard** — traffic-light status across Dev Complete, QA Pass, UAT Approved, Infra Ready, Comms Sent
- **Approval gap alerts** — notifies release manager when an approver hasn't responded within SLA
- **Change history timeline** — shows all code merges and config changes in the 72 h before release
- **Release calendar** — multi-team view of upcoming releases with dependency conflicts highlighted

## Data Sources

| Source | Integration | Polling |
|--------|-------------|---------|
| Jira Cloud | REST API v3 | Every 5 min |
| GitHub | Webhooks + REST | Real-time |
| Confluence | REST API | Every 15 min |
| Slack | Events API | Real-time |

## Setup

```bash
cp ../../.env.example .env
npm install
npm run dev
```

## Key Metrics

- Mean time to release readiness: baseline vs. post-adoption
- Blocker detection rate: % of P0 issues caught before go/no-go
- Release success rate: % of releases with zero P1 incidents in 24 h
