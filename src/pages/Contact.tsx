import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: "We'll be in touch soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-teal/10 via-background to-background">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/40 to-brand-teal/20" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              We're here to help with your translation and interpretation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {/* Phone Card */}
            <a 
              href="tel:+18154641423" 
              className="group flex items-center gap-4 p-5 rounded-lg bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 hover:from-brand-teal/10 hover:to-brand-teal/15 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal/30 transition-all duration-300">
                <Phone className="w-5 h-5 text-brand-teal" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-base mb-0.5">Phone</h3>
                <p className="text-sm text-muted-foreground group-hover:text-brand-teal transition-colors">
                  (815) 464-1423
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:info@metaphrasislcs.com" 
              className="group flex items-center gap-4 p-5 rounded-lg bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 hover:from-brand-teal/10 hover:to-brand-teal/15 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal/30 transition-all duration-300">
                <Mail className="w-5 h-5 text-brand-teal" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-base mb-0.5">Email</h3>
                <p className="text-sm text-muted-foreground group-hover:text-brand-teal transition-colors break-all">
                  info@metaphrasislcs.com
                </p>
              </div>
            </a>

            {/* Office Card */}
            <a 
              href="https://maps.google.com/?q=1147+W+Ohio+St+STE+306,+Chicago,+IL+60642" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-lg bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 hover:from-brand-teal/10 hover:to-brand-teal/15 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal/30 transition-all duration-300">
                <MapPin className="w-5 h-5 text-brand-teal" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-base mb-0.5">Office</h3>
                <p className="text-sm text-muted-foreground group-hover:text-brand-teal transition-colors">
                  1147 W Ohio St STE 306<br />
                  Chicago, IL 60642
                </p>
              </div>
            </a>

            {/* Business Hours Card */}
            <div className="flex items-center gap-4 p-5 rounded-lg bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-brand-teal" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-base mb-0.5">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon - Fri: 8am - 6pm<br />
                  Sat - Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-background to-brand-teal/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Send Us a <span className="text-brand-teal">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-2xl shadow-lg">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="border-border focus:border-brand-teal focus:ring-brand-teal"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="border-border focus:border-brand-teal focus:ring-brand-teal"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your organization (optional)"
                  className="border-border focus:border-brand-teal focus:ring-brand-teal"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="border-border focus:border-brand-teal focus:ring-brand-teal resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* E-List CTA Section */}
      <section className="py-16 bg-brand-teal/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our E-List
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Stay connected with the latest updates, insights, and community stories from Metaphrasis.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white"
              asChild
            >
              <a href="https://lp.constantcontactpages.com/su/rhVFBPH/signup" target="_blank" rel="noopener noreferrer">
                Join Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
