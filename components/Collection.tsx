import React from 'react';
import { LOTS } from '../constants';

const Collection: React.FC = () => {
  return (
    <div className="min-h-screen w-full pt-32 pb-48 px-6 md:px-16 lg:px-32 relative">
      {/* Background line decoration */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-[#1c1917]/5 hidden md:block"></div>
      <div className="absolute top-0 right-12 w-[1px] h-full bg-[#1c1917]/5 hidden md:block"></div>

      <header className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-[#1c1917] pb-6">
        <div>
            <h2 className="luxury-serif text-5xl md:text-7xl text-[#1c1917] leading-none">The Collection</h2>
            <p className="font-serif italic text-xl text-[#1c1917]/50 mt-2">FY 2024-2025</p>
        </div>
        <div className="text-right mt-8 md:mt-0">
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#1c1917]">Catalogue Ref: CAC-WINT-24</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#1c1917]/50">Status: Allocation Only</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {LOTS.map((lot) => (
          <div key={lot.id} className="group relative flex flex-col">
            
            {/* Image Area - No box, floating blend */}
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
               {/* Background for image to ensure multiply works if image has white bg */}
               <div className="absolute inset-0 bg-[#e8e6e1] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
               
               <img 
                 src={lot.image} 
                 alt={lot.name}
                 className="w-full h-full object-contain p-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                            grayscale sepia-[.3] contrast-[1.1] opacity-90 mix-blend-multiply
                            group-hover:grayscale-0 group-hover:sepia-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-105"
               />
               
               {/* ID Tag */}
               <div className="absolute top-0 left-0 font-mono text-[9px] text-[#1c1917]/40 border-b border-[#1c1917]/20 pb-1">
                 {lot.id}
               </div>
            </div>

            {/* Typography */}
            <div className="flex justify-between items-baseline border-b border-[#1c1917]/10 pb-4 group-hover:border-[#1c1917] transition-colors duration-500">
                <h3 className="luxury-serif text-3xl text-[#1c1917]">{lot.name}</h3>
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#1c1917]/40 group-hover:text-[#1c1917] transition-colors">
                    {lot.category}
                </span>
            </div>

            {/* Hidden details that slide down */}
            <div className="pt-4 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                <p className="font-serif italic text-lg leading-snug text-[#1c1917]/70 mb-4">
                    {lot.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                    {lot.details.slice(0, 2).map((d, i) => (
                        <span key={i} className="text-[9px] font-sans uppercase tracking-wider border border-[#1c1917]/20 px-2 py-1 text-[#1c1917]/60">
                            {d}
                        </span>
                    ))}
                    <button className="ml-auto text-[9px] font-bold uppercase underline decoration-[#1c1917]/30 hover:decoration-[#1c1917] tracking-widest">
                        Inquire
                    </button>
                </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;