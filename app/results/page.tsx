"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { MainRecommendation } from "@/components/results/main-recommendation"
import { AlternativeOptions } from "@/components/results/alternative-options"
import { RecommendationLogic } from "@/components/results/recommendation-logic"
import { CropComparison } from "@/components/results/crop-comparison"
import type { FarmData } from "@/app/farm-setup/page"

export interface CropRecommendation {
  name: string
  confidence: number
  expectedYield: string
  investment: string
  expectedRevenue: string
  netProfit: string
  duration: string
  riskLevel: "Low" | "Medium" | "High"
  marketOutlook: string
  mspAvailable: boolean
  bestVarieties: string[]
  image: string
}

export default function ResultsPage() {
  const [farmData, setFarmData] = useState<FarmData | null>(null)
  const [mainRecommendation, setMainRecommendation] = useState<CropRecommendation | null>(null)
  const [alternatives, setAlternatives] = useState<CropRecommendation[]>([])
  const router = useRouter()

  useEffect(() => {
    const storedFarmData = localStorage.getItem("farmData")
    if (!storedFarmData) {
      router.push("/farm-setup")
      return
    }

    const data = JSON.parse(storedFarmData) as FarmData
    setFarmData(data)

    // Generate mock recommendations based on farm data
    const recommendations = generateRecommendations(data)
    setMainRecommendation(recommendations.main)
    setAlternatives(recommendations.alternatives)

    // Save recommendation to history
    const existingHistory = JSON.parse(localStorage.getItem("recommendationHistory") || "[]")
    const newRecommendation = {
      id: Date.now(),
      date: new Date().toISOString(),
      farmData: data,
      recommendation: recommendations.main,
      alternatives: recommendations.alternatives,
    }
    localStorage.setItem("recommendationHistory", JSON.stringify([newRecommendation, ...existingHistory]))
  }, [router])

  if (!farmData || !mainRecommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading your recommendations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Your AI-Powered Crop Recommendation</h1>
            <p className="text-muted-foreground">
              Based on your farm data, weather patterns, soil analysis, and market trends
            </p>
          </div>

          <MainRecommendation recommendation={mainRecommendation} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AlternativeOptions alternatives={alternatives} />
            <RecommendationLogic farmData={farmData} recommendation={mainRecommendation} />
          </div>

          <CropComparison main={mainRecommendation} alternatives={alternatives} />
        </div>
      </div>
    </div>
  )
}

function generateRecommendations(farmData: FarmData): {
  main: CropRecommendation
  alternatives: CropRecommendation[]
} {
  // Mock AI logic based on farm data
  const season = farmData.currentSeason
  const soilType = farmData.soilType
  const budget = farmData.budget

  let mainCrop: CropRecommendation
  let altCrops: CropRecommendation[]

  if (season === "Rabi") {
    if (soilType === "Alluvial" && budget > 40000) {
      mainCrop = {
        name: "Wheat",
        confidence: 92,
        expectedYield: "45 quintals/acre",
        investment: "₹35,000",
        expectedRevenue: "₹97,500",
        netProfit: "₹62,500",
        duration: "120 days",
        riskLevel: "Low",
        marketOutlook: "Stable with MSP guarantee",
        mspAvailable: true,
        bestVarieties: ["HD-2967", "PBW-343", "DBW-88"],
        image: "/wheat-field-golden-harvest.jpg",
      }
      altCrops = [
        {
          name: "Mustard",
          confidence: 87,
          expectedYield: "18 quintals/acre",
          investment: "₹25,000",
          expectedRevenue: "₹97,200",
          netProfit: "₹72,200",
          duration: "110 days",
          riskLevel: "Medium",
          marketOutlook: "Good demand, price volatile",
          mspAvailable: true,
          bestVarieties: ["Pusa Bold", "RH-30", "Varuna"],
          image: "/mustard-field-yellow-flowers.jpg",
        },
        {
          name: "Barley",
          confidence: 78,
          expectedYield: "35 quintals/acre",
          investment: "₹28,000",
          expectedRevenue: "₹57,750",
          netProfit: "₹29,750",
          duration: "100 days",
          riskLevel: "Low",
          marketOutlook: "Steady demand from breweries",
          mspAvailable: true,
          bestVarieties: ["RD-2035", "PL-426", "BH-393"],
          image: "/barley-field-green-crop.jpg",
        },
      ]
    } else {
      mainCrop = {
        name: "Gram",
        confidence: 85,
        expectedYield: "22 quintals/acre",
        investment: "₹20,000",
        expectedRevenue: "₹110,000",
        netProfit: "₹90,000",
        duration: "95 days",
        riskLevel: "Medium",
        marketOutlook: "High demand, good prices",
        mspAvailable: true,
        bestVarieties: ["Pusa-256", "JG-11", "BG-372"],
        image: "/gram-chickpea-field.jpg",
      }
      altCrops = [
        {
          name: "Wheat",
          confidence: 80,
          expectedYield: "40 quintals/acre",
          investment: "₹30,000",
          expectedRevenue: "₹86,000",
          netProfit: "₹56,000",
          duration: "120 days",
          riskLevel: "Low",
          marketOutlook: "Stable with MSP",
          mspAvailable: true,
          bestVarieties: ["HD-2967", "PBW-343"],
          image: "/wheat-field-golden-harvest.jpg",
        },
      ]
    }
  } else {
    // Kharif season
    mainCrop = {
      name: "Rice",
      confidence: 89,
      expectedYield: "55 quintals/acre",
      investment: "₹45,000",
      expectedRevenue: "₹176,000",
      netProfit: "₹131,000",
      duration: "130 days",
      riskLevel: "Medium",
      marketOutlook: "Strong demand, MSP support",
      mspAvailable: true,
      bestVarieties: ["Pusa-44", "PR-126", "Sharbati"],
      image: "/rice-paddy-field-green.jpg",
    }
    altCrops = [
      {
        name: "Maize",
        confidence: 82,
        expectedYield: "65 quintals/acre",
        investment: "₹35,000",
        expectedRevenue: "₹120,250",
        netProfit: "₹85,250",
        duration: "100 days",
        riskLevel: "Low",
        marketOutlook: "Growing demand from poultry",
        mspAvailable: true,
        bestVarieties: ["Pioneer-30V92", "NK-6240", "DKC-9108"],
        image: "/maize-corn-field-tall-plants.jpg",
      },
    ]
  }

  return { main: mainCrop, alternatives: altCrops }
}
