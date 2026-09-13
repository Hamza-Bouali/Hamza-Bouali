import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { portfolioContent } from '@/lib/db/schema'

export type PortfolioData = {
  projects: typeof fallbackPortfolio.projects
  experience: typeof fallbackPortfolio.experience
}

const fallbackPortfolio = {
  projects: [],
  experience: [],
}

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const rows = await db.select({ content: portfolioContent.content }).from(portfolioContent).where(eq(portfolioContent.contentKey, 'portfolio'))
    const content = rows[0]?.content as Partial<PortfolioData> | undefined
    return {
      projects: Array.isArray(content?.projects) ? content.projects as PortfolioData['projects'] : fallbackPortfolio.projects,
      experience: Array.isArray(content?.experience) ? content.experience as PortfolioData['experience'] : fallbackPortfolio.experience,
    }
  } catch {
    return fallbackPortfolio
  }
}
