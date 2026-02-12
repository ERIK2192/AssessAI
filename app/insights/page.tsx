import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, AlertTriangle, Timer, TrendingUp, CheckCircle, XCircle, Target, Zap, Shield, Users, Lock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Lärarundersökning",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 space-y-24">

        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Baserat på undersökning bland svenska lärare
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            AssessAI i siffror
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi undersökte svenska lärares utmaningar med bedömning och rättning.
            Här är resultaten – och hur AssessAI löser problemen.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Clock className="h-10 w-10 text-orange-500" />
                <div className="text-4xl font-bold text-orange-500">89%</div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">Upplever tidsbrist</CardTitle>
              <CardDescription>
                anger tid eller stress som huvudproblem vid bedömning
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <AlertTriangle className="h-10 w-10 text-yellow-500" />
                <div className="text-4xl font-bold text-yellow-500">46%</div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">Subjektiva faktorer</CardTitle>
              <CardDescription>
                upplever att trötthet eller personliga åsikter ibland påverkar bedömningen
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Timer className="h-10 w-10 text-blue-500" />
                <div className="text-3xl font-bold text-blue-500">15–30 min</div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">Per elev</CardTitle>
              <CardDescription>
                är mediantiden för att rätta ett prov eller en text per elev
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <TrendingUp className="h-10 w-10 text-green-500" />
                <div className="text-4xl font-bold text-green-500">91%</div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">Högt AI-intresse</CardTitle>
              <CardDescription>
                gav högt betyg på intresse för AI-verktyg som sparar tid vid rättning
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        {/* Problem Section */}
        <section className="space-y-12 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              De tre största utmaningarna
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Samma problem dyker upp gång på gång bland svenska lärare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-destructive/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 dark:bg-red-950 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-xl">Tidspress</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Hundratals prov att rätta varje termin</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Flera timmar varje vecka går till rättning</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Tiden räcker inte för djup feedback</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-950 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-xl">Rättvisa och konsistens</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Rättvisa nämns som en av de främsta utmaningarna</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Subjektiva faktorer påverkar nästan hälften</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Svårt att vara konsekvent vid trötthet</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-950 rounded-lg">
                    <Users className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl">Stress och osäkerhet</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Stress kring bedömning är vanligt förekommande</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Osäkerhet vid gränsfallsbedömningar</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Rädsla för att missa viktiga aspekter</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-block p-3 bg-primary/10 rounded-full">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                AssessAI löser detta
              </h2>
              <p className="text-muted-foreground">
                AI-assisterad bedömning som sparar tid och garanterar kvalitet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/50 bg-background/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 dark:bg-green-950 rounded-lg flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Spara tid</h3>
                      <p className="text-sm text-muted-foreground">
                        AI gör den första analysen på sekunder. Du fokuserar på att granska och finslipa.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/50 bg-background/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Garantera konsistens</h3>
                      <p className="text-sm text-muted-foreground">
                        Samma kriterier varje gång. Ingen trötthet, inga subjektiva faktorer.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/50 bg-background/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-950 rounded-lg flex-shrink-0">
                      <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Skolverkets kunskapskrav</h3>
                      <p className="text-sm text-muted-foreground">
                        Direkt koppling till officiella bedömningskriterier – det mest efterfrågade.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/50 bg-background/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-950 rounded-lg flex-shrink-0">
                      <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Du behåller kontrollen</h3>
                      <p className="text-sm text-muted-foreground">
                        AI föreslår, du beslutar. Professionellt omdöme är alltid viktigast.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="space-y-12 max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Mest efterfrågade funktioner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Funktionerna som lärare ville ha mest – och som vi byggt
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-primary/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-primary">39%</div>
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mx-auto" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      Direkt jämförelse mot kunskapskrav
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Inbyggd databas med Skolverkets kunskapskrav för 7 ämnen och 33 gymnasiekurser.
                      Varje bedömning kopplas direkt till E-, C- och A-kriterierna.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-primary">28%</div>
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mx-auto" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      Automatiska markeringar i texten
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      AI:n markerar specifika textutdrag med färgkodning (E = gul, C = blå, A = grön)
                      och förklarar varför varje del uppfyller ett visst kunskapskrav.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-primary">24%</div>
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mx-auto" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      Förslag på feedback till eleven
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      AI:n genererar konstruktiv feedback som börjar med styrkor, följt av konkreta
                      utvecklingsområden. Kopiera direkt eller redigera efter behov.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Redo att effektivisera din bedömning?
              </h2>
              <p className="text-lg opacity-90">
                Testa AssessAI gratis idag – 10 analyser per dag, ingen registrering.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/analyze">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                  <Zap className="mr-2 h-5 w-5" />
                  Testa gratis nu
                </Button>
              </Link>
              <a href="mailto:erikgardbring@gmail.com?subject=Demo för min skola">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Users className="mr-2 h-5 w-5" />
                  Boka demo för din skola
                </Button>
              </a>
            </div>

            <div className="pt-6 border-t border-primary-foreground/20">
              <div className="flex items-center justify-center gap-2 text-sm opacity-75">
                <Lock className="h-4 w-4" />
                <p>100% GDPR-säkert · Inga elevdata sparas permanent · Du behåller full kontroll</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="text-center text-muted-foreground text-sm">
          <p>
            Data baserad på undersökning bland svenska lärare (grundskola och gymnasiet).
            <br />
            Alla siffror är verifierade.
          </p>
        </section>

      </main>
      <Footer />
    </div>
  )
}
