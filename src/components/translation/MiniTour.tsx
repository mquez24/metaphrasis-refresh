import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const MiniTour = () => {
  const workflow = [
    {
      step: 1,
      title: "Intake",
      userAction: "Submit document via secure portal",
      systemResponse: "Automated file validation & routing",
      artifact: "Project ID + confirmation email",
      guardrail: "Encryption at rest & in transit"
    },
    {
      step: 2,
      title: "Approval & Assignment",
      userAction: "Confirm language pair, deadline, certification need",
      systemResponse: "Word count, glossary check, rate quote, and match to certified linguist",
      artifact: "Detailed quote with SLA + Translator credentials",
      guardrail: "NDA + conflict-of-interest check"
    },
    {
      step: 3,
      title: "Delivery",
      userAction: "Download final file",
      systemResponse: "Secure delivery with certificate of translation",
      artifact: "Translated document + certificate",
      guardrail: "Retention policy: 7 years for regulated docs"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            How We <span className="text-brand-teal">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent workflows designed for compliance, quality, and speed.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {workflow.map((item) => (
            <Card key={item.step} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">You:</p>
                      <p>{item.userAction}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">We:</p>
                      <p>{item.systemResponse}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium">Artifact:</span> {item.artifact} · 
                      <span className="font-medium ml-2">Guardrail:</span> {item.guardrail}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniTour;
