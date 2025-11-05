import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Landmark, Heart, Briefcase, Scale } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      name: "Education & Schools",
      description: "Parent-teacher conferences, IEP meetings, student support",
      color: "text-brand-teal",
      anchor: "education"
    },
    {
      icon: Landmark,
      name: "Government",
      description: "Public services, constituent meetings, municipal programs",
      color: "text-brand-coral",
      anchor: "government"
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Patient consultations, discharge instructions, mental health services",
      color: "text-brand-yellow",
      anchor: "healthcare"
    },
    {
      icon: Briefcase,
      name: "Corporate",
      description: "Business negotiations, training sessions, HR consultations",
      color: "text-brand-green",
      anchor: "corporate"
    },
    {
      icon: Scale,
      name: "Legal",
      description: "Depositions, court proceedings, client interviews, mediations",
      color: "text-brand-pink",
      anchor: "legal"
    }
  ];

  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle anchor navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      // Small delay to ensure the page has fully loaded
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Metaphrasis LCS</title>
        <meta name="description" content="Metaphrasis partners with organizations across industries to deliver accurate, culturally relevant language solutions in healthcare, education, legal, corporate, and government settings." />
        <link rel="canonical" href="https://metaphrasislcs.com/industries/" />
        <meta property="og:title" content="Industries We Serve | Metaphrasis" />
        <meta property="og:description" content="Expert language solutions for healthcare, education, legal, corporate, and government organizations." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Industries We <span className="text-brand-teal">Serve</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Metaphrasis partners with organizations across industries to deliver accurate, culturally relevant language solutions. Whether in healthcare, education, legal, corporate, or government settings, our expert linguists ensure every message is delivered with clarity, compassion, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all cursor-pointer animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => scrollToSection(industry.anchor)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`${industry.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          {/* Education & Schools */}
          <div id="education" className="scroll-mt-24 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-brand-teal" />
              <h2 className="text-3xl font-bold">Education & Schools</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Metaphrasis supports schools and districts by bridging communication between educators, parents, and students. We provide professional interpreters and translators for IEP meetings, report cards, enrollment materials, and parent-teacher conferences—ensuring every family stays informed and engaged.
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-bold mb-3">Services often used:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• On-site and virtual interpreting</li>
                <li>• Document and website translation</li>
                <li>• Educational materials and transcript translation</li>
              </ul>
            </div>
          </div>

          {/* Government */}
          <div id="government" className="scroll-mt-24 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-8 h-8 text-brand-coral" />
              <h2 className="text-3xl font-bold">Government</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              From city councils to state departments, we help government entities communicate effectively with diverse communities. Our team ensures public information, legal notices, and constituent materials are accurately translated to meet compliance and accessibility standards.
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-bold mb-3">Services often used:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Public document translation</li>
                <li>• Live and remote interpreting for meetings and hearings</li>
                <li>• Multilingual community outreach materials</li>
              </ul>
            </div>
          </div>

          {/* Healthcare */}
          <div id="healthcare" className="scroll-mt-24 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-brand-yellow" />
              <h2 className="text-3xl font-bold">Healthcare</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Metaphrasis has over a decade of experience serving hospitals, clinics, and mental health organizations. Our linguists are HIPAA-trained and culturally competent, ensuring accurate communication for patient care, informed consent, and discharge instructions.
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-bold mb-3">Services often used:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Medical interpreting (on-site and remote)</li>
                <li>• Patient record and form translation</li>
                <li>• Braille and accessibility formats</li>
              </ul>
            </div>
          </div>

          {/* Corporate */}
          <div id="corporate" className="scroll-mt-24 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-brand-green" />
              <h2 className="text-3xl font-bold">Corporate</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              We support companies of all sizes with multilingual communication for HR, marketing, and global business operations. From training materials to presentations and product documentation, we ensure brand consistency across languages.
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-bold mb-3">Services often used:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Business and HR translation</li>
                <li>• Video and voiceover localization</li>
                <li>• Website and document translation</li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div id="legal" className="scroll-mt-24 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-brand-pink" />
              <h2 className="text-3xl font-bold">Legal</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Trusted by law firms and courts, Metaphrasis provides precise, confidential translation and interpreting for legal documents and proceedings. Our translators are experts in legal terminology and compliance standards.
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-bold mb-3">Services often used:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deposition and courtroom interpreting</li>
                <li>• Contract and evidence translation</li>
                <li>• Certified legal document translation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Industry-Specific <span className="text-brand-teal">Language Support?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Request a quote today to see how Metaphrasis can support your communication goals.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wkf.ms/47CpWLq" target="_blank" rel="noopener noreferrer">
                Request a Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Industries;
