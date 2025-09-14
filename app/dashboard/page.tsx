import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentRecommendations } from "@/components/dashboard/recent-recommendations"
import { MarketTrends } from "@/components/dashboard/market-trends"
import { WeatherWidget } from "@/components/dashboard/weather-widget"
import { RecommendationHistory } from "@/components/dashboard/recommendation-history"
import { FarmAnalytics } from "@/components/dashboard/farm-analytics"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <DashboardStats />
            <QuickActions />
            <RecentRecommendations />
            <RecommendationHistory />
            <FarmAnalytics />
            <MarketTrends />
          </div>
          <div className="space-y-6">
            <WeatherWidget />
          </div>
        </div>
      </div>
    </div>
  )
}
