
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const EducationPage = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      <Navbar />
      <main className="pt-20">
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;
