import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, Calendar, IndianRupee, AlertTriangle, Shield, Download } from "lucide-react"
import type { CropRecommendation } from "@/app/results/page"

interface MainRecommendationProps {
  recommendation: CropRecommendation
}

export function MainRecommendation({ recommendation }: MainRecommendationProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "High":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl">Top Recommendation</CardTitle>
          <Badge className="bg-primary text-primary-foreground">{recommendation.confidence}% Confidence</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">{recommendation.name}</h2>
              <p className="text-muted-foreground">
                Our AI analysis shows this crop has the highest success probability for your farm conditions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-600">{recommendation.expectedYield}</div>
                <div className="text-sm text-muted-foreground">Expected Yield</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <IndianRupee className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-600">{recommendation.netProfit}</div>
                <div className="text-sm text-muted-foreground">Net Profit</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-600">{recommendation.duration}</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <Shield className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div
                  className={`font-semibold inline-block px-2 py-1 rounded text-xs ${getRiskColor(recommendation.riskLevel)}`}
                >
                  {recommendation.riskLevel} Risk
                </div>
                <div className="text-sm text-muted-foreground mt-1">Risk Level</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <IndianRupee className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Financial Breakdown</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Investment Required:</span>
                      <span className="font-medium">{recommendation.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected Revenue:</span>
                      <span className="font-medium text-green-600">{recommendation.expectedRevenue}</span>
                    </div>
                    <div className="flex justify-between border-t pt-1">
                      <span className="font-medium">Net Profit:</span>
                      <span className="font-bold text-primary">{recommendation.netProfit}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <TrendingUp className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Market Outlook</h4>
                  <p className="text-sm text-muted-foreground">{recommendation.marketOutlook}</p>
                  {recommendation.mspAvailable && (
                    <Badge variant="secondary" className="mt-2">
                      MSP Available
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <AlertTriangle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Best Varieties</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {recommendation.bestVarieties.map((variety, index) => (
                      <Badge key={index} variant="outline">
                        {variety}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Accept Recommendation
              </Button>
              <Button variant="outline" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <img
              src={recommendation.image || "/placeholder.svg"}
              alt={`${recommendation.name} field`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-2">Why This Recommendation?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Perfect match for your soil type and climate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Optimal planting season timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Strong market demand and pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Matches your risk tolerance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
