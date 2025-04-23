import { useState } from "react";
import { Mail, User, MessageSquare, CheckCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function validateForm() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus('submitting');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-10 text-center animate-fade-in shadow-lg border border-green-100">
        <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for reaching out! I'll review your message and get back to you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setStatus('idle')}
          className="border-gray-300 hover:bg-white/90"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form 
      className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-100 animate-fade-in flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <div className="text-center mb-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Let's Connect</h3>
        <p className="text-gray-500">Fill out the form and I'll get back to you shortly</p>
      </div>

      <div className="space-y-6">
        <div className="relative group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
            Your Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400 group-focus-within:text-primary" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Smith"
              required
              className={`pl-10 pr-4 py-4 w-full rounded-xl border ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray-700 placeholder-gray-400`}
              value={form.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        <div className="relative group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className={`pl-10 pr-4 py-4 w-full rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray-700 placeholder-gray-400`}
              value={form.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        <div className="relative group">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
            Your Message
          </label>
          <div className="relative">
            <div className="absolute top-4 left-3">
              <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-primary" />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="How can I help you today?"
              required
              rows={5}
              className={`pl-10 pr-4 py-4 w-full rounded-xl border ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray-700 placeholder-gray-400`}
              value={form.message}
              onChange={handleChange}
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="xl"
        className="mt-4 shadow-lg hover:shadow-md transition-all"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Your Message...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 flex items-start">
          <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-medium">Something went wrong</h4>
            <p className="text-sm">Please try again or contact me directly at hello@clert.com</p>
          </div>
        </div>
      )}
    </form>
  );
}