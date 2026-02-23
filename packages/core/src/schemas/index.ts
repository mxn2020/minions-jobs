/**
 * @module @minions-jobs/sdk/schemas
 * Custom MinionType schemas for Minions Jobs.
 */

import type { MinionType } from 'minions-sdk';

export const jobsourceType: MinionType = {
  id: 'jobs-job-source',
  name: 'Job source',
  slug: 'job-source',
  description: 'A configured platform or feed to crawl for job postings.',
  icon: '🔌',
  schema: [
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'searchQuery', type: 'string', label: 'searchQuery' },
    { name: 'filters', type: 'string', label: 'filters' },
    { name: 'crawlPolicy', type: 'select', label: 'crawlPolicy' },
    { name: 'authMode', type: 'select', label: 'authMode' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastCrawledAt', type: 'string', label: 'lastCrawledAt' },
  ],
};

export const jobpostingType: MinionType = {
  id: 'jobs-job-posting',
  name: 'Job posting',
  slug: 'job-posting',
  description: 'A normalized job posting from any freelance platform.',
  icon: '💼',
  schema: [
    { name: 'sourceId', type: 'string', label: 'sourceId' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'url', type: 'string', label: 'url' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'budgetType', type: 'select', label: 'budgetType' },
    { name: 'budgetAmount', type: 'number', label: 'budgetAmount' },
    { name: 'budgetCurrency', type: 'string', label: 'budgetCurrency' },
    { name: 'skills', type: 'string', label: 'skills' },
    { name: 'clientCountry', type: 'string', label: 'clientCountry' },
    { name: 'postedAt', type: 'string', label: 'postedAt' },
    { name: 'crawledAt', type: 'string', label: 'crawledAt' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const jobsignalType: MinionType = {
  id: 'jobs-job-signal',
  name: 'Job signal',
  slug: 'job-signal',
  description: 'Extracted structured intelligence from a raw job posting.',
  icon: '📡',
  schema: [
    { name: 'jobId', type: 'string', label: 'jobId' },
    { name: 'mustHaveSkills', type: 'string', label: 'mustHaveSkills' },
    { name: 'niceToHaveSkills', type: 'string', label: 'niceToHaveSkills' },
    { name: 'redFlags', type: 'string', label: 'redFlags' },
    { name: 'estimatedWinProbability', type: 'number', label: 'estimatedWinProbability' },
    { name: 'extractedBudgetConfidence', type: 'select', label: 'extractedBudgetConfidence' },
  ],
};

export const jobwatchlistType: MinionType = {
  id: 'jobs-job-watchlist',
  name: 'Job watchlist',
  slug: 'job-watchlist',
  description: 'A saved search query that continuously monitors for new matching jobs.',
  icon: '👀',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'sourceId', type: 'string', label: 'sourceId' },
    { name: 'query', type: 'string', label: 'query' },
    { name: 'filters', type: 'string', label: 'filters' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastMatchedAt', type: 'string', label: 'lastMatchedAt' },
  ],
};

export const customTypes: MinionType[] = [
  jobsourceType,
  jobpostingType,
  jobsignalType,
  jobwatchlistType,
];

