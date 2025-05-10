"use client"

import { useState } from "react"
import { AboutSection } from "@/components/sections/about-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ContactSection } from "@/components/sections/contact-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

type Section = "about" | "resume" | "portfolio" | "skills" | "testimonials" | "blog" | "contact"

export function MainContent() {
  const [activeSection, setActiveSection] = useState<Section>("about")

  const sections = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "skills", label: "Skills" },
    { id: "testimonials", label: "Testimonials" },
    /*{ id: "blog", label: "Blog" },*/
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="flex-1 overflow-auto">
      <nav className="sticky top-0 z-10 bg-background border-b midnight:border-[#1a2035]">
        <div className="flex items-center justify-between pr-4">
          <ul className="flex overflow-x-auto flex-1">
            {sections.map((section) => (
              <li key={section.id} className="flex-1">
                <button
                  className={cn(
                    "w-full px-4 py-3 text-sm font-medium transition-colors hover:text-primary midnight:hover:text-amber-500",
                    activeSection === section.id
                      ? "text-primary border-b-2 border-primary midnight:text-amber-500 midnight:border-amber-500"
                      : "text-muted-foreground",
                  )}
                  onClick={() => setActiveSection(section.id as Section)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      <div className="p-6">
        {activeSection === "about" && <AboutSection />}
        {activeSection === "resume" && <ResumeSection />}
        {activeSection === "portfolio" && <PortfolioSection />}
        {activeSection === "skills" && <SkillsSection />}
        {activeSection === "testimonials" && <TestimonialsSection />}
        {/*activeSection === "blog" && <BlogSection />*/}
        {activeSection === "contact" && <ContactSection />}
      </div>
    </div>
  )
}
