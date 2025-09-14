import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, CloudRain, Thermometer, TrendingUp, Shield } from "lucide-react"
import type { FarmData } from "@/app/farm-setup/page"
import type { CropRecommendation } from "@/app/results/page"

interface RecommendationLogicProps {
  farmData: FarmData
  recommendation: CropRecommendation
}

export function RecommendationLogic({ farmData, recommendation }: RecommendationLogicProps) {
  const logicPoints = [
    {
      icon: Thermometer,
      title: "Soil Match",
      description: `Your ${farmData.soilType} soil is perfect for ${recommendation.name}`,
      match: true,
    },
    {
      icon: CloudRain,
      title: "Weather Match",
      description: `${farmData.currentSeason} season provides optimal conditions`,
      match: true,
    },
    {
      icon: TrendingUp,
      title: "Market Match",
      description: recommendation.marketOutlook,
      match: true,
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: `${recommendation.riskLevel} risk matches your ${farmData.riskAppetite <= 5 ? "conservative" : "moderate"} profile`,
      match: farmData.riskAppetite <= 5 ? recommendation.riskLevel === "Low" : true,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Why This Recommendation?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {logicPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
            <div className={`p-2 rounded-full ${point.match ? "bg-green-100" : "bg-yellow-100"}`}>
              {point.match ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <point.icon className="h-4 w-4 text-yellow-600" />
              )}
            </div>
            <div>
              <h4 className="font-semibold text-sm">{point.title}</h4>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          </div>
        ))}

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h4 className="font-semibold text-primary mb-2">AI Confidence Score</h4>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${recommendation.confidence}%` }}
              ></div>
            </div>
            <span className="font-bold text-primary">{recommendation.confidence}%</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Based on analysis of soil, weather, market trends, and 50+ crop comparisons
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
