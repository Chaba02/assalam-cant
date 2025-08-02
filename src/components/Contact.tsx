import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Indirizzo",
      details: ["Via Example 123", "22063 Cantù (CO)", "Italia"],
      color: "text-gold"
    },
    {
      icon: Phone,
      title: "Telefono",
      details: ["+39 031 123 4567", "WhatsApp: +39 333 123 4567"],
      color: "text-night-blue"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@islamicoassalam.it", "imam@islamicoassalam.it"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Orari Apertura",
      details: ["Lun-Ven: 6:00 - 22:00", "Sab-Dom: 7:00 - 22:00"],
      color: "text-primary"
    }
  ];

  const openingHours = [
    { day: "Lunedì - Venerdì", hours: "6:00 - 22:00" },
    { day: "Sabato", hours: "7:00 - 22:00" },
    { day: "Domenica", hours: "7:00 - 22:00" },
    { day: "Festività islamiche", hours: "Orari speciali" }
  ];

  return (
    <section className="py-16 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-elegant text-4xl font-bold text-night-blue mb-4">
            Contatti e Ubicazione
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Raggiungerci è facile. Siamo qui per servire la comunità musulmana di Cantù e dintorni
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              
              return (
                <Card 
                  key={index}
                  className="bg-white shadow-elevated border-0 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <CardHeader className="pb-3">
                    <div className="mx-auto p-3 bg-gradient-to-br from-beige to-gold/20 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                      <IconComponent className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <CardTitle className="font-elegant text-lg text-night-blue">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <Card className="shadow-elevated border-0">
              <CardHeader>
                <CardTitle className="font-elegant text-2xl text-night-blue flex items-center">
                  <Navigation className="w-6 h-6 mr-3 text-gold" />
                  Mappa e Indicazioni
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-beige to-gold/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-gold" />
                    <p className="text-lg font-semibold">Mappa Interattiva</p>
                    <p className="text-sm">Centro Islamico Assalam, Cantù</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gold hover:bg-gold/90 text-gold-foreground"
                    onClick={() => window.open('https://maps.google.com/?q=Centro+Islamico+Cantù', '_blank')}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Ottieni Indicazioni
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Parcheggio:</strong> Disponibile gratuitamente</p>
                    <p><strong>Trasporti:</strong> Autobus linea 5, fermata "Centro"</p>
                    <p><strong>Accessibilità:</strong> Centro completamente accessibile</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form & Hours */}
            <div className="space-y-6">
              {/* Opening Hours */}
              <Card className="shadow-elevated border-0">
                <CardHeader>
                  <CardTitle className="font-elegant text-2xl text-night-blue flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-gold" />
                    Orari di Apertura
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {openingHours.map((schedule, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-beige last:border-b-0"
                      >
                        <span className="font-medium text-night-blue">{schedule.day}</span>
                        <span className="text-gold font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-beige rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Nota:</strong> Il centro rimane aperto durante tutti gli orari di preghiera. 
                      Per eventi speciali, controllare il calendario delle attività.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-elevated border-0 bg-gradient-to-r from-night-blue to-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-elegant text-2xl font-bold mb-4">
                    Hai Domande?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Non esitare a contattarci per qualsiasi informazione sulle nostre attività, 
                    orari delle preghiere o come partecipare alla nostra comunità.
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-white/80 text-white hover:bg-white/10"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Chiamaci Ora
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-white/80 text-white hover:bg-white/10"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Invia Email
                    </Button>
                  </div>
                  
                  <div className="mt-6 text-center font-arabic text-lg opacity-90">
                    <p>مرحباً بكم</p>
                    <p className="text-sm mt-1 opacity-80">
                      "Benvenuti da noi"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;