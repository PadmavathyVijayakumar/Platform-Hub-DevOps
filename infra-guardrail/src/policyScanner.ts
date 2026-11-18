/**
 * Policy Scanner
 * Runs OPA policies against a Terraform plan JSON
 * and returns structured findings with plain-language explanations.
 */

export type FindingSeverity = 'critical' | 'high' | 'medium' | 'low' | 'info';

export interface PolicyFinding {
  id: string;
  ruleId: string;
  severity: FindingSeverity;
  resource: string;             // e.g. "aws_s3_bucket.uploads"
  attribute?: string;           // e.g. "acl"
  currentValue?: string;        // e.g. "public-read"
  expectedValue?: string;       // e.g. "private"
  plainEnglishSummary: string;  // e.g. "This S3 bucket is publicly readable — anyone on the internet can list its contents."
  remediationHint: string;      // e.g. "Set acl = \"private\" or use a bucket policy that restricts access."
  policyUrl?: string;
}

export interface ScanResult {
  prNumber: number;
  repoFullName: string;
  riskScore: number;            // 0–100
  requiresSecondApprover: boolean;
  findings: PolicyFinding[];
  summary: string;              // e.g. "2 critical, 1 high, 3 medium issues found."
  scannedAt: Date;
}

export async function scanTerraformPlan(planJsonPath: string, prNumber: number): Promise<ScanResult> {
  // TODO: parse plan JSON, run OPA eval against policies/*.rego,
  // map each violation to a PolicyFinding with plain-language summary
  throw new Error('Not implemented — wire up OPA binary and policy bundle');
}
