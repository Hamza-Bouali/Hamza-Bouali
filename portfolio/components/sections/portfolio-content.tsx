"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Layers } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectModal, type ProjectDetails } from "@/components/project-modal"
import { fetchGitHubRepos, extractTechnologies, type GitHubRepo } from "@/lib/github"

type ProjectCategory = string

function getPrimaryCategory(repo: GitHubRepo): string {
  // Use the first GitHub topic as the primary category when available
  if (repo.topics && repo.topics.length > 0) {
    return repo.topics[0]
  }
  // Fallback to language when no topics are defined
  if (repo.language) {
    return repo.language.toLowerCase()
  }
  return "uncategorized"
}

function convertRepoToProjectDetails(repo: GitHubRepo, stars: number): ProjectDetails {
  const category = getPrimaryCategory(repo)
  return {
    id: repo.name,
    title: repo.name.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    description: repo.description || "A GitHub project",
    category: category as ProjectCategory,
    image: "/placeholder.svg?height=300&width=400",
    link: repo.html_url,
    github: repo.html_url,
    technologies: extractTechnologies(repo),
    tags: (repo.topics || []).map((t) => t.toLowerCase()),
    featured: stars >= 5,
    date: new Date(repo.updated_at).getFullYear().toString(),
  }
}

export function PortfolioContent() {
  const [projects, setProjects] = useState<ProjectDetails[]>([])
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true)
        const repos = await fetchGitHubRepos()
        
        if (repos.length === 0) {
          setError("Could not load projects from GitHub")
          return
        }

        const convertedProjects = repos
          .map((repo, index) => convertRepoToProjectDetails(repo, repos.length - index))
          .sort((a, b) => {
            // Sort featured projects first, then by date
            if (a.featured !== b.featured) {
              return a.featured ? -1 : 1
            }
            return (b.date || "0").localeCompare(a.date || "0")
          })

        setProjects(convertedProjects)
        setError(null)
      } catch (err) {
        setError("Failed to load projects")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  // Build category filters dynamically from GitHub topics
  const categorySet = new Set<string>([
    ...projects.map((p) => p.category).filter(Boolean),
  ])
  const categories: { id: ProjectCategory; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All Projects", icon: <Layers className="h-4 w-4" /> },
    ...Array.from(categorySet)
      .sort((a, b) => a.localeCompare(b))
      .map((id) => ({
        id,
        label: id.split("-").join(" "),
        icon: <Layers className="h-4 w-4" />,
      })),
  ]

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)
  const featuredProjects = projects.filter((project) => project.featured)

  const handleViewProject = (project: ProjectDetails) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  if (loading) {
    return (
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
          <p className="text-muted-foreground mt-2">Showcasing my projects and technical work</p>
        </header>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="h-32 animate-pulse bg-muted" />
          ))}
        </div>
      </article>
    )
  }

  if (error || projects.length === 0) {
    return (
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
          <p className="text-muted-foreground mt-2">Showcasing my projects and technical work</p>
        </header>
        <Card className="p-6">
          <p className="text-center text-muted-foreground">
            {error || "No projects found. Check your GitHub profile."}
          </p>
          <p className="text-center text-xs text-muted-foreground mt-2">
            Make sure repos are public and tagged with topics for better categorization
          </p>
        </Card>
      </article>
    )
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
        <p className="text-muted-foreground mt-2">Showcasing my {projects.length} GitHub projects</p>
      </header>

      <Tabs defaultValue={featuredProjects.length > 0 ? "featured" : "all"} className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          {featuredProjects.length > 0 && <TabsTrigger value="featured">Featured Projects</TabsTrigger>}
          <TabsTrigger value="all">All Projects</TabsTrigger>
        </TabsList>

        {featuredProjects.length > 0 && (
          <TabsContent value="featured" className="mt-6">
            <div className="grid gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative aspect-video md:aspect-auto md:h-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col">
                      <CardHeader className="p-0 pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="capitalize">{project.category.split("-").join(" ")}</Badge>
                        </div>
                        {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {project.tags.slice(0, 5).map((tag) => (
                              <Badge key={tag} variant="outline" className="font-normal text-xs capitalize">
                                {tag.split("-").join(" ")}
                              </Badge>
                            ))}
                            {project.tags.length > 5 && (
                              <Badge variant="outline" className="font-normal text-xs">+{project.tags.length - 5}</Badge>
                            )}
                          </div>
                        )}
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <div className="flex flex-wrap gap-2 my-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="font-normal">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="font-normal">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                      <CardFooter className="p-0 mt-auto flex gap-3">
                        <Button size="sm" asChild>
                          <Link href={project.github!} target="_blank">
                            <Github className="h-4 w-4 mr-2" /> View on GitHub
                          </Link>
                        </Button>
                        {project.link && project.link !== project.github && (
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.link} target="_blank">
                              <ExternalLink className="h-4 w-4 mr-2" /> Visit
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        )}

        <TabsContent value="all" className="mt-6">
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-1.5"
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col h-full">
                <div className="relative aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-1">
                  <Badge className="mb-2 capitalize">{project.category.split("-").join(" ")}</Badge>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" className="font-normal text-xs capitalize">
                          {tag.split("-").join(" ")}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline" className="font-normal text-xs">+{project.tags.length - 4}</Badge>
                      )}
                    </div>
                  )}
                  <h3 className="font-medium text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="font-normal text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="font-normal text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t bg-muted/30 flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href={project.github!} target="_blank">
                      <Github className="h-3.5 w-3.5 mr-1.5" /> Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <ProjectModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </article>
  )
}
