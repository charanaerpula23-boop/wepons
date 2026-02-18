import React, { useState } from 'react';
import { FileText } from 'lucide-react';

type ProtocolSection = 'civilian' | 'state' | 'export';

const Protocol: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ProtocolSection>('export');

  const data = {
    civilian: {
      title: "Private Entity Access",
      ref: "MHA-DIR-001 // ARMS-1959",
      body: (
        <>
           <p className="mb-4"><strong>AUTHORITY:</strong> Ministry of Home Affairs, Govt. of India.</p>
           <p className="mb-4 text-justify">
             Pursuant to the <em>Arms Act, 1959</em> and <em>Arms Rules, 2016</em>, acquisition of Kinetic Instruments by private entities is a privilege. 
             Possession is contingent upon "Threat Perception" validated by the District Magistrate.
           </p>
           <div className="space-y-4 mt-8 border-t border-[#1c1917]/20 pt-6">
             <div className="flex justify-between items-center">
               <span className="uppercase tracking-widest text-[9px]">Authorized Series</span>
               <span className="font-serif italic text-lg">Vikram Estate (NPB)</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="uppercase tracking-widest text-[9px]">Possession Limit</span>
               <span className="font-serif italic text-lg">Two (2) Units</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="uppercase tracking-widest text-[9px]">Prohibited</span>
               <span className="font-serif italic text-lg">Legion, Phalanx</span>
             </div>
           </div>
        </>
      ),
      stamp: "APPROVED"
    },
    state: {
      title: "State Apparatus",
      ref: "MOD-DAP-2020 // IDDM-PRIORITY",
      body: (
        <>
           <p className="mb-4"><strong>AUTHORITY:</strong> Ministry of Defence (MoD) / MHA.</p>
           <p className="mb-4 text-justify">
             Procurement for State Forces (Army, CAPF, State Police) is governed by the <em>Defence Acquisition Procedure (DAP) 2020</em>. 
             Civil Arms Co. prioritizes the "Buy (Indian - IDDM)" category for the <em>Vikram Legion</em> and <em>Vikram Aether</em> platforms.
           </p>
           <div className="space-y-4 mt-8 border-t border-[#1c1917]/20 pt-6">
             <div className="flex justify-between items-center">
               <span className="uppercase tracking-widest text-[9px]">Priority Assets</span>
               <span className="font-serif italic text-lg">Legion, Aether</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="uppercase tracking-widest text-[9px]">Fast Track</span>
               <span className="font-serif italic text-lg">FTP (Exigency)</span>
             </div>
           </div>
        </>
      ),
      stamp: "RESTRICTED"
    },
    export: {
      title: "Global Transfer",
      ref: "DGFT-SCOMET-CAT6 // WASSENAAR",
      body: (
        <>
           <p className="mb-4"><strong>AUTHORITY:</strong> DGFT & Dept. of Defence Production.</p>
           <p className="mb-4 text-justify">
             International transfer of high-value assets like the <em>Vikram Monarch</em> and <em>Vikram Trident</em> falls under <em>SCOMET Category 6</em>. 
             Exports are strictly monitored to align with India's obligations under the <em>Wassenaar Arrangement</em>.
           </p>
           <div className="space-y-4 mt-8 border-t border-[#1c1917]/20 pt-6">
             <div className="flex justify-between items-center">
               <span className="uppercase tracking-widest text-[9px]">Controlled Items</span>
               <span className="font-serif italic text-lg">Monarch, Trident</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="uppercase tracking-widest text-[9px]">Verification</span>
               <span className="font-serif italic text-lg">EUC Required</span>
             </div>
           </div>
        </>
      ),
      stamp: "AUTHORIZED"
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-8 pb-32 bg-[#e8e6e1] bg-opacity-20">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT COLUMN: Navigation & Context */}
        <div className="lg:col-span-5 space-y-16 sticky top-24">
          <div>
            <h2 className="luxury-serif text-5xl mb-8 leading-[0.9]">Jurisdictional<br/>Framework</h2>
            <div className="h-[2px] w-16 bg-[#1c1917] mb-8"></div>
            <p className="font-serif italic text-xl text-[#1c1917]/70 leading-relaxed">
              We operate within the ironclad regulations of the Republic of India. Bureaucracy is not an obstacle; it is the vetting process for the worthy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
             {(['civilian', 'state', 'export'] as ProtocolSection[]).map((key) => (
                 <button 
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`group text-left transition-all duration-500 border-l-2 pl-6 py-2 
                        ${activeSection === key ? 'border-[#1c1917]' : 'border-[#1c1917]/10 hover:border-[#1c1917]/40'}`}
                 >
                    <h3 className={`font-sans text-xs uppercase tracking-[0.2em] mb-1 transition-colors ${activeSection === key ? 'text-[#1c1917]' : 'text-[#1c1917]/40'}`}>
                        {key === 'civilian' ? 'Private Entity' : key === 'state' ? 'State Apparatus' : 'Global Export'}
                    </h3>
                 </button>
             ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The Dossier Document */}
        <div className="lg:col-span-7 relative">
            
            {/* Paper Sheet */}
            <div className="relative bg-[#faf9f6] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-12 md:p-16 min-h-[700px] flex flex-col justify-between transition-all duration-500">
                
                {/* Texture overlay for paper */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12 opacity-50">
                        <FileText strokeWidth={1} />
                        <span className="font-mono text-[9px] border border-[#1c1917] px-2 py-1">TOP SECRET</span>
                    </div>

                    <h3 className="luxury-serif text-4xl mb-2">{data[activeSection].title}</h3>
                    <p className="font-mono text-[9px] text-[#1c1917]/50 mb-12">{data[activeSection].ref}</p>

                    <div className="font-light text-sm leading-8 text-justify text-[#1c1917]/80">
                        {data[activeSection].body}
                    </div>
                </div>

                <div className="relative z-10 mt-16 flex justify-end">
                    <div className="text-center relative">
                        <div className="absolute inset-0 border-[3px] border-[#1c1917] rounded opacity-20 rotate-[-8deg]"></div>
                        <div className="px-6 py-3 rotate-[-8deg] relative">
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1c1917]/80">{data[activeSection].stamp}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Stacked paper effect */}
            <div className="absolute top-4 left-4 w-full h-full bg-[#faf9f6] shadow-lg -z-10 border border-[#1c1917]/5"></div>
            <div className="absolute top-8 left-8 w-full h-full bg-[#faf9f6] shadow-lg -z-20 border border-[#1c1917]/5"></div>

        </div>

      </div>
    </div>
  );
};

export default Protocol;