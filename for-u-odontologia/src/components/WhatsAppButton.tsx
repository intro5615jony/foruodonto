import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { clinicConfig, getWhatsAppUrl } from '../config/clinic';

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-gold-button text-white shadow-xl shadow-[#A86E35]/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C58A45] focus:ring-offset-2 animate-bounce-short"
      aria-label={`Falar com ${clinicConfig.name} no WhatsApp`}
    >
      <MessageCircle className="w-5 h-5 text-white" />
      <span className="text-xs sm:text-sm font-medium tracking-wide pr-1 hidden sm:inline-block">
        Falar no WhatsApp
      </span>
    </a>
  );
};
