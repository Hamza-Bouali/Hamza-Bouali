import { LayoutGrid, Code, Database, Server, Award, TrendingUp, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">À propos de moi</h2>
        <div className="h-1 w-20 bg-primary midnight:bg-amber-500 mt-2"></div>
      </header>

      <section className="mb-8">
        <div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-lg mb-6 midnight:border-amber-500/20 midnight:bg-amber-500/5">
          <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-blue-400 midnight:text-amber-500" /> Profil Professionnel
          </h3>
          <p className="text-muted-foreground">
            Étudiant en ingénierie des connaissances et sciences des données avec une expertise en développement de
            pipelines de données, MLOps et analyse de données. Passionné par la transformation des données brutes en
            solutions évolutives et insights actionnables.
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert midnight:prose-invert mb-8">
          <p>
            Je suis un étudiant en Ingénierie des connaissances et sciences des données, spécialisé dans la conception
            et l'implémentation de solutions data engineering et MLOps. Mon parcours académique et mes projets
            personnels m'ont permis de développer une expertise technique solide dans la gestion des données à grande
            échelle et le déploiement de modèles de machine learning.
          </p>

          <p>
            Mon approche combine rigueur technique et vision stratégique pour créer des systèmes de données robustes,
            évolutifs et maintenables. Je m'efforce de construire des pipelines de données qui non seulement
            fonctionnent efficacement, mais qui apportent également une réelle valeur métier en transformant les données
            brutes en insights actionnables.
          </p>

          <p>
            Ma formation en classes préparatoires m'a doté d'une solide base mathématique et analytique, que je complète
            par une veille technologique constante et un apprentissage continu des dernières technologies et
            méthodologies dans le domaine de la data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-lg midnight:border-amber-500/20 midnight:bg-amber-500/5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-400 midnight:text-amber-500" /> Points forts
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-400 mt-1 shrink-0 midnight:text-amber-500" />
                <span>Expertise en Python et technologies de data engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-400 mt-1 shrink-0 midnight:text-amber-500" />
                <span>Conception et optimisation de pipelines ETL/ELT</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-400 mt-1 shrink-0 midnight:text-amber-500" />
                <span>Implémentation de pratiques MLOps et CI/CD</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-400 mt-1 shrink-0 midnight:text-amber-500" />
                <span>Solide formation mathématique et analytique</span>
              </li>
            </ul>
          </div>

          <div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-lg midnight:border-amber-500/20 midnight:bg-amber-500/5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-blue-400 midnight:text-amber-500" /> Objectifs professionnels
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-400 mt-1 shrink-0 midnight:text-amber-500" />
                <span>Développer des solutions data innovantes à impact réel</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-400 mt-1 shrink-0 midnight:text-amber-500" />
                <span>Contribuer à l'évolution des pratiques MLOps</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-400 mt-1 shrink-0 midnight:text-amber-500" />
                <span>Participer à des projets data à grande échelle</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-blue-400 mt-1 shrink-0 midnight:text-amber-500" />
                <span>Continuer à développer mon expertise technique</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <Button
            asChild
            className="midnight:bg-amber-500 midnight:text-midnight-foreground midnight:hover:bg-amber-600"
          >
            <Link href="#contact">Contactez-moi</Link>
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6">Domaines d'expertise</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-6 flex gap-4">
              <div className="bg-blue-500/20 p-3 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Data Engineering</h4>
                <p className="text-muted-foreground">
                  Conception et implémentation de pipelines ETL/ELT robustes et évolutifs pour le traitement de données
                  à grande échelle.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-6 flex gap-4">
              <div className="bg-blue-500/20 p-3 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                <Server className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">MLOps</h4>
                <p className="text-muted-foreground">
                  Automatisation du cycle de vie des modèles ML, de l'expérimentation au déploiement en production avec
                  CI/CD.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-6 flex gap-4">
              <div className="bg-blue-500/20 p-3 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Développement Backend</h4>
                <p className="text-muted-foreground">
                  Création d'APIs et services backend performants avec Python (FastAPI, Flask) et intégration avec des
                  bases de données.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 midnight:border-amber-500/20 overflow-hidden">
            <div className="h-1 w-full bg-blue-500 midnight:bg-amber-500"></div>
            <CardContent className="p-6 flex gap-4">
              <div className="bg-blue-500/20 p-3 rounded-md text-blue-400 midnight:bg-amber-500/20 midnight:text-amber-500">
                <LayoutGrid className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Data Analysis</h4>
                <p className="text-muted-foreground">
                  Analyse approfondie des données pour extraire des insights pertinents et guider la prise de décision
                  stratégique.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  )
}
