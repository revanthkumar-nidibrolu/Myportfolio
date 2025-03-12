
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";


const Index = () => {
  // Animation on scroll functionality
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll(".reveal-on-scroll");

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Add motion animations for parallax scrolling effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.1 * (index + 1);
        const yPos = -(scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background dark:from-primary/10 dark:via-background dark:to-background"></div>
      <Navbar />
      <main>
        <Hero />
      </main>
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-5 w-24 h-24 rounded-full bg-primary/5 blur-3xl animate-spin-slow opacity-40 -z-5"></div>
      <div className="fixed bottom-20 right-5 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-spin-slow opacity-30 -z-5"></div>
      <div className="fixed top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary/5 blur-2xl animate-pulse opacity-20 -z-5"></div>
    </div>
  );
};

export default Index;
