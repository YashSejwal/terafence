import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OurProduct from "../components/OurProduct";
import Partner from "../components/Partner";
import Statistics from "../components/Statistics";
import Pentest from "../components/Pentest";
import working from "../assets/working.gif";

const handleUserInteraction = (e: React.MouseEvent) => {
  e.preventDefault();  
}

const handleContextMenu = (e: React.MouseEvent) => {
  e.preventDefault();  
}


const handleDragStart = (e: React.DragEvent) => {
  e.preventDefault(); // Block drag
}

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full overflow-hidden">
        <header className="relative z-10">
          <Navbar />
        </header>

        <main className="flex-1">
          <HeroSection />
        </main>

        <section className="py-16 w-full">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <OurProduct />
          </div>
        </section>

        <section className="py-16 w-full">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <Statistics />
          </div>
        </section>

        <section className="py-16 w-full">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <Partner />
          </div>
        </section>

        <section className="py-16 w-full">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <Pentest />
          </div>
        </section>

        <section className="w-full py-4">
          <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
            <img src={working} alt="working" className="w-full" onClick={handleUserInteraction} onContextMenu={handleContextMenu} onDragStart={handleDragStart} />
          </div>
        </section>

        <section className="py-16 w-full">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <NewsSection />
          </div>
        </section>
      </div>

      <footer className="text-white w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
