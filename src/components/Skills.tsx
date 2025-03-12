
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";
import { 
  Award, BarChart2, BarChart3, Book, BrainCircuit, Code, Database, 
  FileSpreadsheet, Gauge, GraduationCap, LineChart, PieChart, Puzzle, 
  Search, X, CheckCircle, Landmark, Server, AreaChart, GitBranch, Cpu, 
  Binary, Layers, Network, FlaskConical, Sigma, Calculator, Percent
} from "lucide-react";

const skillCategories = [
  {
    category: "Data Analysis Tools",
    skills: [
      { name: "Power BI", icon: <BarChart3 className="w-4 h-4" /> },
      { name: "Excel", icon: <FileSpreadsheet className="w-4 h-4" /> }
    ],
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    description: "Proficient in using Power BI for data visualization and Excel for data analysis and manipulation."
  },
  {
    category: "Database Management",
    skills: [
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "SQL Server", icon: <Server className="w-4 h-4" /> }
    ],
    icon: <Database className="w-6 h-6 text-primary" />,
    description: "Experienced in designing and managing relational databases using MySQL."
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <Code className="w-4 h-4" /> },
      { name: "SQL", icon: <Database className="w-4 h-4" /> }
    ],
    icon: <Code className="w-6 h-6 text-primary" />,
    description: "Skilled in Python programming for data analysis, machine learning, and automation."
  },
  {
    category: "Data Visualization & Reporting",
    skills: [
      { name: "Charts", icon: <PieChart className="w-4 h-4" /> },
      { name: "Dashboards", icon: <BarChart2 className="w-4 h-4" /> }, 
      { name: "Reports", icon: <FileSpreadsheet className="w-4 h-4" /> }
    ],
    icon: <PieChart className="w-6 h-6 text-primary" />,
    description: "Capable of creating insightful data visualizations and comprehensive reports."
  },
  {
    category: "Statistical Analysis",
    skills: [
      { name: "Regression", icon: <LineChart className="w-4 h-4" /> },
      { name: "Correlation", icon: <Network className="w-4 h-4" /> }, 
      { name: "Hypothesis Testing", icon: <FlaskConical className="w-4 h-4" /> }
    ],
    icon: <LineChart className="w-6 h-6 text-primary" />,
    description: "Knowledgeable in statistical methods and their application in data analysis."
  },
  {
    category: "Problem Solving",
    skills: [
      { name: "Critical Thinking", icon: <BrainCircuit className="w-4 h-4" /> },
      { name: "Analytical Approach", icon: <Puzzle className="w-4 h-4" /> }
    ],
    icon: <Puzzle className="w-6 h-6 text-primary" />,
    description: "Strong problem-solving abilities with an analytical mindset."
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Algorithms", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Model Training", icon: <Cpu className="w-4 h-4" /> }, 
      { name: "Evaluation", icon: <CheckCircle className="w-4 h-4" /> }
    ],
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    description: "Familiar with machine learning concepts and implementation."
  },
  {
    category: "Data Research",
    skills: [
      { name: "Data Mining", icon: <Search className="w-4 h-4" /> }, 
      { name: "Pattern Recognition", icon: <Sigma className="w-4 h-4" /> }
    ],
    icon: <Search className="w-6 h-6 text-primary" />,
    description: "Experienced in extracting valuable insights from complex datasets."
  }
];

