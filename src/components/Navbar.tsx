import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, BookOpen, Code, FolderOpen, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import ResumeButton from "./ResumeButton";

const navLinks = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5 mr-2" /> },
  { name: "About", href: "/about", icon: <User className="w-5 h-5 mr-2" /> },
  { name: "Experience", href: "/experience", icon: <Briefcase className="w-5 h-5 mr-2" /> },
  { name: "Education", href: "/education", icon: <BookOpen className="w-5 h-5 mr-2" /> },
  { name: "Skills", href: "/skills", icon: <Code className="w-5 h-5 mr-2" /> },
  { name: "Projects", href: "/projects", icon: <FolderOpen className="w-5 h-5 mr-2" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5 mr-2" /> },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-display tracking-tight">
            Revanth Kumar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm font-medium link-hover opacity-80 hover:opacity-100 flex items-center"
                  >
                    {link.icon} {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <ResumeButton />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full glass"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass mt-3 rounded-2xl overflow-hidden animate-fade-in">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="block px-6 py-3 text-sm hover:bg-primary/10 flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.icon} {link.name}
                  </Link>
                </li>
              ))}
              <li className="px-6 py-3">
                <ResumeButton className="w-full justify-center" />
                <a 
                href="https://drive.google.com/file/d/1KVIObhtBu0QttklibnmwGjwOfRD1Jp8e/view?usp=drive_link" 
                target="_blank"></a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
