import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mosque-sunset-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-night-blue/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
        <h1 className="font-elegant text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Benvenuti al Centro<br />
          <span className="gradient-text">Islamico Assalam</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
          Un luogo di pace, preghiera e comunità nel cuore di Cantù
        </p>
        
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold px-8 py-4 text-lg shadow-gold"
          >
            Scopri le nostre attività
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 text-lg"
          >
            Orari delle preghiere
          </Button>
        </div>
        
        {/* Arabic Quote */}
        <div className="mt-12 font-arabic text-lg opacity-90">
          <p>السلام عليكم ورحمة الله وبركاته</p>
          <p className="text-sm mt-2 font-light">"Pace e benedizioni di Allah su di voi"</p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;