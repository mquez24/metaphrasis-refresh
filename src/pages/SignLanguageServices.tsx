import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hand, CheckCircle, Users, Video, Building2, GraduationCap, Heart, Scale, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SignLanguageServices = () => {
  const scenarios = [
    "Medical appointments and healthcare consultations",
    "Legal proceedings, depositions, and court hearings",
    "Business meetings and corporate events",
    "Educational settings and parent-teacher conferences",
    "Job interviews and workplace training",
    "Government services and public meetings",
    "Conferences and seminars",
    "Community events and social services"
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Certified Interpreters",
      description: "All our ASL interpreters are professionally trained and certified with deep expertise in American Sign Language nuances."
    },
    {
      icon: Users,
      title: "Cultural Competence",
      description: "Understanding goes beyond signs—our interpreters bring cultural awareness and sensitivity to every interaction."
    },
    {
      icon: Video,
      title: "Flexible Delivery",
      description: "Choose from on-site, video remote, or hybrid ASL interpretation based on your specific needs."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Professional, punctual, and prepared—our interpreters ensure seamless communication every time."
    }
  ];

  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient consultations, mental health services, and medical procedures"
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Court proceedings, depositions, attorney-client meetings, and mediations"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Classroom instruction, IEP meetings, campus events, and parent conferences"
    },
    {
      icon: Briefcase,
      title: "Corporate",
      description: "Business meetings, training sessions, HR consultations, and conferences"
    },
    {
      icon: Building2,
      title: "Government",
      description: "Public services, municipal meetings, social services, and community programs"
    }
  ];

  return (
    <>
      <Helmet>
        <title>American Sign Language (ASL) Interpretation Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional ASL interpretation services in Chicago. Certified American Sign Language interpreters for healthcare, legal, education, corporate, and government settings." />
        <link rel="canonical" href="https://metaphrasislcs.com/interpretation-services/sign-language-services/" />
        <meta property="og:title" content="ASL Interpretation Services | Metaphrasis" />
        <meta property="og:description" content="Certified American Sign Language interpreters bridging communication for the Deaf and hard-of-hearing communities." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "American Sign Language Interpretation Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "ASL Interpretation",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-green/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/20 mb-6">
              <Hand className="w-10 h-10 text-brand-green" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              American Sign Language <span className="text-brand-green">(ASL) Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Bridging communication barriers with certified ASL interpreters who ensure every conversation is understood with accuracy and respect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                  Request ASL Services
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

      {/* Importance Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Why ASL Interpretation <span className="text-brand-green">Matters</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For individuals who are Deaf or hard of hearing, American Sign Language is their primary means of communication. 
                In critical settings like medical appointments, legal proceedings, business meetings, and educational environments, 
                having a qualified ASL interpreter present isn't just helpful—it's essential.
              </p>
              <p>
                Missing information during a doctor's diagnosis, a legal consultation, or a business negotiation can have serious 
                consequences. Our certified ASL interpreters ensure that nothing is lost in translation, providing complete access 
                to communication for the Deaf and hard-of-hearing community.
              </p>
              <p>
                At Metaphrasis, we understand that interpretation goes beyond simply translating words into signs. Our interpreters 
                bring cultural competence, professional expertise, and a deep understanding of the nuances of American Sign Language 
                to every assignment.
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
              Why Choose <span className="text-brand-green">Our ASL Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 mb-4">
                    <Icon className="w-8 h-8 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-16 bg-gradient-to-br from-brand-green/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Where We Provide <span className="text-brand-green">ASL Services</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Our certified ASL interpreters are ready to serve in a wide range of settings, ensuring accessibility 
              and clear communication wherever it's needed.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{scenario}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Industries <span className="text-brand-green">We Serve</span>
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
                      <Icon className="w-8 h-8 text-brand-green" />
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

      {/* CTA Section */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Connect with Certified ASL Interpreters?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ensure every conversation is understood. Contact us today to schedule professional ASL interpretation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-brand-green hover:bg-white/90">
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

export default SignLanguageServices;
