"use client"

import { Button } from "@/components/ui/button"
import { Building, Shield, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function SchoolCTA() {
  const benefits = [
    {
      icon: Building,
      text: "Anpassat för skolor med 5–40+ lärare",
    },
    {
      icon: Shield,
      text: "GDPR-anpassat – ingen elevdata sparas",
    },
    {
      icon: Clock,
      text: "Sparar uppskattningsvis 3–5 timmar per lärare och vecka",
    },
  ]

  return (
    <motion.section
      className="bg-muted/50 py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            För din skola
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Är du rektor eller skolledare?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AssessAI ger dina lärare ett konsekvent, objektivt bedömningsstöd baserat
            på Skolverkets kunskapskrav. Minska arbetsbelastningen och öka
            likvärdigheten i bedömningen – för hela skolan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 py-4">
          {benefits.map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-3 text-left">
              <benefit.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 space-y-4">
          <p className="text-lg font-medium">Intresserad? Låt oss prata.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="mailto:erikgardbring@gmail.com?subject=AssessAI%20f%C3%B6r%20v%C3%A5r%20skola%20%E2%80%93%20boka%20samtal">
              <Button size="lg" className="text-base px-8">
                Boka ett samtal
              </Button>
            </a>
            <a href="mailto:erikgardbring@gmail.com?subject=AssessAI%20f%C3%B6r%20v%C3%A5r%20skola">
              <Button variant="outline" size="lg" className="text-base px-8">
                Mejla oss
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
