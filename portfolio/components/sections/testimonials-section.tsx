import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      content:
        "Hamza is an exceptional data engineer with a keen eye for detail. His ability to transform complex data into actionable insights is remarkable. Working with him on our social media analytics project was a pleasure.",
      author: {
        name: "Sarah Johnson",
        role: "CTO, DataViz Solutions",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SJ",
      },
    },
    {
      id: 2,
      content:
        "I had the opportunity to mentor Hamza during his internship. His analytical thinking and problem-solving skills are impressive. He quickly grasped complex concepts and contributed valuable insights to our team.",
      author: {
        name: "Mohammed Al-Farsi",
        role: "Lead Data Scientist, TechInnovate",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MA",
      },
    },
    {
      id: 3,
      content:
        "Hamza's work on our ETL pipeline optimization was outstanding. He identified bottlenecks and implemented solutions that reduced processing time by 40%. His technical skills and attention to detail make him a valuable asset to any team.",
      author: {
        name: "Leila Benali",
        role: "Data Engineering Manager, CloudScale",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "LB",
      },
    },
    {
      id: 4,
      content:
        "As a fellow student, I've witnessed Hamza's dedication to mastering data engineering concepts. His collaborative approach and willingness to share knowledge have made him a respected figure among peers. His competitive programming mentorship has helped many students improve their skills.",
      author: {
        name: "Karim Tazi",
        role: "Computer Science Student, ESI",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "KT",
      },
    },
  ]

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
        <p className="text-muted-foreground mt-2">What colleagues and mentors say about my work</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="overflow-hidden">
            <CardHeader className="pb-2 pt-6">
              <Quote className="h-8 w-8 text-primary/20" />
            </CardHeader>
            <CardContent className="pt-0">
              <p className="italic text-muted-foreground">{testimonial.content}</p>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.author.avatar || "/placeholder.svg"} alt={testimonial.author.name} />
                  <AvatarFallback>{testimonial.author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{testimonial.author.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.author.role}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </article>
  )
}
