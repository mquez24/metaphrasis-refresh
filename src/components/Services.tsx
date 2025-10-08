import { FileText, Users, Globe, BookOpen, Briefcase, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "On-site Interpretation",
      description: "Professional interpreters at your location for meetings, conferences, and events.",
      color: "text-brand-teal",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Telephone Interpretation Services",
      description: "Immediate language support via phone for quick and efficient communication.",
      color: "text-brand-coral",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Video Remote Interpretation",
      description: "Real-time interpretation through secure video connections from anywhere.",
      color: "text-brand-yellow",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "American Sign Language Services",
      description: "Certified ASL interpreters for deaf and hard-of-hearing communities.",
      color: "text-brand-green",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Conference Interpretation",
      description: "Simultaneous and consecutive interpretation for large-scale international events.",
      color: "text-brand-pink",
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
