import { Suspense } from "react"
import { PortfolioContent } from "./portfolio-content"
import { Card } from "@/components/ui/card"

function PortfolioSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
        <p className="text-muted-foreground mt-2">Showcasing my projects and technical work</p>
      </header>
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="h-48 animate-pulse bg-muted" />
        ))}
      </div>
    </div>
  )
}

export function PortfolioSection() {
  return (
    <Suspense fallback={<PortfolioSkeleton />}>
      <PortfolioContent />
    </Suspense>
  )
}
