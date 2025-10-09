import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientBanner from "@/components/ClientBanner";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientBanner />
      <Services />
      <WhyChooseUs />
      <Industries />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
