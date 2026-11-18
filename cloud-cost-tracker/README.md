# Module 3 — Cloud Cost-to-Owner Tracker

Maps AWS/GCP/Kubernetes spend to teams, services, and features.  
Suggests idle resource cleanup. No more mystery bills.

## Key Features

- **Cost attribution engine** — tags-based mapping from AWS Cost Explorer → team/service/feature
- **Anomaly alerts** — ML-based spike detection; Slack alert when spend jumps >15% week-over-week
- **Idle resource scanner** — finds stopped EC2s, unattached EBS volumes, unused RDS, low-utilisation nodes
- **Budget guardrails** — per-team monthly budgets with 80%/100% alerts
- **Chargeback reports** — monthly PDF/CSV export per team for finance

## Integrations

- AWS Cost Explorer API
- AWS CloudWatch (utilisation data)
- GCP Billing API
- Kubernetes Metrics Server (node utilisation)
