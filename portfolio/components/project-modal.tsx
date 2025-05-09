import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, CheckCircle2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export interface ProjectDetails {
  id: string
  title: string
  description: string
  category: string
  image: string
  link: string
  github?: string
  technologies: string[]
  featured?: boolean
  date?: string
  goals?: string[]
  challenges?: string[]
  solutions?: string[]
  outcomes?: string[]
}

interface ProjectModalProps {
  project: ProjectDetails | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge className="capitalize midnight:bg-amber-500/20 midnight:text-amber-500">
              {project.category.split("-").join(" ")}
            </Badge>
            {project.date && (
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                {project.date}
              </div>
            )}
          </div>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <div className="grid gap-6">
          <div>
            <h3 className="font-medium mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="midnight:bg-[#1a2035] midnight:hover:bg-[#1a2035]/80">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.goals && project.goals.length > 0 && (
            <div>
              <h3 className="font-medium mb-2">Project Goals</h3>
              <ul className="space-y-1">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 midnight:text-amber-500 mt-1 shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="font-medium mb-2">Challenges</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && project.solutions.length > 0 && (
              <div>
                <h3 className="font-medium mb-2">Solutions</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h3 className="font-medium mb-2">Outcomes</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}

          <Separator className="midnight:bg-[#1a2035]" />

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="midnight:bg-amber-500 midnight:text-midnight-foreground midnight:hover:bg-amber-600"
            >
              <Link href={project.link} target="_blank">
                <ExternalLink className="h-4 w-4 mr-2" /> Visit Project
              </Link>
            </Button>
            {project.github && (
              <Button
                variant="outline"
                asChild
                className="midnight:border-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/10"
              >
                <Link href={project.github} target="_blank">
                  <Github className="h-4 w-4 mr-2" /> View Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
