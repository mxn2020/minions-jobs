"""
Minions Jobs SDK — Type Schemas
Custom MinionType schemas for Minions Jobs.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

job_source_type = MinionType(
    id="jobs-job-source",
    name="Job source",
    slug="job-source",
    description="A configured platform or feed to crawl for job postings.",
    icon="🔌",
    schema=[
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="searchQuery", type="string", label="searchQuery"),
        FieldDefinition(name="filters", type="string", label="filters"),
        FieldDefinition(name="crawlPolicy", type="select", label="crawlPolicy"),
        FieldDefinition(name="authMode", type="select", label="authMode"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastCrawledAt", type="string", label="lastCrawledAt"),
    ],
)

job_posting_type = MinionType(
    id="jobs-job-posting",
    name="Job posting",
    slug="job-posting",
    description="A normalized job posting from any freelance platform.",
    icon="💼",
    schema=[
        FieldDefinition(name="sourceId", type="string", label="sourceId"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="url", type="string", label="url"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="budgetType", type="select", label="budgetType"),
        FieldDefinition(name="budgetAmount", type="number", label="budgetAmount"),
        FieldDefinition(name="budgetCurrency", type="string", label="budgetCurrency"),
        FieldDefinition(name="skills", type="string", label="skills"),
        FieldDefinition(name="clientCountry", type="string", label="clientCountry"),
        FieldDefinition(name="postedAt", type="string", label="postedAt"),
        FieldDefinition(name="crawledAt", type="string", label="crawledAt"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

job_signal_type = MinionType(
    id="jobs-job-signal",
    name="Job signal",
    slug="job-signal",
    description="Extracted structured intelligence from a raw job posting.",
    icon="📡",
    schema=[
        FieldDefinition(name="jobId", type="string", label="jobId"),
        FieldDefinition(name="mustHaveSkills", type="string", label="mustHaveSkills"),
        FieldDefinition(name="niceToHaveSkills", type="string", label="niceToHaveSkills"),
        FieldDefinition(name="redFlags", type="string", label="redFlags"),
        FieldDefinition(name="estimatedWinProbability", type="number", label="estimatedWinProbability"),
        FieldDefinition(name="extractedBudgetConfidence", type="select", label="extractedBudgetConfidence"),
    ],
)

job_watchlist_type = MinionType(
    id="jobs-job-watchlist",
    name="Job watchlist",
    slug="job-watchlist",
    description="A saved search query that continuously monitors for new matching jobs.",
    icon="👀",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="sourceId", type="string", label="sourceId"),
        FieldDefinition(name="query", type="string", label="query"),
        FieldDefinition(name="filters", type="string", label="filters"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastMatchedAt", type="string", label="lastMatchedAt"),
    ],
)

custom_types: list[MinionType] = [
    job_source_type,
    job_posting_type,
    job_signal_type,
    job_watchlist_type,
]

