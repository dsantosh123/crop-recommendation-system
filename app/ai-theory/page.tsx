import { RecommendationEngine } from "@/components/ai-theory/recommendation-engine"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AITheoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <RecommendationEngine />
      </main>
      <Footer />
    </div>
  )
}

export const metadata = {
  title: "AI Theory - FarmAI Recommendation Engine",
  description: "Understanding the machine learning algorithms and data science behind intelligent crop recommendations",
}
