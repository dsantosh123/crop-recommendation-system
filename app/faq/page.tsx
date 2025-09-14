"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle } from "lucide-react"

interface FAQ {
  id: string
  category: string
  question: string
  answer: string
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const faqs: FAQ[] = [
    {
      id: "1",
      category: "general",
      question: "What is KrishiAI and how does it work?",
      answer:
        "KrishiAI is an AI-powered platform that provides personalized crop recommendations to farmers. Our system analyzes your farm data, soil conditions, weather patterns, and market trends to suggest the most profitable crops for your specific situation.",
    },
    {
      id: "2",
      category: "general",
      question: "Is KrishiAI free to use?",
      answer:
        "Yes, our basic crop recommendation service is completely free for all farmers across India. We also offer premium features for advanced analytics and detailed market insights.",
    },
    {
      id: "3",
      category: "technical",
      question: "How accurate are your crop recommendations?",
      answer:
        "Our AI model has achieved a 92% accuracy rate, validated through real farmer outcomes over multiple seasons. We continuously improve our algorithms based on feedback and new data.",
    },
    {
      id: "4",
      category: "technical",
      question: "What data do you need from my farm?",
      answer:
        "We need basic information like farm size, location, soil type, water source, previous crops grown, and your budget. This helps our AI provide personalized recommendations.",
    },
    {
      id: "5",
      category: "support",
      question: "Do you provide support in regional languages?",
      answer:
        "Currently, we support Hindi and English. We're working on adding more regional languages like Punjabi, Marathi, Tamil, and Telugu in the coming months.",
    },
    {
      id: "6",
      category: "support",
      question: "How can I contact customer support?",
      answer:
        "You can reach us through our contact form, email at support@krishiai.com, or call our toll-free number 1800-123-4567. Our support team is available Monday to Friday, 9 AM to 6 PM.",
    },
    {
      id: "7",
      category: "features",
      question: "Can I track my farming history on the platform?",
      answer:
        "Yes, our dashboard allows you to track all your past recommendations, compare expected vs actual profits, and analyze your farming performance over multiple seasons.",
    },
    {
      id: "8",
      category: "features",
      question: "Do you provide market price information?",
      answer:
        "Yes, we provide real-time mandi prices, market trends, and price forecasts to help you make informed decisions about when to sell your crops.",
    },
    {
      id: "9",
      category: "technical",
      question: "What if the weather changes after I get a recommendation?",
      answer:
        "Our system continuously monitors weather patterns and will send you alerts if significant changes occur that might affect your crop choice. You can always get updated recommendations.",
    },
    {
      id: "10",
      category: "general",
      question: "Can I use KrishiAI for organic farming?",
      answer:
        "Our system includes organic farming options and can recommend crops suitable for organic cultivation, along with organic farming practices and certification guidance.",
    },
  ]

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "technical", label: "Technical" },
    { id: "features", label: "Features" },
    { id: "support", label: "Support" },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Find answers to common questions about KrishiAI, our crop recommendations, and how to get the most out of
            our platform.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                </button>

                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No questions found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or browse different categories.
            </p>
            <Button variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        )}

        {/* Still have questions */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Request Feature
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
