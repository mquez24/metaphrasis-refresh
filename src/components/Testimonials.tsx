import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import wbdcLogo from "@/assets/logos/wbdc.png";
import shrinersLogo from "@/assets/logos/shriners-hospital.png";
import resPublicaLogo from "@/assets/logos/res-publica-testimonial.png";
import alliesLogo from "@/assets/logos/allies-community.png";
import barringtonLogo from "@/assets/logos/barrington-220.png";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Metaphrasis staff members are experts in their field, deliver services on time, and are very flexible to work with.",
      author: "Janice Lopez",
      title: "Managing Director",
      organization: "Women's Business Development Center",
      logo: wbdcLogo,
    },
    {
      quote: "Thank you for the terrific interpreter you provided. Even our visiting guests complimented her clear and accurate work.",
      author: "Kara Miller",
      title: "",
      organization: "Shriners Hospital Chicago",
      logo: shrinersLogo,
    },
    {
      quote: "Knowing our client needs and the diversity of Cook County, we sought out Metaphrasis because we knew we would get high quality translations.",
      author: "Margo O'Hara",
      title: "Vice President",
      organization: "Res Publica Group",
      logo: resPublicaLogo,
    },
    {
      quote: "I cannot thank you enough for being able to provide translations on such short notice. We are very grateful to be partnering with Metaphrasis!",
      author: "Jennie Motto Mesterharm",
      title: "Chief of Staff",
      organization: "Allies for Community Business",
      logo: alliesLogo,
    },
    {
      quote: "It's such a pleasure working with you guys! Thank you for being lifesavers",
      author: "Hector Ontiveros",
      title: "Technology & Innovation Department Coordinator",
      organization: "Barrington 220",
      logo: barringtonLogo,
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.organization}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <Quote className="w-10 h-10 text-brand-coral mb-4" />
                  <p className="text-lg mb-6 italic flex-grow">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    {testimonial.title && (
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    )}
                    <p className="text-sm text-muted-foreground font-medium">
                      {testimonial.organization}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
