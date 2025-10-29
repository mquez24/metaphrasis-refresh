const Certifications = () => {
  const certifications = [
    "MBE (Cook County)",
    "DBE",
    "WBENC",
    "Small Business Owner",
    "BEP WBENC",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Certifications
        </h2>
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
        <p className="text-center text-sm font-medium text-muted-foreground mt-8">
          WBENC Certified • Women-Owned • Minority-Owned • Small Business
        </p>
      </div>
    </section>
  );
};

export default Certifications;
