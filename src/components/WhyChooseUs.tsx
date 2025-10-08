import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Cultural Expertise",
      description: "Our translators understand context, idioms, and cultural nuances beyond literal translation.",
    },
    {
      title: "Certified Professionals",
      description: "All interpreters and translators are certified and experienced in their specializations.",
    },
    {
      title: "200+ Languages",
      description: "From common languages to rare dialects, we connect you with the right linguistic experts.",
    },
    {
      title: "Quick Turnaround",
      description: "Fast, reliable service without compromising quality or accuracy.",
    },
    {
      title: "Confidential & Secure",
      description: "Your documents and conversations are handled with utmost privacy and security.",
    },
    {
      title: "Competitive Pricing",
      description: "Professional language services at transparent, fair rates.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everyone Deserves to Be{" "}
              <span className="text-brand-coral">Understood</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Language is more than words—it's the bridge between people,
              cultures, and understanding. At Metaphrasis, we don't just
              translate; we preserve meaning, context, and the authentic voice
              behind every message.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our diverse team of translators and interpreters brings together
              expertise from cultures around the world, embodied in our vibrant
              visual identity that celebrates linguistic diversity.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
