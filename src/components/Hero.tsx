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
              Everyone Deserves to Be <span className="text-brand-teal">Understood</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Metaphrasis helps you communicate clearly, inclusively, and effectively—anytime, anywhere, in over 100 languages. From interpreting and translations to transcription, braille, and voiceover services, we empower global communication through a unique blend of advanced AI tools and expert human linguists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn How We Can Help
              </Button>
            </div>
          </div>

          {/* Pattern Image with Animation */}
          <div className="relative lg:h-[600px] h-[400px] animate-fade-in">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={patternImage}
                alt="Colorful cultural patterns representing diverse languages and cultures"
                className="w-full h-full object-cover animate-subtle-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-12">
                <p className="text-white text-2xl md:text-3xl font-bold text-center px-6 animate-pulse-soft">
                  Everyone Deserves to Be Understood
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
