import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Database, Code2, LineChart, Cloud, GitBranch, BarChart3, Monitor, Server } from "lucide-react"

export function SkillsSection() {
  const technicalSkills = [
    {
      category: "Programming Languages",
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
        { name: "Data Warehousing", level: 80 },
        { name: "Apache Airflow", level: 85 },
        { name: "SQL Avancé", level: 90 },
        { name: "CI/CD", level: 80 },
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

  const interests = [
    {
      name: "Entreprenariat",
      description: "Intérêt pour la création et le développement de projets innovants",
    },
    {
      name: "Tendances technologiques",
      description: "Veille sur les nouvelles technologies et innovations dans le domaine de la data",
    },
    {
      name: "Sport",
      description: "Pratique régulière de sports pour maintenir un équilibre vie professionnelle/personnelle",
    },
    {
      name: "Création de contenu",
      description: "Création de contenu éducatif et partage de connaissances techniques",
    },
  ]

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
        <p className="text-muted-foreground mt-2">
          A comprehensive overview of my technical skills, tools, and certifications
        </p>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((skillGroup) => (
            <Card key={skillGroup.category}>
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
        <h3 className="text-2xl font-semibold mb-6">Technologies & Tools</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <Card key={tech.category}>
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
                      className="midnight:bg-[#1a2035] midnight:hover:bg-[#1a2035]/80"
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

      <section>
        <h3 className="text-2xl font-semibold mb-6">Centres d'intérêt</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {interests.map((interest) => (
            <Card key={interest.name}>
              <CardContent className="p-6">
                <h4 className="font-medium mb-2">{interest.name}</h4>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </article>
  )
}
