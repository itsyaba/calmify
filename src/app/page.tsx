import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, HeartPulse, MessageSquare, NotebookText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "AI-Guided Conversations",
      description:
        "Engage in supportive chats with your AI therapist. Calmify listens, provides advice, and helps you navigate through stress and emotions—anytime, anywhere.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Mood Tracking Made Easy",
      description:
        "Track your emotions effortlessly and visualize trends over time. Discover insights into your mental health patterns and take control of your well-being.",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Personalized Wellness Exercises",
      description:
        "Access tailored mindfulness activities, breathing techniques, and guided journeying to help you build calming, healthy habits that fit your lifestyle.",
    },
    {
      icon: <NotebookText className="h-6 w-6" />,
      title: "Daily Reflections and Insights",
      description:
        "Reflect on your thoughts, set daily goals, and receive AI-generated insights to stay focused on your mental wellness journey.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <section className="text-center mt-48 min-h-screen">
        <Badge variant="outline" className="p-2">
          World&apos;s most adapted healthcare AI
        </Badge>
        <div className="relative">
          <div className="absolute inset-0 -top-12  rounded-2xl bg-gradient-to-br from-purple-500/50 to-indigo-500/50 blur-3xl" />
          <h1 className="text-6xl font-stinntUltra mt-8 mb-4">
            Your AI Therapist, Always Here for You
          </h1>
          <p className="font-pontanoSans mb-4 w-full max-w-3xl mx-auto text-xl">
            Calmify is your pocket-sized mental health companion. Chat with your AI therapist,
            reflect on your emotions, and take small steps toward a calmer mind.
          </p>
          <Button className="font-pontanoSans cursor-pointer relative z-10" size="lg">
            ✨ Begin Your Wellness Journey ✨
          </Button>
        </div>
      </section>

      <section className="py-16" id="features">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="rounded-full px-4 py-1 mb-4">
            Features
          </Badge>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
            Unlock Peace and Clarity with Calmify
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Experience the power of Calmify, your AI-powered mental health companion. Our platform
            offers a range of features designed to help you manage your emotions, reflect on your
            experiences, and take small steps toward a calmer mind.
          </p>
        </div>
        <div className=" w-full grid grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex items-start flex-col space-x-4 p-6 transition-all hover:shadow-lg"
            >
              <div className="rounded-lg bg-primary/10 p-2 text-primary text-center mx-auto">
                {feature.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
