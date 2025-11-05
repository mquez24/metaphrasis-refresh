import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Phone, Clock, Globe, Shield, CheckCircle, Zap, Users, Building2 } from "lucide-react";

const OverPhoneInterpreter = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access qualified interpreters any time, day or night, for urgent communication needs"
    },
    {
      icon: Zap,
      title: "Instant Connection",
      description: "Connect with an interpreter in seconds, not minutes—perfect for time-sensitive situations"
    },
    {
      icon: Globe,
      title: "200+ Languages",
      description: "From common to rare languages, we have the linguistic coverage you need"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Secure, confidential calls that meet healthcare privacy standards"
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Healthcare Facilities",
      description: "Patient intake, discharge instructions, telehealth appointments, and emergency room communication"
    },
    {
      icon: Users,
      title: "Customer Service Centers",
      description: "Support multilingual customers instantly without wait times or callbacks"
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "911 dispatch, crisis hotlines, and urgent community assistance"
    },
    {
      icon: CheckCircle,
      title: "Business & Government",
      description: "HR consultations, benefits enrollment, constituent services, and hotlines"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Dial In",
      description: "Call our dedicated phone line when you need interpretation support"
    },
    {
      step: "2",
      title: "Select Language",
      description: "Choose from 200+ languages using our automated system"
    },
    {
      step: "3",
      title: "Connect Instantly",
      description: "A certified interpreter joins your call within seconds"
    },
    {
      step: "4",
      title: "Interpret with Confidence",
      description: "Communicate clearly with professional interpretation throughout your conversation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Over the Phone Interpreter Services | Metaphrasis LCS</title>
        <meta name="description" content="24/7 telephone interpretation services in 200+ languages. Instant access to certified interpreters for healthcare, business, and emergency situations." />
        <link rel="canonical" href="https://metaphrasislcs.com/interpretation-services/over-phone-interpreter" />
        <meta property="og:title" content="Over the Phone Interpreter Services | Metaphrasis" />
        <meta property="og:description" content="Connect with qualified interpreters instantly. 24/7 availability in 200+ languages for healthcare, business, and emergency needs." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Over the Phone Interpreter Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Telephone Interpretation",
            "areaServed": "United States",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceType": "Telephone"
            }
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-green/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 mb-6">
              <Phone className="w-10 h-10 text-brand-green" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Over the Phone <span className="text-brand-green">Interpreter Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Instant language access when you need it most. Connect with certified interpreters 24/7 in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When time matters and language barriers can't wait, <strong>Over the Phone Interpretation (OPI)</strong> delivers 
                immediate access to professional interpreters in 200+ languages. No scheduling required. No delays. Just instant, 
                reliable communication whenever you need it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a healthcare provider treating a patient who speaks limited English, a customer service representative 
                helping a multilingual caller, or a government agency serving diverse communities, OPI ensures every conversation is 
                clear, accurate, and culturally appropriate.
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
              Why Choose <span className="text-brand-green">OPI?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Fast, secure, and always available—OPI is interpretation designed for the pace of modern life.
            </p>
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

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-brand-green/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              How <span className="text-brand-green">It Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting started with OPI is simple and takes less than a minute
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green text-white text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Who Uses <span className="text-brand-green">OPI?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From emergency rooms to customer service centers, OPI serves organizations that need instant language access
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-green" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-brand-green">Professional Standards</span> You Can Trust
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Certified Interpreters</h3>
                  <p className="text-sm text-muted-foreground">Every interpreter is vetted, trained, and certified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Cultural Competence</h3>
                  <p className="text-sm text-muted-foreground">Understanding context beyond literal words</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">Regular monitoring and performance reviews</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Secure & Confidential</h3>
                  <p className="text-sm text-muted-foreground">HIPAA-compliant infrastructure for sensitive calls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready for instant language access?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how OPI can support your organization's communication needs
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 bg-white text-brand-green hover:bg-white/90 font-medium transition-colors text-lg"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OverPhoneInterpreter;
