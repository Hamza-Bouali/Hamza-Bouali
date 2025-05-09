"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Calendar, MapPin, ChevronDown, Linkedin, Github, Instagram, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <aside className="w-full md:w-80 lg:w-96 bg-[#1a2035] dark:bg-[#1a2035] light:bg-card midnight:bg-[#0c1222] text-white p-6 border-r border-[#2a3352] dark:border-[#2a3352] light:border-border midnight:border-[#1a2035]">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 relative mb-4">
          <Image src="/images/hamza.png" alt="Hamza Bouali" fill className="object-cover rounded-2xl" priority />
        </div>

        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Hamza Bouali</h1>
          <p className="text-muted-foreground">Data Engineering Student</p>
          <p className="text-sm text-muted-foreground mt-1">
            En recherche d'un stage de 2 mois en Data Engineering / MLops à partir de juillet 2025
          </p>
        </div>

        <div className="flex gap-2 mb-4 w-full">
          <Button
            className="flex-1 midnight:bg-amber-500 midnight:text-midnight-foreground midnight:hover:bg-amber-600"
            asChild
          >
            <Link href="/resume.pdf" target="_blank">
              <Download className="h-4 w-4 mr-2" /> Download CV
            </Link>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 midnight:border-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/10"
            onClick={() => setShowContacts(!showContacts)}
          >
            <span className="sr-only md:not-sr-only">{showContacts ? "Hide" : "Show"}</span>
            <span className="hidden md:inline">Contacts</span>
            <ChevronDown className={cn("h-4 w-4 transition-transform", showContacts && "rotate-180")} />
          </Button>
        </div>

        <div className="mb-4">
          <ThemeToggle />
        </div>
      </div>

      <div className={cn("space-y-6", !showContacts && "hidden md:block")}>
        <div className="h-px bg-border midnight:bg-[#1a2035]" />

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="bg-muted p-2 rounded-md midnight:bg-[#1a2035] midnight:text-amber-500">
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
            <div className="bg-muted p-2 rounded-md midnight:bg-[#1a2035] midnight:text-amber-500">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Phone</p>
              <a
                href="tel:+212648572537"
                className="text-sm text-muted-foreground hover:text-primary midnight:hover:text-amber-500 transition-colors"
              >
                +212-648-572-537
              </a>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="bg-muted p-2 rounded-md midnight:bg-[#1a2035] midnight:text-amber-500">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Age</p>
              <time className="text-sm text-muted-foreground">21 ans</time>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="bg-muted p-2 rounded-md midnight:bg-[#1a2035] midnight:text-amber-500">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Location</p>
              <address className="text-sm text-muted-foreground not-italic">Rabat, Maroc</address>
            </div>
          </li>
        </ul>

        <div className="h-px bg-border midnight:bg-[#1a2035]" />

        <ul className="flex justify-center gap-4">
          <li>
            <Link
              href="https://www.linkedin.com/in/hamza-bouali-4b11861a1/"
              target="_blank"
              className="bg-muted p-2 rounded-full inline-flex hover:bg-primary hover:text-primary-foreground midnight:bg-[#1a2035] midnight:text-amber-500 midnight:hover:bg-amber-500 midnight:hover:text-midnight-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Hamza-Bouali"
              target="_blank"
              className="bg-muted p-2 rounded-full inline-flex hover:bg-primary hover:text-primary-foreground midnight:bg-[#1a2035] midnight:text-amber-500 midnight:hover:bg-amber-500 midnight:hover:text-midnight-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/__d0rgham__/"
              target="_blank"
              className="bg-muted p-2 rounded-full inline-flex hover:bg-primary hover:text-primary-foreground midnight:bg-[#1a2035] midnight:text-amber-500 midnight:hover:bg-amber-500 midnight:hover:text-midnight-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
