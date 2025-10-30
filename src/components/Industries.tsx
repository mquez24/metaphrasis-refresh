import { Stethoscope, Scale, Briefcase, GraduationCap, Landmark, Calendar, Heart, Megaphone, Factory } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    { icon: Stethoscope, title: "Healthcare", color: "text-brand-green", anchor: "healthcare" },
    { icon: Scale, title: "Legal", color: "text-brand-teal", anchor: "legal" },
    { icon: Briefcase, title: "Corporate", color: "text-brand-blue", anchor: "corporate" },
    { icon: GraduationCap, title: "Education", color: "text-brand-coral", anchor: "education" },
    { icon: Landmark, title: "Government", color: "text-brand-yellow", anchor: "government" },
    { icon: Calendar, title: "Events & Conferences", color: "text-brand-pink", anchor: "" },
    { icon: Heart, title: "Non-Profit", color: "text-brand-green", anchor: "" },
    { icon: Megaphone, title: "Digital Marketing + Public Relations", color: "text-brand-teal", anchor: "" },
    { icon: Factory, title: "Manufacturing", color: "text-brand-blue", anchor: "" },
  ];

  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expertise Across <span className="text-brand-teal">Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From healthcare to legal to Fortune 500 companies, Metaphrasis provides industry-specific expertise that ensures accuracy, compliance, and cultural relevance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const href = industry.anchor ? `/industries#${industry.anchor}` : "/industries";
            return (
              <Link key={index} to={href}>
                <Card
                  className="p-8 text-center hover:shadow-lg transition-all cursor-pointer animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 ${industry.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{industry.title}</h3>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
