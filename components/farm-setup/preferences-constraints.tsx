"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Warehouse, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import type { FarmData } from "@/app/farm-setup/page"

interface PreferencesConstraintsProps {
  data: FarmData
  onNext: (data: Partial<FarmData>) => void
  onPrevious: () => void
  isFirstStep: boolean
  isLastStep: boolean
}

export function PreferencesConstraints({ data, onPrevious }: PreferencesConstraintsProps) {
  const [formData, setFormData] = useState({
    riskAppetite: data.riskAppetite,
    primaryGoal: data.primaryGoal,
    laborAvailability: data.laborAvailability,
    storageFacility: data.storageFacility,
    marketDistance: data.marketDistance,
  })

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save complete farm data
    const completeData = { ...data, ...formData }
    localStorage.setItem("farmData", JSON.stringify(completeData))

    // Redirect to AI processing
    router.push("/processing")
  }

  const handleRiskChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, riskAppetite: value[0] }))
  }

  const handleMarketDistanceChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, marketDistance: value[0] }))
  }

  const getRiskLabel = (risk: number) => {
    if (risk <= 3) return "Conservative"
    if (risk <= 7) return "Moderate"
    return "Aggressive"
  }

  const isFormValid = formData.primaryGoal && formData.laborAvailability && formData.storageFacility

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Label>Risk Appetite</Label>
        <div className="px-4">
          <Slider
            value={[formData.riskAppetite]}
            onValueChange={handleRiskChange}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Conservative</span>
            <span>Moderate</span>
            <span>Aggressive</span>
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <div className="text-xl font-bold text-primary">{getRiskLabel(formData.riskAppetite)}</div>
                <div className="text-sm text-muted-foreground">Risk Level: {formData.riskAppetite}/10</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <Label htmlFor="primaryGoal">Primary Goal</Label>
        <Select
          value={formData.primaryGoal}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, primaryGoal: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="What's your main farming objective?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="profit">Maximum Profit</SelectItem>
            <SelectItem value="food-security">Food Security</SelectItem>
            <SelectItem value="market-demand">Market Demand</SelectItem>
            <SelectItem value="experimentation">Try New Crops</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="laborAvailability">Labor Availability</Label>
          <Select
            value={formData.laborAvailability}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, laborAvailability: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select labor situation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="family">Family Labor Only</SelectItem>
              <SelectItem value="can-hire">Can Hire Workers</SelectItem>
              <SelectItem value="limited">Limited Labor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="storageFacility">Storage Facility</Label>
          <Select
            value={formData.storageFacility}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, storageFacility: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select storage option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="own">Own Storage</SelectItem>
              <SelectItem value="community">Community Storage</SelectItem>
              <SelectItem value="none">No Storage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Distance to Nearest Mandi (Market)</Label>
        <div className="px-4">
          <Slider
            value={[formData.marketDistance]}
            onValueChange={handleMarketDistanceChange}
            max={100}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>1 km</span>
            <span>100 km</span>
          </div>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <div className="font-medium">{formData.marketDistance} km to nearest mandi</div>
                <div className="text-sm text-muted-foreground">
                  {formData.marketDistance <= 10
                    ? "Excellent market access"
                    : formData.marketDistance <= 30
                      ? "Good market access"
                      : formData.marketDistance <= 50
                        ? "Moderate market access"
                        : "Limited market access"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Risk Level</div>
            <div className="text-sm text-muted-foreground">{getRiskLabel(formData.riskAppetite)}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Labor</div>
            <div className="text-sm text-muted-foreground">{formData.laborAvailability || "Not selected"}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Warehouse className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Storage</div>
            <div className="text-sm text-muted-foreground">{formData.storageFacility || "Not selected"}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous: Location & Environment
        </Button>
        <Button type="submit" size="lg" disabled={!isFormValid} className="bg-primary hover:bg-primary/90">
          Get AI Recommendation
        </Button>
      </div>
    </form>
  )
}
