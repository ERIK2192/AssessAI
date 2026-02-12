"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Copy, Lock, ThumbsDown, Minus, ThumbsUp, MessageSquare } from "lucide-react"
import type { Analysis, Subject, EducationLevel, GymnasiumCourse } from "@/types"

interface AnalysisResultProps {
  analysis: Analysis
  studentText: string
  subject: Subject
  educationLevel: EducationLevel
  course?: GymnasiumCourse
  className?: string
  studentId?: string
}

export function AnalysisResult({ analysis, studentText, subject, educationLevel, course, className, studentId }: AnalysisResultProps) {
  const [approved, setApproved] = useState(false)
  const [surveyAnswer, setSurveyAnswer] = useState<string | null>(null)

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A":
        return "bg-green-200 dark:bg-green-900/40 text-green-900 dark:text-green-100"
      case "C":
        return "bg-blue-200 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100"
      case "E":
        return "bg-yellow-200 dark:bg-yellow-900/40 text-yellow-900 dark:text-yellow-100"
      default:
        return "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    }
  }

  const highlightText = () => {
    let highlightedText = studentText
    
    // Sort highlights by position (longest first to avoid nested issues)
    const sortedHighlights = [...analysis.highlights].sort((a, b) => 
      b.text.length - a.text.length
    )

    sortedHighlights.forEach((highlight, index) => {
      const regex = new RegExp(highlight.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
      highlightedText = highlightedText.replace(
        regex,
        `<mark class="${getGradeColor(highlight.grade)} px-1 rounded" data-highlight="${index}">${highlight.text}</mark>`
      )
    })

    return highlightedText
  }

  const copyFeedback = () => {
    const feedbackText = `
${className || studentId ? `${className ? `Klass: ${className}` : ''}${className && studentId ? ' | ' : ''}${studentId ? `Elev: ${studentId}` : ''}\n` : ''}Bedömning - ${subject} (${educationLevel}${course ? `, ${course}` : ''})

ÖVERGRIPANDE BEDÖMNING:
${analysis.assessment}

FEEDBACK TILL ELEVEN:
${analysis.feedback}

${analysis.suggestedGrade ? `FÖRSLAG PÅ NIVÅ: ${analysis.suggestedGrade}` : ''}

---
Denna bedömning är gjord med AssessAI AI-assistent och har granskats av lärare.
    `.trim()
    
    navigator.clipboard.writeText(feedbackText)
    alert("Feedback kopierad till urklipp!")
  }

  return (
    <div className="space-y-6">
      {/* Class/Student Info Header */}
      {(className || studentId) && (
        <Card className="border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <CardTitle className="text-lg flex items-center gap-2">
                  Analyserad bedömning
                </CardTitle>
                <CardDescription className="mt-1">
                  {className && <span className="font-medium">{className}</span>}
                  {className && studentId && <span className="mx-2">•</span>}
                  {studentId && <span className="font-medium">{studentId}</span>}
                </CardDescription>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div>{subject}</div>
                <div>{course || educationLevel}</div>
              </div>
            </div>
          </CardHeader>
        </Card>
      )}

      {/* Highlighted Text */}
      <Card>
        <CardHeader>
          <CardTitle>Analyserad text</CardTitle>
          <CardDescription>
            Färgkodning: <span className="inline-block px-2 py-1 rounded text-xs bg-yellow-200 dark:bg-yellow-900/40 text-yellow-900 dark:text-yellow-100 ml-2">E</span>
            <span className="inline-block px-2 py-1 rounded text-xs bg-blue-200 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 ml-2">C</span>
            <span className="inline-block px-2 py-1 rounded text-xs bg-green-200 dark:bg-green-900/40 text-green-900 dark:text-green-100 ml-2">A</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div 
            className="prose dark:prose-invert max-w-none whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: highlightText() }}
          />
        </CardContent>
      </Card>

      {/* Motivations */}
      <Card>
        <CardHeader>
          <CardTitle>Motiveringar</CardTitle>
          <CardDescription>
            Koppling till kunskapskraven för varje markering
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.highlights.map((highlight, index) => (
              <div key={index} className="border-l-4 pl-4 py-2" style={{
                borderColor: highlight.grade === 'A' ? '#22c55e' : 
                            highlight.grade === 'C' ? '#3b82f6' : '#eab308'
              }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getGradeColor(highlight.grade)}`}>
                    {highlight.grade}
                  </span>
                  <span className="text-sm font-medium">&quot;{highlight.text.substring(0, 50)}…&quot;</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {highlight.motivation}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assessment */}
      <Card>
        <CardHeader>
          <CardTitle>Övergripande bedömning</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap">{analysis.assessment}</p>
        </CardContent>
      </Card>

      {/* Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback till eleven</CardTitle>
          <CardDescription>
            Konstruktiv feedback som kan delas med eleven
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap mb-4">{analysis.feedback}</p>
          <Button variant="outline" onClick={copyFeedback}>
            <Copy className="mr-2 h-4 w-4" />
            Kopiera feedback
          </Button>
        </CardContent>
      </Card>

      {/* Suggested Grade */}
      {analysis.suggestedGrade && (
        <Card>
          <CardHeader>
            <CardTitle>Förslag på nivå</CardTitle>
            <CardDescription>
              Endast ett förslag - du som lärare fattar det slutgiltiga beslutet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <span className={`inline-block px-6 py-3 rounded-lg text-2xl font-bold ${getGradeColor(analysis.suggestedGrade)}`}>
                {analysis.suggestedGrade}
              </span>
              <p className="text-sm text-muted-foreground">
                Detta är AI:ns förslag baserat på analysen ovan. Granska alltid noggrant innan du fattar ditt beslut.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* GDPR Reminder */}
      {(className || studentId) && (
        <Card className="border-blue-200 dark:border-blue-900">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
              <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div className="flex-1 text-sm">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  GDPR-påminnelse
                </p>
                <p className="text-blue-800 dark:text-blue-200">
                  Informationen om klass och elev ({className && `${className}`}{className && studentId && ', '}{studentId && `${studentId}`})
                  sparas <strong>ALDRIG permanent</strong> och används endast för organisering under denna session.
                  Data raderas automatiskt när du stänger webbläsaren.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Approval */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle>Godkänn bedömningen</CardTitle>
          <CardDescription>
            Bekräfta att du har läst och granskat AI:ns förslag
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <input
                type="checkbox"
                id="approval"
                checked={approved}
                onChange={(e) => setApproved(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border accent-primary focus-visible:outline-2 focus-visible:outline-primary"
              />
              <label htmlFor="approval" className="text-sm cursor-pointer select-none">
                Jag bekräftar att jag har läst och granskat AI:ns förslag. Jag förstår att detta endast är ett förslag 
                och att jag som lärare har det professionella ansvaret för den slutgiltiga bedömningen.
              </label>
            </div>
            <Button disabled={!approved} className="w-full">
              <CheckCircle className="mr-2 h-4 w-4" />
              Godkänn och fortsätt
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Demo survey */}
      <Card>
        <CardContent className="pt-6">
          {surveyAnswer ? (
            <div className="text-center py-2">
              <p className="text-sm text-muted-foreground">
                Tack för din feedback! Den hjälper oss att förbättra AssessAI.
              </p>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <p className="text-sm font-medium">Hur upplever du bedömningen?</p>
              <div className="flex justify-center gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSurveyAnswer("negative")}
                  className="flex flex-col items-center gap-1 h-auto py-3 px-5"
                >
                  <ThumbsDown className="h-5 w-5" />
                  <span className="text-xs">Bristfällig</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSurveyAnswer("neutral")}
                  className="flex flex-col items-center gap-1 h-auto py-3 px-5"
                >
                  <Minus className="h-5 w-5" />
                  <span className="text-xs">Okej</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSurveyAnswer("positive")}
                  className="flex flex-col items-center gap-1 h-auto py-3 px-5"
                >
                  <ThumbsUp className="h-5 w-5" />
                  <span className="text-xs">Bra</span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Har du mer detaljerad feedback?{" "}
                <a
                  href="mailto:erikgardbring@gmail.com?subject=Feedback%20p%C3%A5%20AssessAI"
                  className="text-primary underline hover:text-primary/80 inline-flex items-center gap-1"
                >
                  <MessageSquare className="h-3 w-3 inline" />
                  Skicka ett meddelande
                </a>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
