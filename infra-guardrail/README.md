# Module 6 — Infrastructure Change Guardrail

Scans Terraform PRs for risky settings and policy drift.  
Explains findings in plain language. Requires approval before merge.

## Key Features

- **Policy-as-code scanner** — runs OPA/Rego policies against every Terraform plan diff
- **Plain-language explainer** — translates policy violations into one-sentence summaries any engineer understands
- **Risk scoring** — 0–100 risk score per PR based on change surface area and violation severity
- **Approval gating** — high-risk PRs (score > 70) require a second infra-team approver
- **Drift detector** — compares running infrastructure state against IaC source of truth weekly
- **Exemption workflow** — time-limited policy exemptions with business justification + manager approval

## Policy Categories

| Category | Example Rules |
|----------|--------------|
| Security | No public S3 buckets, no unrestricted 0.0.0.0/0 security groups, encryption at rest required |
| Cost | Instance types on approved list, no oversized RDS without justification tag |
| Reliability | Multi-AZ required for prod DBs, deletion_protection = true for prod resources |
| Compliance | Tags mandatory: team, environment, cost-centre, data-classification |

## CI/CD Integration

```yaml
# .github/workflows/terraform-guardrail.yml (auto-generated on repo setup)
on: [pull_request]
jobs:
  guardrail:
    uses: ./.github/workflows/guardrail-check.yml
```
