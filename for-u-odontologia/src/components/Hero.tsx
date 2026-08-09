import React from 'react';
import { MessageCircle, Clock, Sparkles } from 'lucide-react';
import { clinicConfig, getWhatsAppUrl } from '../config/clinic';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative overflow-hidden pt-6 pb-6 md:pt-14 md:pb-24 bg-white">
      {/* Abstract background ambient glows (champagne, gold, beige) */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#E6C89B]/20 via-[#FAF7F3] to-transparent blur-3xl pointer-events-none animate-ambient-glow" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#C58A45]/10 via-[#FAF7F3] to-transparent blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Content & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            {/* Small uppercase eyebrow text with a thin gold line */}
            <div className="flex items-center gap-4">
              <span className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#B77A38]">
                NOSSO NOVO SITE ESTÁ CHEGANDO
              </span>
              <span className="h-[1px] w-12 bg-[#E6C89B]" aria-hidden="true" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-[1.15] text-[#49382F] font-normal tracking-tight">
              Estamos preparando algo <span className="font-medium text-gold-gradient">especial</span> para você.
            </h1>

            {/* Complementary Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#746861] font-normal leading-relaxed max-w-2xl">
              Enquanto o novo site da For U Odontologia Especializada está sendo carinhosamente criado, nossa equipe continua à disposição para{' '}
              <strong className="text-[#A86E35] font-semibold border-b border-[#E6C89B]/70 pb-0.5">
                cuidar de você e do seu sorriso
              </strong>.
            </p>

            {/* Primary CTA Section */}
            <div className="pt-2 sm:pt-4 w-full sm:w-auto flex flex-col items-start space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 py-4 md:px-10 md:py-4.5 rounded-2xl bg-gold-button text-white font-medium text-base sm:text-lg tracking-wide shadow-lg shadow-[#A86E35]/20 hover:shadow-xl hover:shadow-[#A86E35]/30 hover:-translate-y-0.5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#C58A45] focus:ring-offset-2"
                aria-label="Falar com a gente no WhatsApp"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                <span>Falar com a gente!</span>
              </a>

              {/* Discrete subtext below button */}
              <p className="text-xs sm:text-sm text-[#746861] flex items-center gap-1.5 pl-1 font-light">
                <Clock className="w-3.5 h-3.5 text-[#C58A45]" />
                <span>Responderemos o mais rápido possível.</span>
              </p>
            </div>

            {/* Small luxury features highlight */}
            <div className="pt-4 border-t border-[#FAF7F3] w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#746861]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C58A45]" />
                <span>Atendimento Exclusivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C58A45]" />
                <span>Agendamento Direto</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C58A45]" />
                <span>Ambiente Acolhedor</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Official Logo (Desktop/Tablet Large only - Hidden on Mobile) */}
          <div className="hidden md:flex lg:col-span-5 justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md lg:max-w-none py-8 lg:py-12 flex items-center justify-center">
              {/* Very subtle ambient gold blur background glow without any frame or card */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#E6C89B]/15 blur-3xl pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Main Logo floating freely on white background */}
              <div className="relative z-10 hover:scale-[1.02] transition-transform duration-500 ease-out flex items-center justify-center">
                <Logo size="xl" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
