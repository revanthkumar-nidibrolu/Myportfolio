import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ResumeButton from "./ResumeButton";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Add any effect logic here if needed    .
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden" ref={heroRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4 animate-pulse-subtle">
              Revanth Kumar Nidibrolu
            </h1>

            {/* Typewriter Animation */}
            <h2 className="text-xl md:text-2xl font-medium mb-6">
              <span className="text-blue-500 font-semibold">
                <Typewriter
                  words={["Data Analyst", "Power BI Developer"]}
                  loop={0} // Infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-lg opacity-80 mb-8 max-w-xl">
              Analytical Data Analyst with a solid foundation in data analysis, visualization, and statistical methods. Proficient in tools such as Power BI, MySQL, and Python.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <ResumeButton />
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium border border-border rounded-full hover:bg-secondary transition-all duration-300"
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-4 items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <span className="text-sm opacity-70">Find me on</span>
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
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="relative max-w-sm mx-auto">
              <div className="w-half aspect-square max-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dgpiiljnj/image/upload/v1740932257/portfolio%20data/qrbgfhkmz3kwuqihw7vd.jpg"
                  alt="Revanth Kumar"
                  className="w-full h-full object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-primary/80 blur-3xl animate-pulse"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-primary/80 blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
