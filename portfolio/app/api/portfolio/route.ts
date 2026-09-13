import { NextResponse } from 'next/server'
import { getPortfolioData } from '@/lib/portfolio-data'

export async function GET() {
  return NextResponse.json(await getPortfolioData(), {
    headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' },
  })
}
