import { useState, useEffect } from "react";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Working with Clert has been a game-changer. I've regained hours each week and my business is more organized than ever.",
    author: "Sarah J.",
    role: "Marketing Agency Owner",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote: "The level of professionalism and attention to detail is outstanding. Every task is handled with care and precision.",
    author: "Michael T.",
    role: "E-commerce Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote: "I was drowning in admin tasks before I found Clert. Now I can focus on what I do best while they handle the rest.",
    author: "Emma R.",
    role: "Life Coach",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    quote: "The social media management service has doubled my engagement and brought in new clients. Truly exceptional work!",
    author: "Jason P.",
    role: "Fitness Studio Owner",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

// Duplicate testimonials for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsCarousel() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        // The animation handles the scrolling automatically
      }, 10000); // Adjust timing to match animation duration
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-16 bg-clert-soft-gray/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Client Testimonials"
          subtitle="Don't take our word for it. Here's what our clients have to say about working with Clert."
          centered
        />

        <div className="relative w-full overflow-hidden py-8">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-clert-soft-gray/30 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-clert-soft-gray/30 to-transparent z-10" />
          
          <div className="flex animate-infinite-scroll-slower items-center gap-8">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.author}-${index}`}
                className="flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[35vw] px-2"
              >
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-16 w-16 rounded-full object-cover border-2 border-primary/10"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <svg
                        className="h-6 w-6 text-primary/30 mb-3 mx-auto md:mx-0"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <blockquote className="text-sm md:text-base mb-3 text-gray-600 leading-snug">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex flex-col">
                        <cite className="font-medium not-italic text-sm text-gray-900">
                          {testimonial.author}
                        </cite>
                        <span className="text-xs text-gray-500">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-50% - 1rem));
              }
            }
            .animate-infinite-scroll-slower {
              animation: scroll 30s linear infinite;
              width: max-content;
            }
            .animate-infinite-scroll-slower:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}