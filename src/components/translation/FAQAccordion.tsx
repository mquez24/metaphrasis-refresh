import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "Will you work within our CMS/DAM?",
      answer: "Yes. We integrate with major content management systems including WordPress, Drupal, Adobe Experience Manager, and Contentful. For document asset management, we support Box, SharePoint, Google Drive, and custom APIs. We can also provide translation-ready exports if direct integration isn't preferred. Our team will assess your workflow during scoping and recommend the most efficient approach."
    },
    {
      question: "How do you handle security and confidentiality?",
      answer: "All files are encrypted in transit (TLS 1.3) and at rest (AES-256). Access is restricted to assigned translators under signed NDAs. We maintain HIPAA Business Associate Agreements for healthcare clients and can accommodate additional security requirements for government and legal projects. Our retention policy follows industry standards: 7 years for regulated documents, client-specified for others. View our full Security Policy for details."
    },
    {
      question: "Can you guarantee consistency on specialized terminology?",
      answer: "Absolutely. We build custom glossaries and style guides for every client, which are locked into our CAT (computer-assisted translation) tools. This ensures 100% consistency across all documents, languages, and translators. You can review and approve key terms before we begin, and we maintain these assets for all future projects. Our QA process includes automated terminology checks on every delivery."
    },
    {
      question: "What are typical timelines and rush fees?",
      answer: "Standard turnaround is 5 business days for most document projects (up to 5,000 words). Priority service (3 days) is available at a 25% premium. Rush projects under 48 hours incur a 50% premium and are subject to availability—we'll always disclose this upfront. Website translation is scoped per page count and language pairs. Audio transcription averages 1-3 days per hour of audio. We provide exact timelines in your quote and commit to SLAs in writing."
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Frequently Asked <span className="text-brand-teal">Questions</span>
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
