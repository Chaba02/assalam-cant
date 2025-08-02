import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

const PrayerTimes = () => {
  // Orari delle preghiere per Cantù (approssimativi)
  const prayerTimes = [
    { name: "Fajr", arabic: "الفجر", time: "05:30" },
    { name: "Dhuhr", arabic: "الظهر", time: "12:45" },
    { name: "Asr", arabic: "العصر", time: "15:30" },
    { name: "Maghrib", arabic: "المغرب", time: "18:15" },
    { name: "Isha", arabic: "العشاء", time: "20:00" },
  ];

  return (
    <section className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-elegant text-4xl font-bold text-night-blue mb-4">
            Orari delle Preghiere
          </h2>
          <div className="flex items-center justify-center text-muted-foreground mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Cantù, Como - Italia</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-elevated border-0">
            <CardHeader className="text-center bg-gradient-to-r from-gold/10 to-beige">
              <CardTitle className="font-elegant text-2xl text-night-blue flex items-center justify-center">
                <Clock className="w-6 h-6 mr-3" />
                Oggi - {new Date().toLocaleDateString('it-IT', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {prayerTimes.map((prayer, index) => (
                  <div 
                    key={prayer.name}
                    className="text-center p-4 rounded-lg bg-gradient-to-b from-beige to-warm-white shadow-gentle hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="font-arabic text-2xl text-gold mb-2">
                      {prayer.arabic}
                    </div>
                    <div className="font-semibold text-night-blue text-lg mb-1">
                      {prayer.name}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {prayer.time}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  * Gli orari sono approssimativi e possono variare. 
                  Consultare il centro per gli orari esatti.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;