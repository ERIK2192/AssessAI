import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'AssessAI – AI-bedömning för svenska lärare',
    template: '%s | AssessAI',
  },
  description: 'Analysera elevtexter mot Skolverkets officiella kunskapskrav. Få betygsförslag med motiveringar på minuter istället för timmar. GDPR-säker.',
  keywords: ['bedömning', 'AI', 'lärare', 'Skolverket', 'kunskapskrav', 'betyg', 'elevtexter', 'grundskola', 'gymnasiet'],
  authors: [{ name: 'Erik Gardbring' }],
  openGraph: {
    title: 'AssessAI – AI-bedömning för svenska lärare',
    description: 'Bedöm 30 elevtexter på 30 minuter. Baserat på Skolverkets officiella kunskapskrav.',
    url: 'https://assessai.se',
    siteName: 'AssessAI',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AssessAI – AI-bedömning för svenska lärare',
    description: 'Bedöm 30 elevtexter på 30 minuter.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
