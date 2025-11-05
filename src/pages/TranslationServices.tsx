import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailCard from "@/components/translation/ServiceDetailCard";
import MiniTour from "@/components/translation/MiniTour";
import FAQAccordion from "@/components/translation/FAQAccordion";
import { Award, Clock, FileCheck, MapPin, FileText, Globe, Mic, Volume2, Eye, Languages, MapPinned, Subtitles } from "lucide-react";

const TranslationServices = () => {
  const benefits = [
    {
      icon: Award,
      title: "Cultural Expertise",
      description: "Native-level nuance in regulated contexts",
      tooltip: "All translators certified in both source and target language with subject matter expertise"
    },
    {
      icon: Clock,
      title: "Over a Decade of Experience",
      description: "Proven processes, audited QA",
      tooltip: "ISO-aligned workflows with documented quality metrics across 100,000+ projects"
    },
    {
      icon: FileCheck,
      title: "Certified & Compliant",
      description: "ATA, HIPAA-aware workflows as applicable",
      tooltip: "Certificate of translation available; HIPAA Business Associate Agreements in place"
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "Secure remote intake; enterprise-grade delivery",
      tooltip: "Encrypted file transfer; dedicated project portal; 24/7 rush availability"
    },
  ];

  const services = [
    {
      icon: FileText,
      title: "Document Translation",
      value: "Legal, medical, corporate; certificate eligibility",
      color: "text-brand-teal",
      link: "/translation-services/document-translation"
    },
    {
      icon: Globe,
      title: "Website Translation",
      value: "CMS workflows, SEO/hreflang, string QA",
      color: "text-brand-coral",
      link: "/translation-services/website-translation"
    },
    {
      icon: Mic,
      title: "Audio Transcription",
      value: "Timestamps, speaker labels, glossary injection",
      color: "text-brand-yellow",
      link: "/translation-services/audio-transcription"
    },
    {
      icon: Volume2,
      title: "Voice Over",
      value: "Casting, timing to picture, usage rights",
      color: "text-brand-green",
      link: "/translation-services/voice-over"
    },
    {
      icon: Eye,
      title: "Braille",
      value: "BANA compliance; large-print variants",
      color: "text-brand-pink"
    },
    {
      icon: Languages,
      title: "Transcreation",
      value: "Creative adaptation for marketing and advertising",
      color: "text-brand-blue"
    },
    {
      icon: MapPinned,
      title: "Localization",
      value: "Cultural adaptation for global markets",
      color: "text-brand-teal"
    },
    {
      icon: Subtitles,
      title: "Video Captioning",
      value: "Accurate subtitles and closed captions",
      color: "text-brand-coral"
    },
  ];

  const industries = [
    { name: "Healthcare", description: "Patient materials, clinical trials, informed consent" },
    { name: "Legal", description: "Litigation, depositions, patents, regulatory filings" },
    { name: "Corporate", description: "HR docs, training, contracts, investor relations" },
    { name: "Education", description: "Student records, IEPs, parent communications" },
    { name: "Government", description: "Public notices, forms, constituent services" },
    { name: "Events & Conferences", description: "Event materials, programs, attendee communications" },
    { name: "Non-Profit", description: "Grant applications, donor communications, program materials" },
    { name: "Digital Marketing + Public Relations", description: "Campaign content, press releases, social media" },
    { name: "Manufacturing", description: "Technical manuals, safety documentation, product specs" },
  ];

  return (
    <>
      <Helmet>
        <title>Translation Services | Metaphrasis LCS</title>
        <meta name="description" content="Certified, secure, and culturally precise translation for healthcare, government, and corporate organizations. ATA-certified translators, on time and on budget." />
        <link rel="canonical" href="https://metaphrasislcs.com/translation-services/" />
        <meta property="og:title" content="Translation Services for Organizations | Metaphrasis" />
        <meta property="og:description" content="Certified, secure translation services for healthcare, government, and corporate teams—on time and on budget." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Translation Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Translation",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Translation <span className="text-brand-teal">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From contracts and policies to marketing collateral and training manuals, our translation services guarantee accuracy, consistency, and cultural sensitivity. Using AI-powered tools enhanced with human linguists, we deliver fast, scalable translations while maintaining your brand's voice and global reach.
            </p>
            <p className="text-sm text-muted-foreground">
              ATA-certified translators · Certificate of translation available upon request
            </p>
          </div>
        </div>
      </section>

      {/* Why Metaphrasis */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Why <span className="text-brand-teal">Metaphrasis</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every project matters. We combine clarity, compassion, and compliance to ensure translations you can trust.
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
                  <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                  <p className="text-xs text-muted-foreground/70 italic">{benefit.tooltip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-brand-coral">Translation Services</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceDetailCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <MiniTour />

      {/* Industries */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Expertise Across <span className="text-brand-teal">Regulated and Enterprise Sectors</span>
            </h2>
            <p className="text-muted-foreground">
              Accuracy and compliance aren't optional—they're outcomes. We deliver translation that meets regulatory standards and drives organizational success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion />

      <Footer />
    </>
  );
};

export default TranslationServices;
