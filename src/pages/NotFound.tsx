import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const dancingPhrases = [
  "Oops! That page went on vacation",
  "404: Creative space found",
  "This page danced away",
  "Lost in digital wonderland",
  "Page not found, but joy discovered",
  "A mystery to explore",
  "The content has floated away"
];

const NotFound = () => {
  const location = useLocation();
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % dancingPhrases.length);
        setAnimate(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="text-8xl font-bold text-primary mb-6">404</div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="rounded-full pl-6 pr-5 bg-gradient-to-r from-primary to-primary-dark">
              <a href="/" className="flex items-center gap-2 group">
                Return to Home
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Side - Dancing Phrases */}
          <div className="hidden lg:flex items-center justify-center h-full">
            <div className="relative w-full max-w-md h-64">
              {dancingPhrases.map((phrase, index) => (
                <div
                  key={phrase}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${index === currentPhrase ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className={`text-3xl font-medium text-gray-700 text-center px-8 transform transition-transform duration-300 ${animate ? 'translate-y-2 scale-105' : 'translate-y-0 scale-100'} ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                    {phrase}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-6xl opacity-20">
                      {index % 3 === 0 ? "✧" : index % 3 === 1 ? "✦" : "❋"}
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;