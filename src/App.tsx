import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import HeartwordsSection from './components/HeartwordsSection';
import MomentsSection from './components/MomentsSection';
import GamesSection from './components/GamesSection';
import FutureSection from './components/FutureSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "1 Ano com meu amor!!!! ❤️❤️❤️❤️";
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Floating hearts particles in background */}
      <ParticlesBackground />
      
      {/* Main content sections */}
      <main>
        <HeroSection />
        <HeartwordsSection />
        <MomentsSection />
        <GamesSection />
        <FutureSection />
        <Footer />
      </main>
      
      {/* Navigation */}
      <Navigation />
    </div>
  );
}

export default App;