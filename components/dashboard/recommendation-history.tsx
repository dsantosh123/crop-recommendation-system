"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { History, Calendar, TrendingUp, TrendingDown, Eye, Download, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface RecommendationRecord {
  id: string
  date: string
  season: string
  recommendedCrop: string
  confidence: number
  expectedProfit: number
  actualProfit?: number
  status: "completed" | "in-progress" | "planned"
  farmSize: number
  location: string
}

export function RecommendationHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  // Mock data - in real app, this would come from API
  const [recommendations] = useState<RecommendationRecord[]>([
    {
      id: "1",
      date: "2024-03-15",
      season: "Rabi 2024",
      recommendedCrop: "Wheat",
      confidence: 92,
      expectedProfit: 45000,
      actualProfit: 48000,
      status: "completed",
      farmSize: 2.5,
      location: "Punjab",
    },
    {
      id: "2",
      date: "2024-01-20",
      season: "Kharif 2023",
      recommendedCrop: "Rice",
      confidence: 88,
      expectedProfit: 38000,
      actualProfit: 35000,
      status: "completed",
      farmSize: 2.5,
      location: "Punjab",
    },
    {
      id: "3",
      date: "2024-06-10",
      season: "Kharif 2024",
      recommendedCrop: "Cotton",
      confidence: 85,
      expectedProfit: 52000,
      status: "in-progress",
      farmSize: 2.5,
      location: "Punjab",
    },
    {
      id: "4",
      date: "2024-09-01",
      season: "Rabi 2025",
      recommendedCrop: "Mustard",
      confidence: 90,
      expectedProfit: 42000,
      status: "planned",
      farmSize: 2.5,
      location: "Punjab",
    },
  ])

  const filteredRecommendations = recommendations.filter((rec) => {
    const matchesSearch =
      rec.recommendedCrop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.season.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || rec.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "planned":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getProfitTrend = (expected: number, actual?: number) => {
    if (!actual) return null
    const diff = actual - expected
    const percentage = ((diff / expected) * 100).toFixed(1)
    return {
      value: diff,
      percentage,
      isPositive: diff >= 0,
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Recommendation History
          </CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by crop or season..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="in-progress">Active</TabsTrigger>
                <TabsTrigger value="planned">Planned</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Recommendations List */}
          <div className="space-y-4">
            {filteredRecommendations.map((rec) => {
              const profitTrend = getProfitTrend(rec.expectedProfit, rec.actualProfit)

              return (
                <div key={rec.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-lg">{rec.recommendedCrop}</h4>
                        <Badge className={getStatusColor(rec.status)}>{rec.status.replace("-", " ")}</Badge>
                        <Badge variant="outline">{rec.confidence}% confidence</Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {rec.season}
                        </span>
                        <span>{rec.farmSize} acres</span>
                        <span>{rec.location}</span>
                      </div>

                      <div className="flex items-center gap-6">
                        <div>
                          <span className="text-sm text-muted-foreground">Expected Profit:</span>
                          <div className="font-semibold text-green-600">₹{rec.expectedProfit.toLocaleString()}</div>
                        </div>

                        {rec.actualProfit && (
                          <div>
                            <span className="text-sm text-muted-foreground">Actual Profit:</span>
                            <div className="font-semibold">₹{rec.actualProfit.toLocaleString()}</div>
                          </div>
                        )}

                        {profitTrend && (
                          <div className="flex items-center gap-1">
                            {profitTrend.isPositive ? (
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-red-500" />
                            )}
                            <span
                              className={`text-sm font-medium ${
                                profitTrend.isPositive ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {profitTrend.isPositive ? "+" : ""}₹{Math.abs(profitTrend.value).toLocaleString()}(
                              {profitTrend.isPositive ? "+" : ""}
                              {profitTrend.percentage}%)
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredRecommendations.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <History className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No recommendations found matching your criteria.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
