import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Volume2, CheckCircle2, Building2, GraduationCap, Heart, Scale, Landmark } from "lucide-react";

const VoiceOver = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Professional Voice Talent",
      description: "Native speakers with industry expertise and professional vocal performance skills"
    },
    {
      icon: Volume2,
      title: "Accurate Translation",
      description: "Precise voice over translations that convey your message effectively"
    },
    {
      icon: CheckCircle2,
      title: "Multiple Languages",
      description: "Voice over services available in numerous languages to reach global audiences"
    },
    {
      icon: CheckCircle2,
      title: "Quality Performance",
      description: "Not just translation—effective vocal performances that engage your audience"
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "Businesses and Corporations",
      description: "Voice over translations for promotional videos, training videos, video conferences, presentations, and more."
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Voice over translations for videos of lectures, conferences, and group discussions."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Seminars, presentations, and videos from doctors treated with professional voice over translations."
    },
    {
      icon: Scale,
      title: "Legal Professionals",
      description: "Voice over translations for videos from courts, attorneys, and other legal professionals."
    },
    {
      icon: Landmark,
      title: "Government Services",
      description: "Voice over translations for government agency videos to help more people access important information."
    },
  ];

  const mediaTypes = [
    "Promotional Videos",
    "Training Videos",
    "Presentations",
    "Lectures",
    "Podcasts",
    "Audiobooks",
    "Video Conferences",
    "Educational Content",
  ];

  return (
    <>
      <Helmet>
        <title>Voice Over Translation Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional voice over translation services for businesses, healthcare, education, legal, and government sectors. Native voice talent for all languages." />
        <link rel="canonical" href="https://metaphrasislcs.com/translation-services/voice-over" />
        <meta property="og:title" content="Voice Over Translation Services | Metaphrasis" />
        <meta property="og:description" content="Professional voice over translation services with native voice talent for videos, presentations, podcasts, and more." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-green/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/20 mb-6">
              <Volume2 className="w-10 h-10 text-brand-green" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Voice Over <span className="text-brand-green">Translation Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Businesses and institutions across industries use many forms of media involving audio and video. Promotional videos, presentations, lectures, podcasts, audiobooks, and more are used to entertain, inform, educate, train, and promote ideas, businesses, products and services.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              When a business, educational institution, healthcare professional, or government agency releases video or audio content, it is important for it to be understood by everyone.
            </p>
            <Button 
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white"
              onClick={() => window.open('https://wkf.ms/47CpWLq', '_blank')}
            >
              Get a Quote for Voice Over Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Voice Over */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-green/5 border-l-4 border-brand-green p-8 rounded-lg mb-12">
              <p className="text-lg leading-relaxed">
                <strong>At Metaphrasis, we provide voice over services for all types of media for businesses, educational institutions, healthcare professionals, legal professionals, government services, and more in the Chicago, IL area, and across the nation.</strong>
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our voice over artists can provide effective voice over performances for many different languages. You can expect an accurate voice over translation that will convey your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our <span className="text-brand-green">Voice Over Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              When you work with Metaphrasis for voice over services, you will not only get an accurate voice over translation but also an effective vocal performance.
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 mb-4 group-hover:bg-brand-green/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Professional <span className="text-brand-green">Voice Over Translation</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We can provide voice over translation services for the following fields and industries throughout Chicago, IL, and around the country:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green/10 mb-4 group-hover:bg-brand-green/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Types */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-brand-green">Media Types</span> We Cover
              </h2>
              <p className="text-lg text-muted-foreground">
                Our voice over services cover a wide range of audio and video formats
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mediaTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-brand-green/20 hover:border-brand-green/40 transition-colors text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <p className="font-medium">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-green/10 via-background to-brand-green/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Give us a call at (815) 464-1423 or submit a contact form for more about our voice over translation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white"
                onClick={() => window.open('https://wkf.ms/47CpWLq', '_blank')}
              >
                Get a Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-brand-green text-brand-green hover:bg-brand-green/10"
                onClick={() => window.location.href = 'tel:8154641423'}
              >
                Call (815) 464-1423
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VoiceOver;
