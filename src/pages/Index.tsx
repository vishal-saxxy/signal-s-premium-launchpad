import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FundingSignalSection from "@/components/FundingSignalSection";
import ComparisonSection from "@/components/ComparisonSection";
import WorkflowSection from "@/components/WorkflowSection";
import PersonalizationSection from "@/components/PersonalizationSection";
import DatabaseSection from "@/components/DatabaseSection";
import HiringSignalsSection from "@/components/HiringSignalsSection";
import JobBoardCritiqueSection from "@/components/JobBoardCritiqueSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <HeroSection />
        <FundingSignalSection />
        <ComparisonSection />
        <WorkflowSection />
        <PersonalizationSection />
        <DatabaseSection />
        <HiringSignalsSection />
        <JobBoardCritiqueSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
