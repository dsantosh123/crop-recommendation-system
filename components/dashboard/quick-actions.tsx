"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sprout, TrendingUp, MapPin, Calculator, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export function QuickActions() {
  const router = useRouter()

  const actions = [
    {
      title: "New Recommendation",
      description: "Get AI-powered crop suggestions",
      icon: Sprout,
      action: () => router.push("/farm-setup"),
      variant: "default" as const,
      badge: "Popular",
    },
    {
      title: "Market Analysis",
      description: "Check current mandi prices",
      icon: TrendingUp,
      action: () => router.push("/market-analysis"),
      variant: "outline" as const,
    },
    {
      title: "Farm Profile",
      description: "Update your farm details",
      icon: MapPin,
      action: () => router.push("/profile"),
      variant: "outline" as const,
    },
    {
      title: "Profit Calculator",
      description: "Calculate potential earnings",
      icon: Calculator,
      action: () => router.push("/calculator"),
      variant: "outline" as const,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <div key={index} className="relative">
                <Button
                  variant={action.variant}
                  className="w-full h-auto p-4 flex flex-col items-center gap-3 text-center"
                  onClick={action.action}
                >
                  <Icon className="h-6 w-6" />
                  <div>
                    <div className="font-medium text-sm">{action.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{action.description}</div>
                  </div>
                </Button>
                {action.badge && (
                  <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs px-2 py-1">
                    {action.badge}
                  </Badge>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
