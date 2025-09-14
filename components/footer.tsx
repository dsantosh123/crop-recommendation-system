import { Sprout, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">FarmAI</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Empowering farmers with AI-driven crop recommendations for better yields and profits.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-muted-foreground">
              {/* Contact Number */}
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919156719695" className="hover:underline">
                  +91 91567 19695
                </a>
              </li>

              {/* Primary Email */}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@farmai.in" className="hover:underline">
                  support@farmai.in
                </a>
              </li>

              {/* Secondary Email */}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:gauravbawankar299@gmail.com" className="hover:underline">
                  gauravbawankar299@gmail.com
                </a>
              </li>

              {/* Correct Location: YCCE Wanadongri */}
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <a
                  href="https://www.google.com/maps/place/Yeshwantrao+Chavan+College+of+Engineering+(YCCE),+Nagpur/@21.0951911,78.9759974,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4952117eaac51:0x6d8277793eb63d6a!8m2!3d21.0951911!4d78.9785723!16s%2Fm%2F02qlptv?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Wanadongri, Nagpur
                </a>
              </li>
            </ul>
          </div>


        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 FarmAI. All rights reserved. Made with ❤️ for Indian farmers.</p>
        </div>
      </div>
    </footer>
  )
}
