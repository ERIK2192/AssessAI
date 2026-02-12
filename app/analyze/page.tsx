import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnalyzeForm } from "@/components/analyze-form";
import { BatchAnalyzer } from "@/components/batch-analyzer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Analysera elevtext",
};

export default function AnalyzePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Analysera elevsvar</h1>
            <p className="text-muted-foreground">
              Klistra in elevtexten nedan för att få AI-baserade förslag på bedömning.
              Elevdata sparas aldrig och raderas direkt efter analysen.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Demo-version: 10 gratis analyser per dag.{' '}
              <a href="mailto:erikgardbring@gmail.com" className="underline hover:text-foreground">
                Kontakta oss
              </a>{' '}
              för obegränsad åtkomst.
            </p>
          </div>

          <Tabs defaultValue="single" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
              <TabsTrigger value="single">Enskild elev</TabsTrigger>
              <TabsTrigger value="batch">Flera elever (Batch)</TabsTrigger>
            </TabsList>

            <TabsContent value="single">
              <AnalyzeForm />
            </TabsContent>

            <TabsContent value="batch">
              <BatchAnalyzer />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
