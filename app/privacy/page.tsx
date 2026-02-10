import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Integritetspolicy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Integritetspolicy</h1>
            <p className="text-muted-foreground">
              Senast uppdaterad: Februari 2026
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Ansvarig
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Namn:</strong> Erik Gardbring, enskild firma</p>
              <p>
                <strong className="text-foreground">Kontakt:</strong>{' '}
                <a href="mailto:erikgardbring@gmail.com" className="text-primary hover:underline">
                  erikgardbring@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vilken data behandlas?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                AssessAI behandlar följande data vid varje analys:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Elevtexter som klistras in för analys</li>
                <li>Valt ämne och utbildningsnivå/kurs</li>
                <li>Eventuellt kursmaterial som anges som kontext</li>
                <li>Klass- och elevalias (t.ex. &quot;Elev 1&quot;, &quot;9A&quot;)</li>
              </ul>
              <p className="font-semibold text-foreground">
                Inga riktiga elevnamn, personnummer eller annan personidentifierande information
                ska anges i systemet. Använd alltid alias.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hur behandlas data?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                När du skickar in en elevtext för analys händer följande:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Texten skickas via krypterad förbindelse (HTTPS) till Anthropics API (Claude AI)</li>
                <li>Claude analyserar texten mot Skolverkets kunskapskrav</li>
                <li>Analysen returneras till din webbläsare</li>
                <li>Ingen data lagras permanent – varken hos AssessAI eller i någon databas</li>
              </ol>
              <p>
                AssessAI har ingen databas, inget användarkontosystem och lagrar ingen data
                mellan sessioner. När du stänger webbläsaren försvinner all data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tredjepartstjänster</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Anthropic Inc. (AI-analys)</h3>
                <p>
                  Elevtexter skickas till Anthropic för AI-analys med modellen Claude.
                  Anthropic behandlar data enligt sin integritetspolicy och följer GDPR.
                </p>
                <a
                  href="https://www.anthropic.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline mt-2"
                >
                  Anthropics integritetspolicy
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Vercel (hosting)</h3>
                <p>
                  Applikationen hostas på Vercel. Vercel kan logga IP-adresser och
                  teknisk metadata i enlighet med sin integritetspolicy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rekommendation för skolor</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Skolor som använder AssessAI rekommenderas att teckna ett eget
                personuppgiftsbiträdesavtal (DPA) med Anthropic för att säkerställa
                full GDPR-compliance. Kontakta oss så hjälper vi er med processen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies och spårning</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                AssessAI använder inga cookies för spårning eller marknadsföring.
                Den enda data som sparas lokalt i din webbläsare är ditt temaval
                (ljust/mörkt läge) via localStorage. Ingen analysspårning sker.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dina rättigheter enligt GDPR</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                Eftersom AssessAI inte lagrar någon persondata permanent finns det
                ingen data att radera, exportera eller rätta. All data försvinner
                automatiskt efter varje session.
              </p>
              <p>
                Om du har frågor om hur din data behandlas, kontakta oss:
              </p>
              <a
                href="mailto:erikgardbring@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                erikgardbring@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
