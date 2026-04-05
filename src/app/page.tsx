import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Programs from "@/components/Programs";
import Certifications from "@/components/Certifications";
import WhyDisha from "@/components/WhyDisha";
import WhoWeServe from "@/components/WhoWeServe";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <Programs />
        <Certifications />
        <WhyDisha />
        <WhoWeServe />
        <CTABanner />
      </main>
      <Footer />
      <EnquireModal />
    </>
  );
}
