import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-auto md:py-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AssessAI – AI-driven bedömning med läraren i kontroll
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Integritetspolicy
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="/kontakt" className="hover:text-foreground transition-colors">
            Kontakt
          </Link>
          <span className="hidden md:inline">|</span>
          <a
            href="mailto:erikgardbring@gmail.com?subject=AssessAI%20f%C3%B6r%20v%C3%A5r%20skola%20%E2%80%93%20boka%20samtal"
            className="hover:text-foreground transition-colors"
          >
            För skolor: Boka ett samtal
          </a>
        </div>
      </div>
    </footer>
  )
}
