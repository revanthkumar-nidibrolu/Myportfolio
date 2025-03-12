
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 bg-secondary/50 dark:bg-secondary/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold font-display">Revanth Kumar</h2>
            </div>
            <p className="text-sm opacity-70">Data Analyst & Power BI Developer</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/revanthkumar-nidibrolu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/revanth-kumar-nidibrolu-1b3628244/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:nidibrolurevanth@gmail.com" 
              className="p-2 rounded-full glass hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">© {new Date().getFullYear()} Revanth Kumar. All rights reserved.</p>
          
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:shadow-xl ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
