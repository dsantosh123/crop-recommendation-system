"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Target, Award, Calendar, Droplets, Thermometer } from "lucide-react"

export function FarmAnalytics() {
  // Mock analytics data
  const analytics = {
    successRate: 87,
    avgProfitIncrease: 23,
    totalRecommendations: 12,
    seasonsActive: 4,
    bestPerformingCrop: "Wheat",
    worstPerformingCrop: "Cotton",
    seasonalTrends: [
      { season: "Kharif 2023", profit: 35000, success: true },
      { season: "Rabi 2024", profit: 48000, success: true },
      { season: "Kharif 2024", profit: 42000, success: false },
    ],
    farmHealth: {
      soilQuality: 78,
      waterEfficiency: 85,
      cropDiversity: 65,
      sustainabilityScore: 72,
    },
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-100"
    if (score >= 60) return "bg-yellow-100"
    return "bg-red-100"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Farm Analytics & Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">{analytics.successRate}%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">+{analytics.avgProfitIncrease}%</div>
              <div className="text-sm text-muted-foreground">Avg Profit Increase</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">{analytics.totalRecommendations}</div>
              <div className="text-sm text-muted-foreground">Total Recommendations</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-600">{analytics.seasonsActive}</div>
              <div className="text-sm text-muted-foreground">Seasons Active</div>
            </div>
          </div>

          {/* Performance Insights */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Award className="h-4 w-4" />
                Crop Performance
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <div className="font-medium text-green-800">Best Performer</div>
                    <div className="text-sm text-green-600">{analytics.bestPerformingCrop}</div>
                  </div>
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <div className="font-medium text-red-800">Needs Attention</div>
                    <div className="text-sm text-red-600">{analytics.worstPerformingCrop}</div>
                  </div>
                  <Target className="h-5 w-5 text-red-600" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Seasonal Trends
              </h4>
              <div className="space-y-3">
                {analytics.seasonalTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium">{trend.season}</div>
                      <div className="text-sm text-muted-foreground">₹{trend.profit.toLocaleString()}</div>
                    </div>
                    <Badge variant={trend.success ? "default" : "destructive"}>
                      {trend.success ? "Success" : "Review"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Farm Health Scores */}
          <div className="space-y-4">
            <h4 className="font-semibold">Farm Health Indicators</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Droplets className="h-4 w-4" />
                      Soil Quality
                    </span>
                    <span className={`text-sm font-semibold ${getScoreColor(analytics.farmHealth.soilQuality)}`}>
                      {analytics.farmHealth.soilQuality}%
                    </span>
                  </div>
                  <Progress value={analytics.farmHealth.soilQuality} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Thermometer className="h-4 w-4" />
                      Water Efficiency
                    </span>
                    <span className={`text-sm font-semibold ${getScoreColor(analytics.farmHealth.waterEfficiency)}`}>
                      {analytics.farmHealth.waterEfficiency}%
                    </span>
                  </div>
                  <Progress value={analytics.farmHealth.waterEfficiency} className="h-2" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Crop Diversity</span>
                    <span className={`text-sm font-semibold ${getScoreColor(analytics.farmHealth.cropDiversity)}`}>
                      {analytics.farmHealth.cropDiversity}%
                    </span>
                  </div>
                  <Progress value={analytics.farmHealth.cropDiversity} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Sustainability Score</span>
                    <span
                      className={`text-sm font-semibold ${getScoreColor(analytics.farmHealth.sustainabilityScore)}`}
                    >
                      {analytics.farmHealth.sustainabilityScore}%
                    </span>
                  </div>
                  <Progress value={analytics.farmHealth.sustainabilityScore} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
