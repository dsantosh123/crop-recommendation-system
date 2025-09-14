import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Calendar, IndianRupee } from "lucide-react"

const stats = [
  {
    title: "Total Recommendations",
    value: "12",
    change: "+3 this month",
    icon: Target,
    color: "text-primary",
  },
  {
    title: "Success Rate",
    value: "87%",
    change: "+5% from last season",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Current Season",
    value: "Rabi",
    change: "Ends in 45 days",
    icon: Calendar,
    color: "text-blue-600",
  },
  {
    title: "Estimated Profit",
    value: "₹2,45,000",
    change: "+15% projected",
    icon: IndianRupee,
    color: "text-orange-600",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium leading-tight">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 flex-shrink-0 ${stat.color}`} />
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-lg sm:text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
