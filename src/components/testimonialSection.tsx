import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    role: "Busy Professional",
    content:
      "Calmify has been a game-changer for my mental health. The AI-guided conversations feel surprisingly personal and helpful.",
  },
  {
    name: "Michael R.",
    avatar: "MR",
    role: "Student",
    content:
      "The mood tracking feature has helped me understand my emotional patterns. It's like having a therapist in my pocket!",
  },
  {
    name: "Emily T.",
    avatar: "ET",
    role: "Yoga Instructor",
    content:
      "I love the personalized wellness exercises. They complement my yoga practice perfectly and help me stay centered throughout the day.",
  },
];

export function TestimonialsSection() {
  return (
    <section className=" py-16" id="testimonial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="rounded-full px-4 py-1 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what Calmify users have to say about
            their experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src="{`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.avatar}`}" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
