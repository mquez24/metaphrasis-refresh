import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Connect with{" "}
              <span className="text-brand-teal">your audience</span> in{" "}
              <span className="text-brand-coral">their language.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              We weave culture, local dialects and language together to convey
              deeper meaning and make more authentic connections. Professional
              translation and interpretation services in Chicago and beyond.
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

          {/* Abstract Design Element */}
          <div className="relative lg:h-[600px] h-[400px] animate-fade-in">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-teal via-brand-coral to-brand-pink">
              <div className="absolute top-10 right-10 w-32 h-32 bg-brand-yellow rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-48 h-48 bg-brand-blue rounded-lg opacity-40 rotate-12"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-green rounded-full opacity-50"></div>
              <div className="absolute bottom-32 right-32 w-36 h-36 bg-brand-lime rounded-lg opacity-30 -rotate-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
