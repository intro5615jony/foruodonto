import React from 'react';
import { Instagram } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-2.5 sm:py-3 md:py-4 flex flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left: Logo */}
        <a 
          href="/" 
          className="focus:outline-none focus:ring-2 focus:ring-[#C58A45]/40 rounded-lg p-0.5 sm:p-1 transition-opacity hover:opacity-95 shrink-0"
          aria-label="For U - Odontologia Especializada - Página inicial"
        >
          <Logo size="md" />
        </a>

        {/* Right: Instagram social link */}
        <a
          href={clinicConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#E6C89B]/50 bg-[#FAF7F3]/70 hover:bg-[#FAF7F3] hover:border-[#C58A45] transition-all duration-300 text-[11px] sm:text-xs md:text-sm text-[#49382F] shrink-0"
        >
          <span className="text-[#746861] group-hover:text-[#49382F] font-light transition-colors whitespace-nowrap hidden min-[380px]:inline">
            Acompanhe a For U - Odontologia Especializada
          </span>
          <span className="w-px h-3 bg-[#E6C89B]/60 hidden min-[380px]:inline" aria-hidden="true" />
          <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A86E35] group-hover:scale-110 transition-transform duration-300 shrink-0" />
          <span className="font-medium text-[#A86E35] group-hover:text-[#815124] transition-colors whitespace-nowrap">
            {clinicConfig.instagramUser}
          </span>
        </a>
      </div>
    </header>
  );
};
