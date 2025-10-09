import { Award, Clock, FileCheck, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Cultural Expertise",
    description: "Our translators and interpreters understand cultural nuances that go beyond literal translation.",
  },
  {
    icon: Clock,
    title: "Over a Decade of Experience",
    description: "Trusted by organizations nationwide for consistent, high-quality language services.",
  },
  {
    icon: FileCheck,
    title: "Certified & Compliant",
    description: "All services meet industry standards including HIPAA, ATA certification, and legal compliance.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "From Chicago to coast-to-coast, we deliver on-site and remote services wherever you need us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Organizations Trust <span className="text-brand-teal">Metaphrasis</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every organization communicates with people who speak, listen, and understand differently. 
            At Metaphrasis, we make those conversations possible through certified, culturally aware 
            translators and interpreters who deliver more than words — they deliver understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal/10 mb-4">
                  <Icon className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
