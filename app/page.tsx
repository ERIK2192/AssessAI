import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SchoolCTA } from "@/components/school-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SchoolCTA />
      </main>
      <Footer />
    </div>
  );
}
