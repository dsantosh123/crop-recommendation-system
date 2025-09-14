import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Droplets, Thermometer, Wind } from "lucide-react"

export function WeatherWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5" />
          Weather Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold">24°C</div>
          <div className="text-muted-foreground">Partly Cloudy</div>
          <div className="text-sm text-muted-foreground">Delhi, India</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-orange-500" />
            <div>
              <div className="text-sm font-medium">32°/18°</div>
              <div className="text-xs text-muted-foreground">High/Low</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <div>
              <div className="text-sm font-medium">65%</div>
              <div className="text-xs text-muted-foreground">Humidity</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium">12 km/h</div>
              <div className="text-xs text-muted-foreground">Wind</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Cloud className="h-4 w-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium">20%</div>
              <div className="text-xs text-muted-foreground">Rain</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-medium mb-2">7-Day Outlook</h4>
          <div className="space-y-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
              <div key={day} className="flex items-center justify-between text-sm">
                <span>{day}</span>
                <div className="flex items-center gap-2">
                  <Cloud className="h-3 w-3" />
                  <span>28°/16°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
