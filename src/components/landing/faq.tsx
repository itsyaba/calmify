import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Calmify's AI therapist work?",
    answer:
      "Calmify's AI therapist uses advanced natural language processing to understand your inputs and provide personalized responses. It's trained on a vast dataset of therapeutic conversations and mental health resources to offer supportive and insightful guidance.",
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Yes, we take your privacy very seriously. All conversations and personal data are encrypted and stored securely. We never share your information with third parties, and you can delete your data at any time.",
  },
  {
    question: "Can Calmify replace traditional therapy?",
    answer:
      "While Calmify is a powerful tool for mental wellness, it's not intended to replace professional therapy. We recommend using Calmify as a complement to traditional therapy or as a first step in your mental health journey.",
  },
  {
    question: "How often should I use Calmify?",
    answer:
      "For best results, we recommend using Calmify daily. Even a few minutes of reflection or a quick chat with your AI therapist can make a significant difference in your mental well-being.",
  },
];

export function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-16" id="faq">
      <div className="text-center mb-12">
        <Badge variant="outline" className="rounded-full px-4 py-1 mb-4">
          FAQ
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about Calmify and how it can help you on your mental
          wellness journey.
        </p>
      </div>
      <Accordion type="single" collapsible className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
