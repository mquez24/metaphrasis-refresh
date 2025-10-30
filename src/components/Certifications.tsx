import mbeLogo from "@/assets/certifications/mbe.png";
import dbeLogo from "@/assets/certifications/dbe.png";
import bepLogo from "@/assets/certifications/bep.png";
import womenOwnedLogo from "@/assets/certifications/women-owned.png";
import ataMemberLogo from "@/assets/certifications/ata-member.png";
import wbencLogo from "@/assets/certifications/wbenc.png";
import alcLogo from "@/assets/certifications/alc.png";

const Certifications = () => {
  const certifications = [
    { src: mbeLogo, alt: "MBE - Minority Business Enterprise" },
    { src: dbeLogo, alt: "DBE - Disadvantaged Business Enterprise" },
    { src: bepLogo, alt: "BEP - Business Enterprise Program" },
    { src: womenOwnedLogo, alt: "Women Owned Certified by WBENC" },
    { src: wbencLogo, alt: "WBENC - Women's Business Enterprise National Council" },
    { src: ataMemberLogo, alt: "ATA Member - American Translators Association" },
    { src: alcLogo, alt: "ALC - Association of Language Companies" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Certifications
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform"
            >
              <img 
                src={cert.src} 
                alt={cert.alt} 
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-medium text-muted-foreground mt-12">
          WBENC Certified • Women-Owned • Minority-Owned • Small Business
        </p>
      </div>
    </section>
  );
};

export default Certifications;
