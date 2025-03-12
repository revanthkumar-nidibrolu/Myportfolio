
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";
import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Language Translation",
    objective: "To create a machine learning model capable of translating languages with high accuracy.",
    skills: ["Python", "Machine Learning"],
    result: "Achieved improved translation accuracy by 15% through iterative model adjustments.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=600"
  },
  {
    title: "Statistics Analyst Virtual Internship",
    objective: "To analyze and visualize sales data to identify key trends and areas for growth.",
    skills: ["Data Visualization", "SQL", "Excel"],
    result: "Presented findings that led to actionable recommendations for increasing sales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3N8fHx8fHwxNzE2MTI3NTM0&ixlib=rb-4.0.3&q=80&w=600"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container-custom">
        <SectionHeading title="Recent Projects" subtitle="PROJECTS" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={`project-${index}`} 
              className={`animate-fade-in relative group h-full`}
              style={{ animationDelay: `${index * 150}ms` }}
              glow={true}
            >
              <div className="flex flex-col h-full">
                {project.image && (
                  <div className="h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FolderGit2 className="w-6 h-6 text-primary" />
                  </div>
                  <a href="#" className="p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full hover:bg-secondary">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                <div className="mb-4 flex-grow">
                  <p className="mb-2"><span className="font-medium">Objective:</span> {project.objective}</p>
                  <p><span className="font-medium">Result:</span> {project.result}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-sm bg-secondary dark:bg-secondary/30 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="text-center animate-fade-in-delayed" glow={true} glowColor="secondary">
            <h3 className="text-xl font-bold mb-4">Additional Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/50 dark:bg-secondary/20">
                <p>Participated in a Hackathon focused on data-driven solutions</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 dark:bg-secondary/20">
                <p>Teach to Learn program, mentoring peers in machine learning</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
