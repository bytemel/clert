import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How exactly do you track the time spent on my tasks?",
    answer: "I use Toggl to meticulously track every minute spent on your work - from Slack messages to Figma edits. You'll get a detailed breakdown in our weekly reports so you always know where your hours are going."
  },
  {
    question: "I'm swamped with email - can you really help with that?",
    answer: "Absolutely! I can triage your inbox, flag urgent messages, draft responses, and even handle routine communications. Most clients regain 1-2 hours daily just from inbox delegation."
  },
  {
    question: "What happens if I need to suddenly scale up support before a launch?",
    answer: "We've got you covered. With 48 hours notice, I can temporarily increase your hours or bring in specialized support from my network of designers, developers, and copywriters."
  },
  {
    question: "How do you handle sensitive information?",
    answer: "Security is paramount. I use 1Password for secure sharing, encrypted backups, and sign strict NDAs. Your data stays confidential and protected at all times."
  },
  {
    question: "Can you really jump into my Notion workspace and make sense of it?",
    answer: "I specialize in wrangling chaotic Notion setups! Whether it's building dashboards, creating templates, or just organizing your docs - I'll make your workspace work for you."
  },
  {
    question: "What if I need something done outside normal business hours?",
    answer: "For urgent requests, I offer extended coverage during launches or crunch times. Just flag it as priority and I'll make arrangements to accommodate your timeline."
  },
  {
    question: "How do you stay up-to-date with all the tools I use?",
    answer: "I maintain active certifications in Notion, Figma, Webflow and more. Every quarter, I dedicate time to master new features so you benefit from the latest capabilities."
  }
];

export function FAQAccordion({ faqs = defaultFaqs }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((faq, index) => (
        <div key={index} className="transition-all group">
          <button
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group-hover:bg-gray-50"
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-${index}`}
          >
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
              {faq.question}
            </h3>
            <ChevronDown 
              className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                activeIndex === index ? "transform rotate-180 text-primary" : "group-hover:text-primary"
              }`}
            />
          </button>
          
          <div 
            id={`faq-${index}`}
            className={`px-6 pb-5 transition-all duration-300 ${
              activeIndex === index 
                ? "opacity-100 max-h-96" 
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
            aria-hidden={activeIndex !== index}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}