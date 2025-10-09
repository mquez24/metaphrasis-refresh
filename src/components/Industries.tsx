import { Building2, Scale, Briefcase, GraduationCap, Landmark, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    { icon: Building2, title: "Healthcare", color: "text-brand-teal" },
    { icon: Scale, title: "Legal", color: "text-brand-coral" },
    { icon: Briefcase, title: "Corporate & Business", color: "text-brand-yellow" },
    { icon: GraduationCap, title: "Education", color: "text-brand-green" },
    { icon: Landmark, title: "Government & Nonprofit", color: "text-brand-pink" },
    { icon: Calendar, title: "Events & Conferences", color: "text-brand-blue" },
  ];

  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expertise Across <span className="text-brand-teal">Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From healthcare to legal and corporate sectors, Metaphrasis provides industry-specific 
            expertise that ensures accuracy, compliance, and cultural relevance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 ${industry.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{industry.title}</h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
