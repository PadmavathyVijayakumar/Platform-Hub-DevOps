# Module 2 — Integration Reliability Monitor

Monitors APIs, webhooks, scheduled jobs, and EDI feeds.  
Surfaces silent failures and delayed data before downstream teams notice.

## Key Features

- **Health heartbeat** — scheduled synthetic pings to every registered endpoint
- **Silent failure detector** — identifies integrations that stopped sending data without throwing an error
- **SLA breach predictor** — estimates time-to-breach based on current latency trend
- **EDI feed tracker** — monitors file arrival windows and flags late/missing transmissions
- **Webhook replay** — retries failed deliveries from a DLQ with exponential backoff

## Registered Integration Types

| Type | Detection Method |
|------|-----------------|
| REST API | Synthetic GET probe every 60 s |
| Webhook (inbound) | Heartbeat window; alert if no event in N min |
| Scheduled job | Last-run timestamp + expected cadence |
| EDI file feed | File arrival window per trading partner config |
| Database replication | Lag monitoring via replication slot |

## Setup

```bash
npm install
cp ../../.env.example .env
# Add INTEGRATION_CHECK_INTERVAL_SEC=60 to .env
npm run dev
```
