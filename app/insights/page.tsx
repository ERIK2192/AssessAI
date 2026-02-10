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
      <main className="flex-1 container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          Baserat på svensk lärardata • 46 respondenter
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          AssessAI i siffror
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Vi frågade svenska lärare om deras utmaningar med bedömning och rättning.
          Här är vad de berättade – och hur AssessAI löser problemen.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat 1: Tidsbrist */}
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
              av lärare anger &quot;tid&quot; eller &quot;stress&quot; som huvudproblem vid bedömning
            </CardDescription>
          </CardContent>
        </Card>

        {/* Stat 2: Subjektiva faktorer */}
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
              upplever att trötthet eller personliga åsikter ibland/ofta påverkar deras bedömning
            </CardDescription>
          </CardContent>
        </Card>

        {/* Stat 3: Tid per elev */}
        <Card className="border-2 hover:border-primary transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Timer className="h-10 w-10 text-blue-500" />
              <div className="text-3xl font-bold text-blue-500">15-30 min</div>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg mb-2">Per elev</CardTitle>
            <CardDescription>
              är mediantiden för att rätta ett prov eller en text per elev
            </CardDescription>
          </CardContent>
        </Card>

        {/* Stat 4: AI-intresse */}
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
              gav betyg 4-5/5 på intresse för AI-verktyg som sparar tid på rättning
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Problem Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            De tre största utmaningarna
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Svenska lärare kämpar med samma problem – här är vad enkäten visade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem 1: Tidspress */}
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
                <p className="text-sm">Lärare rättar 100-1200 prov per termin</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm">Det tar 2.5-10 timmar varje vecka</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm">Tiden räcker inte för djup feedback</p>
              </div>
            </CardContent>
          </Card>

          {/* Problem 2: Rättvisa */}
          <Card className="border-destructive/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-950 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl">Rättvisa & Konsistens</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm">33% nämner &quot;rättvisa&quot; som utmaning</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm">Subjektiva faktorer påverkar 46%</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm">Svårt att vara konsekvent vid trötthet</p>
              </div>
            </CardContent>
          </Card>

          {/* Problem 3: Stress */}
          <Card className="border-destructive/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-950 rounded-lg">
                  <Users className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-xl">Stress & Osäkerhet</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm">Stress nämndes av 30+ lärare</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm">Osäkerhet om C vs D, A vs B</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm">Rädsla för att missa något viktigt</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
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
                  <div className="p-2 bg-green-100 dark:bg-green-950 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Spara 70% av tiden</h3>
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
                  <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg">
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
                  <div className="p-2 bg-purple-100 dark:bg-purple-950 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Skolverkets kunskapskrav</h3>
                    <p className="text-sm text-muted-foreground">
                      Direkt koppling till officiella bedömningskriterier – det mest efterfrågade!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/50 bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-950 rounded-lg">
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

      {/* Feature Highlights - Mest efterfrågade */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mest efterfrågade funktioner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vi frågade lärare vad de ville ha – och vi levererade
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <Card className="border-primary/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="text-3xl font-bold text-primary">39%</div>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Direkt jämförelse mot kunskapskrav
                  </h3>
                  <p className="text-muted-foreground">
                    AssessAI har inbyggd databas med Skolverkets kunskapskrav för 7 ämnen × 4 nivåer.
                    Varje bedömning kopplas direkt till E, C och A-kriterierna.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="text-3xl font-bold text-primary">28%</div>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Automatiska markeringar i texten
                  </h3>
                  <p className="text-muted-foreground">
                    AI:n highlightar specifika textutdrag med färgkodning (E=gul, C=blå, A=grön)
                    och förklarar exakt varför varje del uppfyller ett visst kunskapskrav.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="text-3xl font-bold text-primary">24%</div>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Förslag på feedback till elev
                  </h3>
                  <p className="text-muted-foreground">
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
              Redo att spara 70% av din rättningstid?
            </h2>
            <p className="text-lg opacity-90">
              Gå med i de 91% av lärare som är intresserade av AI-stöd för bedömning.
              Testa AssessAI gratis idag.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/analyze">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                <Zap className="mr-2 h-5 w-5" />
                Testa gratis nu
              </Button>
            </Link>
            <a href="mailto:kontakt@assessai.se?subject=Demo för min skola">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Users className="mr-2 h-5 w-5" />
                Boka demo för din skola
              </Button>
            </a>
          </div>

          <div className="pt-6 border-t border-primary-foreground/20">
            <div className="flex items-center justify-center gap-2 text-sm opacity-75">
              <Lock className="h-4 w-4" />
              <p>100% GDPR-säkert • Inga elevdata sparas permanent • Du behåller full kontroll</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center text-muted-foreground text-sm">
        <p>
          Data baserad på enkät med 46 svenska lärare (grundskola & gymnasiet), genomförd 2024-2026.
          <br />
          Alla siffror är verifierade och transparenta.
        </p>
      </section>
      </main>
      <Footer />
    </div>
  )
}
