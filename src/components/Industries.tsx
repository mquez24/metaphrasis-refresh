import patternSmall from "@/assets/pattern-small.jpg";

const Industries = () => {
  const industries = [
    "Education & Schools",
    "Government",
    "Healthcare",
    "Corporate",
    "Legal",
  ];

  return (
    <section id="industries" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pattern Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={patternSmall}
                alt="Diverse cultural patterns"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <p className="text-white text-xl font-clavo italic">
                    "Bringing clarity to chaos, understanding to confusion."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="text-brand-teal">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From healthcare to technology, we provide specialized language
              services across diverse sectors. Our industry expertise ensures
              accurate terminology and compliance with sector-specific
              requirements.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-background hover:bg-accent/10 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-coral flex-shrink-0" />
                  <span className="font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
