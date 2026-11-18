/**
 * Cost Attribution Engine
 * Fetches daily cost data from AWS/GCP and maps to teams via resource tags.
 */

export interface CostRecord {
  date: string;             // YYYY-MM-DD
  service: string;          // e.g. "EC2", "RDS", "S3"
  team: string;             // from tag: platform:team
  feature: string;          // from tag: platform:feature
  environment: string;      // prod | staging | dev
  amountUsd: number;
  usageQuantity?: number;
  unit?: string;
}

export interface TeamCostSummary {
  team: string;
  currentMonthUsd: number;
  previousMonthUsd: number;
  changePercent: number;
  topServices: { service: string; amountUsd: number }[];
  idleResourcesUsd: number;
}

export async function fetchTeamCosts(
  teamName: string,
  startDate: string,
  endDate: string
): Promise<CostRecord[]> {
  // TODO: call AWS Cost Explorer GetCostAndUsage with tag filter platform:team={teamName}
  throw new Error('Not implemented — wire up AWS Cost Explorer API');
}
