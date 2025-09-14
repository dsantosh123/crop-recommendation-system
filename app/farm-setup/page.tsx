"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BasicFarmDetails } from "@/components/farm-setup/basic-farm-details"
import { LocationEnvironment } from "@/components/farm-setup/location-environment"
import { PreferencesConstraints } from "@/components/farm-setup/preferences-constraints"
import { CheckCircle } from "lucide-react"

export interface FarmData {
  // Basic Details
  farmSize: string
  currentSeason: string
  previousCrop: string
  budget: number

  // Location & Environment
  location: string
  pincode: string
  soilType: string
  waterSource: string
  irrigationMethod: string
  previousPerformance: string

  // Preferences & Constraints
  riskAppetite: number
  primaryGoal: string
  laborAvailability: string
  storageFacility: string
  marketDistance: number
}

const initialData: FarmData = {
  farmSize: "",
  currentSeason: "Rabi",
  previousCrop: "",
  budget: 50000,
  location: "",
  pincode: "",
  soilType: "",
  waterSource: "",
  irrigationMethod: "",
  previousPerformance: "",
  riskAppetite: 5,
  primaryGoal: "",
  laborAvailability: "",
  storageFacility: "",
  marketDistance: 10,
}

export default function FarmSetupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [farmData, setFarmData] = useState<FarmData>(initialData)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const steps = [
    { number: 1, title: "Basic Farm Details", component: BasicFarmDetails },
    { number: 2, title: "Location & Environment", component: LocationEnvironment },
    { number: 3, title: "Preferences & Constraints", component: PreferencesConstraints },
  ]

  const handleNext = (stepData: Partial<FarmData>) => {
    setFarmData((prev) => ({ ...prev, ...stepData }))
    setCompletedSteps((prev) => [...prev.filter((s) => s !== currentStep), currentStep])

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber <= currentStep || completedSteps.includes(stepNumber)) {
      setCurrentStep(stepNumber)
    }
  }

  const CurrentStepComponent = steps[currentStep - 1].component

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Farm Information Setup</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Help us understand your farm better to provide accurate crop recommendations
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            {/* Mobile Progress - Simplified */}
            <div className="block md:hidden mb-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-sm font-medium">Step {currentStep} of 3</span>
                <span className="text-xs text-muted-foreground">• {steps[currentStep - 1].title}</span>
              </div>
              <Progress value={(currentStep / 3) * 100} className="h-2" />
            </div>

            {/* Desktop Progress - Full */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className={`flex items-center cursor-pointer ${
                      step.number <= currentStep || completedSteps.includes(step.number)
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => handleStepClick(step.number)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mr-3 ${
                        completedSteps.includes(step.number)
                          ? "bg-primary border-primary text-primary-foreground"
                          : step.number === currentStep
                            ? "border-primary bg-primary/10"
                            : "border-muted-foreground/30"
                      }`}
                    >
                      {completedSteps.includes(step.number) ? <CheckCircle className="h-5 w-5" /> : step.number}
                    </div>
                    <div>
                      <div className="font-medium">{step.title}</div>
                      <div className="text-sm text-muted-foreground">Step {step.number} of 3</div>
                    </div>
                  </div>
                ))}
              </div>
              <Progress value={(currentStep / 3) * 100} className="h-2" />
            </div>
          </div>

          {/* Current Step Content */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {currentStep}
                </span>
                <span className="hidden sm:inline">{steps[currentStep - 1].title}</span>
                <span className="sm:hidden text-base">{steps[currentStep - 1].title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <CurrentStepComponent
                data={farmData}
                onNext={handleNext}
                onPrevious={handlePrevious}
                isFirstStep={currentStep === 1}
                isLastStep={currentStep === 3}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
