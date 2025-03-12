
import { GraduationCap, Calendar, BookOpen, Award, School, Building } from "lucide-react";
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";

const educations = [
  {
    institution: "Kakinada institute of engineering and technology",
    period: "2021 – 2025",
    degree: "Bachelor's Degree in Computer Science - (Artificial Intelligence and Data Science)",
    score: "CGPA : 7.46",
    skills: [
      { name: "AI", icon: <Award className="w-4 h-4" /> },
      { name: "Data Science", icon: <BookOpen className="w-4 h-4" /> }
    ]
  },
  {
    institution: "Jagan's Junior College",
    period: "2019 – 2021",
    degree: "Maths, Physics, Chemistry",
    score: "Marks : 917",
    skills: [
      { name: "Mathematics", icon: <School className="w-4 h-4" /> },
      { name: "Science", icon: <Building className="w-4 h-4" /> }
    ]
  },
  {
    institution: "Narayana E.M High School",
    period: "2018 – 2019",
    degree: "State Board of Education",
    score: "CGPA : 9.0",
    skills: [
      { name: "General Education", icon: <BookOpen className="w-4 h-4" /> }
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container-custom">
        <SectionHeading title="Education" subtitle="ACADEMIC JOURNEY" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline bar */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
          
          {educations.map((edu, index) => (
            <div 
              key={`edu-${index}`}
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
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-secondary dark:bg-secondary/30">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-primary mb-1">{edu.degree}</h4>
                  <p className="text-sm opacity-80">{edu.score}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-3 border-t pt-3 border-dashed border-border">
                    <span className="text-sm font-medium">Focus Areas:</span>
                    {edu.skills.map((skill, idx) => (
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

export default Education;
