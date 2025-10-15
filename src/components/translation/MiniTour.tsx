import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const MiniTour = () => {
  const regulatedWorkflow = [
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
      title: "Scoping",
      userAction: "Confirm language pair, deadline, certification need",
      systemResponse: "Word count, glossary check, rate quote",
      artifact: "Detailed quote with SLA",
      guardrail: "Rush disclosure if <48h"
    },
    {
      step: 3,
      title: "Assignment",
      userAction: "Approve quote",
      systemResponse: "Match to certified linguist with subject expertise",
      artifact: "Translator credentials shared",
      guardrail: "NDA + conflict-of-interest check"
    },
    {
      step: 4,
      title: "QA + Back-Translation",
      userAction: "Track progress in portal",
      systemResponse: "Second linguist reviews; back-translation if requested",
      artifact: "QA report",
      guardrail: "Terminology consistency verified"
    },
    {
      step: 5,
      title: "Delivery",
      userAction: "Download final file",
      systemResponse: "Secure delivery with certificate of translation",
      artifact: "Translated document + certificate",
      guardrail: "Retention policy: 7 years for regulated docs"
    },
  ];

  const webWorkflow = [
    {
      step: 1,
      title: "Content Audit",
      userAction: "Provide sitemap or CMS access",
      systemResponse: "Extract page count, word count, content types",
      artifact: "Audit report",
      guardrail: "Identify dynamic vs. static content"
    },
    {
      step: 2,
      title: "String Extraction",
      userAction: "Approve extraction method (API, export, manual)",
      systemResponse: "Generate translation-ready files (JSON, XML, etc.)",
      artifact: "Source strings + context notes",
      guardrail: "Preserve placeholders & variables"
    },
    {
      step: 3,
      title: "Translation + Glossary Lock",
      userAction: "Review key terms & brand voice guide",
      systemResponse: "Apply glossary; translate with CAT tool memory",
      artifact: "Translated strings",
      guardrail: "100% term consistency across pages"
    },
    {
      step: 4,
      title: "Linguistic QA in Staging",
      userAction: "Provide staging environment access",
      systemResponse: "Test all strings in UI context; check truncation",
      artifact: "QA pass/fail report",
      guardrail: "Browser & device testing"
    },
    {
      step: 5,
      title: "SEO Checks + Deploy",
      userAction: "Review hreflang tags & meta descriptions",
      systemResponse: "Validate SEO tags; assist with CMS integration",
      artifact: "Live multilingual site",
      guardrail: "Search console monitoring post-launch"
    },
  ];

  const WorkflowSteps = ({ workflow, title }: { workflow: typeof regulatedWorkflow; title: string }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
      <div className="space-y-4">
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
  );

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

        <div className="max-w-5xl mx-auto">
          <WorkflowSteps workflow={regulatedWorkflow} title="Regulated Documents (Healthcare/Legal)" />
          <WorkflowSteps workflow={webWorkflow} title="Web Content Localization" />
        </div>
      </div>
    </section>
  );
};

export default MiniTour;
