import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Database, Code2, LineChart, Cloud, GitBranch, BarChart3, Monitor, Server, Cpu, Layers } from "lucide-react"

export function SkillsSection() {
  const technicalSkills = [
    {
      category: "Langages de programmation",
      icon: <Code2 className="h-5 w-5" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Dart", level: 70 },
      ],
    },
    {
      category: "Data Engineering",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "ETL/ELT Pipelines", level: 85 },
        { name: "Apache Airflow", level: 85 },
        { name: "SQL Avancé", level: 90 },
        { name: "Data Warehousing", level: 80 },
        { name: "Data Modeling", level: 75 },
      ],
    },
    {
      category: "Data Science",
      icon: <LineChart className="h-5 w-5" />,
      skills: [
        { name: "Pandas/NumPy", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Power BI", level: 85 },
        { name: "Data Visualization", level: 90 },
      ],
    },
  ]

  const technologies = [
    {
      category: "Backend & APIs",
      icon: <Server className="h-5 w-5" />,
      items: ["API REST", "FastAPI", "Flask", "Python", "SQL"],
    },
    {
      category: "Data Processing",
      icon: <Database className="h-5 w-5" />,
      items: ["Pandas", "NumPy", "Scikit-learn", "Apache Airflow", "SQL Avancé"],
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="h-5 w-5" />,
      items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "GitLab CI"],
    },
    {
      category: "Version Control & OS",
      icon: <GitBranch className="h-5 w-5" />,
      items: ["Git", "GitHub", "Linux", "Bash Scripting"],
    },
    {
      category: "Frontend",
      icon: <Monitor className="h-5 w-5" />,
      items: ["HTML/CSS", "JavaScript", "React", "Flutter", "Dart"],
    },
    {
      category: "Data Visualization",
      icon: <BarChart3 className="h-5 w-5" />,
      items: ["Power BI", "Matplotlib", "Seaborn", "Plotly", "Pack Office"],
    },
  ]

  const projects = [
    {
      title: "Pipeline ETL pour l'analyse de données e-commerce",
      description:
        "Conception et implémentation d'un pipeline ETL pour traiter et analyser des données de ventes e-commerce à grande échelle.",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "AWS S3"],
      achievements: ["Réduction de 40% du temps de traitement", "Automatisation complète du processus"],
    },
    {
      title: "Système de recommandation de produits",
      description:
        "Développement d'un système de recommandation de produits basé sur le comportement des utilisateurs et les caractéristiques des produits.",
      technologies: ["Python", "Scikit-learn", "FastAPI", "Redis", "Docker"],
      achievements: ["Augmentation de 25% du taux de conversion", "Déploiement en production avec CI/CD"],
    },
    {
      title: "Dashboard de visualisation de données",
      description:
        "Création d'un dashboard interactif pour visualiser et analyser les performances des campagnes marketing.",
      technologies: ["Power BI", "Python", "SQL", "DAX"],
      achievements: ["Adoption par toute l'équipe marketing", "Réduction de 70% du temps de reporting"],
    },
  ]

  const interests = [
    {
      name: "Entreprenariat",
      description: "Intérêt pour la création et le développement de projets innovants dans le domaine de la data.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      name: "Tendances technologiques",
      description:
        "Veille constante sur les nouvelles technologies et innovations dans le domaine de la data et de l'IA.",
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      name: "Sport",
      description: "Pratique régulière de sports pour maintenir un équilibre vie professionnelle/personnelle.",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      name: "Création de contenu",
      description: "Création de contenu éducatif et partage de connaissances techniques dans le domaine de la data.",
      icon: <BarChart3 className="h-5 w-5" />,
    },
  ]

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Compétences & Expertise</h2>
        <div className="h-1 w-20 bg-primary midnight:bg-amber-500 mt-2"></div>
        <p className="text-muted-foreground mt-4">
          Un aperçu complet de mes compétences techniques, outils et projets dans le domaine du data engineering et de
          la science des données.
        </p>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span>Compétences techniques</span>
          <div className="h-px flex-1 bg-border midnight:bg-[#1a2035]"></div>
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((skillGroup) => (
            <Card key={skillGroup.category} className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
              <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                    {skillGroup.icon}
                  </div>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillGroup.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-1.5 midnight:bg-[#1a2035]"
                      indicatorClassName="midnight:bg-amber-500"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span>Technologies & Outils</span>
          <div className="h-px flex-1 bg-border midnight:bg-[#1a2035]"></div>
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <Card key={tech.category} className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
              <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-lg">{tech.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 midnight:bg-amber-500/10 midnight:text-amber-500 midnight:border-amber-500/20 midnight:hover:bg-amber-500/20"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span>Projets significatifs</span>
          <div className="h-px flex-1 bg-border midnight:bg-[#1a2035]"></div>
        </h3>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-blue-500/20 midnight:border-amber-500/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 midnight:bg-amber-500/10 midnight:text-amber-500 midnight:border-amber-500/20 midnight:hover:bg-amber-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Résultats:</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span>Centres d'intérêt</span>
          <div className="h-px flex-1 bg-border midnight:bg-[#1a2035]"></div>
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {interests.map((interest) => (
            <Card key={interest.name} className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
              <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-blue-500/20 p-1.5 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                    {interest.icon}
                  </div>
                  <h4 className="font-medium">{interest.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </article>
  )
}
