"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Sprout, CloudRain, TrendingUp, MapPin, Calculator, CheckCircle, Lightbulb } from "lucide-react"

const processingSteps = [
  { id: 1, text: "Analyzing soil data...", icon: Sprout, duration: 8000 },
  { id: 2, text: "Fetching weather forecast...", icon: CloudRain, duration: 6000 },
  { id: 3, text: "Checking mandi prices...", icon: TrendingUp, duration: 7000 },
  { id: 4, text: "Calculating profit & risks...", icon: Calculator, duration: 9000 },
  { id: 5, text: "Comparing 50+ crops...", icon: MapPin, duration: 10000 },
]

const educationalTips = [
  "Did you know? Crop rotation improves soil health and reduces pest problems.",
  "Tip: Drip irrigation can save up to 50% water compared to flood irrigation.",
  "Fact: Organic farming can increase soil fertility over time.",
  "Insight: Weather patterns affect crop yield more than any other factor.",
  "Knowledge: Market timing can increase your profits by 20-30%.",
]

export default function ProcessingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Check if user has farm data
    const farmData = localStorage.getItem("farmData")
    if (!farmData) {
      router.push("/farm-setup")
      return
    }

    let totalDuration = 0
    let currentTime = 0

    // Calculate total duration
    processingSteps.forEach((step) => {
      totalDuration += step.duration
    })

    // Process each step
    processingSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index)
      }, currentTime)

      currentTime += step.duration
    })

    // Update progress continuously
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (totalDuration / 100)
        if (newProgress >= 100) {
          clearInterval(progressInterval)
          // Redirect to results after completion
          setTimeout(() => {
            router.push("/results")
          }, 1000)
          return 100
        }
        return newProgress
      })
    }, 100)

    // Rotate educational tips
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % educationalTips.length)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(tipInterval)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">AI is Analyzing Your Farm</h1>
            <p className="text-muted-foreground">
              Our advanced AI is processing your farm data to provide the best crop recommendations
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-primary/20 rounded-full animate-spin border-t-primary"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sprout className="h-8 w-8 text-primary animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Processing Progress</span>
                    <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                </div>

                <div className="space-y-4">
                  {processingSteps.map((step, index) => {
                    const StepIcon = step.icon
                    const isActive = index === currentStep
                    const isCompleted = index < currentStep

                    return (
                      <div
                        key={step.id}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          isActive
                            ? "bg-primary/10 border border-primary/20"
                            : isCompleted
                              ? "bg-green-50 border border-green-200"
                              : "bg-muted/50"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isCompleted
                              ? "bg-green-500 text-white"
                              : isActive
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                          }`}
                        >
                          {isCompleted ? <CheckCircle className="h-4 w-4" /> : <StepIcon className="h-4 w-4" />}
                        </div>
                        <span
                          className={`font-medium ${
                            isActive ? "text-primary" : isCompleted ? "text-green-700" : "text-muted-foreground"
                          }`}
                        >
                          {step.text}
                        </span>
                        {isActive && (
                          <div className="ml-auto">
                            <div className="w-4 h-4 border-2 border-primary/30 rounded-full animate-spin border-t-primary"></div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-primary mt-1" />
                <div>
                  <Badge variant="secondary" className="mb-2">
                    Farming Tip
                  </Badge>
                  <p className="text-sm leading-relaxed">{educationalTips[currentTip]}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>This usually takes 30-45 seconds. Please don't close this page.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
