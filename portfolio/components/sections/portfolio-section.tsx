"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Github, ExternalLink, Code, Database, BarChart3, Layers } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectModal, type ProjectDetails } from "@/components/project-modal"

type ProjectCategory = "all" | "competitive-programming" | "web-development" | "data-engineering" | "machine-learning"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const projects: ProjectDetails[] = [
    {
      id: "competitive-programming-101",
      title: "Competitive Programming 101",
      description:
        "A comprehensive guide and resource collection for competitive programming beginners, featuring algorithm implementations, problem-solving strategies, and practice problems.",
      category: "competitive-programming",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://github.com/CODE-ESI-CLUB/Competitive-Programming-101",
      github: "https://github.com/CODE-ESI-CLUB/Competitive-Programming-101",
      technologies: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
      featured: true,
      date: "2023 - Present",
      goals: [
        "Create a comprehensive resource for competitive programming beginners",
        "Implement common algorithms and data structures with explanations",
        "Provide practice problems with solutions and explanations",
        "Build a community of competitive programmers at ESI",
      ],
      challenges: [
        "Making complex algorithms accessible to beginners",
        "Organizing content in a logical progression",
        "Balancing theory with practical examples",
      ],
      solutions: [
        "Created step-by-step tutorials with visual aids",
        "Organized content by difficulty level and topic",
        "Included real contest problems with detailed solutions",
      ],
      outcomes: [
        "Helped 50+ students improve their competitive programming skills",
        "Created a repository of 100+ algorithm implementations",
        "Established a weekly competitive programming workshop",
      ],
    },
    {
      id: "smartline",
      title: "SmartLine",
      description:
        "A web application for queue management and appointment scheduling, helping businesses streamline customer flow and reduce wait times.",
      category: "web-development",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://landing-page-orpin-two-87.vercel.app/",
      github: "https://github.com/Hamza-Bouali/smartline",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      featured: true,
      date: "2023",
      goals: [
        "Develop a user-friendly queue management system",
        "Reduce customer wait times and improve business efficiency",
        "Provide real-time updates and notifications",
        "Enable businesses to analyze customer flow data",
      ],
      challenges: [
        "Handling real-time updates across multiple devices",
        "Designing an intuitive interface for both businesses and customers",
        "Ensuring the system works reliably under high load",
      ],
      solutions: [
        "Implemented WebSocket technology for real-time communication",
        "Created separate interfaces for business admins and customers",
        "Used caching and optimized database queries for performance",
      ],
      outcomes: [
        "Reduced average wait times by 30% in pilot businesses",
        "Improved customer satisfaction scores by 25%",
        "Provided valuable analytics on peak hours and service times",
      ],
    },
    {
      id: "mlops-project",
      title: "MLOps Pipeline",
      description:
        "An end-to-end MLOps pipeline for automating model training, evaluation, and deployment with continuous integration and monitoring.",
      category: "data-engineering",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://github.com/Hamza-Bouali/mlops-pipeline",
      github: "https://github.com/Hamza-Bouali/mlops-pipeline",
      technologies: ["Python", "Docker", "Kubernetes", "TensorFlow", "MLflow", "GitHub Actions"],
      featured: true,
      date: "2024",
      goals: [
        "Automate the machine learning lifecycle from data preparation to deployment",
        "Implement CI/CD practices for ML models",
        "Enable model versioning and experiment tracking",
        "Set up monitoring for model performance in production",
      ],
      challenges: [
        "Integrating diverse tools and technologies into a cohesive pipeline",
        "Ensuring reproducibility of ML experiments",
        "Managing dependencies and environments across different stages",
      ],
      solutions: [
        "Used Docker containers to standardize environments",
        "Implemented MLflow for experiment tracking and model registry",
        "Created GitHub Actions workflows for automated testing and deployment",
      ],
      outcomes: [
        "Reduced model deployment time from days to hours",
        "Improved model quality through automated testing and validation",
        "Enhanced collaboration between data scientists and engineers",
      ],
    },
    {
      id: "data-visualization-dashboard",
      title: "Data Visualization Dashboard",
      description:
        "An interactive dashboard for visualizing complex datasets with customizable charts, filters, and real-time updates.",
      category: "data-engineering",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "https://github.com/Hamza-Bouali/data-viz-dashboard",
      technologies: ["D3.js", "React", "Python", "Flask", "PostgreSQL"],
      date: "2023",
      goals: [
        "Create an intuitive interface for exploring complex datasets",
        "Enable customizable visualizations for different data types",
        "Support real-time data updates and filtering",
        "Make advanced analytics accessible to non-technical users",
      ],
      challenges: [
        "Handling large datasets efficiently in the browser",
        "Creating responsive visualizations that work on all devices",
        "Balancing feature richness with usability",
      ],
      solutions: [
        "Implemented data aggregation and sampling techniques",
        "Used responsive design principles for all visualizations",
        "Created guided tours and tooltips for new users",
      ],
      outcomes: [
        "Enabled business users to create custom reports without technical help",
        "Reduced reporting time by 60%",
        "Increased data-driven decision making across teams",
      ],
    },
    {
      id: "sentiment-analysis",
      title: "Social Media Sentiment Analysis",
      description:
        "A machine learning model for analyzing sentiment in social media posts, with a focus on Arabic language content.",
      category: "machine-learning",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "https://github.com/Hamza-Bouali/sentiment-analysis",
      technologies: ["Python", "NLTK", "TensorFlow", "Keras", "Transformers", "Hugging Face"],
      date: "2024",
      goals: [
        "Develop a sentiment analysis model for Arabic social media content",
        "Achieve high accuracy across different dialects and contexts",
        "Create an API for easy integration with other applications",
        "Build a dashboard for monitoring sentiment trends",
      ],
      challenges: [
        "Handling the complexity and diversity of Arabic dialects",
        "Limited availability of labeled training data",
        "Processing informal language, slang, and code-switching",
      ],
      solutions: [
        "Fine-tuned pre-trained Arabic language models",
        "Created a custom dataset with manual annotation",
        "Implemented data augmentation techniques for better generalization",
      ],
      outcomes: [
        "Achieved 85% accuracy on sentiment classification",
        "Successfully deployed the model as an API service",
        "Enabled real-time sentiment monitoring for client brands",
      ],
    },
    {
      id: "e-commerce-platform",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, payment processing, and order tracking.",
      category: "web-development",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "https://github.com/Hamza-Bouali/ecommerce-platform",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
      date: "2023",
      goals: [
        "Build a modern, responsive e-commerce platform",
        "Implement secure payment processing and user authentication",
        "Create an intuitive admin dashboard for product management",
        "Optimize for performance and SEO",
      ],
      challenges: [
        "Ensuring security for payment processing",
        "Managing complex state across the shopping experience",
        "Optimizing performance with large product catalogs",
      ],
      solutions: [
        "Integrated Stripe for secure payment processing",
        "Used React Context and state management for shopping cart",
        "Implemented pagination, lazy loading, and image optimization",
      ],
      outcomes: [
        "Created a fully functional e-commerce platform",
        "Achieved 95+ performance score on Lighthouse",
        "Reduced page load times by 40% compared to previous solution",
      ],
    },
    {
      id: "data-pipeline-framework",
      title: "Data Pipeline Framework",
      description:
        "A modular framework for building scalable and maintainable data pipelines with support for various data sources and destinations.",
      category: "data-engineering",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "https://github.com/Hamza-Bouali/data-pipeline-framework",
      technologies: ["Python", "Apache Airflow", "Spark", "Kafka", "AWS", "Docker"],
      date: "2024",
      goals: [
        "Create a reusable framework for building data pipelines",
        "Support multiple data sources and destinations",
        "Enable monitoring, logging, and error handling",
        "Make pipelines scalable and fault-tolerant",
      ],
      challenges: [
        "Designing a flexible architecture that works for diverse use cases",
        "Handling failures gracefully in distributed systems",
        "Balancing performance with maintainability",
      ],
      solutions: [
        "Implemented a modular design with pluggable components",
        "Created retry mechanisms and circuit breakers for resilience",
        "Used Apache Airflow for orchestration and monitoring",
      ],
      outcomes: [
        "Reduced development time for new pipelines by 70%",
        "Improved data reliability with comprehensive error handling",
        "Enabled processing of 10x more data with the same resources",
      ],
    },
    {
      id: "algorithm-visualizer",
      title: "Algorithm Visualizer",
      description:
        "An interactive tool for visualizing common algorithms and data structures, designed for educational purposes.",
      category: "competitive-programming",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      github: "https://github.com/Hamza-Bouali/algorithm-visualizer",
      technologies: ["JavaScript", "React", "Canvas API", "Algorithms", "Data Structures"],
      date: "2023",
      goals: [
        "Create an interactive tool for visualizing algorithms and data structures",
        "Help students understand complex algorithms through animation",
        "Provide step-by-step explanations of algorithm execution",
        "Support a wide range of common algorithms and data structures",
      ],
      challenges: [
        "Creating smooth and informative animations",
        "Explaining complex algorithms in an accessible way",
        "Balancing visual appeal with educational value",
      ],
      solutions: [
        "Used Canvas API for efficient animations",
        "Added speed controls and step-by-step execution",
        "Included detailed explanations alongside visualizations",
      ],
      outcomes: [
        "Created visualizations for 20+ common algorithms",
        "Used by 500+ students for learning algorithms",
        "Received positive feedback from computer science educators",
      ],
    },
  ]

  const categories: { id: ProjectCategory; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All Projects", icon: <Layers className="h-4 w-4" /> },
    { id: "competitive-programming", label: "Competitive Programming", icon: <Code className="h-4 w-4" /> },
    { id: "web-development", label: "Web Development", icon: <ExternalLink className="h-4 w-4" /> },
    { id: "data-engineering", label: "Data Engineering", icon: <Database className="h-4 w-4" /> },
    { id: "machine-learning", label: "Machine Learning", icon: <BarChart3 className="h-4 w-4" /> },
  ]

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)
  const featuredProjects = projects.filter((project) => project.featured)

  const handleViewProject = (project: ProjectDetails) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
        <p className="text-muted-foreground mt-2">Showcasing my projects and technical work</p>
      </header>

      <Tabs defaultValue="featured" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="featured">Featured Projects</TabsTrigger>
          <TabsTrigger value="all">All Projects</TabsTrigger>
        </TabsList>
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
                      <Button size="sm" onClick={() => handleViewProject(project)}>
                        <Eye className="h-4 w-4 mr-2" /> View Project
                      </Button>
                      {project.github && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4 mr-2" /> Code
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
                  <Button size="sm" variant="outline" className="w-full" onClick={() => handleViewProject(project)}>
                    <Eye className="h-3.5 w-3.5 mr-1.5" /> View
                  </Button>
                  {project.github && (
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="h-3.5 w-3.5 mr-1.5" /> Code
                      </Link>
                    </Button>
                  )}
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
