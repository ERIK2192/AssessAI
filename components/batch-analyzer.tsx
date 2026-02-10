"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Play, Copy, Loader2, GraduationCap, Lock } from "lucide-react"
import type { Subject, EducationLevel, GymnasiumCourse, Analysis } from "@/types"
import { COURSES_BY_SUBJECT } from "@/types"

interface StudentEntry {
  id: string;
  studentId: string;
  text: string;
  status: 'pending' | 'analyzing' | 'complete' | 'error';
  analysis?: Analysis;
  error?: string;
}

export function BatchAnalyzer() {
  const [subject, setSubject] = useState<Subject>("Svenska")
  const [educationLevel, setEducationLevel] = useState<EducationLevel>("Gymnasiet")
  const [course, setCourse] = useState<GymnasiumCourse | "">("")
  const [className, setClassName] = useState("")
  const [contextMaterials, setContextMaterials] = useState("")
  const [students, setStudents] = useState<StudentEntry[]>([])
  const [currentText, setCurrentText] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [consent, setConsent] = useState(false)

  const subjects: Subject[] = [
    "Svenska", "Engelska", "Historia", "Samhällskunskap",
    "Geografi", "Religionskunskap", "Matematik",
  ]

  const availableCourses = useMemo(() => COURSES_BY_SUBJECT[subject] || [], [subject])

  useEffect(() => {
    if (educationLevel === "Grundskola") {
      setCourse("")
    } else if (availableCourses.length > 0) {
      setCourse(availableCourses[0])
    }
  }, [subject, educationLevel, availableCourses])

  const classes = [
    "9A", "9B", "9C", "9D",
    "TE1A", "TE1B", "NA1A", "NA1B", "SA1A", "SA1B",
    "TE2A", "TE2B", "NA2A", "NA2B", "SA2A", "SA2B",
    "TE3A", "TE3B", "NA3A", "NA3B", "SA3A", "SA3B",
  ]

  const addStudent = () => {
    if (!currentText.trim()) return

    const newStudent: StudentEntry = {
      id: crypto.randomUUID(),
      studentId: `Elev ${students.length + 1}`,
      text: currentText.trim(),
      status: 'pending'
    }

    setStudents([...students, newStudent])
    setCurrentText("")
  }

  const removeStudent = (id: string) => {
    setStudents(students.filter(s => s.id !== id))
  }

  const runBatchAnalysis = async () => {
    if (educationLevel === "Gymnasiet" && !course) return

    setIsRunning(true)

    for (const student of students) {
      if (student.status === 'complete') continue

      setStudents(prev => prev.map(s =>
        s.id === student.id ? { ...s, status: 'analyzing' as const } : s
      ))

      try {
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentText: student.text,
            subject,
            educationLevel,
            course: educationLevel === "Gymnasiet" ? course : undefined,
            contextMaterials: contextMaterials || undefined,
            className: className || undefined,
            studentId: student.studentId
          })
        })

        const data = await response.json()

        if (response.ok) {
          setStudents(prev => prev.map(s =>
            s.id === student.id
              ? { ...s, status: 'complete' as const, analysis: data.analysis }
              : s
          ))
        } else {
          setStudents(prev => prev.map(s =>
            s.id === student.id
              ? { ...s, status: 'error' as const, error: data.error }
              : s
          ))

          // Stop on rate limit
          if (data.rateLimited) {
            setIsRunning(false)
            return
          }
        }
      } catch {
        setStudents(prev => prev.map(s =>
          s.id === student.id
            ? { ...s, status: 'error' as const, error: 'Tekniskt fel' }
            : s
        ))
      }

      // Wait between requests
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    setIsRunning(false)
  }

  const copyAllResults = () => {
    const completed = students.filter(s => s.status === 'complete' && s.analysis)
    const levelLabel = educationLevel === 'Gymnasiet' ? course : 'Grundskola åk 7–9'

    const text = completed.map(s => {
      const a = s.analysis!
      return `--- ${s.studentId} ---
Förslag: ${a.suggestedGrade || '-'}
Bedömning: ${a.assessment}
Feedback: ${a.feedback}
`
    }).join('\n')

    const header = `Batch-analys: ${subject} – ${levelLabel}${className ? ` (${className})` : ''}
${completed.length} elever analyserade
${'='.repeat(50)}

`

    navigator.clipboard.writeText(header + text)
    alert("Alla resultat kopierade till urklipp!")
  }

  const completedCount = students.filter(s => s.status === 'complete').length
  const pendingCount = students.filter(s => s.status === 'pending').length
  const errorCount = students.filter(s => s.status === 'error').length

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A": return "bg-green-500 text-white"
      case "C": return "bg-blue-500 text-white"
      case "E": return "bg-yellow-500 text-white"
      case "F": return "bg-red-500 text-white"
      default: return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="space-y-6">
      {/* Inställningar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Batch-inställningar
          </CardTitle>
          <CardDescription>
            Välj ämne, nivå och kurs. Dessa gäller för alla elever i batchen.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Klass */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-4 w-4 text-blue-900 dark:text-blue-100" />
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                Klass (valfritt)
              </h3>
            </div>
            <Select
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            >
              <option value="">– Välj klass –</option>
              {classes.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Select>
          </div>

          {/* Ämne och nivå */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="batch-subject">Ämne *</Label>
              <Select
                id="batch-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value as Subject)}
                disabled={isRunning}
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="batch-level">Utbildningsnivå *</Label>
              <Select
                id="batch-level"
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value as EducationLevel)}
                disabled={isRunning}
              >
                <option value="Grundskola">Grundskola åk 7–9</option>
                <option value="Gymnasiet">Gymnasiet</option>
              </Select>
            </div>
          </div>

          {/* Kursval */}
          {educationLevel === "Gymnasiet" && (
            <div className="space-y-2">
              <Label htmlFor="batch-course">Kurs *</Label>
              <Select
                id="batch-course"
                value={course}
                onChange={(e) => setCourse(e.target.value as GymnasiumCourse)}
                required
                disabled={isRunning}
              >
                <option value="">– Välj kurs –</option>
                {availableCourses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
            </div>
          )}

          {/* Kursmaterial */}
          <div className="space-y-2">
            <Label htmlFor="batch-context">Kursmaterial (valfritt)</Label>
            <Textarea
              id="batch-context"
              placeholder="Klistra in relevanta delar från lärobok eller material…"
              value={contextMaterials}
              onChange={(e) => setContextMaterials(e.target.value)}
              className="min-h-[80px]"
              disabled={isRunning}
            />
          </div>
        </CardContent>
      </Card>

      {/* Lägg till elevtexter */}
      <Card>
        <CardHeader>
          <CardTitle>Lägg till elevtexter</CardTitle>
          <CardDescription>
            Klistra in en elevtext i taget och tryck &quot;Lägg till&quot;.
            Kör sedan alla analyser samtidigt.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="batch-text">Elevtext</Label>
            <Textarea
              id="batch-text"
              placeholder="Klistra in elevtext här…"
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              className="min-h-[150px]"
              disabled={isRunning}
            />
            <div className="text-xs text-muted-foreground text-right font-mono">
              {currentText.length} tecken
            </div>
          </div>

          <Button
            onClick={addStudent}
            disabled={!currentText.trim() || isRunning}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Lägg till som Elev {students.length + 1}
          </Button>
        </CardContent>
      </Card>

      {/* Consent + Analyskö */}
      {students.length > 0 && (
        <Card>
          <CardHeader className="space-y-4">
            {/* Consent checkbox */}
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <input
                type="checkbox"
                id="batch-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border accent-primary focus-visible:outline-2 focus-visible:outline-primary"
              />
              <label htmlFor="batch-consent" className="text-sm cursor-pointer select-none">
                Jag bekräftar att inga riktiga elevnamn används och godkänner att texterna
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
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Analyskö ({students.length} elever)</CardTitle>
                <CardDescription>
                  {completedCount} klara
                  {pendingCount > 0 && ` | ${pendingCount} väntande`}
                  {errorCount > 0 && ` | ${errorCount} fel`}
                </CardDescription>
              </div>
              <Button
                onClick={runBatchAnalysis}
                disabled={isRunning || !consent || pendingCount === 0 || (educationLevel === "Gymnasiet" && !course)}
                size="lg"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyserar…
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Analysera alla
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="border rounded-lg p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-sm">{student.studentId}</span>

                      {student.status === 'pending' && (
                        <Badge variant="secondary">Väntar</Badge>
                      )}
                      {student.status === 'analyzing' && (
                        <Badge className="animate-pulse">
                          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                          Analyserar
                        </Badge>
                      )}
                      {student.status === 'complete' && student.analysis?.suggestedGrade && (
                        <Badge className={getGradeColor(student.analysis.suggestedGrade)}>
                          {student.analysis.suggestedGrade}
                        </Badge>
                      )}
                      {student.status === 'error' && (
                        <Badge variant="destructive">Fel</Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {student.status === 'complete' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedId(expandedId === student.id ? null : student.id)}
                        >
                          {expandedId === student.id ? "Dölj" : "Detaljer"}
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeStudent(student.id)}
                        disabled={isRunning}
                        aria-label={`Ta bort ${student.studentId}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Textförhandsvisning */}
                  {student.status !== 'complete' && (
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      {student.text}
                    </p>
                  )}

                  {/* Felmeddelande */}
                  {student.status === 'error' && (
                    <p className="text-xs text-destructive mt-2">
                      {student.error}
                    </p>
                  )}

                  {/* Expanderad analys */}
                  {expandedId === student.id && student.analysis && (
                    <div className="mt-4 space-y-3 border-t pt-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Bedömning</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                          {student.analysis.assessment}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Feedback till eleven</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                          {student.analysis.feedback}
                        </p>
                      </div>
                      {student.analysis.highlights.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Markeringar ({student.analysis.highlights.length})</h4>
                          <div className="space-y-2">
                            {student.analysis.highlights.map((h, i) => (
                              <div key={i} className="text-xs border-l-2 pl-3 py-1" style={{
                                borderColor: h.grade === 'A' ? '#22c55e' :
                                  h.grade === 'C' ? '#3b82f6' : '#eab308'
                              }}>
                                <span className="font-medium">[{h.grade}]</span>{' '}
                                &quot;{h.text.substring(0, 80)}{h.text.length > 80 ? '…' : ''}&quot;
                                <p className="text-muted-foreground mt-0.5">{h.motivation}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Export */}
      {completedCount > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Exportera resultat</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" onClick={copyAllResults}>
              <Copy className="h-4 w-4 mr-2" />
              Kopiera alla resultat ({completedCount} analyser)
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
