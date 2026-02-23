/**
 * Minions Jobs SDK
 *
 * Canonical schemas for job postings and extracted signals across freelance platforms
 *
 * @module @minions-jobs/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Jobs.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
