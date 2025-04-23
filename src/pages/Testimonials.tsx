
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialsGrid } from "@/components/testimonials-grid";
import { TestimonialsSubmit } from "@/components/testimonials-submit";
import { useState } from "react";

export default function Testimonials() {
  const [filter, setFilter] = useState("All");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <SectionHeading 
          title="Testimonials"
          subtitle="Hear from founders and teams I’ve helped."
          centered 
        />

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["All", "Admin", "Social Media", "Research", "Custom"].map(option => (
            <button
              key={option}
              className={`px-4 py-2 rounded-xl border-2 ${filter === option ? "border-primary bg-clert-beige text-primary font-semibold" : "border-clert-beige hover:bg-clert-pastel-blue/60"} transition-all`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <TestimonialsGrid filter={filter} />
        <SectionHeading title="Share Your Experience" className="mb-4 mt-20" centered />
        <TestimonialsSubmit />
      </div>
    </Layout>
  );
}
