import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import ContactForm from "@/components/contact-form"; // ✅ Default import
import { Mail, Phone, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Let's Connect"
          subtitle="Ready to delegate, collaborate, or just vibe? Hit me up – I reply fast!"
          centered
        />

        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto mt-12 mb-16 animate-fade-in">
          {/* Contact Info */}
          <div className="flex-1 space-y-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <ContactItem
              icon={<Mail className="text-primary w-5 h-5" />}
              text="t.mwangim02@gmail.com"
              link="mailto:t.mwangim02@gmail.com"
            />
            <ContactItem
              icon={<Phone className="text-primary w-5 h-5" />}
              text="+254 799-028140"
              link="tel:+254799028140"
            />
            <ContactItem
              icon={<Calendar className="text-primary w-5 h-5" />}
              text="Book a Call via Calendly"
              link="https://calendly.com/timmwangi"
              external
            />
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// 🔁 Extracted for DRYness
function ContactItem({
  icon,
  text,
  link,
  external = false,
}: {
  icon: React.ReactNode;
  text: string;
  link: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <a
        href={link}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-gray-800 font-medium hover:underline transition-colors"
      >
        {text}
      </a>
    </div>
  );
}
