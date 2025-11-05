import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Phone, Video, Hand, Briefcase, GraduationCap, Building2, Heart, Scale, Clock, Award, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const InterpretationServices = () => {
  const services = [
    {
      icon: Users,
      title: "On-Site Interpretation",
      description: "Professional interpreters at your location for meetings, consultations, and events.",
      color: "text-brand-teal"
    },
    {
      icon: Phone,
      title: "Over the Phone Interpreter",
      description: "Instant language access 24/7 with qualified interpreters on demand.",
      color: "text-brand-green"
    },
    {
      icon: Video,
      title: "Video Remote Interpretation",
      description: "Face-to-face connection via secure video for visual communication needs.",
      color: "text-brand-yellow"
    },
    {
      icon: Hand,
      title: "American Sign Language (ASL) Services",
      description: "Certified ASL interpreters for Deaf and hard-of-hearing communities.",
      color: "text-brand-green"
    },
    {
      icon: Briefcase,
      title: "Conference Interpretation",
      description: "Simultaneous and consecutive interpretation for multilingual conferences and seminars.",
      color: "text-brand-pink"
    },
  ];

  const trustPoints = [
    {
      icon: Clock,
      title: "24/7 Interpreter Access",
      description: "Round-the-clock availability for urgent communication needs"
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "All interpreters are vetted, trained, and certified in their languages"
    },
    {
      icon: Globe,
      title: "Industry Expertise",
      description: "Specialized knowledge in healthcare, legal, corporate, and government settings"
    },
    {
      icon: Shield,
      title: "Cultural Competence",
      description: "Deep understanding of cultural nuances and context beyond literal translation"
    },
  ];

  const industries = [
    {
      icon: GraduationCap,
      title: "Education & Schools",
      description: "Parent-teacher conferences, IEP meetings, student support"
    },
    {
      icon: Building2,
      title: "Government",
      description: "Public services, constituent meetings, municipal programs"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient consultations, discharge instructions, mental health services"
    },
    {
      icon: Briefcase,
      title: "Corporate",
      description: "Business negotiations, training sessions, HR consultations"
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Depositions, court proceedings, client interviews, mediations"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Interpretation Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional interpretation services in Chicago: on-site, telephone, video remote, ASL, and conference interpretation. Certified interpreters available 24/7." />
        <link rel="canonical" href="https://metaphrasislcs.com/interpretation-services/" />
        <meta property="og:title" content="Interpretation Services Chicago | Metaphrasis" />
        <meta property="og:description" content="Bridging conversations in real time with professional interpretation services. On-site, phone, video, and ASL interpreters available." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Interpretation Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Interpretation",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-coral/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Bridging Conversations in <span className="text-brand-teal">Real Time</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We bring clarity and connection to every spoken moment.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Metaphrasis provides expert interpretation services that go beyond words—delivering cultural understanding, 
              professionalism, and accessibility in every interaction. Whether you need on-site, telephone, video remote, 
              ASL, or conference interpretation, our certified interpreters ensure every conversation is understood with 
              precision and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-brand-coral">Interpretation Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal/10 mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  {index === 0 ? (
                    <Link to="/interpretation-services/on-site-interpreting" className="text-brand-teal hover:text-brand-teal/80 transition-colors font-medium inline-flex items-center group">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  ) : index === 1 ? (
                    <Link to="/interpretation-services/over-phone-interpreter" className="text-brand-green hover:text-brand-green/80 transition-colors font-medium inline-flex items-center group">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  ) : index === 2 ? (
                    <Link to="/interpretation-services/video-remote-interpretation" className="text-brand-yellow hover:text-brand-yellow/80 transition-colors font-medium inline-flex items-center group">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  ) : index === 3 ? (
                    <Link to="/interpretation-services/sign-language-services" className="text-brand-green hover:text-brand-green/80 transition-colors font-medium inline-flex items-center group">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  ) : index === 4 ? (
                    <Link to="/interpretation-services/conference-interpreting" className="text-brand-pink hover:text-brand-pink/80 transition-colors font-medium inline-flex items-center group">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  ) : (
                    <a href="#contact" className="text-brand-teal hover:text-brand-teal/80 transition-colors font-medium inline-flex items-center group">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Section */}
      <section className="py-16 bg-gradient-to-br from-brand-teal/5 to-brand-coral/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Why Organizations <span className="text-brand-teal">Trust Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
                    <Icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
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
              Industries <span className="text-brand-coral">We Serve</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground">{industry.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to ensure every conversation is understood?
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 bg-white text-primary hover:bg-white/90 font-medium transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InterpretationServices;
