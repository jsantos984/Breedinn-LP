import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-horses.jpg";
import { ChevronDown, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
  }, []);

  const changeLanguage = (lang: string) => {
    console.log('Changing language to:', lang);
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const text = {
    en: {
      heroTitle: "Frozen Semen Stock Management.",
      heroSubtitle: "Finally Done Right.",
      heroDescription: "Track, control, and share semen stock in real time — no more chaos.",
      requestDemo: "Request a Demo",
      talkToUs: "Talk to us"
    },
    pt: {
      heroTitle: "Gestão de Sémen Congelado.",
      heroSubtitle: "Finalmente Bem Feito.",
      heroDescription: "Acompanhe, controle e partilhe o stock de sémen em tempo real — sem mais confusão.",
      requestDemo: "Pedir uma Demonstração",
      talkToUs: "Fale Connosco"
    }
  };

  const currentText = text[language as keyof typeof text];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-foreground">
          Breedinn
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="red" size="sm" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Contact: hello@breedinn.com
          </Button>
          <div className="flex items-center gap-2 ml-2">
            <button 
              className="text-2xl hover:scale-110 transition-transform p-1 border-none bg-transparent cursor-pointer"
              onClick={() => changeLanguage('en')}
              title="English"
              type="button"
            >
              🇬🇧
            </button>
            <button 
              className="text-2xl hover:scale-110 transition-transform p-1 border-none bg-transparent cursor-pointer"
              onClick={() => changeLanguage('pt')}
              title="Português"
              type="button"
            >
              🇵🇹
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {currentText.heroTitle}
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: 'hsl(var(--brand-green))' }}>
            {currentText.heroSubtitle}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            {currentText.heroDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-white/60"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
            <ChevronDown className="w-6 h-6 text-white/80 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;