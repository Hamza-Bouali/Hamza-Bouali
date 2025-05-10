"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://submit-form.com/Ww9Y2Y154", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // Add this line
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I will reply as soon as possible.",
        })
        setFormData({ fullname: "", email: "", subject: "", message: "" })
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <article className="max-w-3xl mx-auto" id="contact">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <div className="h-1 w-20 bg-primary midnight:bg-amber-500 mt-2"></div>
        <p className="text-muted-foreground mt-4">
          Vous êtes à la recherche d'un stagiaire en Data Engineering ou MLOps? N'hésitez pas à me contacter pour
          discuter de vos projets et besoins.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:hamzabouali322@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary midnight:hover:text-amber-500 transition-colors"
                    >
                      hamzabouali322@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Téléphone</p>
                    <a
                      href="tel:+212648572537"
                      className="text-sm text-muted-foreground hover:text-primary midnight:hover:text-amber-500 transition-colors"
                    >
                      +212-648-572-537
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Disponibilité</p>
                    <p className="text-sm text-muted-foreground">Stage de 2 mois à partir de juillet 2025</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Localisation</p>
                    <address className="text-sm text-muted-foreground not-italic">Rabat, Maroc</address>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Profils professionnels</h4>
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/hamza-bouali-4b11861a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-500 midnight:text-amber-500 midnight:hover:text-amber-600"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Hamza-Bouali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-500 midnight:text-amber-500 midnight:hover:text-amber-600"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-0 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105885.07179684826!2d-6.939664142899823!3d33.96919139236946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat!5e0!3m2!1sen!2sma!4v1733916263028!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Rabat, Morocco"
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    name="fullname"
                    placeholder="Nom complet"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    className="border-blue-500/20 focus:border-blue-500 midnight:border-amber-500/20 midnight:focus:border-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Adresse email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-blue-500/20 focus:border-blue-500 midnight:border-amber-500/20 midnight:focus:border-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-blue-500/20 focus:border-blue-500 midnight:border-amber-500/20 midnight:focus:border-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] border-blue-500/20 focus:border-blue-500 midnight:border-amber-500/20 midnight:focus:border-amber-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full midnight:bg-amber-500 midnight:text-midnight-foreground midnight:hover:bg-amber-600"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  )
}