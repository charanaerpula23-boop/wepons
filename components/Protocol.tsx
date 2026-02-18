import React, { useState } from 'react';
import { Shield, Globe, Lock, FileText, Scale, Building2 } from 'lucide-react';

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
             Pursuant to the <em>Arms Act, 1959</em> and <em>Arms Rules, 2016</em>, acquisition of Kinetic Instruments by private entities is a privilege, not a right. 
             Possession is contingent upon "Threat Perception" validated by the District Magistrate.
           </p>
           <div className="space-y-2 mt-6 border-t border-[#1c1917]/10 pt-4">
             <div className="flex justify-between">
               <span>Classification</span>
               <span className="font-bold">NPB (Non-Prohibited Bore) Only</span>
             </div>
             <div className="flex justify-between">
               <span>Possession Limit</span>
               <span className="font-bold">Two (2) Units per Licensee</span>
             </div>
             <div className="flex justify-between">
               <span>Prohibited Items</span>
               <span className="font-bold">9mm, 7.62mm, Auto-loading</span>
             </div>
           </div>
        </>
      ),
      stamp: "APPROVED FOR CIVILIAN USE"
    },
    state: {
      title: "State Apparatus",
      ref: "MOD-DAP-2020 // IDDM-PRIORITY",
      body: (
        <>
           <p className="mb-4"><strong>AUTHORITY:</strong> Ministry of Defence (MoD) / MHA.</p>
           <p className="mb-4 text-justify">
             Procurement for State Forces (Army, CAPF, State Police) is governed by the <em>Defence Acquisition Procedure (DAP) 2020</em>. 
             Civil Arms Co. operates under the "Buy (Indian - IDDM)" category, ensuring indigenous sovereignty over critical technologies.
           </p>
           <div className="space-y-2 mt-6 border-t border-[#1c1917]/10 pt-4">
             <div className="flex justify-between">
               <span>Priority Category</span>
               <span className="font-bold">Buy (Indian - IDDM)</span>
             </div>
             <div className="flex justify-between">
               <span>Fast Track</span>
               <span className="font-bold">FTP (Operational Exigency)</span>
             </div>
             <div className="flex justify-between">
               <span>Special Forces</span>
               <span className="font-bold">Restricted Calibers Authorized</span>
             </div>
           </div>
        </>
      ),
      stamp: "RESTRICTED: STATE USE ONLY"
    },
    export: {
      title: "Global Transfer",
      ref: "DGFT-SCOMET-CAT6 // WASSENAAR",
      body: (
        <>
           <p className="mb-4"><strong>AUTHORITY:</strong> DGFT & Dept. of Defence Production.</p>
           <p className="mb-4 text-justify">
             International transfer of munitions falls under <em>SCOMET Category 6</em>. 
             Exports are strictly monitored to align with India's obligations under the <em>Wassenaar Arrangement</em>.
           </p>
           <div className="space-y-2 mt-6 border-t border-[#1c1917]/10 pt-4">
             <div className="flex justify-between">
               <span>Export List</span>
               <span className="font-bold">SCOMET Category 6</span>
             </div>
             <div className="flex justify-between">
               <span>Requirement</span>
               <span className="font-bold">End-User Certificate (EUC)</span>
             </div>
             <div className="flex justify-between">
               <span>Permissible Destinations</span>
               <span className="font-bold">Friendly Foreign Countries (FFC)</span>
             </div>
           </div>
        </>
      ),
      stamp: "EXPORT AUTHORIZED"
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-8 pb-32">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Navigation & Context */}
        <div className="space-y-12">
          <div>
            <h2 className="luxury-serif text-4xl mb-6">Jurisdiction: India</h2>
            <div className="h-[1px] w-12 bg-[#1c1917] mb-6"></div>
            <p className="font-light leading-loose text-justify text-[#1c1917]/80">
              Civil Arms Company operates from the subcontinent, adhering to the rigorous frameworks of the Republic of India. 
              We transform bureaucratic complexity into seamless logistical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
             {/* Civilian Button */}
             <button 
                onClick={() => setActiveSection('civilian')}
                className={`flex gap-4 group text-left transition-all duration-300 ${activeSection === 'civilian' ? 'opacity-100 translate-x-2' : 'opacity-50 hover:opacity-100'}`}
             >
                <Lock className={`w-6 h-6 transition-colors ${activeSection === 'civilian' ? 'text-[#1c1917]' : 'text-[#1c1917]/30'}`} strokeWidth={1} />
                <div>
                   <h3 className={`font-sans text-xs uppercase tracking-widest font-bold mb-1 ${activeSection === 'civilian' ? 'text-[#1c1917]' : 'text-[#1c1917]/60'}`}>Private Entity</h3>
                   <p className="text-[10px] font-light text-[#1c1917]/50">Arms Act 1959 • Individual License</p>
                </div>
             </button>

             {/* State Button */}
             <button 
                onClick={() => setActiveSection('state')}
                className={`flex gap-4 group text-left transition-all duration-300 ${activeSection === 'state' ? 'opacity-100 translate-x-2' : 'opacity-50 hover:opacity-100'}`}
             >
                <Building2 className={`w-6 h-6 transition-colors ${activeSection === 'state' ? 'text-[#1c1917]' : 'text-[#1c1917]/30'}`} strokeWidth={1} />
                <div>
                   <h3 className={`font-sans text-xs uppercase tracking-widest font-bold mb-1 ${activeSection === 'state' ? 'text-[#1c1917]' : 'text-[#1c1917]/60'}`}>State Apparatus</h3>
                   <p className="text-[10px] font-light text-[#1c1917]/50">MoD Procurement • IDDM</p>
                </div>
             </button>

             {/* Export Button */}
             <button 
                onClick={() => setActiveSection('export')}
                className={`flex gap-4 group text-left transition-all duration-300 ${activeSection === 'export' ? 'opacity-100 translate-x-2' : 'opacity-50 hover:opacity-100'}`}
             >
                <Globe className={`w-6 h-6 transition-colors ${activeSection === 'export' ? 'text-[#1c1917]' : 'text-[#1c1917]/30'}`} strokeWidth={1} />
                <div>
                   <h3 className={`font-sans text-xs uppercase tracking-widest font-bold mb-1 ${activeSection === 'export' ? 'text-[#1c1917]' : 'text-[#1c1917]/60'}`}>Global Export</h3>
                   <p className="text-[10px] font-light text-[#1c1917]/50">SCOMET • Wassenaar Arrangement</p>
                </div>
             </button>
          </div>
        </div>

        {/* RIGHT COLUMN: The Dossier Document */}
        <div className="relative h-full min-h-[550px] border border-[#1c1917]/10 p-8 flex flex-col justify-between bg-[#faf9f6] shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
                <FileText className="w-8 h-8 mx-auto mb-4 text-[#1c1917]/40" strokeWidth={0.5} />
                <h3 className="luxury-serif text-2xl transition-all duration-300">{data[activeSection].title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#1c1917]/40 mt-1 font-mono transition-all duration-300">{data[activeSection].ref}</p>
            </div>

            <div className="relative z-10 font-mono text-[10px] text-[#1c1917]/60 leading-relaxed transition-all duration-300 flex-grow pt-8">
                {data[activeSection].body}
            </div>

            <div className="relative z-10 text-center mt-6">
                <div className="border border-[#1c1917] px-4 py-2 inline-block mb-4 opacity-30 -rotate-12">
                   <span className="text-xs font-bold uppercase tracking-widest">{data[activeSection].stamp}</span>
                </div>
                <div className="border-b border-[#1c1917] w-32 mx-auto mb-2"></div>
                <p className="text-[8px] uppercase tracking-widest">Legal Counsel</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Protocol;