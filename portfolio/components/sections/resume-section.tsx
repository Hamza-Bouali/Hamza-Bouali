import { Book, Monitor, Users, Globe, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

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
        <h2 className="text-3xl font-bold tracking-tight">Resume</h2>
      </header>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <Book className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>

        <div className="space-y-8">
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border midnight:before:bg-[#1a2035]">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">
              Diplôme d'ingénieur: Ingénierie des connaissances et sciences des données
            </h4>
            <p className="text-sm text-muted-foreground mb-2">Septembre 2023 — présent</p>
            <p className="text-muted-foreground">École des sciences de l'information (ESI) - Kenitra, Maroc</p>
          </div>

          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border midnight:before:bg-[#1a2035]">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">Classes préparatoires aux grandes écoles: MPSI-MP</h4>
            <p className="text-sm text-muted-foreground mb-2">Septembre 2021 — Juin 2023</p>
            <p className="text-muted-foreground">CPGE Mohamed 6 - Kenitra, Maroc</p>
            <p className="text-muted-foreground mt-1">
              Modules de spécialité: Mathématique, Physique, informatique et science industrielle.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">Baccalauréat en sciences mathématiques B</h4>
            <p className="text-sm text-muted-foreground mb-2">Septembre 2019 — Juin 2021</p>
            <p className="text-muted-foreground">Groupe Scolaire Almouwatna - Rabat, Maroc</p>
            <p className="text-muted-foreground mt-1">Mention: Assez bien</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <Monitor className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Experience</h3>
        </div>

        <div className="space-y-8">
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">Stagiaire Data Analyst</h4>
            <p className="text-sm text-muted-foreground mb-2">Juin 2024</p>
            <p className="text-muted-foreground">AILAND - Rabat, Maroc</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
              <li>
                Mise en place d'une nouvelle campagne qui a permis d'augmenter l'engagement de 40% sur les réseaux
                sociaux
              </li>
              <li>Ajustement des modèles pour la tâche de social listening au Maroc</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Certifications</h3>
        </div>

        <div className="space-y-4">
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-base font-medium">Supervised Machine Learning: Regression & Classification</h4>
            <p className="text-sm text-muted-foreground">Stanford, Deeplearning.ai, Coursera - Octobre 2024</p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-base font-medium">Agile Project Management</h4>
            <p className="text-sm text-muted-foreground">HP Life - Octobre 2024</p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-base font-medium">SQL Associate</h4>
            <p className="text-sm text-muted-foreground">DataCamp - Novembre 2024</p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-base font-medium">Introduction to Machine Learning</h4>
            <p className="text-sm text-muted-foreground">Kaggle - Mai 2024</p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-base font-medium">Data Engineering Associate</h4>
            <p className="text-sm text-muted-foreground">DataCamp</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500/20 p-2 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
            <Globe className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold">Languages</h3>
        </div>

        <Card>
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
        <Card>
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

        <div className="space-y-8">
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border midnight:before:bg-[#1a2035]">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">Co-chef de cellule de programmation compétitive</h4>
            <p className="text-sm text-muted-foreground mb-2">Septembre 2024 — Juin 2025</p>
            <p className="text-muted-foreground">CODE-ESI - Rabat, Maroc</p>
            <p className="text-muted-foreground mt-1">
              Partage d'expertise dans la résolution des problèmes complexes avec la nouvelle génération des ingénieurs
            </p>
          </div>

          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border midnight:before:bg-[#1a2035]">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">Trésorier</h4>
            <p className="text-sm text-muted-foreground mb-2">Septembre 2024 — Décembre 2024</p>
            <p className="text-muted-foreground">JCMP-ESI - Rabat, Maroc</p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 midnight:bg-amber-500 -translate-x-1/2"></div>
            <h4 className="text-lg font-medium">Membre de la cellule de sponsoring</h4>
            <p className="text-sm text-muted-foreground mb-2">Mai 2024 — Juin 2024</p>
            <p className="text-muted-foreground">Moroccan Days of Future Data Scientists - Rabat, Maroc</p>
          </div>
        </div>
      </section>
    </article>
  )
}
