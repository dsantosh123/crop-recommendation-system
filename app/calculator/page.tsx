"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, DollarSign, Minus, Plus, BarChart3 } from "lucide-react"
import { useState } from "react"

export default function ProfitCalculatorPage() {
  const [calculation, setCalculation] = useState({
    crop: "",
    farmSize: "",
    seedCost: "",
    fertilizerCost: "",
    laborCost: "",
    irrigationCost: "",
    otherCosts: "",
    expectedYield: "",
    marketPrice: "",
    season: "",
  })

  const [results, setResults] = useState<any>(null)

  const cropData = {
    wheat: { avgYield: 40, avgPrice: 2150, season: "Rabi" },
    rice: { avgYield: 45, avgPrice: 3200, season: "Kharif" },
    maize: { avgYield: 35, avgPrice: 1850, season: "Both" },
    cotton: { avgYield: 15, avgPrice: 6500, season: "Kharif" },
    sugarcane: { avgYield: 700, avgPrice: 350, season: "Annual" },
  }

  const calculateProfit = () => {
    const farmSize = Number.parseFloat(calculation.farmSize) || 0
    const totalCosts =
      (Number.parseFloat(calculation.seedCost) || 0) +
      (Number.parseFloat(calculation.fertilizerCost) || 0) +
      (Number.parseFloat(calculation.laborCost) || 0) +
      (Number.parseFloat(calculation.irrigationCost) || 0) +
      (Number.parseFloat(calculation.otherCosts) || 0)

    const expectedYield = Number.parseFloat(calculation.expectedYield) || 0
    const marketPrice = Number.parseFloat(calculation.marketPrice) || 0

    const totalRevenue = expectedYield * farmSize * marketPrice
    const totalProfit = totalRevenue - totalCosts * farmSize
    const profitPerAcre = totalProfit / farmSize
    const roi = (totalProfit / (totalCosts * farmSize)) * 100

    setResults({
      totalRevenue,
      totalCosts: totalCosts * farmSize,
      totalProfit,
      profitPerAcre,
      roi,
      breakEven: totalCosts / marketPrice,
    })
  }

  const handleCropChange = (crop: string) => {
    setCalculation({
      ...calculation,
      crop,
      expectedYield: cropData[crop as keyof typeof cropData]?.avgYield.toString() || "",
      marketPrice: cropData[crop as keyof typeof cropData]?.avgPrice.toString() || "",
      season: cropData[crop as keyof typeof cropData]?.season || "",
    })
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Profit Calculator</h1>
            <p className="text-muted-foreground mt-2">Calculate potential earnings and ROI for your crops</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Crop & Farm Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="crop">Select Crop</Label>
                    <Select onValueChange={handleCropChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose crop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheat">Wheat</SelectItem>
                        <SelectItem value="rice">Rice</SelectItem>
                        <SelectItem value="maize">Maize</SelectItem>
                        <SelectItem value="cotton">Cotton</SelectItem>
                        <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="farmSize">Farm Size (Acres)</Label>
                    <Input
                      id="farmSize"
                      type="number"
                      placeholder="Enter farm size"
                      value={calculation.farmSize}
                      onChange={(e) => setCalculation({ ...calculation, farmSize: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedYield">Expected Yield (Quintals/Acre)</Label>
                    <Input
                      id="expectedYield"
                      type="number"
                      placeholder="Yield per acre"
                      value={calculation.expectedYield}
                      onChange={(e) => setCalculation({ ...calculation, expectedYield: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="marketPrice">Market Price (₹/Quintal)</Label>
                    <Input
                      id="marketPrice"
                      type="number"
                      placeholder="Current market price"
                      value={calculation.marketPrice}
                      onChange={(e) => setCalculation({ ...calculation, marketPrice: e.target.value })}
                    />
                  </div>
                </div>
                {calculation.season && (
                  <Badge variant="outline" className="w-fit">
                    {calculation.season} Season
                  </Badge>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Cost Breakdown (Per Acre)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="seedCost">Seed Cost (₹)</Label>
                    <Input
                      id="seedCost"
                      type="number"
                      placeholder="0"
                      value={calculation.seedCost}
                      onChange={(e) => setCalculation({ ...calculation, seedCost: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="fertilizerCost">Fertilizer Cost (₹)</Label>
                    <Input
                      id="fertilizerCost"
                      type="number"
                      placeholder="0"
                      value={calculation.fertilizerCost}
                      onChange={(e) => setCalculation({ ...calculation, fertilizerCost: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="laborCost">Labor Cost (₹)</Label>
                    <Input
                      id="laborCost"
                      type="number"
                      placeholder="0"
                      value={calculation.laborCost}
                      onChange={(e) => setCalculation({ ...calculation, laborCost: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="irrigationCost">Irrigation Cost (₹)</Label>
                    <Input
                      id="irrigationCost"
                      type="number"
                      placeholder="0"
                      value={calculation.irrigationCost}
                      onChange={(e) => setCalculation({ ...calculation, irrigationCost: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="otherCosts">Other Costs (₹)</Label>
                    <Input
                      id="otherCosts"
                      type="number"
                      placeholder="Transport, storage, etc."
                      value={calculation.otherCosts}
                      onChange={(e) => setCalculation({ ...calculation, otherCosts: e.target.value })}
                    />
                  </div>
                </div>
                <Button onClick={calculateProfit} className="w-full">
                  Calculate Profit
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Profit Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div>
                          <p className="text-sm text-green-600">Total Revenue</p>
                          <p className="text-2xl font-bold text-green-800">₹{results.totalRevenue.toLocaleString()}</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-green-600" />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                        <div>
                          <p className="text-sm text-red-600">Total Costs</p>
                          <p className="text-2xl font-bold text-red-800">₹{results.totalCosts.toLocaleString()}</p>
                        </div>
                        <Minus className="h-8 w-8 text-red-600" />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div>
                          <p className="text-sm text-blue-600">Net Profit</p>
                          <p className="text-2xl font-bold text-blue-800">₹{results.totalProfit.toLocaleString()}</p>
                        </div>
                        <Plus className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Profit per Acre</span>
                        <Badge variant="secondary">₹{results.profitPerAcre.toLocaleString()}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Return on Investment</span>
                        <Badge variant={results.roi > 0 ? "default" : "destructive"}>{results.roi.toFixed(1)}%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Break-even Yield</span>
                        <Badge variant="outline">{results.breakEven.toFixed(1)} quintals/acre</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      {results.roi > 20 && (
                        <p className="text-green-600">✅ Excellent ROI! This crop is highly profitable.</p>
                      )}
                      {results.roi > 10 && results.roi <= 20 && (
                        <p className="text-blue-600">✅ Good ROI. Consider optimizing costs for better returns.</p>
                      )}
                      {results.roi > 0 && results.roi <= 10 && (
                        <p className="text-yellow-600">⚠️ Low ROI. Consider alternative crops or cost reduction.</p>
                      )}
                      {results.roi <= 0 && (
                        <p className="text-red-600">❌ Negative ROI. This crop may result in losses.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-64">
                  <div className="text-center text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4" />
                    <p>Enter your crop and cost details to calculate profit</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
