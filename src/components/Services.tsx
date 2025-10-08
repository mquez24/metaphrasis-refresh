import { FileText, Users, Globe, BookOpen, Briefcase, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Translation",
      description: "Accurate translation of legal, medical, technical, and business documents with cultural sensitivity.",
      color: "text-brand-teal",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Interpretation",
      description: "Professional interpreters for meetings, conferences, and events in over 200 languages.",
      color: "text-brand-coral",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Localization",
      description: "Adapt your digital content for global audiences while maintaining brand consistency.",
      color: "text-brand-yellow",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Transcription Services",
      description: "Convert audio and video content into written text with precision and speed.",
      color: "text-brand-green",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate Solutions",
      description: "Comprehensive language services for businesses operating in multilingual environments.",
      color: "text-brand-pink",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Legal & Medical",
      description: "Specialized translation and interpretation for legal proceedings and healthcare settings.",
      color: "text-brand-blue",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional language solutions tailored to your needs. We provide
            comprehensive translation and interpretation services across
            industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
