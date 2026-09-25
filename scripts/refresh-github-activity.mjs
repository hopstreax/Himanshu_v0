/**
 * Live GitHub Contribution Calendar Synchronization Script
 * 
 * Queries the official GitHub GraphQL API for user's contributionCalendar
 * and generates a deterministic, typed dataset in data/githubActivity.ts.
 *
 * Usage:
 *   node scripts/refresh-github-activity.mjs
 *   or: npm run refresh:github
 *
 * Requirements:
 *   - GITHUB_TOKEN environment variable (or GH_TOKEN, or in .env.local)
 *   - Fails safely without modifying existing data if token is missing or API errors
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const TARGET_FILE = path.resolve(PROJECT_ROOT, "data/githubActivity.ts");
const GITHUB_USERNAME = "hopstreax";
const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

// Map GraphQL contributionLevel strings to 0..4 numeric scale
const LEVEL_MAP = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

/**
 * Lightweight .env parser for local developer convenience
 */
function loadLocalEnv(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
          const eqIdx = trimmed.indexOf("=");
          if (eqIdx > 0) {
            const key = trimmed.slice(0, eqIdx).trim();
            let val = trimmed.slice(eqIdx + 1).trim();
            if (
              (val.startsWith('"') && val.endsWith('"')) ||
              (val.startsWith("'") && val.endsWith("'"))
            ) {
              val = val.slice(1, -1);
            }
            if (!process.env[key]) {
              process.env[key] = val;
            }
          }
        }
      }
    } catch (_) {
      // Ignore reading error if file is inaccessible
    }
  }
}

async function main() {
  // 1. Attempt to load local environment variables if available
  loadLocalEnv(path.join(PROJECT_ROOT, ".env.local"));
  loadLocalEnv(path.join(PROJECT_ROOT, ".env"));

  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

  // 2. Strict authentication enforcement
  if (!token) {
    console.error("=================================================================");
    console.error("\x1b[31m[GitHub Sync ERROR] GITHUB_TOKEN environment variable is missing.\x1b[0m");
    console.error("=================================================================");
    console.error("To fetch live contribution calendar data from GitHub GraphQL API,");
    console.error("please provide a valid GitHub token:");
    console.error("  • Locally: set GITHUB_TOKEN=your_token or add it to .env.local");
    console.error("  • In CI/Actions: pass secrets.GITHUB_TOKEN or a repository secret");
    console.error("");
    console.error("Failure Safety: Existing data in 'data/githubActivity.ts' was PRESERVED.");
    console.error("=================================================================");
    process.exit(1);
  }

  console.log(`[GitHub Sync] Requesting contribution calendar for @${GITHUB_USERNAME} from GitHub GraphQL API...`);

  // 3. GitHub GraphQL query for contributionCalendar
  const graphqlQuery = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            date
            weekday
          }
        }
      }
    }
  }
}`;

  const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "HimanshuPatro-Portfolio-Sync/1.0",
    },
    body: JSON.stringify({
      query: graphqlQuery,
      variables: { login: GITHUB_USERNAME },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `GitHub GraphQL API returned HTTP ${response.status} (${response.statusText}): ${errorText}`
    );
  }

  const json = await response.json();

  if (json.errors && json.errors.length > 0) {
    const errorDetails = json.errors.map((e) => e.message).join("; ");
    throw new Error(`GitHub GraphQL returned errors: ${errorDetails}`);
  }

  const user = json.data?.user;
  if (!user) {
    throw new Error(`GitHub user '${GITHUB_USERNAME}' not found in GraphQL response.`);
  }

  const calendar = user.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    throw new Error("Missing 'contributionCalendar' in GraphQL response payload.");
  }

  if (typeof calendar.totalContributions !== "number") {
    throw new Error("Invalid or missing 'totalContributions' in calendar payload.");
  }

  if (!Array.isArray(calendar.weeks) || calendar.weeks.length === 0) {
    throw new Error("Calendar 'weeks' array is missing or empty.");
  }

  // 4. Flatten and parse contribution days
  const allDays = [];
  for (const week of calendar.weeks) {
    if (Array.isArray(week.contributionDays)) {
      for (const day of week.contributionDays) {
        if (day.date && typeof day.contributionCount === "number") {
          allDays.push({
            date: day.date,
            level: LEVEL_MAP[day.contributionLevel] ?? 0,
            count: day.contributionCount,
            weekday: day.weekday,
          });
        }
      }
    }
  }

  if (allDays.length === 0) {
    throw new Error("No contribution days parsed from GraphQL calendar response. Preserving previous data.");
  }

  // Sort chronologically ascending
  allDays.sort((a, b) => a.date.localeCompare(b.date));

  const fromDate = allDays[0].date;
  const toDate = allDays[allDays.length - 1].date;
  const totalContributions = calendar.totalContributions;

  // 5. Build deterministic dataset
  const dataset = {
    username: GITHUB_USERNAME,
    totalContributions,
    source: "https://api.github.com/graphql",
    updatedAt: toDate, // Pinned to latest recorded calendar day for determinism
    range: {
      from: fromDate,
      to: toDate,
    },
    days: allDays,
  };

  const fileContent = `import { GitHubActivity } from "@/types/portfolio";

export const githubActivity: GitHubActivity = ${JSON.stringify(dataset, null, 2)} as const;
`;

  // 6. Check if file is already identical
  if (fs.existsSync(TARGET_FILE)) {
    const existingContent = fs.readFileSync(TARGET_FILE, "utf8");
    if (existingContent.trim() === fileContent.trim()) {
      console.log(
        `[GitHub Sync] Activity data for @${GITHUB_USERNAME} is already fully synchronized.`
      );
      console.log(
        `[GitHub Sync] ${totalContributions} contributions (${fromDate} to ${toDate}). No file changes.`
      );
      return;
    }
  }

  // 7. Write verified dataset
  fs.writeFileSync(TARGET_FILE, fileContent, "utf8");
  console.log(`[GitHub Sync] Successfully updated ${TARGET_FILE}`);
  console.log(
    `[GitHub Sync] Verified: ${totalContributions} contributions across ${allDays.length} days (${fromDate} to ${toDate}).`
  );
}

main().catch((err) => {
  console.error("=================================================================");
  console.error("\x1b[31m[GitHub Sync ERROR]\x1b[0m", err.message);
  console.error("Failure Safety: Existing data in 'data/githubActivity.ts' was PRESERVED.");
  console.error("=================================================================");
  process.exit(1);
});
