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
              Get in <span className="text-brand-teal">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              We'd love to hear from you — whether you need a quote, language support, or just have a question.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Phone */}
            <a 
              href="tel:+13126609660" 
              className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-brand-teal/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4 group-hover:bg-brand-teal/20 transition-all duration-300">
                <Phone className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-muted-foreground group-hover:text-brand-teal transition-colors">
                (312) 660-9660
              </p>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@metaphrasislcs.com" 
              className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-brand-teal/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4 group-hover:bg-brand-teal/20 transition-all duration-300">
                <Mail className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground group-hover:text-brand-teal transition-colors break-all">
                info@metaphrasislcs.com
              </p>
            </a>

            {/* Address */}
            <a 
              href="https://maps.google.com/?q=130+E+Randolph+St,+Chicago,+IL+60601" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-brand-teal/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4 group-hover:bg-brand-teal/20 transition-all duration-300">
                <MapPin className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Office</h3>
              <p className="text-muted-foreground group-hover:text-brand-teal transition-colors">
                130 E Randolph St<br />
                Chicago, IL 60601
              </p>
            </a>

            {/* Business Hours */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon - Fri: 8am - 6pm<br />
                Sat - Sun: Closed
              </p>
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

      {/* Quote CTA Section */}
      <section className="py-16 bg-brand-teal/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need expert language support?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Get a customized quote for your translation, interpretation, or accessibility needs.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white"
              asChild
            >
              <a href="https://wkf.ms/47CpWLq" target="_blank" rel="noopener noreferrer">
                Request a Quote
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
