import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SubjectsSection } from "@/components/SubjectsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TeachersSection } from "@/components/TeachersSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { EnrollmentSection } from "@/components/EnrollmentSection";
import { Chatbot } from "@/components/Chatbot";
import { AlertBanner } from "@/components/AlertBanner";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EnrollmentAlert } from "@/components/EnrollmentAlert";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <AlertBanner /> */}
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SubjectsSection />
        <WhyChooseSection />
        <TeachersSection />
        <BlogSection />
        <FAQSection />
        <EnrollmentSection />
      </main>
      <Footer />
      <Chatbot />
      <ScrollToTop />
      <EnrollmentAlert />
    </div>
  );
};

export default Index;
