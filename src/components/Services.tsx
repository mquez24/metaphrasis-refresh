import { Card } from "@/components/ui/card";
import { FileText, Globe, Mic, Volume2, Eye, Users, Phone, Video, Hand, Presentation, Stethoscope } from "lucide-react";

const Services = () => {
  const translationServices = [
    { icon: FileText, title: "Document Translation", color: "text-brand-teal" },
    { icon: Globe, title: "Website Translation", color: "text-brand-coral" },
    { icon: Mic, title: "Audio Transcription", color: "text-brand-yellow" },
    { icon: Volume2, title: "Voice Over", color: "text-brand-green" },
    { icon: Eye, title: "Braille", color: "text-brand-pink" },
  ];

  const interpretationServices = [
    { icon: Users, title: "On-Site Interpreting", color: "text-brand-teal" },
    { icon: Phone, title: "Over-the-Phone", color: "text-brand-coral" },
    { icon: Video, title: "Video Remote", color: "text-brand-yellow" },
    { icon: Hand, title: "American Sign Language", color: "text-brand-green" },
    { icon: Presentation, title: "Conference & Events", color: "text-brand-pink" },
    { icon: Stethoscope, title: "Medical Interpreting", color: "text-brand-blue" },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Language Solutions{" "}
            <span className="text-brand-teal">Tailored to You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Metaphrasis provides certified translation and interpretation services that help 
            organizations communicate clearly across languages and cultures. From document and 
            website translation to on-site and video interpreting, our team delivers accuracy, 
            confidentiality, and cultural understanding every time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Translation Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Translation Services</h3>
            <div className="grid gap-4">
              {translationServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${service.color}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-semibold">{service.title}</h4>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Interpretation Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Interpretation Services</h3>
            <div className="grid gap-4">
              {interpretationServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${service.color}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-semibold">{service.title}</h4>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
