import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let's bridge the language gap together. Contact us today for a free
            consultation and quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Schedule a Call
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <a
                  href="mailto:info@metaphrasislcs.com"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  info@metaphrasislcs.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <a
                  href="tel:+1234567890"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  (312) 555-0123
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="opacity-90">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
