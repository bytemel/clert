import { Link } from "react-router-dom";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
// import { SocialIcons } from "@/components/ui/social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Services", to: "/services" },
        { name: "Onboarding", to: "/process" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Testimonials", to: "/testimonials" },
        { name: "Pricing", to: "/pricing" },
        { name: "FAQ", to: "/faq" },
        { name: "Blog", to: "/blog" }
      ]
    }
  ];

  const contactMethods = [
    { icon: <Mail className="h-5 w-5" />, text: "t.mwangim02@gmail.com", href: "mailto:t.mwangim02@gmail.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+254 799-028140", href: "tel:+254799028140" },
    { icon: <Calendar className="h-5 w-5" />, text: "Schedule a Call", href: "/contact" }
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand/About Column */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex flex-col h-full">
              <Logo className="text-white h-8 mb-6" />
              <p className="text-gray-400 mb-6 max-w-md">
                Professional virtual assistance services designed to streamline your business 
                operations and amplify your productivity.
              </p>
              
              <div className="mt-auto">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Connect With Us
                </h3>
                {/* <SocialIcons className="space-x-4" /> */}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="md:col-span-3 lg:col-span-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.to} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="md:col-span-5 lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="bg-gray-800 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                    {method.icon}
                  </span>
                  <span>{method.text}</span>
                </a>
              ))}
            </div>
            
            <Button className="mt-8 w-full sm:w-auto" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Legal/Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Clert Virtual Assistance. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}