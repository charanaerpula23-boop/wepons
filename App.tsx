import React, { useState } from 'react';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Concierge from './components/Concierge';
import Protocol from './components/Protocol';
import Navigation from './components/Navigation';
import { Section } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.ESSENCE);

  const renderSection = () => {
    switch (currentSection) {
      case Section.ESSENCE:
        return <Hero />;
      case Section.COLLECTION:
        return <Collection />;
      case Section.CONCIERGE:
        return <Concierge />;
      case Section.PROTOCOL:
        return <Protocol />;
      default:
        return <Hero />;
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#faf9f6] text-[#1c1917] selection:bg-[#1c1917] selection:text-[#faf9f6] transition-colors duration-1000">
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 pointer-events-none mix-blend-difference text-[#faf9f6]">
         <div className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">CAC • Global</div>
         <div className="text-[10px] font-sans uppercase tracking-[0.2em]">Secure Connection</div>
      </div>

      <div className="animate-fade-in">
        {renderSection()}
      </div>

      <Navigation currentSection={currentSection} setSection={setCurrentSection} />
    </main>
  );
};

export default App;