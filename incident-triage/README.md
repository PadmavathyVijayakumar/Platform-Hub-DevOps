# Module 5 — Incident Triage Assistant

Groups alerts, builds a timeline, links runbooks, and correlates recent changes.  
Cuts mean time to resolution by getting engineers to the right context in under 2 minutes.

## Key Features

- **Alert grouping** — deduplicates and clusters related PagerDuty/Datadog alerts into a single incident
- **Automated timeline** — stitches deploy events, config changes, and anomaly spikes into a chronological view
- **Runbook linker** — matches incident signals against a runbook index to surface the most relevant SOPs
- **Change correlator** — highlights code merges and infra changes in the 2 h before first alert
- **Severity classifier** — auto-sets P1/P2/P3 based on blast radius (services affected × user impact)
- **Slack war-room** — creates a dedicated channel, posts timeline, and pages the right on-call rotation

## Integrations

- PagerDuty (alerts + escalation)
- Datadog (metrics + logs)
- GitHub (recent merges)
- Confluence (runbook index)
- Slack (war-room automation)

## Key Metrics (post-launch)

| Metric | Before | After |
|--------|--------|-------|
| Mean time to acknowledge | 18 min | 4 min |
| Mean time to resolve (P1) | 94 min | 51 min |
| Correct runbook surfaced | — | 78% of incidents |
