import React from 'react';
import { clinicConfig, getWhatsAppUrl, getMailtoUrl } from '../config/clinic';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAF7F3] border-t border-[#E6C89B]/30 pt-12 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center space-y-6">
        
        {/* Brand Title */}
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-[#49382F]">
            {clinicConfig.name}
          </h2>
          <p className="text-xs text-[#746861] tracking-widest uppercase font-medium">
            Excelência & cuidados
          </p>
        </div>

        {/* Discrete quick links */}
        <nav 
          aria-label="Navegação do rodapé" 
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#746861]"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A86E35] transition-colors focus:outline-none focus:underline"
          >
            WhatsApp
          </a>
          <span className="text-[#E6C89B]" aria-hidden="true">•</span>
          <a
            href={getMailtoUrl()}
            className="hover:text-[#A86E35] transition-colors focus:outline-none focus:underline"
          >
            E-mail
          </a>
          <span className="text-[#E6C89B]" aria-hidden="true">•</span>
          <a
            href={clinicConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A86E35] transition-colors focus:outline-none focus:underline"
          >
            Instagram
          </a>
        </nav>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#E6C89B] to-transparent my-2" aria-hidden="true" />

        {/* Copyright notice */}
        <p className="text-xs text-[#746861]/80 font-light">
          © {currentYear} {clinicConfig.name}. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
};
