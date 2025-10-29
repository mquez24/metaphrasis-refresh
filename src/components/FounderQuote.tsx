import patternSmall from "@/assets/pattern-small.jpg";

const FounderQuote = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            In the Words of Our <span className="text-brand-teal">Founder</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Portrait */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={patternSmall}
                  alt="Elizabeth Colón, Founder & President"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="lg:col-span-2">
              <blockquote className="text-xl md:text-2xl font-clavo italic text-foreground/90 mb-6">
                "When I founded Metaphrasis, I wanted to create more than a language company — 
                I wanted to build a bridge. A bridge that connects people, cultures, and 
                communities through understanding. Because when people feel understood, 
                everything changes."
              </blockquote>
              <p className="text-lg font-semibold">— Elizabeth Colón</p>
              <p className="text-muted-foreground">Founder & President</p>
            </div>
          </div>
        </div>

        {/* Pattern Divider */}
        <div className="mt-16 h-2 w-full max-w-3xl mx-auto rounded-full overflow-hidden opacity-30">
          <img
            src={patternSmall}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;
