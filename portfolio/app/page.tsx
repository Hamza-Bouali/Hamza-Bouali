import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <MainContent />
    </main>
  )
}
