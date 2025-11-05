import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mic, CheckCircle, Users, Award, Clock, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AudioTranscription = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetQuote = () => {
    window.open('https://wkf.ms/47CpWLq', '_blank');
  };

  const benefits = [
    {
      icon: Award,
      title: "Professional Quality",
      description: "Accurate transcription of audio and video files with timestamps and speaker labels"
    },
    {
      icon: CheckCircle,
      title: "Multiple Formats",
      description: "Support for various audio and video formats, delivering transcripts in your preferred format"
    },
    {
      icon: Users,
      title: "Multi-Speaker Recognition",
      description: "Clear identification of different speakers throughout the recording"
    },
    {
      icon: Clock,
      title: "Timecoded Transcripts",
      description: "Precise timestamps for easy reference and synchronization with media files"
    }
  ];

  const services = [
    {
      title: "Audio File Transcription",
      description: "Professional transcription of interviews, meetings, podcasts, and other audio recordings"
    },
    {
      title: "Video Transcription",
      description: "Complete transcription services for video content including webinars, presentations, and conferences"
    },
    {
      title: "Multi-Language Support",
      description: "Transcription services available in multiple languages with native-speaker accuracy"
    },
    {
      title: "Specialized Terminology",
      description: "Industry-specific glossary injection for medical, legal, technical, and other specialized content"
    }
  ];

  const industries = [
    { name: "Healthcare", description: "Medical interviews, patient consultations, clinical recordings" },
    { name: "Legal", description: "Depositions, court proceedings, legal interviews, case recordings" },
    { name: "Corporate", description: "Business meetings, training sessions, conference calls" },
    { name: "Education", description: "Lectures, seminars, educational videos, research interviews" },
    { name: "Media", description: "Podcasts, broadcasts, documentaries, multimedia content" }
  ];

  return (
    <>
      <Helmet>
        <title>Audio Transcription Services | Metaphrasis LCS</title>
        <meta name="description" content="Professional audio and video transcription services with timestamps, speaker labels, and specialized terminology. Accurate transcripts for healthcare, legal, corporate, and media industries." />
        <link rel="canonical" href="https://metaphrasislcs.com/translation-services/audio-transcription" />
        <meta property="og:title" content="Audio Transcription Services | Metaphrasis" />
        <meta property="og:description" content="Professional audio and video transcription with timestamps and multi-speaker recognition." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Audio Transcription Services",
            "provider": {
              "@type": "Organization",
              "name": "Metaphrasis Language & Cultural Solutions"
            },
            "serviceType": "Audio Transcription",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-brand-yellow/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Audio Transcription <span className="text-brand-yellow">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your audio and video content into accurate, searchable text documents. Our professional transcription services deliver high-quality transcripts with timestamps, speaker labels, and specialized terminology injection for any industry.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need transcripts for meetings, interviews, legal proceedings, medical consultations, or media content, Metaphrasis provides reliable, accurate transcription services tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-yellow hover:bg-brand-yellow/90 text-gray-900" onClick={handleGetQuote}>
                Get a Quote
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-12 bg-brand-yellow/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl font-semibold leading-relaxed">
              Our audio transcription services convert your recordings into professional, formatted documents with precise timestamps and clear speaker identification. We handle complex audio with multiple speakers, background noise, and specialized terminology.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Professional <span className="text-brand-yellow">Transcription Features</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our transcription services go beyond basic speech-to-text conversion, providing comprehensive documentation of your audio and video content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/20 mb-4 group-hover:bg-brand-yellow/30 transition-colors">
                    <Icon className="w-8 h-8 text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-brand-yellow/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive <span className="text-brand-yellow">Transcription Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From simple audio files to complex multi-speaker videos, we provide transcription services for any type of content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:border-brand-yellow/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-brand-yellow/20 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-brand-yellow" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Transcription Services Across <span className="text-brand-yellow">Industries</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand the unique terminology and requirements of different industries, ensuring accurate transcription tailored to your field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2 text-brand-yellow">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-brand-yellow/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-brand-yellow">Transcription Process</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-brand-yellow/30">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center font-bold text-brand-yellow">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Audio/Video Analysis</h3>
                    <p className="text-muted-foreground">
                      We review your audio or video file to identify speakers, technical terminology, and any special requirements for the transcript.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center font-bold text-brand-yellow">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Transcription</h3>
                    <p className="text-muted-foreground">
                      Expert transcriptionists convert your audio to text with careful attention to accuracy, including speaker labels and timestamps.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center font-bold text-brand-yellow">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Review & Delivery</h3>
                    <p className="text-muted-foreground">
                      A second reviewer checks the transcript for accuracy and formatting before delivering the final document in your preferred format.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow text-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transcribe Your Audio?
            </h2>
            <p className="text-xl mb-8">
              Contact Metaphrasis for professional audio and video transcription services. Call us at (815) 464-1423 to discuss your transcription needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-yellow hover:bg-white/90" onClick={handleGetQuote}>
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AudioTranscription;
