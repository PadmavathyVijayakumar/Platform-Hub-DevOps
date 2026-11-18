/**
 * Integration Health Probe
 * Runs synthetic checks against registered endpoints and
 * emits events when status changes (healthy → degraded → down).
 */

export type IntegrationStatus = 'healthy' | 'degraded' | 'down' | 'silent';

export interface Integration {
  id: string;
  name: string;
  type: 'api' | 'webhook' | 'job' | 'edi' | 'db';
  endpoint?: string;
  expectedCadenceMin?: number;
  owner: string;
  tags: string[];
}

export interface ProbeResult {
  integrationId: string;
  status: IntegrationStatus;
  latencyMs?: number;
  lastSeenAt: Date;
  errorMessage?: string;
  consecutiveFailures: number;
}

export async function probeIntegration(integration: Integration): Promise<ProbeResult> {
  // TODO: implement per-type probe logic
  // - api: HTTP GET + response time + status code check
  // - webhook: check last event timestamp against expectedCadenceMin
  // - job: query job run log for last success timestamp
  // - edi: check file arrival log
  // - db: query replication lag
  throw new Error('Not implemented');
}

export async function runAllProbes(integrations: Integration[]): Promise<ProbeResult[]> {
  return Promise.all(integrations.map(probeIntegration));
}
