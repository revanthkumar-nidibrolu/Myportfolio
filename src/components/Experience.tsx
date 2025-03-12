
import { Briefcase, Calendar, Star, Award, Clock, Users, BarChart, Code, Database, Search } from "lucide-react";
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";

const experiences = [
  {
    company: "Cognifyz Technologies Company",
    period: "Nov 2024 - Jan 2025",
    title: "Data Analyst",
    description: [
      "Using Power BI, SQL, DAX, Power Query, Data Modeling, Data Visualization.",
      "Designed and implemented interactive Power BI dashboards to track KPIs and improve reporting efficiency.",
      "Reduced reporting time and provided actionable insights to support business strategies."
    ],
    skills: [
      { name: "Power BI", icon: <BarChart className="w-4 h-4" /> },
      { name: "SQL", icon: <Database className="w-4 h-4" /> },
      { name: "Data Visualization", icon: <Search className="w-4 h-4" /> }
    ]
  },
  {
    company: "All India Council for Technical Education",
    period: "Oct 2024 - Dec 2024",
    title: "Statistics Analyst",
    description: [
      "Performed statistical analysis to identify trends and patterns within various datasets.",
      "Conducted structural assessments of engineering designs, performed load calculations, and analyzed stress-strain behavior using software tools like AutoCAD and ANSYS.",
      "Assisted in the preparation of detailed reports highlighting statistical findings and their implications on business strategies."
    ],
    skills: [
      { name: "Statistical Analysis", icon: <BarChart className="w-4 h-4" /> },
      { name: "Report Writing", icon: <Code className="w-4 h-4" /> },
      { name: "Data Models", icon: <Database className="w-4 h-4" /> }
    ]
  },
  {
    company: "Y-Hills Company",
    period: "Mar 2023 - Apr 2023",
    title: "Machine Learning Intern",
    description: [
      "Developed predictive models using Python to enhance the accuracy of data-driven decisions.",
      "Worked on the application of machine learning algorithms to improve data processing efficiency.",
      "Delivered a predictive model with accuracy that improved decision-making. Automated data analysis tasks, reducing manual effort."
    ],
    skills: [
      { name: "Python", icon: <Code className="w-4 h-4" /> },
      { name: "Machine Learning", icon: <Search className="w-4 h-4" /> },
      { name: "Automation", icon: <Clock className="w-4 h-4" /> }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Work Experience" subtitle="PROFESSIONAL JOURNEY" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline bar */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={`exp-${index}`}
              className={`relative mb-12 animate-fade-in ${
                index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-8 md:ml-1/2'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10"></div>
              
              <Card 
                className="relative z-10"
                glow={true}
                glowColor="primary"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-secondary dark:bg-secondary/30">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-primary mb-1">{exp.title}</h4>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-3 border-t pt-3 border-dashed border-border">
                    <span className="text-sm font-medium">Skills:</span>
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-secondary dark:bg-secondary/30 rounded-full"
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
