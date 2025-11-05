import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Video, Clock, Globe, Shield, CheckCircle, Zap, Users, Heart, Monitor, Smartphone } from "lucide-react";

const VideoRemoteInterpreter = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Access",
      description: "Connect with interpreters in seconds via PC, Mac, smartphone, or tablet"
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Round-the-clock access to qualified interpreters whenever you need them"
    },
    {
      icon: Globe,
      title: "200+ Languages",
      description: "Comprehensive language coverage including ASL and rare languages"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Secure, encrypted video calls that meet healthcare privacy standards"
    }
  ];

  const features = [
    {
      icon: Monitor,
      title: "Visual Communication",
      description: "See facial expressions, gestures, and non-verbal cues that add context and meaning"
    },
    {
      icon: Users,
      title: "ASL Interpretation",
      description: "Essential for Deaf and hard-of-hearing individuals who rely on visual sign language"
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Access VRI from desktops, laptops, tablets, or smartphones with one-touch simplicity"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Build trust and rapport through face-to-face connection, even when remote"
    }
  ];

  const useCases = [
    {
      title: "Healthcare Settings",
      description: "Emergency rooms, patient consultations, discharge instructions, mental health sessions, and telehealth appointments where visual communication enhances understanding and empathy."
    },
    {
      title: "Legal Proceedings",
      description: "Depositions, client interviews, and remote court hearings where seeing the interpreter and parties improves accuracy and trust."
    },
    {
      title: "Educational Institutions",
      description: "Virtual IEP meetings, parent-teacher conferences, and online learning support for students and families with limited English proficiency."
    },
    {
      title: "Corporate & Government",
      description: "Remote business meetings, HR consultations, virtual training sessions, and constituent services requiring professional interpretation."
    }
  ];

  const whenToUse = [
    {
      icon: CheckCircle,
      title: "When Visual Cues Matter",
      description: "Medical exams, demonstrations, or situations requiring non-verbal communication"
    },
    {
      icon: CheckCircle,
      title: "For ASL Services",
      description: "Sign language interpretation requires visual connection between interpreter and participants"
    },
    {
      icon: CheckCircle,
      title: "When On-Site Isn't Possible",
      description: "Budget constraints, scheduling conflicts, or immediate needs make in-person interpretation impractical"
    },
    {
      icon: CheckCircle,
      title: "For Remote Consultations",
      description: "Telehealth, virtual meetings, or distributed teams benefit from VRI's flexibility"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Video Remote Interpretation Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional video remote interpretation (VRI) services in 200+ languages including ASL. Face-to-face connection via secure video for visual communication needs." />
        <link rel="canonical" href="https://metaphrasislcs.com/interpretation-services/video-remote-interpretation" />
        <meta property="og:title" content="Video Remote Interpretation Services | Metaphrasis" />
        <meta property="og:description" content="Connect face-to-face with certified interpreters via secure video. 24/7 VRI services for healthcare, legal, education, and business needs." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Video Remote Interpretation Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Video Remote Interpretation",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-yellow/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-yellow/10 mb-6">
              <Video className="w-10 h-10 text-brand-yellow" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Video Remote <span className="text-brand-yellow">Interpretation Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Face-to-face connection via secure video when visual communication matters most.
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
                When an interpreter is needed, an in-person interpreter is generally preferred. However, an in-person 
                interpreter may be unavailable due to scheduling or budget. If you need an interpreter right away, 
                <strong> video remote interpretation (VRI)</strong> is a great option.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Metaphrasis, we provide video remote interpreting services throughout the U.S. With these services, 
                you can instantly connect with a remote interpreter who can help you provide service and care to those 
                with limited English proficiency as well as those who are Deaf or hard of hearing. Our remote interpreters 
                pick up on non-verbal cues and consider context and meaning to provide accurate interpretation.
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
              Why Choose <span className="text-brand-yellow">VRI?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The best of both worlds—instant access with face-to-face connection
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/10 mb-4">
                    <Icon className="w-8 h-8 text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              On-Demand <span className="text-brand-yellow">VRI Interpreting</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              One-touch access to trained interpreters directly on your device
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-yellow" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* When to Use VRI */}
      <section className="py-16 bg-gradient-to-br from-brand-yellow/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              When to Use <span className="text-brand-yellow">VRI</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              VRI is ideal when visual communication enhances understanding and connection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whenToUse.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Industries We <span className="text-brand-yellow">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              VRI serves organizations across multiple sectors requiring professional interpretation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-brand-yellow">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-brand-yellow">Professional Standards</span> You Can Trust
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Certified Interpreters</h3>
                  <p className="text-sm text-muted-foreground">Vetted, trained, and certified professionals in every language</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Secure Technology</h3>
                  <p className="text-sm text-muted-foreground">HIPAA-compliant, encrypted video platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Cultural Competence</h3>
                  <p className="text-sm text-muted-foreground">Understanding context, tone, and cultural nuances</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">Regular monitoring and performance evaluations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready for face-to-face remote interpretation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how VRI can support your organization's communication needs
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 bg-white text-brand-yellow hover:bg-white/90 font-medium transition-colors text-lg"
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

export default VideoRemoteInterpreter;
