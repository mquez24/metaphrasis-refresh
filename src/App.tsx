import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TranslationServices from "./pages/TranslationServices";
import DocumentTranslation from "./pages/DocumentTranslation";
import WebsiteTranslation from "./pages/WebsiteTranslation";
import AudioTranscription from "./pages/AudioTranscription";
import VoiceOver from "./pages/VoiceOver";
import Braille from "./pages/Braille";
import InterpretationServices from "./pages/InterpretationServices";
import OnSiteInterpreting from "./pages/OnSiteInterpreting";
import OverPhoneInterpreter from "./pages/OverPhoneInterpreter";
import VideoRemoteInterpreter from "./pages/VideoRemoteInterpreter";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/translation-services" element={<TranslationServices />} />
          <Route path="/translation-services/document-translation" element={<DocumentTranslation />} />
          <Route path="/translation-services/website-translation" element={<WebsiteTranslation />} />
          <Route path="/translation-services/audio-transcription" element={<AudioTranscription />} />
          <Route path="/translation-services/voice-over" element={<VoiceOver />} />
          <Route path="/translation-services/braille" element={<Braille />} />
          <Route path="/interpretation-services" element={<InterpretationServices />} />
          <Route path="/interpretation-services/on-site-interpreting" element={<OnSiteInterpreting />} />
          <Route path="/interpretation-services/over-phone-interpreter" element={<OverPhoneInterpreter />} />
          <Route path="/interpretation-services/video-remote-interpretation" element={<VideoRemoteInterpreter />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
