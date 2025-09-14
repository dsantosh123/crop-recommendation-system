import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "राम सिंह",
    location: "Punjab",
    crop: "Wheat",
    quote: "FarmAI ने मुझे सही समय पर गेहूं लगाने की सलाह दी। इस साल मेरी फसल 30% ज्यादा हुई।",
    rating: 5,
    avatar: "/indian-farmer-portrait-smiling.jpg",
  },
  {
    name: "सुनीता देवी",
    location: "Haryana",
    crop: "Rice",
    quote: "मार्केट की जानकारी और मौसम का विश्लेषण बहुत सटीक था। धान की अच्छी कीमत मिली।",
    rating: 5,
    avatar: "/indian-woman-farmer-portrait.jpg",
  },
  {
    name: "अजय पटेल",
    location: "Gujarat",
    crop: "Cotton",
    quote: "AI की सलाह से कपास की खेती में जोखिम कम हो गया। अब मैं हर सीजन इसका इस्तेमाल करता हूं।",
    rating: 5,
    avatar: "/indian-male-farmer-with-cotton-field-background.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Farmers Say</h2>
          <p className="text-xl text-muted-foreground">Real success stories from farmers across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location} • {testimonial.crop} Farmer
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
