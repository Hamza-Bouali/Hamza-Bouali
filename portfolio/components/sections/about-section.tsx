import { LayoutGrid, Code, Database, Server } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
      </header>

      <section className="prose prose-slate dark:prose-invert midnight:prose-invert mb-12">
        <p>
          Je suis un étudiant en Ingénierie des connaissances et sciences des données, passionné par la transformation
          des données brutes en insights actionnables et solutions évolutives. Avec une solide formation en analyse et
          en pipelines de données, je me spécialise dans la résolution de défis complexes et la livraison de résultats
          impactants.
        </p>

        <p>
          Mon objectif est de construire des systèmes intelligents qui sont non seulement fonctionnels et efficaces,
          mais aussi robustes et évolutifs. De la conception de modèles prédictifs à l'élaboration de workflows de
          données fluides, j'apporte une expertise technique et une approche minutieuse à chaque projet. De plus, je
          privilégie la compréhension et l'accessibilité des processus basés sur les données, garantissant qu'ils
          renforcent la prise de décision dans toutes les équipes.
        </p>

        <p>
          Qu'il s'agisse de découvrir des modèles cachés dans les ensembles de données ou d'architecturer des pipelines
          pour le traitement de big data, mon objectif est de combiner innovation et précision pour résoudre
          efficacement des problèmes concrets. J'ai travaillé sur divers projets impliquant des domaines variés,
          contribuant à des avancées significatives dans les stratégies basées sur les données.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6">Ce que je fais</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6 flex gap-4">
              <div className="bg-blue-500/20 p-3 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Data Engineering</h4>
                <p className="text-muted-foreground">
                  Développement d'infrastructures de haute qualité pour les processus ETL/ELT et la gestion des données.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex gap-4">
              <div className="bg-blue-500/20 p-3 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                <Server className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">MLOps</h4>
                <p className="text-muted-foreground">
                  Mise en place et optimisation de pipelines CI/CD pour le déploiement de modèles de machine learning.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex gap-4">
              <div className="bg-blue-500/20 p-3 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Développement Logiciel</h4>
                <p className="text-muted-foreground">
                  Développement de logiciels modernes et de haute qualité pour répondre aux besoins des entreprises.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex gap-4">
              <div className="bg-blue-500/20 p-3 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                <LayoutGrid className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Data Analysis</h4>
                <p className="text-muted-foreground">
                  Analyse approfondie des données pour extraire des insights pertinents et guider la prise de décision.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  )
}
