import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"

export function BlogSection() {
  const articles = [
    {
      id: 1,
      title: "Building Scalable Data Pipelines with Apache Airflow",
      excerpt:
        "Learn how to design and implement scalable data pipelines using Apache Airflow, with best practices for DAG organization and monitoring.",
      image: "/placeholder.svg?height=200&width=400",
      date: "May 15, 2024",
      readTime: "8 min read",
      categories: ["Data Engineering", "Apache Airflow"],
      link: "#",
    },
    {
      id: 2,
      title: "Optimizing SQL Queries for Big Data Performance",
      excerpt:
        "Discover techniques to optimize SQL queries when working with large datasets, including indexing strategies and query restructuring.",
      image: "/placeholder.svg?height=200&width=400",
      date: "April 22, 2024",
      readTime: "6 min read",
      categories: ["SQL", "Performance"],
      link: "#",
    },
    {
      id: 3,
      title: "Introduction to Feature Engineering for Machine Learning",
      excerpt:
        "A comprehensive guide to feature engineering techniques that can improve the performance of your machine learning models.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 10, 2024",
      readTime: "10 min read",
      categories: ["Machine Learning", "Feature Engineering"],
      link: "#",
    },
    {
      id: 4,
      title: "Real-time Data Processing with Kafka and Spark Streaming",
      excerpt:
        "Explore how to build real-time data processing systems using Apache Kafka and Spark Streaming for event-driven architectures.",
      image: "/placeholder.svg?height=200&width=400",
      date: "February 5, 2024",
      readTime: "12 min read",
      categories: ["Kafka", "Spark", "Streaming"],
      link: "#",
    },
  ]

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Blog & Articles</h2>
        <p className="text-muted-foreground mt-2">Sharing knowledge and insights about data engineering and science</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <Card key={article.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
            <CardContent className="flex-1 p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {article.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="font-normal">
                    {category}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-6 px-6">
              <Link
                href={article.link}
                className="text-primary font-medium text-sm flex items-center gap-1 hover:underline"
              >
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </article>
  )
}
