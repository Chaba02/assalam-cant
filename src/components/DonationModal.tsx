
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
}

const DonationModal = ({ isOpen, onClose, selectedCategory }: DonationModalProps) => {
  const [donationForm, setDonationForm] = useState({
    name: "",
    email: "",
    amount: "",
    cause: selectedCategory || "",
    paymentMethod: "carta"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const causes = [
    "Zakat",
    "Sadaqah", 
    "Attività Sociali",
    "Mantenimento Centro",
    "Educazione Religiosa",
    "Supporto Famiglie",
    "Emergenze"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate donation processing with smooth transition
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset and close after success message
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
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

  const handleClose = () => {
    if (!isSubmitting && !showSuccess) {
      onClose();
      setDonationForm({
        name: "",
        email: "",
        amount: "",
        cause: "",
        paymentMethod: "carta"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white border-gold/20">
        <DialogHeader>
          <DialogTitle className="font-elegant text-2xl text-night-blue text-center">
            {showSuccess ? "Donazione Completata!" : "Effettua una Donazione"}
          </DialogTitle>
        </DialogHeader>
        
        {showSuccess ? (
          <div className="text-center py-8 animate-fade-in-up">
            <div className="scale-in">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-night-blue mb-2">
              Grazie per il tuo contributo!
            </h3>
            <p className="text-muted-foreground">
              La tua donazione aiuterà la nostra comunità. Riceverai una conferma via email.
            </p>
            <div className="mt-4 text-sm text-gold font-semibold">
              Importo: €{donationForm.amount}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up">
            <div className="space-y-4">
              <div className="animate-slide-in-left">
                <label className="text-sm font-medium text-night-blue">Nome Completo</label>
                <Input
                  type="text"
                  value={donationForm.name}
                  onChange={(e) => setDonationForm({...donationForm, name: e.target.value})}
                  placeholder="Il tuo nome"
                  required
                  className="border-gold/30 focus:border-gold transition-colors duration-300"
                />
              </div>
              
              <div className="animate-slide-in-left animation-delay-200">
                <label className="text-sm font-medium text-night-blue">Email</label>
                <Input
                  type="email"
                  value={donationForm.email}
                  onChange={(e) => setDonationForm({...donationForm, email: e.target.value})}
                  placeholder="email@esempio.com"
                  required
                  className="border-gold/30 focus:border-gold transition-colors duration-300"
                />
              </div>

              <div className="animate-slide-in-left animation-delay-400">
                <label className="text-sm font-medium text-night-blue">Importo (€)</label>
                <Input
                  type="number"
                  value={donationForm.amount}
                  onChange={(e) => setDonationForm({...donationForm, amount: e.target.value})}
                  placeholder="50"
                  min="1"
                  required
                  className="border-gold/30 focus:border-gold transition-colors duration-300"
                />
              </div>

              <div className="animate-slide-in-right animation-delay-200">
                <label className="text-sm font-medium text-night-blue">Causale</label>
                <select
                  value={donationForm.cause}
                  onChange={(e) => setDonationForm({...donationForm, cause: e.target.value})}
                  className="w-full p-2 border border-gold/30 rounded-md focus:border-gold focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Seleziona una causale</option>
                  {causes.map((cause) => (
                    <option key={cause} value={cause}>{cause}</option>
                  ))}
                </select>
              </div>

              <div className="animate-slide-in-right animation-delay-400">
                <label className="text-sm font-medium text-night-blue">Metodo di Pagamento</label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center cursor-pointer hover:text-gold transition-colors duration-300">
                    <input
                      type="radio"
                      value="carta"
                      checked={donationForm.paymentMethod === "carta"}
                      onChange={(e) => setDonationForm({...donationForm, paymentMethod: e.target.value})}
                      className="mr-2 text-gold"
                    />
                    <CreditCard className="w-4 h-4 mr-1" />
                    Carta di Credito
                  </label>
                  <label className="flex items-center cursor-pointer hover:text-gold transition-colors duration-300">
                    <input
                      type="radio"
                      value="paypal"
                      checked={donationForm.paymentMethod === "paypal"}
                      onChange={(e) => setDonationForm({...donationForm, paymentMethod: e.target.value})}
                      className="mr-2 text-gold"
                    />
                    PayPal
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4 animate-fade-in-up animation-delay-600">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold/90 text-night-blue font-semibold py-3 transition-all duration-300 hover-lift disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-night-blue/30 border-t-night-blue rounded-full animate-spin mr-2"></div>
                    Elaborazione...
                  </span>
                ) : (
                  `Dona €${donationForm.amount || "0"}`
                )}
              </Button>
            </div>

            <div className="text-xs text-muted-foreground text-center pt-2">
              I tuoi dati sono protetti e utilizzati solo per la donazione
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
