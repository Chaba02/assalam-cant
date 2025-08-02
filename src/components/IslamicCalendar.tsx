import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Moon } from "lucide-react";

const IslamicCalendar = () => {
  // Calendario Hijri approssimativo (in un'app reale si userebbe un'API)
  const hijriMonths = [
    "Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani",
    "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban",
    "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
  ];

  // Data Hijri approssimativa (1445 AH)
  const currentHijriYear = 1446;
  const currentHijriMonth = 7; // Rajab
  const currentHijriDay = 20;

  const upcomingEvents = [
    { date: "15 Sha'ban", event: "Laylat al-Bara'at", description: "Notte del Perdono" },
    { date: "1 Ramadan", event: "Inizio Ramadan", description: "Mese del digiuno" },
    { date: "27 Ramadan", event: "Laylat al-Qadr", description: "Notte del Destino" },
    { date: "1 Shawwal", event: "Eid al-Fitr", description: "Festa della Rottura del Digiuno" },
  ];

  return (
    <section className="py-16 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-elegant text-4xl font-bold text-night-blue mb-4">
            Calendario Islamico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Segui le date importanti del calendario Hijri e i prossimi eventi religiosi
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Data Hijri corrente */}
          <Card className="bg-white shadow-elevated border-0">
            <CardHeader className="bg-gradient-to-r from-night-blue to-primary text-white">
              <CardTitle className="font-elegant text-2xl flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Data Hijri Oggi
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="text-5xl font-bold text-gold mb-2">
                  {currentHijriDay}
                </div>
                <div className="text-2xl font-semibold text-night-blue mb-1">
                  {hijriMonths[currentHijriMonth - 1]}
                </div>
                <div className="text-xl text-muted-foreground">
                  {currentHijriYear} AH
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="font-arabic text-lg text-gold mb-2">
                  التقويم الهجري
                </div>
                <p className="text-sm text-muted-foreground">
                  Anno dell'Egira
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Prossimi eventi */}
          <Card className="bg-white shadow-elevated border-0">
            <CardHeader className="bg-gradient-to-r from-gold to-accent text-gold-foreground">
              <CardTitle className="font-elegant text-2xl flex items-center">
                <Moon className="w-6 h-6 mr-3" />
                Prossimi Eventi
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-beige hover:bg-beige/70 transition-colors"
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-night-blue">
                        {event.event}
                      </div>
                      <div className="text-sm text-gold font-medium">
                        {event.date}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {event.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  * Le date possono variare in base all'osservazione lunare
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IslamicCalendar;