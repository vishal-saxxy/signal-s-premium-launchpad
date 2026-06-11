import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FundingSignalSection from "@/components/FundingSignalSection";
import ComparisonSection from "@/components/ComparisonSection";
import WorkflowSection from "@/components/WorkflowSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import PersonalizationSection from "@/components/PersonalizationSection";
import DatabaseSection from "@/components/DatabaseSection";
import HiringSignalsSection from "@/components/HiringSignalsSection";
import JobBoardCritiqueSection from "@/components/JobBoardCritiqueSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <HeroSection />
        <FundingSignalSection />
        <LiveDemoSection />
        <ComparisonSection />
        <WorkflowSection />
        <PersonalizationSection />
        <DatabaseSection />
        <HiringSignalsSection />
        <FinalCTASection />
        <JobBoardCritiqueSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
