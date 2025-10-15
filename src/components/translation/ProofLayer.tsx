import { Card } from "@/components/ui/card";
import { Clock, CheckCircle2, TrendingDown, Award } from "lucide-react";

const ProofLayer = () => {
  const metrics = [
    {
      icon: Clock,
      stat: "<24h",
      label: "Average kickoff for rush projects",
      methodology: "Measured from quote approval to translator assignment, Q3 2024",
      color: "text-brand-teal"
    },
    {
      icon: CheckCircle2,
      stat: ">98.5%",
      label: "QA pass on first delivery",
      methodology: "Internal review pass rate across 2,500+ projects, 2024",
      color: "text-brand-green"
    },
    {
      icon: Award,
      stat: "SLA bands",
      label: "24h rush / 3-day priority / 5-day standard",
      methodology: "On-time delivery tracked per service tier",
      color: "text-brand-coral"
    },
    {
      icon: TrendingDown,
      stat: "67% reduction",
      label: "Error rate vs. prior vendor",
      methodology: "Hospital system case study, post-implementation audit",
      color: "text-brand-yellow"
    },
  ];

  const cases = [
    {
      client: "Regional Hospital",
      baseline: "42% of patient discharge instructions required rework due to translation errors",
      after: "98% first-pass accuracy; patient complaints re: language access dropped 81%",
      timeline: "6 months post-implementation"
    },
    {
      client: "City Transit Authority",
      baseline: "Public notices delayed 5-7 days pending translation; complaints from non-English speakers",
      after: "24h turnaround on public safety notices; 3-day standard for routine materials; zero complaints",
      timeline: "12 months post-implementation"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Proven <span className="text-brand-teal">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We measure what matters—speed, accuracy, and client outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`w-10 h-10 mx-auto mb-4 ${metric.color}`} />
                <div className="text-3xl font-bold mb-2">{metric.stat}</div>
                <div className="text-sm font-medium mb-3">{metric.label}</div>
                <div className="text-xs text-muted-foreground italic">{metric.methodology}</div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((case_, index) => (
              <Card key={index} className="p-6">
                <h4 className="text-lg font-bold mb-4 text-brand-teal">{case_.client}</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Baseline:</span>
                    <p className="text-muted-foreground mt-1">{case_.baseline}</p>
                  </div>
                  <div>
                    <span className="font-medium">After Metaphrasis:</span>
                    <p className="text-muted-foreground mt-1">{case_.after}</p>
                  </div>
                  <div className="text-xs text-muted-foreground italic pt-2 border-t">
                    {case_.timeline}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofLayer;
