import { FAQSection } from "@/components/landing/faq";
import { Pricing } from "@/components/landing/pricing";
import { TestimonialsSection } from "@/components/landing/testimonialSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FeaturesSection } from "@/components/ui/featureSection";

export default function Home() {
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
        <div className="flex flex-col items-center text-center ">
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
        <div className=" -mt-12">
          <FeaturesSection />
        </div>
      </section>
      <Pricing />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
