import HeroSection from "@/components/HeroSection";
import PrayerTimes from "@/components/PrayerTimes";
import IslamicCalendar from "@/components/IslamicCalendar";
import Activities from "@/components/Activities";
import Donations from "@/components/Donations";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PrayerTimes />
      <IslamicCalendar />
      <Activities />
      <Donations />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
