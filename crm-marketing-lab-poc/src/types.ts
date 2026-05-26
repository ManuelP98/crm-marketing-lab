export type ExerciseType =
  | 'multiple-choice'
  | 'true-false'
  | 'matching'
  | 'ordering'
  | 'segment-builder'
  | 'journey-builder'
  | 'kpi-calculator';

export interface ExerciseOption {
  id: string;
  text: string;
}

export interface MatchPair {
  id: string;
  concept: string;
  definition: string;
}

export interface SegmentCondition {
  field: string;
  operator: string;
  value: string;
}

export interface JourneyStep {
  id: string;
  type: 'trigger' | 'wait' | 'email' | 'condition' | 'end';
  label: string;
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  instructions?: string;
  // Multiple choice & True/False
  options?: ExerciseOption[];
  correctAnswerId?: string; // or 'true'/'false' for T/F
  explanation: string;
  // Matching
  pairs?: MatchPair[];
  // Ordering
  orderedSteps?: string[]; // IDs/Strings in the correct order
  initialStepsOrder?: string[]; // Scrambled order
  // Segment Builder
  targetSegmentCriteria?: SegmentCondition[];
  segmentOptions?: {
    fields: string[];
    operators: string[];
    values: Record<string, string[]>;
  };
  // Journey Builder
  journeyCorrectSteps?: string[]; // Correct flow names/types
  journeyStepPool?: string[];
  // KPI calculator
  kpiFormulaData?: {
    numbers: Record<string, number>;
    targetKpi: string;
    correctValue: number;
    unit: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  objective: string;
  theory: string;
  example: string;
  exercises: Exercise[];
  xpReward: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  objective: string;
  lessons: Lesson[];
}

// Simulated CRM Schema
export interface Customer {
  customer_id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  signup_date: string;
  lifecycle_stage: 'Lead' | 'Prospect' | 'Active Customer' | 'Inactive Customer' | 'Loyal Customer';
  segment: string;
  marketing_consent: boolean;
  unsubscribed: boolean;
  last_purchase_date: string | null;
  total_spend: number;
}

export interface Lead {
  lead_id: string;
  created_date: string;
  source: 'Google Ads' | 'LinkedIn' | 'Organic SE' | 'Referral' | 'Webinar' | 'Cold Outreach';
  status: 'New' | 'Contacted' | 'Qualified' | 'Unqualified';
  country: string;
  lead_score: number;
  estimated_value: number;
  campaign_id: string | null;
}

export interface Campaign {
  campaign_id: string;
  campaign_name: string;
  channel: 'Email' | 'Google Ads' | 'LinkedIn' | 'SMS' | 'Push Notification';
  objective: 'Lead Generation' | 'Nurturing' | 'Retention' | 'Winback' | 'Brand Awareness';
  start_date: string;
  end_date: string;
  budget: number;
  leads_generated?: number;
  spend?: number;
  revenue?: number;
}

export interface EmailEvent {
  event_id: string;
  customer_id: string;
  campaign_id: string;
  event_type: 'sent' | 'open' | 'click' | 'bounce' | 'unsubscribe';
  event_date: string;
}

export interface Order {
  order_id: string;
  customer_id: string;
  order_date: string;
  order_value: number;
  product_category: string;
  channel: 'Ecommerce' | 'App' | 'In-Store';
}

export interface Opportunity {
  opportunity_id: string;
  lead_id: string;
  campaign_id: string | null;
  stage: 'Discovery' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  amount: number;
  created_date: string;
  close_date: string | null;
}

export interface Consent {
  customer_id: string;
  consent_type: 'Marketing' | 'Profiling' | 'ThirdParty';
  consent_status: 'Granted' | 'Revoked';
  updated_at: string;
}

export interface Journey {
  journey_id: string;
  journey_name: string;
  objective: string;
  entry_condition: string;
  exit_condition: string;
  status: 'Active' | 'Draft' | 'Paused';
}

export interface CRMDataSet {
  customers: Customer[];
  leads: Lead[];
  campaigns: Campaign[];
  email_events: EmailEvent[];
  orders: Order[];
  opportunities: Opportunity[];
  consents: Consent[];
  journeys: Journey[];
}

export interface BusinessCase {
  id: string;
  title: string;
  scenario: string;
  managerRequest: string;
  availableData: string[];
  analyticalObjective: string;
  suggestedTools: string[];
  analysisArea: string;
  options: { id: string; label: string; text: string; isCorrect: boolean }[];
  explanation: string;
  caveat: string;
  nextRecommendedAnalysis: string;
  xpReward: number;
}

export interface PortfolioCase {
  id: string;
  title: string;
  dateCompleted: string;
  scenario: string;
  userAnswerText: string;
  isExcellent: boolean;
  insightsGenerated: string[];
  recommendations: string[];
  skillsProven: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  requirement: string;
  iconName: string;
  unlockedAt?: string;
}

export interface UserProgress {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  completedLessons: string[]; // Lesson IDs
  unlockedModules: string[]; // Module IDs
  completedBusinessCases: string[]; // BusinessCase IDs
  unlockedBadges: string[]; // Badge IDs
  weakestSkills: string[];
  portfolio: PortfolioCase[];
}
