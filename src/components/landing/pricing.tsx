import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$00.00",
    features: ["Daily check-ins", "Mood tracking", "Guided meditations", "Basic AI chat support"],
  },
  {
    name: "Pro",
    price: "$19.99",
    features: [
      "Everything in Basic",
      "Unlimited AI therapy sessions",
      "Personalized wellness plan",
      "Progress tracking and insights",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom ",
    features: [
      "Everything in Pro",
      "Custom AI model training",
      "Team analytics and reporting",
      "Dedicated account manager",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="rounded-full px-4 py-1 mb-4">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Choose Your Path to Wellness</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the plan that best fits your needs and start your journey to better mental health
            today.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground">/month</span>
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
