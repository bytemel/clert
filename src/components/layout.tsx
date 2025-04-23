import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Layout({ children, className, fullWidth = false }: LayoutProps) {
  const { pathname } = useLocation();

  // Scroll to top on route change with smooth behavior
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className={cn(
        "flex-grow pt-20", // Reduced padding-top for better spacing
        fullWidth ? "" : "container mx-auto px-4 sm:px-6",
        className
      )}>
        {children}
      </main>
      
      <Footer />
      
      {/* Toast notifications */}
      <Toaster />
      
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary/10 z-50">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{
            width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>
    </div>
  );
}