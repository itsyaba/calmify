import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:items-center">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Your AI Therapist,
              <br />
              Always Here for You
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Calmify is your pocket-sized mental health companion. Chat with your AI therapist,
              reflect on your emotions, and take small steps toward a calmer mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-indigo-500/30 rounded-2xl blur-3xl" />
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Calmify AI Therapist"
              width={600}
              height={600}
              className="relative rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
