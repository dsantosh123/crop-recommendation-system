import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('/indian-farmland-with-crops-and-farmer-silhouette-a.jpg')`,
        }}
      />

      <div className="relative container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6">
              <Users className="h-4 w-4 mr-2" />
              50,000+ Farmers Trust Us
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              <span className="text-primary">कौन सी फसल लगाएं?</span>
              <br />
              <span className="text-foreground">AI से पूछो!</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl lg:max-w-none text-pretty">
              Get personalized crop recommendations based on your soil, weather conditions, and market trends. Make
              informed farming decisions with AI-powered insights.
            </p>

            <div className="mb-12">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/recommendation">Get Crop Recommendation</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl lg:max-w-none">
              <div className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-lg bg-card border">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="font-medium">Increase Yield</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-lg bg-card border">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-medium">Reduce Risk</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-lg bg-card border">
                <Users className="h-6 w-6 text-primary" />
                <span className="font-medium">Expert Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src="/landingPage.jpg"
                alt="AI-powered farming illustration showing a farmer with smartphone in a modern Indian farm field"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
