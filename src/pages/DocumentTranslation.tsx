import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, CheckCircle, FileText, Shield, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DocumentTranslation = () => {
  const benefits = [
    {
      icon: Award,
      title: "ATA-Certified Translators",
      description: "Access to a nationwide network of professional translators certified by the American Translators Association"
    },
    {
      icon: Users,
      title: "Dual Review Process",
      description: "One translator performs meaning-for-meaning translation, a second checks for quality, integrity, and accuracy"
    },
    {
      icon: CheckCircle,
      title: "Certificate of Translation",
      description: "Eligible documents receive an official certificate of translation upon request"
    },
    {
      icon: Shield,
      title: "Cultural Precision",
      description: "Convey nuances and cultural differences, not just literal word-for-word translations"
    }
  ];

  const industries = [
    { name: "Healthcare", description: "Patient materials, clinical documentation, medical records" },
    { name: "Legal", description: "Contracts, court documents, depositions, legal filings" },
    { name: "Government", description: "Official notices, forms, public documents" },
    { name: "Education", description: "Student records, transcripts, academic materials" },
    { name: "Corporate", description: "Business contracts, HR documents, corporate communications" }
  ];

  const documentTypes = [
    "Official document translation",
    "Legal document translation",
    "Medical document translation",
    "School document translation",
    "Business document translation",
    "Technical document translation"
  ];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetQuote = () => {
    window.open('https://wkf.ms/47CpWLq', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Document Translation Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional document translation services with ATA-certified translators. Legal, medical, corporate documents translated with cultural precision and certificate of translation available." />
        <link rel="canonical" href="https://metaphrasislcs.com/translation-services/document-translation" />
        <meta property="og:title" content="Document Translation Services | Metaphrasis" />
        <meta property="og:description" content="Professional document translation with ATA-certified translators and dual review process for quality assurance." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Document Translation Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Document Translation",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Document Translation <span className="text-brand-teal">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The problem with many apps and websites is that they don't go beyond providing literal word-for-word translations. When partnering with us, you will have access to a nationwide network of professional translators, including professionals certified by the American Translators Association (ATA), who understand how important it is to convey exactly the right meaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90" onClick={handleGetQuote}>
                Get a Quote
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-12 bg-brand-teal/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl font-semibold leading-relaxed">
              The document translators at Metaphrasis will provide meaning-for-meaning translations and convey the nuances and cultural differences involved. We work with translators certified by the American Translators Association (ATA), who can translate documents and provide them with a certificate of translation if eligible.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our <span className="text-brand-teal">Document Translation</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              For each document translation project, one translator performs a meaning-for-meaning translation of the text, and a second checks the translated text for quality, integrity, and accuracy.
            </p>
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal/10 mb-4 group-hover:bg-brand-teal/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive <span className="text-brand-coral">Document Translation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With our top-of-the-line software, we can translate legal documents, marketing materials, newsletters, eBooks, and brochures to promote your business while staying true to the original meaning and intent of your message.
            </p>
            <p className="text-muted-foreground">
              We also have the ability to translate content created using Desktop Publishing (DTP) software such as InDesign and Adobe Illustrator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {documentTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-brand-teal/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <FileText className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <span className="text-sm font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Exceptional Experience Across <span className="text-brand-teal">Industries</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let Metaphrasis make your job easier – we have exceptional experience in document translation across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2 text-brand-teal">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-teal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Give us a call at (815) 464-1423 to learn more about our document translation services in Chicago, IL and throughout the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-teal hover:bg-white/90" onClick={handleGetQuote}>
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DocumentTranslation;
