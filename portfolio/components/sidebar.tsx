"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
  Linkedin,
  Github,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function Sidebar() {
  const [showContacts, setShowContacts] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Handle responsive behavior
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <aside className="w-full md:w-80 lg:w-96 bg-[#1a2035] dark:bg-[#1a2035] light:bg-card midnight:bg-[#0c1222] text-white p-6 border-r border-[#2a3352] dark:border-[#2a3352] light:border-border midnight:border-[#1a2035]">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 relative mb-4">
          <Image src="/hamza.jpg" alt="Hamza Bouali" fill className="object-cover rounded-2xl" priority />
        </div>

        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Hamza Bouali</h1>
          <p className="text-primary midnight:text-amber-500 font-medium">Data Engineering Student & MLOps enthousiat </p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Badge
              variant="outline"
              className="bg-blue-500/10 text-blue-400 border-blue-500/20 midnight:bg-amber-500/10 midnight:text-amber-500 midnight:border-amber-500/20"
            >
              Python
            </Badge>
            <Badge
              variant="outline"
              className="bg-blue-500/10 text-blue-400 border-blue-500/20 midnight:bg-amber-500/10 midnight:text-amber-500 midnight:border-amber-500/20"
            >
              Data Engineering
            </Badge>
            <Badge
              variant="outline"
              className="bg-blue-500/10 text-blue-400 border-blue-500/20 midnight:bg-amber-500/10 midnight:text-amber-500 midnight:border-amber-500/20"
            >
              MLOps
            </Badge>
          </div>
          <div className="mt-3 p-2 rounded-md bg-blue-500/10 border border-blue-500/20 text-sm text-blue-100 midnight:bg-amber-500/10 midnight:border-amber-500/20 midnight:text-amber-100">
            <span className="font-medium">Disponible:</span> Stage Data Engineering / MLOps (Juillet 2025)
          </div>
        </div>

        <div className="flex gap-2 mb-4 w-full">
          <Button
            className="flex-1 midnight:bg-amber-500 midnight:text-midnight-foreground midnight:hover:bg-amber-600"
            asChild
          >
            <Link href="/resume.pdf" target="_blank">
              <Download className="h-4 w-4 mr-2" /> Télécharger CV
            </Link>
          </Button>
          
        </div>

        <div className="mb-4">
          
        </div>
      </div>

      {/* Contacts section with improved visibility logic */}
      <div
        className={cn("space-y-6", {
          hidden: !showContacts && isMobile,
          block: showContacts || !isMobile,
        })}
      >
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
            <div className="bg-muted p-2 rounded-md midnight:bg-[#1a2035] midnight:text-amber-500">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Âge</p>
              <time className="text-sm text-muted-foreground">21 ans</time>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="bg-muted p-2 rounded-md midnight:bg-[#1a2035] midnight:text-amber-500">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Localisation</p>
              <address className="text-sm text-muted-foreground not-italic">Rabat, Maroc</address>
            </div>
          </li>
        </ul>

        <div className="h-px bg-border midnight:bg-[#1a2035]" />

        <div className="space-y-3">
          <p className="text-sm font-medium">Profils professionnels</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="https://www.linkedin.com/in/hamza-bouali-4b11861a1/"
                target="_blank"
                className="flex items-center gap-2 p-2 rounded-md bg-muted/50 hover:bg-primary/20 midnight:bg-[#1a2035] midnight:hover:bg-amber-500/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-blue-400 midnight:text-amber-500" />
                <span className="text-sm">LinkedIn</span>
                <ExternalLink className="h-3 w-3 ml-auto text-muted-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Hamza-Bouali"
                target="_blank"
                className="flex items-center gap-2 p-2 rounded-md bg-muted/50 hover:bg-primary/20 midnight:bg-[#1a2035] midnight:hover:bg-amber-500/20 transition-colors"
              >
                <Github className="h-4 w-4 text-blue-400 midnight:text-amber-500" />
                <span className="text-sm">GitHub</span>
                <ExternalLink className="h-3 w-3 ml-auto text-muted-foreground" />
              </Link>
            </li>
            
          </ul>
        </div>

        <div className="h-px bg-border midnight:bg-[#1a2035]" />

        <div>
          <p className="text-sm font-medium mb-2">Langues</p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30">
              Français (Bilingue)
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30">
              Arabe (Bilingue)
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30">
              Anglais (Courant)
            </Badge>
          </div>
        </div>
      </div>
    </aside>
  )
}
