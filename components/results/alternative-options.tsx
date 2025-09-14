import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, IndianRupee, AlertTriangle } from "lucide-react"
import type { CropRecommendation } from "@/app/results/page"

interface AlternativeOptionsProps {
  alternatives: CropRecommendation[]
}

export function AlternativeOptions({ alternatives }: AlternativeOptionsProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-600"
      case "Medium":
        return "text-yellow-600"
      case "High":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Alternative Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alternatives.map((crop, index) => (
          <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-lg">{crop.name}</h4>
                <Badge variant="secondary">{crop.confidence}% confidence</Badge>
              </div>
              <img
                src={crop.image || "/placeholder.svg"}
                alt={crop.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-green-600" />
                <div>
                  <div className="text-sm font-medium">{crop.netProfit}</div>
                  <div className="text-xs text-muted-foreground">Net Profit</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className={`h-4 w-4 ${getRiskColor(crop.riskLevel)}`} />
                <div>
                  <div className="text-sm font-medium">{crop.riskLevel} Risk</div>
                  <div className="text-xs text-muted-foreground">Risk Level</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Expected Yield:</span>
                <span className="font-medium">{crop.expectedYield}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Duration:</span>
                <span className="font-medium">{crop.duration}</span>
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full bg-transparent">
              View Details
            </Button>
          </div>
        ))}

        <Button variant="ghost" className="w-full">
          View Full Comparison
        </Button>
      </CardContent>
    </Card>
  )
}
