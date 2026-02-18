import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Background Texture - Concrete/Stone feel */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none" 
           style={{
             backgroundImage: `url("https://www.transparenttextures.com/patterns/concrete-wall.png")`,
             backgroundSize: 'cover'
           }}>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center max-w-6xl`}>
        <div className="flex flex-col items-center gap-6">
            <h2 className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.5em] text-[#1c1917]/60 border-b border-[#1c1917]/20 pb-4 px-12">
            State-Grade Kinetic Solutions
            </h2>
            
            <h1 className="luxury-serif text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.85] text-[#1c1917] tracking-tighter">
            Civil <span className="italic font-thin text-[#1c1917]/80">Arms</span> <br/> 
            Company
            </h1>

            <div className="mt-12 max-w-lg text-center space-y-6">
                <p className="font-serif italic text-2xl text-[#1c1917]/80">
                    "Peace is engineered."
                </p>
                <p className="font-sans text-xs font-light leading-loose text-[#1c1917]/60 text-justify border-l border-[#1c1917]/20 pl-6 ml-6">
                    We provide the instruments of sovereignty to discerning state actors and private entities. 
                    Merging brutalist efficiency with artisanal craftsmanship. 
                    Discretion is our currency. Excellence is our baseline.
                </p>
            </div>
        </div>

        <div className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#1c1917]/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;