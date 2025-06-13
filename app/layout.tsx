import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import { Toaster } from "@/components/ui/toaster"
import { CustomCursor } from "@/components/custom-cursor"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KIITease - KIIT University Student Platform",
  description: "Section swapping, teacher reviews, notes sharing, and more for KIIT University students",
  keywords: "KIIT, KIIT University, section swap, teacher reviews, notes sharing, student platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <CustomCursor />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
