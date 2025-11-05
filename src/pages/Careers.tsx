import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Heart, TrendingUp, Briefcase } from "lucide-react";
import heroImage from "@/assets/careers-hero-banner.jpg";

const Careers = () => {
  const benefits = [
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "Join a diverse team that values every voice and perspective.",
    },
    {
      icon: Heart,
      title: "Meaningful Work",
      description: "Make a real difference by helping people communicate and connect.",
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Develop your skills with ongoing training and career advancement opportunities.",
    },
    {
      icon: Briefcase,
      title: "Flexible Opportunities",
      description: "Work remotely or on-site with schedules that fit your lifestyle.",
    },
  ];

  const openPositions = [
    {
      title: "Certified Medical Interpreter",
      type: "Full-time / Part-time",
      location: "Remote / On-site",
      description: "Provide accurate interpretation services in healthcare settings for patients with limited English proficiency.",
    },
    {
      title: "Legal Interpreter",
      type: "Contract",
      location: "Chicago, IL",
      description: "Support legal proceedings with precise interpretation in courtrooms, depositions, and client meetings.",
    },
    {
      title: "Certified Translator",
      type: "Freelance",
      location: "Remote",
      description: "Translate documents across various industries including legal, medical, technical, and business content.",
    },
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Chicago, IL",
      description: "Coordinate translation and interpretation projects, manage client relationships, and ensure quality delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/85 to-brand-teal/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in">
              Be part of a mission to connect people across languages and cultures.
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in">
              At Metaphrasis, we're more than just a language services company — we're a community of passionate professionals committed to making communication accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits of joining the Metaphrasis team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-background rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-border hover:border-brand-teal/30"
              >
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-300">
                      <benefit.icon className="w-7 h-7 text-brand-teal group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore current opportunities to join our growing team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-teal transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-sm px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal font-medium">
                        {position.type}
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                        {position.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                  <Button 
                    className="md:self-start" 
                    asChild
                  >
                    <a href="https://wkf.ms/47CpWLq" target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-teal/90">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't see a position that fits? We're always looking for talented interpreters and translators. Send us your resume and let's connect.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-teal hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:careers@metaphrasislcs.com">
                Send Your Resume
              </a>
            </Button>
            <p className="text-white/90 text-sm mt-6">
              <a href="mailto:careers@metaphrasislcs.com" className="hover:underline">careers@metaphrasislcs.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
