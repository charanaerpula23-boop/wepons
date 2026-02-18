import React from 'react';
import { Section } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavigationProps {
  currentSection: Section;
  setSection: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, setSection }) => {
  return (
    <div className="fixed bottom-10 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="bg-[#1c1917] text-[#faf9f6] px-2 py-2 rounded-full shadow-2xl pointer-events-auto flex space-x-1 items-center backdrop-blur-md bg-opacity-95 border border-[#faf9f6]/10">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => setSection(item as Section)}
            className={`
              px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-500 font-medium
              ${currentSection === item 
                ? 'bg-[#faf9f6] text-[#1c1917] font-bold' 
                : 'text-[#faf9f6]/60 hover:text-[#faf9f6] hover:bg-[#faf9f6]/10'}
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;