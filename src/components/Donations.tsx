
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, HandHeart, Building, BookOpen, Users, CreditCard, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [donationForm, setDonationForm] = useState({
    name: "",
    email: "",
    amount: "",
    cause: "",
    paymentMethod: "carta"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const donationCategories = [
    {
      icon: Building,
      title: "Mantenimento Centro",
      description: "Aiuta a coprire le spese di gestione del centro islamico",
      amounts: [50, 100, 200],
      color: "from-gold/20 to-accent/20"
    },
    {
      icon: BookOpen,
      title: "Educazione Religiosa",
      description: "Sostieni i programmi educativi e la scuola coranica",
      amounts: [30, 75, 100],
      color: "from-night-blue/20 to-primary/20"
    },
    {
      icon: Users,
      title: "Supporto Famiglie",
      description: "Aiuta le famiglie in difficoltà della nostra comunità",
      amounts: [20, 50, 150],
      color: "from-accent/20 to-gold/20"
    }
  ];

  const causes = [
    "Zakat",
    "Sadaqah",
    "Attività Sociali", 
    "Manutenzione",
    "Educazione",
    "Emergenze"
  ];

  const handleOpenModal = (category: string) => {
    setSelectedCategory(category);
    setDonationForm({ ...donationForm, cause: category });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate donation processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setIsModalOpen(false);
      setDonationForm({
        name: "",
        email: "",
        amount: "",
        cause: "",
        paymentMethod: "carta"
      });
      toast({
        title: "Donazione completata",
        description: "Grazie per il tuo prezioso contributo alla comunità!",
      });
    }, 3000);
  };

  return (
    <section className="py-16 bg-warm-white scroll-smooth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
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
          <Card className="mb-12 bg-gradient-to-r from-night-blue to-primary text-white shadow-elevated border-0 hover-lift animate-slide-in-left">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6 scale-in">
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
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="bg-gold hover:bg-gold/90 text-night-blue font-semibold px-8 py-4 hover-lift transition-all duration-300"
                      onClick={() => handleOpenModal("Donazione Generale")}
                    >
                      Dona Ora
                    </Button>
                  </DialogTrigger>
                </Dialog>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 hover-lift transition-all duration-300"
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
                  className={`bg-white shadow-elevated border-0 hover:shadow-xl hover-lift transition-all duration-300 animate-fade-in-up animation-delay-${(index + 1) * 200}`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`p-4 bg-gradient-to-br ${category.color} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center scale-in`}>
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
                      <div className="flex justify-center space-x-2">
                        {category.amounts.map((amount, idx) => (
                          <span key={idx} className="text-sm font-semibold text-gold">
                            €{amount}
                            {idx < category.amounts.length - 1 && <span className="mx-1 text-muted-foreground">•</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-gold text-gold hover:bg-gold hover:text-night-blue transition-all duration-300 hover-lift"
                      onClick={() => handleOpenModal(category.title)}
                    >
                      Dona per questa causa
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Payment methods and info */}
          <Card className="bg-beige border-0 animate-slide-in-right animation-delay-400">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-elegant text-xl font-bold text-night-blue mb-4">
                    Come Donare
                  </h4>
                  <div className="space-y-3">
                    {["Bonifico bancario", "PayPal", "Contanti presso il centro", "Carta di credito online"].map((method, index) => (
                      <div key={index} className="flex items-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        <span>{method}</span>
                      </div>
                    ))}
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

        {/* Donation Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md bg-white">
            <DialogHeader>
              <DialogTitle className="font-elegant text-2xl text-night-blue text-center">
                {showSuccess ? "Donazione Completata!" : "Effettua una Donazione"}
              </DialogTitle>
            </DialogHeader>
            
            {showSuccess ? (
              <div className="text-center py-8 scale-in">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-night-blue mb-2">
                  Grazie per il tuo contributo!
                </h3>
                <p className="text-muted-foreground">
                  La tua donazione aiuterà la nostra comunità. Riceverai una conferma via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-night-blue">Nome Completo</label>
                    <Input
                      type="text"
                      value={donationForm.name}
                      onChange={(e) => setDonationForm({...donationForm, name: e.target.value})}
                      placeholder="Il tuo nome"
                      required
                      className="border-gold/30 focus:border-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-night-blue">Email</label>
                    <Input
                      type="email"
                      value={donationForm.email}
                      onChange={(e) => setDonationForm({...donationForm, email: e.target.value})}
                      placeholder="email@esempio.com"
                      required
                      className="border-gold/30 focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-night-blue">Importo (€)</label>
                    <Input
                      type="number"
                      value={donationForm.amount}
                      onChange={(e) => setDonationForm({...donationForm, amount: e.target.value})}
                      placeholder="50"
                      min="1"
                      required
                      className="border-gold/30 focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-night-blue">Causale</label>
                    <select
                      value={donationForm.cause}
                      onChange={(e) => setDonationForm({...donationForm, cause: e.target.value})}
                      className="w-full p-2 border border-gold/30 rounded-md focus:border-gold focus:outline-none"
                      required
                    >
                      {causes.map((cause) => (
                        <option key={cause} value={cause}>{cause}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-night-blue">Metodo di Pagamento</label>
                    <div className="flex space-x-4 mt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="carta"
                          checked={donationForm.paymentMethod === "carta"}
                          onChange={(e) => setDonationForm({...donationForm, paymentMethod: e.target.value})}
                          className="mr-2"
                        />
                        <CreditCard className="w-4 h-4 mr-1" />
                        Carta
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="paypal"
                          checked={donationForm.paymentMethod === "paypal"}
                          onChange={(e) => setDonationForm({...donationForm, paymentMethod: e.target.value})}
                          className="mr-2"
                        />
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold/90 text-night-blue font-semibold py-3 transition-all duration-300 hover-lift"
                >
                  {isSubmitting ? "Elaborazione..." : `Dona €${donationForm.amount || "0"}`}
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Donations;
