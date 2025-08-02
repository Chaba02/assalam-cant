import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Gallery = () => {
  // Placeholder images (in una vera implementazione, queste sarebbero immagini reali)
  const galleryImages = [
    { id: 1, caption: "Preghiera del venerdì", category: "preghiera" },
    { id: 2, caption: "Scuola coranica per bambini", category: "educazione" },
    { id: 3, caption: "Celebrazione Eid al-Fitr", category: "eventi" },
    { id: 4, caption: "Lezioni per adulti", category: "educazione" },
    { id: 5, caption: "Iftar comunitario", category: "eventi" },
    { id: 6, caption: "Centro di preghiera", category: "struttura" }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "Membro della comunità",
      text: "Il Centro Islamico Assalam è diventato la nostra seconda casa. Qui i nostri figli imparano i valori islamici e noi troviamo una comunità accogliente.",
      avatar: "A"
    },
    {
      name: "Fatima Benali",
      role: "Madre di famiglia",
      text: "Sono grata per la scuola coranica. I miei figli stanno crescendo con una forte identità islamica grazie agli insegnamenti ricevuti qui.",
      avatar: "F"
    },
    {
      name: "Omar Hassan",
      role: "Giovane della comunità",
      text: "Le attività giovanili del centro mi hanno aiutato a crescere sia spiritualmente che socialmente. È un luogo dove i giovani musulmani possono prosperare.",
      avatar: "O"
    }
  ];

  return (
    <section className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-elegant text-4xl font-bold text-night-blue mb-4">
            La Nostra Comunità
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Immagini dalla vita del nostro centro e testimonianze dei membri della comunità
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card 
                key={image.id}
                className="overflow-hidden shadow-elevated border-0 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-gold/20 to-night-blue/20 relative overflow-hidden">
                  {/* Placeholder per immagine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-night-blue/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📸</span>
                      </div>
                      <span className="text-sm opacity-90">Immagine</span>
                    </div>
                  </div>
                  
                  {/* Overlay con caption */}
                  <div className="absolute inset-0 bg-night-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="font-semibold">{image.caption}</p>
                      <p className="text-sm opacity-90 capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-elegant text-3xl font-bold text-night-blue text-center mb-8">
            Testimonianze della Comunità
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-white shadow-elevated border-0 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-gold mr-3" />
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-accent rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-night-blue">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gold">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-night-blue/10 to-gold/10 border-0">
            <CardContent className="p-8">
              <h4 className="font-elegant text-2xl font-bold text-night-blue mb-4">
                Unisciti alla Nostra Famiglia
              </h4>
              <p className="text-muted-foreground mb-6">
                Vieni a trovarci e scopri come la nostra comunità può arricchire 
                la tua vita spirituale e sociale.
              </p>
              <div className="font-arabic text-lg text-gold">
                الأخوة في الله
                <div className="text-sm text-muted-foreground mt-1">
                  "Fratellanza in Allah"
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;