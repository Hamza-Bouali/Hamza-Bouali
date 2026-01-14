export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  url: string
  html_url: string
  topics: string[]
  stargazers_count: number
  language: string | null
  updated_at: string
}

const GITHUB_USERNAME = "Hamza-Bouali"
const GITHUB_API_BASE = "https://api.github.com"

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add token from environment if available for higher rate limits
          ...(process.env.GITHUB_TOKEN && { Authorization: `token ${process.env.GITHUB_TOKEN}` }),
        },
        // Cache for 1 hour on the server
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos = await response.json()
    return repos
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error)
    return []
  }
}

/**
 * Extract programming languages from repo (including topics as pseudo-languages)
 */
export function extractTechnologies(repo: GitHubRepo): string[] {
  const techs = new Set<string>()

  if (repo.language) {
    techs.add(repo.language)
  }

  // Add topics as technologies (filter out meta topics)
  repo.topics.forEach((topic) => {
    if (!topic.includes("-") || ["web-development", "data-engineering", "machine-learning"].includes(topic)) {
      const tech = topic.charAt(0).toUpperCase() + topic.slice(1)
      techs.add(tech)
    }
  })

  // Fallback to common defaults if no techs found
  if (techs.size === 0) {
    techs.add("Open Source")
  }

  return Array.from(techs).slice(0, 5) // Limit to 5 technologies
}
