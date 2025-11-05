import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-12 text-background/80">
            Let's bridge the language gap together. Contact us today for a free 
            consultation or quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <a href="https://wkf.ms/47CpWLq" target="_blank" rel="noopener noreferrer">
                Request a Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-background bg-background !text-foreground hover:bg-background/80">
              Contact Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-left md:text-center">
            <div className="flex md:flex-col items-start md:items-center gap-3">
              <Mail className="w-6 h-6 text-brand-teal flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-background/70">info@metaphrasislcs.com</p>
              </div>
            </div>

            <div className="flex md:flex-col items-start md:items-center gap-3">
              <Phone className="w-6 h-6 text-brand-coral flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p className="text-sm text-background/70">(815) 464-1423</p>
              </div>
            </div>

            <div className="flex md:flex-col items-start md:items-center gap-3">
              <MapPin className="w-6 h-6 text-brand-yellow flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Location</p>
                <p className="text-sm text-background/70">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
