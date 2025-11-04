import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-brand-teal">Metaphrasis</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everyone Deserves to Be Understood
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                At Metaphrasis, we believe that <strong>Everyone Deserves to Be Understood.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                Language, both written and spoken, is the basis of person to person communication as well as communication between corporations and institutions and their employees, customers, clients, and patients.
              </p>
              <p className="text-lg leading-relaxed">
                Through our translation and interpreter services, we will help ensure that all communications are understood.
              </p>
              <p className="text-lg leading-relaxed">
                Metaphrasis is a translation and interpretation agency in Chicago, IL that provides award-winning professional translation and interpreter services to empower businesses, healthcare professionals, legal professionals, government agencies, educational institutions, and more.
              </p>
              <p className="text-lg leading-relaxed">
                We have a large network of translators and interpreters, including those certified by the American Translators Association (ATA), who can provide translation for documents, websites, and other materials as well as voice over translations, audio transcriptions, braille transcriptions, American sign language interpretation, and more.
              </p>
            </div>

            {/* Founder Message */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">A Message from the Founder</h2>
              <blockquote className="border-l-4 border-brand-teal pl-6 italic text-lg leading-relaxed">
                "As a child of parents who do not speak English and a sister of two deaf siblings, I have firsthand experience with the struggles faced by those negotiating a new country and culture without being proficient in the language or unable to understand. Getting pulled out of school to interpret for my parent's appointments or unable to communicate with my sisters who were just across the kitchen table, was a very difficult scenario for my family, and as a young child hard to endure. To help others with similar issues, I founded Metaphrasis in 2007 with the dream of providing the best translation and interpretation services possible. At Metaphrasis, we take the time to get to the heart of the issue, using our extensive experience to effectively assess each situation so that we can fully understand where each person is coming from."
                <footer className="mt-4 not-italic font-semibold">— Elizabeth Colon, President</footer>
              </blockquote>
            </div>

            {/* Translation vs Interpretation */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Translation and interpretation are similar in their aim to deliver a message faithfully from its source, but the two are distinctly different methods. Interpretation involves spoken language while translation involves written language. Our interpreters will not focus so much on word for word interpretation but instead ensure context is accurately conveyed. Translators can provide a meaning for meaning translation of documents, websites, and other materials while also taking context and cultural nuances into account.
              </p>
              <p className="text-lg leading-relaxed">
                When you work with a translation company like Metaphrasis in Chicago, IL, you can expect accurate translations and interpretations that convey your message in a natural, meaning for meaning context.
              </p>
            </div>

            {/* Partnership Section */}
            <div className="bg-gradient-to-br from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">We Don't Have Clients, We Have Partners</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  We believe true partnerships are what lead to success for all. We pride ourselves on providing professional, quality language services for businesses and institutions throughout Chicago, IL. But above all, we value the partnerships we make with our clients around translation and interpreting experiences. We seek to partner with organizations that believe what we believe – that Everyone Deserves to Be Understood.
                </p>
                <p>
                  Committing to a partnership is not something we take lightly. When you entrust your interpreting and translation business to us, we offer an uncompromising commitment to reliability, professionalism, understanding, integrity, and value in return.
                </p>
                <p>
                  Our partnerships go beyond the interpreting encounter or document translation. We understand that our partner's success is our success. We believe partnership does really mean we have a shared responsibility in delivering the most professional language access that lives up to the Metaphrasis promise – Everyone Deserves to Be Understood.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg text-muted-foreground">
                Metaphrasis is a professional translation and interpreter agency in Chicago, IL that provides professional language services throughout the country.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                You can reach us by phone at <a href="tel:8154641423" className="text-brand-teal hover:underline font-semibold">(815) 464-1423</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default About;
