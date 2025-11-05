import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, Shield, Award, FileCheck, Building2, GraduationCap, HeartPulse, Scale, Landmark, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";

const Braille = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Eye,
      title: "ADA Compliance",
      description: "Meet accessibility requirements for public buildings and institutions"
    },
    {
      icon: Shield,
      title: "BANA Standards",
      description: "All transcriptions meet or exceed Braille Authority of North America standards"
    },
    {
      icon: Award,
      title: "Expert Translators",
      description: "Certified professionals who understand braille nuances and conventions"
    },
    {
      icon: FileCheck,
      title: "Multi-Step Quality",
      description: "Rigorous process with professional proofreading and final assessment"
    }
  ];

  const documentTypes = [
    {
      icon: Building2,
      title: "Business Documents",
      description: "Newsletters, brochures, and training materials"
    },
    {
      icon: GraduationCap,
      title: "Educational Materials",
      description: "Documents from educational institutions and learning resources"
    },
    {
      icon: HeartPulse,
      title: "Medical Documents",
      description: "Healthcare information and patient materials"
    },
    {
      icon: Scale,
      title: "Legal Documents",
      description: "Documents from attorneys and legal service providers"
    },
    {
      icon: Landmark,
      title: "Official Documents",
      description: "Financial institutions and government entity documents"
    },
    {
      icon: Headphones,
      title: "Audio/Video Transcription",
      description: "Transcription of audio or video content into braille"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Preparing the Source",
      description: "The source is prepared and converted into braille by one of our translators. The translator will do a meaning-for-meaning translation with the conventions and nuances of braille in mind."
    },
    {
      number: "02",
      title: "Plate Generation",
      description: "The braille translation is put on plates that can easily be copied and distributed."
    },
    {
      number: "03",
      title: "Final Assessment",
      description: "A professional who is experienced in reading braille will proofread the work of the first translator to approve the accuracy and layout."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Braille Transcription Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional braille transcription services in Chicago, IL. BANA-compliant translations for businesses, healthcare, education, legal, and government institutions." />
        <link rel="canonical" href="https://metaphrasislcs.com/translation-services/braille-translation-services/" />
        <meta property="og:title" content="Braille Transcription Services | Metaphrasis LCS" />
        <meta property="og:description" content="Expert braille translation services meeting ADA compliance and BANA standards." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Braille Transcription Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Braille Translation",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-pink/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Braille <span className="text-brand-pink">Transcription Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The visually impaired or blind may rely on braille to read, write, and receive important information. We provide braille translation services to translate documents and materials for businesses, healthcare professionals, educational institutions, attorneys, government services, and financial institutions throughout Chicago, IL.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our braille translators understand the nuances of braille and can make accurate transcriptions that meet or exceed the standards of the Braille Authority of North America (BANA).
            </p>
            <a
              href="https://wkf.ms/47CpWLq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-brand-pink text-white font-medium hover:bg-brand-pink/90 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              The Importance of <span className="text-brand-pink">Braille Transcription</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-6">
                It is important for businesses, healthcare, education, government and legal services to be accessible to everyone. In order to be accessible to as many people as possible, businesses and institutions must consider the needs of their audience. People who are blind or vision impaired face difficult challenges, especially when it comes to getting important information. Having important documents available in braille will help ensure that those who are vision impaired receive the information they need from your business or institution.
              </p>
              <p className="text-lg">
                Our braille transcription professionals in Chicago, IL understand the coding systems and conventions of braille and stay up to date on the latest braille formats from the BANA. We pay close attention to the text or audio being transcribed and ensure an accurate transcription will be understood by those who are blind or vision impaired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-brand-pink">Metaphrasis</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-pink/10 mb-4 group-hover:bg-brand-pink/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-pink" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Our Braille Transcription <span className="text-brand-pink">Services Cover</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documentTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-brand-pink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              The Braille <span className="text-brand-pink">Translation Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              At Metaphrasis, we are ready to help anyone from small businesses to large institutions with braille transcription services. Each document we transcribe into braille is put through a multi-step process to ensure the message is accurately conveyed and can be understood.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-pink/20 mb-4">
                    <span className="text-2xl font-bold text-brand-pink">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-pink/10 via-background to-brand-pink/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make Your Content <span className="text-brand-pink">Accessible?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Accessibility should be a pressing issue for all businesses and institutions to ensure that your message is conveyed to as many people as possible. If you need a professional to translate important documents and texts into braille, contact our professionals at Metaphrasis for full braille translation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wkf.ms/47CpWLq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-brand-pink text-white font-medium hover:bg-brand-pink/90 transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="tel:(815) 464-1423"
                className="inline-flex items-center justify-center h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors"
              >
                Call (815) 464-1423
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Braille;
