import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SubjectsSection } from "@/components/SubjectsSection";
import { TeachersSection } from "@/components/TeachersSection";
import { BlogSection } from "@/components/BlogSection";
import { EnrollmentSection } from "@/components/EnrollmentSection";
import { Chatbot } from "@/components/Chatbot";
import { AlertBanner } from "@/components/AlertBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AlertBanner />
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <SubjectsSection />
        <TeachersSection />
        <BlogSection />
        <EnrollmentSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
