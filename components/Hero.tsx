import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className={`transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center max-w-4xl`}>
        <h2 className="text-xs font-sans uppercase tracking-[0.4em] mb-8 text-[#1c1917]/50">
          Civil Arms Company
        </h2>
        <h1 className="luxury-serif text-5xl md:text-7xl lg:text-9xl font-light leading-none text-[#1c1917] mb-12">
          Peace is <br/> 
          <span className="italic">Engineered</span>.
        </h1>
        <p className="font-sans text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed text-[#1c1917]/70">
          We provide kinetic instruments and sovereignty assurance for the discerning state actor. 
          Discretion is our currency. Excellence is our baseline.
        </p>
        
        <div className="mt-16 h-[1px] w-24 bg-[#1c1917] mx-auto opacity-20"></div>
        
        <div className="mt-8 flex justify-center gap-12 text-[10px] uppercase tracking-widest text-[#1c1917]/40">
          <span>Est. 2024</span>
          <span>Geneva • Singapore • Dubai</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]"
           style={{
             backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'
           }}>
      </div>
    </section>
  );
};

export default Hero;