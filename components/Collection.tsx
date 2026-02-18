import React from 'react';
import { LOTS } from '../constants';

const Collection: React.FC = () => {
  return (
    <div className="min-h-screen w-full pt-24 pb-32 px-4 md:px-12 lg:px-24">
      <header className="mb-20 text-center">
        <h2 className="luxury-serif text-4xl md:text-5xl text-[#1c1917] mb-4">The Collection</h2>
        <p className="font-sans text-xs uppercase tracking-widest text-[#1c1917]/50">Available for Immediate Allocation</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {LOTS.map((lot, index) => (
          <div key={lot.id} className="group relative cursor-crosshair">
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden bg-[#1c1917]/5 relative mb-6 flex items-center justify-center">
               <img 
                 src={lot.image} 
                 alt={lot.name}
                 className="w-full h-full object-contain p-6 transition-all duration-1000 ease-out 
                            grayscale contrast-125 brightness-95 opacity-90
                            group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105"
               />
               <div className="absolute top-4 right-4 text-[10px] font-sans bg-[#1c1917] text-[#faf9f6] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                 {lot.id}
               </div>
            </div>

            {/* Info */}
            <div className="text-center group-hover:translate-y-[-5px] transition-transform duration-500 relative z-20">
              <h3 className="luxury-serif text-2xl mb-1 text-[#1c1917]">{lot.name}</h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#1c1917]/40 mb-3">{lot.category}</p>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <p className="text-sm font-light text-[#1c1917]/70 mb-4 px-4">{lot.description}</p>
                  <div className="flex justify-center gap-4 mb-4 flex-wrap px-4">
                    {lot.details.map((detail, i) => (
                      <span key={i} className="text-[9px] border border-[#1c1917]/20 px-2 py-1 text-[#1c1917]/60 whitespace-nowrap">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <button className="text-[10px] uppercase underline underline-offset-4 decoration-[#1c1917]/30 hover:decoration-[#1c1917] mb-2">
                    Request Dossier
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;