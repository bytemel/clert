
import { useState } from "react";

export function TestimonialsSubmit() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [category, setCategory] = useState("Admin");
  const [quote, setQuote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-clert-pastel-green/80 rounded-xl p-6 text-center font-semibold animate-fade-in">
        Thank you for sharing your testimonial! 🙏
      </div>
    );
  }

  return (
    <form className="flex flex-col items-center gap-4 max-w-lg mx-auto bg-clert-pastel-blue/30 rounded-2xl p-8 shadow animate-fade-in" onSubmit={handleSubmit}>
      <input className="w-full px-4 py-2 rounded-xl border bg-white" required placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="w-full px-4 py-2 rounded-xl border bg-white" required placeholder="Your Role (e.g. CEO, Coach)" value={role} onChange={e => setRole(e.target.value)} />
      <select className="w-full px-4 py-2 rounded-xl border bg-white" value={category} onChange={e => setCategory(e.target.value)}>
        <option>Admin</option>
        <option>Social Media</option>
        <option>Research</option>
        <option>Custom</option>
      </select>
      <textarea className="w-full px-4 py-2 rounded-xl border bg-white" required placeholder="Your Testimonial" value={quote} onChange={e => setQuote(e.target.value)} rows={4} />
      <button type="submit" className="mt-3 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition">
        Submit Testimonial
      </button>
    </form>
  );
}
