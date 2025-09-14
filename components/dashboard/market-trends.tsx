import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const marketData = [
  { crop: "Wheat", price: "₹2,150", change: "+5.2%", trend: "up" },
  { crop: "Rice", price: "₹3,200", change: "-2.1%", trend: "down" },
  { crop: "Maize", price: "₹1,850", change: "+3.8%", trend: "up" },
  { crop: "Mustard", price: "₹5,400", change: "+7.5%", trend: "up" },
  { crop: "Barley", price: "₹1,650", change: "-1.2%", trend: "down" },
]

export function MarketTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Trends (Per Quintal)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {marketData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{item.crop.charAt(0)}</span>
                </div>
                <span className="font-medium">{item.crop}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-semibold">{item.price}</span>
                <div className={`flex items-center gap-1 ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {item.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">{item.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
