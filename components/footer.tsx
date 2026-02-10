import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AssessAI – AI-driven bedömning med läraren i kontroll
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Integritetspolicy
          </Link>
          <span>|</span>
          <span>GDPR-kompatibel | Inga elevdata sparas</span>
        </div>
      </div>
    </footer>
  )
}
