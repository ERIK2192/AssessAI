import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Building, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
}

export default function KontaktPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl text-muted-foreground">
              Vi vill gärna höra från dig – oavsett om du är lärare, rektor
              eller bara nyfiken.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                För lärare
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Testa AssessAI gratis och ge oss din feedback.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/analyze">
                  <Button variant="outline">Testa demo</Button>
                </Link>
                <a href="mailto:erikgardbring@gmail.com?subject=Feedback%20p%C3%A5%20AssessAI">
                  <Button variant="outline">Ge feedback</Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                För skolor och skolledare
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Vill du veta mer om hur AssessAI kan användas på din skola?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:erikgardbring@gmail.com?subject=AssessAI%20f%C3%B6r%20v%C3%A5r%20skola%20%E2%80%93%20boka%20samtal">
                  <Button>Boka ett samtal</Button>
                </a>
                <a
                  href="mailto:erikgardbring@gmail.com?subject=AssessAI%20f%C3%B6r%20v%C3%A5r%20skola"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline flex items-center gap-1 py-2"
                >
                  erikgardbring@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Allmänna frågor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:erikgardbring@gmail.com"
                className="text-primary hover:underline"
              >
                erikgardbring@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
