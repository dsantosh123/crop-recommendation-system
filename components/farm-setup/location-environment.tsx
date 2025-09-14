"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Droplets, Thermometer } from "lucide-react"
import type { FarmData } from "@/app/farm-setup/page"

interface LocationEnvironmentProps {
  data: FarmData
  onNext: (data: Partial<FarmData>) => void
  onPrevious: () => void
  isFirstStep: boolean
  isLastStep: boolean
}

export function LocationEnvironment({ data, onNext, onPrevious }: LocationEnvironmentProps) {
  const [formData, setFormData] = useState({
    location: data.location,
    pincode: data.pincode,
    soilType: data.soilType,
    waterSource: data.waterSource,
    irrigationMethod: data.irrigationMethod,
    previousPerformance: data.previousPerformance,
  })

  const [locationDetected, setLocationDetected] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(formData)
  }

  const handleAutoDetectLocation = () => {
    // Simulate location detection
    setFormData((prev) => ({
      ...prev,
      location: "Delhi, India",
      pincode: "110001",
      soilType: "Alluvial",
    }))
    setLocationDetected(true)
  }

  const isFormValid =
    formData.location &&
    formData.pincode &&
    formData.soilType &&
    formData.waterSource &&
    formData.irrigationMethod &&
    formData.previousPerformance

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Location</Label>
          <Button type="button" variant="outline" size="sm" onClick={handleAutoDetectLocation}>
            <MapPin className="h-4 w-4 mr-2" />
            Auto-detect Location
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location">City/District</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
              placeholder="e.g., Delhi, Punjab"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              id="pincode"
              value={formData.pincode}
              onChange={(e) => setFormData((prev) => ({ ...prev, pincode: e.target.value }))}
              placeholder="110001"
              maxLength={6}
              required
            />
          </div>
        </div>

        {locationDetected && (
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-green-700">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">Location detected successfully!</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="soilType">Soil Type</Label>
        <Select
          value={formData.soilType}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, soilType: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select soil type (auto-detected from government database)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Alluvial">Alluvial Soil</SelectItem>
            <SelectItem value="Black">Black Soil (Regur)</SelectItem>
            <SelectItem value="Red">Red Soil</SelectItem>
            <SelectItem value="Laterite">Laterite Soil</SelectItem>
            <SelectItem value="Desert">Desert Soil</SelectItem>
            <SelectItem value="Mountain">Mountain Soil</SelectItem>
            <SelectItem value="Saline">Saline Soil</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="waterSource">Water Source</Label>
          <Select
            value={formData.waterSource}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, waterSource: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select water source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rain-fed">Rain-fed</SelectItem>
              <SelectItem value="borewell">Borewell</SelectItem>
              <SelectItem value="canal">Canal</SelectItem>
              <SelectItem value="mixed">Mixed Sources</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="irrigationMethod">Irrigation Method</Label>
          <Select
            value={formData.irrigationMethod}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, irrigationMethod: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select irrigation method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flood">Flood Irrigation</SelectItem>
              <SelectItem value="sprinkler">Sprinkler</SelectItem>
              <SelectItem value="drip">Drip Irrigation</SelectItem>
              <SelectItem value="none">No Irrigation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="previousPerformance">Previous Season Performance</Label>
        <Select
          value={formData.previousPerformance}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, previousPerformance: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="How was your last season?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="good">Good - Met expectations</SelectItem>
            <SelectItem value="average">Average - Moderate success</SelectItem>
            <SelectItem value="poor">Poor - Below expectations</SelectItem>
            <SelectItem value="first-time">First Time Farming</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Location</div>
            <div className="text-sm text-muted-foreground">{formData.location || "Not set"}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Soil Type</div>
            <div className="text-sm text-muted-foreground">{formData.soilType || "Not selected"}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Water Source</div>
            <div className="text-sm text-muted-foreground">{formData.waterSource || "Not selected"}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous: Basic Details
        </Button>
        <Button type="submit" disabled={!isFormValid}>
          Next: Preferences & Constraints
        </Button>
      </div>
    </form>
  )
}
