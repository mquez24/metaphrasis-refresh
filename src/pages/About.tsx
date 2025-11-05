import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Heart, Shield, Globe } from "lucide-react";
import heroBanner from "@/assets/about-hero-banner.jpg";
import teamCollaboration from "@/assets/about-team-collaboration.jpg";
import communityPhoto from "@/assets/about-community.jpg";
import timelinePhoto from "@/assets/about-timeline-photo.jpg";

const About = () => {
  const values = [
    {
      icon: MessageCircle,
      title: "Clarity",
      description: "We communicate with precision and purpose — ensuring every message is clearly understood in any language.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy, honoring the diverse experiences and voices of the people we serve.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We're committed to honesty and reliability, delivering accurate results our partners can trust.",
    },
    {
      icon: Globe,
      title: "Cultural Understanding",
      description: "We go beyond words to bridge cultures — translating meaning, context, and connection.",
    },
  ];

  const timeline = [
    {
      year: "2007",
      title: "Founded in Chicago",
      description: "Metaphrasis began with a mission to bridge language barriers and make communication accessible for all.",
    },
    {
      year: "2012",
      title: "Expansion into Healthcare & Government",
      description: "As demand grew, Metaphrasis expanded services to key regulated sectors, helping public and private organizations communicate more effectively.",
    },
    {
      year: "2018",
      title: "Certified as Women- and Minority-Owned",
      description: "Recognition as a certified women- and minority-owned business strengthened our commitment to diversity and representation.",
    },
    {
      year: "Today",
      title: "Trusted Nationwide Partner",
      description: "Metaphrasis continues to serve partners across industries, combining human expertise with technology to deliver precise, people-centered language solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/80 to-brand-teal/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Metaphrasis
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Empowering understanding through language, connection, and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-center">
              At Metaphrasis, our mission is simple — to make communication accessible for everyone. Through high-quality translation and interpretation services, we help businesses, healthcare providers, schools, and government agencies bridge language gaps and build trust with the communities they serve.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4 group-hover:bg-brand-teal/20 transition-colors">
                    <value.icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Story</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-8">
                {timeline.map((milestone, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-brand-teal">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-teal" />
                    <div className="pb-8">
                      <span className="text-2xl font-bold text-brand-teal">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <img 
                  src={timelinePhoto} 
                  alt="Metaphrasis team" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">How We Work</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg md:text-xl leading-relaxed">
                  We combine human expertise with technology to ensure accuracy, cultural nuance, and speed. Every project is managed with care — because at Metaphrasis, we know it's not just about words, it's about people.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src={teamCollaboration} 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners & Community Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Partners & Community</h2>
            
            <div className="mb-12">
              <img 
                src={communityPhoto} 
                alt="Community and partners" 
                className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto h-auto object-cover"
              />
            </div>

            <p className="text-lg text-center leading-relaxed mb-12 max-w-4xl mx-auto">
              We're proud to serve clients across healthcare, education, legal, and corporate sectors — building partnerships rooted in trust, respect, and understanding.
            </p>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-teal mb-2">100+</p>
                <p className="text-muted-foreground">Organizations served nationwide</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-teal mb-2">Trusted Partner</p>
                <p className="text-muted-foreground">Leading healthcare and education providers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-teal mb-2">Since 2007</p>
                <p className="text-muted-foreground">Empowering understanding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-teal/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to make communication accessible for everyone?
            </h2>
            <Button 
              size="lg" 
              className="bg-white text-brand-teal hover:bg-white/90 text-lg px-8 py-6 mb-6"
              asChild
            >
              <a href="https://wkf.ms/47CpWLq" target="_blank" rel="noopener noreferrer">
                Request a Quote
              </a>
            </Button>
            <p className="text-white/90 text-sm">
              <a href="mailto:info@metaphrasislcs.com" className="hover:underline">info@metaphrasislcs.com</a>
              {" | "}
              <a href="tel:8154641423" className="hover:underline">(815) 464-1423</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
