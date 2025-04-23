
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const faqs = [
  { q: "Who do you typically help?", a: "Entrepreneurs, agency owners, coaches, consultants, small teams, and ambitious founders." },
  { q: "What tools do you use?", a: "Mostly Notion, Slack, Canva, Google Workspace, Asana, Trello — but I’m adaptable!" },
  { q: "What about data privacy?", a: "I sign NDAs and treat your info with utmost care. Your trust matters to me." },
  { q: "How do payments work?", a: "Monthly retainer or project-based—whichever fits. I invoice via Stripe, Wise, or bank transfer." },
];

export function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={faq.q} className="mb-4 bg-clert-pastel-blue/40 rounded-xl shadow">
          <button
            className="flex justify-between items-center w-full px-6 py-5 font-semibold text-left rounded-xl hover:bg-clert-beige/30 transition"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span>{faq.q}</span>
            {openIdx === idx ? <ArrowUp className="text-primary" /> : <ArrowDown className="text-primary" />}
          </button>
          <div
            className="transition-all duration-200 overflow-hidden px-6"
            style={{
              maxHeight: openIdx === idx ? 120 : 0,
              opacity: openIdx === idx ? 1 : 0,
              paddingBottom: openIdx === idx ? "18px" : "0",
            }}
          >
            {openIdx === idx && <p className="text-base text-muted-foreground">{faq.a}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
