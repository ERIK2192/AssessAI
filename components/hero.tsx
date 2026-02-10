import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, BookOpen, Users, ClipboardPaste, ListChecks, FileCheck } from "lucide-react"

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
    <div className="container py-12 md:py-24">
      {/* Hero section */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Bedöm elevtexter med AI – baserat på{" "}
          <span className="text-primary">Skolverkets kunskapskrav</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Få betygsförslag med motiveringar på minuter. 7 ämnen, 33 gymnasiekurser, GDPR-säker.
        </p>

        <Link href="/analyze">
          <Button size="lg" className="text-lg px-8 py-6">
            Testa gratis – 10 analyser per dag
          </Button>
        </Link>

        {/* Social proof */}
        <p className="text-sm text-muted-foreground pt-2">
          91% av tillfrågade lärare vill ha AI-stöd vid bedömning{" "}
          <Link href="/insights" className="underline hover:text-foreground transition-colors">
            (baserat på enkät med 46 lärare)
          </Link>
        </p>
      </div>

      {/* Three steps */}
      <div className="max-w-4xl mx-auto pt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Så här fungerar det</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="relative">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <step.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trust signals */}
      <div className="max-w-3xl mx-auto pt-16">
        <div className="flex flex-wrap justify-center gap-8">
          {trustSignals.map((signal) => (
            <div key={signal.label} className="flex items-center gap-2 text-muted-foreground">
              <signal.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{signal.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
