import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, IndianRupee, TrendingUp, Calendar, AlertTriangle } from "lucide-react"
import type { CropRecommendation } from "@/app/results/page"

interface CropComparisonProps {
  main: CropRecommendation
  alternatives: CropRecommendation[]
}

export function CropComparison({ main, alternatives }: CropComparisonProps) {
  const allCrops = [main, ...alternatives]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "High":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const parseProfit = (profit: string) => {
    return Number.parseInt(profit.replace(/[₹,]/g, ""))
  }

  const maxProfit = Math.max(...allCrops.map((crop) => parseProfit(crop.netProfit)))

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Full Crop Comparison
        </CardTitle>
        <Button variant="outline" size="sm">
          Export Comparison
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-medium">Crop</th>
                <th className="text-center p-3 font-medium">Confidence</th>
                <th className="text-center p-3 font-medium">Net Profit</th>
                <th className="text-center p-3 font-medium">Yield</th>
                <th className="text-center p-3 font-medium">Duration</th>
                <th className="text-center p-3 font-medium">Risk</th>
                <th className="text-center p-3 font-medium">MSP</th>
              </tr>
            </thead>
            <tbody>
              {allCrops.map((crop, index) => (
                <tr key={index} className={`border-b ${index === 0 ? "bg-primary/5" : ""}`}>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={crop.image || "/placeholder.svg"}
                        alt={crop.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div>
                        <div className="font-medium">{crop.name}</div>
                        {index === 0 && <Badge className="text-xs">Recommended</Badge>}
                      </div>
                    </div>
                  </td>
                  <td className="text-center p-3">
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium">{crop.confidence}%</span>
                    </div>
                  </td>
                  <td className="text-center p-3">
                    <div className="flex items-center justify-center gap-1">
                      <IndianRupee className="h-4 w-4 text-green-600" />
                      <span className="font-medium">{crop.netProfit}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1 mt-1">
                      <div
                        className="bg-green-500 h-1 rounded-full"
                        style={{ width: `${(parseProfit(crop.netProfit) / maxProfit) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="text-center p-3 font-medium">{crop.expectedYield}</td>
                  <td className="text-center p-3">
                    <div className="flex items-center justify-center gap-1">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{crop.duration}</span>
                    </div>
                  </td>
                  <td className="text-center p-3">
                    <Badge className={`text-xs ${getRiskColor(crop.riskLevel)}`}>
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {crop.riskLevel}
                    </Badge>
                  </td>
                  <td className="text-center p-3">
                    {crop.mspAvailable ? (
                      <Badge variant="secondary" className="text-xs">
                        Available
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground text-xs">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Key Insights</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• {main.name} offers the best balance of profit potential and risk management</li>
            <li>• All recommended crops have MSP (Minimum Support Price) guarantee</li>
            <li>• Consider market timing for optimal profit realization</li>
            <li>• Weather conditions favor {main.name} cultivation this season</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
