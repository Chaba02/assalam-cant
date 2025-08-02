import { MapPin, Phone, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-night-blue text-night-blue-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Mission */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-elegant text-2xl font-bold mb-4 text-gold">
              Centro Islamico Assalam
            </h3>
            <p className="text-night-blue-foreground/80 mb-4 leading-relaxed">
              Un luogo di pace, preghiera e comunità nel cuore di Cantù. 
              Serviamo la comunità musulmana locale con dedizione e amore, 
              promuovendo i valori islamici di fratellanza e solidarietà.
            </p>
            <div className="font-arabic text-lg text-gold">
              بسم الله الرحمن الرحيم
              <div className="text-sm text-night-blue-foreground/70 mt-1">
                "Nel nome di Allah, il Clemente, il Misericordioso"
              </div>
            </div>
          </div>

          {/* Contatti Rapidi */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-gold flex-shrink-0" />
                <div className="text-sm text-night-blue-foreground/80">
                  <p>Via Example 123</p>
                  <p>22063 Cantù (CO)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gold flex-shrink-0" />
                <span className="text-sm text-night-blue-foreground/80">+39 031 123 4567</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gold flex-shrink-0" />
                <span className="text-sm text-night-blue-foreground/80">info@islamicoassalam.it</span>
              </div>
            </div>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Link Utili</h4>
            <ul className="space-y-2">
              <li>
                <a href="#preghiere" className="text-sm text-night-blue-foreground/80 hover:text-gold transition-colors">
                  Orari Preghiere
                </a>
              </li>
              <li>
                <a href="#attivita" className="text-sm text-night-blue-foreground/80 hover:text-gold transition-colors">
                  Attività
                </a>
              </li>
              <li>
                <a href="#donazioni" className="text-sm text-night-blue-foreground/80 hover:text-gold transition-colors">
                  Donazioni
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-sm text-night-blue-foreground/80 hover:text-gold transition-colors">
                  Come Raggiungerci
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-night-blue-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-night-blue-foreground/60 mb-4 md:mb-0">
              © 2024 Centro Islamico Assalam. Tutti i diritti riservati.
            </div>
            
            <div className="flex items-center text-sm text-night-blue-foreground/80">
              <span>Realizzato con</span>
              <Heart className="w-4 h-4 mx-2 text-gold" />
              <span>per la comunità islamica di Cantù</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;