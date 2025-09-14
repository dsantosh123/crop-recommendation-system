import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Minus, MapPin, Calendar, RefreshCw } from "lucide-react"

export default function MarketAnalysisPage() {
  const marketData = [
    {
      crop: "Wheat",
      currentPrice: "₹2,150",
      change: "+5.2%",
      trend: "up",
      location: "Delhi Mandi",
      lastUpdated: "2 hours ago",
      demand: "High",
      quality: "Grade A",
    },
    {
      crop: "Rice",
      currentPrice: "₹3,200",
      change: "-2.1%",
      trend: "down",
      location: "Punjab Mandi",
      lastUpdated: "1 hour ago",
      demand: "Medium",
      quality: "Grade A",
    },
    {
      crop: "Maize",
      currentPrice: "₹1,850",
      change: "0.0%",
      trend: "stable",
      location: "UP Mandi",
      lastUpdated: "3 hours ago",
      demand: "High",
      quality: "Grade B",
    },
    {
      crop: "Cotton",
      currentPrice: "₹6,500",
      change: "+8.7%",
      trend: "up",
      location: "Gujarat Mandi",
      lastUpdated: "1 hour ago",
      demand: "Very High",
      quality: "Grade A",
    },
    {
      crop: "Sugarcane",
      currentPrice: "₹350",
      change: "+3.1%",
      trend: "up",
      location: "Maharashtra Mandi",
      lastUpdated: "4 hours ago",
      demand: "Medium",
      quality: "Grade A",
    },
    {
      crop: "Soybean",
      currentPrice: "₹4,200",
      change: "-1.5%",
      trend: "down",
      location: "MP Mandi",
      lastUpdated: "2 hours ago",
      demand: "Low",
      quality: "Grade B",
    },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Very High":
        return "bg-green-100 text-green-800"
      case "High":
        return "bg-blue-100 text-blue-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Market Analysis</h1>
            <p className="text-muted-foreground mt-2">Real-time mandi prices and market trends</p>
          </div>
          <Button className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.crop}</CardTitle>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(item.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(item.trend)}`}>{item.change}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-primary">{item.currentPrice}</div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Updated {item.lastUpdated}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge className={getDemandColor(item.demand)}>{item.demand} Demand</Badge>
                  <Badge variant="outline">{item.quality}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-800">Rising Prices</h3>
                <p className="text-sm text-green-600 mt-1">Cotton, Wheat, Sugarcane showing upward trends</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-800">Best Markets</h3>
                <p className="text-sm text-blue-600 mt-1">Gujarat and Punjab offering premium prices</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold text-orange-800">Seasonal Trends</h3>
                <p className="text-sm text-orange-600 mt-1">Winter crops showing strong demand</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
