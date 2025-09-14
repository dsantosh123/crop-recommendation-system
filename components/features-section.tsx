import { Card, CardContent } from "@/components/ui/card"
import { CloudRain, Thermometer, TrendingUp, MapPin, Calculator, Shield } from "lucide-react"

const features = [
  {
    icon: CloudRain,
    title: "Weather Analysis",
    description: "Real-time weather data and seasonal forecasts for optimal planting decisions",
    image: "/weather-forecast-with-rain-clouds-and-sun.jpg",
  },
  {
    icon: Thermometer,
    title: "Soil Assessment",
    description: "Comprehensive soil analysis including pH, nutrients, and moisture levels",
    image: "/soil-sample-analysis-with-testing-equipment.jpg",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Current market prices and demand forecasts for different crops",
    image: "/market-price-charts-and-agricultural-commodities.jpg",
  },
  {
    icon: MapPin,
    title: "Location-Based",
    description: "Recommendations tailored to your specific geographic location and climate",
    image: "/gps-location-pin-on-agricultural-map.jpg",
  },
  {
    icon: Calculator,
    title: "Profit Calculator",
    description: "Detailed cost-benefit analysis and expected returns for each crop",
    image: "/calculator-with-rupee-symbols-and-profit-charts.jpg",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Evaluate potential risks including pests, diseases, and market volatility",
    image: "/shield-protecting-crops-from-pests-and-diseases.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FarmAI?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered system analyzes multiple factors to give you the most accurate crop recommendations for your
            farm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
