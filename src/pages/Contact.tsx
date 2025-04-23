
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <SectionHeading 
          title="Let's Connect"
          subtitle="Ready to delegate, collaborate, or just have a chat? Reach out – I respond fast!"
          centered 
        />
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto mb-16 animate-fade-in">
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <a href="mailto:hello@clert.com" className="font-medium hover:underline">hello@clert.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <a href="tel:+11234567890" className="font-medium hover:underline">+1 (123) 456-7890</a>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-primary" />
              <a href="https://calendly.com/" className="font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                Book a Call via Calendly
              </a>
            </div>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
