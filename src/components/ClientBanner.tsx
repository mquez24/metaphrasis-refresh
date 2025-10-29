import { useEffect, useState } from "react";
import girlScouts from "@/assets/logos/girl-scouts.png";
import chicagoHousing from "@/assets/logos/chicago-housing.png";
import uchicagoMedicine from "@/assets/logos/uchicago-medicine.png";
import advocateHealth from "@/assets/logos/advocate-health.png";
import uiHealth from "@/assets/logos/ui-health.png";
import usRenalCare from "@/assets/logos/us-renal-care.png";
import cookCountyHealth from "@/assets/logos/cook-county-health.png";
import riversCasino from "@/assets/logos/rivers-casino.png";
import ballyCasino from "@/assets/logos/bally-casino.png";
import assurance from "@/assets/logos/assurance.png";

const clients = [
  { name: "Girl Scouts of Greater Chicago and Northwest Indiana", logo: girlScouts },
  { name: "Chicago Housing Authority", logo: chicagoHousing },
  { name: "UChicago Medicine", logo: uchicagoMedicine },
  { name: "Advocate Health Care", logo: advocateHealth },
  { name: "UI Health", logo: uiHealth },
  { name: "U.S. Renal Care", logo: usRenalCare },
  { name: "Cook County Health", logo: cookCountyHealth },
  { name: "Rivers Casino", logo: riversCasino },
  { name: "Bally Casino", logo: ballyCasino },
  { name: "Assurance", logo: assurance },
];

const ClientBanner = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Duplicate the clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-sm md:text-base font-medium text-foreground/70 mb-8 text-left">
          Our Value-Aligned Partners
        </h2>

        <div
          className="client-marquee relative overflow-hidden"
          aria-label="Trusted by — client logos carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-12 md:gap-16 ${
              prefersReducedMotion ? "" : isPaused ? "animate-paused" : "animate-scroll"
            }`}
            style={{
              width: prefersReducedMotion ? "auto" : "fit-content",
            }}
          >
            {(prefersReducedMotion ? clients : duplicatedClients).map((client, index) => (
              <a
                key={`${client.name}-${index}`}
                href="#"
                className="client-logo flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
                aria-label={`${client.name} (logo)`}
                onClick={(e) => e.preventDefault()}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-10 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg group-focus-visible:scale-105 group-focus-visible:drop-shadow-lg"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Fallback static grid for no-JS environments */}
        <noscript>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mt-8">
            {clients.map((client) => (
              <a
                key={client.name}
                href="#"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
                aria-label={`${client.name} (logo)`}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
};

export default ClientBanner;
