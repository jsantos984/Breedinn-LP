import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-horses.jpg";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-foreground">
          Breedinn
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="red" size="sm">
            Talk to us
          </Button>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🇬🇧</span>
            <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🇵🇹</span>
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
            Frozen Semen Stock Management.
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: 'hsl(var(--brand-green))' }}>
            Finally Done Right.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Track, control, and share semen stock in real time — no more chaos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="green" size="lg" className="text-lg px-8 py-4">
              Request a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              disabled 
              className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white/50 cursor-not-allowed hover:bg-white/10"
            >
              See How It Works
            </Button>
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
