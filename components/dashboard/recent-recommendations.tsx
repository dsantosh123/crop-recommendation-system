import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, TrendingUp, AlertTriangle } from "lucide-react"

const recommendations = [
  {
    crop: "Wheat",
    date: "2024-01-15",
    confidence: 92,
    status: "Active",
    profit: "₹45,000",
    risk: "Low",
  },
  {
    crop: "Mustard",
    date: "2024-01-10",
    confidence: 87,
    status: "Completed",
    profit: "₹32,000",
    risk: "Medium",
  },
  {
    crop: "Barley",
    date: "2024-01-05",
    confidence: 78,
    status: "Active",
    profit: "₹28,000",
    risk: "Low",
  },
]

export function RecentRecommendations() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Recommendations</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold">{rec.crop.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{rec.crop}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {rec.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    {rec.confidence}% confidence
                  </div>
                  <div className="text-sm font-medium">{rec.profit}</div>
                </div>

                <div className="flex flex-col gap-1">
                  <Badge variant={rec.status === "Active" ? "default" : "secondary"}>{rec.status}</Badge>
                  <Badge variant={rec.risk === "Low" ? "secondary" : "destructive"} className="text-xs">
                    <AlertTriangle className="h-2 w-2 mr-1" />
                    {rec.risk} Risk
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
