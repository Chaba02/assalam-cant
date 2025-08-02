import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Building, BookOpen, Users } from "lucide-react";

const Donations = () => {
  const donationCategories = [
    {
      icon: Building,
      title: "Mantenimento Centro",
      description: "Aiuta a coprire le spese di gestione del centro islamico",
      amount: "€50 - €200",
      color: "from-gold/20 to-accent/20"
    },
    {
      icon: BookOpen,
      title: "Educazione Religiosa",
      description: "Sostieni i programmi educativi e la scuola coranica",
      amount: "€30 - €100",
      color: "from-night-blue/20 to-primary/20"
    },
    {
      icon: Users,
      title: "Supporto Famiglie",
      description: "Aiuta le famiglie in difficoltà della nostra comunità",
      amount: "€20 - €150",
      color: "from-accent/20 to-gold/20"
    }
  ];

  return (
    <section className="py-16 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-elegant text-4xl font-bold text-night-blue mb-4">
            Donazioni e Supporto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Il tuo contributo aiuta a mantenere viva la nostra comunità 
            e a sostenere chi ha bisogno
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Hero donation card */}
          <Card className="mb-12 bg-gradient-to-r from-night-blue to-primary text-white shadow-elevated border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <HandHeart className="w-12 h-12" />
                </div>
              </div>
              
              <h3 className="font-elegant text-3xl font-bold mb-4">
                Insieme per la Comunità
              </h3>
              
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                La tua donazione contribuisce direttamente al benessere della nostra comunità islamica, 
                supportando le attività religiose, educative e sociali del centro.
              </p>
              
              <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold px-8 py-4"
                >
                  Dona Ora
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4"
                >
                  Donazione Ricorrente
                </Button>
              </div>
              
              <div className="mt-8 font-arabic text-lg opacity-90">
                <p>إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ</p>
                <p className="text-sm mt-2 opacity-80">
                  "Le elemosine sono destinate ai poveri" - Corano 9:60
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Donation categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {donationCategories.map((category, index) => {
              const IconComponent = category.icon;
              
              return (
                <Card 
                  key={index}
                  className="bg-white shadow-elevated border-0 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`p-4 bg-gradient-to-br ${category.color} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-gold" />
                    </div>
                    
                    <CardTitle className="font-elegant text-xl text-night-blue">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    
                    <div className="bg-beige rounded-lg p-3 mb-4">
                      <span className="font-semibold text-gold">{category.amount}</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-gold text-gold hover:bg-gold hover:text-gold-foreground"
                    >
                      Dona per questa causa
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Payment methods and info */}
          <Card className="bg-beige border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-elegant text-xl font-bold text-night-blue mb-4">
                    Come Donare
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span>Bonifico bancario</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span>PayPal</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span>Contanti presso il centro</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span>Carta di credito online</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-elegant text-xl font-bold text-night-blue mb-4">
                    Informazioni Fiscali
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>Le donazioni al Centro Islamico Assalam sono deducibili fiscalmente secondo la normativa italiana vigente.</p>
                    <p>Riceverai una ricevuta per ogni donazione effettuata per la tua dichiarazione dei redditi.</p>
                    <p><strong>Codice Fiscale:</strong> 123456789</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Donations;