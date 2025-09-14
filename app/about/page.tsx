import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Farmers Helped", value: "50,000+", icon: Users },
    { label: "Successful Recommendations", value: "87%", icon: Target },
    { label: "Profit Increase", value: "23%", icon: Award },
    { label: "AI Accuracy", value: "92%", icon: Lightbulb },
  ]

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Agricultural Scientist",
      experience: "15+ years in crop research",
      image: "/placeholder-7j0pd.png",
    },
    {
      name: "Priya Sharma",
      role: "AI/ML Engineer",
      experience: "Expert in agricultural AI",
      image: "/placeholder-f13mg.png",
    },
    {
      name: "Amit Singh",
      role: "Market Analyst",
      experience: "10+ years in commodity markets",
      image: "/placeholder-g4hqt.png",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Farmer-First Approach",
      description: "Every decision we make prioritizes the welfare and success of our farming community.",
    },
    {
      icon: Lightbulb,
      title: "Innovation in Agriculture",
      description: "We leverage cutting-edge AI technology to solve traditional farming challenges.",
    },
    {
      icon: Globe,
      title: "Sustainable Farming",
      description: "Promoting eco-friendly practices that benefit both farmers and the environment.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            About KrishiAI
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Empowering Farmers with AI-Driven Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're on a mission to revolutionize Indian agriculture by providing farmers with intelligent, data-driven
            crop recommendations that maximize profits while promoting sustainable farming practices.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Transforming Agriculture Through Technology</h3>
                <p className="text-muted-foreground mb-6">
                  Founded in 2023, KrishiAI was born from a simple observation: Indian farmers needed better tools to
                  make informed decisions about crop selection. Our team of agricultural scientists, AI engineers, and
                  market analysts came together to create a solution that combines traditional farming wisdom with
                  modern technology.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve over 50,000 farmers across India, helping them increase their profits by
                  an average of 23% while promoting sustainable farming practices.
                </p>
              </div>
              <div className="relative">
                <img src="/placeholder-rkedi.png" alt="Farmers using technology" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
