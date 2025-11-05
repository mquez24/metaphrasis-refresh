import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, CheckCircle, Users, Headphones, Video, FileText, Hand, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const ConferenceInterpreting = () => {
  const services = [
    {
      icon: Users,
      title: "On-Site Interpretation",
      description: "Professional interpreters present at your conference venue for face-to-face interpretation"
    },
    {
      icon: Video,
      title: "Remote Video Interpretation",
      description: "Virtual interpreters for hybrid or fully remote conferences and webinars"
    },
    {
      icon: Headphones,
      title: "Simultaneous Interpretation",
      description: "Real-time interpretation with professional equipment for large-scale events"
    },
    {
      icon: Mic,
      title: "Consecutive Interpretation",
      description: "Speaker pauses for interpretation, ideal for smaller meetings and panel discussions"
    },
    {
      icon: Hand,
      title: "ASL Interpretation",
      description: "American Sign Language interpreters for Deaf and hard-of-hearing attendees"
    },
    {
      icon: FileText,
      title: "Document Translation",
      description: "Translation of conference materials, presentations, and handouts"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Industry Expertise",
      description: "Interpreters with specialized knowledge in your field—medical, legal, technical, or corporate"
    },
    {
      icon: CheckCircle,
      title: "Cultural Competence",
      description: "Understanding of cultural nuances ensures your message resonates authentically across languages"
    },
    {
      icon: CheckCircle,
      title: "Professional Equipment",
      description: "State-of-the-art interpretation systems, headsets, and assistive listening devices"
    },
    {
      icon: CheckCircle,
      title: "Flexible Solutions",
      description: "Customized interpretation plans tailored to your event size, format, and language needs"
    }
  ];

  const eventTypes = [
    "Industry conferences and trade shows",
    "Corporate annual meetings and shareholder events",
    "International business summits",
    "Academic conferences and symposiums",
    "Medical and healthcare conferences",
    "Government and diplomatic events",
    "Nonprofit organization gatherings",
    "Training seminars and workshops",
    "Panel discussions and town halls",
    "Virtual and hybrid events"
  ];

  return (
    <>
      <Helmet>
        <title>Conference Interpretation Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional conference interpretation services in Chicago. Simultaneous and consecutive interpreters for conferences, events, and seminars across all industries." />
        <link rel="canonical" href="https://metaphrasislcs.com/interpretation-services/conference-interpreting/" />
        <meta property="og:title" content="Conference Interpretation Services | Metaphrasis" />
        <meta property="og:description" content="Expert conference interpreters ensuring every attendee understands your message, regardless of language." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Conference Interpretation Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Conference Interpretation",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-pink/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-pink/20 mb-6">
              <Briefcase className="w-10 h-10 text-brand-pink" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Conference <span className="text-brand-pink">Interpretation Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Make your conference truly global. Professional interpretation services that ensure every attendee 
              understands your message, regardless of their language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-brand-pink hover:bg-brand-pink/90 text-white">
                  Request Conference Services
                </Button>
              </Link>
              <Link to="/interpretation-services">
                <Button size="lg" variant="outline">
                  View All Interpretation Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Why Conference Interpretation <span className="text-brand-pink">Matters</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Conferences and industry events are powerful opportunities to establish your brand, share critical 
                information, and connect with stakeholders. But if attendees with limited English proficiency or those 
                who are Deaf or hard of hearing cannot fully understand your message, you're missing valuable connections.
              </p>
              <p>
                Professional conference interpretation ensures that language is never a barrier to participation. Our skilled 
                interpreters deliver accurate, real-time interpretation while respecting cultural nuances and industry-specific 
                terminology—so your message resonates authentically across all languages.
              </p>
              <p>
                Whether you're hosting an in-person conference, a virtual event, or a hybrid gathering, we provide 
                flexible interpretation solutions that meet your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Our Conference <span className="text-brand-pink">Interpretation Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for every type of conference and event
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-pink/10 mb-4">
                    <Icon className="w-8 h-8 text-brand-pink" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-brand-pink/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-brand-pink">Metaphrasis</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg bg-white hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-brand-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Events <span className="text-brand-pink">We Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              From intimate workshops to large-scale international conferences, we provide interpretation 
              services for events of all sizes and formats.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {eventTypes.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-brand-pink flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              How Our Conference <span className="text-brand-pink">Interpretation Works</span>
            </h2>
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-pink text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Consultation</h3>
                    <p className="text-muted-foreground">
                      We discuss your event details—size, format, languages needed, and any specialized terminology or industry-specific requirements.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-pink text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Customized Plan</h3>
                    <p className="text-muted-foreground">
                      We create a tailored interpretation plan that includes the right type of interpretation, equipment needs, and qualified interpreters for your industry.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-pink text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Seamless Execution</h3>
                    <p className="text-muted-foreground">
                      Our interpreters arrive prepared with any materials you've provided, professional equipment is set up, and interpretation happens in real-time throughout your event.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-pink text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make Your Conference Accessible to All?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss your conference interpretation needs and create a solution that ensures every attendee is heard and understood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-brand-pink hover:bg-white/90">
                  Get a Quote
                </Button>
              </Link>
              <a href="tel:8154641423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Call (815) 464-1423
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ConferenceInterpreting;
