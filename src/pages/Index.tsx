import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientBanner from "@/components/ClientBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import FounderQuote from "@/components/FounderQuote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientBanner />
      <WhyChooseUs />
      <Services />
      <Industries />
      <Testimonials />
      <Certifications />
      <FounderQuote />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
