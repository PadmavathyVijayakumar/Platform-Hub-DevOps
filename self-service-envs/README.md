# Module 4 — Developer Self-Service Environment Tool

Dev-requested test environments from approved templates — no infra ticket needed.  
Cost limits and auto-expiry built in.

## Key Features

- **Template catalogue** — infra-approved environment blueprints (microservice stack, data pipeline, full platform)
- **One-click provisioning** — dev selects template, sets TTL, hits Deploy; Terraform runs in the background
- **Cost cap enforcement** — budget limit per environment type; requests over cap need manager approval
- **Auto-expiry** — environments expire at TTL; owner gets 24 h warning and can extend once
- **Self-service teardown** — devs can destroy their own envs immediately
- **Audit trail** — full log of who created what, when, and why

## Templates Available

| Template | Est. Cost/Day | Max TTL |
|----------|-------------|---------|
| Microservice (3 svcs + DB) | $4.20 | 7 days |
| Data pipeline (Kafka + S3) | $8.50 | 5 days |
| Full platform (10 svcs) | $22.00 | 3 days |
| Lightweight (1 svc + mock) | $0.80 | 14 days |

## Setup

```bash
# Requires Terraform >= 1.6 and AWS credentials with appropriate IAM role
terraform -chdir=terraform init
npm run dev
```
