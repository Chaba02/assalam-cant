import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Users, Heart, GraduationCap, Calendar, Clock } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Book,
      title: "Preghiere Quotidiane",
      description: "Preghiere comunitarie cinque volte al giorno con imam qualificato",
      schedule: "Tutti i giorni",
      time: "Secondo orari islamici",
      category: "Preghiera"
    },
    {
      icon: GraduationCap,
      title: "Scuola Coranica",
      description: "Lezioni di Corano, arabo e studi islamici per bambini e adulti",
      schedule: "Sabato e Domenica",
      time: "9:00 - 12:00",
      category: "Educazione"
    },
    {
      icon: Users,
      title: "Lezioni per Adulti",
      description: "Studi islamici, fiqh e hadith per approfondire la conoscenza religiosa",
      schedule: "Mercoledì e Venerdì",
      time: "20:30 - 22:00",
      category: "Educazione"
    },
    {
      icon: Heart,
      title: "Supporto Sociale",
      description: "Assistenza alle famiglie bisognose e supporto alla comunità",
      schedule: "Su appuntamento",
      time: "Flessibile",
      category: "Sociale"
    },
    {
      icon: Calendar,
      title: "Celebrazioni Religiose",
      description: "Eid al-Fitr, Eid al-Adha e altre festività islamiche",
      schedule: "Date religiose",
      time: "Varie",
      category: "Eventi"
    },
    {
      icon: Users,
      title: "Incontri Comunitari",
      description: "Riunioni mensili della comunità e eventi di socializzazione",
      schedule: "Primo venerdì del mese",
      time: "19:00 - 21:00",
      category: "Sociale"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Preghiera": return "bg-night-blue text-night-blue-foreground";
      case "Educazione": return "bg-gold text-gold-foreground";
      case "Sociale": return "bg-accent text-accent-foreground";
      case "Eventi": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-elegant text-4xl font-bold text-night-blue mb-4">
            Attività del Centro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Scopri tutte le attività religiose, educative e sociali che organizziamo 
            per servire la nostra comunità musulmana
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            
            return (
              <Card 
                key={index}
                className="bg-white shadow-elevated border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-gradient-to-br from-gold/20 to-accent/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <Badge className={getCategoryColor(activity.category)}>
                      {activity.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="font-elegant text-xl text-night-blue">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-gold" />
                      <span className="font-medium">{activity.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-gold" />
                      <span className="text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-gold/10 to-accent/10 border-0">
            <CardContent className="p-8">
              <h3 className="font-elegant text-2xl font-bold text-night-blue mb-4">
                Interessato a partecipare?
              </h3>
              <p className="text-muted-foreground mb-6">
                Tutte le attività sono aperte alla comunità. Per maggiori informazioni 
                sui programmi specifici, non esitare a contattarci.
              </p>
              <div className="font-arabic text-lg text-gold">
                أهلاً وسهلاً بكم
                <div className="text-sm text-muted-foreground mt-1">
                  "Benvenuti nella nostra casa"
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;