const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Metaphrasis</h3>
            <p className="text-sm text-muted-foreground">
              Professional translation and interpretation services connecting
              people across languages and cultures.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#translation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Translation Services
                </a>
              </li>
              <li>
                <a href="#interpretation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interpretation Services
                </a>
              </li>
              <li>
                <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">
                  Industry Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#login" className="text-muted-foreground hover:text-foreground transition-colors">
                  Client Login
                </a>
              </li>
              <li>
                <a href="#payment" className="text-muted-foreground hover:text-foreground transition-colors">
                  Make a Payment
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Metaphrasis Language and Cultural Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
