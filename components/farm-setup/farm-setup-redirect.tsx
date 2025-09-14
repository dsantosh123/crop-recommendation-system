"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function FarmSetupRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user")
    if (!user) {
      router.push("/login")
      return
    }

    // Redirect to farm setup
    router.push("/farm-setup")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p>Redirecting to farm setup...</p>
      </div>
    </div>
  )
}
