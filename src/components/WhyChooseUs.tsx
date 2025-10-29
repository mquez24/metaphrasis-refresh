import { Award, Clock, FileCheck, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Cultural Expertise",
    description: "Native-level nuance for regulated industries. All translators are certified in both source and target languages and bring subject-matter expertise.",
  },
  {
    icon: Clock,
    title: "Over Two Decades of Experience",
    description: "Proven processes with audited quality assurance. ISO-aligned workflows and documented metrics across thousands of projects.",
  },
  {
    icon: FileCheck,
    title: "Certified & Compliant",
    description: "ATA-certified, HIPAA-aware workflows where applicable. Translation certificates available; HIPAA Business Associate Agreements in place.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "Secure remote intake with enterprise-level reliability. Encrypted file transfer, dedicated project manager, and 24/7 rush support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Organizations <span className="font-black">Trust</span> <span className="font-black text-foreground">Metaphrasis</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Organizations across industries trust <span className="font-bold text-foreground">Metaphrasis</span> Language & Cultural Solutions because we deliver more than just words—we deliver understanding. Since 2007, we have grown from a local agency into a global partner helping organizations bridge language and cultural gaps.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
            <div className="p-6 bg-secondary/50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quality + Technology</h3>
              <p className="text-muted-foreground">Merging human linguistic skills with AI for speed and scalability while maintaining accuracy.</p>
            </div>
            <div className="p-6 bg-secondary/50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Proven Operational Excellence</h3>
              <p className="text-muted-foreground">Trusted by healthcare, legal firms, human resources, marketing, and Fortune 500 companies for nearly 20 years.</p>
            </div>
            <div className="p-6 bg-secondary/50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Relationship-Driven Partnerships</h3>
              <p className="text-muted-foreground">Building authentic, long-term client relationships by understanding their mission and values.</p>
            </div>
          </div>
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
