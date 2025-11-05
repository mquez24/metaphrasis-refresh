import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Clock, Globe, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const OnSiteInterpreting = () => {
  const interpretationModes = [
    {
      icon: MessageSquare,
      title: "Consecutive Interpretation",
      description: "The interpreter translates what a speaker says when the speaker pauses. This type of interpretation is ideal for small scale conversations and will help keep a dialogue going between the parties."
    },
    {
      icon: Users,
      title: "Simultaneous Interpretation",
      description: "The interpreter listens to the speaker and translates as the speaker is still talking. Interpreters must be experienced and have the skill level to be effective with simultaneous interpretation. This works best when one-way interpretation is needed, such as at live events and presentations."
    }
  ];

  const testimonials = [
    {
      text: "The medical interpretor training was very informative and provided excellent material on how to become a true professional. It was a great experience to be part of the team!",
      author: "Anna Rajchel"
    },
    {
      text: "I have to say, this is a very professional place to work with, I am very pleased with how smooth everything is. Very professional. I have other agencies that breach the contract agreement by not posting the assignments for everyone, first come first served, but favoritism is practiced instead. I didn't sensed that with Mataphrasis. Thank you",
      author: "fanahenter"
    },
    {
      text: "It is a privilege to work for the Metaphrasis company and so thrilled to be able to help out the community as an Albanian interpreter! A great thank you to Elizabeth and her team",
      author: "linda tasellari"
    }
  ];

  return (
    <>
      <Helmet>
        <title>On-Site Interpreting Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional on-site interpreting services in Chicago, IL and across the United States. Face-to-face interpretation for effective person-to-person communication." />
        <link rel="canonical" href="https://metaphrasislcs.com/interpretation-services/on-site-interpreting/" />
        <meta property="og:title" content="On-Site Interpreting Services Chicago | Metaphrasis" />
        <meta property="og:description" content="Expert on-site interpreters for face-to-face communication in business, healthcare, legal, and educational settings." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />

      {/* Hero Section with Red Accent */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-red-500/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              On-Site <span className="text-red-600">Interpreting Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Face-to-face conversation is the most basic form of communication. We bridge the communication gap and ensure Everyone is Understood.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Metaphrasis, we can help bridge the communication gap and ensure Everyone is Understood through our professional on-site interpreting services.
              </p>
              <p className="text-lg font-semibold mb-6">
                Metaphrasis provides professional interpreting in Chicago, IL, and throughout the United States to ensure effective person-to-person communication. Our language interpreters will arrive on-site to interpret for face-to-face interactions and ensure all parties involved are understood.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our language professionals are carefully selected according to their qualifications and expertise as well as your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional On-Site Interpretation Section */}
      <section className="py-16 bg-red-500/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Professional <span className="text-red-600">On-Site Interpretation</span>
            </h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In situations in which a language interpreter is needed, on-site interpretation may be the best option. Face-to-face interpretation puts all parties at ease knowing that what they say will be understood. Our interpreters have an excellent grasp of the languages being spoken and will ensure what is being said is conveyed accurately in translation. We understand that word-to-word interpretations are not the most accurate which is why our interpreters focus more on the context and meaning of what is being said and account for cultural nuances.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are ready to help provide on-site interpreting services across many industries, including business, healthcare, legal settings, government agencies, educational institutions, and more. You can expect our interpreters to understand the terminology of your industry to ensure accurate interpretations.
              </p>
            </div>

            {/* Interpretation Modes */}
            <div className="grid md:grid-cols-2 gap-8">
              {interpretationModes.map((mode, index) => {
                const Icon = mode.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-xl transition-all duration-300 border-red-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{mode.title}</h3>
                    <p className="text-muted-foreground">{mode.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Call Us for <span className="text-red-600">On-Site Interpreting Services</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our on-site interpretation services in Chicago, IL will help preserve the human connection in face-to-face conversation while ensuring that Everyone is Understood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:8154641423" className="inline-flex items-center gap-2">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5" />
                  (815) 464-1423
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-red-500/5 to-red-600/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Reviews from <span className="text-red-600">Our Clients</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-red-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground italic mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-red-600">— {testimonial.author}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for professional on-site interpreting services
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Let's Get In Touch!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OnSiteInterpreting;
