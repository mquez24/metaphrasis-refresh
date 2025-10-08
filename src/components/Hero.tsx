import { Button } from "@/components/ui/button";
import patternImage from "@/assets/pattern-large.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-brand-teal">Everyone Deserves</span> to Be{" "}
              <span className="text-brand-coral">Understood</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              We bring clarity and connection to every conversation by honoring both language and culture. Through professional translation and interpretation, we ensure that meaning, emotion, and intent are never lost, helping individuals and organizations truly understand one another.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Learn How We Can Help
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Pattern Image */}
          <div className="relative lg:h-[600px] h-[400px] animate-fade-in">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={patternImage}
                alt="Colorful cultural patterns representing diverse languages and cultures"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
