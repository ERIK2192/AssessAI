"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Lock, Eraser, GraduationCap } from "lucide-react"
import { AnalysisResult } from "@/components/analysis-result"
import type { Subject, EducationLevel, GymnasiumCourse, Analysis } from "@/types"
import { COURSES_BY_SUBJECT } from "@/types"

export function AnalyzeForm() {
  const [className, setClassName] = useState<string>("")
  const [studentId, setStudentId] = useState<string>("")
  const [subject, setSubject] = useState<Subject>("Svenska")
  const [educationLevel, setEducationLevel] = useState<EducationLevel>("Gymnasiet")
  const [course, setCourse] = useState<GymnasiumCourse | "">("")
  const [studentText, setStudentText] = useState("")
  const [contextMaterials, setContextMaterials] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [consent, setConsent] = useState(false)

  const subjects: Subject[] = [
    "Svenska",
    "Engelska",
    "Historia",
    "Samhällskunskap",
    "Geografi",
    "Religionskunskap",
    "Matematik",
  ]

  // Hämta kurser för valt ämne
  const availableCourses = useMemo(() => COURSES_BY_SUBJECT[subject] || [], [subject])

  // Återställ kurs när ämne eller nivå ändras
  useEffect(() => {
    if (educationLevel === "Grundskola") {
      setCourse("")
    } else if (availableCourses.length > 0) {
      setCourse(availableCourses[0])
    }
  }, [subject, educationLevel, availableCourses])

  // Klass-alternativ (alias för GDPR-säkerhet)
  const classes = [
    "9A", "9B", "9C", "9D",
    "TE1A", "TE1B", "NA1A", "NA1B", "SA1A", "SA1B",
    "TE2A", "TE2B", "NA2A", "NA2B", "SA2A", "SA2B",
    "TE3A", "TE3B", "NA3A", "NA3B", "SA3A", "SA3B",
  ]

  // Elev-alternativ (endast alias!)
  const students = Array.from({ length: 30 }, (_, i) => `Elev ${i + 1}`)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setAnalysis(null)

    // Validera att kurs är vald för gymnasiet
    if (educationLevel === "Gymnasiet" && !course) {
      setError("Välj en kurs för gymnasiet")
      setIsLoading(false)
      return
    }

    if (studentText.trim().length < 50) {
      setError("Texten verkar vara för kort för en meningsfull bedömning. Försök med minst ett par meningar.")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentText,
          subject,
          educationLevel,
          course: educationLevel === "Gymnasiet" ? course : undefined,
          contextMaterials: contextMaterials || undefined,
          className: className || undefined,
          studentId: studentId || undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Något gick fel")
      }

      setAnalysis(data.analysis)
    } catch (err) {
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        setError("Kunde inte ansluta till servern. Kontrollera din internetanslutning och försök igen.")
      } else {
        setError(err instanceof Error ? err.message : "Ett oväntat fel uppstod. Försök igen om en stund.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleClear = () => {
    setStudentText("")
    setContextMaterials("")
    setAnalysis(null)
    setError(null)
  }

  // Keyboard shortcut: Cmd/Ctrl + Enter to submit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && studentText && !isLoading) {
        e.preventDefault()
        const form = document.querySelector('form')
        if (form) {
          form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [studentText, isLoading])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Inställningar
          </CardTitle>
          <CardDescription>
            Välj ämne, nivå och kurs för bedömningen enligt Skolverkets kunskapskrav
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* GDPR-säker klasshantering */}
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-4 w-4 text-blue-900 dark:text-blue-100" />
                <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                  Klasshantering (Valfritt)
                </h3>
              </div>
              <p className="text-xs text-blue-800 dark:text-blue-200 mb-4">
                <strong>GDPR-VIKTIGT:</strong> Använd ENDAST alias (Elev 1, Elev 2, osv.) - aldrig riktiga namn!
                Denna information sparas ALDRIG permanent och används endast för organisering under denna session.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="className">Klass (valfritt)</Label>
                  <Select
                    id="className"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                  >
                    <option value="">– Välj klass –</option>
                    {classes.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId">Elev (valfritt)</Label>
                  <Select
                    id="studentId"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  >
                    <option value="">– Välj elev –</option>
                    {students.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            {/* Ämne och Nivå */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Ämne *</Label>
                <Select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value as Subject)}
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="educationLevel">Utbildningsnivå *</Label>
                <Select
                  id="educationLevel"
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value as EducationLevel)}
                >
                  <option value="Grundskola">Grundskola åk 7–9</option>
                  <option value="Gymnasiet">Gymnasiet</option>
                </Select>
              </div>
            </div>

            {/* Kursval - endast för gymnasiet */}
            {educationLevel === "Gymnasiet" && (
              <div className="space-y-2">
                <Label htmlFor="course">Kurs *</Label>
                <Select
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value as GymnasiumCourse)}
                  required
                >
                  <option value="">– Välj kurs –</option>
                  {availableCourses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>
                <p className="text-xs text-muted-foreground">
                  Välj den kurs som elevtexten ska bedömas mot. Kunskapskraven hämtas automatiskt från Skolverket.
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="studentText">Elevsvar *</Label>
              <Textarea
                id="studentText"
                placeholder="Klistra in elevtexten här…"
                value={studentText}
                onChange={(e) => setStudentText(e.target.value)}
                className="min-h-[200px]"
                required
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <p>
                  {studentText.length > 5000
                    ? <span className="text-orange-600 dark:text-orange-400">Lång text kan ta längre tid att analysera</span>
                    : "Texten raderas automatiskt efter analysen och sparas aldrig permanent"
                  }
                </p>
                <p className="font-mono">{studentText.length} tecken</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contextMaterials">
                Kursmaterial (valfritt)
              </Label>
              <Textarea
                id="contextMaterials"
                placeholder="Klistra in relevanta delar från lärobok, PowerPoint eller andra material som eleven arbetat med…"
                value={contextMaterials}
                onChange={(e) => setContextMaterials(e.target.value)}
                className="min-h-[100px]"
              />
              <p className="text-xs text-muted-foreground">
                Detta hjälper AI:n att ge mer precisa bedömningar baserat på vad eleven har lärt sig
              </p>
            </div>

            {/* Consent checkbox */}
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border accent-primary focus-visible:outline-2 focus-visible:outline-primary"
              />
              <label htmlFor="consent" className="text-sm cursor-pointer select-none">
                Jag bekräftar att inga riktiga elevnamn används och godkänner att texten
                skickas till AI för analys. Läs vår{' '}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  integritetspolicy
                </a>.
              </label>
            </div>

            {error && (
              <div className="p-4 bg-destructive/10 text-destructive rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClear}
                disabled={isLoading}
                className="flex items-center gap-2"
              >
                <Eraser className="h-4 w-4" />
                Rensa
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !studentText || !consent || (educationLevel === "Gymnasiet" && !course)}
                className="flex-1"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyserar…
                  </>
                ) : (
                  <>
                    Analysera elevsvar
                    <span className="ml-2 text-xs opacity-70">(Cmd/Ctrl+Enter)</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {analysis && (
        <AnalysisResult
          analysis={analysis}
          studentText={studentText}
          subject={subject}
          educationLevel={educationLevel}
          course={course || undefined}
          className={className}
          studentId={studentId}
        />
      )}
    </div>
  )
}
