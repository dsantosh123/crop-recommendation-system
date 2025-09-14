"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, CloudRain, TrendingUp, Leaf, BarChart3 } from "lucide-react"

export function RecommendationEngine() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-primary">AI Recommendation Engine</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Understanding the intelligent algorithms that power personalized crop recommendations
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Data Collection */}
        <Card>
          <CardHeader>
            <Database className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Data Collection</CardTitle>
            <CardDescription>Multi-source agricultural data aggregation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Badge variant="secondary">Soil Analysis</Badge>
              <Badge variant="secondary">Weather Patterns</Badge>
              <Badge variant="secondary">Market Prices</Badge>
              <Badge variant="secondary">Historical Yields</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Collects real-time data from IoT sensors, satellite imagery, weather stations, and market APIs
            </p>
          </CardContent>
        </Card>

        {/* Machine Learning Models */}
        <Card>
          <CardHeader>
            <Brain className="h-8 w-8 text-primary mb-2" />
            <CardTitle>ML Algorithms</CardTitle>
            <CardDescription>Advanced predictive modeling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Badge variant="secondary">Random Forest</Badge>
              <Badge variant="secondary">Neural Networks</Badge>
              <Badge variant="secondary">Regression Analysis</Badge>
              <Badge variant="secondary">Clustering</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Ensemble methods combining multiple algorithms for accurate crop-soil-climate matching
            </p>
          </CardContent>
        </Card>

        {/* Environmental Factors */}
        <Card>
          <CardHeader>
            <CloudRain className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Climate Analysis</CardTitle>
            <CardDescription>Weather pattern recognition</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Badge variant="secondary">Rainfall Prediction</Badge>
              <Badge variant="secondary">Temperature Trends</Badge>
              <Badge variant="secondary">Humidity Levels</Badge>
              <Badge variant="secondary">Seasonal Patterns</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyzes 10+ years of climate data to predict optimal growing conditions
            </p>
          </CardContent>
        </Card>

        {/* Market Intelligence */}
        <Card>
          <CardHeader>
            <TrendingUp className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Market Intelligence</CardTitle>
            <CardDescription>Price prediction & demand analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Badge variant="secondary">Price Forecasting</Badge>
              <Badge variant="secondary">Demand Analysis</Badge>
              <Badge variant="secondary">Supply Chain</Badge>
              <Badge variant="secondary">Export Trends</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Real-time market analysis to maximize farmer profitability and reduce risk
            </p>
          </CardContent>
        </Card>

        {/* Crop Optimization */}
        <Card>
          <CardHeader>
            <Leaf className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Crop Optimization</CardTitle>
            <CardDescription>Yield maximization algorithms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Badge variant="secondary">Variety Selection</Badge>
              <Badge variant="secondary">Planting Schedule</Badge>
              <Badge variant="secondary">Resource Planning</Badge>
              <Badge variant="secondary">Risk Assessment</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Optimizes crop selection based on soil health, climate suitability, and market potential
            </p>
          </CardContent>
        </Card>

        {/* Performance Analytics */}
        <Card>
          <CardHeader>
            <BarChart3 className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>Continuous learning & improvement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Badge variant="secondary">Yield Tracking</Badge>
              <Badge variant="secondary">Model Accuracy</Badge>
              <Badge variant="secondary">Farmer Feedback</Badge>
              <Badge variant="secondary">Algorithm Updates</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Tracks recommendation success rates and continuously improves model accuracy
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Algorithm Flow */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendation Process Flow</CardTitle>
          <CardDescription>Step-by-step AI decision making process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold">Data Input</h4>
              <p className="text-sm text-muted-foreground">Farm details, soil type, location, budget</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h4 className="font-semibold">AI Analysis</h4>
              <p className="text-sm text-muted-foreground">ML models process environmental & market data</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h4 className="font-semibold">Optimization</h4>
              <p className="text-sm text-muted-foreground">Algorithm ranks crops by success probability</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">4</span>
              </div>
              <h4 className="font-semibold">Recommendations</h4>
              <p className="text-sm text-muted-foreground">Personalized crop suggestions with reasoning</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
