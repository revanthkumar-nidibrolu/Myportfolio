
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container-custom">
        <SectionHeading title="About Me" subtitle="SUMMARY" />
        
        <div className="max-w-3xl mx-auto">
          <Card className="animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              I am an Analytical Data Analyst with a solid foundation in data analysis, visualization, and statistical methods. Proficient in tools such as Power BI, MySQL, and Python, with hands-on experience through virtual internships and substantial academic projects.
            </p>
            <p className="text-lg leading-relaxed">
              Eager to leverage skills in data analytics, problem-solving, and machine learning to derive actionable insights from complex datasets and support data-driven business decisions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
