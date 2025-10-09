const Certifications = () => {
  const certifications = [
    "WBENC Certified",
    "Women-Owned Business",
    "ATA Certified",
    "HIPAA Compliant",
    "NGLCC Certified",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Certified and trusted by leading institutions nationwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="text-center px-6 py-3 border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-sm md:text-base">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
