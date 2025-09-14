"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Calendar, IndianRupee } from "lucide-react"
import type { FarmData } from "@/app/farm-setup/page"

interface BasicFarmDetailsProps {
  data: FarmData
  onNext: (data: Partial<FarmData>) => void
  onPrevious: () => void
  isFirstStep: boolean
  isLastStep: boolean
}

export function BasicFarmDetails({ data, onNext, isFirstStep }: BasicFarmDetailsProps) {
  const [formData, setFormData] = useState({
    farmSize: data.farmSize,
    currentSeason: data.currentSeason,
    previousCrop: data.previousCrop,
    budget: data.budget,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(formData)
  }

  const handleBudgetChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, budget: value[0] }))
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`
    }
    return `₹${(amount / 1000).toFixed(0)}K`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="farmSize">Farm Size</Label>
          <Select
            value={formData.farmSize}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, farmSize: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select farm size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (&lt; 2 acres)</SelectItem>
              <SelectItem value="medium">Medium (2-5 acres)</SelectItem>
              <SelectItem value="large">Large (5-10 acres)</SelectItem>
              <SelectItem value="very-large">Very Large (&gt; 10 acres)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentSeason">Current Season</Label>
          <Select
            value={formData.currentSeason}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, currentSeason: value }))}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kharif">Kharif (June-October)</SelectItem>
              <SelectItem value="Rabi">Rabi (November-April)</SelectItem>
              <SelectItem value="Zaid">Zaid (April-June)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="previousCrop">Previous Crop</Label>
        <Select
          value={formData.previousCrop}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, previousCrop: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select previous crop or first-time farming" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first-time">First Time Farming</SelectItem>
            <SelectItem value="wheat">Wheat</SelectItem>
            <SelectItem value="rice">Rice</SelectItem>
            <SelectItem value="maize">Maize</SelectItem>
            <SelectItem value="cotton">Cotton</SelectItem>
            <SelectItem value="sugarcane">Sugarcane</SelectItem>
            <SelectItem value="mustard">Mustard</SelectItem>
            <SelectItem value="barley">Barley</SelectItem>
            <SelectItem value="gram">Gram</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label>Budget for Farming (₹)</Label>
        <div className="px-4">
          <Slider
            value={[formData.budget]}
            onValueChange={handleBudgetChange}
            max={500000}
            min={10000}
            step={5000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>₹10K</span>
            <span>₹5L</span>
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <IndianRupee className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-primary">{formatCurrency(formData.budget)}</div>
                <div className="text-sm text-muted-foreground">Selected Budget</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-2">
          <Sprout className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Farm Size</div>
            <div className="text-sm text-muted-foreground">{formData.farmSize || "Not selected"}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Season</div>
            <div className="text-sm text-muted-foreground">{formData.currentSeason}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IndianRupee className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Budget</div>
            <div className="text-sm text-muted-foreground">{formatCurrency(formData.budget)}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={!formData.farmSize}>
          Next: Location & Environment
        </Button>
      </div>
    </form>
  )
}
