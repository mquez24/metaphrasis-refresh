import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

const QuoteForm = () => {
  const [certification, setCertification] = useState<string>("");
  const [showRushWarning, setShowRushWarning] = useState(false);

  const industries = [
    "Healthcare",
    "Legal",
    "Government",
    "Education",
    "Corporate",
    "Nonprofit",
    "Other"
  ];

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const deadline = new Date(e.target.value);
    const now = new Date();
    const hoursDiff = (deadline.getTime() - now.getTime()) / (1000 * 60 * 60);
    setShowRushWarning(hoursDiff < 48);
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              Request a <span className="text-brand-teal">Quote</span>
            </h2>
            <p className="text-muted-foreground">
              Get a detailed quote for your translation project. All information is confidential.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" type="tel" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="company">Company/Organization *</Label>
                  <Input id="company" required className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry.toLowerCase()}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="source-lang">Source Language *</Label>
                  <Input id="source-lang" required className="mt-1" placeholder="e.g., English" />
                </div>
                <div>
                  <Label htmlFor="target-lang">Target Language(s) *</Label>
                  <Input id="target-lang" required className="mt-1" placeholder="e.g., Spanish, Mandarin" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="word-count">Word Count / Page Count</Label>
                  <Input id="word-count" className="mt-1" placeholder="e.g., 5000 words or 10 pages" />
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" onChange={handleDeadlineChange} className="mt-1" />
                  {showRushWarning && (
                    <div className="flex items-start gap-2 mt-2 text-sm text-amber-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>Rush fees may apply for deadlines under 48 hours</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="certification">Certificate of Translation Needed? *</Label>
                <Select onValueChange={setCertification} required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="unsure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
                {certification === "yes" && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Certificate will include translator credentials and attestation of accuracy
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="file-upload">Upload Document (optional)</Label>
                <Input id="file-upload" type="file" accept=".pdf,.docx,.xlsx,.pptx,.zip" className="mt-1" />
                <p className="text-xs text-muted-foreground mt-1">
                  Accepted: PDF, DOCX, XLSX, PPTX, ZIP · Max 100MB
                </p>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  rows={4} 
                  className="mt-1" 
                  placeholder="Any specific requirements, terminology, or context we should know?"
                />
              </div>

              <div className="text-sm text-muted-foreground border-t pt-4">
                <p className="mb-2">
                  <strong>Confidentiality:</strong> All documents and information are handled under strict confidentiality. 
                  We can provide an NDA upon request.
                </p>
                <p>
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-brand-teal hover:underline">Privacy Policy</a>.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Quote Request
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                You'll receive a detailed quote within 2 business hours. Ticket ID will be sent to your email.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
