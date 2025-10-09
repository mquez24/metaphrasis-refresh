import { Linkedin } from "lucide-react";
import patternSmall from "@/assets/pattern-small.jpg";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">Metaphrasis</h3>
            <p className="text-lg font-medium text-brand-teal mb-4">
              Everyone Deserves to Be Understood
            </p>
            <p className="text-muted-foreground">
              Professional translation and interpretation services that bridge 
              languages, cultures, and communities.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-brand-teal transition-colors">Translation</a></li>
              <li><a href="#services" className="hover:text-brand-teal transition-colors">Interpretation</a></li>
              <li><a href="#services" className="hover:text-brand-teal transition-colors">ASL Services</a></li>
              <li><a href="#industries" className="hover:text-brand-teal transition-colors">Industries</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-brand-teal transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                123 W Madison Street, Suite 500, Chicago, IL 60602
              </p>
              <p className="text-sm text-muted-foreground">
                info@metaphrasis.com | (312) 555-0100
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <span>WBENC Certified</span>
            <span>•</span>
            <span>Women-Owned</span>
            <span>•</span>
            <span>ATA Certified</span>
            <span>•</span>
            <span>HIPAA Compliant</span>
            <span>•</span>
            <span>NGLCC</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Metaphrasis Language & Cultural Solutions. All rights reserved.</p>
        </div>
      </div>

      {/* Pattern Strip */}
      <div className="h-2 w-full overflow-hidden">
        <img
          src={patternSmall}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
      </div>
    </footer>
  );
};

export default Footer;
