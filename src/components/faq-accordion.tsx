import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We provide comprehensive virtual assistance including administrative support, calendar management, email handling, and specialized services tailored to your business needs."
  },
  // ... other FAQ items
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="px-6 py-5">
          <button
            className="flex w-full items-center justify-between text-left gap-4"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <h3 className="text-lg font-medium text-gray-900 flex-1">
              {faq.question}
            </h3>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0",
                openIndex === index ? "rotate-180" : ""
              )}
            />
          </button>
          <div
            id={`faq-content-${index}`}
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "mt-4" : "max-h-0"
            )}
          >
            <p className="text-gray-600 pb-2">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}