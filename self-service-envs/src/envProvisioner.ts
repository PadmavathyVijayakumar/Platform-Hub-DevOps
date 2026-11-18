/**
 * Environment Provisioner
 * Triggers Terraform apply/destroy for a given template,
 * tracks status, and enforces cost/TTL policy.
 */

export interface EnvTemplate {
  id: string;
  name: string;
  description: string;
  dailyCostEstimateUsd: number;
  maxTtlDays: number;
  requiresApprovalAboveUsd?: number;
  terraformWorkspacePath: string;
}

export interface EnvironmentRequest {
  id: string;
  requestedBy: string;
  templateId: string;
  ttlDays: number;
  purpose: string;
  jiraTicket?: string;
  status: 'pending' | 'provisioning' | 'running' | 'expiring' | 'destroyed' | 'failed';
  createdAt: Date;
  expiresAt: Date;
  costToDateUsd?: number;
  outputs?: Record<string, string>;   // e.g. { apiUrl: "https://...", dbEndpoint: "..." }
}

export async function provisionEnvironment(request: EnvironmentRequest, template: EnvTemplate): Promise<void> {
  // TODO: run `terraform apply -var="env_id=${request.id}" -var="ttl=${request.ttlDays}d"`
  // Poll for completion, update request.status, capture outputs
  throw new Error('Not implemented — wire up Terraform executor');
}

export async function destroyEnvironment(envId: string): Promise<void> {
  // TODO: run `terraform destroy` for the given env
  throw new Error('Not implemented');
}
