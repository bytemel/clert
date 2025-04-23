
const allTestimonials = [
  {
    quote: "Clert’s expertise saved me hours every single week. I recommend Clara to every solo founder I meet.",
    author: "Rafael S.",
    role: "Startup CEO",
    category: "Admin",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    quote: "The social campaign reports and posts were always ahead of schedule! Truly lifted my brand online.",
    author: "Tina Z.",
    role: "Content Creator",
    category: "Social Media",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    quote: "My business runs on data, and the reports she prepares are the best I’ve seen. Clear, concise, accurate.",
    author: "Wen L.",
    role: "E-commerce Owner",
    category: "Research",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "There’s no task too custom or odd. Clara delivers every time, with a smile.",
    author: "Priya A.",
    role: "Agency Lead",
    category: "Custom",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  // Reuse base carousel testimonials (for more content)
  {
    quote: "Working with Clert has been a game-changer. I've regained hours each week and my business is more organized than ever.",
    author: "Sarah J.",
    role: "Marketing Agency Owner",
    category: "Admin",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote: "I was drowning in admin tasks before I found Clert. Now I can focus on what I do best while they handle the rest.",
    author: "Emma R.",
    role: "Life Coach",
    category: "Custom",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export function TestimonialsGrid({ filter }: { filter: string }) {
  const testimonials = filter === "All"
    ? allTestimonials
    : allTestimonials.filter(t => t.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in">
      {testimonials.map(item => (
        <div key={item.quote} className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform flex flex-col items-center text-center">
          <img src={item.image} alt={item.author} className="h-16 w-16 object-cover rounded-full mb-4 border-2 border-clert-beige shadow" />
          <blockquote className="text-lg italic mb-4">&ldquo;{item.quote}&rdquo;</blockquote>
          <div className="font-medium">{item.author}</div>
          <div className="text-sm text-muted-foreground">{item.role}</div>
        </div>
      ))}
    </div>
  );
}
