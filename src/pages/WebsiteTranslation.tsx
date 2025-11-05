import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, CheckCircle, Users, Award, FileText, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WebsiteTranslation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetQuote = () => {
    window.open('https://wkf.ms/47CpWLq', '_blank');
  };

  const benefits = [
    {
      icon: Award,
      title: "ATA-Certified Translators",
      description: "Professional translators certified by the American Translators Association who understand context and cultural nuances"
    },
    {
      icon: CheckCircle,
      title: "Dual Review Process",
      description: "One translator performs meaning-for-meaning translation, a second proofreads for quality, integrity, and accuracy"
    },
    {
      icon: Languages,
      title: "Website Localization",
      description: "Beyond word-for-word translation, we localize your website to include the tone and terminology of specific regions"
    },
    {
      icon: FileText,
      title: "Complete Coverage",
      description: "All content translated including web pages, blogs, videos, and downloadable materials"
    }
  ];

  const whyImportant = [
    {
      title: "Reach New Markets",
      description: "Expand your business globally by making your website accessible to non-English speaking audiences"
    },
    {
      title: "Better Than Auto-Translation",
      description: "Professional translators accommodate context, implied meanings, and cultural nuances that automatic tools miss"
    },
    {
      title: "Control Your Message",
      description: "Work closely with translators to ensure your website presents valuable information to your audience correctly"
    },
    {
      title: "Avoid Mistranslations",
      description: "Prevent embarrassing errors and miscommunication that can damage your brand reputation"
    }
  ];

  const testimonials = [
    {
      quote: "The medical interpreter training was very informative and provided excellent material on how to become a true professional. It was a great experience to be part of the team!",
      author: "Anna Rajchel"
    },
    {
      quote: "It is a privilege to work for the Metaphrasis company and so thrilled to be able to help out the community as an Albanian interpreter! A great thank you to Elizabeth and her team",
      author: "Linda Tasellari"
    },
    {
      quote: "Metaphrasis carry the strength, the professional compassion, and the steadfastness of a mythical Pelican.",
      author: "Jos. G. Janvier"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Website Translation Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional website translation services with ATA-certified translators. Localize your website for global markets with accurate, culturally-aware translations in multiple languages." />
        <link rel="canonical" href="https://metaphrasislcs.com/translation-services/website-translation" />
        <meta property="og:title" content="Website Translation Services | Metaphrasis" />
        <meta property="og:description" content="Professional website translation and localization services for businesses in Chicago, IL and nationwide." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website Translation Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Website Translation",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-coral/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Website Translation <span className="text-brand-coral">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              For many businesses and institutions, your website is your first introduction to potential customers, clients, employees, patients, and students. If you're trying to reach people in new markets or have audiences who are not proficient in English, professional website translation is essential.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              At Metaphrasis, we provide professional website translation services for businesses in Chicago, IL and around the country. Our ATA-certified translators carefully read and understand your website to make accurate translations that can be understood in many different languages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-coral hover:bg-brand-coral/90" onClick={handleGetQuote}>
                Get a Quote
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Website Translation is Important */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Why Website Translation is <span className="text-brand-coral">Important</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              While automatic translation tools are available, they often provide straight word-for-word translations without accommodating for context, implied meanings, and cultural nuances. Professional translation ensures accuracy and cultural relevance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyImportant.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:border-brand-coral/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-brand-coral">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-coral/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Complete Website <span className="text-brand-coral">Translation Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Translating your website into different languages will help you reach new markets and better connect with your current audience. It's not enough to do a word-for-word translation—you'll connect more with your audience by localizing your website to include the tone and terminology of specific areas.
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-coral/20 mb-4 group-hover:bg-brand-coral/30 transition-colors">
                    <Icon className="w-8 h-8 text-brand-coral" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-brand-coral">Translation Process</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-brand-coral/30">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-coral/20 flex items-center justify-center font-bold text-brand-coral">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Meaning-for-Meaning Translation</h3>
                    <p className="text-muted-foreground">
                      One translator performs a comprehensive meaning-for-meaning translation of all your website text, including web pages, blogs, videos, and downloadable materials.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-coral/20 flex items-center justify-center font-bold text-brand-coral">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Assurance & Proofreading</h3>
                    <p className="text-muted-foreground">
                      A second translator proofreads the translation and checks for quality, integrity, and accuracy to ensure the highest standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-coral/20 flex items-center justify-center font-bold text-brand-coral">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Localization & Cultural Adaptation</h3>
                    <p className="text-muted-foreground">
                      We localize your website in different languages without sacrificing the quality, integrity, and accuracy of the content. Using top-of-the-line software, we can translate content created with Desktop Publishing (DTP) software including Adobe Illustrator and InDesign.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-coral text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Translate Your Website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              If you need to have your website translated into multiple languages, contact Metaphrasis for our website translation services. Call us at (815) 464-1423.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-coral hover:bg-white/90" onClick={handleGetQuote}>
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Let's Get In Touch!
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WebsiteTranslation;
