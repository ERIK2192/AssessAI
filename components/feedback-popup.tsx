"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, X, ThumbsDown, Minus, ThumbsUp, Send } from "lucide-react"

export function FeedbackPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(false)
  const [rating, setRating] = useState<string | null>(null)
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const hasGivenFeedback = localStorage.getItem("assessai-feedback-given")
    if (!hasGivenFeedback) {
      setShowPulse(true)
      const timer = setTimeout(() => setShowPulse(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = () => {
    const ratingLabel = rating === "positive" ? "Bra" : rating === "neutral" ? "Okej" : "Bristfällig"
    const body = [
      `Betyg: ${ratingLabel}`,
      message ? `\nMeddelande:\n${message}` : "",
      email ? `\nE-post: ${email}` : "",
    ].filter(Boolean).join("\n")

    window.location.href = `mailto:erikgardbring@gmail.com?subject=${encodeURIComponent("AssessAI Feedback")}&body=${encodeURIComponent(body)}`

    localStorage.setItem("assessai-feedback-given", "true")
    setShowPulse(false)
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
      setRating(null)
      setMessage("")
      setEmail("")
    }, 3000)
  }

  const ratingOptions = [
    { value: "negative", icon: ThumbsDown, label: "Bristfällig" },
    { value: "neutral", icon: Minus, label: "Okej" },
    { value: "positive", icon: ThumbsUp, label: "Bra" },
  ]

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity ${
          showPulse ? "animate-pulse" : ""
        }`}
      >
        <MessageSquare className="h-5 w-5" />
        <span className="text-sm font-medium">Ge feedback</span>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          <Card className="relative z-10 w-full max-w-sm shadow-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Hjälp oss bli bättre</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-6">
                  <p className="text-sm text-muted-foreground">
                    Tack för din feedback!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Hur upplevde du AssessAI?</p>
                    <div className="flex gap-2">
                      {ratingOptions.map((opt) => (
                        <Button
                          key={opt.value}
                          variant={rating === opt.value ? "default" : "outline"}
                          onClick={() => setRating(opt.value)}
                          className="flex-1 flex flex-col items-center gap-1 h-auto py-3"
                        >
                          <opt.icon className="h-5 w-5" />
                          <span className="text-xs">{opt.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium" htmlFor="feedback-message">
                      Berätta gärna mer:
                    </label>
                    <Textarea
                      id="feedback-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Vad tyckte du? Vad kan förbättras?"
                      className="mt-1 min-h-[80px]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium" htmlFor="feedback-email">
                      Din e-post (valfritt):
                    </label>
                    <input
                      id="feedback-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="namn@exempel.se"
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={!rating}
                    className="w-full"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Skicka feedback
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