const certificates = [
  {
    id: 1,
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "June 2023",
    skills: ["Python", "Data Science", "Pandas", "NumPy"],
    description: "A comprehensive course covering Python fundamentals for data science applications, including data manipulation, analysis, and visualization.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    certificateLink:"https://drive.google.com/file/d/1hs04WQt5PCISULKZdX7zlqMVMwEUNitK/view?usp=drive_link",
    icon: <Code className="w-5 h-5 text-primary" />
  },
  {
    id: 2,
    title: "Salesforce Data Analytics",
    issuer: "Salesforce",
    date: "August 2023",
    skills: ["Salesforce", "Data Analytics", "CRM", "Reporting"],
    description: "Advanced analytics techniques within the Salesforce ecosystem, focusing on building custom reports and dashboards for business intelligence.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    certificateLink: "https://res.cloudinary.com/dhuenys5v/image/upload/v1741783963/salesforce1_pisfos.jpg",
    icon: <BarChart3 className="w-5 h-5 text-primary" />
  },
  {
    id: 3,
    title: "Machine Learning",
    issuer: "Stanford Online",
    date: "October 2023",
    skills: ["Machine Learning", "Python", "Algorithms", "Neural Networks"],
    description: "In-depth exploration of machine learning algorithms and their applications, including supervised and unsupervised learning techniques.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    certificateLink: "https://res.cloudinary.com/dhuenys5v/image/upload/v1741784188/intern1_m3o7gg.jpg"
  },
  
  {
    id: 4,
    title: "Data Science",
    issuer: "DataCamp",
    date: "March 2024",
    skills: ["Data Analysis", "SQL", "Statistics", "Excel"],
    description: "Comprehensive certification covering all aspects of data analysis, from cleaning and processing to visualization and interpretation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    certificateLink: "https://res.cloudinary.com/dhuenys5v/image/upload/v1741784165/ds_urgbuw.jpg",
    icon: <Award className="w-5 h-5 text-primary" />
  },
  {
    id: 5,
    title: "Structural Analysis",
    issuer: "AICTE",
    date: "December 2024",
    skills: ["Data Science", "Data Visualization","AutoCAD"],
    description: "A comprehensive course covering Python fundamentals for data science applications, including data manipulation, analysis, and visualization.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/data_analyticstrendsmin.jpg",
    certificateLink:"https://drive.google.com/file/d/1VAA_gFsW-f7H68r7R4zSSjxEp9m4NwEJ/view?usp=drive_link",
    icon: <Code className="w-5 h-5 text-primary" />
  },
  {
    id: 6,
    title: "Data Science Master",
    issuer: "AICTE",
    date: "March 2025",
    skills: ["Python","Data Processing","Optimization Techniques"],
    description: "A comprehensive course covering Python fundamentals for data science applications, including data manipulation, analysis, and visualization.",
    image: "https://deeptechbytes.com/wp-content/uploads/2021/05/data-analytics-trends.jpg",
    certificateLink:"https://drive.google.com/file/d/1p2_jgwQKi9EmILJ9eFq9xFecYOak4fWf/view?usp=drive_link",
    icon: <Code className="w-5 h-5 text-primary" />
  },
];

const Skills = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string | null>(null);
  
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Technical Skills" subtitle="SKILLS" />
        
        <div className="flex flex-nowrap justify-start gap-3 mb-8 overflow-x-auto pb-3 md:justify-center md:flex-wrap">
          {skillCategories.map((category, idx) => (
            <Button
              key={idx}
              variant={selectedSkillCategory === category.category ? "default" : "outline"}
              className="flex items-center gap-2 min-w-max"
              onClick={() => setSelectedSkillCategory(category.category === selectedSkillCategory ? null : category.category)}
            >
              {category.icon}
              <span>{category.category}</span>
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {(selectedSkillCategory 
            ? skillCategories.filter(cat => cat.category === selectedSkillCategory) 
            : skillCategories
          ).map((skill, index) => (
            <Card 
              key={`skill-${index}`} 
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
              glow={true}
              size="sm"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold">{skill.category}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.skills.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-secondary dark:bg-secondary/30 rounded-full"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <Card className="animate-fade-in-delayed" glow={true} glowColor="secondary" size="sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Python for Data Science</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Salesforce Data Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Machine Learning</span>
              </li>
              
              
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Data Science</span>
              </li>
            <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Structural Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Data Science Master</span>
              </li>
            
            </ul>
          </Card>
          
          <Card className="animate-fade-in-delayed" style={{ animationDelay: '150ms' }} glow={true} glowColor="secondary" size="sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>English</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-6 h-2 rounded-full bg-primary"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Telugu</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-6 h-2 rounded-full bg-primary"
                  ></div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <SectionHeading title="Certificates & Achievements" subtitle="CERTIFICATES" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {certificates.map((certificate, index) => (
              <Card 
                key={`certificate-${index}`}
                className="cursor-pointer animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
                glow={true}
                glowColor="accent"
                onClick={() => setSelectedCertificate(certificate)}
                size="sm"
              >
                <div className="h-24 -mx-4 -mt-4 mb-3 overflow-hidden">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    {certificate.icon}
                  </div>
                  <h3 className="font-bold text-sm truncate">{certificate.title}</h3>
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Certificate Dialog */}
          <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
            <DialogContent className="sm:max-w-2xl dark:bg-black dark:border-white/10">
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-xl">{selectedCertificate?.title}</DialogTitle>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => setSelectedCertificate(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <DialogDescription>
                  Issued by {selectedCertificate?.issuer} • {selectedCertificate?.date}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                <img 
                  src={selectedCertificate?.image} 
                  alt={selectedCertificate?.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedCertificate?.description}
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate?.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-secondary dark:bg-secondary/30 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={() => setSelectedCertificate(null)}>
                  Close
                </Button>
                <Button 
                  onClick={() => window.open(selectedCertificate?.certificateLink, '_blank')}
                >
                  View Certificate
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Skills;
