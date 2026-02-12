"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, BookOpen, Users, ClipboardPaste, ListChecks, FileCheck } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const steps = [
    {
      number: "1",
      icon: ClipboardPaste,
      title: "Klistra in elevtext",
      description: "Kopiera och klistra in elevens svar direkt i verktyget",
    },
    {
      number: "2",
      icon: ListChecks,
      title: "Välj ämne och kurs",
      description: "Välj bland 7 ämnen och 33 gymnasiekurser med officiella kunskapskrav",
    },
    {
      number: "3",
      icon: FileCheck,
      title: "Få bedömning",
      description: "Få betygsförslag med motiveringar, färgkodade highlights och feedback",
    },
  ]

  const trustSignals = [
    {
      icon: Shield,
      label: "GDPR-säker",
    },
    {
      icon: BookOpen,
      label: "Skolverkets kunskapskrav",
    },
    {
      icon: Users,
      label: "Batch-analys",
    },
  ]

  return (
    <div className="container py-16 md:py-28">
      {/* Hero section */}
      <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Bedöm elevtexter med AI – baserat på{" "}
          <span className="text-primary">Skolverkets kunskapskrav</span>
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          Få betygsförslag med motiveringar på minuter. 7 ämnen, 33 gymnasiekurser, GDPR-säker.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          <Link href="/analyze">
            <Button size="lg" className="text-lg px-8 py-6">
              Testa gratis – 10 analyser per dag
            </Button>
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.p
          className="text-sm text-muted-foreground pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
        >
          91% av tillfrågade lärare vill ha AI-stöd vid bedömning{" "}
          <Link href="/insights" className="underline hover:text-foreground transition-colors">
            (baserat på enkät med 46 lärare)
          </Link>
        </motion.p>
      </div>

      {/* Three steps - staggered */}
      <div className="max-w-4xl mx-auto pt-16">
        <motion.h2
          className="text-2xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Så här fungerar det
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.12 }}
            >
              <Card className="relative h-full">
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <step.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust signals - fade in on scroll */}
      <motion.div
        className="max-w-3xl mx-auto pt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {trustSignals.map((signal) => (
            <div key={signal.label} className="flex items-center gap-2 text-muted-foreground">
              <signal.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{signal.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
