import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Awards from "@/components/Awards";
import Media from "@/components/Media";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Research />
        <Awards />
        <Media />
      </main>
      <Footer />
    </div>
  );
};

export default Index;