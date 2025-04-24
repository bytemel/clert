import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiCalendar, FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Services", to: "/services" },
        { name: "Onboarding", to: "/process" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Testimonials", to: "/testimonials" },
        { name: "Pricing", to: "/pricing" },
        { name: "FAQ", to: "/faq" },
        { name: "Blog", to: "/blog" },
      ],
    },
  ];

  const contactMethods = [
    {
      icon: <FiMail className="h-5 w-5" />,
      text: "t.mwangim02@gmail.com",
      href: "mailto:t.mwangim02@gmail.com",
    },
    {
      icon: <FiPhone className="h-5 w-5" />,
      text: "+254 799-028140",
      href: "tel:+254799028140",
    },
    {
      icon: <FiCalendar className="h-5 w-5" />,
      text: "Schedule a Call",
      href: "https://calendly.com/t-mwangim02/administrative-virtual-assistance-consultation",
    },
  ];

  const socials = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/timothy-mwangi/",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/tim.mwangi_/",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/Timothy_Mwangim",
    },
    {
      icon: <FaGlobe />,
      href: "https://clert.tech",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col h-full">
            <Logo className="text-white h-8 mb-6" />
            <p className="text-gray-400 mb-6 max-w-md">
              Professional virtual assistant services designed to streamline your operations and level up your efficiency.
            </p>
            <div className="mt-auto">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Connect With Us
              </h3>
              <div className="flex items-center gap-4 text-white text-xl">
                {socials.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Nav Sections */}
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
                      className="text-gray-400 hover:text-white flex items-center group transition-colors"
                    >
                      <FiArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="md:col-span-5 lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="bg-gray-800 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                    {method.icon}
                  </span>
                  <span>{method.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Clert Virtual Assistance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
