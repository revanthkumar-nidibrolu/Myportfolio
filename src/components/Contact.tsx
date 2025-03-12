
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Get In Touch" subtitle="CONTACT" />
        
        <div className="max-w-3xl mx-auto">
          <Card className="animate-fade-in text-center">
            <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:nidibrolurevanth@gmail.com" 
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary/80 dark:hover:bg-secondary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-sm">nidibrolurevanth@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+918125431655" 
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 dark:bg-secondary/20 hover:bg-secondary/80 dark:hover:bg-secondary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-sm">+91 8125431655</p>
                </div>
              </a>
            </div>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
