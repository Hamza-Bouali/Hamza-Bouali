import { Users, Globe, Award, Briefcase, GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function ResumeSection() {
  const languages = [
    { name: "Français", level: "Bilingue", value: 100 },
    { name: "Arabe", level: "Bilingue", value: 100 },
    { name: "Anglais", level: "Courant", value: 90 },
  ]

  const softSkills = [
    { name: "Apprentissage autonome", value: 95 },
    { name: "Gestion du temps", value: 90 },
    { name: "Esprit d'analyse", value: 95 },
    { name: "Travail collaboratif", value: 85 },
    { name: "Communication technique", value: 90 },
  ]

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Parcours</h2>
        <div className="h-1 w-20 bg-primary midnight:bg-amber-500 mt-2"></div>
      </header>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Formation</h3>
        </div>

        <div className="space-y-8">
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border midnight:before:bg-[#1a2035]">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-lg font-medium">
                Diplôme d'ingénieur: Ingénierie des connaissances et sciences des données
              </h4>
              <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30">
                En cours
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>Septembre 2023 — présent</span>
            </div>
            <p className="text-muted-foreground font-medium">
              École des sciences de l'information (ESI) - Kenitra, Maroc
            </p>
            <div className="mt-2 space-y-1 text-muted-foreground">
              <p>Formation d'excellence en ingénierie des données et intelligence artificielle</p>
              <p>Spécialisation en data engineering, machine learning et analyse de données</p>
            </div>
          </div>

          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border midnight:before:bg-[#1a2035]">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">Classes préparatoires aux grandes écoles: MPSI-MP</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>Septembre 2021 — Juin 2023</span>
            </div>
            <p className="text-muted-foreground font-medium">CPGE Mohamed 6 - Kenitra, Maroc</p>
            <div className="mt-2 space-y-1 text-muted-foreground">
              <p>Formation intensive en mathématiques, physique et sciences de l'ingénieur</p>
              <p>Développement de compétences analytiques et de résolution de problèmes complexes</p>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">Baccalauréat en sciences mathématiques B</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>Septembre 2019 — Juin 2021</span>
            </div>
            <p className="text-muted-foreground font-medium">Groupe Scolaire Almouwatna - Rabat, Maroc</p>
            <p className="text-muted-foreground mt-1">Mention: Assez bien</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <Briefcase className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Expérience professionnelle</h3>
        </div>

        <div className="space-y-8">
          <Card className="border-blue-500/20 midnight:border-amber-500/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg font-medium">Stagiaire Data Analyst</h4>
                  <p className="text-muted-foreground">AILAND - Rabat, Maroc</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30">
                    Juin 2024
                  </Badge>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500 shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Optimisation de campagne:</span> Mise en place d'une
                    nouvelle stratégie qui a permis d'augmenter l'engagement de 40% sur les réseaux sociaux
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500 shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Amélioration de modèles:</span> Ajustement des
                    algorithmes pour la tâche de social listening au Maroc, augmentant la précision de 15%
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500 shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Analyse de données:</span> Extraction d'insights
                    pertinents à partir des données de réseaux sociaux pour guider les décisions marketing
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500 shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Technologies utilisées:</span> Python, Pandas, NLTK,
                    Power BI, APIs de réseaux sociaux
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Certifications</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Supervised Machine Learning: Regression & Classification</h4>
                <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30 whitespace-nowrap ml-2">
                  Oct 2024
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Stanford, Deeplearning.ai, Coursera</p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Agile Project Management</h4>
                <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30 whitespace-nowrap ml-2">
                  Oct 2024
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">HP Life</p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">SQL Associate</h4>
                <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30 whitespace-nowrap ml-2">
                  Nov 2024
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">DataCamp</p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Introduction to Machine Learning</h4>
                <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30 whitespace-nowrap ml-2">
                  Mai 2024
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Kaggle</p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Data Engineering Associate</h4>
                <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30 whitespace-nowrap ml-2">
                  2024
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">DataCamp</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <Globe className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Langues</h3>
        </div>

        <Card className="border-blue-500/20 midnight:border-amber-500/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              {languages.map((language) => (
                <div key={language.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{language.name}</span>
                    <span className="text-sm text-muted-foreground">{language.level}</span>
                  </div>
                  <Progress
                    value={language.value}
                    className="h-2 midnight:bg-[#1a2035]"
                    indicatorClassName="midnight:bg-amber-500"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
        <Card className="border-blue-500/20 midnight:border-amber-500/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress
                    value={skill.value}
                    className="h-2 midnight:bg-[#1a2035]"
                    indicatorClassName="midnight:bg-amber-500"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <Users className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Activités parascolaires</h3>
        </div>

        <div className="space-y-6">
          <Card className="border-blue-500/20 midnight:border-amber-500/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg font-medium">Co-chef de cellule de programmation compétitive</h4>
                  <p className="text-muted-foreground">CODE-ESI - Rabat, Maroc</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30">
                    Sept 2024 - Juin 2025
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground">
                Partage d'expertise dans la résolution des problèmes complexes avec la nouvelle génération des
                ingénieurs. Organisation d'ateliers et de sessions de formation en algorithmes et structures de données.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg font-medium">Trésorier</h4>
                  <p className="text-muted-foreground">JCMP-ESI - Rabat, Maroc</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30">
                    Sept 2024 - Déc 2024
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground">
                Gestion des finances de l'association, élaboration de budgets pour les événements et suivi des dépenses.
                Développement de compétences en gestion financière et travail d'équipe.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg font-medium">Membre de la cellule de sponsoring</h4>
                  <p className="text-muted-foreground">Moroccan Days of Future Data Scientists - Rabat, Maroc</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 midnight:bg-amber-500/20 midnight:text-amber-500 midnight:hover:bg-amber-500/30">
                    Mai 2024 - Juin 2024
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground">
                Recherche et négociation de partenariats avec des entreprises pour le financement d'événements.
                Élaboration de dossiers de sponsoring et présentation du projet aux partenaires potentiels.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  )
}
