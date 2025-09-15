import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DetectionDashboard from "@/components/DetectionDashboard";
import TechSection from "@/components/TechSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <DetectionDashboard />
        <TechSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;