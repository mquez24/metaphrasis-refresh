import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Metaphrasis helped our hospital better connect with patients in over 10 languages — their interpreters make every patient feel seen.",
      author: "Director of Patient Services",
      organization: "Chicago Hospital",
    },
    {
      quote: "Their team made our employee training materials multilingual without losing tone or clarity. The cultural nuances were perfectly preserved.",
      author: "HR Director",
      organization: "Summit Retail",
    },
    {
      quote: "Working with Metaphrasis has transformed how we serve our diverse community. Their interpreters are professional, certified, and truly understand our mission.",
      author: "Program Director",
      organization: "Civic Transit Authority",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proof in <span className="text-brand-teal">Partnerships</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-brand-coral mb-4" />
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
